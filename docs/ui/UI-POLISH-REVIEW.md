# UI Polish — Independent Review

**PR:** #33 · **Branch:** `ui-polish-theme-further-study` · **Date:** 2026-10-13
**Starting head:** `6d4fddbc08ade1192682b79e10d4f53a1cbd86cc` · **Starting main:** `5c934761fd27aa2c5aeb5ab5cc862dc10e5d1b2d`
**Final head:** the review commit on this branch (SHA reported in the PR comment/final report)
**Policy:** `docs/ui/REVIEW-STRATEGY.md` (proportionate review)

## 1. Independence and main synchronization

- This review was carried out in a fresh, single top-level session with no subagents. Production claims in `docs/ui/UI-POLISH.md` were treated as claims to check.
- None of the browser suites or the static check reuse the producer's tests. They were written for this review: footer data is recomputed from the MDX and `thinkers.yaml`, and first paint is judged from captured rendered frames rather than from a DOM attribute.
- `origin/main` was still `5c93476`, the branch point, so no merge was needed.

## 2. Changed files inspected

All of the following were read in full in the diff from `5c93476` to `6d4fddb`:

- **Components and layout:** `ThemeSwitch.astro`, `Header.astro`, `BaseLayout.astro` (head theme script), `AnswerPanel.astro`, `ThinkerLinks.astro`.
- **Styles:** `tokens.css`, `components.css`, `explore.css`, `global.css` (print).
- **Docs:** the §13 note in `DESIGN-SPEC-V1.md`.

Related code was checked only at its interface with the new footer:

- the footer selectors in `compare.ts` and `christian-case.ts`;
- the `.compare__cell > .answer__footer` and `.case__cell` rules;
- `roleLabel` in `lib/labels.ts`.

`modes.ts` is unchanged. The producer's screenshots in `docs/ui/screenshots/ui-polish/` were viewed.

## 3. Risk-based test plan (recorded before testing; ~60 min expected, ~75 min actual)

The most consequential regressions would be these:

- a light flash or wrong theme on load;
- a manual choice not outranking the device;
- a dead switch;
- unreadable dark accents;
- a footer that miscounts, mislinks or breaks Compare/Case movement;
- a header that crowds at phone/tablet widths;
- print inheriting dark.

The plan:

| Layer | What | Why |
|---|---|---|
| Static, whole corpus | All 168 built footers re-derived from MDX and the registry: count text, distinct (source, locator) entries vs the built source group, distinct works, thinker order/names, interlocutor label, thinker/profile/source/overview link targets, one `h3`, duplicate IDs per page | Cheap and complete; replaces opening 168 answers |
| Static | WCAG contrast of all 12 accents and the switch on every surface they sit on | The palette is new |
| Chrome (full set) | Switch states, keyboard, focus, 44px, persistence (home/question/Sources/thinker), system/saved/invalid/blocked storage, live device change, no-JS, reduced motion, print with saved Dark (computed + PDF), cross-tab, real-bfcache Back/Forward; slowed-CSS first paint; scenarios A–F; header at 320/390/640/700/768/1280 both themes; citation round-trip; forced colours | Primary engine |
| Firefox | First paint; switch/persistence/system/invalid/cross-tab/Back-Forward/print; scenarios C (dark Compare, native selects) and F (mode cycle) | Production did not exercise cross-tab or history here; selects and print differ by engine |
| WebKit | First paint; switch/keyboard/blocked storage/reduced motion/print/Back-Forward; scenarios B (Case Study stage) and D (Judaism/Islam, phone, stacked Compare, Case on a phone) | Sticky/phone layout and history differ by engine |

Engines were run serially; the machine had ~0.5 GB free memory.

## 4. Theme architecture and first paint — verdict: sound

- **Head script.** It runs before the stylesheet `<link>` and sets `data-theme` and the `color-scheme`/`theme-color` metas from a valid saved choice. It does nothing where `light-dark()` is unsupported. It is separate from the reading-mode script, which still runs: `?mode=compare` loads under a saved Dark reached `js-ready` in Compare with no `mode-pending` left, in all three engines.
- **Rendered first-paint test.** The setup was a saved Dark choice, a Light device, an uncached load, and every `.css`/`.woff2` response held for 2.5s.
  - **Chrome:** all compositor frames were captured over CDP. On `/`, a `?mode=compare` question page and `/sources/`, `first-paint` occurs only when the CSS arrives (~2.6s), and every frame from then on is dark (`#14171A`). On a fresh tab, the frames before first paint show the blank tab's own white surface; nothing from the document paints then. Navigating from a dark page of the site (the realistic case), every frame after commit is dark: no light frame on any of the three pages.
  - **Firefox and WebKit:** repeated screenshots during the load. Every captured frame was dark. Their screenshots only resolve once rendering starts, so the pre-paint tab surface cannot be observed there; that is the coverage limit.
- **Switch state and native controls at load.** The switch is checked on arrival in all three engines. The used `color-scheme` is `dark` on arrival, so the Compare `<select>` is dark (Chrome/Firefox/WebKit). The Firefox select was also checked visually.
- **Initial thumb position (defect M1, fixed).** Firefox computed the button's style before its inline script set `aria-checked`, so every page that opened dark (saved or device) played the 160ms thumb slide from sun to moon. This was detected by counting `transitionrun` events: 4/4 pages in both dark cases. Chrome and WebKit showed 0. After the fix, all three engines report 0 on 12 loads each.
- **Old-browser fallback (inspected, not run on a genuine old engine).**
  - `@supports not (color: light-dark(#000, #fff))` redefines all 21 colour tokens with the light values and sets `color-scheme: light`. It comes later than the `light-dark()` declarations at equal specificity, so it wins.
  - The head script's `CSS.supports` guard (also `!window.CSS`) leaves `theme-switchable` off, so the switch stays `display: none`. There is no inert control.
  - A blank page or unreadable text would need a `var()` that is never redefined. Every `--color-*` and `--wv-*` token used is in the fallback list, so neither can happen.
  - No pre-123 Chrome, pre-120 Firefox or pre-17.5 Safari was available. This remains a release-QA item.

## 5. Persistence, synchronization and accessibility — verdict: pass

**Choices and storage**

| Check | Chrome | Firefox | WebKit |
|---|---|---|---|
| No choice follows the device; live device change tracked | ✓ | ✓ | — |
| Space/Enter toggle; `role="switch"`, name "Dark mode", `aria-checked` | ✓ | ✓ | ✓ |
| 72×44 target; 3px focus ring on the track | ✓ | ✓ | ✓ |
| Persists across reload, Sources, a thinker page and a question | ✓ | ✓ | ✓ |
| Saved Light beats device Dark, and vice versa | ✓ | ✓ | — |
| Invalid values (`blue`, `DARK`) ignored; the next click stores a valid value | ✓ | ✓ | — |
| Blocked `localStorage`: no errors; switch works for the page; next page follows the device | ✓ | — | ✓ |

**Sync, modes and appearance**

| Check | Chrome | Firefox | WebKit |
|---|---|---|---|
| Cross-tab sync (Home ↔ a Compare page) | ✓ | ✓ | — |
| Back/Forward after changing theme on a later page (Chrome with real bfcache) | ✓ | ✓ | ✓ |
| No-JS: switch absent, device theme honoured, footer links work | ✓ (light and dark) | — | — |
| Reduced motion removes the transition | ✓ | — | ✓ |
| Forced colours: thumb painted as Highlight | ✓ | — | — |

## 6. Colour contrast and dark mode — verdict: pass, no change

**Accents.** Contrast of each accent against the page, card and alt surfaces it is drawn on (`#FAF8F3`, `#FDFCF8`, `#F2EEE3`; dark `#14171A`, `#1A1E23`, `#21262C`):

| View | Light | Dark |
|---|---|---|
| Christianity | 6.41–7.24 | 6.85–8.09 |
| Naturalism | 4.96–5.60 | 7.52–8.88 |
| Judaism | 5.32–6.01 | 7.37–8.70 |
| Islam | 4.78–5.40 | 7.33–8.66 |
| Hinduism | 5.04–5.69 | 7.10–8.39 |
| Buddhism | 5.45–6.15 | 6.90–8.14 |

- All pass AA for normal-size text.
- No accent text is drawn on the target or hover tints. Islam on the light target tint would be 4.47, so this matters if a later PR places accent text there.

**Other tokens and the switch.**

- Muted text is ≥ 5.4 and links ≥ 6.1 in both themes.
- Focus is 5.3 (light) and 8.7 (dark).
- The thumb border against the track is 5.9 and 6.8; the track border against the header is 3.4 and 3.3.

**Checked under forced Light and forced Dark** (not merely the device scheme):

- page and card backgrounds, body and muted text, links;
- the source-target tint (dark `#3A3622` on a direct source anchor and on the backlinked claim);
- the Compare selects and chevron;
- Further study headings (dark Hinduism `#E8A083`, Buddhism `#C6A0E0` measured);
- print (§10).

The Christian Case emphasised stage and its labels use the same tokens; they were seen in scenario B and the producer's screenshots, and not measured separately.

## 7. Further study layout and counts — verdict: pass, wording kept

**Corpus check (all 168 built footers):**

- 168 footers; 0 problems;
- count text equals distinct (source, locator) pairs and distinct source IDs from the MDX, and the pair count equals the entries in that answer's built source group;
- thinker names and order match the frontmatter and registry;
- **Interlocutor** appears exactly once (David J. Chalmers, Naturalism / What is man?) and on no other role;
- every link target (thinker page, worldview profile and its name, `#…-sources`, `/sources/`, `#overview`) exists;
- 0 duplicate IDs on any question page.

Answers have 1–5 thinkers (three have five). Five-thinker footers read comfortably at 1280 and 320px, so no "View all" is needed.

**Wording.** "31 numbered references to 13 distinct works" is accurate and reads naturally: a reference refers to a work, and both nouns match what the reader finds in the source list. It was kept unchanged.

**Visual.** The footer looks deliberate and light:

- a hairline, a small accent-square heading, two quiet groups, and a muted final navigation row;
- two columns where there is room, stacked in Compare cells and on phones;
- long school lists ("Medieval Jewish rationalism, Halakhic codification") wrap under the name without clipping at 320px.

"Philosophy of mind · Interlocutor" is clear and does not present Chalmers as a naturalist representative.

## 8. Footer navigation in all three modes — verdict: pass

| Scenario | Engine(s) | Result |
|---|---|---|
| A: Christianity/Naturalism, What is man?, Explore and Compare (1280) | Chrome | References link lands on the exact group in view and stays in the mode. Back to all six answers shows `#overview`; from Compare it returns to Explore by design, and browser Back restores the Compare URL and mode. The Chalmers link opens his page. |
| B: Christianity/Islam, Revelation, Christian Case | Chrome, WebKit | Both footers sit in "Study the sources". References land in Case; Back to all six → Explore overview; browser Back → Case at the same URL. |
| C: Hinduism/Buddhism, Ultimate reality, Compare dark (1280, 700 stacked) | Chrome, Firefox | Footers render with dark accents, with no overflow or clipping. Stacked references link works. |
| D: Judaism/Islam, Revelation, at 320 and 390 (Explore, stacked Compare, Case) | Chrome, WebKit | No overflow, no clipped names; footer right edge inside the viewport; references link works in stacked Compare. |
| E: Home, Sources, a thinker page | Chrome (Firefox/WebKit partly) | The switch works and persists outside question pages. |
| F: Explore → Compare → Case → Explore by the mode links | Chrome, Firefox | Six footers and 0 duplicate IDs at each step. All footers return as the last child of `.answer__inner`, byte-identical to the original. |

No new link points into mode-hidden content: the only in-page targets are the source group (always visible) and `#overview` (handled by the existing mode coordinator).

## 9. Mobile and zoom — verdict: pass

**Header heights and layout (Chrome, both themes):**

| Width | Header | Layout |
|---|---|---|
| 320 | 148px | Brand and switch on row 1 (brand reduced to 18px, no overlap); nav on two further rows |
| 390–640 | 104px | Brand and switch, then nav |
| 700 | 100px | Brand and switch, then nav on its own row |
| 768+ | 56px | One row |

- No horizontal overflow at any width.
- At 320 the nav needs 352px. The deployed main build wraps it identically (148px at 320–360), so this is **pre-existing**, not caused by the switch.
- At 700 the two-row header is orderly: the switch stays top-right, aligned with the content edge, and nav targets are unchanged. The extra ~44px is a fair cost and not a defect.
- **200% zoom:** checked as its equivalent 640 CSS-px viewport (a 1280px window at 200%). The header is two-row, 104px, with no overflow, and the footer stacks. Text-only zoom was not tested.

## 10. Print and no-JavaScript — verdict: pass

**Print, with a saved Dark choice** (print media emulated):

- Chrome, Firefox and WebKit all give `color-scheme: light`, a white body, black text and the light Christianity accent on the Further study heading.
- The switch, header, Further study navigation row and footer links are hidden.
- Thinkers, counts and sources print, and all six answer panels are visible.
- A Chrome PDF of What is man? (27 A4 pages) generated cleanly. It could not be rasterised here, so its visual check rests on computed styles.

**No JavaScript (Chrome, light and dark device):**

- the switch is absent and the device scheme is honoured;
- all answers and footers are visible;
- the references link and Back to all six answers work.

## 11. Structural and content invariants

- `src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` are unchanged from `5c93476`: an empty diff.
- `audit-inventory` rewrote `research/final-audit/data/*` with only line-ending/stat noise, which was reverted.
- A citation → source → backlink round trip through a closed Examine disclosure, in Explore and Compare under Dark, reached the exact claim with the disclosure opened and the target tint visible.

## 12. Findings and fixes

| ID | Severity | Finding | Fix |
|---|---|---|---|
| M1 | MINOR | In Firefox, every page opening dark (saved or device) played the thumb's 160ms slide from sun to moon: the button's style was computed with the server-rendered `aria-checked="false"` before its script ran. Chrome and WebKit were unaffected. | `components.css`: the thumb position now derives from `--theme-dark`, set on the root by `data-theme` or the device query; `[data-theme]` outranks the media rule. That state is fixed in `<head>` before the switch exists, so nothing changes at load. `aria-checked` and the pictogram ink are unchanged. Retested: 0 transitions in Chrome, Firefox and WebKit, toggling and cross-tab animate as before, and the Firefox switch/system/tabs suite passes. |

No BLOCKER or IMPORTANT findings.

Documentation:

- `UI-POLISH.md` §2 notes the M1 behaviour.
- `DESIGN-SPEC-V1.md` §13.6 now says the accents were confirmed by this review.

## 13. Remaining limitations

- No genuine engine without `light-dark()` was run; the fallback was verified by inspection (§4).
- Firefox/WebKit first-paint evidence starts at their first rendered frame.
- Playwright WebKit on Windows is not Safari.
- No real screen reader was used; the accessibility tree and roles were checked programmatically.
- Text-only zoom was not tested.
- The phone navigation's third row at ≤ 383px is pre-existing. Any change belongs in a separate header PR, not this one.
- Untested combinations are not claimed as passed. The earlier exhaustive UI-2/UI-3 mode matrices were not rerun, because `modes.ts` and the Compare/Case controllers are unchanged; the footer's movement was checked by scenario F and the corpus check.

## 14. Final validation (after the fix)

| Command | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers; valid |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 2,838 citations, 0 unledgered ESV candidates, 0 orphan ledger rows |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 96 pages, 168 answers, 11,337 links, 0 broken, 0 duplicate IDs |

All match the expected baseline.

## 15. Recommendation

**MERGE.**

- The theme switch, first-paint behaviour, palette, Further study footer and print/no-JS fallbacks meet §13.1, §13.3 and §13.6.
- The one defect found (M1, minor) is fixed and retested in all three engines.
- Content is untouched.
- The user merges; UI-4 has not been started.
