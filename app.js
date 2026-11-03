// Right, Close, Dud: a small offline game in a lesson-app layout.
// Every screen: one task, a bottom action bar. After "Check", the bar turns into a green or red feedback sheet.
// Ages 12-15: Word hunt (if a trick word) -> pick the Right answer -> bet -> spot the Close one -> feedback -> explain.
// Ages 16-19: Word hunt (if a trick word) -> sort every answer -> bet -> feedback -> explain.
// Levels: everyone starts at Level 1 in each subject. 3 right in a row moves up. 2 wrong in a row moves down.
// Progress is stored on the device. In the data, type "trap" is the Close answer.

(function () {
  'use strict';

  var ITEMS = window.ITEMS || [];
  var SESSION_SIZE = { '12-15': 6, '16-19': 8 };
  var UP_AFTER = 3, DOWN_AFTER = 2, MAX_LEVEL = 3;
  var INTERVALS = [0, 1, 2, 4, 8, 16];
  var SCORE = { 1: [1, 0], 2: [2, -2], 3: [3, -6] };
  var BET_NAMES = { 1: 'Guessing', 2: 'Fairly sure', 3: 'Very sure' };
  var LABELS = { correct: 'Right', trap: 'Close', dud: 'Dud' };
  var CLS = { correct: 'right', trap: 'close', dud: 'dud' };
  var TRACKS = { core: 'Core subjects', science: 'Science track' };
  var STORE_KEY = 'answer-sorter-v1';
  var MAX_LOG = 3000;
  var FRAMED = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
  var ICON = {
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/></svg>'
  };

  // ---------- storage ----------
  function freshStore() { return { age: null, track: 'core', subject: null, sessions: 0, points: 0, cards: {}, mis: {}, log: [], levels: {} }; }
  function loadStore() {
    var s = null;
    try { var raw = localStorage.getItem(STORE_KEY); if (raw) s = JSON.parse(raw); } catch (e) { s = null; }
    var f = freshStore();
    if (!s || !s.cards) return f;
    Object.keys(f).forEach(function (k) { if (s[k] === undefined) s[k] = f[k]; });
    return s;
  }
  var store = loadStore();
  function save() {
    if (store.log.length > MAX_LOG) store.log = store.log.slice(-MAX_LOG);
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* play without saving */ }
  }

  // ---------- helpers ----------
  var app = document.getElementById('app');
  function h(tag, props, kids) {
    var el = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }
  // Renders one screen: the main content, then the bottom action bar (if any).
  function show(kids, bar) {
    app.innerHTML = '';
    var main = h('main', { class: 'screen' }, kids);
    app.appendChild(main);
    if (bar) app.appendChild(bar);
    try { window.scrollTo(0, 0); } catch (e) { /* ignore */ }
    var first = main.querySelector('h1, h2');
    if (first) { first.setAttribute('tabindex', '-1'); try { first.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
  }
  function actionBar(kids, mood) { return h('div', { class: 'actionbar' + (mood ? ' ' + mood : '') }, kids); }
  // Tap once to arm, tap again within 3 seconds to confirm. No pop-up dialogs.
  function confirmTap(btn, armedText, action, armedClass) {
    var base = btn.innerHTML, armed = false, timer = null;
    btn.addEventListener('click', function () {
      if (armed) { clearTimeout(timer); action(); return; }
      armed = true;
      if (armedClass) btn.classList.add(armedClass); else btn.textContent = armedText;
      btn.setAttribute('aria-label', armedText);
      timer = setTimeout(function () { armed = false; btn.innerHTML = base; if (armedClass) btn.classList.remove(armedClass); }, 3000);
    });
    return btn;
  }
  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function unique(list) { return list.filter(function (x, i) { return list.indexOf(x) === i; }); }
  function norm(word) { return String(word).toLowerCase().replace(/[^a-z0-9\/₂²]/g, ''); }
  function pct(n, d) { return d ? Math.round((100 * n) / d) + '%' : '-'; }
  function card(it) { return store.cards[it.id] || { box: 1, last: -99 }; }
  function isDue(it) { var c = card(it); return store.sessions - c.last >= INTERVALS[c.box]; }
  function itemLevel(it) { return (it.level && it.level[store.age]) || 2; }
  function trackOf(it) { return it.track || 'core'; }
  function young() { return store.age === '12-15'; }
  function signed(n) { return (n > 0 ? '+' : '') + n; }

  function visibleItems() {
    return ITEMS.filter(function (it) {
      if (it.ages.indexOf(store.age) < 0) return false;
      if (store.age === '16-19' && store.track === 'core' && trackOf(it) !== 'core') return false;
      return true;
    });
  }
  function subjects() { return unique(visibleItems().map(function (it) { return it.subject; })); }
  function poolFor(subject) { return visibleItems().filter(function (it) { return it.subject === subject; }); }
  function fixSubject() { var list = subjects(); if (list.indexOf(store.subject) < 0) store.subject = list[0] || null; }

  // ---------- levels ----------
  function levelState(subject) {
    var k = store.age + '|' + subject;
    if (!store.levels[k]) store.levels[k] = { level: 1, up: 0, down: 0 };
    return store.levels[k];
  }
  function updateLevel(subject, right) {
    var s = levelState(subject);
    if (right) { s.up += 1; s.down = 0; if (s.up >= UP_AFTER && s.level < MAX_LEVEL) { s.level += 1; s.up = 0; return 'up'; } }
    else { s.down += 1; s.up = 0; if (s.down >= DOWN_AFTER && s.level > 1) { s.level -= 1; s.down = 0; return 'down'; } }
    return null;
  }

  // ---------- home ----------
  function chips(options, current, onPick) {
    var row = h('div', { class: 'chips', role: 'group' });
    options.forEach(function (o) {
      row.appendChild(h('button', { class: 'chip' + (o.value === current ? ' on' : ''), 'aria-pressed': String(o.value === current), text: o.label,
        onclick: function () { onPick(o.value); } }));
    });
    return row;
  }
  function brandBar() {
    return h('div', { class: 'brandbar' }, [
      h('h1', { class: 'brand' }, [h('span', { text: 'Right, ' }), h('span', { text: 'Close, ' }), h('span', { text: 'Dud' })]),
      h('span', { class: 'xp', 'aria-label': store.points + ' points in total' }, [h('i'), String(store.points)])
    ]);
  }
  function home() {
    fixSubject(); save();
    var kids = [brandBar()];
    kids.push(h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Your age' }),
      chips([{ value: '12-15', label: 'Ages 12-15' }, { value: '16-19', label: 'Ages 16-19' }], store.age, function (v) { store.age = v; fixSubject(); save(); home(); })]));
    if (store.age === '16-19') {
      kids.push(h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Your subjects' }),
        chips([{ value: 'core', label: TRACKS.core }, { value: 'science', label: TRACKS.science }], store.track, function (v) { store.track = v; fixSubject(); save(); home(); }),
        h('p', { class: 'muted', text: 'Science track adds advanced math, physics, chemistry and biology.' })]));
    }
    if (!store.age) {
      kids.push(h('div', { class: 'panel' }, [h('p', { class: 'prompt', text: 'Which answer only looks right?' }),
        h('p', { class: 'muted', text: 'Find the Right one. Catch the Close one. Skip the Dud. Pick your age group to start.' })]));
      show(kids, null);
      return;
    }
    kids.push(h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Subject' }),
      chips(subjects().map(function (s) { return { value: s, label: s }; }), store.subject, function (v) { store.subject = v; save(); home(); })]));

    var lv = levelState(store.subject).level, pool = poolFor(store.subject);
    kids.push(h('div', { class: 'unit' }, [h('span', { class: 'eyebrow', text: store.subject + ', ages ' + store.age }),
      h('b', { text: 'Level ' + lv + ' of 3' }), h('span', { text: pool.length + ' questions. Win 3 in a row to level up.' })]));
    var path = h('div', { class: 'path' });
    [1, 2, 3].forEach(function (n) {
      var state = n < lv ? 'done' : n === lv ? 'now' : 'locked';
      var node = h('button', { class: 'node' + (state === 'done' ? ' done' : state === 'now' ? ' now' : ''),
        'aria-label': 'Level ' + n + (state === 'done' ? ', done' : state === 'locked' ? ', locked' : ', start'),
        html: state === 'done' ? ICON.check : state === 'locked' ? ICON.lock : ICON.star,
        disabled: state === 'locked', onclick: state === 'locked' ? null : startSession });
      path.appendChild(h('div', { class: 'node-wrap' }, [state === 'now' ? h('span', { class: 'bubble', text: 'START' }) : null, node,
        h('span', { class: 'node-label', text: 'Level ' + n })]));
    });
    kids.push(path);
    kids.push(h('div', { class: 'row' }, [
      h('button', { class: 'btn ghost', text: 'Progress', onclick: progress }),
      h('button', { class: 'btn ghost', text: 'Print', onclick: printView }),
      h('button', { class: 'btn ghost', text: 'Export', onclick: exportCSV })
    ]));
    kids.push(confirmTap(h('button', { class: 'linkbtn', text: 'Reset progress' }), 'Tap again to delete all progress',
      function () { var a = store.age, t = store.track; store = freshStore(); store.age = a; store.track = t; save(); home(); }));
    show(kids, actionBar([h('button', { class: 'btn', text: 'Start a round', disabled: pool.length === 0, onclick: startSession })]));
  }

  // ---------- session ----------
  var sess = null;
  function pickItems(subject) {
    var lvl = levelState(subject).level, size = SESSION_SIZE[store.age];
    var rank = function (it) { var d = itemLevel(it) - lvl; return d === 0 ? 0 : (d < 0 ? -2 * d - 1 : 2 * d); };
    var chosen = shuffle(poolFor(subject)).sort(function (a, b) {
      return (rank(a) - rank(b)) || ((isDue(a) ? 0 : 1) - (isDue(b) ? 0 : 1)) || (card(a).box - card(b).box);
    }).slice(0, size);
    var out = [];
    [1, 2, 3].forEach(function (L) { out = out.concat(mixTopics(chosen.filter(function (it) { return itemLevel(it) === L; }))); });
    return out;
  }
  function mixTopics(list) {
    var out = [], left = shuffle(list);
    while (left.length) {
      var last = out.length ? out[out.length - 1].topic : null, idx = 0;
      for (var i = 0; i < left.length; i++) { if (left[i].topic !== last) { idx = i; break; } }
      out.push(left.splice(idx, 1)[0]);
    }
    return out;
  }
  function startSession() {
    store.sessions += 1; save();
    sess = { n: store.sessions, subject: store.subject, items: pickItems(store.subject), i: 0, points: 0, right: 0, sure: 0, sureWrong: 0, ups: 0, done: 0 };
    nextItem();
  }

  // ---------- lesson screens ----------
  function topBar() {
    var frac = sess.items.length ? sess.done / sess.items.length : 0;
    return h('div', { class: 'topbar noprint' }, [
      confirmTap(h('button', { class: 'x', 'aria-label': 'Quit round', html: ICON.x }), 'Tap again to quit', endSession, 'armed'),
      h('div', { class: 'track', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(sess.items.length), 'aria-valuenow': String(sess.done),
        'aria-label': 'Round progress' }, [h('div', { class: 'fill', style: 'width:' + Math.round(frac * 100) + '%' })]),
      h('span', { class: 'pts', text: sess.points + ' pts' })
    ]);
  }
  function stepHead(eyebrow, it) {
    return h('div', { class: 'stack' }, [
      h('p', { class: 'eyebrow' }, [eyebrow + '  ', h('span', { class: 'tag-level', text: 'LEVEL ' + itemLevel(it) })]),
      h('h2', { class: 'prompt', text: it.stem })
    ]);
  }
  // A list of tiles where one can be selected. Calls onChange(index) on select.
  function tileList(items, render, onChange, cls) {
    var box = h('div', { class: cls || 'tiles', role: 'radiogroup' });
    items.forEach(function (x, idx) {
      var t = h('button', { class: 'tile', role: 'radio', 'aria-checked': 'false', onclick: function () {
        Array.prototype.forEach.call(box.children, function (b) { var on = b === t; b.classList.toggle('sel', on); b.setAttribute('aria-checked', String(on)); });
        onChange(idx);
      } }, render(x));
      box.appendChild(t);
    });
    return box;
  }
  function lockTiles(box) { Array.prototype.forEach.call(box.children, function (b) { b.disabled = true; }); }

  function visibleAnswers(it) {
    if (!young()) return it.answers.slice();
    var pick = function (type) { return it.answers.filter(function (a) { return a.type === type; }); };
    return pick('correct').concat(shuffle(pick('trap')).slice(0, 1), pick('dud'));
  }
  function nextItem() {
    var it = sess.items[sess.i];
    if (!it) return endSession();
    var ctx = { it: it, answers: shuffle(visibleAnswers(it)), labels: {}, bet: null, scan: null, chosen: null };
    var scanOn = !!it.target && (young() || sess.n <= 6 || Math.random() < 0.3);
    if (scanOn) scanStep(ctx); else answerStep(ctx);
  }
  function answerStep(ctx) { if (young()) pickStep(ctx); else sortStep(ctx); }

  // Word hunt: select a word, Check, see green or red sheet, Continue.
  function scanStep(ctx) {
    var it = ctx.it, target = norm(it.target), sel = null;
    var words = it.stem.split(/\s+/);
    var check = h('button', { class: 'btn', text: 'Check', disabled: true });
    var box = tileList(words, function (w) { return [w]; }, function (idx) { sel = idx; check.disabled = false; }, 'words');
    check.addEventListener('click', function () {
      ctx.scan = norm(words[sel]) === target;
      lockTiles(box);
      Array.prototype.forEach.call(box.children, function (b, i) { if (norm(words[i]) === target) { b.classList.remove('sel'); b.classList.add('t-right'); } });
      app.replaceChild(sheet(ctx.scan, ctx.scan ? 'Good eye!' : 'Look again.',
        [ctx.scan ? 'That word tells you what to find.' : 'The key word is "' + it.target + '". It changes what the question wants.'],
        function () { answerStep(ctx); }), app.lastChild);
    });
    show([topBar(), h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Word hunt' }),
      h('h2', { class: 'prompt', text: 'Tap the word that changes what the question wants.' })]), box], actionBar([check]));
  }

  // Ages 12-15: pick the Right answer.
  function pickStep(ctx) {
    var sel = null;
    var next = h('button', { class: 'btn', text: 'Next', disabled: true, onclick: function () {
      ctx.labels = {}; ctx.labels[sel] = 'correct'; ctx.chosen = ctx.answers[sel].text; betStep(ctx);
    } });
    show([topBar(), stepHead('Pick the Right answer', ctx.it),
      tileList(ctx.answers, function (a) { return [a.text]; }, function (idx) { sel = idx; next.disabled = false; })], actionBar([next]));
  }

  // Ages 16-19: sort every answer.
  function sortStep(ctx) {
    var next = h('button', { class: 'btn', text: 'Next', disabled: true, onclick: function () {
      ctx.answers.forEach(function (a, i) { if (ctx.labels[i] === 'correct') ctx.chosen = a.text; });
      betStep(ctx);
    } });
    var rows = h('div', { class: 'tiles' });
    ctx.answers.forEach(function (a, idx) {
      var seg = h('div', { class: 'seg', role: 'group', 'aria-label': 'Type for: ' + a.text });
      ['correct', 'trap', 'dud'].forEach(function (lab) {
        seg.appendChild(h('button', { class: 's-' + CLS[lab], 'data-type': lab, 'aria-pressed': 'false', text: LABELS[lab], onclick: function (ev) {
          ctx.labels[idx] = lab;
          Array.prototype.forEach.call(seg.children, function (b) { var on = b === ev.currentTarget; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
          var n = 0; Object.keys(ctx.labels).forEach(function (k) { if (ctx.labels[k] === 'correct') n++; });
          next.disabled = Object.keys(ctx.labels).length < ctx.answers.length || n !== 1;
        } }));
      });
      rows.appendChild(h('div', { class: 'sortcard' }, [h('p', { class: 'atext', text: a.text }), seg]));
    });
    show([topBar(), stepHead('Sort it: Right, Close or Dud', ctx.it), h('p', { class: 'muted', text: 'Only one answer is Right.' }), rows], actionBar([next]));
  }

  // Bet, after choosing.
  function betStep(ctx) {
    var sel = null;
    var lock = h('button', { class: 'btn', text: 'Lock it in', disabled: true, onclick: function () {
      ctx.bet = sel + 1;
      if (young()) closeStep(ctx); else feedbackStep(ctx);
    } });
    var bets = tileList([1, 2, 3], function (b) {
      var s = SCORE[b];
      return [h('b', { text: 'x' + b }), h('span', { text: BET_NAMES[b] }), h('small', { text: signed(s[0]) + ' / ' + (s[1] === 0 ? '0' : s[1]) })];
    }, function (idx) { sel = idx; lock.disabled = false; }, 'bets');
    show([topBar(), h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Bet your points' }), h('h2', { class: 'prompt', text: 'How sure are you?' })]),
      h('div', { class: 'chosen' }, [h('p', { class: 'muted', text: 'You picked' }), h('p', { text: ctx.chosen })]),
      bets, h('p', { class: 'muted', text: young() ? 'Right: you win the first number. Wrong: you lose the second. Your points never go below zero.' :
        'Right: you win the first number. Wrong: you lose the second. Bet x3 only if you are more than 80% sure.' })], actionBar([lock]));
  }

  // Ages 12-15: spot the Close answer among the rest.
  function closeStep(ctx) {
    var rest = [], sel = null;
    ctx.answers.forEach(function (a, i) { if (ctx.labels[i] !== 'correct') rest.push(i); });
    var check = h('button', { class: 'btn', text: 'Check', disabled: true, onclick: function () {
      rest.forEach(function (i, k) { ctx.labels[i] = k === sel ? 'trap' : 'dud'; });
      feedbackStep(ctx);
    } });
    show([topBar(), stepHead('Spot the Close one', ctx.it), h('p', { class: 'muted', text: 'One of these looks right but is wrong.' }),
      tileList(rest.map(function (i) { return ctx.answers[i]; }), function (a) { return [a.text]; }, function (idx) { sel = idx; check.disabled = false; })], actionBar([check]));
  }

  // Green or red sheet in place of the action bar.
  function sheet(ok, head, lines, onContinue, extra) {
    return actionBar([
      h('div', { class: 'sheet-head', role: 'status' }, [h('span', { class: 'badge-ic', html: ok ? ICON.check : ICON.x }), h('b', { text: head })]),
      h('div', { class: 'sheet-body' }, lines.map(function (l) { return typeof l === 'string' ? h('p', { text: l }) : l; })),
      extra || null,
      h('button', { class: 'btn ' + (ok ? 'go-right' : 'go-wrong'), text: 'Continue', onclick: onContinue })
    ], ok ? 'ok' : 'bad');
  }

  function feedbackStep(ctx) {
    var it = ctx.it;
    var right = ctx.answers.every(function (a, i) { return a.type === 'correct' ? ctx.labels[i] === 'correct' : ctx.labels[i] !== 'correct'; });
    var closeFound = ctx.answers.every(function (a, i) { return a.type !== 'trap' || ctx.labels[i] === 'trap'; });
    var s = SCORE[ctx.bet], before = sess.points;
    sess.points += right ? s[0] : s[1];
    if (young() && sess.points < 0) sess.points = 0;
    var delta = sess.points - before;
    store.points += delta;
    if (young() && store.points < 0) store.points = 0;
    ctx.right = right;
    if (right) sess.right += 1;
    if (ctx.bet === 3) { sess.sure += 1; if (!right) sess.sureWrong += 1; }
    sess.done += 1;
    var c = card(it);
    store.cards[it.id] = { box: right ? Math.min(5, c.box + 1) : 1, last: sess.n };
    ctx.levelBefore = levelState(sess.subject).level;
    var move = updateLevel(sess.subject, right);
    if (move === 'up') sess.ups += 1;
    ctx.answers.forEach(function (a, i) {
      if (a.type !== 'trap') return;
      var m = store.mis[a.mis] || { seen: 0, avoided: 0, streak: 0, subject: it.subject };
      m.seen += 1;
      if (ctx.labels[i] !== 'correct') { m.avoided += 1; m.streak += 1; } else { m.streak = 0; }
      store.mis[a.mis] = m;
    });
    save();

    var tiles = h('div', { class: 'tiles' });
    ctx.answers.forEach(function (a, i) {
      var mine = ctx.labels[i], match = mine === a.type;
      tiles.appendChild(h('div', { class: 'tile t-' + CLS[a.type] }, [
        h('div', { class: 'top' }, [h('span', { text: a.text }), h('span', { class: 'pill p-' + CLS[a.type], text: LABELS[a.type] })]),
        h('span', { class: 'you', text: (match ? '✓ You said ' : '✗ You said ') + LABELS[mine] }),
        a.type === 'trap' ? h('span', { class: 'why', text: 'The mistake: ' + a.mis + '. ' + a.why }) : null
      ]));
    });
    var correct = ctx.answers.filter(function (a) { return a.type === 'correct'; })[0];
    var lines = [];
    if (!right) lines.push('Right answer: ' + correct.text);
    else if (young()) lines.push(closeFound ? 'And you caught the Close one.' : 'Check which one was Close.');
    lines.push('How to spot it: ' + it.tip);
    if (ctx.bet === 3 && !right) lines.push('You were very sure, so this one comes back next round.');
    var lv = levelState(sess.subject).level;
    var extra = move === 'up' ? h('p', { class: 'levelup', text: 'Level up! You are on Level ' + lv + ' in ' + sess.subject + '.' })
              : move === 'down' ? h('p', { class: 'levelup', text: 'Back to Level ' + lv + ' for now. Win 3 in a row to move up.' }) : null;
    show([topBar(), stepHead(right ? 'Nice' : 'Here is why', it), tiles],
      sheet(right, (right ? 'Right! ' : 'Not quite. ') + signed(delta) + ' pts', lines, function () { explainStep(ctx); }, extra));
  }

  // Why is it Close? Pick the mistake, Check, then write it in your own words.
  function explainStep(ctx) {
    var it = ctx.it;
    var closes = ctx.answers.filter(function (a) { return a.type === 'trap'; });
    var trap = closes[Math.floor(Math.random() * closes.length)];
    var same = [], others = [];
    ITEMS.forEach(function (x) { x.answers.forEach(function (a) {
      if (a.type !== 'trap' || a.mis === trap.mis) return;
      (x.subject === it.subject ? same : others).push(a.mis);
    }); });
    var options = shuffle([trap.mis].concat(unique(shuffle(unique(same)).concat(shuffle(unique(others)))).slice(0, 2)));
    var sel = null, picked = null;
    var starter = 'This is wrong because ';
    var text = h('textarea', { id: 'explain', 'aria-label': 'Your explanation', placeholder: young() ? '' : 'Say why it is wrong and how you would check.' });
    if (young()) text.value = starter;
    var writeBox = h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Now say it in your own words' }), text,
      h('button', { class: 'linkbtn', text: 'Skip writing', onclick: function () { finish(''); } })]);
    writeBox.hidden = true;
    var check = h('button', { class: 'btn', text: 'Check', disabled: true });
    var box = tileList(options, function (m) { return [m]; }, function (idx) { sel = idx; check.disabled = false; });
    check.addEventListener('click', function () {
      picked = options[sel];
      var ok = picked === trap.mis;
      lockTiles(box);
      Array.prototype.forEach.call(box.children, function (b, i) { if (options[i] === trap.mis) { b.classList.remove('sel'); b.classList.add('t-right'); } });
      writeBox.hidden = false;
      app.replaceChild(sheet(ok, ok ? 'Yes!' : 'Not this one.', [(ok ? '' : 'The mistake is: ' + trap.mis + '. ') + trap.why],
        function () { finish(text.value); }), app.lastChild);
    });
    function finish(explanation) {
      if (young() && explanation.trim() === starter.trim()) explanation = '';
      store.log.push({
        t: new Date().toISOString(), session: sess.n, item: it.id, subject: it.subject, age: store.age,
        track: store.age === '16-19' ? store.track : '', level: itemLevel(it), studentLevel: ctx.levelBefore,
        scan: ctx.scan, bet: ctx.bet, right: ctx.right,
        labels: ctx.answers.map(function (a, i) { return a.text + '=' + LABELS[ctx.labels[i]]; }).join(' | '),
        close: trap.text, picked: picked, pickedRight: picked === trap.mis, explanation: explanation.trim()
      });
      save();
      sess.i += 1;
      nextItem();
    }
    show([topBar(), h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Why is it Close?' }),
      h('h2', { class: 'prompt', text: '"' + trap.text + '" looks right. What is the mistake?' })]), box, writeBox], actionBar([check]));
  }

  function endSession() {
    var n = sess.done, lv = levelState(sess.subject).level;
    var acc = n ? Math.round((100 * sess.right) / n) + '%' : '-';
    var stats = h('div', { class: 'stat-row' }, [
      h('div', { class: 'stat' }, [h('div', { class: 'k', text: 'Points' }), h('div', { class: 'v', text: signed(sess.points) })]),
      h('div', { class: 'stat s-green' }, [h('div', { class: 'k', text: 'Right' }), h('div', { class: 'v', text: acc })]),
      h('div', { class: 'stat s-blue' }, [h('div', { class: 'k', text: 'Level' }), h('div', { class: 'v', text: lv + ' of 3' })])
    ]);
    var subject = sess.subject;
    var sureLine = sess.sure ? 'Very sure but wrong: ' + sess.sureWrong + ' of ' + sess.sure + ' x3 bets.' : 'You made no x3 bets this round.';
    sess = null;
    show([
      h('div', { class: 'done-head' }, [h('h1', { class: 'title', text: 'Round complete!' }),
        h('p', { class: 'muted', text: subject + '. ' + n + ' questions.' })]),
      stats,
      h('div', { class: 'panel' }, [h('p', { text: sureLine }), h('p', { class: 'muted', text: 'Questions you missed come back next round. Questions you got right come back later.' })])
    ], actionBar([h('button', { class: 'btn', text: 'Continue', onclick: home }), h('button', { class: 'btn ghost', text: 'Play again', onclick: startSession })]));
  }

  function backHead(title) {
    return h('div', { class: 'topbar noprint' }, [h('button', { class: 'x', 'aria-label': 'Back', html: ICON.x, onclick: home }), h('h1', { class: 'title', text: title })]);
  }

  function progress() {
    var levelRows = h('table', {}, [h('tr', {}, [h('th', { text: 'Subject' }), h('th', { text: 'Level' }), h('th', { text: 'Wins in a row' })])]);
    subjects().forEach(function (s) {
      var st = levelState(s);
      levelRows.appendChild(h('tr', {}, [h('td', { text: s }), h('td', { text: st.level + ' of 3' }), h('td', { text: st.up + ' of ' + UP_AFTER })]));
    });
    var byBet = { 1: [0, 0], 2: [0, 0], 3: [0, 0] };
    store.log.forEach(function (r) { if (r.age === store.age && byBet[r.bet]) { byBet[r.bet][0] += 1; if (r.right) byBet[r.bet][1] += 1; } });
    var aims = { 1: 'under 67%', 2: '67-80%', 3: 'over 80%' };
    var table = h('table', {}, [h('tr', {}, [h('th', { text: 'Bet' }), h('th', { text: 'Times' }), h('th', { text: 'Right' }), h('th', { text: 'Aim' })])]);
    [1, 2, 3].forEach(function (b) {
      table.appendChild(h('tr', {}, [h('td', { text: 'x' + b + ' ' + BET_NAMES[b] }), h('td', { text: String(byBet[b][0]) }), h('td', { text: pct(byBet[b][1], byBet[b][0]) }), h('td', { text: aims[b] })]));
    });
    var advice = [], b3 = byBet[3], b1 = byBet[1];
    if (b3[0] >= 5 && b3[1] / b3[0] < 0.8) advice.push('You bet x3 more often than your results support. Check your answer before betting high.');
    if (b1[0] >= 5 && b1[1] / b1[0] > 0.67) advice.push('You are often Right when you bet x1. Trust yourself and bet higher.');
    if (!advice.length) advice.push(store.log.length < 10 ? 'Play a few rounds to see your pattern.' : 'Your bets match your results. Keep going.');
    var misList = h('div');
    var names = Object.keys(store.mis).sort(function (a, b) { return store.mis[a].streak - store.mis[b].streak; });
    if (!names.length) misList.appendChild(h('p', { class: 'muted', text: 'No Close answers met yet.' }));
    names.forEach(function (name) {
      var m = store.mis[name];
      misList.appendChild(h('div', { class: 'mis' }, [h('span', {}, [h('span', { class: 'dot' + (m.streak >= 2 ? ' done' : '') }), name]),
        h('span', { class: 'muted', text: 'caught ' + m.avoided + ' of ' + m.seen })]));
    });
    show([backHead('My progress'),
      h('div', { class: 'panel' }, [h('p', { class: 'eyebrow', text: 'Your levels' }), levelRows]),
      h('div', { class: 'panel' }, [h('p', { class: 'eyebrow', text: 'How sure vs how right' }), table].concat(advice.map(function (t) { return h('p', { text: t }); }))),
      h('div', { class: 'panel' }, [h('p', { class: 'eyebrow', text: 'Close map' }), h('p', { class: 'muted', text: 'A green dot means you caught this mistake the last 2 times.' }), misList])
    ], actionBar([h('button', { class: 'btn', text: 'Home', onclick: home })]));
  }

  function printView() {
    var pool = poolFor(store.subject).slice().sort(function (a, b) { return itemLevel(a) - itemLevel(b); });
    var letters = 'ABCDEF';
    var cards = pool.map(function (it, n) {
      var answers = shuffle(it.answers);
      var key = answers.map(function (a, i) { return letters[i] + ' ' + LABELS[a.type] + (a.type === 'trap' ? ' (' + a.mis + ')' : ''); }).join('.   ');
      return h('div', { class: 'printcard' }, [
        h('p', { class: 'eyebrow', text: (n + 1) + '. ' + it.subject + '  |  Level ' + itemLevel(it) + '  |  ' + (it.topic || '') }),
        h('p', { text: it.stem }),
        h('ol', { type: 'A' }, answers.map(function (a) { return h('li', { text: a.text + '    Right / Close / Dud' }); })),
        h('p', { text: 'Bet: x1   x2   x3' }),
        h('div', { class: 'key' }, [h('p', { text: 'Key: ' + key }), h('p', { text: 'How to spot it: ' + it.tip })])
      ]);
    });
    var who = 'Ages ' + store.age + (store.age === '16-19' ? ', ' + TRACKS[store.track] : '');
    var bar = FRAMED ? actionBar([h('p', { class: 'muted', text: 'Printing works in the offline copy. Open index.html on your computer and print there.' }), h('button', { class: 'btn', text: 'Home', onclick: home })])
                     : actionBar([h('button', { class: 'btn', text: 'Print', onclick: function () { window.print(); } })]);
    show([backHead('Print cards'), h('p', { class: 'muted noprint', text: store.subject + ', ' + who + '. Easiest first. Fold or cut off the key before class.' })].concat(cards), bar);
  }

  function csvText() {
    var cols = ['t', 'session', 'item', 'subject', 'age', 'track', 'level', 'studentLevel', 'scan', 'bet', 'right', 'labels', 'close', 'picked', 'pickedRight', 'explanation'];
    var esc = function (v) { v = v === null || v === undefined ? '' : String(v); return '"' + v.replace(/"/g, '""') + '"'; };
    return [cols.join(',')].concat(store.log.map(function (r) { return cols.map(function (c) { return esc(c === 'close' ? (r.close || r.trap) : r[c]); }).join(','); })).join('\n');
  }
  function exportCSV() {
    if (!store.log.length) {
      show([backHead('Export answers'), h('p', { class: 'muted', text: 'No answers saved yet. Play a round first.' })], actionBar([h('button', { class: 'btn', text: 'Home', onclick: home })]));
      return;
    }
    if (!FRAMED) {
      var blob = new Blob(['﻿' + csvText()], { type: 'text/csv;charset=utf-8' });
      var a = h('a', { href: URL.createObjectURL(blob), download: 'right-close-dud-answers.csv' });
      document.body.appendChild(a); a.click(); a.remove();
      return;
    }
    var box = h('textarea', { id: 'csv', readonly: true, 'aria-label': 'Answers as CSV' });
    box.value = csvText();
    var msg = h('p', { class: 'muted', role: 'status' });
    show([backHead('Export answers'), h('p', { class: 'muted', text: store.log.length + ' answers. Copy this text and paste it into a .csv file or a spreadsheet.' }), box, msg],
      actionBar([h('button', { class: 'btn', text: 'Copy', onclick: function () {
        var fallback = function () { box.select(); msg.textContent = 'Text selected. Copy it with your keyboard or long-press.'; };
        try { navigator.clipboard.writeText(box.value).then(function () { msg.textContent = 'Copied.'; }, fallback); } catch (e) { fallback(); }
      } })]));
  }

  if ('serviceWorker' in navigator && !FRAMED && location.protocol.indexOf('http') === 0) {
    try { navigator.serviceWorker.register('sw.js').catch(function () { /* still works online */ }); } catch (e) { /* ignore */ }
  }

  home();
})();
