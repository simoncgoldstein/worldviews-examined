# UI Polish — Theme Switch, Further Study and Worldview Accents

**Branch:** `ui-polish-theme-further-study` · **Starting main:** `5c934761fd27aa2c5aeb5ab5cc862dc10e5d1b2d` · **Date:** 2026-10-13
**Specification:** `docs/DESIGN-SPEC-V1.md` §13.1, §13.3, §13.6 · **Review policy:** `docs/ui/REVIEW-STRATEGY.md`

This is a localized visual and component phase. It adds a header Light/Dark switch, replaces the end of each answer with a **Further study** footer and adopts the trial worldview accents with new dark equivalents. The reading-mode coordinator (`modes.ts`), Compare, Christian Case, URL/history handling, citation numbering, source anchors and all scholarly content are unchanged.

## 1. Scope and decisions

| Area | Decision |
|---|---|
| Identity | Kept the research-library design: same fonts, neutral paper/ink tokens, hairlines and type scale. Only the six accents changed. |
| Theme control | One binary switch: sun on the left, moon on the right, with a moving thumb. There are no labels, no System option and no menu. |
| Theme tokens | Every colour token is now a single `light-dark(light, dark)` pair. The old duplicated `@media (prefers-color-scheme: dark)` token block is gone. |
| Footer | Kept as **one movable DOM unit** (`.answer__footer`, still the last child of `.answer__inner`), so the Compare/Christian Case selectors and `modes.ts` needed no change. |
| “View all thinkers” | **Not added.** The largest answers name five thinkers (`islam/evil`, `islam/ultimate-authority`, `naturalism/what-is-man`), and all five fit comfortably. The design spec says not to add the control in that case. |
| Portraits | No image slot is reserved. A thinker item is a name plus a line of schools, so a small portrait could later sit beside it without redesign. |

## 2. Theme architecture

**Tokens (`src/styles/tokens.css`).**
- Each colour is `--token: light-dark(<light>, <dark>)`. It resolves against the used `color-scheme`.
- `:root { color-scheme: light dark }` follows the device. `:root[data-theme='light'|'dark']` pins it.
- A manual choice therefore always outranks the device preference. No media query can overwrite it, and there is no duplicated component CSS.
- Native controls (Compare and Christian Case `<select>`s, scrollbars, form widgets) follow `color-scheme` automatically. This was verified in Chrome, Firefox and WebKit: a saved Dark choice under a Light device renders the Compare select dark.

**Older engines.** Engines without `light-dark()` (Safari < 17.5, Chrome < 123, Firefox < 120) drop those declarations. An `@supports not (color: light-dark(#000, #fff))` block gives them the light palette and `color-scheme: light`, and the head script does not offer the switch there. This block is the only duplicated colour list: 21 light values.

**First paint (`src/layouts/BaseLayout.astro`).**
- A separate inline `<script>` sits in `<head>`, immediately after the `color-scheme`/`theme-color` metas and before the stylesheet links and the existing reading-mode script.
- It reads one key, `worldviews-theme`, and accepts only `light` or `dark`. Any other value is ignored, and a storage exception is caught.
- With a valid saved choice, it sets `data-theme` on `<html>` and rewrites the `color-scheme` meta (so the UA canvas matches) and both `theme-color` metas.
- It then adds `theme-switchable` to `<html>` and defines a small `window.worldviewsTheme` API (`current`, `choose`, `apply`, `saved`, `media`).
- It does not touch `js`/`mode-pending`, and Explore, Compare and Christian Case initialization is unaffected.
- Tested: in Chrome, Firefox and WebKit, `data-theme` is already set when `<body>` is first inserted. That is before any content can paint, because stylesheets are render-blocking.

**Persistence and behavior.**

| Situation | Behavior | Verified |
|---|---|---|
| No saved choice, device Light / Dark | Follows the device. The switch shows the device state and claims no saved choice; the meta stays `light dark`. | C, F, W |
| Device changes while the page is open, no saved choice | The page and the switch follow it (`matchMedia` change listener). | C, F, W |
| Click under device Dark | Saves and forces Light; persists across reloads and pages. Chrome checked home, a question, Sources and a thinker; Firefox/WebKit checked a question page. | C (4 pages), F, W |
| Click under device Light | Saves and forces Dark, as above. | C, F, W |
| Saved choice, then the device changes | The saved choice wins. | C, F, W |
| Back/forward cache restore after choosing on the next page | `pageshow` re-applies the saved value. | C |
| Another open tab | The `storage` event applies the new choice. | C |
| Invalid stored value (`sepia`) | Ignored; the page follows the device. | C, F, W |
| `localStorage` throws | No errors. The switch still changes the current page; a reload falls back to the device. | C, F, W |
| JavaScript disabled | The switch is never displayed (`display: none` unless `theme-switchable`). The page follows the device through `color-scheme`. | C, F, W |
| Print | `:root, :root[data-theme] { color-scheme: light }`, so print uses the light palette even with a saved Dark choice. | C, F, W |

**Accessibility.**
- The control is a native `<button role="switch">`. Its accessible name is “Dark mode” (visually hidden text), and `aria-checked` is true while the page is dark.
- The pictograms are inline monochrome SVGs, `aria-hidden`.
- Space and Enter toggle it, as for a native button; tested in all three engines.
- The focus ring (3px, `--color-focus`) is drawn on the visible track rather than the larger invisible target.
- The button is at least 44 × 44px around a 64 × 32px track. The current theme's pictogram is drawn in full ink and the other muted, so the state is not shown by position alone.
- The thumb border uses `--color-text-muted`: 5.9:1 against the light track and 6.8:1 against the dark track. The track border against the header is 3.5:1 (light) and 3.1:1 (dark).
- The thumb moves in 160ms; `prefers-reduced-motion` removes the transition (verified). Its position follows the page theme set in `<head>`, not `aria-checked`, so it does not slide across as a dark page loads (independent review M1, `docs/ui/UI-POLISH-REVIEW.md`).
- Forced colours: the track uses Canvas/CanvasText and the thumb Highlight, so its position stays visible (Chrome emulation).

**Header layout.**
- From 768px the site name, navigation and switch share one row, as before: 56px tall at 768 and 1280.
- Below 768px the switch sits beside the site name and the navigation takes the next row. Header height equals the deployed main exactly: 148px at 320 and 104px at 390 (Chrome and WebKit). At 320 the site name is 18px.
- Between 641 and 767px the header has two rows. Main fitted name and navigation on one row there, so this range is about 44px taller.
- No horizontal overflow at any tested width.

## 3. Further study footer

**Structure** (`AnswerPanel.astro`, `ThinkerLinks.astro`, `explore.css`):

```
Further study                       ← small tracked label in the worldview accent, with a tiny mark
  Key thinkers                      Sources and references
    Name (link, serif)                N numbered references to M distinct works
    Schools (small, muted)            View this answer’s references   → #<ns>-sources
    …                                 Browse the Source Library       → /sources/
  ─────────────────────────────────────────────────────
  About <worldview> →   Back to all six answers    ← quiet muted row
```

- The two groups use `grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr))`. That gives two columns in Explore and in wide Compare/Christian Case cells, and one stacked column on phones, with no media queries tied to a particular mode.
- Headings are `h3` (“Further study”) and `h4` for the two groups, under the answer's `h2`. The footer is `aria-labelledby` its title.
- **Thinkers:** shown in the answer's own frontmatter order, using registry name and `schools` only. No new descriptions were written.
  - An `interlocutor` is labelled through the existing `roleLabel()`, e.g. “Philosophy of mind · Interlocutor” for Chalmers in *What is man?*, so it does not read as a representative. Chalmers is the only interlocutor attached to any answer.
  - The heading changed from “Representative thinkers” to “Key thinkers”. The old heading was inaccurate for that interlocutor.
- **Reference counts:**
  - *Numbered references* = the answer's entries in the consolidated Sources section, one per distinct (source, locator) pair, i.e. `citations.length`.
  - *Distinct works* = distinct registered source IDs among them.
  - Repeat in-text uses of the same pair are not counted; they are the ↩ backlinks.
  - 165 of 168 answers cite at least one work more than once, so the two numbers usually differ. The range runs up to 53 references (`christianity/great-and-terrible`).
- **Not displayed:** the bibliography itself (the link goes to the existing group), source search, filters and pagination.

**Corpus invariant (all 168 answers, no browser).** The script parses each built question page and checks:
- the stated reference count equals the `<li>` entries in that answer's `sources__group`;
- the work count equals the distinct `<Cite source>` IDs in the MDX;
- the references link and its target exist;
- the Source Library, About and Back links are present;
- thinker names appear in frontmatter order;
- every interlocutor is labelled.

**Result: 168/168 pass.**

**Modes.**
- The coordinator still moves the whole footer into the Study stage (Christian Case) or the `footer` row (Compare) and restores it.
- **View this answer's references** keeps the current mode: the answer is shown, so its sources group is shown.
- **Back to all six answers** (`#overview`) switches to Explore through the existing `resolveForMode`, replacing the mode URL.
- Browser Back returns to the mode with the footer moved again.
- After case → compare → explore → case → explore, all six footers are home, with no duplicate IDs.

**Print and no-JS.**
- Print shows the thinkers and the count, and hides both link rows (`.further__links`, `.answer__links`).
- Without JavaScript the footer is fully present and its references link reaches the group.

## 4. Worldview accents

| Worldview | Light (new) | vs surface / page / surface-alt | Dark (new) | vs bg / surface / surface-alt | Previous light → dark |
|---|---|---|---|---|---|
| Reformed Christianity | `#315784` | 7.24 / 7.00 / 6.41 | `#8db0e2` | 8.09 / 7.53 / 6.85 | `#334d6e` → `#93aed3` |
| Naturalistic atheism | `#506a73` | 5.60 / 5.42 / 4.96 | `#a9b9bd` | 8.88 / 8.26 / 7.52 | `#4d6774` → `#9db5c2` |
| Rabbinic Judaism | `#716028` | 6.01 / 5.81 / 5.32 | `#ccb26c` | 8.70 / 8.10 / 7.37 | `#59633b` → `#b4bf86` |
| Classical Islam | `#297467` | 5.40 / 5.22 / 4.78 | `#6fc3b0` | 8.66 / 8.06 / 7.33 | `#376b62` → `#86c2b5` |
| Hindu traditions | `#99513a` | 5.69 / 5.51 / 5.04 | `#e8a083` | 8.39 / 7.81 / 7.10 | `#935f42` → `#dda27f` |
| Buddhist traditions | `#784f91` | 6.15 / 5.95 / 5.45 | `#c6a0e0` | 8.14 / 7.58 / 6.90 | `#765b77` → `#c6a3c8` |

- Every accent meets **WCAG AA for normal text (4.5:1)** on every surface it can sit on in its theme. They are used as small text (thesis-card names, Compare/Case labels, the Further study title) and as fine borders.
- The approved light trial values passed and are used unchanged.
- **Differentiation** is measured as the minimum pairwise OKLab ΔE×100:
  - light rises from 4.5 to 5.6 (closest pair naturalism/Islam, separated by hue: slate against teal);
  - dark rises from **3.8 to 7.4**. The old dark Christianity and naturalism blues were nearly indistinguishable; the new naturalism dark is a neutral slate.
- Dark values were chosen for the same hue families at higher lightness. They are not the light values reused.
- Applied only through the existing `--wv-*` tokens, so they appear in the existing places: thesis-card top rules and names, the selected card border, Compare column borders, labels and select edges, Christian Case cells and names, and the new Further study mark.
- No surfaces were tinted, and nothing encodes truth or ranking.
- See `screenshots/ui-polish/11-palette-before-main-*.png` (deployed main) and `11-palette-after-*.png`.

## 5. Test plan and coverage (proportionate)

**What changed and what could regress:**
- A head script that runs on every page, which could delay or break the reading-mode initialization;
- the global colour tokens, which could break contrast or native controls;
- header layout at phone widths;
- the footer that `modes.ts` moves, which could break restoration, unique IDs and the `#overview`/`#ns-sources` routes.

The coordinator, history, citations and anchors themselves did not change. Per REVIEW-STRATEGY the UI-2 Compare matrix and the UI-3 Christian Case matrix were **not** rerun.

**Representative scenarios, chosen before testing:**

| # | Scenario | Why |
|---|---|---|
| 1 | Christianity / Naturalism, *What is man?*: Explore and Compare | Five thinkers including the only interlocutor; long reference list (34); Christian/non-Christian pair |
| 2 | Christianity / Islam, *Revelation*: Christian Case | Footer in the Study stage; theological references |
| 3 | Hindu / Buddhist, *Ultimate reality*: Compare | Non-Christian pair; accent differentiation in dark |
| 4 | Judaism / Islam, *Revelation*: Compare, and Judaism in Explore at 390px | Four Jewish thinkers with long school lines; non-Christian Abrahamic pair |
| 5 | Home, Sources and the Calvin thinker page | The switch site-wide; persistence across page types |
| 6 | Case → Compare → Explore → Case → Explore cycle | Footer restoration and duplicate IDs |
| + | Theme edge cases | Section 2 table |

**Coverage actually run (Playwright, one engine at a time, against `astro preview`):**

| Engine | Theme | Footer and modes | Visual |
|---|---|---|---|
| Chrome (system Chrome) | 43 checks: full suite, 4 page types, bfcache, cross-tab, keyboard, accessibility snapshot, print, no-JS | 23 checks: scenarios 1–4 and 6 (five flows), print, no-JS | Header at 320/360/390/640/700/768/900/1280; all screenshots; forced colours |
| Firefox (Playwright) | 26 checks: quick suite, one question page for persistence | 15 checks: scenarios 1, 2, cycle, print, no-JS | Native select and footer, dark at 390 |
| WebKit (Playwright, not real Safari) | 26 checks: quick suite | 15 checks: as Firefox | Header metrics at 320/390/768/1280; native select dark at 390 |

All passed; no page errors. Before passing, the runs surfaced two test-harness bugs (a timing wait and a null-unsafe probe), both fixed in the tests, and one design defect: the thumb border was below 3:1 in dark, fixed in §2.

**Not tested** (residual risk judged low for this change):
- real Safari/iOS and screen readers (release QA);
- 200% zoom and text scaling;
- Firefox/WebKit bfcache and cross-tab theme sync (Chrome only);
- the Hindu/Buddhist and Judaism/Islam Compare flows in Firefox/WebKit;
- all other questions, pairs and opponents. The 168-answer footer invariant is static only.

## 6. Validation

| Check | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers, valid |
| `npm run check` | 0 errors, 0 warnings |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `scripts/audit-inventory.mjs` | 168 answers, 2,838 citations, ESV unledgered 0, orphan ledger rows 0 |
| `scripts/check-built-links.mjs` | **11,337 links** (was 11,169), 0 broken, 0 duplicate IDs |

The link count rose by **168**, exactly one new **Browse the Source Library** link per answer footer. The theme switch adds no links, and every other footer link existed before.

## 7. Scholarly content

- Unchanged: `src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` (verified with `git diff --stat origin/main`).
- Not moved under the thesis: the scope note (PR #28's decision stands).
- New UI copy is navigational only (“Further study”, “Key thinkers”, “Sources and references”, the count sentence and the link labels).
- Thinker descriptors come from registry `schools` and the existing role label.

## 8. Known limitations

- Browsers without `light-dark()` get the light theme and no switch.
- A choice made while storage is blocked lasts only for that page.
- The switch is hidden in print and has no effect under forced colours, which override page colours.
- The 641–767px header is about 44px taller than before (§2).
- If a future answer names many more thinkers, add the “View all thinkers” disclosure then. Nothing in the current layout prevents it.

## 9. Priorities for independent review

1. First paint with a saved Dark choice on a slow or uncached load, including whether the `color-scheme` meta rewrite prevents a white canvas flash in each engine.
2. `light-dark()` resolution inside custom properties for every token consumer, especially focus rings, `--color-target` fragment highlights and the Compare select chevron in dark.
3. Footer movement in Compare's stacked (< 70rem) layout and Christian Case on phones, including sticky labels above the footer.
4. Whether “N numbered references to M distinct works” is clear to readers, and whether the Interlocutor label is adequate.
5. Header at 641–767px and at 200% zoom.
6. Real Safari: native select, theme meta and switch rendering.
