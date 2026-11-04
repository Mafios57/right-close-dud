// Checks every question in items.js follows the rules. Run: node tools/check-items.js
const fs = require('fs'), path = require('path');
const w = {};
new Function('window', fs.readFileSync(path.join(__dirname, '..', 'items.js'), 'utf8'))(w);
const items = w.ITEMS || [];
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9\/₂²]/g, '');
const problems = [];
const ids = new Set();
items.forEach((it, n) => {
  const where = (it.id || 'item ' + (n + 1)) + ': ';
  const bad = msg => problems.push(where + msg);
  if (!it.id) bad('missing id');
  if (ids.has(it.id)) bad('id is used twice'); ids.add(it.id);
  ['subject', 'topic', 'stem', 'tip'].forEach(k => { if (!it[k]) bad('missing ' + k); });
  if (!Array.isArray(it.ages) || !it.ages.length || it.ages.some(a => a !== '12-15' && a !== '16-19')) bad('ages must be "12-15", "16-19" or both');
  (it.ages || []).forEach(a => { if (![1, 2, 3].includes((it.level || {})[a])) bad('level for ' + a + ' must be 1, 2 or 3'); });
  if (!['core', 'science'].includes(it.track)) bad('track must be "core" or "science"');
  const answers = it.answers || [];
  const count = t => answers.filter(a => a.type === t).length;
  if (count('correct') !== 1) bad('needs exactly 1 "correct" (Right) answer');
  if (count('trap') < 1) bad('needs at least 1 "trap" (Close) answer');
  if (count('dud') !== 1) bad('needs exactly 1 "dud" answer');
  answers.forEach(a => {
    if (!['correct', 'trap', 'dud'].includes(a.type)) bad('answer "' + a.text + '" has an unknown type');
    if (a.type === 'trap' && (!a.mis || !a.why)) bad('Close answer "' + a.text + '" needs mis and why');
    if (a.type === 'dud' && !a.why) bad('Dud answer "' + a.text + '" needs why');
  });
  if (new Set(answers.map(a => a.text)).size !== answers.length) bad('two answers have the same text');
  if (it.target && !String(it.stem).split(/\s+/).some(x => norm(x) === norm(it.target))) bad('target "' + it.target + '" is not a word in the question');
  if (!Array.isArray(it.steps) || it.steps.length < 2) bad('needs at least 2 steps');
  const text = JSON.stringify(it);
  if (text.includes('—')) bad('contains an em dash');
  const right = answers.find(a => a.type === 'correct');
  if (it.hint && right && it.hint.includes(right.text)) bad('hint gives away the answer');
});
console.log(items.length + ' questions checked.');
if (problems.length) { console.log(problems.length + ' problem(s):'); problems.forEach(p => console.log(' - ' + p)); process.exit(1); }
console.log('All good.');
