# Right Close Dud

A static web game: index.html, app.js, items.js, sw.js, manifest.webmanifest, icon.svg. No build step.

## Rules

- Plain HTML and JavaScript only. No frameworks, no libraries, no npm packages.
- No build step. The files in this folder are the files that ship.
- Must work offline on low-end Android phones. Keep files small, avoid heavy effects, and test on a slow phone when you can.
- All player-facing text is plain English for second-language learners. Use short sentences and common words.
- No em dashes in any text, including game text, code comments, README and commit messages. Use a comma, full stop or "-" instead.
- Bump CACHE in sw.js on every change (for example rcd-v3 to rcd-v4), so phones load the new version. If you add a file, add it to FILES in sw.js too.
