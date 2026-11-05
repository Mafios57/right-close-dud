// Right, Close, Dud: a small offline game in a lesson-app layout.
// Every screen: one task, a bottom action bar. After "Check", the bar turns into a green or red feedback sheet.
// Ages 12-15: Word hunt (if a trick word) -> pick the Right answer -> bet -> spot the Close one -> feedback -> explain.
// Optional help: "Need a hint?" on question screens shows step 1. "Show me the steps" on feedback walks through every step.
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
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/></svg>',
    flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 4 5 5.5 5 11a5 5 0 01-10 0c0-2.5 1.2-4 2.5-5 .2 2 1.2 3 2.3 3.3C11 8.5 11.3 5 12 2z" fill="currentColor"/></svg>',
    soundOn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    soundOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 9.5l5 5M21.5 9.5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  var PRAISE = ['Right!', 'Nice one!', 'You got it!', 'Great eye!', 'Spot on!', 'Brilliant!'];
  var ENCOURAGE = ['Not quite.', 'So close!', 'Good try!', 'Almost!'];
  function pickOne(list) { return list[Math.floor(Math.random() * list.length)]; }

  // ---------- storage ----------
  function freshStore() { return { age: null, track: 'core', subject: null, sessions: 0, points: 0, cards: {}, mis: {}, log: [], levels: {}, sound: true, streak: 0, lastDay: null }; }
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

  // ---------- fun: motion and sound ----------
  // Everything here is optional decoration. It does nothing when the device asks for reduced motion,
  // and every call is wrapped so a missing browser feature never stops the game.
  var REDUCED = (function () { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } })();
  var RAF = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : null;
  var fx = {
    // Short burst of paper confetti from the top of the screen.
    confetti: function (count) {
      if (REDUCED || !RAF) return;
      try {
        var c = document.createElement('canvas'), ctx = c.getContext && c.getContext('2d');
        if (!ctx) return;
        var W = c.width = window.innerWidth, H = c.height = window.innerHeight;
        c.className = 'confetti'; c.setAttribute('aria-hidden', 'true');
        document.body.appendChild(c);
        var colors = ['#23863B', '#FF9F1C', '#1677C9', '#F2B600', '#E5484D', '#9AA3AE'];
        var bits = [];
        for (var i = 0; i < count; i++) {
          bits.push({ x: W / 2 + (Math.random() - 0.5) * W * 0.4, y: H * 0.35, vx: (Math.random() - 0.5) * 12, vy: -6 - Math.random() * 9,
            s: 6 + Math.random() * 6, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, col: colors[i % colors.length] });
        }
        var start = Date.now();
        (function frame() {
          var t = Date.now() - start;
          ctx.clearRect(0, 0, W, H);
          bits.forEach(function (b) {
            b.vy += 0.35; b.x += b.vx; b.y += b.vy; b.r += b.vr; b.vx *= 0.99;
            ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.col;
            ctx.globalAlpha = Math.max(0, 1 - t / 1600); ctx.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); ctx.restore();
          });
          if (t < 1600) RAF(frame); else c.remove();
        })();
      } catch (e) { /* decoration only */ }
    },
    // A "+2" that floats up from an element.
    floatFrom: function (el, text, cls) {
      if (REDUCED || !el || !el.getBoundingClientRect) return;
      try {
        var r = el.getBoundingClientRect();
        var f = h('span', { class: 'floater ' + (cls || ''), text: text, 'aria-hidden': 'true', style: 'left:' + (r.left + r.width / 2) + 'px;top:' + r.top + 'px' });
        document.body.appendChild(f);
        setTimeout(function () { f.remove(); }, 1000);
      } catch (e) { /* decoration only */ }
    },
    // Replays a CSS animation class on an element.
    play: function (el, cls) {
      if (REDUCED || !el) return;
      el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
    },
    // Counts a number up from 0 to its value.
    countUp: function (el, to, prefix, suffix) {
      prefix = prefix || ''; suffix = suffix || '';
      if (REDUCED || !RAF || !to) { el.textContent = prefix + to + suffix; return; }
      var start = Date.now(), dur = 700;
      (function frame() {
        var k = Math.min(1, (Date.now() - start) / dur);
        el.textContent = prefix + Math.round(to * (1 - Math.pow(1 - k, 3))) + suffix;
        if (k < 1) RAF(frame);
      })();
    }
  };
  // Tiny sounds made in code, so there are no audio files to download. Mute is saved on the device.
  var audioCtx = null;
  function sound(kind) {
    if (!store.sound) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioCtx = audioCtx || new AC();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      var tunes = {
        tap: [[520, 0, 0.05, 'sine', 0.06]],
        right: [[660, 0, 0.12, 'sine', 0.18], [990, 0.1, 0.18, 'sine', 0.18]],
        wrong: [[220, 0, 0.16, 'triangle', 0.2], [165, 0.14, 0.22, 'triangle', 0.2]],
        level: [[523, 0, 0.12, 'square', 0.08], [659, 0.12, 0.12, 'square', 0.08], [784, 0.24, 0.12, 'square', 0.08], [1047, 0.36, 0.3, 'square', 0.08]],
        star: [[880, 0, 0.12, 'sine', 0.14]],
        done: [[523, 0, 0.14, 'sine', 0.16], [784, 0.14, 0.14, 'sine', 0.16], [1047, 0.28, 0.3, 'sine', 0.16]]
      };
      var now = audioCtx.currentTime;
      (tunes[kind] || []).forEach(function (n) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = n[3]; o.frequency.value = n[0];
        g.gain.setValueAtTime(0.0001, now + n[1]);
        g.gain.exponentialRampToValueAtTime(n[4], now + n[1] + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + n[1] + n[2]);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(now + n[1]); o.stop(now + n[1] + n[2] + 0.05);
      });
    } catch (e) { /* sound is optional */ }
  }
  // Daily streak: playing on consecutive days adds 1. Missing a day starts again at 1.
  function dayKey(d) { return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function touchStreak() {
    var today = dayKey(new Date()), yesterday = dayKey(new Date(Date.now() - 864e5));
    if (store.lastDay === today) return;
    store.streak = store.lastDay === yesterday ? (store.streak || 0) + 1 : 1;
    store.lastDay = today;
  }
  function liveStreak() {
    var today = dayKey(new Date()), yesterday = dayKey(new Date(Date.now() - 864e5));
    return store.lastDay === today || store.lastDay === yesterday ? store.streak || 0 : 0;
  }

  // ---------- guide character ----------
  // Chalky: a piece of chalk with a face. Drawn in code, so there is no image to download.
  // Moods: 'happy' (right answers, welcome), 'oops' (wrong answers), 'think' (hints, tough rounds).
  var MOUTH = { happy: 'M17 27q5 5 10 0', oops: 'M18 30q4-4 8 0', think: 'M19 28.5h7' };
  function chalky(mood) {
    var eyeY = mood === 'think' ? 18 : 20;
    return h('span', { class: 'chalky c-' + mood, 'aria-hidden': 'true', html:
      '<svg viewBox="0 0 44 44"><g transform="rotate(-10 22 22)">' +
      '<rect class="body" x="10" y="5" width="24" height="35" rx="9"/>' +
      '<rect class="dust" x="12" y="7" width="20" height="6" rx="3"/>' +
      '<circle class="cheek" cx="14.5" cy="25" r="2.4"/><circle class="cheek" cx="29.5" cy="25" r="2.4"/>' +
      '<circle class="eye" cx="18" cy="' + eyeY + '" r="2.1"/><circle class="eye" cx="26" cy="' + eyeY + '" r="2.1"/>' +
      '<path class="mouth" d="' + (MOUTH[mood] || MOUTH.happy) + '"/></g></svg>' });
  }
  // Chalky with a speech bubble. "say" is a string or a list of elements.
  function guide(mood, say) {
    return h('div', { class: 'guide' }, [chalky(mood), h('div', { class: 'say' }, typeof say === 'string' ? [h('p', { text: say })] : say)]);
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
  var screenSeq = 0;
  function show(kids, bar) {
    screenSeq += 1;
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
      h('div', { class: 'brand-right' }, [
        h('span', { class: 'streak' + (liveStreak() ? ' lit' : ''), 'aria-label': liveStreak() + ' day streak', html: ICON.flame + '<b>' + liveStreak() + '</b>' }),
        h('span', { class: 'xp', 'aria-label': store.points + ' points in total' }, [h('i'), String(store.points)]),
        h('button', { class: 'x sound', 'aria-label': store.sound ? 'Sound on. Tap to mute.' : 'Sound off. Tap to turn on.', 'aria-pressed': String(!!store.sound),
          html: store.sound ? ICON.soundOn : ICON.soundOff, onclick: function () { store.sound = !store.sound; save(); if (store.sound) sound('right'); home(); } })
      ])
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
      kids.push(guide('happy', [h('p', { text: 'Hi, I am Chalky!' }), h('p', { class: 'prompt', text: 'Which answer only looks right?' }),
        h('p', { class: 'muted', text: 'Find the Right one. Catch the Close one. Skip the Dud. Pick your age group to start.' })]));
      show(kids, null);
      return;
    }
    kids.push(h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Subject' }),
      chips(subjects().map(function (s) { return { value: s, label: s }; }), store.subject, function (v) { store.subject = v; save(); home(); })]));

    var lv = levelState(store.subject).level, pool = poolFor(store.subject), days = liveStreak();
    kids.push(guide('happy', days >= 2 ? 'You are on a ' + days + ' day streak. Keep it going!' : 'Ready? Let us catch some Close answers.'));
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
    store.sessions += 1; touchStreak(); save();
    sess = { n: store.sessions, subject: store.subject, items: pickItems(store.subject), i: 0, points: 0, right: 0, sure: 0, sureWrong: 0, ups: 0, done: 0, combo: 0, best: 0 };
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
  // Answer tiles show a letter badge (A, B, C) so choices are easy to tell apart on a small screen.
  var LETTERS = 'ABCDEFGH';
  function letterBadge(ch) { return h('span', { class: 'letter', 'aria-hidden': 'true', text: ch }); }
  // A list of tiles where one can be selected. Calls onChange(index) on select.
  // letters: optional list of badge letters, one per tile.
  function tileList(items, render, onChange, cls, letters) {
    var box = h('div', { class: cls || 'tiles', role: 'radiogroup' });
    items.forEach(function (x, idx) {
      var kids = letters ? [letterBadge(letters[idx]), h('span', { class: 'ttext' }, render(x))] : render(x);
      var t = h('button', { class: 'tile' + (letters ? ' lettered' : ''), role: 'radio', 'aria-checked': 'false', onclick: function () {
        Array.prototype.forEach.call(box.children, function (b) { var on = b === t; b.classList.toggle('sel', on); b.setAttribute('aria-checked', String(on)); });
        fx.play(t, 'pop'); sound('tap');
        onChange(idx);
      } }, kids);
      box.appendChild(t);
    });
    return box;
  }
  function lockTiles(box) { Array.prototype.forEach.call(box.children, function (b) { b.disabled = true; }); }

  // "Need a hint?": a dropdown that starts closed on every screen and reveals the first step only. Optional.
  // The hint text is only added to the page when opened, so no browser can show it early.
  function hintBox(ctx) {
    var it = ctx.it;
    if (!it.steps || !it.steps.length) return null;
    var panel = null;
    var btn = h('button', { class: 'linkbtn hintbtn', 'aria-expanded': 'false', text: 'Need a hint?', onclick: function () {
      if (panel) { box.removeChild(panel); panel = null; btn.setAttribute('aria-expanded', 'false'); return; }
      ctx.hint = true;
      panel = h('div', { class: 'hint', role: 'status' }, [guide('think', [h('p', { class: 'eyebrow', text: 'Hint' }), h('p', { text: it.hint || it.steps[0] })])]);
      box.appendChild(panel);
      btn.setAttribute('aria-expanded', 'true');
    } });
    var box = h('div', { class: 'stack hintdrop' }, [btn]);
    return box;
  }

  // "Show me the steps": one step per tap, then the Right answer.
  function stepsScreen(ctx) {
    var it = ctx.it, shown = 0;
    var correct = it.answers.filter(function (a) { return a.type === 'correct'; })[0];
    var list = h('ol', { class: 'steps' });
    var answer = h('div', { class: 'tile t-right' }, [h('div', { class: 'top' }, [h('span', { text: correct.text }), h('span', { class: 'pill p-right', text: 'Right' })])]);
    answer.hidden = true;
    var next = h('button', { class: 'btn', text: 'Next step' });
    function reveal() {
      if (shown < it.steps.length) {
        list.appendChild(h('li', {}, [h('span', { class: 'num', text: String(shown + 1) }), h('span', { text: it.steps[shown] })]));
        shown += 1;
        ctx.steps = Math.max(ctx.steps || 0, shown);
        if (shown > 1) sound('tap');
        if (shown === it.steps.length) { answer.hidden = false; next.textContent = 'Continue'; fx.play(answer, 'pop'); sound('right'); }
        try { list.lastChild.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { /* ignore */ }
      } else {
        explainStep(ctx);
      }
    }
    next.addEventListener('click', reveal);
    show([topBar(), h('div', { class: 'stack' }, [h('p', { class: 'eyebrow', text: 'Step by step' }), h('h2', { class: 'prompt', text: it.stem })]),
      list, answer], actionBar([next]));
    reveal();
  }

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
      Array.prototype.forEach.call(box.children, function (b, i) { if (norm(words[i]) === target) { b.classList.remove('sel'); b.classList.add('t-right'); fx.play(b, 'wiggle'); } });
      sound(ctx.scan ? 'right' : 'wrong');
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
      tileList(ctx.answers, function (a) { return [a.text]; }, function (idx) { sel = idx; next.disabled = false; }, null, LETTERS), hintBox(ctx)], actionBar([next]));
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
      rows.appendChild(h('div', { class: 'sortcard' }, [h('div', { class: 'atop' }, [letterBadge(LETTERS[idx]), h('p', { class: 'atext', text: a.text })]), seg]));
    });
    show([topBar(), stepHead('Sort it: Right, Close or Dud', ctx.it), h('p', { class: 'muted', text: 'Only one answer is Right.' }), rows, hintBox(ctx)], actionBar([next]));
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
      tileList(rest.map(function (i) { return ctx.answers[i]; }), function (a) { return [a.text]; }, function (idx) { sel = idx; check.disabled = false; },
        null, rest.map(function (i) { return LETTERS[i]; })), hintBox(ctx)], actionBar([check]));
  }

  // Green or red sheet in place of the action bar.
  function sheet(ok, head, lines, onContinue, extra) {
    return actionBar([
      h('div', { class: 'sheet-head', role: 'status' }, [h('span', { class: 'badge-ic' }, [chalky(ok ? 'happy' : 'oops')]), h('b', { text: head })]),
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
    if (right) { sess.right += 1; sess.combo += 1; sess.best = Math.max(sess.best, sess.combo); } else { sess.combo = 0; }
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
      tiles.appendChild(h('div', { class: 'tile reveal t-' + CLS[a.type], style: '--d:' + (i * 90) + 'ms' }, [
        h('div', { class: 'top' }, [letterBadge(LETTERS[i]), h('span', { class: 'ttext', text: a.text }), h('span', { class: 'pill p-' + CLS[a.type], text: LABELS[a.type] })]),
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
    var extra = h('div', { class: 'stack' }, [
      right && sess.combo >= 2 ? h('p', { class: 'combo', html: ICON.flame + '<span>' + sess.combo + ' in a row!</span>' }) : null,
      move === 'up' ? h('p', { class: 'levelup', text: 'Level up! You are on Level ' + lv + ' in ' + sess.subject + '.' })
        : move === 'down' ? h('p', { class: 'levelup', text: 'Back to Level ' + lv + ' for now. Win 3 in a row to move up.' }) : null,
      it.steps && it.steps.length ? h('button', { class: 'btn ghost steps-btn', text: 'Show me the steps', onclick: function () { stepsScreen(ctx); } }) : null
    ]);
    show([topBar(), stepHead(right ? 'Nice' : 'Here is why', it), tiles],
      sheet(right, pickOne(right ? PRAISE : ENCOURAGE) + ' ' + signed(delta) + ' pts', lines, function () { explainStep(ctx); }, extra));
    var ptsEl = app.querySelector('.pts');
    if (right) {
      sound('right'); fx.confetti(sess.combo >= 3 ? 110 : 60); fx.play(ptsEl, 'bump');
      if (delta) fx.floatFrom(ptsEl, signed(delta), 'up');
    } else {
      sound('wrong'); fx.play(app.lastChild, 'shake');
      if (delta) fx.floatFrom(ptsEl, signed(delta), 'down');
    }
    // The celebration only appears if the student is still on this feedback screen.
    // The sheet already says "Level up!", so a fast tapper never misses the news.
    var thisScreen = screenSeq;
    if (move === 'up') setTimeout(function () { if (screenSeq === thisScreen) levelUp(lv, sess ? sess.subject : ''); }, 650);
  }

  // Big celebration when a student moves up a level. Sits on top of the feedback screen until dismissed.
  function levelUp(lv, subject) {
    var overlay = h('div', { class: 'celebrate', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Level up' }, [
      h('div', { class: 'medal' }, [h('span', { class: 'eyebrow', text: 'Level' }), h('b', { text: String(lv) })]),
      h('h2', { class: 'title', text: 'Level up!' }),
      h('p', { class: 'muted', text: 'You are now on Level ' + lv + ' in ' + subject + '. Harder questions are coming.' }),
      h('button', { class: 'btn', text: 'Keep going', onclick: function () { overlay.remove(); } })
    ]);
    app.appendChild(overlay);
    sound('level'); fx.confetti(150);
    try { overlay.querySelector('button').focus(); } catch (e) { /* ignore */ }
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
      sound(ok ? 'right' : 'wrong');
      if (ok) fx.confetti(30);
      app.replaceChild(sheet(ok, ok ? 'Yes!' : 'Not this one.', [(ok ? '' : 'The mistake is: ' + trap.mis + '. ') + trap.why],
        function () { finish(text.value); }), app.lastChild);
      if (!ok) fx.play(app.lastChild, 'shake');
    });
    function finish(explanation) {
      if (young() && explanation.trim() === starter.trim()) explanation = '';
      store.log.push({
        t: new Date().toISOString(), session: sess.n, item: it.id, subject: it.subject, age: store.age,
        track: store.age === '16-19' ? store.track : '', level: itemLevel(it), studentLevel: ctx.levelBefore,
        scan: ctx.scan, bet: ctx.bet, right: ctx.right, hint: !!ctx.hint, steps: ctx.steps || 0,
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
    var accN = n ? Math.round((100 * sess.right) / n) : 0;
    var stars = !n ? 0 : accN >= 90 ? 3 : accN >= 60 ? 2 : 1;
    var starRow = h('div', { class: 'stars', 'aria-label': stars + ' of 3 stars' });
    [1, 2, 3].forEach(function (k) { starRow.appendChild(h('span', { class: 'star' + (k <= stars ? ' on' : ''), style: '--d:' + (k * 220) + 'ms', html: ICON.star })); });
    var vPts = h('div', { class: 'v', text: signed(sess.points) });
    var vAcc = h('div', { class: 'v', text: n ? accN + '%' : '-' });
    var stats = h('div', { class: 'stat-row' }, [
      h('div', { class: 'stat reveal', style: '--d:500ms' }, [h('div', { class: 'k', text: 'Points' }), vPts]),
      h('div', { class: 'stat s-green reveal', style: '--d:600ms' }, [h('div', { class: 'k', text: 'Right' }), vAcc]),
      h('div', { class: 'stat s-blue reveal', style: '--d:700ms' }, [h('div', { class: 'k', text: 'Level' }), h('div', { class: 'v', text: lv + ' of 3' })])
    ]);
    var subject = sess.subject, best = sess.best;
    var sureLine = sess.sure ? 'Very sure but wrong: ' + sess.sureWrong + ' of ' + sess.sure + ' x3 bets.' : 'You made no x3 bets this round.';
    var headline = stars === 3 ? 'Amazing round!' : stars === 2 ? 'Great round!' : 'Round complete!';
    var cheer = stars === 3 ? guide('happy', 'The tricks did not fool you this time!')
      : stars === 2 ? guide('happy', 'Nice work. A few Close answers got you. You will beat them next time.')
      : guide('think', 'Close answers are tricky. The ones you missed come back next round, so you get another try.');
    var pts = sess.points;
    sess = null;
    show([
      h('div', { class: 'done-head' }, [starRow, h('h1', { class: 'title', text: headline }), h('p', { class: 'muted', text: subject + '. ' + n + ' questions.' })]),
      n ? cheer : null,
      stats,
      h('div', { class: 'panel reveal', style: '--d:800ms' }, [
        h('p', { class: 'streak-line', html: ICON.flame + '<span>' + liveStreak() + ' day streak' + (best >= 2 ? '. Best run: ' + best + ' in a row.' : '.') + '</span>' }),
        h('p', { text: sureLine }),
        h('p', { class: 'muted', text: 'Questions you missed come back next round. Questions you got right come back later.' })])
    ], actionBar([h('button', { class: 'btn', text: 'Continue', onclick: home }), h('button', { class: 'btn ghost', text: 'Play again', onclick: startSession })]));
    sound('done');
    for (var k = 1; k <= stars; k++) setTimeout(function () { sound('star'); }, k * 220 + 150);
    if (stars === 3) setTimeout(function () { fx.confetti(140); }, 700);
    if (pts > 0) fx.countUp(vPts, pts, '+');
    if (accN) fx.countUp(vAcc, accN, '', '%');
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
    var cols = ['t', 'session', 'item', 'subject', 'age', 'track', 'level', 'studentLevel', 'scan', 'bet', 'right', 'hint', 'steps', 'labels', 'close', 'picked', 'pickedRight', 'explanation'];
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
    try {
      // When a new version takes over, reload once so the player sees it now, not on the next visit.
      var hadSW = !!navigator.serviceWorker.controller, reloaded = false;
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (hadSW && !reloaded) { reloaded = true; location.reload(); }
      });
      navigator.serviceWorker.register('sw.js').catch(function () { /* still works online */ });
    } catch (e) { /* ignore */ }
  }

  home();
})();
