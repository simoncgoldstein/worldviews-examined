# UI-4D — Global Sources Library

**Status:** Produced 2026-10-14 on branch `ui4d-global-sources-library`, cut from main `1fb0ad3` (UI-4C, PR #37 merged, including its fresh-session fix `5357d3d`). Independently reviewed 2026-10-14 in a fresh session: **`docs/ui/UI4D-REVIEW.md`** (0 BLOCKER / 2 IMPORTANT / 4 MINOR, all fixed; MERGE). Statements below that the review corrected are marked *(review)*.
**Specification:** `docs/DESIGN-SPEC-V1.md` §13.5. **Review policy:** `docs/ui/REVIEW-STRATEGY.md`.

`/sources/` is now a searchable, filterable and paginated catalogue. Every published source is rendered once, in catalogue order, as an ordinary list. A small script adds search, a worldview filter, a type filter and pages of 25 over those same entries. Without JavaScript, the page is the complete list.

## 1. The page before UI-4D

- A Scripture credits section, then a sticky aside of seven links: six `#tradition-<worldview>` headings and `#principles`.
- One `<section>` per worldview. Each source sat under the worldview of its **first** tag only (`traditionTags[0]`) and was sorted by `author ?? title` with `localeCompare`.
- Each entry was `li#source-<id>.source-entry`, with the `SourceCitation`, a type label, and an always-open "Cited in:" run of every citing answer as `Question (Worldview)` links.
- Source principles came last.
- Only `verificationStatus: checked` sources were shown.

**Incoming navigation found:**
- `sourceUrl()` builds `sources/#source-<id>`. Its only caller is the thinker page's "in source registry" link, which is emitted only for checked sources.
- Plain `sources/` links: the header navigation, the answer footer's *Source Library* link, and the Method page.
- `#tradition-*` and `#principles` were linked only from the page's own aside. They may also exist in readers' bookmarks.

**Regression risks identified before implementation:**
1. A deep link landing on a hidden or paginated entry.
2. Multi-tag sources lost from filters, or duplicated in the list.
3. Pagination omitting or repeating entries under combined filters.
4. Lost or miscounted citing-answer links.
5. No-JavaScript, failed-script and print readers losing entries.
6. Back/Forward or reload restoring a list that hides the fragment (the UI-4C `popstate`-without-`hashchange` lesson).

## 2. Interface and rendering

```
Sources
Every cited work has been checked against the edition named.
Scripture credits · Source principles
────────────────────────────────────────────────────────────────
SEARCH                          WORLDVIEW          TYPE
[ Authors and titles        ]   [All worldviews ▾] [All types ▾]
Showing 1–25 of 224 sources                  [Clear filters]
────────────────────────────────────────────────────────────────
Augustine of Hippo, “The City of God ↗,” Nicene and Post-Nicene Fathers …
Primary text · Reformed Christianity
Cited in 14 questions  Show questions ▸
────────────────────────────────────────────────────────────────
…
[Previous]            1 … 4 5 6 … 9            [Next]
────────────────────────────────────────────────────────────────
SCRIPTURE CREDITS …
SOURCE PRINCIPLES …
```

- **`src/pages/sources.astro`** renders the 224 entries at build time into one `ul.library__list`. Each entry is `li#source-<id>.library__entry` and carries three attributes, all derived from the registry:
  - `data-tags`: every registered tag.
  - `data-type`: the registered type.
  - `data-search`: the folded search text (§5).
- The search form, the Clear button and the page navigation are rendered `hidden`. The script unhides them once it is ready.
- **`src/scripts/source-library.ts`** (new) only toggles `hidden` on the entries, and on the list when nothing matches. It also rebuilds the small page-number list. It never creates, copies or reorders an entry.
- **`src/lib/library.ts`** (new) holds pure helpers shared by the page (at build time) and the script:
  - `normalizeSearch`, `searchText`, `queryTerms` and `matchesTerms`;
  - `compareSources`;
  - `PAGE_SIZE = 25`.
- **`src/scripts/reveal-hash.ts`**, still the only fragment handler, now also calls `showLibraryEntry()` (§9).
- **Styles:** `components.css`. The old `.source-registry` rule is replaced by the `.library*` rules.

**Each entry shows:**
1. The unchanged `SourceCitation`. The title is the registered link when a URL exists.
2. One quiet sans line: the type label from `sourceTypeLabels`, then the full names of **all** of its worldview tags. These names explain why a source matches a filter. Nothing in the citation is repeated.
3. The citing-question disclosure (§8).

There are no cards, icons, colour coding per type, or statistics. The controls follow the Compare picker's language: tracked-capital labels, 44px fields, a fine border and the same monochrome chevron. The Clear button and Previous/Next use the existing `.control` style.

## 3. Included sources and verification policy

The policy is unchanged: **only `verificationStatus: checked` sources are published.**

| | Count |
|---|---|
| Registered | 236 |
| Checked, published | **224** |
| Not published | 12 |

- The 12 unpublished sources: 10 have no status (default `unverified`) and 2 are explicitly `unverified`. None is cited by any answer. Each is named only as a thinker's representative work, and the thinker page already links only checked sources.
- **Set comparison with main:** main's page showed exactly the same 224 source IDs. **No source was added, removed or changed in status.**

**By type (published):**

| Type | Label | Count |
|---|---|---|
| primary | Primary text | 120 |
| academic | Academic scholarship | 58 |
| article | Article | 22 |
| confessional | Confession | 7 |
| book | Book | 5 |
| scripture | Scripture | 5 |
| web | Web | 4 |
| commentary | Commentary | 3 |

All eight schema types occur, so all eight are offered, in schema order, with the established labels.

## 4. Deduplication and multi-tag filtering

- One entry per source; the unfiltered list shows each work once.
- **The worldview filter matches any registered tag.** 13 sources have more than one tag. Two of them (Josephus, *Antiquities*; Tacitus, *Annals*) carry all six tags.
- Filter sizes (any tag), compared with main's first-tag grouping:

| Worldview | Filter | Main's section |
|---|---|---|
| Reformed Christianity | 47 | 42 |
| Naturalistic atheism | 63 | 56 |
| Rabbinic Judaism | 35 | 32 |
| Classical Islam | 36 | 34 |
| Hindu traditions | 31 | 29 |
| Buddhist traditions | 34 | 31 |

  The differences are exactly the multi-tag sources that the old page could show under one heading only.
- The worldview options are the registered worldview names in registry order, offered only if they tag at least one source (all six do).
- No ID, tag, type, metadata or citation format was changed.

## 5. Search

- **Fields searched:** author, title, container title, editor, translator, short citation, display citation and year.
- **Not searched:** notes, URLs, DOIs, publisher, place and verification data.
- The text is computed at build time from the registry. There is no hand-maintained keyword list.

**Normalization** (`normalizeSearch`, applied identically to the query and to the text):
1. Unicode NFD, then remove combining marks (`Śaṅkara` → `sankara`, `Dōgen` → `dogen`).
2. Map a few letters that do not decompose (`ø œ æ ß ł đ ı`).
3. Drop apostrophes and the ʿayn/hamza marks of transliteration, so `Qur'an`, `Qurʾān` and `quran` all match.
4. Turn every other run of non-letters and non-digits into one space, and lower-case everything.

The displayed citation is untouched.

**Matching:**
- The query is split into terms. **Every term must begin a word** somewhere in the searched text, in any order. So `hume enquiry` and `enquiry hume` are equal, `institut` finds *Institutes*, and `man` does not match inside "Hermann".
- Whitespace is ignored, and an empty query matches everything.
- Search, worldview and type combine with **AND**.

The list updates on every `input` event (224 entries, no debounce needed). There is no dependency, index service or backend.

## 6. Sort order

`compareSources`, applied at build time:
1. The folded registered **author**, or the title when there is no author.
2. The folded **title**.
3. The source **ID**.

A leading "The", "A" or "An" is ignored in the sort key. Plain code-point comparison of folded keys keeps the order independent of ICU or locale.

**Why sort by the author string as registered (forename first):** the registry has no surname field, and many names have no Western surname: Śaṅkara, Augustine of Hippo, Abu Hamid al-Ghazali, the Westminster Assembly. Inverting names heuristically would misfile them.

The client never re-sorts. Pages are slices of DOM order, so an entry never moves between pages while the filters are unchanged.

## 7. Pagination

- **25 per page, applied after filtering.** The full list is 9 pages: 8 × 25 + 24.
- **Controls:** `nav[aria-label="Pages of sources"]` with Previous, a list of page buttons and Next.
  - Page buttons have accessible names "Page n". The current page has `aria-current="page"` and a border plus heavier weight, so it is not shown by colour alone.
  - The window is the first page, the last page, and the current page ±1. A gap of exactly one page shows that page; larger gaps show an `aria-hidden` "…". At most seven items, for example `1 … 4 5 6 … 9`.
  - Previous is `disabled` on page 1 and Next on the last page.
  - The navigation is hidden when there is only one page.
- **Turning a page** moves focus to the count (`tabindex="-1"`), which reads "Showing 26–50 of 224 sources". If the top of the list is above the viewport, it is scrolled into view; otherwise the view stays still.
- **A search or filter change** resets to page 1. The current page is clamped whenever the result count shrinks.
- **No results:** the count reads "No sources match these filters.", the empty list is hidden, the navigation is hidden, and *Clear filters* remains.
  - *Clear filters* appears whenever any filter is active. It restores everything and focuses the search field.
- **Layout:** desktop puts Previous, the numbers and Next in one row. Below 40rem, Previous and Next share the first row and the numbers sit beneath them, centred. All targets are 44px.

## 8. Citing-question disclosure

- `<details class="library__cited">`, closed by default, rendered only when at least one answer cites the source.
- **Summary:** "Cited in N questions", plus a visual "Show questions ▸" / "Hide questions ▾". The verb is `aria-hidden`, because the native expanded state is announced.
- **N counts distinct questions**, not answers. Inside, there is one line per question, in question order, then every citing answer's link in worldview order: *What is man?* Reformed · Naturalism.
  - Each link's `href` is unchanged (`questions/<slug>/#<worldview>`).
  - Each link's accessible name is the old link text, "What is man? (Naturalism)". The visible text is contained in it.
- **Totals:** 1,222 answer links across 224 sources, identical to main.
  - The most heavily cited source is the ESV: 28 questions, 128 answer links.
- There is no nested card, only a hairline at the left of the list.

## 9. Deep links and history

**`#source-<id>` remains the shareable address,** and it is never rewritten. `showLibraryEntry(target)` applies one policy everywhere:

> If the source is hidden: when it matches the current search and filters, turn to its page in the filtered list; otherwise clear the search and both filters, then turn to its page in the full list.

`reveal-hash.ts` calls it from `reveal()`. It therefore runs:
- on the initial load;
- on `hashchange`;
- on same-page fragment clicks, including a click on the **current** fragment, which fires no `hashchange`;
- from the `popstate` listener, which handles Back/Forward when **only the query differs**, so no `hashchange` fires.

The browser then lands the entry, which keeps its `:target` tint.

**State is kept in `history.state.library`, not the URL** (`{ q, wv, type, page }`). It is written on each change; typing is debounced. It is restored:
- on load, before the fragment is considered;
- on `popstate`, from the entry being returned to; reveal-hash's listener runs after this, so the fragment still wins.

This makes Reload, and Back from a citing question, return the reader to the same list. It needs no query-string contract, and history entries with no saved state keep the current list.

*(review)* Every entry now records its state on initialisation. A pending typed save is flushed before a link is followed and dropped on `popstate`. A copy of the latest state in `sessionStorage` is restored on a Back/Forward load whose entry has lost its state (WebKit, §12). When a `popstate` redraws the list, a source fragment is landed again after the browser's own scroll restoration (Firefox).

**Scroll restoration:**
- When the restored state already shows the fragment, the browser's native restoration applies.
- When the library had to change the restored state to show the fragment (a reload after the reader had filtered it out), the old scroll offset belongs to a list that is no longer displayed. For that one load, `history.scrollRestoration` is set to `manual` and returned to `auto` after `load`, so the reader lands on the source.

**Other cases:**
- **Unknown or malformed fragment:** ignored, so page 1 is shown with no error.
- **The script arrived late** (the layout's 4-second safety timer had already shown the page): the library does not take over. The reader keeps the full list.

### Legacy anchors

- `#tradition-<worldview>`: the old per-worldview headings no longer exist, so the IDs are gone and nothing is duplicated to recreate them. On load and on `hashchange`, the script selects that worldview with an empty search and type, shows page 1, and scrolls to the library. The URL is kept. An unknown worldview is ignored.
  - **Without JavaScript,** such a URL opens at the top of the full list. The old grouping no longer exists to land on.
- `#principles` and `#scripture-credits` keep their IDs. Both are now also linked from the page header.

## 10. No-JavaScript, failure and print

- **No JavaScript:**
  - All 224 entries are shown, in catalogue order, with no controls, pages or Clear button. The count reads "224 sources".
  - Native disclosures work, and every `#source-` fragment lands natively.
  - Scripture credits and Source principles follow the list and are never inside a disclosure.
- **Failure:** setup is wrapped in its own try/catch, as for the UI-4C filter. On any error, `resetSourceLibrary()` withdraws the controls, the navigation and Clear, unhides every entry and the list, and restores the static count. The error is still reported.
  - An injected failure (the page-number list removed at `interactive`) left all 224 entries visible, and a deep link still landed.
- **Print:** `@media print` hides the controls, the count, the page navigation, the header links and the "Show questions" verb. It forces every entry and the list to display, whatever filter and page is current.
  - The global print rules show every disclosure's content, so citing questions print as links.
  - A Chrome PDF printed after filtering to Naturalism and turning to page 2 contains all 224 entries over 70 A4 pages. The screen state was unchanged afterwards.

## 11. Accessibility

- **Form:** `form[role=search][aria-label="Sources"]`. Visible labels "Search", "Worldview" and "Type" are bound by `for`; the placeholder is "Authors and titles". `autocomplete="off"` stops form restoration from fighting the history state.
- **Native `<select>`s,** with no custom combobox. Option names match the registry.
- **Result changes** are announced by a polite, visually hidden live region about 600ms after the reader pauses, for example "37 sources, page 1 of 2" or "No sources match these filters." Page turns are announced by moving focus to the count, not by the live region.
- **Hidden entries** are `display:none`, so they are out of the tab order and the accessibility tree. Checked: none of their links or summaries can take focus.
- **Focus:** the existing `:focus-visible` outline is used. The count gets an outline only when focused by keyboard.
- **Targets:** 44px for fields, selects, page buttons, Previous/Next and summaries. Inline answer links are inline text (WCAG 2.5.8 exception), each with about 32px of line height.
- **Overflow:** none at 320, 390, 640 (equivalent to 1280 at 200% zoom), 768 or 1280px, in Light and Dark, with every page's disclosures open. Entries use `overflow-wrap: anywhere`, and text is capped at 75ch on wide screens.
- **Accessibility tree (Chrome):**
  - search landmark;
  - searchbox "Search", comboboxes "Worldview" and "Type";
  - a disclosure group "Cited in 21 questions";
  - navigation "Pages of sources" with "Page n" buttons.
- **No real screen reader was run.** NVDA/VoiceOver remain release-QA items, especially for the live-region wording and the disclosure verb.

## 12. Browser testing

The suite is in the scratchpad (`lib.mjs`). Expectations are computed independently from `sources.yaml` with a separately written fold, and are not read back from `data-search`. Engines ran serially: Chrome (system channel), then Playwright Firefox and WebKit, all at 1280×900 unless stated.

| # | Scenario | Why chosen |
|---|---|---|
| init | default state, labels, option names, page names, live region | contract |
| pages | Next through all 9 pages: the union equals DOM order with no duplicates; page 5 window; last page 24 with Next disabled; number buttons; Enter/Space; hidden entries unfocusable; a filter resets from page 3; a filtered last page of 13; narrowing from page 9 | partition and state transitions |
| search | 27 cases, every page collected and compared with the expectation. They cover author, exact title, partial, mixed case, accented and unaccented pairs (Śaṅkara, Dōgen, Nāgārjuna, Qurʾān), `al-Ghazali`, multiword in both orders, year, no author (`codex`), no-result, worldview only, type only, worldview + type, query + worldview + type, and a multi-tag source under Hindu traditions. Also: rapid typing and select changes, Clear, back from zero results, Enter does not submit | search semantics |
| deep | direct loads of first-, middle- and last-page sources and the six-tag Josephus, each on its computed page as `:target`. A link while filtered: incompatible filters cleared (page 9); a compatible filter kept (Naturalism page 3). Current-fragment click after re-filtering; reload after re-filtering; unknown and malformed hashes; `#tradition-islam` and `#tradition-buddhism`; `#principles` | §9 |
| history | hash navigation reveals; Back restores Primary text page 2; Forward; a **`popstate`-only** Back (same fragment, query differs; events observed: `popstate` only) reveals the source; Forward; a citing-question link lands on its answer and Back restores Reformed Christianity page 2 | UI-4C lesson |
| disclosure | ESV 28/128, closed, Enter opens, Space closes, verb toggles; markup intact after paging and filtering (1,222 links); the Naturalism link lands on `#naturalism` | §8 |
| nojs, failure, late, print | §10; a late script (the safety timer has already shown the page) keeps the full list; a search for a work with no URL (`mackie`) | progressive enhancement |
| layout | 320/390/640/768/1280 × Light/Dark, all pages, disclosures open: no overflow, 44px controls | mobile and zoom |
| regress | two thinker pages' "in source registry" links reveal their entries; the question page's *Source Library* link opens page 1 at the top; the UI-4C question filter still switches to reveal a filtered-out entry | shared navigation |

**Results:**

| Engine | Result |
|---|---|
| Chrome | **171/171** |
| Firefox | **170/170** (Chrome's extra check is the PDF) |
| WebKit | **169/169**, plus one known limitation, reported below rather than counted as a pass |

The final runs were split into smaller batches, one engine at a time, because the machine was low on memory. A first attempt at the full three-engine run was stopped by the harness under memory pressure.

- **Chrome:** one full run, then the two late-added checks.
- **Firefox:** 135 checks up to the disclosure group, then the remaining groups.
- **WebKit:** two halves.

**Changes to the test script:** the no-JavaScript check's `document.fonts.ready` await was replaced with a plain wait, because it closed the Firefox page when JavaScript was disabled.

**WebKit known limitation:** in Back from a question page, the library state was not restored, and WebKit showed page 1.
- **Cause, isolated:** in Playwright's Windows WebKit, the question page's load-time `history.replaceState` (answer panels and modes) overwrote the *previous* entry's state. A minimal reproduction showed this with any `replaceState` on the question page, and blocking it there restored the state. Navigations to the Method page keep it.
  - *(review)* This diagnosis was wrong. The write that does the damage is `answer-panels.ts`'s **`pagehide`** save, which WebKit applies to the entry being returned to; the question page writes nothing at load. The library now restores from `sessionStorage` in that case. See `UI4D-REVIEW.md` §6.
- This is pre-existing question-page behaviour in that engine, outside UI-4D, and was not changed. The source fragment path is unaffected: fragments do not depend on the stored state.
- Real Safari was not available to check.

**Cross-engine:** the `popstate`-only path, reload-with-fragment, focus-after-page-turn, native disclosure keyboard operation and print emulation passed in all three engines.

## 13. Content and link integrity

`integrity.mjs` compares the built page with `sources.yaml`, with the `<Cite>` tags parsed from all 168 MDX answers, and with main's built page. **2,699 checks, 0 failures.**
- Exactly one entry per checked source, and no unchecked source. The source set equals main's. Each `source-` ID appears once on the page.
- `data-tags` and `data-type` equal the registry. The type label and every tag's name are shown. The search text contains no notes.
- **Citation markup is identical to main's for all 224 entries,** after stripping Astro scope attributes.
- External links: exactly the registered URL, or none. No link was invented for the 6 sources with no URL.
- The citing links equal both the MDX-derived set and main's set for every source. The distinct-question count equals the MDX-derived count. There is exactly one closed disclosure when a source is cited, and none when it is not.
- Every cited source is checked.
- **Sort determinism:** two separate builds produced the same ID order (hash `03d06542591b`).

**Built links:** 11,713 → **11,708** (−5).
- −7: the old aside's six `#tradition-*` links and its `#principles` link.
- +2: the new header links to `#scripture-credits` and `#principles`.
- Cross-page links (5,198) and external links (2,725) are unchanged, so every answer link and source URL on the page survives.

`src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` have an empty diff against main.

## 14. Validation

| Check | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers; 168/168 present |
| `npm run check` | 0 errors, 0 warnings, 1 hint (the existing unused `thinkerById` in `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, **unledgered 0**, orphan ledger rows 0. Its line-ending-only rewrites of `research/final-audit/data/*` were restored |
| `node scripts/check-built-links.mjs` | 96 pages, 168 answers, 0 missing; 11,708 links; 0 broken, 0 duplicate IDs, 0 bad theme switch |

## 15. Known limitations

- **Filter state is not shareable:** the query, filters and page live in history state, so a copied URL opens page 1 unfiltered. This is deliberate (spec §11). The source fragment is the shareable unit.
- **Find in page** cannot see entries on other pages or outside the filter, because they are `display:none`. Clearing the filters and paging, or printing, shows every entry.
- **Legacy `#tradition-*` without JavaScript** opens the top of the full list.
- **Sorting by registered author** means "Abu Hamid al-Ghazali" files under A and "David Hume" under D (§6).
- **WebKit (Windows Playwright):** the library state is lost on Back from a question page (§12). Safari is untested. *(review: fixed for the library; reading-mode state is still lost in WebKit, recorded for release QA.)*
- **No real screen-reader pass** was made.

## 16. Priorities for independent review

1. **Deep links:** every `#source-` reachable under combined filters, on later pages, after reload, and on Back/Forward including `popstate`-only traversal. Also the one-load `scrollRestoration = 'manual'` choice in `reveal-hash.ts`.
2. **Registry correctness:** one entry per checked source, multi-tag matching, and identical citations.
3. **Pagination partition** under combined filters, and page clamping.
4. **Citing-question counts** (distinct questions) with every answer link preserved.
5. **Progressive enhancement:** no-JavaScript, injected failure, a late script, and print.
6. **Visual and accessibility quality:** the controls at 320px and high zoom, Light/Dark, and the live-region and disclosure wording in a real screen reader.

Screenshots (Chrome) are in `docs/ui/screenshots/ui4d/`:

| File | Shows |
|---|---|
| `default-light-desktop.png` | default library, desktop Light |
| `default-dark-desktop.png` | default library, desktop Dark |
| `search-results.png` | search for `sankara` |
| `combined-filters.png` | `westminster` + Reformed Christianity + Confession |
| `later-page.png` | page 6 |
| `disclosure-expanded.png` | the ESV with its 28 questions expanded |
| `mobile-390.png` | mobile, 390px |
| `mobile-320-dark.png` | mobile, 320px, Dark |
| `revealed-anchor.png` | a direct `#source-farber-torahs-exodus` landed on page 9 |

Related: `docs/ui/UI4C-QUESTION-SOURCE-FILTERS.md`, `docs/ui/UI4C-REVIEW.md`.
