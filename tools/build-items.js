// Adds the new questions in questions-v3 to the game, then writes the question lists.
// Run from the right-close-dud folder: node tools/build-items.js
// 1. Reads items.js and every questions-v3/*.js file.
// 2. A new question with the same id as an old one replaces it, so running this twice is safe.
// 3. Writes items.js, then questions-v3/questions-v3-full.csv and questions-v3-full.md.
// 4. Runs tools/check-items.js.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const GAME = path.join(__dirname, '..');
const SRC = path.join(GAME, 'questions-v3');
const OUT = SRC;

// ---------- read ----------
const w = {};
new Function('window', fs.readFileSync(path.join(GAME, 'items.js'), 'utf8'))(w);
const byId = new Map(w.ITEMS.map(it => [it.id, it]));

function fromShort(x) {
  const answers = [{ text: x.r, type: 'correct' }]
    .concat(x.c.map(c => ({ text: c[0], type: 'trap', mis: c[1], why: c[2] })))
    .concat([{ text: x.d[0], type: 'dud', why: x.d[1] }]);
  const item = {
    id: x.id, subject: x.s, track: x.t, ages: Object.keys(x.lv), level: x.lv,
    theme: x.th, topic: x.tp, syllabus: x.tp, stem: x.q, target: x.key || null, answers: answers,
    steps: x.st, tip: x.tip
  };
  if (x.h) item.hint = x.h;
  return item;
}
let added = 0, replaced = 0;
fs.readdirSync(SRC).filter(f => f.endsWith('.js')).sort().forEach(f => {
  const Q = x => { if (byId.has(x.id)) replaced++; else added++; byId.set(x.id, fromShort(x)); };
  new Function('Q', fs.readFileSync(path.join(SRC, f), 'utf8'))(Q);
});

// ---------- order ----------
const SECTIONS = [
  ['Math', it => it.subject === 'Math'],
  ['Science', it => it.subject === 'Science'],
  ['Science track (advanced math and sciences)', it => it.track === 'science'],
  ['Language', it => it.subject === 'Language']
];
const TRACK_ORDER = ['Advanced Math', 'Physics', 'Chemistry', 'Biology'];
const num = id => parseInt(id.replace(/\D/g, ''), 10);
const all = [...byId.values()];
const groups = SECTIONS.map(([name, test]) => [name, all.filter(test).sort((a, b) =>
  (TRACK_ORDER.indexOf(a.subject) - TRACK_ORDER.indexOf(b.subject)) || (num(a.id) - num(b.id)))]);
const placed = groups.reduce((n, g) => n + g[1].length, 0);
if (placed !== all.length) throw new Error('Some questions do not fit a section. Check their subject and track.');

// ---------- items.js ----------
const s = JSON.stringify;
const lvl = o => '{ ' + Object.keys(o).map(k => s(k) + ': ' + o[k]).join(', ') + ' }';
function itemText(it) {
  const L = [];
  L.push('  {');
  L.push('    id: ' + s(it.id) + ', subject: ' + s(it.subject) + ', track: ' + s(it.track) + ', ages: [' + it.ages.map(s).join(', ') + '], level: ' + lvl(it.level) + ',');
  L.push('    theme: ' + s(it.theme) + ', topic: ' + s(it.topic) + ', syllabus: ' + s(it.syllabus) + ',');
  L.push('    stem: ' + s(it.stem) + ',');
  L.push('    target: ' + (it.target ? s(it.target) : 'null') + ',');
  L.push('    answers: [');
  L.push(it.answers.map(a => '      { text: ' + s(a.text) + ', type: ' + s(a.type) + (a.mis ? ', mis: ' + s(a.mis) : '') + (a.why ? ', why: ' + s(a.why) : '') + ' }').join(',\n'));
  L.push('    ],');
  if (it.hint) L.push('    hint: ' + s(it.hint) + ',');
  L.push('    steps: [');
  L.push(it.steps.map(x => '      ' + s(x)).join(',\n'));
  L.push('    ],');
  L.push('    tip: ' + s(it.tip));
  L.push('  }');
  return L.join('\n');
}
const head = [
  '// Right, Close, Dud question bank, version 3. In the data, "trap" is the Close answer.',
  '// Each item: one "correct", at least one "trap" (with "mis" and "why"), one "dud".',
  '// level: difficulty per age group. 1 = one step, everyday words. 2 = one idea, the trap needs a check. 3 = exam level.',
  '// track: "core" for every student, "science" for students who take advanced math or sciences.',
  '// target: a clear trick word in the question, or null.',
  '// steps: short, child-friendly steps that walk to the Right answer. "Show me the steps" shows them one at a time.',
  '// hint: optional nudge for "Need a hint?". If missing, the hint is step 1. Never give the answer away in a hint.',
  '// New questions are written in questions-v3 and added with: node tools/build-items.js',
  '',
  'window.ITEMS = ['
];
const body = groups.filter(g => g[1].length).map(([name, list]) =>
  '  // ---------- ' + name + ' ----------\n' + list.map(itemText).join(',\n')).join(',\n\n');
fs.writeFileSync(path.join(GAME, 'items.js'), head.join('\n') + '\n' + body + '\n];\n');

// ---------- question lists ----------
const ordered = groups.flatMap(g => g[1]);
const traps = it => it.answers.filter(a => a.type === 'trap');
const dud = it => it.answers.find(a => a.type === 'dud');
const right = it => it.answers.find(a => a.type === 'correct');
const lv = (it, age) => it.level[age] ? 'L' + it.level[age] : '';
const maxTraps = Math.max(...ordered.map(it => traps(it).length));
const csvCell = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
const cols = ['id', 'subject', 'track', 'ages', 'level_12_15', 'level_16_19', 'theme', 'topic', 'question', 'key_word', 'correct'];
for (let i = 1; i <= maxTraps; i++) cols.push('trap_' + i, 'trap_' + i + '_mistake', 'trap_' + i + '_why');
cols.push('dud', 'dud_why', 'hint', 'steps', 'how_to_spot_it');
const rows = ordered.map(it => {
  const r = [it.id, it.subject, it.track, it.ages.join(' and '), lv(it, '12-15'), lv(it, '16-19'), it.theme, it.topic, it.stem, it.target || '', right(it).text];
  for (let i = 0; i < maxTraps; i++) { const t = traps(it)[i]; r.push(t ? t.text : '', t ? t.mis : '', t ? t.why : ''); }
  r.push(dud(it).text, dud(it).why, it.hint || '', it.steps.map((x, i) => (i + 1) + '. ' + x).join(' '), it.tip);
  return r.map(csvCell).join(',');
});
fs.writeFileSync(path.join(OUT, 'questions-v3-full.csv'), '﻿' + cols.join(',') + '\n' + rows.join('\n') + '\n');

const md = s2 => String(s2).replace(/\|/g, '\\|');
const levelText = it => it.ages.map(a => a + ' L' + it.level[a]).join(', ');
const out = ['# Right, Close, Dud questions, version 3', '', ordered.length + ' questions.', ''];
out.push('## How many questions each level has', '', '| Age group | Track | Subject | Level 1 | Level 2 | Level 3 |', '| --- | --- | --- | --- | --- | --- |');
const buckets = [];
['12-15', '16-19'].forEach(age => ['core', 'science'].forEach(track => {
  if (age === '12-15' && track === 'science') return;
  [...new Set(ordered.filter(it => it.ages.includes(age) && it.track === track).map(it => it.subject))].forEach(sub => {
    const n = L => ordered.filter(it => it.ages.includes(age) && it.track === track && it.subject === sub && it.level[age] === L).length;
    buckets.push([age, track, sub, n(1), n(2), n(3)]);
  });
}));
buckets.forEach(b => out.push('| ' + b.join(' | ') + ' |'));
out.push('', '## All questions', '', '| ID | Subject | Level | Question | Right | Close (mistake) | Dud |', '| --- | --- | --- | --- | --- | --- | --- |');
ordered.forEach(it => out.push('| ' + [it.id, it.subject, levelText(it), md(it.stem), md(right(it).text),
  traps(it).map(t => md(t.text) + ' (' + md(t.mis) + ')').join('<br>'), md(dud(it).text)].join(' | ') + ' |'));
out.push('', '## Details', '');
ordered.forEach(it => {
  out.push('### ' + it.id + '. ' + it.stem, '');
  out.push('- Subject: ' + it.subject + ' (' + it.track + ' track)', '- Topic: ' + it.topic, '- Theme: ' + it.theme, '- Level: ' + levelText(it));
  if (it.target) out.push('- Key word: ' + it.target);
  out.push('- Right: ' + right(it).text);
  traps(it).forEach(t => out.push('- Close: ' + t.text + '. Mistake: ' + t.mis + '. ' + t.why));
  out.push('- Dud: ' + dud(it).text + '. ' + dud(it).why);
  if (it.hint) out.push('- Hint: ' + it.hint);
  out.push('- Steps:');
  it.steps.forEach((x, i) => out.push('  ' + (i + 1) + '. ' + x));
  out.push('- How to spot it: ' + it.tip, '');
});
fs.writeFileSync(path.join(OUT, 'questions-v3-full.md'), out.join('\n'));

console.log('Added ' + added + ' new, replaced ' + replaced + '. ' + ordered.length + ' questions in total.');
const thin = buckets.filter(b => Math.min(b[3], b[4], b[5]) < 10);
console.log(thin.length ? 'Levels with fewer than 10: ' + thin.map(b => b[0] + ' ' + b[1] + ' ' + b[2] + ' (' + b.slice(3).join('/') + ')').join('; ') : 'Every level has 10 or more questions.');
execFileSync(process.execPath, [path.join(__dirname, 'check-items.js')], { stdio: 'inherit' });
