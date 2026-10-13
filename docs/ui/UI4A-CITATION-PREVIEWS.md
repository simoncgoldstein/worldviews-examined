# UI-4A — Accessible citation previews and theme consistency

**Status:** produced 2026-10-13 on branch `ui4a-citation-previews` from main `aee1217`. Independently reviewed 2026-10-13: see `docs/ui/UI4A-REVIEW.md` (MERGE; one MINOR fix to the switch's slide). Spec: `docs/DESIGN-SPEC-V1.md` §13.1 (theme switch) and §13.2 (citation previews). Review policy: `docs/ui/REVIEW-STRATEGY.md`.

Three changes, nothing else:

1. Numbered citations open a compact, accessible preview beside the text.
2. The homepage theme toggle (already present; verified, see §5).
3. The approved single-icon sliding switch, on every page.

No MDX, source, registry, research or ESV-ledger file changed. No new dependency.

## 1. Files

| File | Change |
|---|---|
| `src/scripts/cite-preview.ts` (new, about 190 lines) | The preview: one non-modal dialog per page, built on first use. |
| `src/layouts/BaseLayout.astro` | Imports it beside `reveal-hash` (one shared bundle; the script does nothing on pages without citations). |
| `src/components/SourceList.astro` | Each bibliography `<li>` gains `data-source="<registered id>"`. No other markup change. |
| `src/components/ThemeSwitch.astro` | Both pictograms moved inside the thumb. The script sets `data-animate` on a press and clears it when a theme arrives from another tab or a bfcache restore. |
| `src/styles/components.css` | Switch: single icon, 200ms slide. New `.cite-preview` styles. Expanded-marker tint. Preview hidden in print. |

`modes.ts`, `reveal-hash.ts`, `answer-panels.ts`, `Cite.astro`, `citations.ts` and the schemas are untouched.

## 2. Citation preview architecture and data model

**No duplicated metadata.** The page already renders every fact the preview needs in its consolidated Sources section, so the preview borrows from it:

- A marker's `href` (`#<ns>-src-<n>`) names its entry.
- The entry provides:
  - its exact **locator** (`.source-entry__locator`);
  - its **note**, if any;
  - its **page number** (the marker's own text);
  - its **answer**, from the group heading.
- `SourceList` prints the **full form** (`formatSource()` through `SourceCitation.astro`) only at a source's first entry in an answer's group. Later entries for the same source with a different locator use `shortSource()`.
- So the preview copies the `.source-citation` of the group's first `li[data-source=<id>]`. That entry is always the full form: author, title, container, editor/translator/edition, publication, DOI, and the registered external link with its "(external link)" text.
- `displayCitation` overrides are handled by the same path: `SourceCitation` renders the override and the clone carries it. The registry currently has no override, so this path is untested on real data.
- A source without a registered URL renders without a link. The corpus check confirms none is invented (§6).

**Build-time cost:**

- One `data-source` attribute per entry: 2,464 entries, about 84 KB across the 28 question pages, about 3 KB per page before compression.
- No templates, JSON index or copied bibliography.

**Runtime:**

- Created lazily, the first time a reader opens a citation.
- Each open replaces the preview body with fresh clones (`cloneNode`). Text goes in through `textContent`; nothing is built from strings except the static shell.
- The cloned nodes contain no `id`, so the page has no duplicate IDs.
- Every listener is registered once at load. Opening and closing add none (§6).
- No network requests and no framework.

The preview is a `popover="manual"` element in the **top layer**:

- No ancestor's overflow clips it, and no sticky worldview label or Case stage bar covers it.
- `position: absolute` places it in document coordinates, so it scrolls with the text.
- In a browser without the Popover API the script does nothing, and markers stay ordinary links.

## 3. Interaction and accessibility

| Input | Behaviour |
|---|---|
| Click or tap on a marker (plain, primary button) | Opens its preview. `preventDefault` in the capture phase, so the shared fragment handler never sees it. The URL, fragment and history length are unchanged. |
| Ctrl/Cmd/Shift/Alt-click, middle click | Ordinary link: new tab or window at the full reference. |
| Enter on a focused marker | Opens (links activate on Enter). |
| Click the same marker again | Closes; focus on the marker. |
| Another marker | The first closes and the second opens. Only one preview exists. |
| **Close** button, **Escape** | Closes; focus returns to the marker (`preventScroll`, so the page does not move). |
| Tab / Shift+Tab inside | Close → registered source link → View full reference. Past either end the preview closes and focus returns to the marker. This order is the same in every engine; WebKit would otherwise skip links and leave the page. There is no trap. |
| Press outside (pointer) | Closes; focus goes wherever the press lands. |
| Keyboard focus moving elsewhere | Closes. |
| **View full reference** | An ordinary `#…-src-N` link. The preview closes and `reveal-hash.ts` handles it as any fragment link: new history entry, entry revealed and highlighted. Its ↩ backlinks lead back to the claim as before. |
| Back/Forward, `hashchange`, `pagehide`, a mode change or worldview switch | Closes. A mode or worldview change always starts with a press or focus move outside the preview; history navigation is caught by `popstate`/`hashchange`. |
| Resize or zoom | The preview is repositioned. |

**Semantics:**

- `role="dialog"`, non-modal, named by its heading ("Source 32 · Naturalistic atheism") and described by its body.
- It takes focus on opening, so a screen reader announces it. Its controls carry the focus rings; the container shows none.
- At load, markers gain `aria-haspopup="dialog"` (only when the Popover API exists). The open marker has `aria-expanded="true"` and `aria-controls`, plus a quiet target tint.
- The existing marker `aria-label` ("Source N: short title, locator") is unchanged.
- Hover does nothing (optional in the spec; omitted to avoid movement).

**Appearance:** set like a footnote rather than a tooltip.

- A small Inter uppercase kicker: "Source N · answer".
- The full citation in Source Serif 4.
- "Cited at" plus the exact locator, and the note when the citation has one.
- A hairline, then "View full reference".
- Surface, rule and link tokens give both themes automatically. A restrained shadow, no arrow.

## 4. Positioning and reading modes

**Placement:**

- Placed **below** the marker's line if it fits in the viewport, otherwise **above**.
- If it fits on neither side (very high zoom), it goes on the roomier side with `max-height` and internal scrolling, so the marker is never covered.
- Horizontally, it starts slightly left of the marker and is clamped 16px from both viewport edges. Width is `min(28rem, viewport − 32px)`.

**Reading modes:** positioning uses the marker's live `getClientRects()`, so it follows a marker wherever `modes.ts` has moved it:

- Compare, both columns.
- The stacked phone Compare.
- All Christian Case stages.
- Explore's opened Examine and Deep Dive disclosures.

A marker that has become hidden closes the preview. The full reference's group is always shown with its answer in every mode, so View full reference stays inside the current mode (verified in Case).

**Print:** `.cite-preview { display: none !important }`. Citation numbers and the complete Sources section print as before.

**No JavaScript:** nothing changes. Markers are the same links to the same entries (`data-source` is inert).

## 5. Theme switch

### 5.1 Homepage

The homepage already rendered the switch on main `aee1217`: `index.astro` uses `BaseLayout` → `Header` → `ThemeSwitch`, like every page.

- The deployed homepage HTML contains it too (checked 2026-10-13).
- The "missing" toggle was most likely seen before PR #33 deployed, or from a cached copy.
- No homepage-specific code was added. The homepage gets the redesigned switch through the shared component.
- Header placement and behaviour are the same on the homepage and other pages; the §6 tests check both.

### 5.2 The approved single-icon sliding design

- **Track:** unchanged (64 × 32px pill, `--color-rule-strong` border, `--color-surface-alt` fill). The button remains the 44px target.
- **Thumb:** one 24px circle, left in Light and right in Dark.
- **Icons:** both SVGs are now children of the thumb, absolutely centred (`inset: 0; margin: auto`), in full text ink.
  - The sun has `opacity: calc(1 − var(--theme-dark))` and the moon `opacity: var(--theme-dark)`.
  - Exactly one is visible, it changes at once (no fade), and it shows the **current** theme.
  - Nothing is drawn at the ends of the track.
- **Slide:** `transform: translateX(...)` with `transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1)`. GPU-friendly, no bounce, rotation or resizing.

### 5.3 First paint and "only a press slides"

The thumb's position and the visible icon derive from the root `--theme-dark`. `BaseLayout`'s existing head script fixes it before first paint via `data-theme` or the media query; this is the UI-Polish M1 fix, kept as is.

New: **the transition exists only after a press.**

- `ThemeSwitch`'s click handler sets `data-animate` on the button.
- `.theme-switch[data-animate] .theme-switch__thumb` carries the transition.
- A theme that arrives any other way (a `storage` event from another tab, or a `pageshow` restore from the back/forward cache) first removes `data-animate`. The thumb jumps to its place.
- So no load, reload, navigation, restore or cross-tab change can slide the thumb.
- **Why:** with the stylesheet held back 1.5s, Playwright WebKit styled the switch before the CSS arrived. It then played one 200ms slide on a saved-Dark load, which the root variable alone did not prevent. With `data-animate` that count is 0.
- No new initialisation path: the storage key, `window.worldviewsTheme` and the head script are unchanged.

### 5.4 Reduced motion and accessibility

- `prefers-reduced-motion: reduce` already sets every transition to none (`global.css`), so the switch changes at once.
- The control is unchanged:
  - a `role="switch"` button named "Dark mode", with `aria-checked` true in Dark;
  - Space and Enter toggle it;
  - 3px focus ring on the track;
  - forced-colours rules (the icon is HighlightText on the Highlight thumb).

## 6. Tests and results (2026-10-13)

Scripts were run from the session scratchpad against `astro preview` at `http://[::1]:4329`. They are not committed.

**Structural, whole corpus** (Node, branch `dist` against a main `aee1217` build):

- All **96** pages are identical to main once `data-source`, the switch's markup and inline script, and asset hashes are normalised away. No scholarly HTML changed.
- **2,838** markers and **2,464** entries:
  - every marker's `href` resolves to its entry;
  - each marker's number matches the entry's `value`;
  - page numbering runs 1…N in first-use order;
  - each entry's `data-source` matches the MDX `<Cite source>` (independently re-numbered from the MDX);
  - locators match exactly and notes are present;
  - each entry has one backlink per use, each to an existing marker;
  - the full form each entry borrows contains every registered piece (author, title, container, `ed.`, `trans.`, edition, place, publisher, year, DOI) and its registered URL.
- 0 duplicate IDs. 0 failures.

**Every preview, Chrome:** on all 28 question pages, every one of the **2,838** markers was opened through the real script (all answers and disclosures forced open). Each preview was checked against those expectations:

- number;
- exact locator;
- note;
- external URL present exactly when registered, so none was invented across the 54 URL-less entries;
- every registered piece;
- View full reference href;
- `aria-expanded`;
- no copied IDs;
- then closed and emptied.

Result: 0 failures. One preview element per page.

**Chrome scenarios** (64 checks, 0 failures):

| Scenario | Why chosen | Covered |
|---|---|---|
| S1 Naturalism · What is man? (Explore) | Repeated citations, long answer | URL, history and scroll unchanged on open. Focus into the dialog. Repeated use (cite 32, uses 1 and 2) shows identical facts. Escape, Close, toggle, outside click. Tab order and exits both ways. Ctrl+click opens a new tab. View full reference → entry (+1 history entry) → backlink → claim → Back. 40 open/close cycles: DOM node count and CDP listener counts (document/window/preview/link) unchanged, 0 requests. Open preview not printed. |
| S2 Christianity · What is man? | Closed Examine and Deep Dive disclosures | Previews inside each opened disclosure, placed beside the marker. |
| S3 Christian Case, Christianity/Islam · Revelation | Moved markers; Case stages | Christian response, objections (inside an opened disclosure) and Christian account. View full reference stays in Case and reveals the entry; backlink returns to the moved claim. Switching opponent closes the preview; the Compare mode link closes it; Back (popstate) closes it. |
| S4 Compare Judaism/Islam · Revelation | Two non-Christian columns; stacked phone | Both columns at 1280 (dark), 768, 390 and 320 (taps). Marker 140px from the top (under the sticky selectors) and at the bottom edge (opens above). Every check: inside the viewport, no page overflow, not covering the marker, adjacent to it, topmost at its centre. |
| S5 Difficult citations at 320px | Longest bibliographic title (Acts of Synod 1924, 6 parts); no URL with a multi-part locator (`24.32–33; 26.11`) | Fits the viewport. Registered link present or absent as registered. Exact locator. |
| No JavaScript | Fallback | A marker navigates to its entry; no preview exists. |

**Firefox and WebKit:** smoke set S1, S3 (response stage and View full reference/backlink in Case), S4 at 390px with taps, S5 (no URL), and no-JS.

- Firefox: 32/32.
- WebKit: 32/32. This run found two WebKit defects, both fixed before these results:
  - Tab skipped the preview's links and left the page.
  - A press on the open marker reopened the preview instead of closing it (WebKit moves focus to `<main>` on mousedown).

**Theme** (`theme4a`): the same 36 checks in each engine, against the spec's §8.8 list:

- Light: sun only, centred, thumb left. Dark: moon only, thumb right. Home and question page.
- The press slides right, then left. Sampled every frame: Chrome 11 intermediate positions, monotonic. Never two icons in any frame. Track and button sizes constant.
- Colours switch with the press.
- Keyboard: Tab reaches the switch with a 3px ring; Space and Enter toggle. The accessible name and state are correct.
- Saved Dark on device Light, saved Light on device Dark, and device Dark with nothing saved: correct icon and position on home → Questions → a question page → reload → home, with **0 thumb transitions** on every load.
- Cross-tab: the other tab follows with the correct icon and no slide.
- A synthetic persisted `pageshow` after a choice made elsewhere: correct state, no slide.
- Real Back navigation in Playwright was a fresh load in every engine, so a true bfcache restore was not exercised.
- Reduced motion: no intermediate frames.
- Phones and tablet: header and switch whole at 320, 390 and 768 in both themes, on home and a question page. No overflow, no header height change, no resize on toggle.
- Citation previews use the current theme: dark surface `#1a1e23`, light `#fdfcf8`.
- First paint with CSS and fonts held 1.5s and a saved Dark choice: the first painted frame is dark, with moon and right position and 0 transitions.

| Engine | Theme checks | Notes |
|---|---|---|
| Chrome | 36/36 | — |
| Firefox | 36/36 | Including slow-CSS first paint: dark, 0 transitions (the M1 regression check). |
| WebKit | 35/36 and 32/36 in two runs after the final theme change | **Passes:** single icon, positions, homepage slide (11 intermediate frames), keyboard, persistence, cross-tab, synthetic bfcache, reduced motion, headers, and **0 load-time transitions** in every load (including slow CSS; 1 before `data-animate`). **Failures, all from engine timing, not switch state:** (a) on the question page the slide showed 7 and then 0 intermediate frames, and in one run the thumb was still mid-slide (x = 31 of 36) 300ms after Space, because of the recolour cost in §8; (b) the slow-CSS screenshots came back unpainted black (0,0,0), not light, so first paint could not be confirmed from pixels in WebKit. |

## 7. Size, links and validation

| | main `aee1217` | UI-4A |
|---|---|---|
| JS bundle (all pages) | 19,746 B (6,395 gzip) | 24,228 B (7,709 gzip): +4.5 KB, +1.3 KB gzip |
| CSS | 50,642 B (8,942 gzip) | 52,221 B (9,174 gzip) |
| All HTML (96 pages) | 5,600,529 B | 5,694,419 B (+93,890) |
| `what-is-man` page | 222,060 B (39,572 gzip) | 226,953 B (40,228 gzip) |

The HTML growth is the `data-source` attributes on the 28 question pages (about 84 KB) plus about 110 B per page for the switch's moved markup and its slightly longer inline script.

Links are unchanged at **11,337**: the preview's links are created at runtime.

| Command | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers. |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing). |
| `npm run build` | 96 pages. |
| `git diff --check` | Clean. |
| `audit-inventory.mjs` | 168 answers, 2,838 citations, 0 unledgered ESV. Its CRLF-only rewrite of `research/` was reverted as usual. |
| `check-built-links.mjs` | 11,337 links, 0 broken, 0 duplicate IDs, 0 outside base. |

`git diff main -- src/content research docs/ESV-QUOTATION-LEDGER.md` is empty.

## 8. Known limitations

- **WebKit (Windows Playwright) recolour cost.** A theme change needs 75–160ms before WebKit's next frame on the large question pages, against 1–3ms in Chrome and Firefox. This is a whole-page restyle, unchanged by this PR. The 200ms slide is therefore partly elapsed by its first visible frame: measured runs show it already 40–90% done. The homepage slide is smooth.
  - Real Safari on macOS was not available and should be checked at release.
  - **Review fix (M1):** a press now holds the thumb in place for the recolour frame and slides it in the next, so the whole slide is drawn (`docs/ui/UI4A-REVIEW.md` §5).
- **bfcache:** no engine restored a page from the back/forward cache under Playwright. The restore path was exercised with a synthetic persisted `pageshow`.
- **Screen readers:** not tested with a real screen reader. Accessibility was checked through roles, names, states and focus.
- **`displayCitation` overrides:** none are registered, so that branch is covered by construction only.
- **Popover API:** a browser without it (Safari before 17, Firefox before 125) keeps plain citation links.
- **Hover previews:** none.
- **Preview position:** fixed relative to the marker at opening. A disclosure toggled elsewhere while it is open does not move it, but the press that toggles a disclosure closes the preview anyway.

## 9. For the independent review

Focus on:

1. Metadata and exact locators. The structural and all-markers checks are the producer's; an independent recomputation is worthwhile.
2. Moved markers in Compare and Case.
3. Focus restoration.
4. View full reference and the backlinks, including no-JS.
5. Phone clipping and sticky labels.
6. Homepage switch placement.
7. Exactly one icon, and the user-triggered slide.
8. No load-time slide, especially Firefox and slow-CSS WebKit.
9. Persistence and cross-tab.
10. Reduced motion.

## 10. Screenshots (`docs/ui/screenshots/ui4a/`)

| File | What it shows |
|---|---|
| `desktop-light-preview.png` | Explore, Naturalism · What is man?, cite 32, Light. |
| `desktop-dark-preview-compare.png` | Compare Judaism/Islam, Dark. The preview opens beside a marker near the right edge, below the sticky column selectors. |
| `mobile-preview-compare.png` | 390px stacked Compare, Light, under the sticky worldview label. |
| `mobile-preview-long-title.png` | 320px, the longest bibliographic title. |
| `home-light-toggle.png` / `home-dark-toggle.png` | Homepage header: sun in the thumb on the left, then moon on the right. |
