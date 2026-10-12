# UI-1 Independent Review — Research library foundation and progressive Explore mode

**PR:** #27, branch `ui1-research-library-explore`
**Base:** `01438f317ea70fed571779a87b86ae36d6557149` (C4 merged)
**Starting head:** `e4798db1e32b14b4e569fa5bfd719faef49b69e3`
**Final head:** the commit that adds this file (reported in the PR conversation)
**Date:** 2026-10-12
**Reviewer:** Claude Opus 5.5. One fresh top-level session, no subagents.

**Verdict: MERGE.** The review fixes are on the branch. Counts: 0 BLOCKER, 2 IMPORTANT, 6 MINOR, all fixed.

## 1. Independence and starting state

- **Independence:** this review was run in a new session with no access to the production conversation.
  - The production record (`docs/ui/UI1-RESEARCH-LIBRARY.md`) and its screenshots were read as claims to test, not as evidence.
  - Every result below comes from this session's own runs.
- **Branch state:**
  - `git fetch` showed `origin/ui1-research-library-explore` at `e4798db`, the same as the local head.
  - The merge base with `origin/main` is `01438f3`, with no intervening commits.
  - The working tree was clean.
- **Content untouched:** `git diff origin/main -- src/content docs/ESV-QUOTATION-LEDGER.md` was empty at the start and is empty at the end.

**Changed files inspected (35):**

- **Source:**
  - `src/layouts/BaseLayout.astro`
  - `src/lib/remark-answer-sections.mjs`
  - the scripts `answer-panels.ts` and `reveal-hash.ts`
  - the components `AnswerPanel`, `AnswerLevel`, `AnswerSection` and `ThesisOverview`
  - the removed `AnswerCard`
  - the pages: home, questions index, question route, worldviews index
- **Styles:** `tokens.css`, `global.css`, `components.css`, `home.css`, `catalog.css`, `explore.css`.
- **Dependencies:** `package.json` and `package-lock.json`. The only new dependencies are two exactly pinned `@fontsource-variable` packages, both OFL 1.1.
- **Documentation:** `README.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT-MODEL.md`, `docs/ui/UI1-RESEARCH-LIBRARY.md`.
- **Screenshots:** the ten production screenshots, all viewed.

`Cite.astro` and `SourceList.astro` are unchanged by the PR. They were read to confirm the anchor scheme.

## 2. Method and environment

All testing ran against the built site (`astro build`, served by `astro preview` under the `/worldviews-examined/` base path).

**Browsers.** All were driven by Playwright scripts written for this review, kept in the session scratchpad and not committed. They used real key and mouse events, viewport and colour-scheme emulation, JavaScript disabled, print media, and network throttling or blocking.

| Engine | Build | Notes |
|---|---|---|
| Chrome | Google Chrome 155.0.8059.40 (installed stable, headless) | Primary |
| Firefox | Playwright Firefox 141 and 144.0.2 | Gecko engine builds, not a branded Firefox release |
| WebKit | Playwright WebKit 26.0 (Windows builds 2203 and 2227) | WebKit engine on Windows. **Not Safari, and not macOS or iOS.** |

**Limitations:**

- **No screen reader** (NVDA or VoiceOver) was available. Semantics were checked through Playwright's accessibility-tree snapshots in Chrome. That check **is not equivalent to screen-reader testing.**
- **Find in page:** native browser find (Ctrl+F) cannot be driven by automation. It was probed through two routes that use the browser's find machinery:
  - URL text fragments (`#:~:text=`);
  - `window.find()`.
- **Print:** checked through print-media emulation plus dispatched `beforeprint`/`afterprint` events, and one Chrome PDF render. No physical print or OS print dialog was used.
- **Browser zoom** was emulated by viewport width: 200% of 1280 is 640 CSS px, and 400% is 320 CSS px. Larger default text was emulated with a 150% root font size (a 24px default).

## 3. Findings and corrections

### IMPORTANT

**I1. Closing a long answer from its sticky heading strands the reader and keyboard focus.**

- **Test:** on `why-is-man-great-and-terrible`, open Rabbinic Judaism, choose "Expand all sections", scroll 800px into the Deep dive, then click the sticky heading to close the answer.
- **Before the fix:**
  - In all three engines the focused toggle ended 2,512–2,937px above the viewport.
  - The viewport showed the Sources list (`christianity-…-src-52` in Chrome, `naturalism-…-src-3` in Firefox).
  - The reader had no visual connection to what they had just closed.
- **Fix (`answer-panels.ts`):** when the toggle closes an answer whose top is above the viewport, the answer is scrolled to the top (instantly, honouring `scroll-padding-top`).
  - **After:** the heading sits at 76–77px in Chrome, Firefox and WebKit, and focus stays on it.
- **Related fix:** closing an answer now moves focus to that answer's toggle if focus was inside the panel. This happens with "Close all answers" in browsers that do not focus clicked buttons (WebKit), or when it is triggered by keyboard while focus is in a panel.
  - **Verified:** focus lands on the visible toggle, not on a hidden element.

**I2. The 4-second initialization fallback misfired on slow connections and failed to recover from script errors.**

- **Slow connection** (Chrome, 12 KB/s, `what-happens-after-death`):
  - The timer in `<head>` fired at 4 s while the page was still parsing, so all six answers appeared.
  - At about 10–12 s the module ran and collapsed them all.
  - A reader who had started reading lost the text.
- **Exception mid-initialization** (simulated by making `CSS.escape` throw):
  - Nothing was readable for 4 s.
  - After that, the answer that had already been enhanced kept `hidden="until-found"`: only 5 of 6 panels were visible.
- **Malformed hash** (see M1): nothing was visible for 4 s, and no controls appeared afterwards.
- **Fix (`BaseLayout.astro` and `reveal-hash.ts`):**
  - The page is checked at `DOMContentLoaded`. Module scripts run before that event, so a page not marked ready by then had its script fail or blocked.
  - A 4-second safety timer starts only when parsing ends (`readyState` becomes `interactive`). It covers a script request that hangs and so holds back `DOMContentLoaded`.
  - If the script arrives after the timer has given up, it adds the controls but starts every answer open, so text the reader can already see is never collapsed.
  - A `try`/`catch` around initialization reopens every panel if setup throws.
- **After** (Chrome; the blocked and slow-script cases also in Firefox 144):

| Case | Result |
|---|---|
| Normal load | Collapsed and ready before 0.5 s |
| 12 KB/s connection | Collapsed throughout; enhanced at about 12 s; never revealed and then collapsed |
| Exception during setup | 6/6 answers readable from the first sample (0.5 s) |
| Module request blocked (aborted) | 6/6 readable at 1 s; no controls shown |
| Module delayed 6 s | Collapsed until about 4 s after parsing; then 6/6 readable; then enhanced with all six open |

### MINOR

**M1. A malformed percent-encoded fragment stopped initialization.**

- **Cause:** `#%E0%A4%A` and `#%` made `decodeURIComponent` throw a `URIError` at module top level, in Chrome, Firefox and WebKit.
- **Result:** no toggles and no toolbars. The text was hidden for 4 s, then the page fell back to the uncollapsed layout.
- **Fix:** `targetOf` falls back to the raw id.
- **Other fragments tested** (`#does-not-exist`, `#a"b]c`, `#:~:text=nothing`, `#christianity%20x`) were already safe.
- **After:** both malformed hashes initialize normally in all three engines.

**M2. Returning to a question page from another page could land far from where the reader was.**

- **Before:** answer state was not kept, so the page reloaded collapsed. Firefox then restored the old scroll offset into the shorter layout.
  - Test: open Islam and Hindu, close Islam, follow "About Hindu traditions", press Back.
  - Firefox landed with the Hindu heading at −2,514px.
- **Fix:**
  - The open answers and open levels are stored in the current history entry (`history.replaceState`, not the URL). They are saved on each change, on `hashchange` and on `pagehide`, and restored at initialization.
  - A fresh visit still starts collapsed.
  - The browser's own scroll restoration is not replaced, because Back after following a citation must keep returning to the reading position.
- **After:**
  - **Chrome:** layout and the exact reading position are restored (a reference element at 416px before and after); reload also restores.
  - **Firefox 141 and 144:** same layout and position on Back. The Playwright Firefox build dropped `history.state` on reload, so reload opens only the fragment's answer.
  - **WebKit:** the layout is restored, but WebKit applied its scroll restoration before the restored layout existed, so the position was off (see §16).

**M3. Missing spaces in visible text.**

- **Where:** "28 foundational questions, each put to 6 worldviews.Each worldview…" in the homepage hero, and "…all 6 worldviews.Open a question…" on the questions index.
- **Cause:** Astro drops the newline between an expression and the following text.
- **Fix:** the space now sits inside the template literal.
- **Check:** a script compared the rendered text of all 96 pages (main versus branch). It now finds only two items:
  - the pre-existing `method/` table text ("View,What it explains well"), which is unchanged from main and outside UI-1;
  - the visually spaced "Featured" tag in the catalog (see §15).

**M4. Thesis cards overflowed at 320px with larger default text.**

- **Before:** with a 24px default font size, an open card's worldview name and "Open below" cue could not fit on one non-wrapping row. The document was 364px wide in a 320px viewport (a reflow failure).
- **Fix:** the card head row may wrap.
- **After:** no overflow at 320 or 390px with large text, or at 640 or 320 CSS px of zoom.

**M5. Inconsistent level-summary alignment on phones.**

- **Before:** at 390px the "EXAMINE" kicker wrapped above its long title, while "STUDY" stayed inline beside "Deep dive".
- **Fix:** below 40rem the kicker always takes its own line.
- **Evidence:** screenshot `r02`.

**M6. Production documentation described the old fallback and inlining.** `ARCHITECTURE.md` and two lines of the production record are annotated with the new behaviour.

### Count changes

**Link count: 10,735 → 10,831 (+96), exactly one per page.**

- The review fixes take the client script from about 3 KB to 4.3 KB.
- That is above Astro's inline limit, so the script is now emitted as one hashed module file, referenced by a `<script type="module" src>` on each page.
- That `src` is the +96 the link checker counts.
- The file sits under the GitHub Pages base path and is cached after the first page.
- The blocked-script and hung-script fallbacks above were tested against this external file.
- Every other count is unchanged: 96 pages, 168 answers, 2,838 citations, 236 sources, 56 thinkers, 2,725 external links, 0 broken links, 0 duplicate IDs.

## 4. Visual review

**Coverage:**

- **Pages:** home, questions index, `why-is-man-great-and-terrible`, `what-is-man`, `what-happens-after-death` (long Jewish eschatology Deep dive), `what-ultimately-exists` (naturalist answer with many citations), worldviews index, `worldviews/hindu-traditions`, `thinkers/`, `thinkers/david-chalmers`, `sources/`, `method/`.
- **Settings:** 320, 390, 768, 1280 and 1600px, in light and dark themes.
- **Overflow:** checked by script with every answer and every level open on the question pages. **0 overflow in 120 page × width × theme runs.**
- **Screenshots inspected:** the ten production screenshots, 62 review captures in the scratchpad, and five committed captures in `docs/ui/screenshots/ui1-review/`:

| File | Shows |
|---|---|
| `r01-home-hero-1280-light.png` | Homepage hero after the M3 fix |
| `r02-levels-390-light.png` | Phone level summaries after the M5 fix |
| `r03-sticky-close-1280-light.png` | Viewport after closing a long answer from deep inside it (I1 fix) |
| `r04-cards-open-320-large-text.png` | 320px with 24px default text and open cards (M4 fix) |
| `r05-examine-open-1600-dark.png` | Examine level open, wide screen, dark theme |

**Aesthetic verdict.** The site reads as a modern digital research library:

- warm paper, dark ink and a restrained navy interface;
- serif for what is read, Inter for what is operated;
- hairline rules, no shadows and generous whitespace.

It does not resemble a documentation template, a dashboard or a marketing page.

- **Radius:** the 4px radius works. On these dense text cards it keeps a printed-reference character, and there is no reason to increase it.
- **Worldview accents:**
  - They orient without dominating: a top rule, the name label and the small square before each heading.
  - Every worldview is always named in words.
  - Christianity gets the same treatment as the other five (deep navy, the same weight). Nothing makes the other traditions look subordinate.
- **Dark theme:** the dark translations keep accents legible and calm. No rule or accent overpowers the text.

**The three most material visual improvements:**

1. **Closing a long answer** (I1). Fixed; this was the only functional problem.
2. **Phone level summaries** (M5). Fixed.
3. **Recommendation, not a defect: the desktop answer heading spans the full 1,216px container,** while the reading column is about 700px, so the "Close" cue sits about 500px right of the text.
   - It is consistent and discoverable, so it was left unchanged.
   - UI-2's side-by-side layout is the natural moment to reconsider it.

## 5. Homepage verdict — good

The hierarchy is:

1. title and purpose;
2. explicit Reformed standpoint;
3. "Explore the Questions" (primary button);
4. one real featured question for each of the six domains;
5. domain gateways;
6. the six worldviews;
7. the three modes;
8. Method, Worldviews, Thinkers and Sources.

- **Modes:** Compare and Christian Case are plain headings with "In preparation" status. They are not links or buttons, so nothing deceptive is clickable.
- **Length:** the page is fairly long (about 2,470px at 1280), but the question cards begin in the first viewport. A newcomer reaches a question in one click.
- **Repetition:** the domain list and the worldview strip repeat the header navigation, but they carry descriptions and counts. That is acceptable.
- **Fix made:** the only defect was the missing space (M3).

## 6. Questions index verdict — good

- **Coverage:** 28 questions in 6 domains. All question links resolve (link checker).
- **Domain shortcuts:** the chips jump to `#ultimate-reality` and the other domains.
- **Layout:** the ruled-band layout (domain intro left, question list right; stacked on phones) reads as a browsable reference catalog.
- **Phones:** wrapping domain chips with 44px targets.
- **Fix made:** the missing space in the lede (M3).

## 7. Six-thesis overview verdict — good

- **Content:** on every question page, all six names appear in stable worldview order.
  - Each card holds its exact reviewed `lede`; the structural test compared the card text with the answer's thesis.
  - Nothing else is shown, no answer prose is expanded, and no text is truncated.
- **Layout:**
  - 3 × 2 at 1280 and 1600px;
  - 2 × 3 at 768px;
  - one continuous column at 390 and 320px.
- **Invitation to select:** the hint "Select a worldview to read its full answer" and a "Read ⌄" cue on every card.
- **Interaction:** tested in Chrome, Firefox and WebKit.
  - Clicking the thesis text, not only the name, opens the answer and sets the hash. The cue reads "Open below" on that card only.
  - Clicking a second card opens it too and leaves the first open.
  - Clicking an already-open card navigates to it (heading at 76px).
  - After its answer was closed by its heading, a card for the same hash reopens and repositions the answer.
  - Closing via the heading resets the cue to "Read".
  - "Open all" sets all six cues; "Close all" clears them. Card cue and panel state matched in every sampled state.
  - Keyboard: Tab reaches each card, and a 3px focus ring outlines the whole card.
  - Accessible name, for example "Reformed Christianity : read the full answer".
- **Recommendation:** the stretched-link overlay prevents selecting thesis text with the mouse inside a card. The same sentence is selectable as the opening thesis of the open answer, so this is accepted.

## 8. Progressive disclosure verdict — accurate and complete

**Structural test (all 28 pages, all 168 answers):**

| Answer type | Body order |
|---|---|
| Non-Christian (140) | `the-view`, `what-this-explains-well`, Examine [`christian-response`, `pressure-questions`], Deep dive |
| Christian (28) | `the-christian-view`, `what-this-explains-well`, Examine [`strongest-objection`, `christian-reply`], Deep dive |

- **Compared with the `main` build of every page:**
  - The answer body text (with whitespace and the old `→` mark removed, and the new "Examine"/"Study" kickers excluded) is identical for 168 of 168 answers.
  - Citation-marker counts are identical.
  - The set of element ids in every body is identical, except for the new `<ns>-examine`.
- **Conclusions:**
  - No section is lost or moved, and nothing is duplicated.
  - Section ids and `####` Deep-dive heading ids keep their namespaces.
  - MDX components render once.
- **The grouping algorithm** (`groupExamineLevel`) wraps consecutive analytical sections.
  - Order is enforced by the validator.
  - A non-analytical node ends the group without being dropped; the plugin only re-parents nodes.
- **Interaction counts** (checked for Christianity, Naturalism, Judaism, Islam, Hindu and Buddhist answers):

| Action from the overview | Result |
|---|---|
| One (card) | The view / The Christian view and What this explains well |
| Two (card, then Examine) | The Christian critique (Christian response and Pressure questions), or Strongest objection and Christian reply |
| Two (card, then Study) | The Deep dive; it does not require Examine first |

- **Discoverability:** the Examine summary names the real sections in a serif title, for example "EXAMINE · Christian response and Pressure questions", with a chevron, directly below the positive account. It reads as substantive content, not a footnote.
- **Bulk controls** (tested in all three engines):
  - "Open all six answers" opens exactly 6.
  - "Close all answers" closes all 6 and keeps the inner `<details>` state (an Examine opened earlier was still open after reopening).
  - "Expand all sections" and "Collapse all sections" affect only their own answer.
  - Labels state the worldview ("Expand all sections of the Rabbinic Judaism answer").
  - Opening all six on the longest page took about 30 ms. It yields a 16,500px page, which is acceptable when requested, and causes no scroll jump.

## 9. `hidden="until-found"` findings

**Support:** all three tested engines report support (`el.hidden === 'until-found'` and `onbeforematch` present).

A closed panel computes to `display: block` plus `content-visibility: hidden`, with height 0. The CSS does not defeat it: the global `[hidden]` rule excludes `until-found`, and nothing sets `display` on `.answer__panel`.

**Find-machinery probes** (`what-is-man`):

| Engine | Phrase in a closed answer's view | Phrase in a closed Deep dive of a closed answer |
|---|---|---|
| Chrome, text fragment | Panel opened through `beforematch`; toggle `aria-expanded=true`; card cue synced | Panel and Deep dive opened; state synced |
| WebKit 26.0, text fragment | Same as Chrome | Same as Chrome |
| Firefox 141 and 144, `window.find()` | — | Panel opened through `beforematch` and Deep dive opened; state synced |
| Firefox 141 and 144, text fragment | Scrolled, but **did not reveal** the panel | Opened the `<details>` but not the panel |

**Firefox text fragments:** this is a Firefox limitation in that specific path. The site never generates text-fragment links. Firefox's find machinery itself reveals and syncs correctly. Native Ctrl+F was not driven.

**Older browsers:** browsers without `until-found` treat it as `hidden`.

- Find in page cannot reach closed answers.
- Every answer stays one click or one link away.
- Fragment links still open their targets, because `reveal-hash.ts` does not depend on `beforematch`.

This is an acceptable progressive-enhancement limitation.

**Assistive technology and focus:**

- Closed-panel content is absent from the accessibility tree, as intended.
- Tab skipped every hidden focusable element (44 per closed panel on `great-and-terrible`). After a panel closed, the next Tab went to the following answer's toggle.

## 10. Initialization and fallback

See I2 for the timelines.

- **Flash on load:** none in Chrome, Firefox or WebKit. The `.js:not(.js-ready)` rule keeps panels collapsed until setup; a direct fragment target's answer is shown by the `:target` / `:has(:target)` rule.
- **Initialization runs once:** one module on each page.
- **Controls:** they stay `hidden` until their handlers are attached.
- **Fragment targets** are never re-hidden after initialization: the matrix in §13 loads each target directly.
- **Other pages:** the script does nothing there (no `[data-answer]` elements).
- **Residual:** when the module is delayed, Chrome applies `:target` late, so a deep-linked answer can stay collapsed until the module or the 4-second post-parse timer. This was seen in Chrome when the module was artificially delayed by 6 s; Firefox showed the target answer. It is bounded and recorded.

## 11. Focus management

| Case | Result (Chrome; Firefox the same unless noted) |
|---|---|
| Enter on a card | Answer opens. The next Tab lands on that answer's toggle (Chrome). Firefox's next Tab lands on the answer's first section control, inside the same answer. |
| Close via own heading (Space) | Focus stays on the visible toggle |
| Close from the sticky heading deep in an answer | Fixed (I1): heading at 76px, focus on it |
| "Close all answers" | Focus stays on the visible button |
| Focus inside a panel when it is closed | Fixed: focus moves to that answer's toggle |
| Backlink opens an answer | Target positioned at 76px below the sticky heading. Focus follows the browser's fragment navigation. |
| Tab after closing | Skips the hidden panel |

**Accessible name of the dynamic heading button:**

- The accessibility tree shows `heading "Naturalistic atheism" [level=2]` containing `button "Naturalistic atheism" [expanded]`; the collapsed state is reported likewise.
- The "Read"/"Close" cue is `aria-hidden`, and the state comes from `aria-expanded`.
- `aria-controls` points to the existing `<ns>-panel`.
- The article is `aria-labelledby` the heading.

This is the WAI-ARIA accordion/disclosure pattern. It was not confirmed with a real screen reader (§2).

## 12. Keyboard

Real key events were used in Chrome and Firefox:

- **Tab / Shift+Tab** move through the cards, toggles, section controls, summaries and citation links. There is no trap.
- **Enter** on a card opens its answer.
- **Enter / Space** on a toggle toggles it.
- **Enter / Space** on the Examine summary toggles it (native).
- **Escape** does nothing, and nothing needs it.
- **Enter** on a citation marker sets `#…-src-N` and moves to the source entry.
- **Focus ring:** visible (3px, `#A84E08` light / `#F0A35E` dark). On cards it is drawn round the whole card.

## 13. Fragment and citation navigation matrix

Page `what-happens-after-death` unless noted. "Top" is the target's distance from the viewport top; 76–77px means just below the sticky heading. Each row was run in Chrome, Firefox and WebKit.

| Input | Result |
|---|---|
| Direct load `#christianity`, `#naturalism`, `#buddhism` | Only that answer opens; top 76 |
| Direct load `#judaism-after-death-pressure-questions` (Examine section) | Answer and Examine open; top 76 |
| Direct load `#christianity-after-death-strongest-objection` | Answer and Examine open; top 76 |
| Direct load `#hinduism-after-death-deep-dive` | Answer and Deep dive open; top 76 |
| Direct load of a Deep-dive `h4` (judaism, naturalism, islam, buddhism) | Answer and Deep dive open; top 76–77 |
| Direct load of a Deep-dive citation (`christianity-…-cite-5-2`, `judaism-…-cite-2-2`, `hinduism-…-cite-2-2`) | Answer and Deep dive open; top 76 |
| Direct load of an Examine citation (`islam-…-cite-7-1`) | Answer and Examine open; top 76–77 |
| Direct load of a source entry (`buddhism-…-src-2`) | Visible; top 108 (Sources is not under a sticky heading) |
| Click a source `↩` backlink to a citation in the closed Deep dive of a closed answer (judaism, buddhism, christianity) | Both ancestors open; marker at 76 |
| The same backlink again after closing the answer (same hash, no `hashchange`) | Reopens; marker at 76 |
| The same backlink again after closing only the Deep dive | Reopens; marker at 76 |
| Back to `#islam` after closing Islam | Islam reopens; heading at 76 |
| Forward to an already-open answer | The browser restores the scroll it saved. Its offset can differ from the heading because other answers changed; this is accepted, because forcing a scroll would break Back-to-reading-position. |
| Leave the page through a footer link, then Back | See M2 |
| Malformed or odd hashes | See M1 |

All citation, source, section and heading ids are byte-identical to `main` (§8). Citation numbering was not touched.

## 14. No-JavaScript results

Script execution was disabled in Chrome, Firefox and WebKit.

- All 6 panels are visible and no buttons render. The toolbars stay `hidden`.
- Answer headings are plain `h2` text with the accent square.
- Card anchors jump to the answer (top 76).
- Examine and Deep dive are native `<details>` and open on click.
- A direct load of a Deep-dive citation fragment, and a click on its `↩` backlink, both opened the closed `<details>` natively in all three engines.
- Sources and every link are reachable.

## 15. Print results

Measured as panels visible / level bodies visible / paragraphs inside levels visible, on `what-happens-after-death`.

| Engine | No JavaScript, print media | JavaScript, print media only | JavaScript plus `beforeprint` |
|---|---|---|---|
| Chrome | 6/6, 12/12, 38/38 | 6/6, 12/12, 38/38 | 6/6, 12/12, 38/38 |
| WebKit 26.0 | 6/6, 12/12, 38/38 | 6/6, 12/12, 38/38 | 6/6, 12/12, 38/38 |
| Firefox 144 | 6/6, 12/12, 38/38 | 6/6, 12/12, 38/38 | 6/6, 12/12, 38/38 |
| Firefox 141 | 6/6, **0/12** | 6/6, **0/12** | 6/6, 12/12, 38/38 |

- **Print chrome:** the site header and footer, controls and cue text are hidden in print. Sources print.
- **After `afterprint`:** the reader's state was restored (one answer open, levels closed).
- **Firefox 141:** it lacks `::details-content`, so closed `<details>` content is not printed without JavaScript. Firefox 144 supports it, so current Firefox prints in full with or without JavaScript.
- **Chrome PDF:** a PDF render was produced as a spot check.
- **Untested:** no physical printer or OS print dialog was used.

**Recommendation:** in the catalog, the "Featured" tag is separated from the question title only by CSS margin. Copied text and some screen-reader text read "terrible?Featured". This is cosmetic and was left as is.

## 16. Responsive and zoom

- **Overflow:** 0 in 120 runs (§4).
- **Sticky answer heading:**
  - 61px at every width with default text: 7% of a 390 × 844 phone and 11% of 320 × 568.
  - 96–108px on phones with 24px default text.
  - It names whose text is being read and offers Close. It stays on one line at 320px, where the cue text is visually hidden and the chevron remains.
  - **Verdict:** helpful, not intrusive. Keep it.
- **Zoom:** at 640 and 320 CSS px (200% and 400% zoom equivalents) there was no overflow.
- **Large text:** with 24px default text, the M4 overflow is fixed.
- **Touch targets:** control and link-list targets are at least 44px tall. Citation markers keep their enlarged hit area.
- **Toolbars:** they wrap cleanly at every width.
- **WebKit Back-scroll limitation (M2 residual):** WebKit restored its scroll offset before the restored layout existed. This was seen in the Windows WebKit build only; Safari was not tested.

## 17. Typography and font loading — keep as is

- **Reading measure:** 64ch at 18px gives comfortable 62–69 character lines on desktop, not narrow.
- **Tablet:** at 768px the measure is limited by the panel padding, and lines are not overlong.
- **Line height:** 1.62 reads well on long Deep dives.
- **Headings:** titles are balanced (`text-wrap: balance`). Page titles are 30px on phones and 46px on desktop, which is proportionate. Weight contrast (serif 600 against 400 body; Inter 600 kickers) is clear.
- **Files downloaded:**

| Page | Fonts downloaded |
|---|---|
| Homepage, questions index, thinkers | Two Latin files: serif 50 KB and Inter 47 KB, both preloaded |
| Sources | Adds serif italic and Latin Extended |
| Question pages | Six files, about 314 KB in total: serif Latin and Latin Extended, roman and italic; Inter Latin and Latin Extended |

- **Inter Latin Extended (83 KB)** is fetched only where sans-serif text contains transliterations (for example answer scope lines). It is needed, not duplicate.
- **No duplicates:** the preloaded files are the same hashed files the CSS uses (each preload entry used once). No third-party requests.
- **Base path:** all fonts are served under `/worldviews-examined/_astro/`.
- **Layout stability:** CLS 0 on home, catalog and question pages, and 0.0002 on Sources (cold cache, 1280px).
- **Fonts blocked:** with every `.woff2` request aborted, the page rendered in the Iowan/Palatino/Georgia and system-ui fallbacks with no overflow.
- **Licences:** both fonts are OFL 1.1, bundled through npm and pinned.
- **Glyph fallback:**
  - `ṁ` appears only in the *Saṁyutta Nikāya* source title.
  - Inspected at 3× in italic, the fallback glyph is barely distinguishable.
  - The editorial marks (`↗ ↩ → ◇`) also fall back and look consistent.
  - **Verdict:** acceptable. No font-subset change. Transliterations untouched.

## 18. Colour and dark mode — good

- **Light theme:** these are the spec trial tokens. The contrast table in the production record was spot-checked visually and found consistent; no ratio was recomputed.
- **Dark theme:** follows the system preference.
  - Accents are lightened, the target highlight is muted, and nothing glares.
  - Open-state accent borders are distinguishable.
  - Dark-mode accents are slightly brighter than light-mode ones, but they appear only on names, top rules and thin left rules.
- **No colour-only state:** state is always in words ("Read", "Open below", "Close") or chevrons.

## 19. Performance

- **Client JavaScript:** one minified module of 4.3 KB, served as a single cached file (see "Count changes" in §3). No framework.
- **CSS:** one stylesheet.
- **Render-blocking requests:** the stylesheet only. The inline head script is tiny.
- **Images:** none, so no image-driven layout shift.
- **Unused client dependencies:** none.
- **Bulk open:** about 30 ms on the longest page.
- **Scope:** the script runs on every page but returns immediately where there are no answers. It is cached, so scoping it to question pages was not worth the complexity.

## 20. Security and robustness

- **Fragment handling:**
  - Fragments are decoded safely (M1) and looked up only by `getElementById`.
  - The only selector built from data uses `CSS.escape` on a build-time worldview id.
  - `innerHTML` is used once, for a fixed static cue string.
- **History state:** `history.replaceState` stores only ids. Restored ids are type-checked and resolved through `getElementById`.
- **Links to other question pages:** these are ordinary navigations. The same-page click handler checks the origin and pathname.
- **Rapid repeated toggling:** produced no inconsistent state; card and panel state matched in every sampled state.

## 21. Accessibility summary

- **Structure:**
  - Semantic headings: `h1` question; `h2` overview, full answers, each worldview, Sources, Related; `h3` sections; `h4` Deep-dive subheadings.
  - Landmarks: header, nav, main, footer.
  - Native `<details>`.
  - A real `button` for disclosure, with valid `aria-controls`.
- **No defects remain open** from this review.
- **Still untested:** real screen-reader announcements (NVDA, JAWS, VoiceOver) and Safari on macOS and iOS. They belong to UI-5 release QA.

## 22. Content immutability

These diffs against `origin/main` are empty, at the start and at the end:

```text
git diff origin/main -- src/content docs/ESV-QUOTATION-LEDGER.md
```

- **Unchanged:** answers, ESV wording, the source and thinker registries, citation locators and the ESV ledger.
- **Audit:** `audit-inventory.mjs` reports the same 168 answers, 134,273 words and 2,838 citations, with ESV candidates 104 and 0 unledgered. Its generated data files are unchanged.
- **Rendered text:** the answer body text on all 28 question pages is identical to `main` (§8).
- **No new theological summaries:** the only visible text added by the review is the restored space in two interface sentences.
- **Scholarship:** no substantive scholarly errors were observed during the review.

## 23. Corrections made

| File | Change | Finding |
|---|---|---|
| `src/scripts/answer-panels.ts` | Bring a closed answer into view; move focus out of a closing panel | I1 |
| `src/scripts/answer-panels.ts` | Keep open answers and levels in the history entry and restore them; `allOpen` start for late initialization | M2, I2 |
| `src/scripts/reveal-hash.ts` | Safe fragment decoding | M1 |
| `src/scripts/reveal-hash.ts` | `try`/`catch` initialization fallback; late-arrival handling | I2 |
| `src/layouts/BaseLayout.astro` | `DOMContentLoaded` check, plus a 4-second timer that starts when parsing ends | I2 |
| `src/pages/index.astro`, `src/pages/questions/index.astro` | Restore the missing spaces | M3 |
| `src/styles/explore.css` | Card head may wrap; phone kicker on its own line | M4, M5 |
| `docs/ARCHITECTURE.md`, `docs/ui/UI1-RESEARCH-LIBRARY.md` | Annotate the changed script behaviour | M6 |
| `docs/ui/screenshots/ui1-review/` | Five review screenshots | — |

## 24. Deferred (not started)

- **UI-2 Compare:** any-two selector and URL state. The history-entry state added here deliberately does not touch the URL.
- **UI-3 Christian Case:** the Examine grouping is ready for it.
- **UI-4 research interface:**
  - citation popovers;
  - citation markers wrapping to the start of a line;
  - `↩` backlink wrapping;
  - optionally, the "Featured" text spacing;
  - optionally, the method-page table text.
- **UI-5 release QA:** NVDA, JAWS and VoiceOver; Safari on macOS and iOS; branded Firefox; physical print.
- **Portraits** were not generated.

## 25. Final validation

| Command | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing, `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | Clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, unledgered 0, orphan ledger rows 0; generated data unchanged |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 96 pages, 168/168 answers, 10,831 links (+96 explained in §3), 2,725 external, 0 outside base, 0 broken, 0 duplicate IDs |

**Final interaction regression:** 16 checks per engine.

- Initial state.
- Six direct-fragment loads.
- The backlink into a closed Deep dive, and the same backlink again.
- Sticky close.
- Two malformed hashes.
- Card-cue sync.
- Open all and close all.
- No page errors.

Results: **0 failures** in Chrome 155, Firefox 144 and WebKit 26.0.

## 26. Merge recommendation

**MERGE.**

- **Locked requirements:** UI-1 meets the locked Explore requirements:
  - questions first;
  - six theses at a glance in 3 × 2 / 2 × 3 / 1 column;
  - one interaction to the positive account and two to the critique;
  - every section preserved;
  - shareable fragments that open every closed ancestor;
  - full access without JavaScript;
  - complete print.
- **Fixes:** both IMPORTANT findings and all six MINOR findings are fixed on this branch.
- **Remaining limitations** (§§9, 15, 16) are recorded browser behaviours or untested environments, not defects in the implementation:
  - Firefox text fragments;
  - Firefox 141 print without JavaScript;
  - WebKit Back-scroll timing;
  - no real screen reader.

PR #27 was not merged by this review. UI-2, UI-3 and portrait generation were not begun.
