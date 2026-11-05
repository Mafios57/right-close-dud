# Right, Close, Dud questions, version 3

New questions, one file per subject. Each file calls `Q({...})` once per question.

Short field names, so the files stay easy to scan:

| Field | Meaning |
| --- | --- |
| id | Question id, such as m12 |
| s | Subject |
| t | Track: "core" or "science" |
| lv | Level for each age group, such as { "12-15": 3, "16-19": 1 } |
| th | Theme |
| tp | Topic (also used as the syllabus line) |
| q | The question |
| key | A trick word in the question, or null |
| r | The Right answer |
| c | Close answers: [text, mistake, why] |
| d | The Dud: [text, why] |
| h | Hint (never gives the answer away) |
| st | Steps for "Show me the steps" |
| tip | How to spot it |

To compile and add to the game, run from the `right-close-dud` folder:

```
node tools/build-items.js
```

It writes `items.js`, then `questions-v3-full.csv` and `questions-v3-full.md` in this folder, then runs the checker.

The full lists include every question in the game, old and new.
