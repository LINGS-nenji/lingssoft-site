Lint cleanup notes

What I changed:
- Removed many file-level `/* eslint-disable ... */` statements that were broad and suppressed useful rules.
- Narrowed a few disables to the smallest code region where mutation occurred (e.g. reduce accumulator assignment).
- Ran `npx eslint --fix` to automatically fix stylistic issues where safe.

Remaining `eslint-disable` occurrences:
- A small set (~9) remain. Most are in example/code files (intended to show snippets) or in components where a rule like `no-param-reassign` was intentionally relaxed. These are:
  - `src/examples/Navbars/DefaultNavbar/index.js` (line-level `no-param-reassign` for reduce)
  - Several `code.js` example files where template strings are intentionally shown (`no-template-curly-in-string`)
  - `src/components/MKButton/MKButtonRoot.js` uses `/* eslint-disable prefer-destructuring */` due to library style

Recommendation:
- Keep example code files' disables (they are documentation snippets). For real components, prefer to refactor (avoid param reassignment) and remove the disable.
- I can continue to pick the remaining files in priority order and remove/replace disables with small refactors.
