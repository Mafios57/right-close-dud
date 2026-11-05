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
| tools/check-items.js | Checks every question follows the rules |
| sw.js | Offline cache |
| manifest.webmanifest, icon.svg | Home-screen install |

## Fun layer

- Confetti and a rising "+2" when an answer is Right. A gentle shake and a low sound when it is not.
- Praise lines change each time ("Nice one!", "Great eye!"). Wrong answers get "So close!" or "Good try!".
- "2 in a row!" badge for runs of Right answers. A bigger confetti burst from 3 in a row.
- Level up: a gold medal screen with confetti. It only appears while the student is still on the feedback screen.
- End of round: 1 to 3 stars (3 stars = 90% or more right, 2 stars = 60% or more), numbers count up, best run in a row.
- Daily streak: playing on consecutive days adds 1 to the flame on the home screen.
- Sounds are made in code (no audio files). The speaker button on the home screen mutes them, and the choice is saved.
- Chalky, a piece of chalk with a face, is the guide. Chalky says hello on the home screen, smiles or frowns on the feedback bar, helps with hints, and cheers at the end of a round. Drawn in code, no image files.
- Answer tiles have letter badges (A, B, C), so choices are easy to tell apart. Letters stay the same for an answer on every screen of a question.
- All motion switches off when the phone or computer is set to reduce motion.

## Help for students who are stuck

- "Need a hint?" on the question screen shows one nudge (the item's `hint`, or step 1 if there is no hint). It never shows the answer.
- "Show me the steps" on the feedback sheet walks through the item's `steps` one tap at a time, then shows the Right answer.
- Both are optional. The export records `hint` (used or not) and `steps` (how many steps the student opened).

## Add a question

Every question lives in `items.js`. Copy this block, paste it inside the list (before the last `];`), and change it:

```js
  {
    id: "m12", subject: "Math", track: "core", ages: ["12-15"], level: { "12-15": 1 },
    theme: "Sports", topic: "Number: percentages", syllabus: "Number: percentages",
    stem: "A team won 3 of its 4 matches. What percent did it win?",
    target: null,
    answers: [
      { text: "75%", type: "correct" },
      { text: "34%", type: "trap", mis: "Putting the numbers side by side", why: "3 and 4 written together is not a percent." },
      { text: "400%", type: "dud", why: "A team cannot win more than all its matches." }
    ],
    hint: "Write it as a fraction first: 3 out of 4.",
    steps: [
      "Write it as a fraction: 3/4.",
      "Percent means out of 100. 3/4 = 75/100.",
      "75 out of 100 is 75%."
    ],
    tip: "Turn the fraction into hundredths."
  },
```

Rules:
- `id` must be new. Use the subject letter and the next number (m12, s7, l6, x9).
- `type: "correct"` is Right, `"trap"` is Close, `"dud"` is Dud. Exactly one Right, at least one Close, exactly one Dud.
- Each Close answer needs `mis` (the mistake in plain words) and `why`. Reuse the same `mis` text when the same mistake appears again.
- `level`: 1 = one step and everyday words, 2 = one idea that needs a check, 3 = exam level. Give a level for each age in `ages`.
- `track`: "core" for everyone, "science" for the science track only.
- `target`: a clear trick word from the question (NOT, 2x, start), or `null`.
- `steps`: 2 to 5 short sentences a 12-year-old can follow. End on the answer.
- `hint`: optional. A nudge, never the answer.

Then check your work:

```
node tools/check-items.js
```

It lists any rule a question breaks. When it says "All good.", change `CACHE` in `sw.js` (for example rcd-v4 to rcd-v5), then commit and push.

## Data

"Export answers" downloads a CSV of every answer: question level, student level, track, bet, result, the Close answer explained, and the written reason.

## Not built yet

- Timed rounds and Dud Patrol (the Arcade TimerBar is designed but not used).
- Trap Forge, Mark the Answer, Calm Start.
- Student names on shared phones, class teams, teacher dashboard, server sync.
