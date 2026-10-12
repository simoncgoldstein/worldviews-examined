# UI-1 — Research library foundation and progressive Explore mode

**Branch:** `ui1-research-library-explore`
**Starting main:** `01438f317ea70fed571779a87b86ae36d6557149` (C4 merged, PR #26)
**Date:** 2026-10-12
**Specification:** `docs/DESIGN-SPEC-V1.md` (locked decisions followed; provisional values recorded below)
**Scope:** visual foundation, homepage, questions index, six-thesis overview, progressive Explore reading. Compare (UI-2), Christian Case (UI-3) and the research interface (UI-4) are not started.

No scholarly content was changed. `src/content/**` (168 answers, registries), the ESV quotation ledger and every citation id/locator are byte-identical to the starting main (verified with `git diff origin/main -- src/content docs/ESV-QUOTATION-LEDGER.md`, which is empty).

## 1. Starting point

`git fetch` confirmed `origin/main` at `01438f3`. The branch was cut from it with a clean working tree. The baseline build reproduced the C4 numbers: 96 pages, 10,164 links, 0 broken links, 0 duplicate IDs, 168 answers and 2,838 citations.

## 2. Design system

The site keeps the existing warm-paper and ink foundation. It adds a sans-serif interface layer, a restrained navy chrome and six subdued worldview accents:

- **Serif (Source Serif 4)** for everything that is read: prose, theses, question titles and editorial headings.
- **Sans (Inter)** for everything that is operated: navigation, controls, kickers, breadcrumbs, metadata, source numbers and citation markers.
- **Surfaces:** paper page; slightly lighter surface for cards and the header and footer; 1px hairline rules; a 3px navy rule at the top of the header. There are no shadows, gradients or glass effects.
- **Shape:** 4px radius on interactive surfaces only (thesis cards, question cards, buttons, domain chips). This is smaller than the spec's optional 8–12px. On real content, 8px made the cards read as dashboard tiles; 4px keeps the printed-reference character. The value is provisional and is a single token (`--radius-sm`).
- **Symbols:** CSS-drawn chevrons for disclosure state. The existing editorial marks (`§`, `◇`, `↩`, `↗`, `→`, `←`) are kept, used sparingly, and hidden from assistive technology where they are decorative. There are no icons, emoji or decorative religious imagery.

All tokens live in `src/styles/tokens.css`. The styles are split by concern:

| File | Contents |
|---|---|
| `global.css` | Base, fonts, print |
| `components.css` | Shared primitives, header and footer, lists, citations, sources, thinker roles |
| `home.css` | Homepage |
| `catalog.css` | Questions index |
| `explore.css` | Question page |

## 3. Typography and font loading

| Element | Implemented |
|---|---|
| Reading prose | 17px (phones) → 18px (desktop) via `clamp()`, line-height 1.62 |
| Measure | `--measure: 64ch`. Measured on real answer paragraphs at 18px: 62–69 characters per line, mean ≈ 65 |
| Thesis (cards) | 17–18px, line-height 1.5, ink, roman (not italic) |
| Thesis (open answer) | 19–21px, weight 500 |
| Page heading | 30px phones → 46px desktop; homepage title up to 60px |
| Answer heading (worldview name) | 22–28px serif, with a small accent square |
| Section headings (`The view`, …) | 19–21px serif, 600 |
| UI labels and controls | Inter 14–15px, weight 500–600 |
| Kickers (tracked capitals) | Inter 13px, 600, 0.09em tracking, short labels only |
| Source list | 15px serif; numbers in Inter 14px |

**Licences:** Source Serif 4 and Inter are both SIL Open Font License 1.1.

**Delivery:** both fonts are bundled locally from `@fontsource-variable/source-serif-4@5.3.0` and `@fontsource-variable/inter@5.3.0`, pinned exactly. Versions published in July 2026 were chosen over the release published the day before this work. There are no third-party font requests at runtime.

**Files:**

- The weight-axis (`wght`) variable files are used, not the optical-size (`opsz`) files. The `opsz` files are 2.4× larger (latin: 122 KB versus 51 KB) for a refinement only visible at display sizes.
- Faces: serif roman and italic, sans roman. The italic is needed for cited works and quotations; Inter italic is not used.
- Every subset is declared with `unicode-range`, so a page downloads only what its text needs: in practice Latin, plus Latin Extended on pages with transliterations.

**Preload and fallback:**

- The two Latin roman files are preloaded from `BaseLayout.astro` through `?url` imports. Vite emits the same hashed file the CSS references; verified in `dist/`.
- `font-display: swap`. System fallbacks are retained: Iowan Old Style, Palatino, Georgia for the serif; system-ui, Segoe UI, Arial for the sans.

**Layout stability:** cumulative layout shift was measured in headless Chrome with a cold profile on the homepage, the questions index, a question page and a deep-linked question page, at 390px and 1280px. All runs measured CLS 0.

**Glyph coverage:** checked against every non-ASCII character in the corpus with fontTools.

- Every transliteration diacritic used in the answers is present in Source Serif 4: Sanskrit, Pāli, Arabic (ʿ ʾ ḥ ṣ ḍ ṭ ẓ), Japanese and Korean romanizations.
- Two exceptions fall back to the system serif:
  - `ṁ` (U+1E41, 2 occurrences);
  - the editorial arrows and marks (`→ ← ↩ ↗ ◇`) and subscript `₂`, which are not in the font's published subsets.
- CJK characters (1–2 per answer, in Buddhist source notes) fall back to system CJK fonts, as before.

## 4. Colour tokens

Light theme (spec trial values, adopted unchanged):

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | #FAF8F3 | page |
| `--color-surface` | #FDFCF8 | cards, header, footer |
| `--color-surface-alt` | #F2EEE3 | subtle surface |
| `--color-text` | #1C1F23 | ink (16.1:1 on surface) |
| `--color-text-muted` | #545B64 | secondary (6.7:1) |
| `--color-rule` | #D8D2C3 | hairlines |
| `--color-rule-strong` | #8C8778 | section rules |
| `--color-accent` | #2C3E55 | interface navy (10.6:1) |
| `--color-link` | #1F4A73 | links (8.9:1) |
| `--color-focus` | #A84E08 | focus ring |

Worldview accents, with contrast against the surface in the light theme and against the dark surface #1A1E23 in the dark theme:

| Worldview | Light | Contrast | Dark | Contrast |
|---|---|---|---|---|
| Reformed Christianity | #334D6E | 8.4:1 | #93AED3 | 7.4:1 |
| Naturalistic atheism | #4D6774 | 5.8:1 | #9DB5C2 | 7.8:1 |
| Rabbinic Judaism | #59633B | 6.3:1 | #B4BF86 | 8.6:1 |
| Classical Islam | #376B62 | 5.9:1 | #86C2B5 | 8.3:1 |
| Hindu traditions | #935F42 | 5.2:1 | #DDA27F | 7.6:1 |
| Buddhist traditions | #765B77 | 5.8:1 | #C6A3C8 | 7.6:1 |

All accents pass WCAG AA for normal text in both themes, so the accent-coloured worldview names on the thesis cards are legible text, not decoration.

Dark theme: page #14171A, surface #1A1E23, ink #E7E3DA (13.1:1), muted #A9AEB5 (7.5:1), link #93BCE3, rules #343A42 and #646B75. It follows the operating-system preference (`prefers-color-scheme`); there is no manual toggle in UI-1.

**How accents are used:** colour orients the reader and never evaluates. Accents appear only as:

- a 3px top border on each thesis card;
- the card's worldview-name label;
- a small square before each answer heading;
- a 2px rule down the left of an open answer;
- a 1px card border while that answer is open.

The worldview is always named in words beside its colour. The mapping lives in CSS (`[data-worldview='…'] { --wv: … }`), keyed to the stable worldview id; an unknown id falls back to navy.

## 5. Overview grid (reading level 1, At a glance)

Implemented in `src/components/ThesisOverview.astro`. The question page shows six cards in worldview order. Each card holds the worldview name (Inter capitals in the worldview accent), a small "Read" cue, and the reviewed `lede`. Nothing else appears: no scope strings, thinker lists or body prose.

- **Layout:**
  - Below 40rem: one column.
  - 40–64rem: 2 × 3.
  - 64rem and wider: 3 × 2.
  - Never six narrow columns. Cards in a row share the row's height.
- **Interaction:** the worldview name is a real link to `#<worldviewId>`, with an accessible name such as "Naturalistic atheism: read the full answer". A stretched pseudo-element makes the whole card the hit area, and the focus ring is drawn around the whole card.
- **Open state:** with JavaScript, the card of an open answer gains `data-open`. Its border takes the accent and its cue reads "Open below" (text, not colour alone).
- **Phones:**
  - At 390px the six cards run from about 165 to 245px each.
  - The sixth card ends about 1.8–1.9 viewport heights into the page, as one continuous, uncluttered list.
  - The cue sits on the name row, so no line is spent on a call to action.

## 6. Progressive disclosure architecture

Two coordinated regions:

1. **Overview** (`#overview`): the six thesis cards.
2. **Reading region**: one full-width answer panel per worldview (`src/components/AnswerPanel.astro`), in worldview order, with the prose held to the reading measure.

Each panel maps the four levels onto the existing MDX sections. The section names are the real ones from the MDX; nothing is renamed or retitled.

| Level | Presentation | Content (unchanged MDX) |
|---|---|---|
| 1 At a glance | Overview card | `lede` |
| 2 Understand | Visible as soon as the answer is open | Thesis (`lede`) and scope, then *The view* / *The Christian view* and *What this explains well* |
| 3 Examine | One native `<details>`, summary "Examine — Christian response and Pressure questions" (or "Strongest objection and Christian reply") | *Christian response* and *Pressure questions*, or *Strongest objection* and *Christian reply*, each with its own `h3` and id |
| 4 Study | Native `<details>`, summary "Study — Deep dive"; then the footer | *Deep dive*; representative thinkers; links to the answer's sources, its worldview page, and back to the overview |

**Grouping:** the Examine group is created by the existing remark plugin (`src/lib/remark-answer-sections.mjs`, new `groupExamineLevel`). It wraps the two analytical `AnswerSection` nodes in an `AnswerLevel` component. This is presentation only:

- section titles, order, heading levels and ids are unchanged;
- no prose is truncated, summarized or duplicated other than the reviewed `lede`, which the content model defines as the thesis shown under the worldview name.

**Interaction count:**

- Card → full positive explanation (level 2): one interaction.
- The Christian critique (level 3): two interactions, as the spec requires.

**Controls:**

- **Answer heading:** with JavaScript it becomes a full-width disclosure button (`aria-expanded`, `aria-controls`), following the WAI-ARIA disclosure pattern of a button inside the `h2`. While an answer is open its heading is sticky, so readers always know whose text they are in and can close it from anywhere. Page anchors leave room for it (`scroll-padding-top`).
- **Page toolbar:** "Open all six answers" and "Close all answers". Scope: whole answers only; it does not open their inner levels.
- **Per-answer toolbar:** "Expand all sections" and "Collapse all sections". Scope: that answer's Examine and Deep dive only. The accessible names state the worldview.
- Opening one answer never opens the others. The Deep dive always starts collapsed.

## 7. JavaScript and no-JavaScript behaviour

**Size:** about 3 KB of framework-free TypeScript. `src/scripts/reveal-hash.ts` imports `src/scripts/answer-panels.ts`, and Astro inlines the module into each page, so there is no extra request. There is no framework, island or state library, and no new runtime dependency besides the two font packages.

**With JavaScript:**

- Answers start closed, except an answer that contains the URL fragment target.
- A closed panel is `hidden="until-found"`, so Chrome's find-in-page can still reach and open it; `beforematch` keeps the button state in sync. Browsers without `until-found` treat it as `hidden`.
- **No flash of open answers:** an inline script in `<head>` adds a `js` class, and CSS keeps panels collapsed before the module runs (except a `:target` / `:has(:target)` answer).
- If the module never runs, the inline script removes the class after 4 seconds, so every answer becomes readable.
- On `beforeprint` every answer and level is opened, and the reader's state is restored on `afterprint`.

**Without JavaScript (verified with script execution disabled):**

- All six answers render open, with no dead controls: the toolbars stay `hidden` and no toggle buttons exist.
- The Examine and Deep dive levels are native `<details>` that open with a click or the keyboard.
- Overview cards jump to their answers, and a section fragment such as `#buddhism-what-is-man-pressure-questions` lands on its target.

**Print:**

- Print CSS hides the site chrome and controls, removes the sticky heading and accent bars, and forces closed panels and `<details>` content visible (`::details-content`, plus the older `details:not([open]) > *` rule).
- Verified in headless Chrome under print media, with and without JavaScript: all 6 panels, all 12 inner level bodies and the Sources section render.

## 8. Citation and link preservation

The following are unchanged:

- citation numbering (page-level, `AnswerEntry.offset`);
- `Cite` markers and their ids (`<ns>-cite-<n>-<occurrence>`);
- source entry ids (`<ns>-src-<n>`) and every `↩` backlink;
- section ids (`<ns>-<section-slug>`) and namespaced Deep dive subheading ids;
- the answer heading id (`<ns>-heading`), which the link checker uses to confirm every answer renders;
- worldview anchors (`#christianity`, `#naturalism`, …) on each answer's `<article>`, so existing links from worldview pages and `QuestionLink` keep working.

New ids are `<ns>-panel`, `<ns>-examine` (on the Examine summary), `overview`, `overview-heading`, `reading-heading` and `related-heading`. None collide, as the link checker confirms.

**Fragment handling:** `reveal-hash.ts` remains the only fragment handler. It now:

1. opens the target's answer panel;
2. opens every closed ancestor `<details>` and the target itself when it is a `<details>` or its summary;
3. runs on initial load, on `hashchange` (which covers back/forward) and on same-page fragment-link clicks, so a link to the current fragment can reopen something the reader has since closed;
4. scrolls instantly, never with an animation.

Tested in Chrome:

- A Sources `↩` backlink into a closed Deep dive of a closed answer (`#buddhism-great-and-terrible-cite-18-1`) opened both and landed on the highlighted marker.
- A fresh load of `#christianity-what-is-man-strongest-objection` opened the answer and its Examine level.
- Back returned to `#islam` and reopened it.

## 9. Mobile layout decisions

- One-column cards below 40rem, with tighter card padding. The phone header nav uses smaller gaps, fits on one row at 390px and wraps cleanly at 360px and below.
- At 24rem (384px) and below, the answer heading drops to 19–21px and the "Read"/"Close" cue text is visually hidden, leaving the chevron. Assistive technology reads `aria-expanded` either way. This keeps the sticky heading on one line at 320px.
- The open answer's accent rule and padding shrink to 16px on phones.
- Every control and link-list target is at least 44px tall. Citation markers keep their enlarged invisible hit area.
- **Overflow:** checked by script at 320, 390, 768, 1280 and 1600px on 12 pages (home, questions index, four question pages, worldviews index and one worldview page, thinkers index and one thinker page, sources, method). No element extended past the viewport, and document width equalled viewport width in all 60 runs.
- **Zoom:** 200% browser zoom of a 1280px window is a 640 CSS-pixel layout, which falls between the verified 390px and 768px cases.

## 10. Accessibility

- **Headings:** `h1` question; `h2` "Six answers at a glance", "Full answers", each worldview, "Sources", "Related questions"; `h3` sections; `h4` Deep dive subheadings. Card names are links, not headings, so headings are not duplicated.
- **Native controls:** `<a>`, `<button>` and `<details>`/`<summary>`. Disclosure buttons expose `aria-expanded` and `aria-controls`.
- **Keyboard** (tested with real key events in headless Chrome):
  - Tab reaches each card. Enter opens the answer, and the next Tab lands on that answer's toggle button (`aria-expanded="true"`), then its section controls and citations.
  - Enter and Space toggle the answer button. Summaries are native.
- **Focus:** a visible 3px focus ring in both themes. Card focus outlines the whole card.
- **Motion:** no animations or transitions; `prefers-reduced-motion` is respected globally.
- **Colour:** no function depends on colour or hover. State is shown in words ("Read", "Close", "Open below") and by chevron direction; worldviews are always named.
- **Contrast:** text and accent contrast is recorded in §4.

## 11. Visual inspection

**Methods:**

- Interactive Chrome through the Claude-in-Chrome extension (dark theme, 1280px window): homepage, the `great-and-terrible` question, card → answer reveal, Examine expansion, a backlink into a closed Deep dive, back navigation, and a deep link on `what-is-man`.
- Headless Chrome through a CDP script, for exact viewports, light/dark emulation, JavaScript disabled, print media and keyboard events. The extension window could not be resized below its maximized width and later stopped returning screenshots, so narrow viewports were captured headless.

**Pages:** homepage; questions index; `why-is-man-great-and-terrible` (featured); `what-is-man`; `what-happens-after-death` (long Jewish eschatology Deep dive); `what-ultimately-exists` (naturalism Deep dive with many citations); a worldview page; a thinker page; sources.

**States:** collapsed overview; one worldview expanded; Examine expanded; Deep dive expanded; a citation fragment target; no-JS; print.

Screenshots are in `docs/ui/screenshots/ui1/`:

| File | Shows |
|---|---|
| `01-home-1280-light.png` | Full homepage, light |
| `02-questions-1280-light.png` | Questions index, light |
| `03-question-overview-1280-light.png` | 3 × 2 overview, light |
| `04-question-overview-1280-dark.png` | Overview, dark |
| `05-answer-open-1280-light.png` | Classical Islam answer open (level 2) |
| `06-deep-dive-768-dark.png` | Rabbinic Judaism *After death* Deep dive, tablet, dark |
| `07-question-overview-390-light.png` | Phone overview and reading region |
| `08-examine-320-light.png` | Strongest objection opened by fragment, 320px |
| `09-citation-target-390-dark.png` | Citation fragment target, phone, dark |
| `10-no-js-390-light.png` | JavaScript disabled, phone |

**Fixed during QA:**

- double rules under the homepage hero and above Sources;
- a homepage selection that dropped the sixth domain (now one question per domain);
- a missing space in "About …→";
- the pre-existing "all 6worldviews" spacing bug on the questions index;
- stacked rules before Sources;
- the phone nav orphaning "Sources";
- the 320px sticky heading wrapping;
- a heading-box mismatch that could shift layout when the script enhanced it.

## 12. Validation

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing unused variable in `scripts/audit-inventory.mjs`) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, unledgered 0 (1 known non-ESV excluded), orphan ledger rows 0; generated audit data unchanged |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 96 pages, 168/168 answers rendered, 10,735 links, 0 broken, 0 outside base, 0 duplicate IDs |

**Link count:** 10,164 → 10,735 (+571), with the same 96 pages. Measured by building `main` in a temporary worktree and diffing per page type:

- **+192:** two font `<link rel="preload">` hrefs on each of the 96 pages.
- **Question pages, +364 beyond their preloads:**
  - +504 from three footer links per answer × 168 answers ("Sources cited in this answer", "About {worldview}", "Back to the six answers");
  - +56 from two breadcrumb links × 28;
  - −196 from the removed seven-item worldview jump list × 28 (the overview cards replace it, with the same six `#worldview` targets, as does the existing domain link).
- **Homepage, +15 beyond its preloads:** question, domain, worldview and reference gateways.
- External links are unchanged at 2,725.

## 13. Known limitations

- **Browsers:** Chrome was the only browser exercised. Firefox and Safari were not available in this environment. `hidden="until-found"` find-in-page and `::details-content` print behaviour depend on browser support, and the fallbacks are described in §7. No screen reader was available, so assistive-technology output was checked through the DOM (roles, names, `aria-expanded`) rather than listened to.
- **Citation markers:** a marker can wrap to the start of a line after punctuation, and a Sources entry's `↩` backlinks can wrap onto their own line. Both behaviours predate UI-1 and belong with the UI-4 citation redesign.
- **Glyphs:** `ṁ` and the editorial arrows render in the fallback font (§3).
- **Sticky heading:** it takes about 60px of viewport while an answer is open.
- **URL state:** opening an answer with its button does not change the URL. Only fragments are shareable. Shareable mode and selection state belongs to UI-2.
- **Dark mode:** follows the system preference only; there is no in-page toggle.

## 14. Deferred

- **UI-2 Compare:** any-two selector, aligned sections, mobile pairing, URL state (`?mode=compare&views=…`). The page root carries `data-mode="explore"`, and the overview, panel and level components take an answer entry or worldview list, so they can be reused for two selected worldviews.
- **UI-3 Christian Case:** opponent selection and the source-bound mapping of existing sections. The Examine grouping already isolates the analytical sections it will present.
- **UI-4 Research interface:** citation previews and popovers, navigation enhancements, static search, print refinements.
- **Later:** release QA in Firefox, Safari and screen readers (UI-5); thinker portraits; Study mode.

## Deviations from DESIGN-SPEC-V1

None of the locked decisions changed. Provisional values judged on real content:

- **Radius:** 4px instead of the optional 8–12px (§2).
- **Fonts:** weight-axis files only, with no optical sizing.
- **Measure:** 64ch.
- **Container:** 76rem (1,216px), within the 1,200–1,250px range.
- **Homepage:** a "Six worldviews" strip linking to the worldview pages. It uses existing registry data and helps orientation without competing with the questions-first hierarchy.
- **Mode descriptions:** Compare and Christian Case are described on the homepage as "In preparation", with no controls.
- **Mode naming:** the old mode names ("Question Explorer", "Apologetics Mode") were removed from the homepage, the README and the worldviews index eyebrow to match the locked names.
