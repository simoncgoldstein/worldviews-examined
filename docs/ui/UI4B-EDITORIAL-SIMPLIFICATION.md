# UI-4B: Editorial Simplification and Homepage Hierarchy

**Issue:** #34 · **Branch:** `ui4b-editorial-simplification` · **Base:** main `b0a0ebb`, which merges UI-4A PR #35 including its review fix `50b68b5`.
**Scope:** presentation and documentation only. `src/content/**`, `research/**` and `docs/ESV-QUOTATION-LEDGER.md` are unchanged.

## Summary

The interface now explains itself less and lets headings, links and layout carry the meaning.

- **Homepage:** six sections became three.
- **Questions index and question headers:** cut to titles.
- **Interface notes:** procedural notes are gone from Explore and Compare. Christian Case keeps only the notes that say where a passage comes from or which way it argues.
- **Method page:** now the single home for explaining the three reading modes.

No answer, citation, source, thinker or identifier changed.

## 1. Microcopy inventory

The inventory was made before editing. **R** = remove, **C** = condense, **L** = relocate to Method, **P** = preserve.

| Where | Text | Decision | Reason |
|---|---|---|---|
| Home hero | "A comparative research library" eyebrow | R | Decoration |
| Home hero | Tagline plus a 4-sentence paragraph on steelmanning and neutrality | C | Reduced to a two-line claim and standpoint. Method and the footer state the rest. |
| Home | Six question cards: domain eyebrow + paraphrasing summary | R | The titles stand alone |
| Home | "Six domains" section: numbers, descriptions, counts | R | The taxonomy stays on the Questions index |
| Home | "Three ways to read" section | L | Now Method → *Reading a question* |
| Home | "Reference" section with captions | R | Header and footer link all four destinations |
| Questions index | "Explore" eyebrow; lede ("Open a question to see…") | R | The page title and the links say it |
| Questions index | Domain numbers, descriptions, counts; "Featured" badge; question summaries | R | The data stays in `categories`/`questions.yaml` and in each page's meta description |
| Question page | "Featured question" eyebrow; summary subtitle | R | The summary only paraphrased the title. It remains the page's `<meta name="description">`. |
| Question page | "Select a worldview to read its full answer." | R | The cards are visibly links, with a *Read* cue |
| Question page | "Numbered once across the page, grouped by the answer…" | R | Numbering and group headings show this. Explained on Method. |
| Question page | No-JS note "All six answers are shown below. Compare and Christian Case need JavaScript." | C | Now "Compare and Christian Case require JavaScript." |
| Answer footer | "N numbered references to M distinct works" | R | A counter with no decision value |
| Answer footer | "Sources and references" / "View this answer's references" / "Browse the Source Library" | C | Now "Sources" / "This answer's references" / "Source Library" |
| Compare | Stage hints under Understand / Examine / Study | R | The stage titles and the answers' own headings suffice |
| Christian Case | *Account* hint | C | Now "[Alternative] in its own terms." It marks that the passage is description, not critique. |
| Christian Case | *Christian account* hint | R | Repeats the title |
| Christian Case | *Response* hint | C | Now "The Reformed critique of [Alternative]." It gives the direction of the argument. |
| Christian Case | *Questions* hint | C | Now "Put to [Alternative]: open questions to examine, not settled conclusions." The qualification is kept. |
| Christian Case | *Objections* hint | C, **P** | Now "Stated and answered in the Christian answer. Not a reply from [Alternative]; it may come from another tradition." This attribution safeguard is required. |
| Christian Case | *Study* hint; nav subject line "Christianity and X" | R | The picker and "The two answers" name both sides |
| Christian Case | Stage titles, "In this case" nav, per-passage worldview labels, "From the X answer" labels | P | These are structural attribution |
| Compare | Picker labels, sticky per-passage worldview labels, "Showing the sources for X and Y…" note | P | Needed to know who is speaking and where the other sources went |
| Worldviews index | "Reference" eyebrow; "N entries written" | R | Every worldview has all 28 entries |
| Worldviews index | "Six comparison families, not claims of total internal uniformity. Each page states…" | C | Now "Comparison families, not claims of total internal uniformity." This is a qualification. |
| Worldview page | "Worldview" eyebrow | R | |
| Worldview page | Role descriptions under Primary / Specialists | R | The headings and per-thinker "used for" lines suffice |
| Worldview page | Interlocutor description; "A research map, not a claim…" | P | These keep interlocutors from reading as representatives |
| Thinkers index | "Registry" eyebrow; 4-sentence lede | C | Keeps *not exhaustive*, *need not agree*, and *interlocutors are not representatives* |
| Thinker page | Closing note "Grouping … is a reading aid…" | P | Attribution qualification |
| Sources | "Registry" eyebrow; 2-sentence lede | C | Now "Every cited work has been checked against the edition named." This is the verification claim. |
| Sources | ESV credit and permissions; Source principles; all bibliographic metadata and "Cited in" | P | Licensing attribution and scholarly metadata |
| Footer | Standpoint plus a sentence on fairness; "Read the method" | C | Now a one-line standpoint and links to all five destinations |

## 2. Homepage

| Before (main `b0a0ebb`) | After |
|---|---|
| Eyebrow, title, tagline, 4-sentence paragraph, two actions | **Hero:** *Worldviews Examined* / "28 foundational questions. Six worldviews." / "A comparative examination from a Reformed Christian standpoint." / **Explore Questions** (primary button) and **The Method** (text link) |
| Begin with a question: 6 cards (domain, title, summary) | **Begin with a question:** 4 ruled title links with an arrow, then "Browse all 28 questions →" |
| Six domains (numbered, described, counted) | removed |
| Six worldviews (strip) | **Six worldviews:** the same accent-marked links, 3 / 2 / 1 columns |
| Three ways to read | relocated to Method |
| Reference (4 captioned links) | removed (header and footer) |

**Implementation details:**
- Counts come from the registry: `content.questions.length`, and the worldview count spelled as a word.
- The four questions are listed by id in `src/data/site.ts` (`homeQuestionIds`) and resolved with `lookup`, so a removed id fails the build.

**The four starting questions:**
- *What ultimately exists?* (Ultimate Reality)
- *Why is logic universally binding?* (Knowledge & Truth)
- *What is man?* (Man & Human Nature)
- *What happens after death?* (Salvation & Destiny)

They cover four different domains, and each is short and immediately intelligible.

The page height at 1280px fell from 2,498px to 1,069px, and at 390px from 4,725px to 1,482px.

## 3. Visual hierarchy

- **Homepage:**
  - The hero title is larger (to 4rem) with tighter leading.
  - The claim is set in the serif at `--text-xl`, and the standpoint in muted `--text-lg`.
  - Section titles are serif `--text-xl` headings under a strong rule, replacing tracked-caps kickers. Cards are replaced by ruled rows.
  - Grids are explicit, two columns for the questions and three for the worldviews, so there are no orphan cells.
- **Questions index:**
  - Each domain is a serif title beside (≥56rem) or above its ruled question list.
  - The domain title is sticky on wide screens, as the intro block was before.
  - Rows are 44px minimum. The first row is aligned to the domain title on desktop.
- **Question page:**
  - The title leads straight into the mode switch.
  - The header bottom margin was reduced to match the removed subtitle.
- **Footer:** one row on desktop (statement left, links right), wrapping on phones.

The existing type, tokens and Light/Dark palettes are used throughout. No new colours, fonts, components or JavaScript were added.

## 4. Questions index

All 28 links, the six domain headings with their `id`/`aria-labelledby` fragment targets, and the six-link domain navigation are unchanged.

**Known effect:** the page is now shorter (2,197px at 1280px), so on a 900px-tall desktop window the fifth and sixth domain links scroll to the end of the page. Their headings are fully in view but not at the top. This is ordinary browser behaviour and was not padded away.

## 5. Reading modes

- **Explore:** title → modes → *Six answers at a glance* (structural heading kept) → cards. Answer panels, disclosures, the *Read* cue, Expand/Collapse all, the Further study groups and navigation are unchanged apart from the shorter labels.
- **Compare:** four stage titles with no hints. Picker labels, *Swap sides*, *Open both*, per-passage worldview labels (sticky when stacked) and the mode sources note are unchanged. `compare.ts` and `modes.ts` are untouched.
- **Christian Case:**
  - All seven stage titles and the stage navigation are kept.
  - Four stage notes are kept in condensed form, because each prevents a misreading:
    - Account: description, not critique.
    - Response: the direction of the critique.
    - Questions: open questions, not conclusions.
    - Objections: not the alternative's reply.
  - The Christian account and Study notes, and the nav subject line, were removed.
  - `christian-case.ts` still fills every `[data-case-name]` and needed no change.

## 6. Method page

- **New section, *Reading a question*:** the three modes, including the Christian Case stage order and its attribution rule ("That objection is stated in the Christian answer; it is not the alternative's reply…"). This is the substance of the removed homepage section and Case hints.
- **Citations paragraph:** corrected to describe the current behaviour: previews, one numbered Sources list per question, and backlinks. It previously said "the Sources list below that answer".
- **Six comparison lanes:** the names now link to the worldview pages.

The rest of Method is unchanged.

## 7. Header and footer

**320px header:**
- At 14px the five nav links need 308px of text. A 320px phone has 288px inside the gutters, so one row is impossible without dropping below a readable size or shrinking targets.
- Below 388px (`24.24rem`) the nav is now an aligned three-column grid (three links above two) instead of a ragged wrap that left *Sources* alone.
- The header height is unchanged (148px), the targets stay 44px, and there is no overflow.
- From 390px the nav stays on one row (104px header), and from 768px everything shares one row, both as before.

**Footer:** a one-line standpoint statement, plus a *Footer* nav landmark with Method, Questions, Worldviews, Thinkers and Sources on every page.

**Theme switch:**
- The UI-4A switch is untouched: markup, script, CSS and BaseLayout head script.
- **Reported "old toggle on Method and Questions":** the live deploy of `b0a0ebb` (finished 20:05Z) serves the identical new switch markup and the same stylesheet on every page.
  - A Chrome render of the live `/`, `/method/`, `/questions/`, a question page, `/sources/` and `/thinkers/` showed exactly one visible icon each.
  - GitHub Pages sends `Cache-Control: max-age=600`, so a page opened before the deploy could be served from the browser cache for up to ten minutes. A hard reload shows the new switch.
- **Guard for future pages:** `scripts/check-built-links.mjs` now fails the check if any built page lacks exactly one switch of the current form (both pictograms inside the thumb) and the head script that drives it.
  - All pages use `BaseLayout`, which renders the shared header, so a new page gets the switch automatically and the check proves it.
  - Negative test: altering the moon icon in one built page made the check report it and fail.

## 8. Light and Dark

Both themes were rendered at 1280, 390 and 320px:
- **Homepage:** all three widths, both themes.
- **Questions index:** 1280px Light and 390px Dark.
- **Compare:** 1280px Light and 390px Dark.
- **Christian Case:** 1280px and 390px Light.

All colours are existing tokens. The primary button, links, rules and accent marks keep their established contrast pairs. The switch shows one icon with the correct `aria-checked` in each theme, and a toggle on Method persists to Questions.

## 9. Preservation of scholarly content

- **Source tree:** `git diff main -- src/content research docs/ESV-QUOTATION-LEDGER.md` is empty.
- **Rendered output:** compared between main's build and this build across all 28 question pages, with no differences:
  - 168 answer bodies (MDX output, every heading and citation marker)
  - 336 theses (cards and answer leads)
  - 2,464 bibliography entries (with locators, notes and backlinks)
  - 2,838 citation markers
- `question.summary`, `category.description` and `worldview.description` stay in the registry. The summary is still the question page's meta description.

## 10. Browser coverage and scenarios

The plan followed `docs/ui/REVIEW-STRATEGY.md`. The change is markup, CSS and copy, with no controller changes, so it got one broad Chrome run and Firefox/WebKit smoke runs, executed serially. All checks used Playwright against the built site.

| Scenario | Chrome | Firefox | WebKit |
|---|---|---|---|
| 1. Homepage: 3 sections, one h1, standpoint, 4 + 6 links (each fetched, 200), actions, switch icon/state, no overflow | 1280/390/320 × Light/Dark | 1280 Dark, 320 Light | 1280 Dark, 320 Light |
| 2. Questions index: 28 links, 6 domains, domain nav fragment, no removed text, no overflow | 1280/390/320 | 390 | 390 |
| 3. Explore, *What is man?*: Naturalism and Christianity open from cards; Examine and Deep dive; citation preview; View full reference; backlink; Further study links | 1280/390 | 1280 | 1280 |
| 4. Compare, Judaism/Islam on *Revelation*: pair, 4 stages, no hints, per-passage labels, sticky label mid-scroll (stacked), sources note | 1280/390 | 390 | 390 |
| 5. Christian Case, Islam on *Revelation*: 7 stages and nav, kept/removed notes, passage labels, stage nav, preview in Case, Escape restores focus | 1280/390/320 | 390 | 390 |
| 6. Reference pages: Worldviews, Thinkers, Sources (ESV credit, verification claim), Method (new section, 6 links); no eyebrows | 1280 | — | — |
| 7. Theme toggle on Method persists to Questions | 1280 | 390 | 390 |
| 8. No JavaScript: 6 answers visible, fallback note, citation link reaches entry, homepage links, dead switch hidden | ✓ | ✓ | — |

**Results:** Chrome 98/98, Firefox 35/35, WebKit 32/32.

**Assertions corrected during the run:**
- The Compare per-passage labels were wrongly expected to hide at 1280px. Main shows them too, so behaviour is unchanged.
- The fragment check was too strict for the now-shorter index (see §4).

**High zoom:** 320px stands in for 400% zoom of a 1280px window, and 640px-class layouts were seen at 390–768px. The UI-4A citation integrity suite was not rerun, because `cite-preview.ts`, `reveal-hash.ts`, `modes.ts` and the theme controller are unchanged. Scenarios 3 and 5 exercise their integration.

## 11. Validation

| Check | Result |
|---|---|
| `npm run validate` | 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings (1 pre-existing hint) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 2,838 citations, ESV unledgered 0, orphan ledger rows 0 |
| `node scripts/check-built-links.mjs` | 11,713 links, 0 broken, 0 duplicate ids, 0 missing answers, 0 bad theme switches |

**Link count:** 11,337 on main became 11,713 (+376). Cross-page links went from 4,822 to 5,198, and fragments from 8,906 to 8,900.

| Change | Links |
|---|---|
| Footer navigation (5 × 96 pages) | +480 |
| Old footer's "Read the method" (× 96 pages) | −96 |
| Homepage: 27 links became 13 | −14 |
| Method's lane names linked | +6 |
| **Net** | **+376** |

The homepage's six `questions/#domain` links account for the −6 fragments.

## 12. Known limitations

- Below 388px the header still uses three rows (brand, then a 3 + 2 nav grid). A single row needs a menu control, which was out of scope.
- On a tall desktop window, the last domain fragments on the Questions index cannot scroll to the top (see §4).
- WebKit was Windows Playwright WebKit, not Safari. No screen-reader session was run; landmarks, names and headings were checked structurally.

## 13. Remaining polish candidates

- The Questions index domain chips could become a quieter text list if the bordered controls feel heavy beside the new ruled rows.
- The thesis cards' *Read / Open below* cue might be simplified to the chevron alone, after checking that it does not cost affordance.

## Screenshots

All are in `docs/ui/screenshots/ui4b/`, captured in Chrome from the built site:
- **Homepage:** `home-before-1280-light`, `home-after-1280-light`, `home-after-1280-dark`, `home-after-390-light`, `home-after-320-light` (shows the 3 + 2 header)
- **Questions index:** `questions-before-1280-light`, `questions-after-1280-light`
- **Question page:** `question-before-1280-light`, `question-after-1280-light`
- **Christian Case:** `case-before-390-light`, `case-after-390-light` (the objections and study stages)
