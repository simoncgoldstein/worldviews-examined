# UI-2 Independent Review — Any-Two Worldview Comparison

**PR:** https://github.com/simoncgoldstein/worldviews-examined/pull/30 (branch `ui2-any-two-compare`)
**Date:** 2026-10-12
**Reviewer:** Claude Opus 5.5, one fresh top-level session, no subagents. This session did not produce UI-2 and did not see the production session; the production record (`UI2-COMPARE.md`) was treated as claims to verify.
**Scope:** review, synchronization with `main` and corrections only. PR #30 was not merged. UI-3, UI-4, the header theme switch and portraits were not started.

## 1. SHAs and synchronization

| Item | SHA |
|---|---|
| Starting production head | `484408a1344892f1347a163a176d36364dfcaf0d` |
| Original merge base (UI-2 start) | `ef6e18a6d2000cd290f9ed6302200199bc668da0` |
| `origin/main` at review start, re-fetched before integration (unchanged) | `f3b17b8f4bfae06a651ebe6e37781f98fc1501cb` |
| Merge commit bringing `main` into the branch | `2301b12` |
| Merge base after integration | `f3b17b8` (the branch now contains all of `main`) |
| Review fixes | `dbb5403` |
| Review record and screenshots | `d80bfd8` |
| Final branch head | the docs-only commit that records these SHAs, the child of `d80bfd8` |

**Method.** `git fetch` confirmed `main` was still `f3b17b8` (PR #28 `0428e56`, PR #29 `641ad2f`). The branch was updated with a normal merge commit (`git merge --no-ff origin/main`). Production commits were kept, and no history was rewritten or force-pushed.

- The merge was conflict-free.
- `main` changed only two files since `ef6e18a`:
  - `src/components/AnswerPanel.astro`: PR #28 deletes the scope and tradition-note markup;
  - `docs/DESIGN-SPEC-V1.md`: PR #29 adds §13.
- UI-2's only edit to `AnswerPanel.astro` (the `data-ns` hook on the `<article>`) is on a different line, so both changes survive.

**PR #28 regression check (after integration):**

1. **Explore:** no `.answer__scope` or `.tradition-notes` in any built question page (`grep` over `dist/questions`: none). The pair matrix also asserts their absence from every answer on all 28 questions.
2. **Compare:** the At-a-glance row now receives the thesis alone. The stale selector, CSS rule and comments that still named `.answer__scope` and `.tradition-notes` were removed (finding M1).
3. **Metadata intact:** all 168 answer files still carry `scope:` in frontmatter, and the `traditionNotes` schema field is unchanged. `git diff origin/main -- src/content` is empty.
4. **Documentation corrected:** `CONTENT-MODEL.md` and `UI2-COMPARE.md` (§3, §6, §13 and a screenshot note) now describe the thesis-only At a glance.
5. **Nothing else reverted:** `git diff origin/main` shows no change to `DESIGN-SPEC-V1.md`, and none to any file PR #28 or #29 touched other than the `data-ns` hook.

## 2. Changed-file coverage

Every file in `git diff origin/main` was read in full:

- **Runtime:**
  - `src/scripts/compare.ts`, `reveal-hash.ts`, `answer-panels.ts`;
  - `src/components/CompareView.astro`, `ModeSwitch.astro`, `AnswerPanel.astro`, `SourceList.astro`;
  - `src/pages/questions/[slug].astro`, `src/pages/index.astro`;
  - `src/layouts/BaseLayout.astro`;
  - `src/styles/compare.css`, `global.css`;
  - `scripts/check-built-links.mjs`.
- **Docs:** `README.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT-MODEL.md`, `docs/ui/UI2-COMPARE.md`, and the seven producer screenshots.
- **Unchanged shared code read for context:** `AnswerLevel.astro`, `AnswerSection.astro`, `explore.css`, `tokens.css`.
- **Required reading:**
  - `AGENTS.md`;
  - `DESIGN-SPEC-V1.md` (including §13);
  - `UI1-RESEARCH-LIBRARY.md`, `UI1-REVIEW.md`, `ARCHITECTURE.md`, `CONTENT-MODEL.md`.

## 3. Test environment

Playwright 1.57 scripts were kept in the session scratchpad (not committed). They drove three engines against `astro preview` on `http://[::1]:4329`:

| Engine | Build |
|---|---|
| Chrome | Google Chrome stable (installed), headless |
| Firefox | Playwright Firefox build 1497 (Gecko 144) |
| WebKit | Playwright WebKit build 2227 (WebKit 26.0 on Windows). **Not Safari, not macOS or iOS.** |

The machine had about 1.4 GB of free memory. Every suite ran **serially**: one engine at a time, one browser process per suite, one page at a time, a fresh context per question, and the process closed before the next suite. No assertion was weakened for memory.

| Suite | What it does |
|---|---|
| `matrix` | 28 questions × 30 ordered pairs, structural checks and restoration (§5) |
| `fail` | 9 failure-injection scenarios (§4) |
| `urls` | 24 URL cases (§9) |
| `flows` | Citations, fragments, unselected targets, history, reload, thinker and related-question round trips, keyboard, anchoring, rate limits (about 90 checks) |
| `bfcache` | Real back/forward-cache traversal (§11) |
| `slow` | No-JS, blocked, delayed and throttled scripts (§15) |
| `print` | Print media (§16) |
| `perf` | Performance; Chrome only, because it uses CDP (§18) |
| `a11y` | Accessibility tree (§14) |
| `phone` | 320/390 matched layout (§7) |
| `shots` | Screenshots and layout measurements |

## 4. DOM movement and restoration

**Verdict:** the architecture is sound and is kept. One placeholder is used per moved node, identity is semantic, and nodes are never copied.

**Independently verified on all 28 questions:**

- **Rows:** every section lands in its semantic row:
  - thesis → glance;
  - `the-view` / `the-christian-view` → view;
  - `what-this-explains-well` → strengths;
  - `data-level=examine` → examine;
  - `data-level=study` → study;
  - footer → footer.

  The expectation was computed independently, by classifying the body's children in Explore before Compare was entered.
- **Placeholders:** exactly one `<!--compare-->` per moved node in every state (count of comments = count of cell children).
- **Restoration:** after 30 pair changes and the return to Explore, the `.reading`, `#overview` and `#sources` `outerHTML` are byte-identical to the pre-Compare snapshot on every question. This covers ids, citation ids, backlink anchors, heading order, `hidden` attributes and footers. No comments, prefixes or stranded cell children remain.
- **Native state:** `<details>` state travels with the node. Opening Examine in Compare, swapping away and back shows it still open. Listeners keep working, because the same nodes are used: the summaries, citations and backlinks are all exercised after moves.
- **Focus:** `keepingFocus` restores focus to a moved control. A fragment that hides the focused element moves focus to the target (§12).
- **Nothing dropped or duplicated:** the text and id list of each Compare cell equal those of the corresponding Explore rows. There were 0 duplicate ids in the live document in every state tested.
- **Unexpected elements:** any non-standard body child would go to the footer row. The matrix found none, and every answer has exactly one of each row.

### Failure injection: finding I1

Exceptions were injected by wrapping `Document.createComment`, `CharacterData.replaceWith` and a `querySelectorAll` call.

| Scenario | Before the fix (Chrome) | After the fix (all three engines) |
|---|---|---|
| Init, before the first move | Content restored; **URL still claimed Compare** | Explore readable, all 6 answers and 6 source groups, URL cleaned |
| Init, first worldview partly moved | Same | Pass |
| Init, second worldview partly moved | Same | Pass |
| Init, after both moved (sources step) | Same | Pass |
| Pair change, partly moved | **Answer split between layouts**; 3 orphan placeholders; 2 prefixes left; Compare region visible but broken; 2 source groups; URL claimed the new pair | Pass |
| Swap, partly moved | Same class | Pass |
| Restoration (return to Explore) throws | **10 nodes stranded in the hidden region with no record**: `unmount` emptied its list (`splice(0)`) before restoring | Pass |
| Restoration during a pair change | 8 stranded | Pass |
| Back (popstate), restoration throws | 11 stranded | Pass |

**Fix** (`compare.ts`):

- `unmount` forgets an entry only after its node is home, and finishes the loop before rethrowing.
- `apply` wraps the rearrangement. On any exception it calls `resetCompare()`. This now:
  1. restores every node, with a second pass;
  2. unhides Explore, the overview and all source groups;
  3. hides the sources note;
  4. **withdraws the Compare controls** (the mode switch), since they can no longer be trusted;
  5. resumes Explore state;
  6. rewrites the URL to Explore.

  Each step runs even if an earlier one throws.
- `navigate` and `onPopState` do nothing after a withdrawal. Back to an older comparison entry then shows Explore and corrects the URL.

No natural trigger for these exceptions was found. They were judged IMPORTANT because the brief requires a recoverable page and the old restoration path could lose scholarly text irrecoverably.

## 5. All 15 pairs (30 ordered)

The `matrix` suite ran every ordered pair (each of the 15 unordered pairs in both orders) on **all 28 questions**, in all three engines, through the real controls: Swap, then each `<select>` dispatching `change`.

**Checks for every state:**

- **URL:** `?mode=compare&views=a,b`.
- **Selects:** both show the pair; exactly the other side's choice is disabled.
- **Cells:** every cell's `data-worldview` and label are correct; per row, text and id list equal the independent Explore expectation; nothing of either answer is left in its panel; the four unselected answers are intact.
- **Prefixes:** exactly one per section heading, naming the right worldview, as the heading's first child. None outside the region.
- **Ids:** 0 duplicates in the live DOM; placeholders = moved nodes.
- **Sources:** exactly the two selected groups are visible. Every group's `outerHTML` (apart from `hidden`) is byte-identical to its Explore form, so page-level numbering, `start` and source ids are unchanged.
- **Links:** every in-cell `#` link resolves, and every citation marker targets a source in a visible group.
- **Sources note:** names both worldviews.

**Return to Explore:** byte-for-byte restoration (§4), URL `''`.

| Engine | Result |
|---|---|
| Chrome | 28 questions × 30 pairs: **0 failures** |
| Firefox | 28 × 30: **0 failures** |
| WebKit | 28 × 30: **0 failures** (paced 650 ms per pair; see §21) |

All the required examples are pairs in this matrix:

- Christianity–Naturalism, Christianity–Islam, Judaism–Islam, Hindu–Buddhist and Naturalism–Buddhism;
- non-Christian pairs and reversed orders.

No comparison requires Christianity.

## 6. Desktop comparison (≥ 70rem)

**Measured (Chrome, 1,280 and 1,600):**

- cells 526px wide at an 18px font;
- **57–59 characters per line** on the longest paragraph of each row, slightly above the producer's 50–56 estimate and within a comfortable measure;
- 0 overflow at every width tested.

**Assessment:**

- **Alignment:** corresponding sections start on the same line, and nothing is padded. The shorter side's accent rule ends with its text (screenshot `ui2-review/02`).
- **Blank space:** this leaves blank space beside a shorter passage. That is the honest consequence of not padding, and the sticky selectors keep naming both columns.
- **Examine:** each side keeps its real asymmetric headings.
  - The Christian side: ◇ Strongest objection / Christian reply.
  - Other sides: § Christian response / ◇ Pressure questions.

  No role is relabelled (`ui2-review/03`).
- **Genuine comparison:** Compare supports real comparison rather than two essays side by side, because stage by stage the same kind of material sits level. The neutral stage hints ("Each answer's own analysis, under its own headings") describe the layout, not the content.

## 7. Mobile matched sections (< 70rem)

**Verified order at 320 and 390** (`phone` suite, all three engines):

View A → View B → Strengths A → Strengths B → Examine A → Examine B → Study A → Study B, then the footers.

At 320 and 390 there is no overflow, and all controls are at least 44px.

### Finding I4: losing track mid-passage

- **Before:** the worldview label sat only at the top of each passage. Several passages run for many phone screens: Hindu views, and Deep dives once opened. Mid-passage, the only cue was a 2px accent rule, and some accent pairs are close in dark mode (Naturalism slate and Buddhist lilac).
- **Why it matters:** Explore keeps an open answer's heading sticky for exactly this reason, so the stacked Compare layout fell short of Explore. The brief's criterion is "Readers should never lose track of which worldview they are reading."
- **Fix (CSS only):** below 70rem the per-passage label is `position: sticky; top: 0` inside its own cell, with the page background behind it. It pins while its passage scrolls and hands over to the next passage's label at the cell boundary (`ui2-review/04`, `05`). Compare's stacked `scroll-padding-top` rose from 1.5rem to 3rem, so fragment targets land clear of the pinned label (verified: backlink target top ≥ label bottom at 320 and 390 in all engines).
- **Unchanged:** the label stays `aria-hidden`, because the headings carry the visually hidden prefixes. Print resets it to static.

**Scrolling cost.** Matched pairs on a phone mean scrolling past A's full passage to reach B's, which can be long for Deep dives. That is inherent to the deliberate matched-section design. The alternatives (tabs, or a column switcher) would hide one side. Accepted.

## 8. Mode switch, selectors and bulk controls

All verified in all three engines unless noted:

- **Mode links:** Explore and Compare are real links. With a modifier key the browser handles them (new tab). A plain click is handled in place, and focus stays on the link.
- **Selector independence:** changing one select never changes the other (`urls`: "notice cleared, first side kept"; `flows` step 8).
- **Disabled options:** exactly the other side's choice. The accessibility tree shows `combobox "First worldview"` / `"Second worldview"`.
- **Scripted duplicate** dispatched on the second select: becomes a swap (`hinduism,naturalism`).
- **Swap:** Enter keeps focus and swaps. WebKit's mouse click does not focus buttons (platform behaviour).
- **Open both / Close both:**
  - opens both; label and `aria-label` become "Close both" / "Close both Examine sections";
  - closing one side reverts the label to "Open both";
  - Study's button affects Study only.
- **Status region:** announces "Comparing Hindu traditions and Naturalistic atheism."
- **Focus rings:** a 3px ring was visible on the selects, Swap, the mode links and the summaries (keyboard).

### Sticky selector bar

- **Desktop:** 91px of a 900px viewport (10%); `scroll-padding-top` is 7rem (112px).
- **Anchors:** in `flows`, every citation, source and backlink target landed fully below the bar.
- **Other sticky elements:** no other sticky element is visible in Compare. The Explore answer headings are in the hidden region.
- **Zoom:**
  - at 110% zoom of 1,280 (1,164 CSS px) the bar stays sticky at 91px (11%);
  - at 125% and above, and with larger default text, the page drops below 70rem and the bar is not sticky.
- **Verdict:** acceptable. The bar is the column header and is what keeps long rows legible, so no change was made.

## 9. URL parsing and canonicalization

`urls` suite, 24 cases. **All pass in all three engines.** The address bar names exactly what is shown, and a repair never adds a history entry (history length equal to the clean load).

| Input | Shown | Final URL |
|---|---|---|
| none | Explore | `''` |
| `?mode=compare` / `views=` empty | Christianity / Naturalism + notice | canonical |
| `views=islam` | Islam / Christianity + notice | canonical |
| `views=judaism,judaism` | Judaism / Christianity + notice | canonical |
| `views=foo,bar`; `views=islam,foo` | default + notice; Islam / Christianity + notice | canonical |
| three views | first two + notice | canonical |
| `views=%E0%A4`, `views=%` (invalid encoding) | default + notice, no exception | canonical |
| `mode=case`, `mode=explore`, `mode=` , `views` without mode | Explore | `''` |
| `mode=compare&mode=explore` / reversed | first `mode` decides | canonical / `''` |
| duplicated `views` params | joined; first two + notice | canonical |
| `utm_source=x&mode=compare&views=islam,judaism` | Islam / Judaism | unchanged (already exact) |
| `utm_source=x&mode=compare&views=islam` | Islam / Christianity + notice | `?mode=compare&views=islam,christianity&utm_source=x` |
| `utm_source=x&mode=case` | Explore | `?utm_source=x` |
| `mode=COMPARE&views=Judaism%2CIslam`; `views=judaism+islam` | Judaism / Islam | canonical |

**Note:** `UI2-COMPARE.md` §10 says unrelated parameters are "kept, after `mode` and `views`". That holds only when the URL is rewritten. An already-exact URL with leading unrelated parameters is left as written, which is still accurate.

The repair notice is visible text above the rows, not a live region. On load it is ordinary content, and it disappears at the next selection.

## 10. History, Back/Forward

**`flows` step 6** (all engines):

1. Explore → Compare → change second → Swap → change first → Explore: **one entry per change** (+5).
2. Back ×5 and Forward ×5 each restore the right mode, pair and URL.
3. A disclosure click adds no entry.

**Other round trips:**

- Reload keeps the pair from the URL, and the open Examine section from `history.state`. **Firefox exception:** the Playwright Firefox build drops `history.state` on reload, so open levels are lost there, as UI-1 recorded.
- Thinker link → Back restores the comparison. Chrome and Firefox also restore the scroll position. **WebKit exception:** it returned to y = 0 (§21).
- A related-question link carries the pair and opens the next question in the same comparison.

### Finding I3: Firefox scroll after an Explore switch

- **Symptom:** in Compare at y ≈ 1,500, following a link to an unselected source, an unselected source group or `#overview` switched to Explore (correct). But **Back restored the comparison about 1,846px below** where the reader had been (1,500 → 3,346, and 1,681 → 3,527 in the click variant). Chrome and WebKit were exact.
- **Cause:** Firefox restores a same-document entry's scroll position *before* `popstate`. Its CSS scroll anchoring then shifted that position while `onPopState` rearranged the layout. WebKit has no scroll anchoring, and Chrome restores after the handler.
- **Fix:** `onPopState` records `scrollY` before re-applying the entry and restores it afterwards. In browsers that restore later the call is harmless.
- **Result:** Firefox now returns exactly (all 12 unselected-target Back checks pass); Chrome and WebKit are unchanged.

### Rate limits

| Engine | Measured limit |
|---|---|
| WebKit | 100 history writes per 10 s (`pushState` and `replaceState` both count) |
| Firefox | 200 per 10 s |
| Chrome | no limit observed (1,000 writes) |

- Each reader change costs three writes: a save, the push and a save. A WebKit reader would therefore need more than 33 changes in 10 seconds to hit the limit.
- When it is hit, the change is refused and the controls snap back, so URL and view never disagree. A 160-change scripted burst left URL, selects and view in agreement in every engine.
- Not a defect. Recorded in §29.

## 11. bfcache

**Chrome: real bfcache restores verified.** Playwright launches Chromium with `--disable-back-forward-cache`, so the suite removed that default argument. The evidence of a genuine restore was:

- `pageshow.persisted === true`, in a listener installed before any page script;
- a JS marker set before leaving still present;
- Playwright's `goBack` never seeing a `load` event.

| Case | Result |
|---|---|
| A. Compare (Judaism / Islam, Examine open) → thinker page → Back | Restored from bfcache. Pair, selects, URL and open Examine agree; 2 source groups. The restored page's controls work (a pair change), and in-document Back afterwards returns to the previous pair. |
| B. Compare → Explore (same document) → thinker → Back | Restored from bfcache in Explore; 6 groups; no placeholders. A second Back restores the comparison. |

**Verdict:** no `pageshow` reconciliation is needed. A restore returns the DOM exactly as left, and that DOM always matches its URL, because no state is applied without its URL.

**Firefox and WebKit: not observable here.**

- **Default prefs:** Firefox and WebKit reloaded the page (`persisted: false`); every check passed after the reload.
- **With bfcache prefs:** with Firefox's session-history prefs enabled, Playwright lost the page's execution context after Back, so a restore could not be inspected.

This is recorded as untested, not passed.

## 12. Deep links and citation navigation

**`flows` steps 1–5, all engines.**

| Sequence | Result |
|---|---|
| Text → citation → source → backlink → text, first column | Stays in Compare; each target fully below the sticky bar; Back ×2 retraces (source, then start) |
| Same, second column | Same |
| Backlink into **closed Examine**, each side | Opens the `<details>`; marker on screen |
| Backlink into **closed Deep dive**, each side | Same |
| The same backlink again after re-closing (no `hashchange`) | Reopens; marker on screen |
| Direct load: citation in a closed Deep dive / heading in closed Examine / selected source / `#sources` | Compare kept, target revealed below the bar, URL unchanged |

**Unselected targets** (each tested by direct load, by click and by a `location.hash` change):

- the worldview anchor `#islam`;
- an unselected section heading;
- an unselected citation;
- an unselected source entry;
- an unselected source-group heading;
- `#overview`.

For each:

- the page switches to Explore, the target is visible and on screen, and the URL drops `mode`/`views`;
- Back restores the comparison, the URL and the scroll position (after I3);
- Forward returns to Explore.

A direct load from another site is the same as a direct load.

**Selected answers' own anchors** (`#christianity`, `#naturalism`, `…-heading`, `…-panel`):

- the page stays in Compare and lands on that side's thesis cell;
- `#…-heading` and the worldview id leave the hidden Explore panel untouched.

**Edge case:** navigating directly to a `…-panel` id makes the browser fire `beforematch` on that `hidden="until-found"` panel (all three engines). The hidden Explore copy of that answer is then open when the reader later returns to Explore. Nothing on the site links to a panel id (it is only an `aria-controls` target), so this is recorded as a limitation, not fixed.

**Focus:**

- when a switch to Explore hides the focused element, focus moves to the target (`settleFocus`);
- clicking a citation leaves focus on the link, which stays visible.

## 13. Focus and keyboard

Tab order with real key events:

**Compare link → First select → Swap → Second select → first-column focusables of the row → second column → next row.** The order follows visual order, and every focused element is visible.

- Chrome and Firefox tab to links as well as controls.
- WebKit tabs only to controls and summaries by default (Safari's "Press Tab to highlight each item" behaviour). Its order is still monotone.

Focus is never left in a hidden region:

| Action | Focus afterwards |
|---|---|
| Mode change | Stays on the mode link |
| Select change | Stays on the select |
| Swap (keyboard) | Stays on Swap |
| Open both | Stays on the button |
| Unselected-target switch | Moves to the target |
| Late script (after I2) | Kept on the reader's link |

## 14. Accessibility tree

Inspected with Playwright `ariaSnapshot` in all three engines, after six swaps.

**Headings:**

- `h1` question;
- `h2` "Compare two answers", At a glance, Understand, Examine, Study, Sources, Related questions;
- `h3` worldview names at a glance;
- section `h3`s named with their worldview, for example `region "Classical Islam: The view"` › `heading "Classical Islam: The view" [level=3]`. The `<summary>` reads "Classical Islam: Christian response and Pressure questions".

**Checks:**

- **Prefixes:** no repeated prefixes after six swaps; the first side precedes the second in reading order; none remain after returning to Explore.
- **Hidden content:** the hidden Explore content (overview and unselected answers) is absent from the tree.
- **Controls:** named, with their scope stated ("Close both Examine sections", "Open both Deep dives").

**Not done:** no screen reader (NVDA, JAWS or VoiceOver) was available. Accessibility-tree inspection is not equivalent to a screen reader and does not establish how announcements sound.

## 15. No-JavaScript and slow or failed scripts

**`slow` suite, all engines.**

| Case | Result |
|---|---|
| JavaScript disabled, Compare URL | Full Explore: 6/6 answers, overview, 6 source groups. No mode switch, no Compare region, 0 visible buttons or selects. The `<noscript>` line is shown. |
| Module blocked | Explore at 1.5 s: 6/6, overview, 6 groups, no controls |
| Exceptions in init or mid-move | §4: full Explore, URL cleaned |
| Module delayed 7 s, reader idle | Nothing until the 4 s fallback (≈ 4.2–5.0 s), then full Explore. When the module arrives, the requested comparison is applied. |
| Module delayed 7 s, **reader already reading** | See finding I2 |
| 12 KB/s network (Chrome) | Comparison ready at ≈ 8.7 s. Samples before about 3.6 s report layout only: the render-blocking stylesheet had not loaded, so nothing was painted. After it loads the Explore regions stay hidden until the comparison is ready. |
| Reload in Compare | §10 |

### Finding I2: a late module disrupted an active reader

- **Setup:** the production record accepted that a module arriving after the fallback switches the visible Explore text into Compare. The disruption was measured as follows. With the module held for 7 s, the reader scrolled into the Hindu answer and focused one of its citations at 5.2 s.
- **Before:**
  - when the module arrived, that answer vanished;
  - scroll jumped from 7,671 to 4,990;
  - focus fell to `<body>`;
  - the reader was in a different worldview's text with no warning.
- **Fix:**
  - If the script is late and the reader has scrolled or focused anything, the page stays in Explore. The URL is rewritten to Explore, so it names what is shown, and the Compare link offers the requested pair (`?mode=compare&views=judaism,islam`).
  - An idle reader (still at the top, nothing focused) gets the comparison they asked for, as before.
  - `reveal-hash.ts` also keeps the late reader's position while the controls appear above them. WebKit has no CSS scroll anchoring (measured: content inserted above moves the text by its full height), so without this the passage would shift there.
- **After** (all three engines): the passage stays exactly where it was (top 76 → 76), focus stays on the citation, and the URL and mode switch are correct.

## 16. Print

Print media emulation plus dispatched `beforeprint`/`afterprint` (Playwright's emulation fires neither), on `what-happens-after-death`:

| Case | Chrome, Firefox, WebKit (identical) |
|---|---|
| Explore, JavaScript | 6/6 answers; 12/12 levels open; 48/48 level paragraphs; 97/97 citations; 6 groups; no controls. Answers closed again after `afterprint`. |
| Compare, all closed (Hindu / Buddhist) | "Compared: Hindu traditions and Buddhist traditions"; 12 passages, each labelled with its worldview (6 + 6); every level, paragraph and citation visible; 2 groups; no controls. All closed again after printing. |
| Compare, Examine open | Same; afterwards Examine open and Study closed, as before |
| Compare, Study open | Same; afterwards Study open |
| Compare URL, JavaScript disabled | Full Explore; 48/48 level paragraphs and 97/97 citations printed via the print CSS; 6 groups |

No physical printer, OS print dialog or macOS Safari was used.

## 17. Visual QA

**Widths:** 320, 390, 640, 768, 1,024, 1,280 and 1,600, in light and dark. Also tested: 150% root text at 390 and 1,280, and 110%, 125% and 200% zoom equivalents. There was 0 horizontal overflow everywhere.

**Desktop:**

- **Character:** it reads as a scholarly library: serif text in measured columns, quiet sans controls, hairline stage rules, no cards and no shadows.
- **Orientation:** the two traditions are named in words three times over: the selects, the At-a-glance names, and the sticky header while reading.
- **Colour:** accent colour only marks rules and labels. Nothing suggests a winner.
- **Rules:** section divisions are at the right weight. The strong rule marks a stage, and hairlines mark the levels.

**Phones:**

- three compact control rows;
- with the pinned label (I4) the reader always knows whose passage it is;
- at 320 the first thesis starts below the first screen, because the header navigation wraps (that is the site header, not UI-2).

**Producer screenshots:** 01–04, 06 and 07 predate PR #28 and still show scope lines under the theses (a note was added to `UI2-COMPARE.md` §21). Otherwise the producer's images match the current build.

**Review screenshots** (`docs/ui/screenshots/ui2-review/`):

| File | Shows |
|---|---|
| `01-theses-after-pr28-1280-light.png` | At a glance after integration: the thesis alone, no scope lines |
| `02-sticky-selectors-1280-light.png` | Deep in a long Christian passage beside a shorter Islamic one; the sticky selectors name the columns; no padding |
| `03-examine-judaism-islam-1600-dark.png` | Two non-Christian answers' own Examine headings, dark theme |
| `04-pinned-label-mid-passage-390-light.png` | I4 fixed: "Hindu traditions" pinned mid-passage, then the Buddhist passage's own label |
| `05-pinned-label-deep-dive-390-dark.png` | I4 fixed in dark mode inside a long Deep dive |

## 18. Performance

| Item | Result |
|---|---|
| Shared module (`reveal-hash` + `answer-panels` + `compare`) | **13,974 B minified, 4,754 B gzip** (producer: 13,054 B / 4,509 B gzip, verified on the pre-fix build; the fixes add 920 B). One file, no imports, no `fetch`, no framework. |
| Requests on load | 1 script. No MDX/JSON fetch at any time. |
| Requests during 300 changes | Only favicon re-requests (headless Chrome fetches one per history entry) and two lazily loaded font subsets. No content. |
| CLS on loading a Compare URL | 0.0000 |
| 300 pair/swap/mode changes (Chrome, 55 ms apart) | Per change: median 15.9 ms, p95 23.8 ms, max 42.3 ms (final build; an earlier run gave 18.6, 30.4 and 66.5 ms) |
| Event listeners (CDP, after GC) | 58 → 58 |
| DOM nodes | 6,102 → 6,086 |
| `history.state` | 25 characters |
| `history.length` | Capped by Chrome at 50 |
| Leftover placeholders | Equal to moved nodes; none after Explore |

No optimization was warranted.

## 19. §13 compatibility (design decisions not implemented here)

- **No dependency on scope blocks:** Compare no longer references the scope or tradition-note blocks.
- **Citation previews (§13.2):** source ids and `#…-src-N` anchors are unchanged, and nodes are moved rather than copied, so a preview can resolve any marker by id in either layout.
- **Answer footer (§13.3):** stays one element, moved whole into the footer row, so a redesigned footer will travel with it.
- **Theme switch (§13.1):** Compare uses only `tokens.css` variables (`--wv`, `--color-*`), with no hard-coded colours, so a manual light/dark toggle will apply unchanged.
- **Accent trial (§13.6):** worldview colour is token-driven (`[data-worldview] { --wv }`), so the trial can be swapped in one place.
- **Concern for UI-4 (§13.4 source filters):** Compare already hides unselected source groups with `hidden`. A future filter must compose with that, not overwrite it. For example, in Compare the filter could offer only the two selected groups, and Compare should own the `hidden` attribute. Note this in UI-4.

## 20. Static link checker

A temporary probe page was added to `dist/` and then removed.

| Link | Result |
|---|---|
| Valid route with Compare parameters | OK |
| Valid route + Compare parameters + valid fragment | OK |
| Same-page `?mode=…#existing` | OK |
| Path with a second `?` in the query | OK (only the first `?` splits) |
| Nonexistent route with parameters | **BROKEN** |
| Valid route with parameters + nonexistent fragment | **BAD FRAGMENT** |
| Same-page `?mode=compare#missing` | **BAD FRAGMENT** |
| Path outside `/worldviews-examined/` with parameters | **OUTSIDE BASE** |
| Duplicate id | **DUPLICATE ID** |

The checker exited 1. Only the query string is ignored when locating the static file, and fragments are still checked. On the real build: existing citation backlinks pass, and there are 0 duplicate ids.

## 21. Browser-specific behaviour: classification

| Observation | Engine | Classification |
|---|---|---|
| Reload loses open Examine/Study | Firefox (Playwright build) | Browser/test-build limitation (`history.state` dropped); pair restored from URL |
| Back from another page lands at y = 0 | WebKit | Browser timing: WebKit restores scroll while the pre-script CSS keeps the page short, and the same happens in Explore (UI-1). Not caused by DOM movement. Real Safari normally serves Back from its page cache, which Playwright WebKit did not use. Not compensated (the brief rules out a custom history framework). |
| Mouse click does not focus a button | WebKit | Platform behaviour; keyboard keeps focus |
| Back after an Explore switch, scroll off by ≈ 1,846px | Firefox | **Implementation (I3), fixed** |
| No CSS scroll anchoring | WebKit | Platform; the late-load position is now kept explicitly (I2) |
| 100 history writes per 10 s | WebKit | Platform; graceful refusal. The matrix is paced in WebKit for this reason |

## 22. Scholarly content immutability

- `git diff origin/main -- src/content docs/ESV-QUOTATION-LEDGER.md research` is **empty**. No source id, thinker, locator or quotation changed.
- **ESV:** `audit-inventory.mjs` reports 104 ESV candidates, 0 unledgered and 0 orphan ledger rows. The script rewrote line endings only in `research/final-audit/data`; those were restored with `git checkout -- research`.
- **New visible text** is interface text only:
  - the late-load behaviour adds none;
  - the sticky label is the existing worldview name.

  No claims about any tradition were added.

## 23. Findings and fixes

| # | Severity | Finding | Fix |
|---|---|---|---|
| I1 | IMPORTANT | DOM movement was not recoverable outside initialization. An exception during a pair change, swap, return to Explore or Back left answers split between layouts. `unmount` emptied its list before restoring, so a restoration failure stranded up to 11 nodes in the hidden region irrecoverably. The URL went on claiming Compare. | Transactional `unmount`; `apply` falls back through a hardened `resetCompare()` (restore, unhide, withdraw controls, fix URL); guards in `navigate`/`onPopState`. 9 scenarios pass in all engines. |
| I2 | IMPORTANT | A module arriving after the 4 s fallback switched an active reader's Explore page into Compare: the passage vanished, scroll jumped about 2,700px, focus went to `<body>`. | A late script keeps Explore if the reader has scrolled or focused, and offers the pair via the Compare link (URL truthful). The late reader's position is kept explicitly (WebKit has no scroll anchoring). |
| I3 | IMPORTANT | Firefox: Back from an Explore switch (unselected source, source group, `#overview`) restored the comparison about 1,846px off. | `onPopState` preserves the browser-restored `scrollY` across the rearrangement. |
| I4 | IMPORTANT | Stacked layout (< 70rem): mid-passage, nothing named the worldview but a 2px rule. Explore keeps an open answer's heading sticky for this reason. | Sticky per-passage label within its cell; stacked `scroll-padding-top` 3rem. |
| M1 | MINOR | After integrating PR #28: `compare.ts`, `compare.css`, the `CompareView.astro` comment, `CONTENT-MODEL.md` and `UI2-COMPARE.md` still described moving or showing scope and tradition notes. The behaviour was already right, but the code and docs were not. | Selector and CSS removed; comments and docs corrected; screenshot note added. |

**Totals: 0 BLOCKER, 4 IMPORTANT, 1 MINOR. All fixed.**

**Recorded, not changed:**

- the `-panel` `beforematch` edge (§12);
- the §10 parameter-order wording;
- 3 history writes per change (§10).

## 24. Validation (final build)

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` (`astro check`) | 0 errors, 0 warnings, 1 hint (pre-existing, `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, unledgered 0, orphan rows 0 |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 96 pages, 168/168 answers rendered, **10,888 links**, 4,569 cross-page, 8,710 fragments, 2,725 external, 0 outside base, 0 broken, 0 duplicate ids |

**Link count.** The total is 10,888, the same as the producer's count on the older base. PR #28 removed only plain text (the scope sentences and tradition notes contained no links), and none of the review fixes adds or removes a link.

**Environment note:** `node_modules/.bin` was missing at the start, probably after the production session's worktree-junction cleanup, and a stale `astro preview` from that session held files open. That process was stopped and `npm ci` restored the install from the unchanged lockfile.

## 25. Three-engine coverage on the final build

Every suite was rerun on the final build: after the last code change (I3) and with the final CSS (I4). Engines ran serially: all Chrome suites, then Firefox, with WebKit run separately on the same build.

| Suite | Chrome | Firefox | WebKit |
|---|---|---|---|
| `matrix`: 28 questions × 30 ordered pairs, restoration | PASS | PASS | PASS (paced) |
| `fail`: 9 injection scenarios | PASS | PASS | PASS |
| `urls`: 24 cases | PASS | PASS | PASS |
| `flows`: citations, fragments, unselected targets, history, reload, round trips, keyboard, anchoring, burst | PASS | PASS (reload levels: known limitation) | PASS (tab order to controls only; thinker Back at y = 0: known) |
| `bfcache` | PASS, real restores 2/2 | PASS on reload; restore not observable | PASS on reload; restore not observable |
| `slow`: no-JS, blocked, delayed (idle and reading), 12 KB/s | PASS (12 KB/s Chrome only) | PASS | PASS |
| `print`: 5 cases | PASS | PASS | PASS |
| `a11y`: accessibility tree | PASS | PASS | PASS |
| `phone`: 320/390 order, pinned label, anchors, touch targets | PASS | PASS | PASS |
| `perf` | PASS | n/a (CDP) | n/a (CDP) |

**Untested:**

- real bfcache in Firefox and WebKit;
- Safari;
- screen readers;
- physical print.

## 26. Accepted limitations

- **Environment:** no screen reader; no Safari on macOS or iOS; no branded Firefox release; no physical print.
- **bfcache:** real restores verified in Chrome only.
- **Firefox:** the Playwright build loses open levels on reload.
- **WebKit:** Back from another page returns to the top of the comparison (§21).
- **Find in page:** in Compare it reaches only the two compared answers, by design.
- **Late scripts:** a late script with an idle reader still applies the comparison; it now never does so under a reader.
- **Sticky selectors:** 91px (10%) on desktop.
- **Phones:** matched pairs mean scrolling past A's full passage to reach B's.
- **History limits:** WebKit allows 100 writes per 10 s and each change uses three; changes beyond that are refused gracefully.
- **Citation markers:** can still begin a line (UI-4).
- **`…-panel` direct navigation:** opens the hidden Explore copy of that answer (§12).
- **UI-4 note:** source filters must compose with Compare's hidden groups (§19).

## 27. Recommendation

**MERGE.**

- The branch contains current `main`, and PR #28's removal of scope and tradition notes holds in Explore and Compare, with the metadata intact.
- The four IMPORTANT defects and one MINOR defect found were all fixed.
- All 15 pairs (30 ordered) are verified on all 28 questions in three engines, with byte-for-byte restoration.
- No scholarly content or quotation changed.

The remaining limitations are environmental or documented design choices; none loses content, breaks a citation or misstates the URL.

The user merges. UI-3 was not started.
