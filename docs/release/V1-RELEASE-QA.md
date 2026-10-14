# V1 Release QA — Integrated verification and readiness

**Branch:** `release-qa-integration`. **PR:** "Release QA: Integrated verification and V1 readiness" (not merged).
**Date:** 2026-10-14. **Session:** one fresh Claude Opus 5.5 top-level session, no subagents. **Policy:** `docs/ui/REVIEW-STRATEGY.md` (final release QA tier).

## 1. Executive release assessment

**Technical readiness: release-ready, subject to the independent audit.**
- Two IMPORTANT defects were found and fixed:
  - **WebKit reading-state loss** on Back between question pages (I1).
  - **Six silently dropped citation notes** (I2).
- Five MINOR defects (M1–M5) were fixed. No BLOCKER was found. No IMPORTANT defect remains open.

**The corpus and citations are intact:**
- All 168 answers and 2,838 citations are unchanged.
- Every citation → reference → backlink round trip resolves.
- The live site is byte-identical to `main`.

**Overall recommendation: HOLD (conditional).** Two things stand between this build and an unconditional GO:
- **RG-1, the ESV publication-rights gate.** It is unresolved, and the site is already public.
- **The independent Codex audit** of this work, which the release plan requires before final approval.

Real screen-reader and real Safari/iOS testing were **not performed** (RG-3). They are listed as external actions, not as passes.

## 2. Baseline and final SHAs

| | SHA |
|---|---|
| Baseline (`main`, merge of PR #38, UI-4D) | `e57f40f82c02c72dd54de44d6ddbf2ac5fa0ddf2` |
| Fix commit | `cbcbbd6` |
| Release record | `3d51f91` |
| Final head | the commit "Release QA: record SHAs" that writes this table (its SHA is in the PR description) |

UI-4D and all its independent-review fixes are on `main`:
- `5b0d6be` is the feature.
- `58a5e81` holds the review fixes (I1, I2, M1–M4).
- `7e15e3f` records the review SHAs.
- `e57f40f` is the merge.

A clean `npm ci`, validate, check and build of `e57f40f` reproduced every baseline count (§19).

## 3. Test environment

| Item | Version |
|---|---|
| OS | Windows 11 Pro 10.0.22631, 16 GB |
| Node | 24.13.1 locally; CI and deploy run Node 24 (deploy run: 24.21.0) |
| Chrome | 155.0.8059.40 (system Chrome via Playwright `channel: 'chrome'`, headless) |
| Firefox | Playwright Firefox 144.0.2 (build 1497) |
| WebKit | Playwright WebKit 26.0 (build 2227, Windows). **Not real Safari** |
| Playwright | 1.57.0 |
| axe-core | 4.10.3 |
| Lighthouse | 12.8.2 (mobile form factor, default simulated throttling) |
| Screen readers | **None available** (no NVDA or JAWS installed; VoiceOver needs macOS/iOS) |

**How the builds were served:**
- Local builds were served by a static server that strips the `/worldviews-examined` base path.
- The server applies no compression. That matters for the local timing in §13.
- Engines ran serially. No subagents were used.

## 4. Risk-based test plan (written before testing)

**Highest-consequence risks for an integrated V1:**
1. **Reading state:** history writes lost or misdirected (the known WebKit report).
2. **Citations:** lost, renumbered or broken; backlinks not returning to the claim; notes or locators dropped.
3. **Reading modes:** an answer misattributed, copied or lost across Compare/Case pairs.
4. **Sources:** hidden by a filter, the library, pagination or closed disclosures.
5. **Production:** not what `main` builds; base-path or asset failures.
6. **Accessibility:** keyboard, focus, contrast and assistive-technology regressions across the whole site.
7. **No-JavaScript and failure paths** leaving scholarship unreadable.
8. **Publication rights:** the ESV gate.

**Plan and rationale:**

| Layer | Coverage | Why |
|---|---|---|
| Deterministic, whole corpus | All 2,838 citations, 2,464 entries, 168 answers, 224 library sources; all 96 pages' metadata | Cheap, and a failure anywhere is consequential |
| Structural mode matrix (Chrome) | 28 questions × 30 ordered Compare pairs + 28 × 5 Case opponents = **980 states** | The DOM-moving coordinator is a shared system (escalation trigger 1); this is cheap in one engine |
| Representative journeys, 3 engines | History (11 + 7 scenarios), citation round trips (34), no-JS (96 pages) + 10 failure modes, keyboard, theme, print, responsive | Browser-sensitive behaviour: history, focus, native controls, print |
| Regression | UI-4D's independent suites (162 + 8 checks per engine) and its registry integrity script (5,205 checks) | The library's reviewed behaviour must survive the history fix |
| Production | All 118 deployed files compared byte for byte; 13 live routes × 3 engines; Lighthouse | The live site is public |

**Representative cases** (from `REVIEW-STRATEGY.md`):
- Christianity/Naturalism on *What is man?*; Christianity/Islam and Judaism/Islam on *Revelation*; Hindu/Buddhist on *What ultimately exists?*; Naturalism/Buddhism on *What is evil?*.
- Christian Case against all five opponents on four different questions.

**Expected runtime:** about 2–3 hours of browser time, run serially. The investigation of findings took longer.

**Coverage intentionally not run:**
- Full 980-state matrices in Firefox and WebKit. The Chrome matrix is structural, and engine-sensitive behaviour is covered by the journeys.
- Screenshot collections across every width, theme and engine. Overflow, clipping and target size are asserted instead, with a handful of screenshots inspected.

## 5. V1 acceptance criteria (`DESIGN-SPEC-V1.md` §10)

| # | Criterion | Status | Evidence |
|---|---|---|---|
| 1 | Reach one of the 28 questions promptly from the homepage | **Verified pass** | Homepage → four starting questions and *Explore Questions* (28, by domain); keyboard Tab order; live routes |
| 2 | See and distinguish all six claims at a glance | **Verified pass** | Six named thesis cards per question; 3×2 / 2×3 / 1-column layouts at 1280/768/320 |
| 3 | Reveal substantial positive explanation with one interaction | **Verified pass** | One toggle opens an answer's view and strengths (keyboard: Enter, all engines) |
| 4 | Reach the Christian critique within two interactions | **Verified pass** | Open answer (1) → Examine (2); or Christian Case (1), whose Christian response stage is shown open |
| 5 | Compare any two traditions on desktop or mobile | **Verified pass** | 840 ordered pairs structurally correct; mobile stacked at 320/390 with no overflow |
| 6 | Open Christian Case against any other worldview | **Verified pass** | 140 question × opponent states structurally correct; all five opponents in round-trip journeys |
| 7 | Inspect a citation without losing place, and access the full reference | **Verified pass** | Preview → full reference → backlink in Explore/Compare/Case, 3 engines (34/34 each) |
| 8 | Share and restore mode and viewpoints via URL | **Verified pass** (after I1 fix) | Shared Compare/Case URLs; Back/Forward in 3 engines; WebKit failed before I1 |
| 9 | Navigate with keyboard / assistive technology | **Keyboard: verified pass. Assistive technology: not tested** | Keyboard journeys (Chrome/Firefox 16/16; WebKit activation checks); accessibility tree checked; no screen reader available (RG-3) |
| 10 | Read and print with citations without JavaScript | **Verified pass** | All 96 pages without JS, 3 engines; print checks 7/7 in 3 engines |
| 11 | No stale research-phase or placeholder notices | **Verified pass** | Public pages inspected; the C4 template edits stand. A stale validator console message, not public, was fixed (M4) |

## 6. Reading-mode results

**Structural matrix (Chrome; the popstate path, which is also the Back/Forward path).** 980 states, **0 failures**. For every state:
- Each cell holds only content owned by its worldview's answer (tagged before the run), and the cell's `data-worldview` and visible label match.
- No third worldview's content enters the region.
- Selects show the pair. The case select offers exactly the five alternatives.
- Citation and reference counts are unchanged, and the page has no duplicate ids.
- Christian Case placement:
  - The alternative's *Christian response* and *Pressure questions* sit in their stages, labelled "From the X answer".
  - Christianity's *Strongest objection* and *Christian reply* sit in "Objections to the Christian account".
  - The alternative's *The view* and *What this explains well* sit in "Understand the alternative".
- After the whole matrix, returning to Explore restores **all six answers byte-identically**, leaving no placeholder comments or heading prefixes.

**Control-driven pass:** selects, swap, opponent select, and Back twice on five questions all passed.

**Explore (3 engines):**
- open and close, Open all / Close all, Expand/Collapse sections;
- a fragment into a closed answer and a closed Examine;
- a same-fragment link after closing the answer;
- citation previews.

**Compare and Christian Case:**
- shared URLs, including a fragment into a closed Deep dive or Christian reply, stay in the mode and land;
- a fragment into an unshown answer switches to Explore and lands;
- invalid or repeated values (UI-2/UI-3 rules) are canonicalised (structural matrix plus no-JS fallback).

**Sticky attribution:** no sticky elements overlap at any width (§10).

## 7. Source and citation integrity

**`scripts/check-citations.mjs`** (new; Node only) derives every expectation from the `<Cite>` tags and the registry:

| Measure | Result |
|---|---|
| `<Cite>` tags = markers, in order, with occurrence ids | **2,838 = 2,838** |
| Reference entries (distinct source + locator per answer) | **2,464**, page-wide numbering, `start` correct |
| Backlinks: one per use, each to its own marker | **2,838** |
| Exact locator text; marker label "Source n: …, locator" | all |
| Distinct notes shown | **191** checks (after I2; baseline: 6 missing) |
| External link = registered URL; no invented URL | 2,410 entries with a URL; **54 without, none invented** |
| Every cited source `checked` and present in the library | all; **224** library entries |

**Full and short forms:** the first entry of a source in each answer's list carries the full citation (1,222 first occurrences), and later entries the short form. `cite-preview` always shows the full form.

**Round trips:** claim → preview (exact locator) → *View full reference* → backlink → exact claim. **34/34 in Chrome, Firefox and WebKit.** The cases covered:
- Explore with the Sources filter hiding the destination: the filter switches to that worldview, and the reading mode is unchanged.
- Compare with a moved answer.
- Christian Case against Naturalism, Judaism, Islam, Hindu traditions and Buddhism.
- A closed answer with a closed Examine.
- A fragment already in the address bar.
- Back from Explore to Compare after a filter change, revisiting the UI-4C I1 `popstate` path.

**Question Sources filter:** All shows every group in all three modes. A hidden reference reveals its group without changing the mode. Print and no-JS show every reference.

**Global Sources Library:**
- The UI-4D reviewer's independent scripts were re-run on the release build:
  - Registry integrity: **5,205 checks, 0 failures**. This covers 224 checked sources, no duplicates, tags, types, citing-question counts and links, byte-identical citations, and no invented URLs.
  - Browser suite: **162/162** in Chrome and Firefox. WebKit scored 161/162 on a first run that ran concurrently with other work; the failing check was not captured in the truncated log and did not reproduce in a full rerun (162/162).
  - Cross-feature regression: **8/8** in each engine.
- **Final library code (after M1):** Chrome 162/162 and WebKit 162/162. M5 changes only forced-colours CSS.
- The suites cover:
  - search normalisation, multi-tag and type filters, deterministic sort and pages of 25;
  - direct `#source-` links, including under incompatible filters;
  - reload, Back/Forward, legacy `#tradition-` anchors, no-JS and failure recovery;
  - the UI-4D Firefox and WebKit history fixes.
- **New:** with `sessionStorage` blocked, Sources (Naturalism p2) → citing question → Back now restores the library in WebKit. It failed on the baseline, which depended on the UI-4D `sessionStorage` workaround (§8).

## 8. Known-defect investigation: WebKit reading-state corruption (I1)

**Reproduced on the baseline** in Playwright WebKit (`scratchpad hist.mjs`, `hist2.mjs`):

| Scenario | WebKit baseline | Chrome / Firefox baseline |
|---|---|---|
| Explore: open answer + Examine → another question → Back | **lost** (state `null`, answer closed) | restored |
| Explore → Method / Sources / thinkers / worldview → Back | restored | restored |
| Compare with open section → another question → Back | **lost** (mode kept from the URL; sections closed) | restored |
| Explore → Compare → section → question → Back, Back | **both entries lost** | restored |
| Q1 (answer A) → Q2 (answer B) → Back → Forward | **both lost** | restored |
| Sources (Naturalism p2) → question → Back, `sessionStorage` blocked | **lost** | restored |
| Christian Case opponent → Method → Back | restored (the opponent is in the URL) | restored |

**Event sequence logged in WebKit** (history methods wrapped on `History.prototype`; log kept in `sessionStorage`):

```text
/what-is-man/:  replaceState({"explore":{"open":["christianity"]}})        ← reader's change, saved at once
/what-is-man/:  pagehide state={"explore":{"open":["christianity"]}}
/what-is-man/:  replaceState(same) [IN PAGEHIDE]                           ← harmless going forward
/why-do-we-die/: pageshow state=null
/why-do-we-die/: pagehide state={"explore":{"open":["christianity"]}}       ← Back: history.state is already the RETURNING entry's
/why-do-we-die/: replaceState({"explore":{"open":[]}}) [IN PAGEHIDE]       ← written onto the entry being returned to
/what-is-man/:  script start state=null, pageshow state=null               ← that entry's state is gone
```

**Cause:**
- `answer-panels.ts` (`pagehide → saveState`) and `modes.ts` (`pagehide → saveLevels`) re-save on leaving.
- During a traversal, WebKit has already made the destination entry current when `pagehide` fires on the departing document. The departing page's `replaceState` destroys the destination entry's state.
- Only pages with such a writer cause it, which is why Method, Sources and thinker pages are harmless, while Back from any question page is not. No `popstate` or `hashchange` is involved. Playwright WebKit reported `persisted=false` (no back/forward cache).

**Why removing the writes is safe:** every change is already saved when it happens:
- answer open/close → `scheduleSave` (microtask);
- any `<details>` toggle inside answers → saved;
- `hashchange` → saved;
- mode-level toggles → `saveLevels` (microtask);
- `navigate()` saves before and after pushing.

The `pagehide` re-save added nothing in Chrome or Firefox.

**Fix (`cbcbbd6`):** remove both `pagehide` writers. This is no new storage mechanism. The UI-4D library `sessionStorage` copy is kept unchanged as a defensive guard, and only its comment was updated.

**After the fix:**
- History scenarios: **11/11 and 7/7 in WebKit, Chrome and Firefox** (baseline WebKit 9/11 and 1/7).
- Forward restoration, hash hops and reload are covered.
- The library's own restoration passes with and without `sessionStorage`.
- `scripts/release-smoke.mjs` fails on the baseline build in WebKit, on exactly these two checks, and passes on the fix.

**Residual risk:**
- **Real Safari was not tested.** Its back/forward cache usually restores the live page, which masks the visible loss. The fix removes the write in either case.
- **The library's `sessionStorage` copy** remains per tab, not per entry, as documented in UI-4D.

## 9. Accessibility (target WCAG 2.2 AA)

**Automated (axe-core 4.10.3; WCAG 2.0/2.1/2.2 A+AA tags).** Twelve states were scanned in Light and Dark, in Chrome:
- home, Questions, a question with all answers and sections open, a citation preview open;
- Compare with both open, Christian Case;
- a worldview, a thinker, the thinkers index;
- the library filtered with a disclosure open, the library with no results;
- Method.

**Results:**
- **0 violations** except `target-size` on adjacent inline citation superscripts.
- Those markers sit in sentences, which is WCAG 2.5.8's *inline* exception. They are recorded as observation O4, not a failure.
- axe's "needs review" items were each resolved by hand:
  - **Contrast:** checked by computation (below).
  - **`aria-prohibited-attr`:** the answer `<footer aria-labelledby>` (O1).
  - **`aria-valid-attr-value`:** `aria-controls="cite-preview"` while the popover is open, which points to an existing element and is correct.

**Contrast, computed:**
- Every visible text element on 10 page types, about 9,500 elements per theme.
- Foreground alpha was blended over the nearest opaque ancestor background.
- AA thresholds by size and weight: **0 below AA in Light or Dark**, including the worldview accent labels.

**Keyboard (journeys in `kbd.mjs`):**
- **Chrome and Firefox 16/16:**
  - the skip link is the first Tab stop, visible and moves focus to `main`;
  - answer toggles: Enter opens and focus stays;
  - a citation marker: Enter opens the preview with focus inside, Tab cycles Close → source link → *View full reference*, and Escape closes it and returns focus to the marker;
  - the Compare mode link: Enter switches, and focus stays on the mode link with `aria-current`;
  - keyboard changes to the Compare and Case selects;
  - no keyboard trap: Tab from the top reaches the site footer;
  - library search, with the result count announced in the live region;
  - Next turns the page and moves focus to the count;
  - a visible focus ring at every step (the theme switch draws its ring on its track).
- **WebKit:**
  - Playwright's Windows WebKit never puts links in the Tab order (Safari's default "Press Tab to highlight each item" is off), even with Alt+Tab.
  - Button, select and input steps passed. Links were focused programmatically to test activation: the preview opened, Tab cycled, and Escape returned focus.
  - **WebKit link Tab order is untested** (the platform default; see RG-3).

**Semantics, from the accessibility tree and the reviewed records:**
- landmarks (banner, navigation "Main", main, contentinfo, search "Sources", navigation "Pages of sources");
- one `h1` on every page and no heading-level skips on any of the 96 pages;
- breadcrumbs as a labelled navigation;
- disclosures with `aria-expanded`; the theme control is a `switch` with `aria-checked`;
- the preview is a `dialog` labelled by its heading;
- hidden panels (`hidden="until-found"`) are excluded from the tree;
- the reading-mode controls use `aria-current`.

**Other checks:**
- **Reduced motion** (§11): no running animations or transitions, and no smooth scroll.
- **Touch targets:** every control is at least 24×24 at all widths; header, mode, select, search and page controls are 44px tall.
  - The question Sources filter's "All" option is 16×44. It passes 2.5.8 through the spacing exception (a 16px gap) but misses the spec's "ideally 44×44" (O3).
- **Forced colours (Chrome emulation):**
  - Controls, borders, focus rings and the preview all remain visible.
  - **Found and fixed (M5):** every navigation, mode and filter link painted the same underline, so the current page, mode and filter could not be told apart. Now only the current one keeps it.

**Not tested:**
- NVDA, JAWS, VoiceOver and TalkBack (none installed);
- real touch devices; real Windows High Contrast (emulation only);
- browser text-only zoom (viewport-equivalent widths were used).

**Manual checklist for real assistive technology (RG-3), NVDA + Firefox/Chrome, and VoiceOver + Safari on macOS and iOS:**
1. On *What is man?*, the headings list shows the question `h1`, the overview, "Full answers" and six answer headings. Each answer is announced as a collapsed or expanded button.
2. Open Naturalism. Move to a superscript: "Source 32: Russell, What I Believe, ch. 1, link, has popup dialog". Activate it: the dialog is announced with its heading. Escape returns to the superscript.
3. *View full reference* lands on the entry, and the ↩ "Back to citation 32 in the text" returns to the sentence.
4. Switch to Compare, then Christian Case, from the mode links. The current mode is announced. Change the opponent with the select. Each stage heading names its worldview ("Classical Islam answer: Christian response").
5. In `/sources/`, type a query: the live region announces "N sources, page 1 of M". Change Worldview and Type. Use Previous/Next and the page buttons. Open "Cited in N questions".
6. Toggle the theme switch: "Dark mode, switch, on/off".
7. On iOS Safari: rotor navigation by headings and links, and double-tap on markers. On macOS Safari with "Press Tab to highlight each item" enabled, Tab reaches links in order.

## 10. Responsive and visual results

**Assertions:** 9 page types (home, Questions, a long question with answers open, Compare with every section open, Christian Case with every disclosure open, a worldview, a thinker, Sources with every visible disclosure open, Method). They ran at 320, 390, 640 (200% zoom of 1280), 768 and 1280 px, alternating Light and Dark, in **Chrome, Firefox and WebKit**:
- **No horizontal scroll and no clipped element** in any of the 135 page-width-engine states.
- **No overlapping sticky elements** after scrolling to mid-page: the answer heading, the Compare/Case labels and the Case navigation.
- **Every control at least 24px** except O3.

**Visual inspection** (screenshots, not committed):
- 320 Dark Compare: the compact header and theme switch work; the pickers stack.
- 1280 Dark Christian Case: two theses, stage navigation.
- 768 Dark Sources: controls in one row; long citations and diacritics wrap.
- 1280 forced colours.

The editorial hierarchy matches UI-4B, and no settled preference was reopened.

**Layout shift:**
- **Sources Library: CLS 0.158 on every load** (the list dropped 239px when the controls appeared). Fixed by M1, and measured at 0 on repeated runs.
- Other pages: CLS ≤ 0.002 (Lighthouse).

**Fonts:** the Latin faces are preloaded, and the theme is applied before the stylesheet arrives (§11). No first-render animation (§11).

**400% zoom:** 320px stands in for it. No two-dimensional scrolling was found.

## 11. Theme and motion

Run in Chrome, Firefox and WebKit: **11/11 each.**
- **Before any choice:** the page follows the system Light or Dark setting. There is exactly one icon (sun on the left, moon on the right), no animation on load, and nothing is stored.
- **A press:** the thumb slides (the only animation), stores the choice, and shows one moon.
- **Another tab** follows at once without animation (`storage` event).
- **The choice persists** on question, Compare, thinker, worldview, Method and Sources pages without first-load animation.
- **A saved Dark** is applied while the stylesheet is still blocked: `data-theme="dark"` and `color-scheme` are set before CSS arrives, so there is no light flash.
- **Storage unavailable:** the page follows the system, and the switch still toggles the current page.
- **Reduced motion:** no running animations or transitions, and no smooth scrolling.
- **Printing in Dark:** light paper and dark text, with the switch hidden.

## 12. No-JavaScript and failure recovery

**JavaScript disabled, all 96 pages, in Chrome, Firefox and WebKit (110/110 each):**
- No interactive control is visible.
- No mode region is shown.
- Every question page shows all six answers open and every reference.
- `/sources/` shows all 224 entries and the Crossway notice.
- Native disclosures open.
- A citation link reaches its reference.
- A Compare URL falls back to all six answers.

**Failures with JavaScript on (each in 3 engines):**

| Failure | Result |
|---|---|
| Client script blocked | After the 4s safety timer: six answers open, every reference shown, no mode regions; the library shows 224 |
| Script delayed 6s | The reader's text stays open (the late path) |
| `localStorage` unavailable | The page enhances normally; the theme switch works for the page |
| `sessionStorage` unavailable | The library filters and pages |
| Popover API absent | The citation stays a working link to its reference |
| Mode controller throws part-way into Compare | The page falls back to Explore: URL canonicalised, no placeholders left, every reference shown |
| Source filter loses its controls' data | Fails open: every group shown |
| Library runtime error during a filter change | Fails open: 224 entries shown |

**Print** (print media plus the browser's `beforeprint`, 3 engines, 7/7):
- Explore with every answer closed and a filter set prints every section, citation and reference, with no controls.
- Compare and Case print their two answers and every reference.
- No-JS prints everything.
- The screen state (closed answers, filter) returns afterwards.

## 13. Metadata and SEO

**Built HTML (all 96 pages):**
- **96 unique titles and 96 unique descriptions.** Two question descriptions are the short registered summaries ("What kind of being is a human person?"). They are meaningful, so they were left as they are.
- Every canonical is `https://simoncgoldstein.github.io/worldviews-examined/<route>/`. None points at the repository root.
- One `h1` per page, no heading skips, no `noindex`. The favicon resolves.
- All scholarly text is in the static HTML, so a crawler needs no script.

**Added (M2):**
- Open Graph and Twitter text tags on every page (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:url` = canonical, `twitter:card=summary`). No image, because the site has none.
- `sitemap.xml`: all 96 pages, generated from the content collections, and linked from every page's head.

**Robots:**
- A project site cannot publish `robots.txt`: `simoncgoldstein.github.io/robots.txt` is 404, which means "allow all".
- To use the sitemap, submit it in Search Console. No analytics were added.

**Shareable URLs:** mode URLs canonicalise to `?mode=compare&views=a,b` and `?mode=case&opponent=x` (§6). Their `<link rel=canonical>` is the plain question URL, which is appropriate, since the content is the same.

## 14. Performance

**Lighthouse 12.8.2, mobile, simulated throttling, against production:**

| Page | Perf | FCP | LCP | TBT | CLS | HTML (gzip / raw) | JS gzip | CSS gzip | Fonts | Requests |
|---|---|---|---|---|---|---|---|---|---|---|
| Home | 99 | 1.6 s | 1.7 s | 40 ms | 0.002 | 3.9 / 10.9 KB | 9.8 KB | 10.1 KB | 97 KB | 6 |
| Questions | 100 | 1.1 s | 1.5 s | 90 ms | 0 | 4.5 / 14.4 KB | 9.8 KB | 10.1 KB | 97 KB | 6 |
| Long question (*Revelation*) | 82 | 2.8 s | 2.9 s | 370 ms | 0 | 36.4 / 188.5 KB | 9.8 KB | 10.1 KB | 233 KB | 9 |
| Compare (*What is man?*) | 82 | 2.4 s | 2.7 s | 450 ms | 0.002 | 40.8 / 222.2 KB | 9.8 KB | 10.1 KB | 233 KB | 9 |
| Sources | 78 / 96 | 2.1 / 2.0 s | 2.4 s | 630 / 0 ms | 0.089 / 0.031 | 52.8 / 522.8 KB | 9.9 KB | 10.2 KB | 233 KB | 9 |
| Thinker (Calvin) | 88 | 1.6 s | 1.9 s | 450 ms | 0 | 5.2 / 16.0 KB | 10.0 KB | 10.1 KB | 148 KB | 7 |

Every page scored 100 for accessibility, best practices and SEO in Lighthouse.

**Notes on the measurements:**
- **Sources first run:** it scored 19, with TBT 10.4 s and 26 s of main thread. That **did not reproduce** in two later production runs (78 and 96), nor under real 4× CPU throttling in Chrome (TBT 132–237 ms, about 1.5 s of style and layout). It is treated as an outlier from machine contention.
- **Local runs:** builds are served uncompressed locally (FCP 4.7 s), so local timings are not representative. Locally, the fixed build's CLS is 0 against the baseline's 0.031.
- **bfcache:** the audit "failure" on question pages is Lighthouse's "Internal error, not actionable".

**Trade-offs (recorded, not changed):**
- **Shared JavaScript.** One module of 30.9 KB raw / 9.9 KB gzip is executed on every page. The library code returns at once on other pages. Splitting it would add a request to save about 2 KB, so it was left.
- **Long pages:** 2,300–2,700 DOM elements (all six answers in HTML, the static-first design) and simulated mobile TBT of 370–450 ms. `content-visibility` was not attempted, because it would interact with fragment landing and find-in-page.
- **Fonts:** up to 233 KB where diacritics pull in extended subsets (unicode-range, on demand). The two Latin faces are preloaded.
- **Sources HTML** is 523 KB raw / 53 KB gzip, because the full registry is static (the no-JS requirement).
- **Cache:** GitHub Pages sets `max-age=600` on HTML and on hashed assets alike, with ETags. A deploy replaces the hashed assets. A reader holding HTML less than 10 minutes old may briefly get the no-JS fallback, or unstyled text, until a refresh. This is low risk and not fixable on Pages without a custom domain or CDN (O6).

## 15. GitHub Pages deployment (production)

**Actions:** "Deploy to GitHub Pages" run `38614876461` for `e57f40f` **succeeded**:
- `actions/setup-node@v4`, `node-version: 24` → Node **24.21.0**;
- 96 pages built; deployment created for `e57f40f`.

CI (`ci.yml`) on PR #38's head succeeded.

**Live site = `main`:** all **118** files of a local build of `e57f40f` (96 pages, the favicon, `_astro` assets and fonts) were fetched from production. **118/118 are byte-identical** with no 404s, so there is no version mismatch.

**Routes:**
- No trailing slash → `301` to the slashed URL.
- An unknown question → `404` (GitHub's default page; O5).
- `sitemap.xml` is 404 on production until this PR deploys.

**Live browser smoke** (13 routes × Chrome/Firefox/WebKit, **13/13 each**):
- home, Method, Questions, a question, a shared Compare URL, a shared Case URL;
- Worldviews, a worldview, Thinkers, a thinker, Sources, a deep-linked `#source-` on page 9, and an unslashed question URL.
- Styles and web fonts load (no font errors), scripts initialise, modes open as named, the source lands, and there are no HTTP or page errors.

**Production versus local:** the WebKit reading-state loss (I1), the dropped notes (I2), the library shift (M1) and the forced-colours marker (M5) are **live on production today**. Their fixes reach production only when this PR is merged, because every push to `main` deploys.

## 16. Scholarly audit reconciliation

**The required substantive audit was completed and recorded:** `research/final-audit/` (PR #15, 2026-10-07).
- It read all 168 answers and reported **0 BLOCKER / 28 IMPORTANT / 54 MINOR** findings against the corpus *as it then was*.
- Those counts are historical. The report is preserved for traceability, and they are not open findings.

**Remediation:** all 12 planned batches were delivered and independently reviewed:

| Plan batch | Delivered as | Review |
|---|---|---|
| R1 gospel centre | PR #16 | R1-REVIEW: MERGE |
| R2 Reformed anthropology | PR #17 | R2-REVIEW: MERGE |
| R3 natural prose (M&E, S&D) | PR #18 | R3 reviews A and B: MERGE |
| R4 Islam | PR #19 | R4-REVIEW: MERGE |
| R5 pressure-question symmetry | PR #20 | R5-REVIEW: MERGE |
| R6 theses / disclosure | PR #21 | R6-REVIEW: MERGE |
| R7 Hindu + R11 Buddhist | C1, PR #22 | C1 reviews (Hindu, Buddhist): MERGE |
| R8 Judaism | C2, PR #23 | C2-REVIEW: MERGE |
| R9 naturalism | C3, PR #24 | C3-REVIEW: MERGE |
| R10 + R12 editorial, citations, ESV, registry | C4, PR #26 | C4-REVIEW: scholarly and technical approval; **publication not authorised pending ESV** |

**C4's current-state checklist (§3) reconciles every audit ID against the corpus.** Each item is one of:
- resolved;
- accepted with a link or a scope disclosure;
- recorded as optional future research (C4 §23).

C4 §24 lists **no scholarly blocker**. Its open items are the ESV gate (RG-1) and two user decisions:
- seven unprofiled registry thinkers, whose pages show no placeholder;
- optional research.

**Current inventory, verified:**

| Item | Count |
|---|---|
| Answers / questions / worldviews | **168 / 28 / 6** |
| Thinkers | **56** |
| Registered / checked and published sources | **236 / 224** |
| Citations / question bibliography entries | **2,838 / 2,464** |
| ESV ledger | 103 rows, 872 words, 177 verse charges, 0.64% of answer prose; audit: 104 candidates, **0 unledgered**, 0 orphan rows |

**Content preservation:**
- `src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` are **unchanged** against the baseline.
- `audit-inventory.mjs`'s line-ending-only rewrites were restored.
- I2 changes how six reference entries render (notes added), not the corpus. No theological assertion or quotation was introduced.

## 17. Release-gate register

| ID | Gate | Status | Owner |
|---|---|---|---|
| **RG-1** | **ESV publication rights** | **Unresolved; current, because the site is public** | User / publisher |
| RG-2 | Independent Codex audit of the integrated product and this QA | Pending, by design | Next session |
| RG-3 | Real assistive technology and real Safari/iOS testing | Not performed; checklist in §9 | User or tester with devices |

### RG-1 evidence

**What the repository records:**
- **Crossway's standard digital terms**, checked 2026-10-05 and unchanged on 2026-10-12 (`docs/SOURCES.md`):
  - up to 500 verses;
  - no more than half of any book;
  - quotations under 25% of the work;
  - no Creative Commons licensing or translation;
  - **excludes "commentary or other biblical reference works."**
- **The site's use** (ESV ledger, C4 reconciliation): 103 quoted fragments, 872 words, 177 conservative verse charges, at most 30 in one book (Romans), 0.64% of answer prose, at most 7.80% for one answer. **It is numerically far inside the limits.**
- **The public notice:** `/sources/` prints Crossway's prescribed notice, ending "Used by permission. All rights reserved."
- **What is not in the repository:** no written permission from Crossway, no publisher confirmation of the site's category, and no recorded user decision. A search of the repository and its commit history found none. C4-REVIEW: "ESV publication: **not authorized by anything on record**."

**The exact unresolved question.** Does a public comparative-worldview reference site, which quotes short ESV fragments inside theological argument, fall within Crossway's standard allowance? Or is it a "commentary or other biblical reference work" that needs written permission? Until that is settled, the notice's "Used by permission" is accurate only on the first reading.

**Paths to resolution (the user's decision):**
1. Ask Crossway for written confirmation or permission, citing the ledger figures.
2. Replace direct ESV wording with references, or with a registered public-domain translation (KJV), after an explicit editorial decision and a controlled scholarly review. The ledger makes this mechanical.
3. Withdraw the Pages deployment until 1 or 2 is done.

**Release QA changed no quotation and switched no translation. The site is not presented as fully cleared for public distribution.**

## 18. Documentation changes

- **`README.md`:**
  - The corpus is complete (28 × 6, 168 answers), replacing "27 questions not yet written".
  - The three modes, citation previews, question source filters and the Sources Library are described.
  - The static-first architecture, the live URL and V1 status, including the ESV gate, are stated.
  - Build and validation commands, and the CI and deploy behaviour, are documented.
- **`docs/ROADMAP.md`:**
  - A dated current-status section has been added.
  - Status notes were added for Phases 4–7, which were superseded or completed.
  - The two Phase 2.1 items are closed with evidence.
  - The historical checklists are kept.
- **`docs/ARCHITECTURE.md`:** one paragraph on the UI-4 modules and the history-state rule (save on change, never on `pagehide`).
- **This record.**

## 19. Security and dependency findings

**Proportionate review of a static Pages site — no findings requiring change:**
- **DOM insertion:** the only `innerHTML` uses are two static literals (`answer-panels.ts` cue, `cite-preview.ts` shell). Preview text uses `textContent`, and its citation is a clone of build-time markup. Mode notices use `textContent`.
- **URL, query and fragment handling:**
  - Fragments resolve with `getElementById` after a guarded `decodeURIComponent`.
  - `mode`, `views` and `opponent` are accepted only as registered ids, and the URL is rebuilt from them (`parseQuery` / `urlFor`).
  - Malformed escapes and unknown ids are ignored.
- **Search text** is folded and compared with `includes`. No regular expression is built from user input, and nothing reaches HTML.
- **Source URLs** come only from the registry (no invented links; §7). External links carry `rel="noopener"` and open in the same tab, and none use `target="_blank"`.
- **Storage:** the theme key is whitelisted (`light`/`dark`). History and `sessionStorage` states are validated field by field (`savedState`).
- **Dependencies:** `npm audit` (production and full) reports **0 vulnerabilities**. No dependency was added or upgraded. The new scripts use the existing `yaml` and an optional, uninstalled Playwright.

## 20. Validation (final head)

| Check | Result |
|---|---|
| `npm ci` | clean |
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, **236 sources, 168 answers**; 168/168 present |
| `npm run check` | 0 errors, 0 warnings, 1 hint (the existing unused `thinkerById` in `scripts/audit-inventory.mjs`) |
| `npm run build` | **96 pages** (plus `sitemap.xml`) |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, **2,838 citations**; ESV candidates 104, **unledgered 0**, orphan rows 0 (line-ending rewrites restored) |
| `node scripts/check-built-links.mjs` | **11,804 links** (5,294 cross-page, 8,895 fragments, 2,725 external); **0 broken, 0 duplicate ids, 0 bad theme switches** |
| `node scripts/check-citations.mjs` | 2,838 / 2,838 / 2,464 / 2,838 backlinks, 191 notes, **0 failures** (baseline: 6) |
| `node scripts/release-smoke.mjs` | **23/23** in Chrome, Firefox and WebKit (baseline WebKit 21/23) |
| UI-4D suites on the final library code | Chrome 162/162, WebKit 162/162 |

**Differences from the expected baseline:** links 11,708 → **11,804** (+96). Each page's head now links `sitemap.xml`. Every other count matches.

## 21. Defects, fixes and remaining limitations

| ID | Sev. | Finding | Affected | On baseline | Fix / action | Retest | Residual |
|---|---|---|---|---|---|---|---|
| **I1** | IMPORTANT | Back between question pages lost Explore open answers and sections and Compare/Case open sections. The same `pagehide` write also wiped the Sources Library's state (masked by UI-4D's `sessionStorage` copy). Repro in §8 | WebKit (Playwright; likely Safari when the page is not restored from bfcache); all question pages | Yes (and live) | Removed the `pagehide` history writes (`answer-panels.ts`, `modes.ts`) | WebKit 11/11 + 7/7 (was 9/11, 1/7); Chrome and Firefox unchanged; smoke 23/23 | Real Safari not tested |
| **I2** | IMPORTANT | A repeated citation with a different note lost the later note. Six entries omitted translation or provenance qualifications: `islam/something-rather-than-nothing` src-5, `islam/order` src-6, `hinduism/one-and-many` src-5, `naturalism/knowledge-possible` src-1, `judaism/logic-binding` src-1, `islam/jesus` src-8 | All browsers, no-JS, print | Yes (and live) | `remark-citations.mjs` shows every distinct note on the shared entry (numbering and ids unchanged) | `check-citations.mjs` 0 failures (baseline 6) | The joined wording (e.g. "Arabic; our paraphrase; Arabic; our paraphrase, with Mujahid's words in our translation") is complete but repetitive. Whether to harmonise those MDX notes is a content decision for scholarly review |
| M1 | MINOR | Sources Library layout shift on load (CLS 0.158): the controls appeared above the list | All engines | Yes | Pre-script space for the controls (the existing `.js:not(.js-ready)` pattern) | CLS 0 on repeated runs; library suites pass | A script arriving after the 4s fallback still shifts (by design) |
| M2 | MINOR | No social-preview metadata or sitemap (Roadmap Phase 7) | All pages | Yes | Open Graph/Twitter text tags; `sitemap.xml` + `<link rel=sitemap>` | `meta.mjs`: 96/96 | No preview image |
| M3 | MINOR | README described only the flagship and said 27 questions were unwritten. The Roadmap and Architecture records were stale | Docs | Yes | Updated (§18) | — | — |
| M4 | MINOR | `npm run validate` printed "Incomplete coverage is expected until Phase 4" | Console | Yes | Removed | validate output | — |
| M5 | MINOR | In forced colours, every nav, mode and filter item showed the current-item underline | Windows High Contrast | Yes | Only the current item keeps it | Emulated forced colours: heights unchanged | Real High Contrast not tested |

**Observations, not changed:**
- **O1** The answer `<footer aria-labelledby>` is ignored: a footer inside an `<article>` maps to a generic role. The visible h3 "Further study" carries the structure, so nothing is lost.
- **O2** "Key thinkers" and "Sources and references" are named `<section>`s, so they are region landmarks. With all six answers open, that is 12 extra regions. This is noise for landmark navigation, not a failure.
- **O3** The question Sources filter's "All" option is 16×44. It passes 2.5.8 but not the spec's 44×44 ideal.
- **O4** axe reports `target-size` for adjacent inline citation superscripts. WCAG 2.5.8's inline exception applies, but adjacent markers are small on touch screens.
- **O5** There is no custom 404 page; GitHub's default page has no route back.
- **O6** HTML and assets are cached for 10 minutes (§14).
- **O7** In Chrome, a navigation to the current URL keeps the entry's `history.state` (reading state survives). This is expected.
- **O8** Seven registry thinkers have no biography. Their pages show no placeholder; this is a user decision (C4 §14).
- **O9** One unidentified transient WebKit failure (1/162) in the first UI-4D suite run did not reproduce.

## 22. Recommendation

**Technical readiness: GO, subject to the independent Codex audit.**
- No BLOCKER or IMPORTANT defect remains open.
- Every corpus-wide invariant holds:
  - 168 answers, 2,838 citations, 2,464 references and 224 library sources are intact and navigable;
  - the three modes are correct across all 980 Compare and Case states;
  - every page is readable and printable without JavaScript;
  - the live deployment matches `main`.

**Release decision: HOLD** until:
- the ESV gate is decided (RG-1: Crossway's confirmation, conversion to references or KJV, or withdrawal);
- the independent audit is complete (RG-2).

Real screen-reader and Safari/iOS checks (RG-3) are strongly recommended before announcing the site. **Do not describe the site as fully cleared for public distribution until RG-1 is resolved.**

### Priorities for the independent Codex audit

1. **I1 fix:**
   - Confirm that no state change relies on a `pagehide` save.
   - In particular check: `beforematch`, print restore, `hashchange` across same-document entries, a `replaceState` rate limit, and a toggle in the same task as a link click.
   - Check WebKit and real Safari behaviour, including the bfcache.
2. **I2 rendering:** is showing all distinct notes on one entry correct scholarly practice, or should a differently-qualified use get its own entry? The latter would renumber six answers. Review the six joined notes.
3. **Re-derive the citation invariants independently.** Do not reuse `check-citations.mjs`. Challenge the full/short-form and URL rules.
4. **Reading-mode history** under rapid mode changes and rate limits; Back/Forward chains mixing hashes and queries; the library's `sessionStorage` guard now that its cause is gone.
5. **RG-1:** confirm that nothing in the repository constitutes permission, and that the record and the public notice describe the state honestly.
6. **Accessibility:** O1–O4, the forced-colours fix (M5), and the WebKit link Tab order on real Safari. Run the §9 checklist with a real screen reader if available.
7. **Performance:** reproduce the Sources Lighthouse outlier on production, and judge the long-page TBT, the font weight and the 10-minute cache trade-offs.
8. **Metadata additions:** the canonical and `og:url` agreement, sitemap correctness, and whether the mode URLs need their own canonical treatment.
