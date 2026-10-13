# UI-4A — Independent review

**PR:** #35 (`ui4a-citation-previews`). **Reviewed head:** `7f025d3`. **Base:** main `aee1217` (unchanged during the review).
**Reviewer:** one fresh Claude Opus 5.5 session, no subagents, 2026-10-13. **Policy:** `docs/ui/REVIEW-STRATEGY.md`.
**Read:** `AGENTS.md`, the review strategy, `docs/DESIGN-SPEC-V1.md` §§13.1–13.2, `docs/ui/UI4A-CITATION-PREVIEWS.md`, and the whole code diff.

**Result:** 0 BLOCKER, 0 IMPORTANT, 1 MINOR (fixed). **Recommendation: MERGE.**

## 1. Risk-based test plan

**What changed:**
- a new client script, `cite-preview.ts`. It intercepts marker clicks in the capture phase, copies bibliography DOM into a top-layer popover, and runs its own Tab, focus and dismissal logic;
- `data-source` on bibliography entries;
- the theme switch's markup, CSS and press-only transition.

**Most consequential regressions to look for:**
- a wrong or invented citation fact;
- a full form borrowed from the wrong entry when one source is cited at several locators;
- broken fragment navigation, history or backlinks;
- focus loss or a keyboard trap;
- previews that clip on phones or detach from markers moved by the reading modes;
- a load-time slide or a theme flash.

**Scenarios, chosen before testing:**
- S1, Naturalism · *What is man?* (Explore): repeated citations, an external link, a long answer.
- S2, Christianity · *What is man?*: markers inside Examine and Deep dive disclosures.
- S3, Christian Case, Islam · Revelation: moved markers; View full reference and backlink inside Case.
- S4, Compare Judaism/Islam · Revelation: two non-Christian columns at 1280 (dark), 768, 390 (touch) and 320 (touch), with markers at the top, centre and bottom of the viewport.
- S5, at 320px: the page's longest bibliographic form, an entry without a URL, and a 256px-tall viewport (high-zoom stand-in).
- No JavaScript.

Compare and Case combinations were not rerun. Positioning reads live client rects, and the mode code (`modes.ts`) is untouched.

**Engines:** Chrome (system channel), then Playwright Firefox and Playwright WebKit (Windows), run serially. Real Safari and screen readers were not available.

## 2. Citation integrity (independent recomputation)

Expectations were recomputed **from the MDX and `sources.yaml`, not from `dist`**:
- my own `<Cite>` parser and (source, locator) numbering;
- my own rendering of the full form: author, title, container, ed., trans., edition, place: publisher, year, DOI, the registered URL with its "↗ (external link)" text, and any `displayCitation` override.

In Chrome, every marker on all 28 question pages was opened through the real script, with all answers and disclosures forced open. Result: **2,838 / 2,838 markers and 2,464 / 2,464 entries, 0 failures.**

Each marker was checked for:
- its `href`;
- entry `value` equal to the marker number;
- page numbering running 1…N in first-use order;
- `data-source` equal to the MDX source;
- heading "Source N · {answer}", with the group's `data-ns` equal to the marker's namespace;
- the preview citation text **exactly** equal to the registry's full form, including later entries whose own row is shortened (the different-locator case);
- the external link present exactly when registered, with the registered `href`, so none was invented across the 54 URL-less entries;
- the exact locator;
- the exact note (185 entries carry one), or none;
- the View full reference `href`;
- `aria-expanded` and `aria-controls`;
- focus on the dialog;
- no copied IDs, and no duplicate IDs on the page before or after.

Each entry was checked for:
- one backlink per use, in order, each to an existing marker;
- a marker count equal to its uses;
- the exact locator in the entry itself.

## 3. Interaction and accessibility results

Interaction script, per engine: **Chrome 182/183, Firefox 181/182, WebKit 178/180.** Every remaining failure was traced to the harness, not the site:
- The DOM-count comparison sampled once with the preview open and once closed. The counts are equal across 20 cycles: 2,733 open and 2,725 closed.
- Playwright WebKit on Windows does not open a tab on middle-click. Its Ctrl-click did open the full reference in a new tab.

Verified in all three engines unless noted:
- **Opening:**
  - A plain click or tap opens the preview, with the URL, history length and scroll unchanged and focus in the dialog.
  - Enter on a focused marker opens it.
  - Pressing the same marker closes it and returns focus there.
  - Another marker switches the preview; only one is ever expanded.
- **Dismissal:**
  - Close and Escape close it with focus restored and no scroll.
  - An outside press closes it.
  - Pressing a disclosure summary that contains the open marker closes it.
  - Focusing the Case opponent `<select>` closes it.
- **Tab:**
  - The order is Close → source link → View full reference.
  - Tab past the end and Shift+Tab from the dialog or from Close both close the preview and return focus to the marker; the next Tab continues forward (Chrome, Firefox).
  - There is no trap. Returning to the marker rather than moving past it costs one extra keypress; that is acceptable, and it puts the reader back at the claim.
- **Modified clicks:** Ctrl-click and middle-click (Chrome, Firefox) and Shift-click (Chrome) open the full reference in a new tab or window and never open a preview.
- **View full reference** (by keyboard):
  - adds one history entry and brings the entry into view;
  - the next Tab lands inside the entry (Chrome, Firefox);
  - the backlink returns to the claim;
  - Back with a preview open closes it and returns to the entry.
- **Reading modes:**
  - Previews sit beside markers in opened disclosures (S2), in Case stages (S3) and in both Compare columns at every width (S4). In every one of the 24 S4 placements the preview was inside the viewport, caused no page overflow, did not cover its marker (the marker stays topmost at its centre) and sat within 12px of it.
  - In Case, View full reference stays in Case and reveals the entry, and the backlink returns to the moved claim.
- **High zoom stand-in:** at 320 × 256 the preview fits, scrolls internally and does not cover its marker.
- **Print:** the preview is `display: none`.
- **No JavaScript:** markers navigate to their entries; there is no preview and no `aria-haspopup`.

**Residual observations (not defects of this PR):**
- WebKit's Tab skips links (an engine setting). After View full reference, the next Tab therefore goes to the first button (the theme switch).
- The deferred Tab test in WebKit is not meaningful for the same reason. The in-preview order is enforced by the script.

## 4. Theme switch

**The approved design is confirmed** in screenshots in Chrome and WebKit, home and question pages:
- Light shows only the sun, inside the left thumb.
- Dark shows only the moon, inside the right thumb.
- Each icon is centred in the thumb to within 1px.
- The track is 64 × 32 and the button target 72 × 44.

**Theme suite on the final head: Chrome, Firefox and WebKit 63/63 each.** It covers:
- four load states (device light, device dark, saved Dark on a light device, saved Light on a dark device) on home → question page → reload, with **CSS held 1.5s**: correct icon, position and `aria-checked`, and **0 thumb transitions on every load**;
- slides by Space and by click: monotonic, exactly one visible icon in every frame, correct end state;
- reduced motion: no intermediate frame;
- cross-tab, including after the tab's own press (no slide, `data-animate` cleared);
- a synthetic persisted `pageshow`: no slide.

One Chrome run, the first after a threshold correction, reported a single failure. It did not reproduce in three later runs.

**First paint** (saved Dark, CSS held 1.5s, navigating from a dark page):
- Firefox and WebKit produce no painted frame until the stylesheet arrives. WebKit's pre-paint capture is the unpainted black (0,0,0); Firefox screenshots wait.
- Every painted frame is dark (mean luminance 30/255) in all three engines.
- There is no light flash and no load-time slide.

## 5. WebKit slide: conclusion

**Measurement:** rAF timestamps and the transition's own `startTime`, with no style reads during the slide.

**On the question pages before the fix:**
- WebKit: in 2 of 8 presses the transition started at the press itself. The 50–140ms recolour frame then hid about the first half of the slide, so the first painted frame was already at 52–54%. The other presses showed nearly the whole slide.
- Firefox showed the same effect on the heaviest page (*great and terrible*): 5 of 6 presses had a first frame at 9–46%.
- Chrome was always smooth.

**Engine or implementation?**
- The **cost is the engine's**. A forced theme flip's style recalc on *What is man?* is 51–68ms in WebKit, 16–24ms in Firefox and about 7ms in Chrome.
- It is **pre-existing**: main `aee1217` measures the same or more (49–75ms). Nothing in UI-4A adds to it.
- **The vulnerability is the implementation's.** The slide is started in the very frame that recolours the whole page, so any slow engine or device loses part of it.
- A localized correction was warranted (M1).

**After the fix:**
- WebKit: 15/15 presses show the slide from ≤5%.
- Firefox: 12/12 from about 2%.
- Chrome: unchanged, apart from starting one frame (about 17ms) after the recolour, which is not perceptible.

Windows Playwright WebKit is not Safari. Real Safari on macOS or iOS was not available and should be checked at release QA. Safari's style recalc is expected to be far cheaper, and with the fix the slide no longer depends on it.

## 6. Findings and fixes

### M1 (MINOR, fixed): the slide could lose up to half its frames on long pages

**Cause:** in WebKit and Firefox, the 200ms transition could begin in the same frame as the whole-page recolour. That frame takes 50–140ms (WebKit), so part of the slide was never drawn and the thumb visibly jumped.

**Fix (`ThemeSwitch.astro`, `components.css`):**
- A press pins the thumb's position with a button-local `--thumb-at` for the recolour frame, then releases it two animation frames later. The 200ms slide therefore runs entirely in cheap frames.
- The icon still changes with the theme at once.
- Guards:
  - a second press within those frames keeps the original pin;
  - a stale release is ignored (a press counter);
  - a theme arriving from another tab or a bfcache restore clears the pin together with `data-animate`.
- Nothing changes on load, so the first-paint and no-load-slide guarantees are untouched, as the 0-transition load checks above confirm.

**Retested:**
- the full theme suite in all three engines (63/63 each);
- the slide measurements above;
- build, validation and links.

No citation code changed, so the citation checks were not rerun.

## 7. Validation (final head)

| Check | Result |
|---|---|
| `npm run build` (validate + check + build) | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers; `astro check` 0 errors, 0 warnings, 1 hint (pre-existing); 96 pages |
| `check-built-links.mjs` | 11,337 links, 0 broken, 0 duplicate IDs, 0 outside base |
| `audit-inventory.mjs` | 168 answers, 2,838 citations, 0 unledgered ESV (its CRLF-only `research/` rewrite was reverted) |
| `git diff --check` | clean |
| `git diff aee1217 -- src/content research docs/ESV-QUOTATION-LEDGER.md` | empty |
| JS bundle | 24,228 B, as in the production record (the fix is in the switch's inline script) |

## 8. Visual assessment

- **Light and Dark:** the preview reads as a footnote, not a tooltip. It has a quiet uppercase kicker, the full citation in the serif face, the locator, a hairline and View full reference. Its surface and border tokens fit both themes. The expanded marker's tint is visible but restrained.
- **Phones** (390 dark, 320 light, Case): the preview spans the column with 16px gutters, sits just below its marker line, and the stacked worldview label stays in place above it.
- **Switch:** compact and legible in both themes, with exactly one pictogram.
- **Header at 320:** the nav wraps to a third row. This is pre-existing on main and was recorded in the UI Polish review.

## 9. Residual risks

- Real Safari (macOS and iOS) and real screen readers were not tested. Roles, names, states and focus were checked programmatically.
- A true bfcache restore was not observable under Playwright. The restore path was exercised with a synthetic persisted `pageshow`.
- `displayCitation` overrides: none are registered, so that branch is verified only by construction. My expectations model it.
- In WebKit, keyboard users cannot Tab to links (an engine preference), so they cannot Tab into the revealed entry after View full reference.
- An open preview keeps its document position if the layout above it changes without a press (late font loading, for example). Any press closes it.

## 10. Recommendation

**MERGE.** Citation facts are exact across the whole corpus, interaction and focus behaviour is sound in all three engines, and no-JavaScript navigation is preserved. The approved switch design is met, and its slide is now fully drawn even on slow engines. The PR is not merged by this review; the user merges.
