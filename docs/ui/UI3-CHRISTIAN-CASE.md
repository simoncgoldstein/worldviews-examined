# UI-3 — Christian Case: the apologetic reading mode

**Branch:** `ui3-christian-case`
**Starting main:** `1ede1010cdbc93342dcce8611d354b12b6df168f` (UI-2 merged, PR #30)
**Date:** 2026-10-13
**Specification:** `docs/DESIGN-SPEC-V1.md` §3 (Christian Case), §4, §5, §9, §10. Locked decisions are followed; deviations are listed at the end.
**Scope:** the Christian Case reading mode on every question page, and the shared mode coordinator it needed. UI-4 (citation previews, source filters, Sources library), the header theme switch, the Further Study footer redesign and thinker portraits were not started.

No scholarly content was changed. `git diff origin/main -- src/content src/lib docs/ESV-QUOTATION-LEDGER.md research` is empty. The overview, reading region and Sources of all 28 built question pages are byte-identical to `main` apart from one renamed data attribute (§21).

## 1. Starting point

- `git fetch` showed `origin/main` at `1ede101` (the merge of PR #30). The branch was cut from it with a clean tree.
- The baseline build reproduced the post-UI-2 numbers: 96 pages, 10,888 links, 0 broken, 0 duplicate IDs; 168 answers, 236 sources, 56 thinkers, 2,838 citations. The shared client module was 13,974 B minified (4,754 B gzip).
- A copy of that build was kept for the byte comparison in §21.

## 2. Implementation architecture

**Decision: extend UI-2's move-don't-copy architecture to a third mode, through one shared coordinator.**

UI-2's `compare.ts` was a complete state machine for two modes. A second, parallel state machine for Christian Case would have meant two lists of moved nodes, two URL parsers, two `popstate` handlers and two failure-recovery paths competing for the same answer nodes. Instead the controller was generalized:

| File | Role |
|---|---|
| `src/scripts/modes.ts` (new) | **The one coordinator.** Parses the URL for all three modes; holds the current mode and both selections; moves nodes into the active scaffold and restores them (one placeholder list); hides and shows regions and source groups; keeps the mode links, related-question links and history; resolves fragments; recovers from failures (`resetModes`). |
| `src/scripts/compare.ts` (rewritten, 488 → 88 lines) | **Compare layout only:** which answer part goes into which row cell, and the selects, Swap and Open both controls. Behaviour is UI-2's. |
| `src/scripts/christian-case.ts` (new, 92 lines) | **Christian Case layout only:** which answer part goes into which stage, and the opponent select. |
| `src/components/ChristianCaseView.astro` (new) | An empty, hidden scaffold of seven stages: headings, one-line navigation descriptions, empty passage cells, the opponent select and a stage list. No answer text and no doctrine. |
| `src/styles/case.css` (new) | The Case layout; tokens only. |
| `reveal-hash.ts` | Still the only fragment handler; it now calls `modes.ts`. |

A layout is a small object (`Layout` in `modes.ts`): `placements(selection)` lists *(cell, worldview, selector)*; `shown(selection)` names the answers it shows; `sync`, `landing` and `describe` keep its controls, fragment landing points and announcements. The coordinator does everything else, so **exactly one mode places nodes at a time**: entering any mode first restores every moved node, then mounts the new layout.

**What moved where in the refactor.** Every UI-2 behaviour (transactional unmount, `resetCompare`'s withdrawal steps, the late-script rule, Firefox's popstate scroll fix, rate-limit refusal, `anchored` reading position, `keepingFocus`) now lives once, in `modes.ts`, and applies to both modes. UI-2's suites were rerun against the refactor (§19) and pass.

**Size.** One module: 19,325 B minified, 6,297 B gzip (was 13,974 / 4,754: +1.5 KB gzip for the third mode). One request, no framework, no imports beyond the module itself, no fetch.

## 3. Mode-state integration

- **Mode:** `explore | compare | case`, from `?mode=` (§9). Explore remains the default.
- **Selections:** the Compare pair and the Christian Case opponent are both remembered whatever is shown, so each mode returns as the reader left it within the page session.
- **Crossing between modes** (a policy, documented because the brief asked for one):
  - **Christian Case → Compare.** If the reader's pair already includes the examined worldview, it is kept. Otherwise, if the pair includes Christianity, the other side becomes the examined worldview, keeping its position (`christianity,naturalism` → `christianity,islam`; `hinduism,christianity` → `islam,christianity`). A pair the reader chose without Christianity (`judaism,islam`) is **kept**, because replacing either side would discard a deliberate choice; the in-page link *Compare these two answers side by side* always opens Christianity and the examined worldview.
  - **Compare → Christian Case.** If the pair contains an alternative, Christian Case examines it (the first one when both sides are alternatives, unless the current opponent is one of them).
  - **Explore → either mode.** The remembered selection.
  - Each mode link's `href` always shows exactly where it leads, and Back restores any earlier pair or opponent exactly.
- **History state:** `history.state.explore` (UI-1) is never overwritten; Compare keeps `history.state.compare.levels`, Christian Case `history.state.case.levels` (open disclosures, by summary id). A new entry copies Explore's record forward and starts the mode records fresh.

## 4. Why the same answer nodes are reused

Christian Case moves the two answers' own rendered elements, with their ids, citation anchors, links, listeners and `<details>` state, into the stages, leaving one comment placeholder per moved element, and restores them on leaving. Rendering the two answers again would duplicate every section id, citation id and backlink target (prohibited), and per-opponent static routes would add 140 pages of identical prose. DOM movement keeps DOM order, tab order, reading order and visual order identical (one column), and keeps every answer in the document exactly once.

**Verified** on all 140 combinations (§19): each stage holds exactly the expected element objects (identity, not just text) in order; 0 duplicate ids; placeholders equal moved elements; and after transitions back to Explore the `.reading`, `#overview` and `#sources` `outerHTML` are byte-identical to their pre-mode snapshot, with the six answers in their original order.

## 5. Argument-stage mapping

Stage headings are interface text; every passage keeps its own MDX heading.

| # | Stage heading (h2) | One-line description (interface text) | Passage(s), moved | From |
|---|---|---|---|---|
| 1 | **The two answers** | — | thesis (`lede`) of each; the alternative first | both answers |
| 2 | **Understand the alternative** | "The *X* answer in its own terms: its view, and what it explains well." | *The view*; *What this explains well* | alternative |
| 3 | **The Christian account** | "What Reformed Christianity affirms on this question, and what it explains well." | *The Christian view*; *What this explains well* | Christian |
| 4 | **The Christian response** | "The Reformed critique of *X* on this question, as written in the *X* answer." | *§ Christian response* | alternative's answer |
| 5 | **Questions for examination** | "Questions put to *X* in the same answer. They are open questions to examine, not settled conclusions." | *◇ Pressure questions* | alternative's answer |
| 6 | **Objections to the Christian account** | see §7 | the Christian answer's Examine disclosure: *◇ Strongest objection*, *Christian reply* | Christian |
| 7 | **Study the sources** | "Both Deep dives, the representative thinkers, and the two answers’ sources." | each *Deep dive* disclosure, then each answer's footer (thinkers; links to its sources, its worldview page, the overview) | both |

- **Stage 1** is a restrained two-part introduction: the two worldview names (h3, accent colour, always in words) and their reviewed theses, side by side from 48rem, stacked on phones. The six-card overview is not shown.
- **Stages 2–3** are visible at once, so both positive accounts are readable without any click; the alternative speaks first and with no commentary above it.
- **Stage 4** is the centre of the case. It is the only stage set on a quiet surface card with a 2px navy top rule; no colour coding, no verdict label. The passage is the alternative answer's own *Christian response* under its own heading, so its own statement of what kind of challenge it makes ("a challenge of explanatory adequacy … not a demonstrated contradiction", "a theological disagreement grounded in competing revelations", "a disagreement about the nature of the agent") reaches the reader unaltered. The interface claims nothing about the strength of the critique.
- **Stage 5** shows the pressure questions as the answer's own list, plainly labelled as questions.
- **Stages 6–7** use the answers' native disclosures, closed by default (unless already open in Explore).
- **The alternative's Examine wrapper.** In Explore, *Christian response* and *Pressure questions* share one `<details>`. In Christian Case the two sections leave it for stages 4 and 5; the emptied wrapper stays in its hidden answer and the sections return to it on leaving. A link to that wrapper's summary lands on stage 4.
- **Attribution.** Every passage carries a visible worldview label that stays pinned while a long passage scrolls; for stages 4–5 it reads "From the *X* answer", because the text is the site's Christian analysis written in that answer. Moved headings carry a visually hidden prefix for assistive technology ("Hindu traditions: The view", "Hindu traditions answer: Christian response", "Reformed Christianity: Christian reply").
- **Navigation.** A stage list ("In this case", numbered 1–7) sits after the theses on phones and as a light sticky column beside the text from 64rem. *The Christian response* is one click from the first screen; nothing has to be opened in order. Stage links are ordinary fragment links (`#case-response`), so they are shareable and work with Back.

## 6. Treatment of the alternative's strongest responses

The corpus does not contain an authored rejoinder from each alternative to the Christian response. UI-3 does not write one, summarise one or imply one:

- the stage after the Christian response is the alternative answer's own *Pressure questions*, presented as questions;
- the stage 6 description states the limitation in words: "That answer has no separate rejoinder here; its fuller account is in its Deep dive, under Study the sources";
- stage 7 places the alternative's Deep dive first, so its fuller sourced account (schools, internal debates, its own arguments) is the first thing in Study.

Within the existing sections, the strongest alternative responses that the reviewed text itself reports remain where authors put them: for example the naturalist reply on evolutionary reliability inside the Naturalism *Christian response* on knowledge, and Śaṅkara's answers to Rāmānuja inside the Hindu *Christian response* on ultimate reality.

## 7. Christian objections and replies

The Christian answer's *Strongest objection* and *Christian reply* are objections to **the Christian account**, not the selected alternative's reply to stage 4. The stage is therefore headed **Objections to the Christian account**, and its description reads:

> The Christian answer’s own strongest objection, with the Christian reply. The objection may come from another tradition: it is not the *X* answer replying to the Christian response above. That answer has no separate rejoinder here; its fuller account is in its Deep dive, under Study the sources.

**Why this matters (measured).** A count of the sources cited inside the 28 *Strongest objection* sections, by registered tradition tag: 20 cite naturalist sources only (Hume, Russell, Quine, Carroll, …); 5 cite Christian sources only (internal objections, e.g. on election); 1 cites Christian and naturalist sources; 1 cites naturalist and Buddhist sources (*something-rather-than-nothing*); 1 cites Jewish and Hindu sources (*ultimate-personal*). No objection section cites an Islamic source. So in Christian Case against Judaism, Islam, Hinduism or Buddhism, stage 6 almost always shows a naturalist objection. Labelling it as that tradition's reply would misattribute it; the interface does not. Whether the Christian answers should face tradition-specific objections is a scholarly question, recorded in §23 for separate work, not addressed in UI code.

## 8. Five-opponent selection

- One native `<select>`, label **Worldview to examine**, listing the five alternatives that answer the question, in worldview order. Christianity is not an option.
- Its 4px left border takes the selected worldview's accent; the name is always in words.
- Default: Naturalistic atheism (the first alternative), unless the link names another.
- Changing it keeps the question, pushes one history entry, keeps the first visible stage in place on screen (the coordinator's anchoring, as in Compare), and announces "Christian Case: Reformed Christianity and Classical Islam." in the mode switch's polite status region.
- A scripted change to a value that is not an alternative is refused and the select resynchronised.
- Malformed or unsupported links fall back predictably, with a short visible notice (§9).
- The reader never has to enter Compare first.

## 9. URL contract

Canonical: `/questions/<slug>/?mode=case&opponent=<id>`, with stable worldview ids (`naturalism`, `judaism`, `islam`, `hinduism`, `buddhism`). No new static routes.

| Input | Shown | Address bar afterwards | Notice |
|---|---|---|---|
| `?mode=case&opponent=islam` | Case, Islam | unchanged | — |
| `?mode=case`, `opponent=` (missing/empty) | Case, Naturalism | `?mode=case&opponent=naturalism` | — |
| `opponent=foo`, `%E0%A4`, `%` (unknown, malformed) | Case, Naturalism | canonical | "This link did not name one other worldview to examine, so Christian Case shows Naturalistic atheism. Choose another above." |
| `opponent=christianity` (any case) | Case, Naturalism | canonical | "Christian Case examines another worldview from the Reformed Christian standpoint, so it shows Naturalistic atheism. Choose another above." |
| `opponent=islam&opponent=islam` | Case, Islam | canonical | — |
| two different opponents (`islam&…judaism`, `islam,hinduism`) | the first valid one | canonical | "did not name one other worldview" |
| `foo&opponent=hinduism` | Hindu | canonical | "did not name one" |
| `mode=CASE&opponent=Islam`, `%20case%20`, `bud%64hism` | as named | canonical (literal text) | — |
| repeated `mode` | the first decides | canonical | — |
| `mode=case&views=…` (Compare parameters in Case) | Case; `views` dropped | canonical | — |
| `mode=compare&…&opponent=…` (Case parameter in Compare) | Compare; `opponent` dropped | canonical | — |
| `opponent=…` without `mode`, `mode=explore&opponent=…`, `mode=cases`, `mode=apologetics` | Explore | parameters dropped | — |
| `utm_source=x&mode=case&opponent=islam` | Case, Islam | unchanged (already exact) | — |
| `utm_source=x&mode=case&opponent=Islam` | Case, Islam | `?mode=case&opponent=islam&utm_source=x` | — |

- Every non-canonical URL is rewritten with `replaceState`; a repair never adds a history entry.
- **Canonical means written exactly so.** UI-2 compared decoded values, so `bud%64hism` (or `views=a%2Cb`) showed correctly but stayed un-canonical in the address bar. The parser now also checks the literal query text, for both modes.
- Notices never echo query text (verified), so a link cannot place arbitrary words on the page.
- The URL never names one opponent while showing another, including under history rate limits (a refused change snaps the select back).
- The `<head>` script marks `mode=compare` and `mode=case` URLs `mode-pending` (was `compare-pending`), so the Explore regions do not flash before the mode is arranged.

## 10. History state

- **New entries:** entering or leaving a mode, changing the opponent, changing or swapping a Compare pair; one `pushState` each.
- **No entries:** opening or closing any disclosure (state is saved into the current entry).
- **Back/Forward:** `popstate` re-applies the entry's mode and selection; the browser's scroll restoration returns the position (Firefox's early restoration is preserved as in UI-2).
- **Measured sequence** (`case-flows` §4, all engines): Explore (Islam open) → Compare → pair Judaism/Islam → Christian Case (Judaism, policy) → open objections → opponent Buddhism → Compare (pair kept) → Explore. Back ×7 restores each step exactly, **including the Judaism/Islam pair with both selections intact**; Forward to Case (Judaism) restores the open objections; back at the first entry the Islam answer is still open (Explore's state was never reset).
- **Rate limits:** unchanged from UI-2 (WebKit 100 writes/10 s; refusal keeps URL and view in agreement).
- **Withdrawn modes** (after a failure, §15): Back to an older Case or Compare entry shows Explore and now also rewrites a *canonical* mode URL. UI-2 corrected only non-canonical ones, so `?mode=compare&views=judaism,islam` could survive on an Explore page; found by the new failure suite and fixed for both modes.

## 11. Fragment handling

`reveal-hash.ts` remains the single fragment handler and asks `modes.ts` first. A valid scholarly link always outranks the mode layout.

| Fragment target (direct load of `?mode=case&opponent=islam#…`, or a link while reading) | Result |
|---|---|
| A moved passage or anything inside it (sections, citations, Deep-dive headings) | Stays in Case; closed disclosures opened; target on screen below the pinned label |
| `#christianity`, `#islam`, `…-heading`, `…-panel` | Stays in Case; lands on that answer's thesis |
| The alternative's emptied Examine summary (`#islam-…-examine`) | Stays; lands on *The Christian response* |
| The Christian Examine summary, *Strongest objection*, *Christian reply*, a citation inside them | Stays; disclosure opened |
| Either `…-deep-dive`, or a citation inside a closed Deep dive | Stays; Deep dive opened |
| Either answer's source entries, groups, `#sources` | Stays in Case |
| Stage anchors (`#case-response`, …) | Stays in Case |
| An unselected answer, its citations or sources, `#overview` (including the footers' "Back to the six answers") | Switches to Explore and reveals the target; the current entry's URL drops `mode`/`opponent`; Back restores the case, the opponent and the scroll position |
| A Compare stage anchor (`#compare-examine`) | Switches to Compare with the remembered pair (URL rewritten) |
| `#%`, `#%E0%A4%A`, missing ids | Ignored; Case unchanged |

## 12. Citations and source groups

- Citation markers, numbers, ids and backlinks are the same elements; nothing is renumbered and no Case-specific citation exists.
- In Case, the Sources section shows Christianity's group and the alternative's group (in page order, so numbers ascend) with the note "Showing the sources for Reformed Christianity and *X*. The other answers’ sources are listed in Explore." All six groups stay in the static HTML with their anchors; the other four are `hidden`.
- **Round trips verified** (text → citation → source → backlink → same passage) from every stage that cites: the alternative's view, the Christian view, the Christian response, a pressure question, the Christian objection/reply (inside the closed disclosure), and both Deep dives (closed). A backlink into a closed disclosure reopens it, also a second time with the same hash.
- In the 140-combination matrix, every in-region `#` link resolves and every citation marker targets an entry in a visible group.

## 13. Accessibility

- **Headings** (Playwright `ariaSnapshot`, all engines): `h1` question; `h2` "Christian Case" (visually hidden), then the seven stage headings in order; `h3` the two worldview names and every moved section, each with its attribution prefix. No repeated prefixes after opponent changes; none left in Explore.
- **Controls:** `combobox "Worldview to examine"`; `navigation "Reading mode"` with `link "Christian Case"` (`aria-current="true"` when active); `navigation "In this case"` (the stage list); native `<details>` summaries, attributed ("Reformed Christianity: Strongest objection and Christian reply", "Hindu traditions: Deep dive").
- **Hidden content** (overview, the other four answers, the Compare scaffold) is absent from the tree.
- **Keyboard** (real key events): Enter on the Christian Case link keeps focus there and announces the case; Tab → opponent select; arrow keys change the opponent with focus kept (Chrome, WebKit); Tab order follows visual order through the stage list and stages, every focused element visible.
- **Focus after in-page mode links:** *Compare these two answers* and *Read all six answers in Explore* hide the scaffold they sit in, so focus moves to the newly current mode link, scrolled into view.
- **Colour:** worldviews are always named in words; accents only mark rules and labels. Focus ring 3px. Touch targets ≥ 44px (select, stage links, in-page links, mode links; measured at 320 and 390).
- **Announcements:** polite status region (outside any hidden region): entering Case or changing opponent announces "Christian Case: Reformed Christianity and *X*."
- **Not done:** no real screen reader (NVDA, JAWS, VoiceOver) was available. The accessibility tree is not equivalent to a screen reader and does not establish how announcements sound.

## 14. No-JavaScript behaviour

Script execution disabled, Christian Case URL (all engines): the page is Explore, with all six answers open, the overview and all six source groups; the mode switch and both scaffolds stay `hidden` (0 visible buttons or selects); one line explains: "All six answers are shown below. Compare and Christian Case need JavaScript." (`<noscript>`).

## 15. Slow and failed scripts

UI-1's and UI-2's corrections hold for Case, because they now live in the shared coordinator.

| Case | Result |
|---|---|
| Normal load | DOMContentLoaded 119 ms, load 377 ms (local preview); CLS 0.0000; the overview never shown |
| Module request blocked | Explore at 1.5 s: 6/6 answers, overview, 6 groups, no controls |
| Module delayed 7 s, reader idle | Nothing until the 4 s post-parse fallback, then full Explore; when the module arrives at the top of the page, the requested case is applied |
| Module delayed 7 s, **reader already reading** (scrolled into the Hindu answer, a citation focused) | Stays in Explore: the passage stays exactly under the reader (top 76 → 76), focus kept, URL rewritten to Explore, and the Christian Case link offers `?mode=case&opponent=judaism` |
| 12 KB/s network (Chrome) | Case ready at ~9.3 s. Before ~4.1 s the render-blocking stylesheet has not loaded and nothing is painted; once styled, Explore never flashes before the case |
| **Failure injection** (15 scenarios, below) | Every answer's text, section order and ids intact in its own panel; 0 placeholders, prefixes or duplicate ids; Explore and all six groups shown; the broken mode controls withdrawn; URL names Explore; Back to an older Case/Compare entry stays honest |

Failure scenarios (exceptions injected into `createComment`, `Comment.replaceWith` and the sources query): initialization before the first move; after the theses; after the response (questions not moved); during the Deep dives; after everything (sources step); opponent change while mounting; opponent change while restoring; Case → Explore restoring; Case → Compare restoring; Case → Compare mounting; Compare → Case mounting; Compare → Case restoring; the in-page Compare link restoring; Back restoring; a fragment to an unselected answer restoring. UI-2's nine Compare scenarios also pass on the shared coordinator.

**Rapid changes:** 300 paced opponent changes and mode transitions leave URL, select and view in agreement (§20); a refused history write keeps the previous view.

## 16. Print behaviour

Print media plus `beforeprint`/`afterprint`, *what-happens-after-death*, Buddhism:

| Case | Result (all engines) |
|---|---|
| All disclosures closed on screen | Print title "Christian Case: Reformed Christianity and Buddhist traditions"; all seven stages with headings and descriptions; both theses; every section in order (view, strengths, Christian view, strengths, Christian response, pressure questions, strongest objection, Christian reply, both Deep dives); 3/3 disclosures, every paragraph and 30/30 citations printed; exactly the two source groups; no controls, no stage list, no empty cells; passages labelled by worldview |
| Objections open / both Deep dives open | The same; the reader's on-screen open/closed state restored after printing |
| Explore after leaving Case | Six answers, six groups, as before |
| Case URL, JavaScript disabled | Full Explore print (12/12 levels, 90/90 paragraphs, 97/97 citations, 6 groups) |

No physical printer, OS print dialog or macOS Safari was used.

## 17. Browser coverage

Playwright 1.57 scripts in the session scratchpad (not committed), against `astro preview` on `http://[::1]:4329`. The machine had 400–800 MB free; every suite ran **serially**, one engine and one browser process at a time. No assertion was weakened for memory.

| Engine | Build |
|---|---|
| Chrome | Google Chrome stable (installed), headless |
| Firefox | Playwright Firefox build 1497 (Gecko 144) |
| WebKit | Playwright WebKit build 2227 (WebKit 26.0 on Windows). **Not Safari, not macOS or iOS.** |

**Christian Case suites (new):**

| Suite | What it checks | Chrome | Firefox | WebKit |
|---|---|---|---|---|
| `case-matrix` | 28 questions × 5 opponents, node identity, ids, sources, 6 transitions × 3 rounds, byte-for-byte restoration (§19) | PASS | PASS | PASS (paced 400 ms) |
| `case-urls` | 29 URL cases, notice clearing, refusal of a scripted Christianity value (§9) | PASS | PASS | PASS |
| `case-flows` | citation round trips from 7 passages, 22 direct-link targets + 3 malformed, unselected-target switch and Back, 7-step history, mode policy, stage list, keyboard and focus, in-page mode links, reload, thinker round trip, related question, reading position | PASS | PASS | PASS |
| `case-fail` | 15 failure-injection scenarios (§15) | PASS | PASS | PASS |
| `case-slow` | no-JS, blocked, delayed (idle and reading), 12 KB/s | PASS (12 KB/s Chrome only) | PASS | PASS |
| `case-print` | 3 on-screen states, Explore after Case, no-JS (§16) | PASS | PASS | PASS |
| `case-a11y` | accessibility tree (§13) | PASS | PASS | PASS |
| `case-bfcache` | Case → thinker → Back; Compare → Case → thinker → Back → Back | PASS, **real restores 2/2** | PASS on reload; restore not observed | PASS on reload; restore not observed |
| `case-layout` | 130 overflow runs, phone first screen, pinned labels, touch targets, measure, sticky stage list (§18) | PASS | PASS | PASS |
| `case-perf` | 300 paced changes, CDP counters (§20) | PASS | n/a (CDP) | n/a (CDP) |

**UI-2 Compare suites, rerun on the shared coordinator** (`matrix` 28 × 30 ordered pairs, `urls`, `fail` 9 scenarios, `flows`, `slow`, `print`, `a11y`, `phone`, `bfcache`, `perf`): PASS in Chrome and Firefox; in WebKit as well (the pair matrix paced at 650 ms per pair, as in UI-2). Two UI-2 tests were updated for intended UI-3 changes: the keyboard sequence now passes the new Christian Case link between Compare and the selects, and `?mode=case…` URLs, which UI-2 expected to fall back to Explore, now open Christian Case.

**Test corrections made during QA** (the tests, not the product): a selector that also matched Compare's `data-stage="study"`; Firefox skipping the arrow-key step; the Tab sequence in WebKit, which reaches only controls and summaries (Safari's default), now cut at its wrap as UI-2's test does; a print count that included the hidden notice and the footers' navigation items, which print CSS omits by design.

**Engine notes** (unchanged from UI-1/UI-2, not made worse): the Firefox Playwright build drops `history.state` on reload (opponent restored from the URL, open disclosures not); WebKit does not focus buttons on mouse click; WebKit returns to the top after Back from another page; real bfcache is observable only in Chrome here.

## 18. Screenshot and visual QA

**Widths:** 320, 390, 640 (200% zoom of 1,280), 768, 1,024, 1,280 and 1,600, in light and dark, plus 150% root text at 320–1,280: 130 runs per engine with every Case disclosure open on five questions (Naturalism, Judaism, Hinduism, Islam, Buddhism opponents). **0 horizontal overflow** in all three engines.

**Measured:**

- **Desktop (≥ 64rem):** one reading column, 613px wide, about 61 characters per line in the Christian response; the stage list is a sticky 200px column (389–390px tall, 16px from the top).
- **Phones:** at 390 × 844 the question (h1 at 196px), the mode switch with Christian Case marked (303), the single opponent select (bottom 445) and the first thesis (551) are all on the first screen; the Christian thesis starts at 764. At 320 the first thesis starts at 620 and the Christian thesis just below the fold (860). The stage list is not sticky on phones (two columns, 238–269px). The passage label pins at the top while a long passage scrolls. Every control and link in the mode area is ≥ 44px tall.

**Screenshots** in `docs/ui/screenshots/ui3/`, all inspected:

| File | Shows |
|---|---|
| `01-case-naturalism-1280-light.png` | First screen: mode switch, *Worldview to examine*, the two theses, the stage list and the start of *Understand the alternative* (*What is man?*, Naturalism) |
| `02-alternative-account-1280-light.png` | The alternative's own account first, with no commentary (*Has ultimate reality revealed itself?*, Islam) |
| `03-christian-account-1280-light.png` | The positive Christian account (same question) |
| `04-christian-response-1280-light.png` | The emphasised Christian response, "From the Naturalistic atheism answer", including its own "not a demonstrated contradiction" |
| `05-questions-objections-1280-light.png` | Pressure questions as questions; *Objections to the Christian account* with its caution and the opened disclosure |
| `06-hindu-response-1600-light.png` | A non-Western case at 1,600: the Hindu response keeping Advaita, Rāmānuja and Madhva apart |
| `07-phone-buddhism-390-light.png` | Phone first screen (*What is evil?*, Buddhism) |
| `08-buddhism-response-1280-dark.png` | Dark theme, the response card and the Buddhist accent |

**Visual defects fixed during QA:**

- the response card spanned the full column while its text held to the measure (the reading column is now held to the measure);
- the theses ran past the reading column's right edge on desktop (now aligned with the stage grid);
- "Buddhist traditions’s answer" in the objections caution (reworded so it reads for every name);
- a one-column, 390px-tall stage list at 320px (now two columns, 269px).

## 19. The full 140-combination test

`case-matrix`: all 28 questions × all 5 opponents, through the real controls (the mode link, then the select).

**Expectation computed independently**, in Explore before any mode is entered, by classifying each answer's own body children and keeping references to the element objects. For every combination:

- URL `?mode=case&opponent=<id>`; page mode `case`; only the Case scaffold shown; select shows the opponent and has no Christianity option; `aria-current` on Christian Case.
- Stage order: theses, account, christian, response, questions, objections, study.
- **Each of the nine cells holds exactly the expected element objects, in order** (the same nodes as Explore), with the right `data-worldview`, label ("From the *X* answer" for stages 4–5), text and id list.
- The correct thesis, view, strengths, Christian view, Christian response from the selected answer, pressure questions, Christian objection and reply, Deep dives and footers.
- Every moved heading has exactly one correct attribution prefix; none outside the scaffold.
- Left behind: the Christian answer's body empty; the alternative's body holds only its emptied Examine wrapper; the four other answers intact.
- Placeholders = moved elements; 0 duplicate ids in the live document.
- Sources: exactly Christianity's and the opponent's groups visible, each byte-identical to Explore apart from `hidden`; every in-region link resolves; every citation lands in a visible group; the sources note and the stage descriptions name the opponent.
- The mode switch's Compare link and the in-page *Compare these two answers* link carry `christianity,<opponent>`.

Then, per question, three rounds of the six transitions (Case → Compare → Case → Explore → Case → Compare → Explore → Compare → Explore), each checked for mode, URL and kept selection, and finally a byte-for-byte check of `.reading`, `#overview` and `#sources` against the pre-mode snapshot, answer order, and no placeholders, prefixes, cell contents or duplicate ids.

| Engine | Result |
|---|---|
| Chrome | 140 combinations: **0 failures**; 84 transition checks; restoration byte-identical on all 28 questions |
| Firefox | 140: **0 failures** |
| WebKit | 140: **0 failures** (paced for WebKit's 100-writes-per-10-s history limit) |

**Manual reading.** The stages were read in sequence for the brief's required pairs: *What is man?* (Naturalism, in full: both answers), *Has ultimate reality revealed itself?* (Islam and Judaism: views, responses, questions, the Christian objection), and the responses, pressure questions and Christian objections for *Why can we know anything?* (Naturalism), *What is evil?* (Buddhism), *What happens after death?* (Judaism) and *What ultimately exists?* (Hinduism); plus rendered pages in the screenshots (§18). Findings below.

### Philosophical quality checks

The interface moves whole reviewed sections, so the distinctions the authors drew arrive intact; the checks below are about whether the *presentation* frames them faithfully.

- **Naturalism, *What is man?*** The alternative's own view (stage 2) distinguishes wider naturalism from physicalism, gives Papineau's physicalist identity view and his rejection of the conventional explanatory-gap account, Chalmers as a critic proposing naturalistic property dualism, illusionism (Frankish, Dennett), and panpsychism/panprotopsychism; the Deep dive's "Three replies" keeps them apart. The Christian response (stage 4) states its own limit ("a challenge of explanatory adequacy resting on theistic premises, not a demonstrated contradiction, and it proves no soul"). The Christian reply (stage 6), which also discusses Chalmers and Papineau, is shown as an answer to the Christian account's objection, not as the last word on the response. Faithful.
- **Judaism, *revelation*.** Stage 2 presents Sinai through the Torah, Maimonides, Halevi and Saadia, then distinguishes Orthodox, Conservative (three views) and Reform positions. The Christian response applies "one standard" to Sinai and the resurrection and keeps its claim "narrower"; it is not collapsed into a single Jewish view by any interface text. Faithful.
- **Islam, *revelation*.** Stage 2 keeps the Sunni and Twelver distinctions, *iʿjāz*, al-Ghazali's cumulative account, and the classical disagreement on *taḥrīf* (Ibn Taymiyya). The response treats the remaining question as historical. Faithful.
- **Hindu traditions, *ultimate reality*.** Advaita, Viśiṣṭādvaita and Dvaita stay distinct in the view and in the response, which separates a theological disagreement from a question of explanation and records that Śaṅkara's replies "meet the charge of outright incoherence". The pressure questions are addressed school by school. Faithful.
- **Buddhist traditions, *evil*.** No-self and karma are presented with Buddhaghosa's middle way; the response calls its point "a disagreement about the nature of the agent, not a charge that Buddhism ignores responsibility" and limits the Tiantai contrast to Tiantai. Faithful.
- **Interface wording.** Stage descriptions say where a passage comes from and what kind of passage it is; none characterises an argument's success. The only stage-level assertion with argumentative weight is the stage 6 caution, which limits a claim rather than making one.
- **Content deficiency (for separate scholarly work, not UI):** the Christian answers' strongest objections are overwhelmingly naturalist (§7). In Christian Case against the four religious traditions, readers will rarely meet a strongest objection from that tradition. No answer prose was changed.

## 20. Performance measurements

Chrome with CDP (`case-perf`), *why-is-man-great-and-terrible*, local `astro preview`:

| Item | Result |
|---|---|
| Shared module (`reveal-hash` + `answer-panels` + `modes` + `compare` + `christian-case`) | **19,325 B minified, 6,297 B gzip** (UI-2: 13,974 / 4,754). One file, one request, no framework, no fetch |
| Initial load of a Case URL | DOMContentLoaded 119 ms, load 377 ms; CLS 0.0000 |
| 270 opponent changes (55 ms apart) | median 26.9 ms, p95 34.0 ms, max 58.1 ms |
| 90 mode transitions (Case → Compare → Explore → Case cycles) | median 23.3 ms, p95 41.0 ms, max 47.0 ms |
| Compare (UI-2 `perf`, 300 changes) on the shared coordinator | median 22.0 ms, p95 30.6 ms, max 55.4 ms (UI-2 review: 15.9 / 23.8 / 42.3 ms; every mode now syncs both layouts' controls) |
| Event listeners (after GC) | 64 → 64 |
| DOM nodes | 6,271 → 6,284 (no growth) |
| JS heap (after GC) | 1.34 MB → 1.48 MB |
| `history.state` | 22 characters; `history.length` capped by Chrome at 50 |
| Requests while switching | only favicon re-requests (one per history entry, headless Chrome) and lazily loaded font subsets; no content |
| Placeholders after 300 changes | equal to moved nodes; 0 duplicate ids |

No optimization was warranted.

## 21. Content immutability

- `git diff origin/main -- src/content src/lib docs/ESV-QUOTATION-LEDGER.md research`: **empty**. No MDX, lede, pressure question, source, thinker, ESV quotation, locator or translation note changed.
- **Built HTML:** `main` was built before any change and kept. For all 28 question pages the overview, the reading region and the Sources section are byte-identical between `main` and this branch (84/84 regions), the only difference being the renamed empty hook `data-compare-sources-note` → `data-mode-sources-note`.
- **New visible text** is interface text only: stage headings, the stage descriptions in §5 and §7, the select label, the stage list, the two in-page links, the notices (§9), the print title and announcements, the homepage mode description and the `<noscript>` line. No claim about any tradition was added.
- ESV ledger: see §22.

## 22. Validation

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing, `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, unledgered 0 (1 known non-ESV excluded), orphan ledger rows 0. The script rewrote line endings only in `research/final-audit/data` (no change ignoring line endings); restored with `git checkout -- research` |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 96 pages, 168/168 answers rendered, **11,169 links**, 0 outside base, 0 broken, 0 duplicate IDs; external links unchanged at 2,725 |

**Link count, 10,888 → 11,169 (+281):**

- +28: the Christian Case mode link on each question page (formerly plain text);
- +196: the seven stage-list links (`#case-theses` … `#case-study`) on each question page;
- +56: the two in-page links in Study the sources (*Compare these two answers*, *Read all six answers in Explore*) on each question page;
- +1: the homepage Christian Case entry, now a link.

No page was added; no link was removed.

## 23. Known limitations

- **Testing environment:** no real screen reader; no Safari on macOS or iOS (WebKit on Windows is not Safari); no branded Firefox release; no physical print.
- **bfcache:** real restores verified in Chrome only (Firefox and WebKit reloaded, or Playwright lost the context), as in UI-2.
- **Firefox (Playwright build)** drops `history.state` on reload: a reloaded Case URL restores the opponent but not which disclosures were open.
- **WebKit** Back from another page returns to the top (UI-2 limitation); WebKit does not focus buttons on mouse click.
- **Late module:** with an idle reader at the top, a late module still applies the requested case.
- **Find in page** in Case reaches only the two answers shown.
- **Stage list** has no scroll-position highlight ("you are here"); it is a plain table of contents.
- **Phones:** the stage list (≈240–270px) sits between the theses and stage 2; the Christian thesis begins just below the first screen at 320 × 844.
- **Objections stage** usually shows a naturalist objection against the four religious traditions (§7); a content question, not a UI one.
- **No alternative rejoinder** to the Christian response exists in the corpus (§6).
- **Disclosure state travels with nodes:** a Deep dive opened in Case is open in Explore afterwards (UI-2 behaviour).
- **Citation markers** can still begin a line (UI-4).

## 24. Deferred

- **UI-4:** citation previews; question-level source filters (they must compose with the `hidden` groups both modes now own; see `UI2-REVIEW.md` §19); global Sources library; print refinements.
- **Small polish PRs:** the header sun/moon theme switch (§13.1); the Further Study footer (§13.3; the answer footers travel whole into stage 7, so a redesigned footer will appear there unchanged); accent-colour trial (§13.6; Case uses only tokens).
- **UI-5 release QA:** screen readers, Safari, physical print, real bfcache in Firefox/Safari.
- **Scholarly:** tradition-specific strongest objections for the Christian answers (§7, §19), if the editors want them.
- **Not started:** portraits, Study mode.

## Deviations from DESIGN-SPEC-V1

No locked decision changed.

- **Interactions to the critique.** §3 asks that the Christian critique be reachable within two meaningful interactions from the question overview. From Explore: the Christian Case mode link, then the stage list's *The Christian response* (or scrolling). A Case URL shows the stage list on its first screen on desktop.
- **Disclosures.** Stages 2–5 are open; the objections and Deep dives are the answers' native disclosures, closed by default. The pressure questions are short and are shown, not hidden.
- **Visual emphasis** of the response is a surface card with a navy top rule (no accent colour); stage numbers appear only in the stage list.
- **Refactor.** Compare's controller was generalized into `modes.ts` rather than left as is; `ARCHITECTURE.md` records it. No new architecture decision record was needed: the static-first Astro architecture and the move-don't-copy decision (UI-2) are unchanged.
