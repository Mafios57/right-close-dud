# Right, Close, Dud

Students find the Right answer, catch the Close one (looks right but is wrong) and skip the Dud (clearly wrong).

Plain HTML and JavaScript. No framework, no build step, no server.

## Look

- Lesson-app layout: white screens, one task at a time, a progress bar across the top, and a big button at the bottom.
- Students select an answer, then press Check or Next. After Check, the bottom bar turns green (right) or red (not quite) with the reason and a Continue button.
- Home shows the subject's three levels as a path: done levels have a tick, the current level has Start, higher levels are locked.
- Colors: Right = green, Close = amber, Dud = grey, actions = blue. Font: Nunito from Google Fonts, with system fallbacks offline.
- The layout borrows common lesson-app patterns. It uses no other company's logo, mascot, colors or fonts.

## Run it

- On a computer: double-click `index.html`.
- On phones: put this folder on any web host (GitHub Pages, Netlify, a school server). Open the link once. After that it works offline. On Android Chrome, tap "Add to Home screen".
- Local test as an installable app: run `python -m http.server 8000` here, then open `http://localhost:8000`.

## How a question works

Ages 12-15, 6 questions a round:
1. Word hunt, only on questions with a trick word.
2. Pick the Right answer.
3. Bet x1, x2 or x3. Points never go below zero.
4. Spot the Close one.
5. Feedback names the mistake behind the Close answer.
6. Why is it Close? Pick the mistake, then finish "This is wrong because...".

Ages 16-19, 8 questions a round:
1. Word hunt: every time in the first 6 rounds, then for 3 in 10 questions.
2. Sort it: mark each answer Right, Close or Dud.
3. Bet: x1 = +1 / 0, x2 = +2 / -2, x3 = +3 / -6.
4. Feedback, then explain the Close one in your own words.

## Levels and tracks

- Everyone starts at Level 1 in each subject. 3 right in a row moves up. 2 wrong in a row moves down.
- Ages 16-19 pick Core subjects (Math, Science, Language) or Science track (adds Advanced Math, Physics, Chemistry, Biology).

## Files

| File | What it does |
| --- | --- |
| index.html | Page and styles (Chalkboard and Arcade tokens) |
| app.js | Game logic |
| items.js | The question bank. In the data, type "trap" is the Close answer. |
| sw.js | Offline cache |
| manifest.webmanifest, icon.svg | Home-screen install |

## Add a question

Copy an item in `items.js` and change it. One `correct` (Right), at least one `trap` (Close) with `mis` and `why`, one `dud` with `why`. Set `ages`, `level` per age, `track`, `topic`, and `target` (a clear trick word in the question, or `null`).

After changing any file on a hosted copy, change `CACHE` in `sw.js` (rcd-v1 to rcd-v2).

## Data

"Export answers" downloads a CSV of every answer: question level, student level, track, bet, result, the Close answer explained, and the written reason.

## Not built yet

- Timed rounds and Dud Patrol (the Arcade TimerBar is designed but not used).
- Trap Forge, Mark the Answer, Calm Start.
- Student names on shared phones, class teams, teacher dashboard, server sync.
