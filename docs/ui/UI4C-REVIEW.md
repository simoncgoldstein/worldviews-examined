# UI-4C Review — Question-Specific Source Filters

**PR:** #37, `ui4c-question-source-filters`. **Base:** `106d1ad`. **Head reviewed:** `7593c74`.
**Date:** 2026-10-14. **Policy:** `docs/ui/REVIEW-STRATEGY.md`.
**Verdict: MERGE** (0 BLOCKER / 0 IMPORTANT / 1 MINOR, fixed). The user merges.

> **Independence caveat.** This review ran in the same Claude Opus 5.5 session that produced UI-4C, not in a fresh session as requested. To limit that bias:
> - every test was new code (scratchpad `pw/review.mjs`), not the producer's `filters.mjs`;
> - the base build was served next to the head build for entry-by-entry comparison;
> - several routes the producer did not exercise were added: a plain marker click with the preview disabled, a chain of entries across worldviews with Back/Forward, filter persistence across mode switches and Swap, a forced rearrangement failure, partial init and malformed metadata, and the accessibility tree.
>
> A reviewer in a fresh session could still catch blind spots shared with the producer.

## Risk-based plan (written before testing)

**What changed:** visibility of source groups moved from `modes.ts` to the new `source-filter.ts`, and fragment resolution in `reveal-hash.ts` now includes the filter. `shownIn()` now keeps source targets in Compare and Case.

**Most consequential possible regressions:**
1. a source link landing on an invisible entry (the anchor guarantee);
2. a second writer of `hidden`, or a stale "two groups" assumption;
3. a filter or mode state that diverges after history navigation or a failure;
4. lost or altered bibliography data.

**Plan:**
- read the code first;
- run a cheap check across the whole corpus (base against head DOM, every filter choice);
- Chrome functional suites;
- Firefox and WebKit on the browser-sensitive suites: fragments, a click on the current fragment, history, the preview, focus and layout;
- no Compare or Case matrices, because no node-moving code changed.

Estimated about 20 minutes of browser time; that held.

## 1. Architecture

The design is sound and small:
- `source-filter.ts` has 3 entry points;
- `modes.ts` loses 19 lines;
- `reveal-hash.ts` gains one call inside `reveal()`, which every fragment path already goes through (load, `hashchange`, a click, a click on the current fragment).

Initialising the filter in its own `try` keeps the two enhancements independent. No broad refactor was needed.

## 2. Ownership of source visibility

**Writers:** `grep` over `src/` finds exactly one writer of group `hidden`: `source-filter.ts`. That covers `select()` and the fail-open `resetSourceFilter()`. `modes.ts` no longer contains `sources__group`, `data-mode-sources-note` or any reset step for them.

**Readers:** `cite-preview.ts` only reads the group. No CSS or adapter (`compare.css`, `case.css`, `compare.ts`, `christian-case.ts`) assumes two groups. `compare.css`'s `.page-sources` rule applies only while the mode is pending and is unchanged.

**New `data-worldview` on groups:** it cannot be mistaken for an answer, because answers resolve with `[data-answer]` (`answer-panels.ts` `ANSWER`, `modes.ts`). The only global `[data-worldview]` rule sets the `--wv` token.

**Functions in `modes.ts`:**
- `shownIn()`: answers are judged by `layout.shown`; the overview and `.reading` count as not shown; everything else, including Sources, counts as shown.
- `needsResolve()` is therefore false for every source target, so source fragments never leave the mode. Backlinks, which point into answers, still resolve through the answer branch.
- `resolveForMode()` and `resetModes()` are consistent with this.

**Mode transitions (tested):**
- Explore → Compare → Swap → Case kept the Buddhist filter.
- Back to Compare kept All with six groups.
- A forced failure part-way through a Compare rearrangement (injected `createComment`) triggers `resetModes()` → Explore, and the filter stays coherent: Hindu pressed and Hindu shown. All then restores six groups.

## 3. Hidden-source fragments and history

| Route | Result (C = Chrome, F = Firefox, W = WebKit) |
|---|---|
| Plain citation marker, preview unavailable (`showPopover` removed), Islam filter → Christian entry | lands as `:target`; Christianity pressed; one history entry (C F W) |
| The same marker again after re-filtering, i.e. a click on the current fragment | revealed and landed; **no new history entry** (C F W) |
| *View full reference* to the current fragment, for 4 entry kinds | revealed and landed; no new entry (C F W) |
| Answer-footer *This answer's references* (Compare at 1280/390, Case stage 7) | group revealed; mode kept (C F W) |
| Group-heading fragments | revealed (C F W) |
| Direct `?mode=compare…#buddhism-…-src-4` and `#naturalism-…-sources`; the same with `?mode=case…` | mode kept; URL unchanged; lands; All pressed; no extra history entry (C F W) |
| Chain Naturalism → Buddhism → Judaism entries (with a Hindu filter between each), then Back, Back, Forward | each step switches the pressed filter to the target's worldview and lands; mode stays Explore (C F W) |

Every target kept its original ID. "Lands" means the entry's top is in the viewport and no closed `<details>` ancestor remains. The filter never writes history.

**Harness note:** direct loads report `history.length` 2 in Chrome and WebKit, and 1 in Firefox, which replaces the initial `about:blank`. Base main gives the same 2, so this is not a site behaviour.

## 4. Reading modes and backlinks

**Explore, *What is man?*:** a backlink into a closed answer and nested disclosures opens them and lands. This was covered by the chain and preview runs and the producer's closed-disclosure case, re-checked here.

**Compare, Judaism/Islam on *Revelation*, at 1280 (columns) and 390 (stacked):**
- A hash to each column's entry reveals the right group.
- Its backlink lands in that worldview's passage (`[data-cell]` attribution checked), with the URL unchanged and cell attribution unchanged.
- A backlink into the unpaired Hindu answer → Explore, the URL is cleaned and it lands. Back → Compare.

**Case, Christianity/Islam on *Revelation*:**
- Stage citations from both answers reveal their groups and stay in Case.
- Backlinks return to the stage occurrence.
- Seven stages throughout. An opponent change is honoured and keeps the filter.

All checks passed in C, F and W.

## 5. Citation previews

Four entry kinds were tested with the group hidden, each in all three engines:
- a first full citation;
- a later shortened citation at a different locator;
- an entry with no registered URL (Buddhist);
- an entry with a note.

**Content.** The preview's citation `innerHTML` equals the group's first full entry, and its links equal that entry's registered links (none when there are none). The locator and note are exact, the heading reads `Source N · <group name>`, and no IDs were copied.

**Interaction.** Close returns focus to the marker. *View full reference* reveals and lands, and the backlink returns to the original marker.

## 6. No JavaScript, failure, print

- **No JavaScript (C F W):** 0 visible buttons, six groups, the marker link lands, and the backlink lands.
- **Partial init failure** (`aria-pressed` writes throw after the groups were set): controls withdrawn, six groups, Case still working (C).
- **Malformed metadata** (Islam group missing `data-worldview`): fails open (C).
- **Mismatched metadata** (group ID matching no option): found **M1**, fixed (§12).
- **Duplicate listeners:** `initSourceFilter` is called once, from `reveal-hash.ts`. A second call would add an idempotent listener only.
- **Print (C F W)** in Compare with the Naturalism filter: 6/6 groups, every entry, controls hidden; the screen filter is unchanged afterwards.

## 7. Accessibility and focus

- **Semantics:** a native `<button aria-pressed>` set in `role="group"` named "Show sources for". Chrome's AX tree shows the named group, 7 toggle buttons and exactly one pressed.
  - Strictly, a one-of-seven choice is radio-like. A pressed button that stays pressed when activated again is a known, acceptable variant, and the specification allowed `aria-pressed`. No change.
- **Keyboard (C F W):** Tab order runs through the options in order. Enter and Space both select, and focus stays on the activated button. The focus ring is a solid 3px outline.
- **After the last option:** Tab goes into the visible group, never into a hidden one (C F).
- **Hidden groups:** only the visible group's heading is exposed in the AX tree (C).
- **Visual state:** a 2px underline as well as colour. Targets are 44px. No overflow at 320px, which is about 400% zoom of 1280.

## 8. WebKit exceptions

| Observation | Classification | Evidence |
|---|---|---|
| A mouse click on a filter leaves focus on `<main>`, not the button | **Platform behaviour**, not a regression | On **base main**, a click on the existing "Open all six answers" button gives `MAIN` in WebKit too, and `BUTTON` in Chrome and Firefox. WebKit focuses the nearest focusable ancestor (`main[tabindex=-1]`) on mouse press, as Safari does. The keyboard path keeps focus on the button in WebKit |
| Tab after the last option goes to `BODY` | **Platform behaviour** | WebKit's default Tab skips links, and every element after the filter is a link, so focus wraps. Recorded in earlier reviews |

The producer's four WebKit "failures" were therefore a **harness assumption**, not a defect. No programmatic focus was added.

## 9. Responsive and Light/Dark

Chrome renders of the Sources head were checked at 320 light, 390 dark, 768 light and 1280 dark, with the focus ring shown, plus the mode switch at 390:
- The filter is visibly quieter than the mode switch (regular weight, smaller, muted), so they don't compete.
- The accent underlines are legible in both themes.
- Spacing to the first group heading is consistent.

**Phone height:** 3 rows (130px) at 390, and 4 rows (173px) at 320.
- **Recommendation, not a defect:** this is the minimum with seven visible labels at a 44px height, since reducing the gap does not remove a row at 320.
- The block sits at the foot of the page, so no change is recommended. If it is reconsidered after launch, the smallest viable option is a native `<select>` below about 24rem. Shortened labels are not recommended, because the registered names should stay intact.

## 10. Corpus invariants

**Checked independently in Chrome**, with base main and head served side by side, on all 28 question pages:
- Every bibliography entry's `outerHTML`, which covers number, ID, `data-source`, citation, locator, note and registered links.
- Every marker `id>href` pair, every backlink `href` and every external URL in Sources: **byte-identical to base**.
- 168 groups, each with `data-worldview` equal to its answer's worldview (via `data-ns`) and a heading equal to the answer's name.
- 2,464 entries, 2,838 markers and 2,838 backlinks: all resolve, and every backlink targets a citation marker.
- 196 options, equal to All plus the groups in order.
- 0 duplicate IDs.

**Every option on every page (196 selections):** exactly the intended group, one pressed option, entry markup and `value`s unchanged, and no URL change.

**Built output:** the producer's normalised dist diff was re-run after the fix: 96/96 pages identical.

**Content diff:** `src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` show an empty diff against base.

## 11. Validation (after the fix)

| Check | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (the existing unused `thinkerById` in `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `audit-inventory` | 2,838 citations; 0 unledgered ESV; 0 orphan rows. Its line-ending-only rewrite of `research/final-audit/data/*` was reverted |
| `check-built-links` | 96 pages, 168 answers, 0 missing, **11,713 links**, 0 broken, 0 duplicate IDs, 0 bad theme switch |

UI-4A (previews, theme switch) and UI-4B (normalised pages identical) show no regression.

**Suite totals (`review.mjs`):**
- **Chrome 99/99.**
- **Firefox 91/91.** Its 4 direct-load checks were re-run after correcting the engine-specific history-length assumption, in a modes suite of 39/39.
- **WebKit 88/91.** The 3 misses are the platform Tab behaviour in §8.

## 12. Findings and fixes

| ID | Severity | Finding | Fix |
|---|---|---|---|
| M1 | MINOR | `select(value)` hid every group when no group's `data-worldview` equalled the option, so mismatched metadata would fail closed: pressing a worldview showed no sources at all. This cannot happen in the current build (§10 proves options = groups), but the brief requires malformed metadata to fail safe. | `select()` falls back to All when no group matches. The regression test (group ID renamed to `islam-x`, press Islam) now shows six groups with All pressed. |

**Review SHAs:** fix and record `e6aea1b` on top of `7593c74`; this SHA line is in the following commit.

## 13. Residual limitations

These are unchanged from the production record unless noted:
- The filter is not kept in the URL or across a reload.
- Find-in-page skips filtered-out groups. A later option is `hidden="until-found"` with `beforematch` selecting the group, as the answer panels already do. Out of scope here.
- Compare and Case print all six groups.
- Following a link into a hidden group switches the filter rather than restoring All.
- **Not tested:** real Safari, a real screen reader (NVDA, JAWS or VoiceOver), and touch hardware.
- **Not repeated:** the Compare and Case combination matrices, since no node-moving code changed.
- **Engine coverage:** the corpus and failure-injection suites ran in Chrome only. They are engine-neutral DOM logic.

## 14. Recommendation

**MERGE.** The ownership separation is complete, and every route to a hidden source reveals the exact entry in every engine tested. Backlinks and modes behave as specified, the bibliography is byte-identical to base, and the one defect found (M1) is fixed and retested. The user merges.
