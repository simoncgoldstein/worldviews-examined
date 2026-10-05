# Roadmap

## Product target

A live GitHub Pages site that allows a reader to compare six worldview families across a common set of foundational questions, inspect steelman deep dives and sources, and understand the Reformed Christian response.

## Phase 0: Repository and design decisions

- [x] Choose static-first architecture.
- [x] Choose Astro + TypeScript + Markdown/MDX.
- [x] Define six worldview lanes.
- [x] Define steelman / Christian-response methodology.
- [x] Define broad question domains.
- [x] Seed architecture, methodology, source, and content-model documents.
- [x] Create GitHub repository `worldviews-examined`.
- [x] Push repository seed.

## Phase 1: Astro skeleton

- [x] Scaffold Astro project with strict TypeScript.
- [x] Add MDX integration.
- [x] Configure static output and GitHub Pages `site`/`base` settings.
- [x] Add GitHub Pages workflow.
- [x] Establish design tokens, typography, spacing, and responsive grid.
- [x] Build semantic global layout, header, footer, and method page.
- [x] Add placeholder routes for Questions, Worldviews, Thinkers, and Sources.

**Exit condition (met):** a minimal static site deploys successfully from `main` to GitHub Pages.

## Phase 2: Content layer and reference UI foundations

- [x] Define content collection schemas (`src/content/schemas.ts`).
- [x] Add worldview entries.
- [x] Add category entries.
- [x] Finalize stable question IDs and separate public slugs (28 questions).
- [x] Add thinker registry (30 seed thinkers).
- [x] Add source registry (19 seed sources) and structured citation architecture.
- [x] Add answer schema and validation (discriminated Christian / non-Christian model, status-gated required sections).
- [x] Add build-time coverage checks for missing worldview/question pairs (`npm run validate`).
- [x] Static routes: questions, worldviews, thinkers (index and detail), sources.
- [x] Responsive foundations and refined typographic design system.

**Exit condition:** one question can be fully represented by six validated answer entries with sources. The architecture supports this and is exercised by two outline-status fixtures for `great-and-terrible`; no substantive answers have been written.

Not done in Phase 2: bibliographic metadata on seed sources has not been checked against the cited editions and must be verified before any quotation or locator is relied on.

## Phase 2.1: Architecture and content-model hardening

- [x] Thinker roles (primary / specialist / interlocutor) and the finalized rosters (46 thinkers).
- [x] Answer prose moved from frontmatter into MDX body sections, so citations work in every section.
- [x] Validation of required MDX sections by `analysis.kind` and review status.
- [x] Source `verificationStatus`; reviewed and complete answers may cite only checked sources.
- [x] Thinker-role presentation on thinker, worldview and registry pages.
- [ ] Verify seed source metadata (title, author/editor, edition, publication details, locator conventions, URL) and mark entries `checked`. All 19 seed sources are still `unverified`.
- [ ] Confirm the GitHub Actions run (Node 24) after the commit is pushed; only a pushed commit can confirm this.

## Phase 3: Vertical slice

Implement one complete showcase question before mass-writing content:

**Featured question:** `great-and-terrible`

- [ ] Six steelman summaries.
- [ ] Six explanatory-strength sections.
- [ ] Five Christian-response sections for non-Christian worldviews.
- [ ] Strongest objection + Christian reply for Christianity.
- [ ] Deep dives.
- [ ] Primary/internal sources.
- [ ] Thinker links.
- [ ] Responsive comparison UI.

**Exit condition:** this page establishes the quality bar for all later entries.

## Phase 4: Core V1 content

Populate the core question catalog in batches:

1. Ultimate Reality
2. Knowledge & Truth
3. Man & Human Nature
4. Morality, Evil & the Human Problem
5. Salvation, Liberation & Human Destiny
6. Revelation & History

For each answer:

- [ ] identify scope/school;
- [ ] primary/internal source support;
- [ ] steelman summary;
- [ ] explanatory strengths;
- [ ] Christian analysis or Christian objection/reply;
- [ ] pressure questions where applicable;
- [ ] source locators;
- [ ] review status.

**Exit condition:** every V1 question has all six worldview answers at least at researched-summary level.

## Phase 5: Navigation and comparison features

- [ ] Question Explorer.
- [ ] Worldview Explorer.
- [ ] Category pages.
- [ ] Select/hide worldview filters.
- [ ] Summary/deep-dive controls.
- [ ] Related-question links.
- [ ] Shareable comparison URLs.
- [ ] Source pages and thinker pages.
- [ ] Static search.

## Phase 6: Research QA

Perform two separate reviews.

### Steelman review

- [ ] Is the non-Christian view sourced internally?
- [ ] Would a serious adherent recognize it?
- [ ] Are important school differences disclosed?
- [ ] Are objections real rather than invented straw men?

### Reformed review

- [ ] Scripture used accurately in context.
- [ ] Confessional claims agree with Westminster Standards.
- [ ] Van Til/Bahnsen claims are not reduced to slogans.
- [ ] Common grace and the image of God prevent the critique from implying unbelievers know nothing.
- [ ] Historical/evidential arguments are not replaced by bare assertion.

## Phase 7: Public V1

- [ ] Accessibility pass.
- [ ] Mobile pass.
- [ ] Broken-link / source validation.
- [ ] Metadata and social preview.
- [ ] About / Method / Sources pages complete.
- [ ] GitHub Pages deployment stable.
- [ ] README updated with live URL.

## Later possibilities

Not required for V1:

- downloadable printable comparison sheets;
- per-worldview apologetics field guides;
- topical trails such as death, morality, knowledge, or suffering;
- glossary of technical terms;
- short primary-source excerpts within copyright limits;
- expert review notes;
- custom domain.
