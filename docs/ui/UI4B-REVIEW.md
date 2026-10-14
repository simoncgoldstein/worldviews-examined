# UI-4B Independent Review

**PR:** #36 · **Issue:** #34 · **Base:** main `b0a0ebb` · **Reviewed head:** `2b1b00d`
**Reviewer:** one fresh Claude Opus 5.5 top-level session, no subagents, 2026-10-14
**Governing documents:** `AGENTS.md`, `docs/ui/REVIEW-STRATEGY.md`, `docs/DESIGN-SPEC-V1.md` (including the §2 amendment), `docs/ui/UI4B-EDITORIAL-SIMPLIFICATION.md`, `docs/ui/UI4A-REVIEW.md`, Issue #34 and the complete PR diff.

**Verdict: MERGE** (the user merges).
**Findings:** 0 BLOCKER, 0 IMPORTANT, 6 MINOR. All six are fixed on the branch.

## 1. Independent editorial and visual assessment

**Primary question:** has the pass made the site meaningfully cleaner, more authoritative and easier to read, without removing necessary intellectual or navigational context? **Yes.**

I judged this from my own renders of main `b0a0ebb` and the PR build, served side by side, not from the implementation report.

**What reads better:**
- Headings now carry the pages. The tracked-caps kickers, numbered eyebrows, counters and one-line captions that sat under almost every heading are gone.
- Question pages open straight from the title into the mode switch. The removed summary subtitles were paraphrases. For example, "What is man?" was followed by "What kind of being is a human person?". The summaries remain as meta descriptions.
- The tone is now a scholarly publication rather than onboarding.

**What still carries the substance:**
- Every attribution device: Compare picker labels, sticky per-passage labels, "From the X answer" labels, the Case stage titles and its condensed notes.
- Every factual qualification:
  - Worldviews: "Comparison families, not claims of total internal uniformity."
  - Thinkers: not exhaustive; interlocutors are not representatives.
  - Worldview pages: the interlocutor note and the research-map note.
  - Sources: the verification claim and the ESV credit.

**One trade-off I checked deliberately:** the footer and homepage hero no longer say that the site "does not claim neutrality" or that rivals are presented "in forms their adherents could recognize".
- The standpoint itself is still stated in the hero and in every footer.
- Method → *Standpoint* still makes both commitments in full.
- That is an acceptable consolidation, not a loss.

## 2. Homepage: before and after

**Renders:** I rendered main and the PR in Chrome at 1280 Light/Dark, 390 Light and 320 Dark.

**Page height:**
- 1280px: 2,498px on main, 1,069px on the PR.
- 390px: 4,725px on main, 1,482px on the PR.
- These figures reproduce the producer's numbers.

**Is the reduction simplification or just compression?** It is simplification:
- Three sections were removed outright: domains, reading modes and reference.
- Nothing was squeezed into smaller type.
- The navigation that the removed sections offered is still available:
  - The domain gateways are on the Questions index, one click away.
  - Method, Worldviews, Thinkers and Sources are in both the header and the new footer nav.
  - The mode explanation is on Method.
- **Link change:** 27 homepage body links became 13. That −14 is part of the reconciled link count (§10).

| Check | Judgment |
|---|---|
| Title prominence | Strong. 4rem serif with tight leading is clearly the page's first element in both themes. |
| Hero sufficiency | Sufficient. "28 foundational questions. Six worldviews." gives the scope; the standpoint line gives the vantage. Mixing a numeral with a word reads naturally. |
| Standpoint | Clear and subordinate: muted serif at `--text-lg` under the claim. At 1280 the 34ch cap broke it as "…from a / Reformed Christian standpoint" (M2, fixed). |
| Four questions | Legible and obviously clickable: ruled rows, a whole-row link, an arrow and a hover underline. They are well chosen, one each from four domains. |
| Two-column layout | Balanced at 2 × 2. The wrapped title "Why is logic universally binding?" at 320 keeps its arrow on the first baseline, which looks intentional. |
| Worldview list | Appropriately restrained. A 3 / 2 / 1 column grid with accent squares and the same ruled rhythm as the questions. Not sparse. |
| Section boundaries | Consistent: a strong rule, a serif `--text-xl` title, then rows. |
| Primary action | Clear. The filled button beside a quiet text link, in both themes. |
| Header and footer proportion | Proportionate. The footer is one row on desktop and is visually lighter than the content. |
| Empty? | No. The page ends about 65px below the worldview list at 1280. It reads as finished, not bare. |

No new homepage section is warranted.

## 3. Questions index

**What works:**
- All six domains are clearly separated by a strong rule and a serif title.
- All 28 titles scan easily as 44px ruled rows.
- Long titles wrap cleanly at 390 and 320. Examples: "Who is Jesus Christ, and what follows if the central historical claims about Him are true?" and "Where is history going? Is it linear, cyclical, or ultimately directionless?"
- Mobile reading order is title → domain → questions.
- Rows have a pointer and hover affordance and a visible focus outline.

**Descriptions:** none should be restored. I found no comprehension problem that titles alone create. The domain names are self-explanatory, and every question is itself a question.

**Domain navigation:** all six chips land with the heading in view in Chrome, Firefox and WebKit.
- At 1280 × 900 the first four headings land at the top.
- *Salvation* and *Revelation* reach the end of the document and sit at y = 289 and y = 539, fully visible.
- This is an unavoidable consequence of the page's height, not a usability defect. Padding the page to force them to the top would be worse.

**Defects found:**
- **M3:** the 18ch cap on the domain title forced needless breaks: "Man & / Human Nature", "Revelation / & History". These were most awkward in the single-column phone layout, where the column is wide.
- **M4:** to align the first row with the domain title, desktop removed `min-height`, so six first-row links were 39px high.

**Recommendation only:** at 1280 the bordered domain chips wrap and leave "Revelation & History" alone on a second row. They are slightly heavy beside the new ruled rows. A quieter text list is a reasonable later polish; the producer also lists it. It is not a defect, so I did not change it.

## 4. Christian Case: attribution (highest priority)

**Coverage:**
- I inspected every stage of Islam on *Has God or ultimate reality revealed itself?* at 390 in Chrome, Firefox and WebKit.
- I then switched the opponent to Judaism, Naturalism and Buddhism in place and read every note and passage label after each switch.

**Dynamic names:**
- Every `[data-case-name]` updates after each switch.
- The URL updates to `opponent=…` each time.
- The passage labels follow the selected opponent: "Classical Islam", then "From the Classical Islam answer", and Reformed Christianity on the Christian cells.

| Stage | Judgment |
|---|---|
| Understand the alternative | "[Alternative] in its own terms" is the right idea, but as shipped it read "**Buddhist traditions in its own terms.**" and "**Hindu traditions in its own terms.**" That is a number-agreement error in 2 of the 5 opponents, so in 56 of the 140 cases. It also drops "answer", so it presents the site's written answer as though the tradition itself were speaking. **M1, fixed:** now "The [Alternative] answer, in its own terms." This matches "From the [Alternative] answer" on the passage labels. |
| The Christian account | No note is needed. The stage title and the "Reformed Christianity" passage label identify it. |
| The Christian response | "The Reformed critique of [Alternative]." is adequate. It names both the direction and the critic. The passage label "From the [Alternative] answer" shows where the critique is written. |
| Questions for examination | "Put to [Alternative]: open questions to examine, not settled conclusions." The qualification is fully kept. |
| Objections to the Christian account | The substance is right. The shipped wording was telegraphic: "Stated and answered in the Christian answer. Not a reply from Classical Islam; it may come from another tradition." The second sentence had no subject, and it named the tradition rather than its answer, unlike the other notes. **Part of M1, fixed:** now "Stated and answered in the Christian answer. It is not a reply from the [Alternative] answer and may come from another tradition." The passage itself is labelled "Reformed Christianity". With both together, a reader cannot take a naturalist objection for Islam's, Judaism's, Hinduism's or Buddhism's reply. |
| Study the sources | No note is needed. Each cell is labelled with its worldview. |

**Christian account and Study notes:** removing them misattributes nothing. Both stages are labelled per passage.

**Navigation:** dropping the nav subject line ("Christianity and X") is fine. The picker immediately above names the opponent.

**Unchanged:** the stage architecture, cells, argument and sources.

## 5. Explore and Compare

**Explore, *What is man?*, Naturalism (Chrome 1280; Firefox and WebKit through the checks):**
- The card opens its answer.
- A citation opens its preview, which shows "Source 32 · Naturalistic atheism", the full reference and its locator.
- Escape returns focus to the marker.
- Without the "Select a worldview…" instruction, the cards are still obviously actionable. Each has a *Read* chevron, a hover state and a whole-card link.
- In the answer footer, "Sources / This answer's references / Source Library" loses no information. The removed "N numbered references to M distinct works" counter had no decision value.

**Compare, Judaism/Islam on *Revelation* (Chrome 390 and 1280; Firefox 390; WebKit 390):**
- The pickers name both worldviews.
- All four stage titles remain and are distinct by strong rule and kicker, with no hints.
- **Stacked layout:** mid-scroll in both Understand and Examine, the stuck label was "Classical Islam" over Islam text. Attribution is never ambiguous; each passage carries its own coloured label and rule.
- The *Open both* controls remain discoverable.
- The mode sources note ("Showing the sources for Rabbinic Judaism and Classical Islam. The other answers' sources are listed in Explore.") is intact.
- `compare.ts`, `modes.ts` and `christian-case.ts` are unchanged in the diff.

## 6. Method page

**"Reading a question":** accurate and concise.
- Explore, Compare and the Case stage order match the actual behaviour.
- The objection attribution sentence matches the Case note.
- The section correctly omits the Study stage from the argumentative sequence.

**M6, fixed:** "None is presented as the better way to read." This is an internal design principle (the ModeSwitch code comment), not information a reader needs. It sits oddly beside a mode that explicitly argues from the Reformed standpoint. Removed.

**Citations paragraph:** accurate.
- "Each opens a preview of its reference and links to its numbered entry in the question's Sources list, which links back" matches the JavaScript behaviour.
- It is also true without JavaScript. In a no-JS Chrome check, the marker on *What is man?* went straight to `#christianity-what-is-man-src-1`, which was in view.

**Six lane links:** all resolve to the six worldview pages, as part of 0 broken links.

**Scope:** the page has not become a dumping ground. The new section is about 120 words.

## 7. Header, footer and mobile

**Chrome geometry check:** I measured the header and footer at 320, 360, 390, 768 and 1280px on `/` and `/method/`, in Light, with Dark also at 320 and 1280. On every page, at every width:
- no horizontal overflow
- no overlap among the brand, the nav links and the switch
- no clipped labels
- every header link, footer link and the switch at least 44px high
- exactly one visible switch icon, with the correct `aria-checked`

**Firefox and WebKit:** the same check at 320 and 390 passed.

**The 3 + 2 grid below 388px:** it looks intentional. Its aligned columns read as a designed compact nav, unlike the ragged wrap on main that left *Sources* alone. The header stays 148px, the same as main.

**Focus order at 320 (Chrome and Firefox):** skip link → brand → Method → Questions → Worldviews → Thinkers → Sources → Dark mode → page content.
- WebKit's default Tab skips links. That is the engine's Safari-style default, not a site defect.

**Footer:**
- Desktop: one row.
- Phones: two rows of 44px links.
- It reads easily and is muted.
- It adds a second `nav` landmark, labelled "Footer", distinct from the header's.

**M5, fixed:** the Thinkers lede opened with a subjectless fragment: "Not exhaustive, and thinkers in one lane…". It now reads "This list is not exhaustive, and…".

## 8. Accessibility and responsive findings

- Headings stay hierarchical.
  - Homepage: one h1, then section h2s.
  - Questions index: h1, then domain h2s with `aria-labelledby` targets intact.
- Landmarks are labelled.
- No removed text was an accessible name.
  - The switch keeps "Dark mode".
  - The status region and Case/Compare labels are unchanged.
- **No-JavaScript, Chrome and Firefox:** all six answers are visible, the note reads "Compare and Christian Case require JavaScript.", the dead switch is hidden and the citation → entry link works.
- `text-wrap: balance`, used in the M2 and M3 fixes, is progressive. Engines without it fall back to normal wrapping.

## 9. Browser scenarios exercised

Planned before testing according to REVIEW-STRATEGY. The change is markup, CSS and copy, with no controller change.

| # | Scenario and why | Chrome | Firefox | WebKit |
|---|---|---|---|---|
| 1 | Homepage, the main redesign. Visual before/after, header and footer geometry, switch state | 1280 L/D, 390 L, 320 D (renders); 320/360/390/768/1280 geometry | 320, 390 geometry | 320, 390 geometry |
| 2 | Questions index, the structural rewrite. 28 links, six anchors, row heights, wrapping | 1280 L, 390 D/L | 1280 anchors and heights | 1280 anchors and heights |
| 3 | Explore *What is man?* Naturalism, for removed instructions and citation integration. Card → answer, preview, Escape focus | 1280 | 1280 | 1280 |
| 4 | Compare Judaism/Islam *Revelation*, for removed hints and stacked attribution. Stages, pickers, sticky label mid-scroll, sources note | 390, 1280 | 390 | 390 |
| 5 | Christian Case Islam *Revelation*, then Judaism, Naturalism and Buddhism, for the highest attribution risk. Every stage note and label after each switch | 390 (screens of all stages) | 390 | 390 |
| 6 | Method, Worldviews, Thinkers, Sources: copy review, six lane links, no-JS citation | 1280 render, no-JS | no-JS | — |
| 7 | UI-4A regression: no thumb slide on load in Dark on `/`, `/questions/` and `/method/`, exactly one slide on click; persistence across pages and tabs | 320 | 320 | 320 |

**Results:** Chrome 27/27, Firefox 17/17, WebKit 17/17 automated checks, plus the visual inspection above. All engines were run serially. Every check was rerun after the fixes and passed.

**Not exercised:**
- The full Compare matrix and the full Christian Case matrix. Not required: the controllers are unchanged.
- The UI-4A all-marker citation suite. `cite-preview.ts` and `reveal-hash.ts` are unchanged, and scenario 3 exercises their integration.
- Real Safari and screen readers.

## 10. Citation and content integrity

**Source tree:** `git diff b0a0ebb 2b1b00d -- src/content research docs/ESV-QUOTATION-LEDGER.md` is empty. The fixes touch none of these paths either.

**Rendered output:**
- I tokenised every built page of main and of the PR (96 each) on tag boundaries and diffed them.
- All 254 distinct hunks are interface text, all of the kinds listed in the producer's inventory: summaries, captions, eyebrows, hints, footer, labels, the stylesheet hash, the homepage sections and the Method additions.
- None touches an answer body, a thesis, a `sup.cite`, a `-src-` entry or an id.

**Link count, verified per page from the built HTML:**

| Change | Links |
|---|---|
| Footer navigation: +5 − 1 old "Read the method" = +4 × 96 pages (the brief's +480 and −96) | +384 |
| Homepage body: 27 → 13 | −14 |
| Method lane links | +6 |
| **Net** | **+376** (11,337 → 11,713) |

**Inventory:**
- 168 answers, 28 questions, 236 sources, 56 thinkers, 96 pages
- 2,838 citations
- ESV unledgered 0, orphan ledger rows 0
- 0 broken links, 0 duplicate ids, 0 missing answers

The 2,464 bibliography entries and 336 theses fall inside the unchanged answer, thesis and `-src-` regions above.

**Theme switch guard (`check-built-links.mjs`):**
- I tested it against four mutated copies of real built pages:
  - the pre-UI-4A markup (an empty thumb with the icons as siblings)
  - a removed switch
  - a duplicated switch
  - a missing head script
- It reported all four and exited 1.
- It reports 0 on both main's and the PR's unmodified builds, so it produces no false failures.

## 11. Validation (final head)

| Check | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings (1 pre-existing hint) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 2,838 citations, ESV unledgered 0, orphan rows 0 |
| `node scripts/check-built-links.mjs` | 11,713 links, 0 broken, 0 duplicate ids, 0 missing answers, 0 bad theme switches |

## 12. Findings and fixes

| # | Severity | Finding | Fix |
|---|---|---|---|
| M1 | MINOR | Christian Case account note read "Buddhist traditions in its own terms." (also Hindu traditions), wrong in number and dropping "answer". The objections note's second sentence had no subject and was inconsistent with the other notes. | `ChristianCaseView.astro`: "The [X] answer, in its own terms." and "Stated and answered in the Christian answer. It is not a reply from the [X] answer and may come from another tradition." |
| M2 | MINOR | The homepage standpoint broke "…from a / Reformed…" at desktop widths (34ch cap) | `home.css`: 40ch cap and `text-wrap: balance` |
| M3 | MINOR | The 18ch cap on Questions index domain titles forced breaks such as "Man & / Human Nature", worst on phones | `catalog.css`: cap removed, `text-wrap: balance` |
| M4 | MINOR | The first question row in each domain was 39px high on desktop (`min-height: 0`), below the site's 44px convention | `catalog.css`: keep `min-height`, top-align the first row instead |
| M5 | MINOR | The Thinkers lede opened with the subjectless fragment "Not exhaustive, …" | "This list is not exhaustive, …" |
| M6 | MINOR | Method: "None is presented as the better way to read." is an internal design principle, not reader information | Sentence removed |

The M1 fix leaves the argument, stage architecture and `christian-case.ts` untouched; only the static note text changed. No screenshot in `docs/ui/screenshots/ui4b/` needed replacing, because none of the fixes changes what an existing screenshot demonstrates.

## 13. Known limitations

- Windows Playwright WebKit is not Safari. No screen-reader session was run; landmarks and names were checked structurally.
- **Questions index bottom fragments:** on tall desktop windows, the last two domain fragments cannot scroll their heading to the top. They land fully in view. This is inherent in the page's height.
- **Phone header:** below 388px it uses three rows (brand, then the 3 + 2 nav), 148px, the same as main.
- **Optional polish:**
  - Lighter domain chips on the Questions index.
  - Simplifying the thesis-card *Read* cue, which the producer lists.

## 14. Recommendation

**MERGE.** The pass meets Issue #34's acceptance criteria:
- The homepage presents the project, the standpoint and the entry points immediately.
- Redundant microcopy is gone sitewide.
- Method holds the explanation of the reading modes.
- Attribution in Christian Case is preserved, and is now grammatical for every opponent.
- Content, citations and IDs are byte-identical in the rendered answers.
- Validation passes.

Do not start another UI phase until the user merges.
