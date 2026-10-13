# UI Review Strategy — Proportionate, Representative, Risk-Based

**Status:** Standing instruction for all *future* Worldviews Examined UI production, independent review, and release-QA sessions. Agreed 2026-10-13. This policy is prospective; do not interrupt or retroactively change the independently running UI-3 review (PR #31).

## Principle

**Review intelligently, not exhaustively by default.** Protect all 168 scholarly answers, citation IDs, bibliography anchors, and the three reading modes without unnecessarily running every mode/question/worldview/browser/viewport combination after each narrow change.

Choose tests based on **what changed, what could regress, and the cost of a failure**. Independent review remains genuinely independent; it must not merely rubber-stamp production claims.

Distinguish:

1. **Fast broad automated invariants** across the whole corpus, when applicable.
2. **Targeted functional tests** around changed code paths and known regressions.
3. **A deliberately selected representative browser/visual matrix**, rather than a Cartesian product.
4. **Escalation to wider coverage** when risk or evidence warrants it.
5. **One comprehensive end-to-end release-QA pass** after the integrated site is feature-complete.

## Default test tiers

| Change type | Required review depth |
|---|---|
| Documentation, copy or isolated CSS | Inspect the diff, inspect 2–4 representative real pages/states and affected viewports/themes, run relevant build/static checks. Cross-engine smoke test only for changed CSS features or known engine differences. |
| Small isolated interaction (theme switch, footer disclosure, citation popover) | Test all states of that control, pointer and keyboard, no-JS/failure where relevant; test representative pages, phones/desktops, light/dark; limited Chrome/Firefox/WebKit smoke tests focused on browser-sensitive behavior. |
| Search, filter, sort, pagination, source anchoring | Exhaustively test cheap data invariants (all registered sources, unique source IDs, all tradition tags, deterministic counts/sort); browser-test representative filter/search/page/deep-link edge cases. |
| Major shared controller / DOM movement / fragment / history change | Broader automation across corpus and pair/opponent combinations is appropriate **for the changed invariant**; browser interaction need only sample representative cases per engine plus known regressions, expanding if an issue appears. |
| Final release QA | Comprehensive integrated testing including all reading modes, anchors, content validation, accessibility, real devices and cross-browser coverage proportionate to launch risk. |

Do **not** routinely require all 28 questions × all 30 ordered Compare pairs × three engines, or 140 Christian Case combinations × three engines, in every later UI review. Use full combinatorial browser testing again only when the changed architecture makes it informative or a detected regression suggests broad impact.

## How to choose a representative sample

Select cases **before testing** and explain the reason for each. Cover differences likely to expose defects, rather than random repetition.

Baseline reading-mode cases:

- **Christianity ↔ Naturalism, What is man?**: Christian/non-Christian, lengthy consciousness content and deeply nested references.
- **Christianity ↔ Islam, Revelation**: religious alternative, longer theological evidence and quotations.
- **Judaism ↔ Islam, Revelation**: two non-Christian Abrahamic traditions; proves Compare does not privilege Christianity.
- **Hindu traditions ↔ Buddhist traditions, Ultimate reality or Evil**: two non-Western traditions and different vocabulary/section lengths.
- **Naturalism ↔ Buddhism, Knowledge or Evil**: cross-category non-Christian comparison.

For Christian Case specifically, sample **all five opponent categories** over a small set of different questions: e.g. Naturalism/What is man?, Judaism/Revelation, Islam/Revelation, Hinduism/Ultimate reality, Buddhism/Evil. This covers the semantic branches without loading all 140 cases manually in each engine.

Adapt this list when the feature's risk warrants different questions. Also include, as applicable:

- a **very long Deep Dive**, a **short answer**, multiple citation/backlink targets, nested disclosures;
- both Christian and non-Christian analytical structures;
- a **multi-tag source**, uncommon Unicode/diacritics, a long bibliographic title;
- **empty search results**, filter changes that shrink page count, a direct link to a hidden/paginated source;
- narrow phone, tablet, desktop and zoom; light and dark theme;
- no-JavaScript, blocked script, malformed URL/hash and focus restoration.

The sample is **stratified coverage**, not a fixed quota or a claim that other cases passed. Pick 4–8 high-value scenarios where appropriate, plus specialized edge cases for the feature.

## Browser strategy

- **Primary functional run:** Chrome or Chromium on representative pages and changed interactions.
- **Cross-engine smoke:** Firefox and WebKit on the most relevant high-risk cases, particularly native controls, sticky positioning, disclosures, focus, print and history. No need to replay a large matrix for an unrelated stylesheet.
- **Known regression retest:** Always revisit any prior browser-specific defect touching the changed path.
- **Real Safari/screen reader:** Test when available, especially at final release; Windows Playwright WebKit is not real Safari. Accessibility tree checks do not equal actual screen-reader testing.
- On low-memory machines, run browser engines **serially**, reuse a concise test set, close contexts/processes, and avoid collecting excessive screenshots.
- Record exactly which browsers and tests ran. **Never describe untested combinations as passed.**

## Regression boundaries

Always preserve the structural guarantees relevant to the change:

- The 168 MDX answers remain the **single source of truth**; no new substantive prose in interface code.
- No lost or copied answer sections; no duplicate citation/source/section IDs.
- Citation → reference → backlink must reach the exact original claim, even under closed disclosures or active modes/filters.
- Explore, Compare and Christian Case must remain navigable with honest URLs and meaningful Back/Forward behavior.
- Core research remains readable if JavaScript is disabled or enhancement fails.
- Keyboard access and focus recovery remain usable.
- Print reveals the relevant full scholarly content, not only screen-open disclosures.

**Run** repository validation/build/link checks after implementation and fixes. These are generally cheaper than an exhaustive browser matrix and should not be dropped merely because representative browser testing is used.

Do not make UI-only prompts perform an independent theological re-audit of all 168 answers. Confirm immutability against baseline; escalate only when changed prose or a demonstrated content defect requires scholarly review.

## Escalation triggers

Increase coverage (potentially to a full automatic matrix and multiple browser engines) when:

1. Shared state management, DOM node movement/restoration, ID generation, citation numbering, URL/history routing, source visibility coordination, or MDX transformation changes.
2. An important or blocking regression is discovered.
3. A sample reveals a systemic issue likely to affect other entries or traditions.
4. A browser-specific incompatibility affects a common reading path.
5. A schema, transformation, or dependency change affects many pages.
6. Release readiness, security, or accessibility requires comprehensive verification.

Widen tests **where the failure could propagate** rather than reflexively across unrelated dimensions. For example, if source search pagination fails on multi-tag entries, expand multi-tag source cases and deep-link tests—not 140 unrelated Christian Case journeys.

A previously comprehensive review of unchanged architecture can be relied on. State the prior evidence and test the interface boundaries affected by new work instead of repeating the prior full suite.

## Independent review deliverable

Each future production and independent-review prompt should explicitly point to this document.

Every independent-review report should record a brief **risk-based test plan**:

1. What changed, and the most consequential potential regressions.
2. Which automated invariants were checked across the corpus.
3. Which representative scenarios were chosen and **why**.
4. Which browsers/viewports/modes and accessibility methods were actually exercised.
5. Known high-risk cases intentionally left untested, and why the residual risk is acceptable or needs further testing.
6. Findings, fixes and a merge/hold recommendation.

No requirement to produce a huge exhaustive test table for a small change. **Do not weaken tests merely to obtain a merge recommendation**, and do not hide actual coverage limits.

The aim is a **faster review process with strong defect detection**, not lower quality thresholds.
