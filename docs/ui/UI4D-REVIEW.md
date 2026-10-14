# UI-4D Review — Global Sources Library

**PR:** #38, `ui4d-global-sources-library`. **Base:** `1fb0ad3`. **Head reviewed:** `5b0d6be`.
**Date:** 2026-10-14. **Reviewer:** a fresh Claude Opus 5.5 session, with no subagents. **Policy:** `docs/ui/REVIEW-STRATEGY.md`.
**Verdict: MERGE** (0 BLOCKER / 2 IMPORTANT / 4 MINOR, all fixed). The user merges.

**Independence:** none of the producer's scripts was used. Every expectation was derived again from `sources.yaml`, `questions.yaml`, `worldviews.yaml` and the `<Cite>` tags of the 168 MDX answers. Main (`1fb0ad3`) and the original head (`5b0d6be`) were built in a separate worktree and served next to the fixed head. Every finding below was reproduced on the original head before it was fixed.

## Risk-based plan (written before testing)

**What changed:**
- `/sources/` became one build-rendered list of 224 entries.
- A new client module (`source-library.ts`) hides entries for search, filters and pages.
- `reveal-hash.ts`, the only fragment handler, now asks the library to show a hidden `#source-` target.
- Filter state moved into `history.state`.

**Most consequential possible regressions:**
1. A `#source-` link reaching a hidden entry, or reaching it without landing on it, through any of the 10 navigation paths.
2. Entries lost, duplicated or altered (citation, URL, tags, type, citing links).
3. Wrong pagination or filter results, particularly for the 13 multi-tag sources.
4. History state that is stale, lost or written to the wrong entry. This includes the WebKit report and the UI-4C lesson that `popstate` can fire without `hashchange`.
5. No-JavaScript, failed-script and print readers losing entries.

**Plan:**
- Read the code first.
- Run one corpus-wide static integrity check (registry → head build → main build).
- Chrome: the full functional suite. Firefox and WebKit: the same suite run serially, because fragments, history, focus and print are browser-sensitive. Layout at five widths in all three engines.
- A dedicated WebKit history investigation.
- A small cross-feature regression: UI-4A, UI-4B, UI-4C, Compare and Case.
- No reading-mode matrices. No node-moving or mode code changed.

Estimated about 40 minutes of browser time. It took longer, because of the WebKit and Firefox investigations.

## 1. Code and architecture

**The static-first design is sound:**
- `sources.astro` renders each checked source once, sorted by a deterministic code-point key.
- The client only toggles `hidden` on entries and on the list, and rebuilds the small page-number `<ol>`.
- No entry is created, copied or reordered.
- `library.ts` keeps the fold and match logic in one place for build time and run time.

**History-state approach:** `{ q, wv, type, page }` under `history.state.library`, applied on load and on `popstate`, with `reveal-hash.ts` running after it so that the fragment wins. This is the right size: no query-string contract and no router.

**Weaknesses found by reading, then confirmed in browsers:**
- The 400ms debounced write could land on the next history entry (M1).
- The first entry never recorded a state (M2).
- On load, the legacy `#tradition-` anchor overrode a restored state (M3).
- Only initialisation was protected against errors (M4).

**JavaScript on other pages:** the shared module grows by 6.3 KB raw / 2.1 KB gzip, to 31.0 / 9.9 KB. On pages without `[data-library]`, `initSourceLibrary` returns at once, registers nothing, and `showLibraryEntry` returns `false`. Splitting it out would cost an extra request, so this was accepted.

## 2. Registry integrity

The scratchpad `integrity.mjs` makes **5,205 checks, with 0 failures**, on both the original and the fixed head. Every count was recomputed from the source files:

| | Result |
|---|---|
| Registered | **236** (236 unique IDs) |
| Checked and published | **224** |
| Unpublished | **12**: 10 default `unverified`, 2 explicit. None is cited. |
| Published multi-tag | **13**. Josephus *Antiquities* and Tacitus *Annals* carry all six tags. |
| Registered types | **8**; all 8 are published and offered in schema order with the established labels |
| `<Cite>` tags | 2,838 |
| Citing-answer links (published) | **1,222**, equal to main's set for every source |
| Published sources with no citing answer | 10 (no disclosure rendered) |

**For each of the 224 sources, the following hold:**
- Exactly one `li#source-<id>`, and the ID appears once on the page. Head's ID set equals main's.
- `data-tags` equals the registered tags, in order. `data-type` equals the registered type.
- The meta line is the type label, then every tag's registered worldview name.
- **The citation markup is byte-identical to main's** (Astro scope attributes stripped).
- The external link is exactly the registered `url`, or there is none. No link is invented for the 6 sources without one.
- `data-search` contains no word that occurs only in `notes` (tested by accent-folded word probes), and no URL text.

**Filter sizes by any tag:** Reformed 47, Naturalism 63, Judaism 35, Islam 36, Hindu 31, Buddhist 34. These match the DOM.

## 3. Search and multi-tag filtering

**Search semantics, checked against the registry:** every term must begin a word, in any order. The expectation uses its own independently written fold over the registered fields and is compared with every page collected in the browser.

**35 cases pass in all three engines:**
- an exact title, a single author, a partial prefix (`institut`), and both word orders of `hume enquiry`;
- mixed case;
- accented and unaccented pairs: Śaṅkara, Dōgen, Nāgārjuna, and Qurʾān / `qur'an` / `quran`;
- `al-ghazali`, `ibn sina`, Friedländer / `friedlander`, and a year;
- a work with no author (`codex`, `about`), a work with no URL (`mackie`);
- `man`, which does not match "Hermann";
- empty, whitespace-only and apostrophe-only queries; no results;
- worldview only, type only, and query + worldview + type;
- the six-tag Josephus under Hindu traditions.

Rapid typing (`augustine city`, 15ms per key) settles correctly. Probes of notes-only and URL words (`infidels`, `https`, `archive`, `verified`) return only what the registered fields justify.

**Assessment:** the prefix-AND model is predictable and fits a catalogue of 224 entries. No usability problem was found that would justify fuzzy matching.

The forename-first sort is documented by the producer. Hume files under D, al-Ghazali under A. It is a deliberate trade-off, because the registry has no surname field. Search makes it tolerable.

## 4. Pagination

Tested in all three engines:
- **Full walk:** Next through all 9 pages. The union equals catalogue order with no duplicates. The last page holds 24, Next is disabled there, and focus is on the count.
- **Page window:** `1 2 … 9`, `1 2 3 4 5 … 9` (a one-page gap is filled), `1 … 4 5 6 … 9` and `1 … 8 9`. Two-page and three-page windows were also checked.
- **Number buttons and keys:** the number buttons work, and Enter and Space operate them.
- **Resets and shrinking:**
  - A filter change from page 5 resets to page 1.
  - Judaism page 2 shows the remainder of 10.
  - Narrowing from page 2 to a single page hides the navigation.
  - No results shows "No sources match these filters.", hides the list and the navigation, and keeps Clear.
  - Clear restores page 1 and focuses Search.
- **Hidden entries:** their links and summaries cannot take focus.

## 5. Deep links and history

**Paths, each with the expected page computed from the registry:**

| Path | Cases | Result |
|---|---|---|
| 1. Direct load | page 1 (`codex-sinaiticus-project`), page 5 (`sep-arabic-islamic-religion`), page 9 (`farber-torahs-exodus`), multi-tag (Josephus), no URL (`mackie-ethics`) | on the right page, `:target`, landed |
| 2. Thinker page link | three thinkers' "in source registry" links | landed |
| 4. Incompatible filters, then a link | Islam + Academic → page 9 source: filters cleared, one history entry added | landed |
| | compatible: Naturalism kept, turned to its page 3 | landed |
| 5. Current-fragment click | after re-filtering: revealed, no new entry | landed |
| | `hashchange` from a no-results search | landed |
| 6. Reload | each direct case, and after filtering the fragment away | landed |
| 7. Back/Forward within the library | Primary page 2 ↔ fragment | restored, landed |
| 8. Back from a citing question | Reformed page 2 | restored |
| 9. Forward after changing filters on the earlier entry | | landed (fails before I2's fix in Firefox) |
| 10. `popstate` only | same fragment, query differs; events observed `["popstate"]` | revealed, landed |

**Also checked:**
- The original fragment is never rewritten.
- Unknown and malformed fragments (`#source-nope`, `#%E0%A4%A`) show page 1.
- UI-4C's question filter, and its I1 `popstate` path, still work (§10).

## 6. WebKit history investigation

The producer's explanation is **not correct**. Instrumented runs, which logged every `pushState`/`replaceState` and `history.state` to `sessionStorage` (scratchpad `wk2.mjs`), showed the following:

- **The question page does no load-time `replaceState`.** Its state stays `null` through load and `pageshow`.
- **The write happens during `pagehide`, on the way back.** `answer-panels.ts` saves on `pagehide` (line 147; `modes.ts` line 567 does the same for mode levels).
  - In WebKit, by the time `pagehide` fires, the history entry being returned to is already current. `history.state` there reads `{"probe":1}`, the Sources entry's state.
  - The question page's `replaceState` therefore lands on the Sources entry, which then loads with `null`.
- **Controls:**
  - Skipping only the `pagehide`-time write restores the state.
  - Method and the thinkers index (no `pagehide` writer) keep it.
  - A hash on the destination makes no difference.
  - Chrome and Firefox keep it.
- **Not caused by UI-4D:** `save()`, its delayed writes, and the one-load `scrollRestoration = 'manual'` do not contribute. The probe state was written once with `save()` unused.
- **The state is overwritten, not just left unapplied.** On main, the same probe is lost.
- **The underlying fault predates UI-4D and affects reading modes too.** On main in WebKit: open the Reformed answer on *What is man?* → go to another question → Back. The Explore state is `null` and the answer is closed. Chrome restores it.

**Correction made within UI-4D (fixes I1):**
- Every library write also stores the state in `sessionStorage`.
- On a Back/Forward load (`PerformanceNavigationTiming.type === 'back_forward'`) whose entry has no library state, that last state is restored.
- The reading-mode history contract and `answer-panels.ts`/`modes.ts` are unchanged.

**Result:** in WebKit, Sources (Naturalism page 2) → citing question → Back now shows Naturalism page 2. A source fragment still wins over the restored state.

**Not fixed, to carry into release QA:**
- The `pagehide` writers in `answer-panels.ts` and `modes.ts` still wipe the entry being returned to in WebKit, so reading-mode state is lost on Back from a question page in that engine.
- The safe fix is probably to drop those writes, because every change is already saved when it happens. It belongs to the reading-mode code, not UI-4D.
- Real Safari was not available. Its back-forward cache would usually mask the visible effect, but not the lost state on a later reload.

## 7. Citing-question disclosures

Checked for all 224 sources against MDX-derived relationships:
- N equals the number of distinct questions.
- Questions are in catalogue order, and worldviews in registry order within a question.
- Every href is unchanged.
- Each link's name is "Short title (Worldview)" and contains the visible text.
- There is exactly one closed `<details>` when a source is cited, and none when it is not.

**Representative sources:**

| Source | Questions | Answer links |
|---|---|---|
| ESV (heaviest) | 28 | 128 |
| `mackie-ethics` (light) | 3 | 3 |
| 10 uncited sources | no disclosure | — |

**Browser behaviour:**
- Enter opens and Space closes in all three engines.
- No horizontal overflow at 1280px with the ESV open, nor at any tested width with every disclosure on every page open.
- The native disclosure works without JavaScript.
- A citing link lands on its answer.

## 8. Progressive enhancement and print

- **No JavaScript:**
  - All 224 entries are visible, with no search or page controls and no Clear.
  - The count reads "224 sources".
  - A page-9 fragment lands.
  - Disclosures open.
  - Scripture credits and Source principles are visible.
- **Initialisation failure** (the page-number list removed at `interactive`): the library fails open with all 224 entries, controls withdrawn, and a deep link still landing.
- **Failure after enhancement** (the count setter made to throw during a filter change): before M4, 25 entries stayed visible and the reader was stuck; after M4, all 224 entries show and the controls are withdrawn.
- **Late script** (all JavaScript delayed 5.5s, past the 4s safety timer): the full list stays, and a reader at y=3000 is not moved.
- **Print,** after Naturalism + `hume`, then cleared and turned to page 2:
  - All 224 entries are visible, and the controls, status, page navigation and header links are hidden.
  - Disclosure content prints, and the ESV credit and Source principles print.
  - The screen state is unchanged afterwards.
  - The Chrome A4 PDF has 70 pages in every state: unfiltered, filtered at page 2, and no-JavaScript. Main's has 32, because every citing question now prints on its own line. This is readable and complete, so it was not changed.

## 9. Accessibility and visual quality

**Accessibility tree (Chrome `ariaSnapshot`):**
- a region "Source library" and a search landmark "Sources";
- a searchbox "Search", and comboboxes "Worldview" and "Type" whose option names match the registry;
- a navigation "Pages of sources" with "Previous" (disabled on page 1), "Page n" buttons and "Next";
- disclosures with the summary text "Cited in N questions". The "Show questions" verb is `aria-hidden`.

**Focus and announcements:**
- The live region reads "31 sources, page 1 of 2" in all three engines.
- A page turn moves focus to the count, which reads its range.
- Keyboard focus is visible (Clear, in the screenshot).

**Layout:** at 320 (Dark), 390, 640, 768 (Dark) and 1280 (Dark), across all 9 pages with every disclosure open, in Chrome, Firefox and WebKit:
- no horizontal overflow;
- no control target under 44px (fields, selects, page buttons, Previous/Next, summaries, Clear).

**Appearance:** long titles and publication details wrap cleanly at 320. The page reads as a ruled catalogue, not a dashboard.

**Limitation:** no real screen reader (NVDA/VoiceOver) was available. The wording of the live region and the disclosure is inferred from the accessibility tree only.

## 10. Browsers and scenarios exercised

Engines ran serially: Chrome (system channel), then Playwright Firefox 1497, then Playwright WebKit 2227, on Windows.

**Final-code results:**

| Engine | Results |
|---|---|
| Chrome | **162/162** (12 groups), plus regression **8/8** |
| Firefox | **169/169**: init 31, search 40, disclosure 4, no-JS 3, failure 5, print 2, deep/history/legacy re-run after the last fix 65, layout + live region 11, regression 8 |
| WebKit | **169/169**: same composition as Firefox |

The Firefox and WebKit groups outside deep, history and legacy ran before the final change. That change touches only the `popstate` path.

**Cross-feature regression (all three engines; head 8/8):**
- the theme switch on `/sources/`;
- a UI-4A citation preview;
- the UI-4C question filter revealing a filtered-out reference;
- a Compare citation landing;
- the UI-4C I1 path (Compare → Explore → filter → Back);
- a Christian Case citation landing;
- the answer footer's *Source Library* link opening page 1 at the top.

**Legacy anchors:**
- `#tradition-christianity`, `#tradition-islam` and `#tradition-buddhism` select the worldview, show page 1 and scroll to the library.
- An unknown tradition is ignored.
- `#principles` and `#scripture-credits` land.
- Without JavaScript, a `#tradition-` URL opens the top of the full list, as documented.
- No internal link targets `#tradition-`. The only fragment links into `/sources/` are the 64 thinker `#source-` links.

**Test-harness notes (not site defects):**
- Playwright Firefox's `page.reload()` is a fresh navigation (type `navigate`, state dropped). `location.reload()` behaves as a real reload, so reload tests use it.
- `page.goto` to a URL differing only by fragment is a same-document navigation.

## 11. Findings and fixes

| # | Severity | Finding | Fix |
|---|---|---|---|
| I1 | IMPORTANT | **WebKit:** Back from a question page reset the library to unfiltered page 1. The cause is in §6. | `sessionStorage` copy of the latest state, used only on a Back/Forward load whose entry lost its state (`source-library.ts` `restoredState()`) |
| I2 | IMPORTANT | **Firefox:** Forward to a `#source-` entry after changing the filters on the previous entry left the source on its page but 450px above the viewport, so it was not landed. Firefox records the departing entry's offset only after the `popstate` handlers redraw the list, then restores that offset after `popstate`. | The library flags a `popstate` that redrew the list (`takeHistoryRedraw()`). `reveal-hash.ts` lands the source again in the next task, after the browser's restoration. Verified 48px from the top in Firefox and Chrome |
| M1 | MINOR | A typed search waiting on its 400ms save was written to the *next* entry if a link was followed first. The entry left then lacked it. | Pending writes flush on a capturing `click`, and are dropped on `popstate` |
| M2 | MINOR | The first entry never stored a state. Back to it showed the later entry's filters: Chrome and Firefox showed Islam after Sources → *Source principles* → Islam → Back. | Save on initialisation |
| M3 | MINOR | Reloading a legacy `#tradition-<wv>` URL after turning to page 2 reset to page 1. | The legacy anchor applies only when the entry has no saved state |
| M4 | MINOR | An error after enhancement left the list stuck on a filtered page. Only initialisation fell back, and `resetSourceLibrary()` unhid entries last, after steps that could throw. | Every handler is `guarded()` and fails open. The reset unhides entries first. `showLibraryEntry` fails open |

Changed files:
- `src/scripts/source-library.ts`;
- `src/scripts/reveal-hash.ts` (the `popstate` listener only);
- this record and the producer record's affected statements.

No CSS, markup, content or reading-mode code changed.

**Observations, not changed:**
- **Forename-first sort** (§3).
- **Print:** 70 pages against main's 32 (§8).
- **Tag order on the meta line:** it follows the registered order (for example McGrew: "Naturalistic atheism, Reformed Christianity"), while the disclosure links follow worldview order. Registered order puts the primary tradition first, as main's grouping did.
- **Bundle size:** +2.1 KB gzip on every page (§1).

## 12. Validation (after the fixes)

| Check | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, **236 sources**, **168 answers**; 168/168 present |
| `npm run check` | 0 errors, 0 warnings, 1 hint (the existing `thinkerById` in `scripts/audit-inventory.mjs`) |
| `npm run build` | **96 pages** |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, **2,838 citations**; ESV candidates 104, **unledgered 0**, orphan ledger rows 0. Its line-ending-only rewrites of `research/final-audit/data/*` were restored |
| `node scripts/check-built-links.mjs` | **11,708 links**: 5,198 cross-page, 2,725 external. **0 broken, 0 duplicate IDs, 0 bad theme switches** |
| Diff against main | `src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` are empty |
| `integrity.mjs` | 5,205 checks, 0 failures on the final build |

## 13. Remaining limitations

- **WebKit reading-mode state:** the `pagehide` writes still lose reading-mode state on Back from a question page (§6). This predates UI-4D and is recommended for release QA. The library is protected, and source fragments never depended on the state.
- **The `sessionStorage` fallback is per tab, not per entry.** If one tab holds two Sources entries with different filters *and* WebKit wipes one, that entry shows the most recently saved state.
- **Real Safari** and **real screen readers** were not tested.
- **Filter state is not shareable** by URL (deliberate, spec §11). Find-in-page cannot see entries on other pages. A legacy `#tradition-` URL without JavaScript opens the top of the list.
- **Not tested:** touch devices, 200% zoom as an actual browser zoom (640px stands in for it), and Windows High Contrast. The forced-colours rule was only inspected.

## 14. Recommendation

**MERGE.** The bibliography is complete and unchanged:
- 224 entries, identical citations, every registered URL and every citing link preserved.
- Every `#source-` path reaches and lands on its entry in all three engines.
- Both history failures, including the producer's WebKit limitation (now correctly diagnosed), are fixed within UI-4D.

The one remaining WebKit issue lies in pre-existing reading-mode code and is recorded for release QA. The user merges. This review did not begin release QA or another UI phase.
