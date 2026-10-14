# UI-4C — Question-Specific Source Filters and Anchor Preservation

**Status:** Produced 2026-10-14 on branch `ui4c-question-source-filters`, cut from main `106d1ad` (UI-4B, PR #36 merged, including its review fixes 115b3b2/600c47c). Awaiting independent review.
**Specification:** `docs/DESIGN-SPEC-V1.md` §13.4. **Review policy:** `docs/ui/REVIEW-STRATEGY.md`.

The consolidated **Sources** section under each question now has **All** plus one filter per worldview that has a source group. Filtering only sets `hidden` on the existing source groups. No bibliography entry is copied, renumbered, reordered or regenerated, and any link to a source still reaches its entry whatever the filter or reading mode.

## 1. Behaviour before UI-4C

- `[slug].astro` rendered one `SourceList` per answer. Each `section.sources__group[data-ns]` had an `h3` heading (`<ns>-sources`) and an `<ol start>` of entries `li#<ns>-src-<n>[value][data-source]`, with `↩` backlinks to `#<ns>-cite-<n>-<k>`. Numbering is question-wide (`offset + n`).
- `modes.ts` set `hidden` on the groups. In Explore every group was shown. In Compare and Christian Case only the two shown answers' groups were visible, and a note said "Showing the sources for X and Y. The other answers' sources are listed in Explore."
- `modes.ts` `shownIn()` treated a link to an unshown answer's source group as outside the mode, so following it switched the page to Explore.
- `reveal-hash.ts` is the only fragment handler, used on load, on `hashchange` and for same-page link clicks, including a link to the current fragment. It opens closed answers and `<details>`.
- `cite-preview.ts` reads the entry, the full form from the group's first entry for that source, the locator, the note and the group heading from the DOM. Its *View full reference* is an ordinary fragment link that the shared handler resolves.

**Regression risks identified before implementation:**
1. Two controllers both setting `hidden` on the same groups.
2. A citation, preview or backlink reaching an invisible entry.
3. "All" quietly meaning "the mode's two groups".
4. Mode or selection changes resetting the filter, or the filter changing the mode.
5. A click on the current fragment, which fires no `hashchange`.
6. A preview losing its full form when the group is hidden.
7. A no-JavaScript reader, a failed initialisation, or a print run losing references.
8. Any change to numbering, IDs or backlinks.

## 2. Interface and semantics

```
SOURCES
All  Reformed Christianity  Naturalistic atheism  Rabbinic Judaism  Classical Islam  Hindu traditions  Buddhist traditions
──────────────────────────────────────────────────────────────────────────────────────────────
REFORMED CHRISTIANITY
1. …
```

- **Controls:** `<div role="group" aria-label="Show sources for">` containing native `<button aria-pressed>` elements.
  - The labels are the registered worldview names, taken from the content registry in the order of the source groups. The values are the registered worldview IDs. Nothing is hardcoded.
  - An option is offered only for an answer that has a source group, and the controls render only when there are at least two groups. Every question currently has all six.
- **Default:** **All** is pressed, and every group is shown in every reading mode.
- **One active selection:** a named worldview shows exactly that worldview's group; **All** restores every group. There are no combinations.
- **Unchanged groups:** headings, numbers, spacing and entries are as before. Filtered to Islam on *What is man?*, the entries still read 89, 90, … rather than 1, 2, ….
- **Appearance:** the controls look like the mode switch: plain sans words in one wrapping row over a hairline rule.
  - The pressed option has full text colour and a 2px underline in its worldview accent (navy for All).
  - The underline is a shape cue, so the state is not shown by colour alone.
  - The weight does not change, so selecting an option never rewraps the row.
  - Every option is at least 44px tall, and the existing `:focus-visible` outline applies.
  - There is no explanatory paragraph, badge or panel.
- **No URL parameter:** the filter is per-page presentation. The query string and hash contracts are unchanged, and source anchors stay shareable. A reload starts at All.

## 3. Ownership of source visibility

**`src/scripts/source-filter.ts` is the only code that sets `hidden` on a `.sources__group`.**

- `modes.ts` no longer touches the groups. The group-hiding block, the sources note and the two `resetModes` steps that undid them are removed.
- The `<p data-mode-sources-note>` element is removed from `[slug].astro`, because its statement is no longer true.
- `SourceList.astro` now puts `data-worldview="<worldview id>"` on each group. The filter matches on it, and it also gives the group its `--wv` accent token, which nothing on the group uses.

The module exposes:
- `initSourceFilter()`: sets All, wires the buttons, then un-hides the controls.
- `showSourceFor(target)`: if `target` is inside a hidden group, it selects that group's worldview and returns true.
- `resetSourceFilter()`: fails open by showing every group and withdrawing the controls. It never throws.

This supersedes the note in `UI3-REVIEW.md` §16, which said a future filter should either "offer only the visible groups in a mode, or let the mode's visibility take precedence". UI-4C was specified to make All mean every group in every mode, so the mode no longer has any source visibility to compose with.

## 4. Reading modes

| | Explore | Compare | Christian Case |
|---|---|---|---|
| All | six groups | six groups (not just the pair) | six groups (not just the case) |
| One worldview | that group | that group, including an unselected worldview | that group, including a worldview outside the case |
| Changing the mode, pair, Swap or opponent | the filter is unchanged | | |
| Changing the filter | mode, pair, opponent, URL and answer placement unchanged | | |

`modes.ts` `shownIn()` now treats the Sources section as shown in every mode. As a result:
- A fragment to any source entry or group heading keeps the current mode, and the filter adjusts if needed. Before, a link to an unshown answer's sources switched to Explore.
- A direct load such as `?mode=compare&views=judaism,islam#christianity-revelation-src-3` now stays in Compare and lands on the entry. The URL is kept as written.
- Links to unshown *answers* still switch to Explore, so a backlink from a Hindu entry while in a Christianity/Islam Case does so. That rule is unchanged: a valid scholarly fragment outranks the reading-mode layout.

## 5. Revealing hidden targets

The behaviour is consistent everywhere: **switch the filter to the target's worldview**, then reveal and land on the entry. This keeps the bibliography scoped and the pressed control truthful. The alternative was restoring All.

`reveal-hash.ts` `reveal(target)` calls `showSourceFor(target)` before opening answers and `<details>`. That one call covers every path:
- **A click on a same-page fragment link:** marker, preview *View full reference*, backlink, footer *This answer's references*, or a group-heading link. The group is shown during the click, before the browser's default fragment navigation, so the browser scrolls to a visible element.
- **A link to the current fragment:** no `hashchange` fires. The click handler sees that the reveal changed the layout, prevents the default and scrolls to the target itself, without adding a history entry.
- **`hashchange`:** a typed or assigned hash, or Back/Forward. The browser's own scroll may miss while the group is hidden, so the handler reveals the target and scrolls to it.
- **Initial load:** the filter starts at All, so every target is already visible.

IDs never change, so `:target` styling, shared links and history entries all keep pointing at the same element. The filter is initialised in its own `try` before the modes, so a failure in one cannot withdraw the other.

## 6. Citation previews

`cite-preview.ts` is unchanged.
- Hidden groups remain in the DOM, so the preview reads the full form, locator, note and group heading as before, even for a filtered-out group or a later, shortened entry.
- *View full reference* is a same-page fragment link, so it takes the §5 click path. The group is revealed before navigation and the preview closes on `hashchange`.
- Escape, Close and focus restoration were retested on hidden-group markers.

## 7. No JavaScript, failure and print

- **No JavaScript:** the controls are rendered `hidden`, so no dead controls appear. Every group is visible, and markers, entries and backlinks are ordinary fragment links.
- **Initialisation failure:** `resetSourceFilter()` re-hides the controls and un-hides every group. The error is rethrown asynchronously for reporting, and the modes still initialise.
- **Print:** `@media print` hides `.source-filter` and forces `.page-sources .sources__group[hidden]` to `display: block !important`. Every reference is printed whatever filter is on screen.
  - In Compare and Case, print now includes all six groups rather than the mode's two, because the mode no longer hides any.

## 8. Accessibility

- **Controls:** native buttons inside a named `role="group"` ("Show sources for"). `aria-pressed` exposes the selected option ("All, toggle button, pressed"), and that state persists when a reader leaves and returns.
- **Focus:** stays on the activated button. Focus never jumps to the bibliography, and there is no keyboard trap.
- **Hidden groups:** use `display: none` through `[hidden]`, so they are out of the tab order and the accessibility tree. Visible groups keep their `h3` headings and `aria-labelledby`.
- **No live region:** the button's own pressed state is announced, and an extra announcement would be redundant.
- **State cue:** an underline as well as colour.
- **Layout:** natural wrapping, with no horizontal scroll at 320px or 390px.

## 9. Corpus-wide integrity (all 28 questions)

**Static, base `dist` (main 106d1ad) against head `dist`, all 96 pages** (scratchpad `distdiff.mjs`):
- Normalisation removed exactly the UI-4C additions (the filter block and the group `data-worldview`), the removed note and the hashed asset names.
- **All 96 pages are byte-identical after normalisation.** Bibliography text, numbering, order, locators, notes, `data-source`, IDs, backlinks and URLs are therefore unchanged.

**Static structure of the head build:**

| Item | Count | Result |
|---|---|---|
| Source groups | 168 | each `data-worldview` matches its `data-ns` prefix and heading ID |
| Entries | 2,464 | `value` runs 1…N in document order on every page |
| Citation markers | 2,838 | every one resolves to an existing `-src-` entry |
| Backlinks | 2,838 | every one resolves to an existing occurrence |
| Filter options | 196 | 28 × (All + 6), matching the groups' IDs and names in order; every control block rendered `hidden` with the group name |
| Problems | 0 | |

**DOM, Chrome:** every option on all 28 questions in Explore, plus Compare (Judaism/Islam) and Case (Buddhism) on *Revelation* and *Evil*. That is 32 page states and 224 selections.
- Each selection shows exactly the chosen group (or all six) with the right `aria-pressed`.
- The `hidden` count is correct.
- Every entry's ID, value, `data-source` and text length matches the page as loaded.
- URL and mode are unchanged. All restores all six groups.

`src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` have an empty diff against main.

## 10. Representative browser checks

Suite: scratchpad `filters.mjs`. Engines ran serially: Chrome (system channel), and Playwright Firefox and WebKit. Results: **Chrome 103/103** (the 101 shared scenario checks plus the corpus and failure suites), **Firefox 101/101**, **WebKit 97/101**. The four WebKit exceptions are explained below.

| # | Scenario | Why chosen | Checks |
|---|---|---|---|
| 1 | *What is man?*, Explore, at 1280 light, 768 dark, 390 light and 320 dark | longest Christian/naturalist bibliography (139 entries) | All by default; Tab and Space/Enter select an option; Islam-only numbering starts at 89; focus stays on the button; hidden groups `display:none`; All restores; ≥44px targets; no overflow |
| 2 | Hidden target, *What is man?* | the core anchor guarantee | With Islam selected, a hash to a Christian entry switches the filter and lands as `:target` with the original ID. A group-heading fragment does the same. Back and Forward, with a different filter chosen in between, reveal the entry again. The footer link to the *current* fragment reveals the group and lands without a new history entry |
| 2b | Closed disclosures | backlink to a nested occurrence | With Judaism selected, a hash to a naturalist entry reveals it. Its backlink opens the closed answer and every closed `<details>` and lands on `…-cite-1-2` |
| 2c | Direct loads, *Revelation* | URL contracts | `#christianity-…-src-3` (Explore), `?mode=compare&views=judaism,islam#christianity-…-src-3` (stays Compare), `?mode=case&opponent=islam#hinduism-…-src-3` (stays Case): each lands, all six groups, URL kept |
| 3 | Preview, *Revelation*, three entry kinds: first use, a later shortened entry (the full form is borrowed), and an entry with no external URL (Buddhist, entry 109) | filtered-out group | Preview shows the full form, locator and answer name. Escape closes it and focus returns to the marker. *View full reference* switches the filter and lands. The backlink returns to the exact occurrence. Back reveals the entry again |
| 4 | Compare Judaism/Islam, *Revelation*, 1280 (columns) and 390 (stacked) | two non-Christian answers; an unselected filter | All gives 6 groups. Christianity, Judaism and All leave the URL, both selects and every cell unchanged. With Christianity selected, a marker in each column switches the filter to its group, and the backlink returns into that column. Mode stays Compare |
| 5 | Christian Case Christianity/Islam, *Revelation* | worldview outside the case; opponent change | Hindu filter: 7 stages and labels unchanged. A Christian stage citation reveals its group and stays in Case, and the backlink returns to the stage. Changing the opponent to Judaism keeps the Christianity filter. All gives 6 groups. A Hindu entry fragment stays in Case, and its backlink (an unshown answer) switches to Explore. Back returns to Case |
| 6 | No JavaScript; print; failure | progressive enhancement | No-JS: no controls, six groups, the entry fragment lands. Print after the Islam filter: 6/6 groups, 139/139 entries, controls hidden, and the screen filter is unchanged afterwards. An injected `querySelectorAll` failure in filter setup: controls withdrawn, six groups, Compare still active (Chrome) |

**WebKit exceptions (4):** the "focus stays on the pressed button" check after a mouse *click*, at all four widths.
- WebKit does not focus a button on mouse press; it focuses the nearest focusable ancestor, here `<main tabindex="-1">`. This is the Safari platform convention.
- Filtering, `aria-pressed` and overflow were all correct in the same runs.
- The keyboard path (Tab, then Space or Enter) keeps focus on the button in WebKit.

**Not run here:**
- The failure-injection and corpus suites in Firefox and WebKit. The code paths are engine-neutral DOM work.
- The full Compare and Case matrices: no node-moving code changed.
- Real Safari and a real screen reader, which remain release-QA items.

## 11. Light/Dark and mobile

Screenshots, Chrome, in `docs/ui/screenshots/ui4c/`:
- `all-desktop.png`: All, 1280, light.
- `islam-desktop.png`: Classical Islam, entries 89–.
- `mobile-390.png`: three wrapped rows, no overflow.
- `dark-hindu-desktop.png`: Hindu traditions underline in the dark accent `#E8A083`.
- `revealed-target.png`: with Islam selected, a hash to `christianity-revelation-src-5`. The filter switched to Reformed Christianity and the entry shows the `:target` tint.

At 320px and 390px the row wraps to three or four lines with 44px targets and no horizontal page scroll. On wrapped rows the pressed underline sits under its own word, not on the section rule. This is intended.

## 12. Validation

| Check | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers; 168/168 present |
| `npm run check` | 0 errors, 0 warnings, 1 hint (the existing unused `thinkerById` in `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, **unledgered 0**, orphan ledger rows 0. The script rewrites `research/final-audit/data/*` with line-ending-only changes; those were restored, so `research/**` is unchanged |
| `node scripts/check-built-links.mjs` | 96 pages, 28 question pages, 168 answers, 0 missing; **11,713 links**, the same as main and the UI-4B baseline (the filter's code joins the existing page module, and the buttons are not links); **0 broken, 0 duplicate IDs, 0 bad theme switch** |

The UI-4A theme switch and citation previews, and the UI-4B editorial changes, are unchanged. This was shown by the byte-identical normalised pages and the preview checks in §10.

## 13. Known limitations

- **Filter not kept on reload:** the filter is not in the URL or history state. Reload and new tabs start at All, which is deliberate (§2). In-page Back/Forward leaves the filter as it is unless the destination is a filtered-out source, in which case it switches as in §5.
- **Find in page:** the browser's find does not search a filtered-out group, because it is `display: none`. Choosing All restores it.
- **Print:** in Compare and Case, print now includes all six source groups rather than only the two shown answers' groups (§7).
- **Switching rather than All:** following a link to a hidden group *switches* to that worldview. A reader who wanted All must press All again.

## 14. Priorities for independent review

1. **The ownership change in `modes.ts`:** group hiding is removed, `shownIn()` treats the Sources section as shown, and source fragments now stay in Compare and Case. Confirm no mode path still relies on mode-scoped source groups. The earlier Compare/Case print expectations of "exactly two groups" are now intentionally six.
2. **The §5 paths in Firefox and WebKit:** a click on the current fragment, Back/Forward to a filtered-out entry, and *View full reference*.
3. **Wording:** that the "Show sources for" group name and the pressed-state announcement read well in a real screen reader.
4. **Visual fit beside the mode switch:** wrapped rows on phones and the dark accents.

Related: `docs/ui/UI4A-CITATION-PREVIEWS.md`, `docs/ui/UI4B-EDITORIAL-SIMPLIFICATION.md`, `docs/ui/UI3-REVIEW.md` §16 (superseded note).
