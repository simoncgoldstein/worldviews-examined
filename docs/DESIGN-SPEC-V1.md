# Worldviews Examined — V1 Product and Visual Design Specification

**Status:** Approved product direction; specific visual values are provisional until a real prototype.
**Date:** 2026-10-12
**Identity:** Modern Digital Research Library
**Implementation timing:** After C3 and C4 scholarly-content remediation. This document does not authorize content edits or immediate UI implementation.

## 1. Product principles — locked

Worldviews Examined is a serious scholarly comparison tool, clearly written from a Westminster-confessional Reformed Christian standpoint. Present each alternative in its strongest recognizable sourced form before the Christian analysis. A visitor should see the main differences within seconds, while deeper argument, source citations and thinker profiles remain readily accessible.

Visual character: **modern digital research library**, roughly 70% modern-library usability and 30% printed-reference elegance. Calm, polished, editorial, accessible; not a quiz app, debate scoreboard, or dashboard.

- **Questions first.** The 28 questions across six domains are the primary navigation.
- **Six positions immediately visible.** The existing reviewed answer ledes form the initial overview.
- **Progressive disclosure.** Readers choose how deeply to read.
- **Three named public modes:** Explore, Compare, Christian Case.
- **One authoritative corpus.** All modes must reuse the same six MDX answers per question (168 total), not maintain separately worded versions.
- **Source transparency.** References can be inspected in place, and full bibliography remains available.
- **Scholarly restraint.** No emojis, worldview winner badges, point systems, numerical truth scores, decorative icon clutter, or gimmicky animations. Sparse purposeful symbols are acceptable.
- **Portraits deferred.** Thinker portraits/sketches are a separate ChatGPT image-generation project AFTER the site is operational; not required to launch.
- **No flip cards in the core UI.** A separate active-recall Study mode may be explored later.

## 2. Navigation and homepage — locked

The homepage should introduce the explicit Reformed vantage succinctly, lead with **Explore the Questions**, provide six domain gateways, show a few genuinely registered foundational questions, then briefly explain the three modes. Method, Worldviews, Thinkers and Sources remain important secondary navigation.

**Amended 2026-10-13 (UI-4B, Issue #34):** the homepage is now three sections: a hero (title, the question and worldview counts, the explicit Reformed standpoint, **Explore Questions** and **The Method**), four registered starting questions with a route to all 28, and the six worldviews as links. The domain gateways live on the Questions index, and the explanation of the three modes lives on the Method page. See `docs/ui/UI4B-EDITORIAL-SIMPLIFICATION.md`.

The existing question URL is the durable core destination. Every question supports all three modes. Do not create different theological prose for different modes.

Remove stale public phrases such as "entries are outlines" or "content is being built in phases" after the final scholarly review.

Avoid making the homepage a marketing landing page or a wall of six essays. Maintain a clear research/library brand.

## 3. Reading modes — locked

### Explore (default)

On question load, display six worldview names and their current <=240-character reviewed theses together, without long bodies expanded.

Desktop initial layout: **3 columns × 2 rows**. Tablet: **2 × 3**. Mobile: **one full-width column** in a concise scan-friendly list. Never force six narrow columns.

Click/tap an individual worldview to reveal more, without hiding the other five by default. Provide section-level controls and Expand all / Collapse all with clear scope. Preserve meaningful open states and direct links.

The current six largely expanded answers in a two-column grid should NOT remain the default experience.

### Compare

Choose **any two** of six worldviews, for the same question. Desktop: comfortable side-by-side columns with corresponding sections aligned where practical, without equal-height padding for uneven texts. Mobile: present matched section pairs in a sensible stacked order; no sideways-scrolling table.

Allow changing either worldview and, where useful, swapping sides. Each section can be expanded independently and both can be expanded together. No ranking/score.

### Christian Case

Public label **Christian Case** (not Apologetics); compare Christianity with one of five alternatives.

Present the selected non-Christian position, what it explains well, the existing Christian critique, its strongest relevant responses or pressure questions, and deeper sourced material. Distinguish actual philosophical challenges, contested history, and disagreements over revealed premises. Do not claim a demonstrated contradiction unless the text demonstrates one.

The Christian answer's existing Strongest objection / Christian reply can support this mode where relevant, but do not misattribute it as the answer to some other non-Christian argument.

**The UI must not silently invent new rebuttal text.** Any new scholarly prose requires normal source-checking and independent review. Present existing source-backed MDX intelligently.

The Christian critique should be reachable within two meaningful interactions from the question overview.

## 4. Progressive disclosure — locked

| Layer | Initial purpose | Existing content |
|---|---|---|
| **1. At a glance** | Compare six basic claims | Existing frontmatter ledes |
| **2. Understand** | See the strongest positive account and what it explains | The view / The Christian view; What this explains well |
| **3. Examine** | Study arguments, objections, Christian response | Christian response; Pressure questions; Strongest objection; Christian reply |
| **4. Study** | Investigate nuances, schools, source evidence | Deep Dive, thinker links and source registry |

These are visibility levels, not four separately authored content datasets. Do not mechanically truncate paragraphs, omit qualifications, or require readers to open earlier layers to reach a shared citation link.

Use semantic disclosures, clear heading levels and visible control states. Links to sections and citations should open the necessary closed containers, including on initial page load. Preserve the existing reveal-on-hash behavior and graceful no-JavaScript access.

## 5. URL state and citations — locked

- Retain existing canonical question, worldview, thinker, source and citation URLs.
- Shareable URLs preserve reading mode and selected comparison viewpoints.
- Christian Case links preserve the selected opponent.
- Section anchors should be shareable; do not break existing citation IDs or backlinks.
- An illustrative URL is: /questions/what-is-man/?mode=compare&views=christianity,buddhism (real registered slugs take precedence).
- Back/forward navigation should restore meaningful mode/selection state.

Citation previews on hover/focus where practical; on click or tap, show an accessible source preview with author, title, exact locator, and source link. The full Sources section and real anchor/backlink navigation remain available. Do not replace registered source metadata with generated source summaries. Preview controls must have keyboard support, focus handling and a reliable dismissal path.

## 6. Visual system — direction locked, values provisional

The current site already has a good warm-paper/ink editorial foundation. Keep that, but introduce subdued accents and clearer interactive surfaces.

**Neutral color trial:**

| Token | Starting hex | Function |
|---|---|---|
| Page | #FAF8F3 | Warm paper |
| Surface | #FDFCF8 | Reader cards |
| Subtle surface | #F2EEE3 | Expanded sections |
| Text | #1C1F23 | Main ink |
| Muted | #545B64 | Secondary labels |
| Hairline | #D8D2C3 | Rules |
| Core accent | #2C3E55 | Global UI |

**Worldview accent trial:**

| Christianity | Naturalism | Judaism | Islam | Hindu traditions | Buddhist traditions |
|---|---|---|---|---|---|
| #334D6E | #4D6774 | #59633B | #376B62 | #935F42 | #765B77 |
| Deep navy | Slate blue | Olive | Deep teal | Terracotta | Muted plum |

Apply worldview accents as fine borders, tiny label marks, and selected-state cues—not saturated panels. Color is NEVER a truth/ranking judgment. Viewpoint identity must always be stated in words. Validate contrast in light and dark themes.

**Typography trial:**
- **Source Serif 4:** reading prose, editorial headlines, thesis ledes.
- **Inter:** buttons, mode tabs, navigation, source controls and metadata.
- Fallbacks: Iowan Old Style, Palatino, Georgia (serif); system-ui, Segoe UI, Arial (sans).
- Compare with the existing font stacks before choosing a webfont delivery strategy. Check license, diacritic/transliteration coverage, load performance and layout stability. Font selection is provisional.

| Element | Initial size / treatment |
|---|---|
| Reading prose | 18px desktop, 17px smaller screens; line height ~1.6–1.68 |
| Thesis | 17–19px; line height ~1.5, clearly distinguished |
| Page heading | 36–48px desktop; ~29–34px phone |
| Section heading | 20–25px, serif, not heavily ornamented |
| UI labels | 14–15px, sans, legible weight |
| Source details | 13–14px minimum where practical, always zoomable |
| Long-form text measure | ~60–68 characters |

Use tracked capitals only for short labels/metadata, not body copy. Keep italics to quotations, cited works, and occasional emphasis rather than setting every thesis in ornate italics.

**Layout trial:**
- Container up to about 1200–1250px; generous gutters.
- Reading measure approximately 64ch.
- Spacing based on 4/8px increments; cards ~16–24px padding; major groups ~24–32px apart.
- Thin dividers, modest surface distinction, minimal/no shadows.
- Optional subtle corner radii 8–12px for interactive cards, not large floating dashboard tiles.
- Readable mobile stacking and at 200% zoom.
- Retain light theme and system dark-mode support; refine after initial prototype.
- Minimal monochrome chevrons, search and source/external-link symbols when functionally useful.
- No emojis, gradients, parallax, carousels, glowing effects, decorative religious icons, or visual truth-ranking.

## 7. Thinker portraits — explicitly after operational V1

Preserve clean thinker cards and profiles without portraits at launch. No placeholder silhouettes or image holes.

In a later separate workflow, ChatGPT will generate consistent monochrome pencil/engraving portraits, approximately 3:4 aspect ratio, with light paper-like background and restrained composition.

Where historical portraits exist, use verified likeness references. For figures without known authentic likenesses, identify interpretive artwork honestly rather than presenting fictional images as historical records.

The implementation may prepare a small optional portrait hook if trivial, but must not require images, alter scholarly metadata unnecessarily, or block launch.

## 8. Study mode — deferred

No flipping flashcard interaction in V1. Later consider a simple active-recall Study experience: show question, reveal thesis, reveal explanation, optionally reveal Christian critique and references; all sourced from the same existing content.

## 9. Accessibility and technical safeguards

- Semantic HTML, proper headings, keyboard-complete interaction, visible focus rings and useful focus restoration.
- Native details/summary or equally accessible controls; correct expanded state.
- Touch controls ideally at least 44×44 CSS px; no hover-only functionality.
- WCAG 2.2 AA goal for contrast, zoom, mobile usability and keyboard interaction.
- Respect reduced-motion preferences; transitions are optional, subtle and never necessary for comprehension.
- Compare and Christian Case must be usable on phones.
- Core content remains available if JavaScript is blocked; use progressive enhancement for URL state, controls and citation previews.
- Remain static-first Astro + TypeScript + MDX; no backend, user accounts, mandatory SPA framework or duplicated answer records.
- Print view shows the relevant actual prose and sources, even if parts are collapsed on screen.
- Preserve stable anchors, source references, linked thinkers, and no broken link/duplicate ID guarantees.

## 10. V1 acceptance criteria — locked

A new visitor can:
1. Reach one of the 28 questions promptly from the homepage.
2. See and distinguish all six claims at a glance.
3. Reveal substantial positive explanation with one interaction.
4. Reach the Christian critique within two interactions.
5. Compare any two traditions on desktop or mobile.
6. Open Christian Case against any other worldview.
7. Inspect a citation without losing their place and access its full reference.
8. Share/restore a mode and chosen viewpoint(s) via URL.
9. Navigate the full reading experience with keyboard/assistive technology.
10. Read and print the content with scholarly citations when client JavaScript is unavailable.
11. Encounter no stale research-phase or placeholder notices on completed public pages.

Portraits, Study mode, numerical ranking, accounts, and gamification are NOT launch requirements.

## 11. Implementation sequence — after C4

Small, reviewable PRs, without mixing design code into C3 or C4:

1. **Research-library prototype:** font and palette trials, homepage, six-thesis view, progressive disclosure.
2. **Compare:** any-two selector, synchronized reading, mobile flow, URL state.
3. **Christian Case:** argument-focused presentation, source-bound content mapping.
4. **Research interface:** citation previews, navigation enhancements, links to thinkers/sources, optional static search, print behavior.
5. **Release QA:** accessibility, keyboard, zoom, reduced-motion, dark mode, mobile, SEO, performance, source navigation, GitHub Pages stability.
6. **Post-launch:** ChatGPT-generated thinker sketches in a separate controlled workflow; optional Study mode later.

**No audited answer prose, citation registry semantics, or live site UI should change in this design-only PR.**

## 12. Decision register

**Locked:** Modern Digital Research Library; Explore / Compare / Christian Case; questions-first; six-thesis default; four reading layers; any-two and Christian-vs-one modes; one MDX corpus; accessible source previews and shareable URLs; serious minimal aesthetic; no flip UI; portrait workflow after launch; Astro/static-first.

**Provisional until prototype:** Font pairing/loading, exact accent hex values, dark-mode translations, font scale, spacing, radius, precise breakpoints/control placement, URL query encoding and homepage feature selection.

Locked decisions require explicit discussion to change. Provisional values should be judged visually on real content before finalizing.


## 13. Approved UI refinements — 2026-10-12

These refinements reflect the reviewed UI-1 screenshot and subsequent user decisions. **The interactions described here are approved product requirements; implementation remains in the appropriate later UI PRs.** They supplement, and where specifically noted supersede, earlier provisional suggestions. No change to audited MDX content, quotation ledger, citation IDs, or GitHub Pages publishing follows from this design document alone.

### 13.1 Global theme switch (locked; replaces the proposed three-way Appearance control)

Add **one compact binary Light/Dark switch at the top-right of the site header**, based on the supplied reference image but scaled and simplified for this editorial interface.

- Left position: **sun** (Light); right position: **crescent moon** (Dark). Use two small monochrome pictograms within/around a subtle pill track and a clearly visible movable thumb, not oversized circular icon buttons.
- Initial visual trial: approximately 60–72px wide by 30–36px tall, with a full **44px minimum touch target**; fine border and restrained contrast matching the site's header. The supplied picture establishes the interaction concept, not its literal large size or thick high-contrast decoration.
- **No visible third System option, no large Appearance panel, no labels taking header space, no emoji.** Accessible name and state must still be explicit (e.g., a button labelled "Switch to dark mode" or a switch named "Dark mode" with correct checked state).
- Before any manual choice, use the device's \`prefers-color-scheme\` preference as the initial mode. On user activation, toggle Light ↔ Dark and persist the explicit preference across pages/visits with a small local setting (e.g. localStorage); never claim an explicit user selection while merely following the device.
- Apply the selected mode **before visible first paint** to avoid a light/dark flash; handle unavailable storage safely and fall back to system settings. The separate dark/light token sets should be expressible as theme overrides without duplicate styles or a frontend framework.
- Support keyboard activation, visible focus, readable screen-reader state, reduced motion, high zoom and narrow mobile headers. All controls retain sufficient contrast; a theme is not indicated by icon alone.
- The switch should appear across the entire site, including Explore, Compare, Christian Case, sources and thinker pages. Printing remains on a legible print palette.
- This requirement supersedes the provisional V1 suggestion to leave out a manual theme control. **It does not authorize a new UI-2 feature**: implement as a small independently reviewed UI polish PR or within the later research-interface polish work.
- **Implemented in the UI Polish PR** (2026-10-13): see `docs/ui/UI-POLISH.md` §2.
- **Revised in UI-4A** (2026-10-13): the approved single-icon design. Only the current theme's pictogram is shown, inside the thumb, which slides only when pressed. See `docs/ui/UI4A-CITATION-PREVIEWS.md` §5.

### 13.2 Citation previews (locked, UI-4)

A citation marker should be inspectable **without forcing the reader to scroll to the consolidated bibliography**.

- Click/tap/keyboard activation opens a compact accessible preview with registered author, work/title, **exact cited locator**, applicable translator/edition qualification where material, and a genuine source link if registered.
- Offer a clear path to **View full reference** and, from the source, to navigate back to the exact citing text. Preserve existing numbered citations, unique IDs, full Sources section, fragment navigation, and backwards compatibility.
- An optional hover preview may supplement the click/focus behavior; do not require hover. Escape and explicit dismissal must work, with sensible focus restoration and mobile placement; avoid covering the underlying paragraph or producing nested inaccessible overlays.
- Render the registered bibliographic facts; do not generate summary claims or invented quotations. No unsupported permission assertions.
- If JavaScript fails or is disabled, numbered citations must remain real working links to their existing full references.
- A source anchor opened by a direct URL or backlink must be revealed even if its tradition group is currently filtered out.
- **Implemented in UI-4A** (2026-10-13): previews only; the filters belong to §13.4 and UI-4B. See `docs/ui/UI4A-CITATION-PREVIEWS.md`.

### 13.3 End-of-answer "Further Study" organization (approved direction; scoped UI polish)

After the existing **Examine** and **Study / Deep dive** disclosures, provide a concise, deliberately organized **Further Study** footer:

- **Key thinkers:** names displayed legibly with small subordinate school/role descriptors; avoid an unstructured run-on inline list. When numerous, show a compact set initially and provide "View all" access. Render actual attached thinker metadata, not invented selections or new scholarly descriptions.
- **Sources and references:** show a derived count and a link to that answer's exact numbered sources; also allow browsing the wider Source Library. Do not repeat a large bibliography in the answer footer.
- **Secondary navigation:** "About this worldview" and "Back to all six views" in a visually quieter final row, distinct from research references.
- Optionally use a two-column layout on wide screens, stacked on phones; restrained hairlines and small worldview color mark, not a promotional card cluster.
- The layout must work before thinker portraits exist. Future optional historical portraits should fit without redesign; images remain separate **post-launch** work.
- **Implemented in the UI Polish PR** (2026-10-13): see `docs/ui/UI-POLISH.md` §3. No "View all" control was added: no answer names more than five thinkers, and all fit comfortably.

### 13.4 Question references (approved direction, UI-4)

The question-specific consolidated Sources section retains all existing citation identifiers/backlinks and one numbering sequence. Enhance navigation with:

- **All** plus six named worldview filters, using the established accent mapping but always visible words.
- Collapsible groups as appropriate; an anchor or citation click must reveal a filtered-out or collapsed target reliably.
- **Do not paginate the question-specific citations**; doing so would complicate precise source and backlink anchors.
- Without JavaScript, show the complete source list. Printing should include all references needed for the printed answers.

### 13.5 Global Sources Library (approved direction, UI-4)

The /sources/ page should become a browsable, searchable **research library**, not an endless chronological or tradition-grouped list.

- Search by author, title and relevant registered search text; case-insensitive, accent-friendly where practical.
- Filter by all six traditions and by the **actual registry source types** (do not invent types). A source can have multiple tradition tags; filters must use all of them, while an unfiltered list shows that source **once**.
- Default page size trial: **25 sources per page**, with visible result count, Previous/Next, and accessible page controls. Pagination follows filtering/search, with stable deterministic sorting. Reset or correct the page number after filter changes.
- Display source type, author/title and minimal helpful metadata. Hide long lists of citing answers under an explicit **"Cited in N questions — Show questions"** disclosure; preserve links.
- Existing \`#source-<id>\` deep links must continue to work. A direct source anchor should automatically reveal the correct item despite filters/pagination, or move to a valid visible detail state. Do not break current source-to-question or question-to-source navigation.
- Static Astro output remains the fallback. The bibliography must be usable and accessible with JavaScript blocked; a client-side index of the checked registry is sufficient, with no database or API requirement.

### 13.6 Accent-color refinement (provisional visual trial)

The existing palette is sound, but the dark-mode screenshot suggests the worldview identity could be somewhat clearer. Test, **do not yet adopt blindly**, the following more distinctive light-theme accents:

| Christianity | Naturalism | Judaism | Islam | Hindu traditions | Buddhist traditions |
|---|---|---|---|---|---|
| #315784 | #506A73 | #716028 | #297467 | #99513A | #784F91 |

They all meet the normal-text WCAG AA contrast minimum against the present light source-card surface; new dark equivalents require independent testing.

Try slightly more distinct heading and selected-state color, a very faint tinted worldview header only where it adds orientation, and a thin source/thinker section marker. **Never color long prose blocks, create large saturated panels, encode truth/ranking in color, or compromise content readability.** Retain current colors until the UI visual review approves a change.

**Adopted in the UI Polish PR** (2026-10-13) and confirmed by its independent review (`docs/ui/UI-POLISH-REVIEW.md`): the light values above unchanged, with new dark equivalents `#8DB0E2`, `#A9B9BD`, `#CCB26C`, `#6FC3B0`, `#E8A083`, `#C6A0E0`. Contrast and distinctness results are in `docs/ui/UI-POLISH.md` §4.

### Delivery and regression gates

- The header toggle may be a **small independent polish PR** after UI-1 (rather than enlarging Compare). Source previews, question filters, and the global library belong in **UI-4**. Further Study footer may be an independent small PR when shared components are stable.
- Preserve the UI-1 focus/scroll, slow-load fallback, Deep Dive and citation-fragment fixes. UI-2 must continue to compare any two views from the one authoritative corpus.
- Test 320/390/768/1280px, keyboard navigation, light and dark themes, and citation anchors. Real Safari/screen readers remain explicit release-QA checks rather than assumed successes.
