# UI-2 — Any-two worldview comparison

**Branch:** `ui2-any-two-compare`
**Starting main:** `ef6e18a6d2000cd290f9ed6302200199bc668da0` (UI-1 merged, PR #27)
**Date:** 2026-10-12
**Specification:** `docs/DESIGN-SPEC-V1.md` §3 (Compare), §4, §5, §9. Locked decisions are followed; deviations are listed at the end.
**Scope:** the Compare reading mode on every question page. Christian Case (UI-3), citation previews and other research-interface work (UI-4) and thinker portraits were not started.

No scholarly content was changed. `git diff origin/main -- src/content docs/ESV-QUOTATION-LEDGER.md research` is empty. Built-page comparison against `main` (§22) shows the reading region and Sources of all 28 question pages are byte-identical apart from two documented additions.

## 1. Starting point

- `git fetch` confirmed `origin/main` at `ef6e18a` (the merge of PR #27, UI-1 plus its independent review fixes).
- The branch was cut from it with a clean working tree.
- The baseline reproduced the post-UI-1 numbers: 96 pages, 10,831 links, 0 broken, 0 duplicate IDs, 168 answers, 236 sources, 56 thinkers, 2,838 citations.

## 2. Implementation architecture

**Decision: one rendering of each answer, moved — not copied — between two layouts.**

The question page still renders the six answers exactly once, in Explore order (`AnswerPanel.astro`, unchanged apart from a `data-ns` hook). It now also renders `CompareView.astro`: a hidden, *empty* scaffold of four reading stages and six paired rows, each row holding one cell per side. The scaffold contains no answer text, no ids from the answers and no links.

With JavaScript, `src/scripts/compare.ts`:

1. finds each selected answer's parts by semantic identity (§13 below; never by text or position);
2. inserts a comment placeholder where each part sits;
3. moves the part (the same DOM node, with its ids, citation anchors, links, listeners and `<details>` state) into the row cell for its side;
4. on leaving Compare or choosing another pair, puts every node back at its placeholder.

**Why not the alternatives:**

| Option | Problem |
|---|---|
| Render the two answers a second time inside Compare | Duplicate ids for every section, citation, source backlink and Deep-dive heading; citation navigation would land in whichever copy came first. Explicitly prohibited. |
| Separate static routes (`/compare/...`) or 15–30 pages per question | 420–840 extra pages carrying the same prose; still no way to select any pair without either duplication or client rendering. The spec asks for URL state over the question page. |
| CSS-only layout over the Explore DOM (`display: contents` + grid placement) | Visual order (stage by stage) would differ from DOM, tab and screen-reader order (one whole answer, then the other), which §32 of the brief forbids. `<details>` cannot be split across rows, and `display: contents` on `article`/`section` still has accessibility-tree bugs in some engines. |
| Client framework or JSON content fetch | Not needed; adds a runtime dependency and a second content path. |

DOM movement is the simplest arrangement in which DOM order, tab order and visual order agree in both layouts, while every answer still exists once. It was proved as follows (§22):

- every answer exists exactly once (0 duplicate ids in every Compare state tested);
- source ids and citation numbers are unchanged (the nodes are the same);
- returning to Explore restores the reading region and Sources **byte-for-byte** (`outerHTML` compared before entering and after leaving Compare, for 30 ordered pairs on each of 28 questions);
- focus is kept (§14), Back/Forward is predictable (§11), print is complete (§17), and the static link checker still passes.

**Size:** the shared client module (UI-1's `reveal-hash.ts` and `answer-panels.ts` plus `compare.ts`) is 13.1 KB minified, 4.5 KB gzipped, one cached file. There is no framework, no state library, no `localStorage` and no runtime content fetch.

## 3. Why content is not duplicated

- Compare shows the selected answers' own rendered elements (`lede`, scope, tradition notes, the MDX sections, the Deep dive, the thinker list).
- No comparison summaries, generated counterarguments, pairwise text or second citation registry exist. No MDX file was added or edited.
- **Test:** for every ordered pair on every question, the text of the two Compare columns (excluding the interface labels) equals the text of the corresponding Explore answers, and nothing of either answer is left behind in its panel.

The only visible text Compare adds is interface text: stage names (At a glance, Understand, Examine, Study), a one-line hint per stage, the selector labels, Swap sides, Open both / Close both, the worldview names as labels, and a Sources note.

## 4. Mode-switch design

- A **Reading mode** navigation sits directly under the question title and summary: **Explore · Compare · Christian Case *In preparation***.
- Explore and Compare are real links:
  - Explore links to the question page;
  - Compare links to the same page with `?mode=compare&views=…`.
  - They can be opened in a new tab or copied. A plain click is handled in place.
- The active mode has `aria-current="true"`, ink text and a 2px navy underline; the other is muted.
- **Christian Case** is plain text with an italic *In preparation* note. It is not a link or a button.
- The switch uses the tab-like underline of the site header rather than a segmented "app" control. It is one row on desktop; on phones "Christian Case" wraps to a second line.
- **Default:** Explore. A URL without `mode` is Explore.
- Changing mode keeps the question and the reader's Explore state (open answers and levels); see §11.

## 5. Viewpoint selectors and swapping

**Controls:**

- Two native `<select>` elements, labelled **First worldview** and **Second worldview**, listing the six worldviews (those with an answer to the question) in the standing worldview order.
- Each select carries a 4px left border in the selected worldview's accent. The name is always in words.
- On phones the visible labels shorten to "First" and "Second" beside each select. The hidden word "worldview" keeps the full accessible name.
- **Swap sides** is a text button between the selects (DOM order: first, swap, second, which matches the visual order).

**Duplicates are prevented, not repaired:** each select disables the option chosen on the other side.

- Assistive technology announces it as unavailable; arrow keys skip it.
- If a duplicate were dispatched anyway (scripted), the change becomes a swap, so the pair is never invalid.

**Changing one side** never resets the other. It pushes a history entry with the new URL and announces "Comparing X and Y." in a polite status region.

**Initial pair:**

- The first two worldviews (Reformed Christianity and Naturalistic atheism).
- After a comparison in the same page session, the last pair chosen.

Nothing in the selectors implies order of merit. First and second are positions, which the reader controls.

## 6. Comparison layout

**First view of Compare:**

1. question title;
2. the mode switch;
3. the two selectors;
4. **At a glance:** the two worldview names (h3, in their accents) with their reviewed theses and scope lines;
5. **Understand**, starting immediately below.

The six-card overview is not shown in Compare.

**Rows**, defined once in `CompareView.astro`:

| Stage (h2) | Row | Each side shows |
|---|---|---|
| At a glance | glance | `lede`, scope, tradition notes |
| Understand | view | *The view* / *The Christian view* |
| Understand | strengths | *What this explains well* |
| Examine | examine | the answer's own Examine `<details>` (§8) |
| Study | study | the Deep dive `<details>` |
| Study | footer | Representative thinkers; the answer's links |

**Desktop (≥ 70rem, 1,120px):**

- Each row is a two-column grid with a 40px gap.
- Columns are 520–545px at 1,120–1,600px wide: about 50–56 characters per line at 18px.
- Corresponding material starts on the same line in every row.
- Each side keeps its own height (`align-self: start`), so nothing is padded to match. The accent rule ends where its text ends (screenshot 07).
- Scroll positions are not synchronized.
- The selector bar is **sticky** at the top, so it labels the two columns while long rows scroll, and either side can be changed from anywhere.
- Section anchors leave room for it (`scroll-padding-top: 7rem`).

**Why 70rem, not 64rem:** at 1,024px the columns would be about 430px, roughly 45 characters per line. That is too narrow for long Deep dives, so tablets in landscape get the stacked layout.

## 7. Mobile and tablet matched-section design

Below 70rem the same rows stack: for each row, the first worldview's passage, then the second's, each under a small accent-coloured label naming its worldview.

The reader therefore meets *The view* (A), *The view* (B), then *What this explains well* (A), (B), and so on. They do not read one whole essay and then the other.

- This is the same DOM as the desktop layout, so there is no separate mobile content system.
- Cells keep the 64ch reading measure on tablets.
- At 320 and 390px nothing overflows, including with 150% default text (§21).

## 8. Christian / non-Christian analytical asymmetry

- **Examine stage:** each side shows the answer's own Examine disclosure with its real title, for example:
  - Christian answer: "Strongest objection and Christian reply";
  - other answers: "Christian response and Pressure questions".
  - Inside each, the real section headings remain (◇ Strongest objection, Christian reply; § Christian response, ◇ Pressure questions).
- Nothing is relabelled as if the roles were equivalent. The neutral stage heading **Examine** carries the one-line hint "Each answer's own analysis, under its own headings."
- **Two non-Christian views** (screenshot 06, Naturalism and Buddhism) both show a Christian response, which is the site's declared standpoint.
- No head-to-head text between, say, Judaism and Buddhism is created or implied.
- Compare reports two researched answers. The argumentative Christian journey is UI-3.

## 9. Disclosure controls

- **Native disclosures:** Examine and Study are the answers' own native `<details>`. Either side opens and closes independently, by mouse, Enter or Space.
- **Open both / Close both:** one button in each of the Examine and Study stage headers.
  - Its scope is the two disclosures of that stage only. The accessible name says so ("Open both Examine sections", "Close both Deep dives").
  - It reads "Close both" only when both are open.
- **Stage kicker:** in Compare the "Examine"/"Study" kicker inside each summary is hidden, because the stage heading already says it. The summary titles are unchanged.
- **Direct access:** any section can be reached directly (§12); Study does not require Examine first.
- **Persistence:** disclosure clicks never create history entries. Their state is saved in the current entry (`history.state.compare.levels`).

## 10. Query-string URL rules

Canonical form: `/questions/<slug>/?mode=compare&views=<first>,<second>`, using stable worldview ids (`christianity`, `naturalism`, `judaism`, `islam`, `hinduism`, `buddhism`). Order is significant (left, right).

| Input | Result |
|---|---|
| no `mode` | Explore |
| `mode=explore`, or any unsupported mode (`case`, …) | Explore; `mode`/`views` removed from the URL |
| `views` without `mode=compare` | Explore; `views` removed |
| `mode=COMPARE&views=Judaism%2CIslam` | Compare Judaism / Islam; URL canonicalized |
| `views=judaism+islam` (space separator) | Compare Judaism / Islam |
| `mode=compare` with no `views` | Reformed Christianity / Naturalistic atheism, with a notice |
| unknown ids (`foo,bar`), malformed encoding (`%E0%A4`) | Same default pair, with a notice |
| one id (`islam`) | That id first, the first other worldview second (Islam / Reformed Christianity), with a notice |
| the same id twice | The repeat is dropped and the slot filled (Judaism / Reformed Christianity), with a notice |
| more than two ids | The first two distinct valid ids, with a notice |
| repeated `mode` parameters | The first one decides |
| unrelated parameters (`utm_source=x`) | Kept, after `mode` and `views` |

**Behaviour after reading the URL:**

- Every non-canonical URL is rewritten with `replaceState`, so the address bar always names exactly what is shown.
- When the link's views had to be replaced, a visible notice says so: "This link did not name two different worldviews for this question, so the comparison shows … Choose any two above." It disappears at the next selection.
- A page never claims one pair while showing another. This is enforced even when the browser rate-limits history writes (§11).

## 11. History and navigation state

**What creates a history entry:**

- Entering Compare, leaving it, changing either side, and swapping each `pushState` one entry.
- Disclosure clicks do not.

**What is kept in each entry:**

- UI-1's `history.state.explore` (open answers and levels) is preserved, not overwritten.
- While Compare is shown, Explore's saver is suspended (`suspendExploreState`), because the selected answers' sections are temporarily outside their panels.
- Compare keeps its own `history.state.compare.levels`.
- A new entry copies the explore record forward.

**Back and Forward:**

- `popstate` re-applies the entry's mode and pair.
- The browser's own scroll restoration then returns the reading position.
- Measured in all three engines: after a pair change at y = 2,570, Back returned to y = 2,570 with the previous pair and its open Examine sections.

**Changing a side deep in a row keeps the reading position.**

- The first row still on screen stays at the same offset. Rows above it may change height, and the page is not scrolled to the top.
- Native CSS scroll anchoring is turned off for the Compare region, so the browser does not adjust a second time.
- Verified with mouse, keyboard and swap in Chrome, Firefox and WebKit.

**Rate limits:**

- Browsers cap history writes (Firefox and WebKit raised "more than 100 times per 10 seconds" under scripted changes).
- If `pushState` and `replaceState` both fail, the change is not applied and the controls are re-synchronized.
- After 160 scripted changes in a burst, URL and view still agreed in all engines.

**Reload and return:**

- Reload of a Compare URL restores the pair, from the URL, and its open levels, from the history entry.
- Leaving for a thinker page and pressing Back restores the comparison. Chrome and Firefox also restored the scroll position.

**Starting from Compare:** a fresh tab, bookmark or shared link needs no earlier Explore session. The URL alone decides the view.

## 12. Fragment and citation handling

`reveal-hash.ts` remains the single fragment handler, and now asks Compare first. **A valid scholarly link always outranks the comparison layout.**

| Fragment target | In Compare |
|---|---|
| Inside a selected answer's moved parts (section, Examine/Study section, Deep-dive heading, citation) | Stays in Compare; closed `<details>` opened; target placed below the sticky selectors |
| The selected answer's own anchor (`#christianity`), heading or panel | Stays in Compare; lands on that side's thesis |
| A selected answer's sources (`#…-src-N`, `#…-sources`), `#sources` | Stays in Compare |
| An unselected answer (any id inside it), its sources, the overview (`#overview`, including the answer footer's "Back to the six answers") | Switches to Explore and reveals the target. The *current* entry's URL drops `mode`/`views` (`replaceState`), so it no longer claims a comparison; Back returns to the comparison |
| Missing id or malformed hash (`#%`) | Ignored; Compare unchanged |

- **Same-hash links:** a link to the current fragment fires no `hashchange`, so it is resolved in the click handler.
- **Focus:** if a switch to Explore hides the element that had focus, focus moves to the link's target (with `tabindex="-1"` when needed).
- **Direct loads:** a Compare URL whose fragment points outside the pair opens directly in Explore.

**Claim → citation → source → backlink**, tested in Compare for both sides:

- a citation in the second column jumps to its source entry (still in Compare);
- the `↩` backlink returns to the marker;
- a backlink into a *closed* Deep dive reopens it, including a second time with the same hash.

## 13. Sources and thinkers

**Sources:**

- The Sources section keeps all six groups in the static HTML, with every id and link.
- In Compare, the four unselected groups are hidden (`hidden`). A note above the list says: "Showing the sources for X and Y. The other answers' sources are listed in Explore."
- Numbering is unchanged: page-wide numbers, so a pair such as Hindu / Buddhist shows its own continuous ranges.
- Groups stay in worldview order, not side order, so numbers always ascend.

**Thinkers:**

- Representative thinkers and the answer links stay in each side's footer row, as normal links.
- Following one and pressing Back restores the comparison (§11).
- No thinker comparison and no portraits.

**Section identity** (from `src/lib/answer-sections.ts` and the remark plugin):

- `[data-section="the-view" | "the-christian-view"]`, `[data-section="what-this-explains-well"]`, `[data-level="examine"]`, `[data-level="study"]`;
- the panel's `.answer__thesis`, `.answer__scope`, `.tradition-notes` and `.answer__footer`.

Any unexpected body element would be kept with the footer row rather than lost; the validator currently allows none.

**Question switching:**

- In Compare, the Related questions links carry the current pair (`…/?mode=compare&views=a,b`), so the next question opens in the same comparison.
- In Explore they are plain links again.
- Breadcrumbs and other navigation are unchanged.

## 14. Focus management

| Action | Focus afterwards |
|---|---|
| Enter Compare / return to Explore (click or Enter on the mode link) | Stays on the mode link (it is never moved or hidden); if the switch is scrolled out of view it is brought back |
| Change a selector (mouse or arrow keys) | Stays on the select |
| Swap sides | Stays on the button (WebKit does not focus buttons on mouse click; keyboard activation keeps focus) |
| Open both / Close both, or a single summary | Stays on the control |
| A rearrangement that moves a focused node | Focus is restored to it if still visible (`keepingFocus`) |
| A fragment that switches to Explore | Moves to the target if the previously focused element was hidden |
| Back / Forward | Browser default; no focus is left in a hidden region |

Changes of comparison are announced politely ("Comparing Rabbinic Judaism and Classical Islam."; "Explore: all six answers."). The live region sits in the mode navigation, outside any region that can be hidden.

## 15. No-JavaScript fallback

Tested with script execution disabled in Chrome, Firefox and WebKit, loading a Compare URL:

- the page is Explore: all six answers open, the overview, all six source groups;
- the mode switch and the Compare scaffold stay `hidden`, so no dead controls render;
- one quiet line explains: "All six answers are shown below. The Compare view needs JavaScript." (`<noscript>`).

No loading shell hides content without a bounded fallback (§16).

## 16. Slow and failed scripts

**Pre-script state:**

- The `<head>` script marks a Compare URL with `compare-pending`.
- Until the module is ready, CSS keeps the Explore regions (overview, reading, Sources, related) out of sight, so the overview never flashes before the comparison.
- This rule depends on the `.js` class. UI-1's fallback removes `.js` at `DOMContentLoaded` if the module never ran, or 4 s after parsing if the module request hangs.
- With `.js` removed, everything is readable.

| Case (Chrome, Firefox, WebKit) | Result |
|---|---|
| Normal load | Compare ready by 0.8 s; 2 source groups; overview never shown |
| Module request blocked | Explore fallback at 1.5 s: 6/6 answers, overview, all sources; no controls |
| Exception after Compare has moved some nodes (simulated) | `resetCompare()` puts every node back. All 18 body sections are in their answers, 6/6 panels readable from the first sample, 0 duplicate ids, Compare hidden |
| Module delayed 6 s | Nothing visible until the fallback; 6/6 readable at 4 s after parsing; at 8 s the module applies the comparison the URL asked for |
| 12 KB/s network (Chrome) | Once the stylesheet has loaded, the overview is never shown; Compare is ready about 6 s in |
| Reload | Pair from the URL; levels from the history entry |
| Back/Forward cache | Not exercised: Playwright pages were reloaded rather than restored from the bfcache (`persisted: false`). A bfcache restore keeps the DOM as left, and no `unload` handler is used, so nothing blocks it. |

**Stale state:** stale Explore state is never applied over a Compare URL.

- The URL decides the mode.
- Explore's saved state only reopens panels inside the hidden Explore region, ready for the reader's return.

**Decision — a module that arrives late still applies a Compare URL.** The reader asked for a comparison. Unlike UI-1's collapse case, no text inside the comparison is hidden; the four unselected answers move out of view. This is recorded as a judgment, not a defect.

## 17. Print behaviour

**What prints in Compare:**

- "Compared: X and Y" (print-only line);
- every stage, with each passage labelled with its worldview, stacked (A then B per row);
- Examine and Study content whether open or closed on screen;
- the two selected source groups.

The selectors, Swap, Open both, stage hints and the mode switch are not printed. After printing, the reader's open/closed state is restored.

**Measured:** visible panels / level bodies / paragraphs inside levels, using print-media emulation plus `beforeprint`, on `what-happens-after-death`:

| Case | Chrome | Firefox 144 | WebKit 26.0 |
|---|---|---|---|
| Explore, JavaScript | 6/6, 12/12, 38/38, 6 groups | same | same |
| Explore, no JavaScript | 6/6, 12/12, 38/38, 6 groups | same | same |
| Compare (all closed) | 12/12 cells, 4/4 level bodies, 13/13 paragraphs, 2 groups, 40 citation markers | same | same |
| Compare, Examine open | same, and Examine still open after `afterprint` | same | same |
| Compare, Study open | same, and Study still open after `afterprint` | same | same |

- A Compare URL with JavaScript disabled prints the full Explore page (the row above).
- No physical printer or OS dialog was used.

## 18. Font and colour reuse

No new fonts, tokens or colours:

- **Type:** Source Serif 4 for everything read; Inter for the mode switch, selectors, buttons, stage kickers and labels.
- **Accents:** the six worldview accents from `tokens.css` appear only as the selects' left border, the cell rules, the name labels and the At-a-glance names.
- **Shape and surfaces:** 4px radius, hairline rules, no shadows.
- **Dark theme** (screenshot 06) uses the existing dark tokens.
- **Stylesheet:** `src/styles/compare.css`, imported after `explore.css`.

## 19. Accessibility

- **Headings:**
  - `h1` question;
  - `h2` "Compare two answers" (visually hidden), At a glance, Understand, Examine, Study, Sources, Related questions;
  - `h3` worldview names (At a glance) and every moved section heading.
  - While a passage is in Compare, its headings carry a visually hidden worldview prefix ("Buddhist traditions: The view"), removed again in Explore. A reader moving by headings always knows whose passage it is.
- **Reading and tab order:** DOM order equals visual order in both layouts: stage by stage, first then second. Tab order (checked with real key events): mode link → First select → Swap sides → Second select → first-column citations → …
- **Native controls:** `<a aria-current>`, `<select>` with `<label>`, `<button>`, `<details>`. The accessibility tree (Chrome) shows `combobox "First worldview"` with the other side's choice `[disabled]`, and `button "Swap sides"`.
- **Keyboard:** arrow keys change a select and update the URL; Enter on Swap and on the mode links works. A 3px focus ring appears on every control.
- **Touch targets:** all controls at least 44px tall.
- **Contrast:** the accents and text use UI-1's audited tokens (AA in both themes).
- **Forced colours:** the custom select chevron falls back to the native arrow.
- **Not done:** no screen reader (NVDA, JAWS, VoiceOver) was available. Semantics were checked through the accessibility tree and DOM, which is not equivalent.

## 20. Browser-engine results

Driven by Playwright scripts kept in the session scratchpad (not committed):

| Engine | Build |
|---|---|
| Chrome | Google Chrome stable, installed, headless |
| Firefox | Playwright Firefox build 1497 (Gecko 144) |
| WebKit | Playwright WebKit build 2227 (WebKit 26.0 on Windows). **Not Safari, not macOS or iOS.** |

| Suite | Chrome | Firefox | WebKit |
|---|---|---|---|
| Pair matrix: 30 ordered pairs × 5 questions (text equality, ids, groups, byte-for-byte restoration) | 0 failures; also all 28 questions | 0 failures | 0 failures |
| URL and direct-fragment matrix (26 cases) | as §10 and §12 | identical (±1px) | identical (WebKit metrics differ by a few px) |
| Interaction flows (29 checks: citations, backlinks, Explore↔Compare, Back/Forward, reload, thinker round trip, related questions, anchoring, keyboard, rate limits) | 29/29 | 28/29 | 28/29 |
| Fallbacks, no-JS, print | all pass | all pass | all pass |
| Overflow sweep (55 runs) | 0 | 0 | 0 after fix (below) |

**Coverage on the final build:**

- **Chrome:** the pair matrix and the interaction flows were rerun on the final build (0 failures, 29/29).
- **Firefox and WebKit:**
  - The pair matrix, flows and fallback/print suites last ran on the build just before two CSS-only changes: the 70rem column breakpoint and the select `overflow: hidden`.
  - Their overflow sweeps ran after those changes.
  - A final rerun of every suite in all three engines was stopped by the host for low system memory after the Chrome results, and was not repeated.

**Engine notes:**

- **Firefox:** the Playwright build drops `history.state` on reload. A reloaded Compare URL restores the pair, from the URL, but not which Examine/Study sections were open. This is the same limitation UI-1's review recorded.
- **WebKit:**
  - It does not focus a button on mouse click, so focus after a mouse Swap is wherever it was. This is platform behaviour.
  - After leaving the page and pressing Back, Windows WebKit restored the comparison at the top of the page, not at the previous scroll position. UI-1 recorded similar WebKit scroll-restoration timing.
  - **Fixed:** at 320–390px with 150% text, WebKit sized an `appearance: none` select's inner text to its longest option and widened the page (doc width 386–398px). `overflow: hidden` on the select fixed it.
- **`hidden="until-found"`:** unaffected. In Compare the four unselected answers are inside a `hidden` region, so find-in-page searches only the two compared answers; Explore is unchanged.

## 21. Viewports and screenshots

**Overflow:** checked with every Compare disclosure open on five questions, at 320, 390, 640 (200% zoom of 1,280), 768, 1,024, 1,280 and 1,600px, plus 150% default text at 320–768px. Result: 0 overflow in 55 runs per engine.

**Observations:**

- **Phones:** the selector block is three compact rows (First, Swap sides, Second). The first thesis begins in the first screen at 390 × 844.
- **Tablets (768, 1,024):** stacked pairs at the 64ch measure.
- **Desktop:** two columns, sticky selectors.

**Screenshots** in `docs/ui/screenshots/ui2/`, all inspected:

| File | Shows |
|---|---|
| `01-compare-theses-1280-light.png` | First view of Compare: mode switch, selectors, two theses, Understand beginning (Christianity / Naturalism, *What is man?*) |
| `02-positive-accounts-1280-light.png` | Desktop Understand row, sticky selectors (Christianity / Islam, *great and terrible*) |
| `03-examine-1280-light.png` | Both Examine sections open, real headings on each side (Christianity / Naturalism) |
| `04-judaism-islam-1600-light.png` | Two non-Christian worldviews, wide screen (*What happens after death?*) |
| `05-phone-matched-390-light.png` | Phone matched pair: end of the Hindu view, then the Buddhist view |
| `06-compare-dark-1280.png` | Dark theme, Examine open, Naturalism / Buddhism (both with a Christian response) |
| `07-deep-dive-1280-light.png` | Long Deep dives side by side: the shorter side ends with no padding |

**Visual defects fixed during QA:**

- the Compare cell rule ran the full row height beside a shorter passage;
- a double rule appeared under the sticky selectors;
- the phone selector block was too tall;
- the two-column breakpoint was raised from 64 to 70rem;
- the WebKit select overflow (§20).

## 22. Validation

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing, `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, unledgered 0, orphan ledger rows 0; generated data unchanged (the script rewrites line endings only, which were restored) |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 96 pages, 168/168 answers rendered, **10,888 links** (+57), 2,725 external, 0 outside base, 0 broken, 0 duplicate IDs |

**Link count, 10,831 → 10,888 (+57):**

- +56: two mode links (Explore, Compare) on each of the 28 question pages;
- +1: the homepage Compare entry.

The checker now ignores a query string when resolving a local link (`?mode=…` is UI state over the same static page). Before this change it would have reported those links as missing files.

**Built-HTML comparison with `main`:** `origin/main` was built in a scratch worktree, and the `reading` region and Sources section of all 28 question pages were compared. They are byte-identical once two additions are removed:

- the `data-ns` hooks on answers and source groups;
- the empty `data-compare-sources-note` paragraph.

## 23. Remaining limitations

- **Testing environment:**
  - No real screen reader; no Safari on macOS or iOS; no branded Firefox release; no physical print.
  - No real bfcache restore (§16).
- **Firefox reload** does not restore open Compare levels (Playwright build).
- **WebKit Back** from another page restores the comparison but not the scroll offset.
- **Late module:** a module that arrives after the 4-second fallback switches the readable Explore text to the requested comparison (§16).
- **Sticky selectors:** about 91px of a desktop viewport.
- **Fragment fallback:** a fragment into an unselected answer leaves Compare. That is deliberate, but a reader in Compare who follows such a link must use Back or the mode switch to return.
- **Find in page** in Compare reaches only the two compared answers.
- **Citation markers** can still wrap at line starts, as before UI-2 (UI-4).

## 24. Deferred

- **UI-3 Christian Case:** opponent selection and the argumentative mapping of existing sections. The mode switch already names it as *In preparation*, and the URL parser treats any other mode as Explore, so `mode=case` can be introduced without breaking old links.
- **UI-4:**
  - citation previews and popovers;
  - an optional "sources for this comparison" export;
  - citation-marker wrapping;
  - print refinements.
- **UI-5 release QA:** screen readers, Safari, physical print, real bfcache.
- **Not started:** portraits, Study mode.

## Deviations from DESIGN-SPEC-V1

No locked decision changed. Provisional choices:

- **Route:** `ARCHITECTURE.md` once proposed `/compare?question=…&views=…`. The spec's own example (§5) and this brief use `?mode=compare&views=…` on the question URL; that is implemented, and `ARCHITECTURE.md` now records the supersession.
- **Breakpoint:** two columns from 70rem (1,120px), not the 64rem used for the Explore grid (§6).
- **Christian Case:** shown in the mode switch as text with *In preparation*, not as a disabled control.
