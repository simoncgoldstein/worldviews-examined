# Worldviews Examined

A static comparative worldview reference presenting six major worldview families in their strongest representative forms, followed by an explicitly Reformed Christian analysis.

## Core worldviews

- Reformed Christianity
- Naturalistic atheism
- Rabbinic Judaism
- Classical Islam
- Hindu traditions
- Buddhist traditions

The project does **not** claim that each label names a perfectly uniform system. Internal diversity is surfaced whenever it materially changes an answer.

Live site: **https://simoncgoldstein.github.io/worldviews-examined/**

## What the site contains

**28 foundational questions** in six domains, each answered by all **six worldviews**: 168 reviewed answers, with 2,838 citations to a registry of 236 sources (224 checked and published) and 56 thinker profiles. Every question page offers three reading modes over the same answers (see `docs/DESIGN-SPEC-V1.md`):

1. **Explore** (default): all six theses at a glance; any answer opens in full, through its analysis (Understand, Examine) to its Deep dive and Further Study footer.
2. **Compare**: any two worldviews on the same question, section by section, with a shareable `?mode=compare&views=<id>,<id>` URL.
3. **Christian Case**: Reformed Christianity and one chosen alternative, read as an argument in stages (the alternative's account and strengths, the Christian account, the Christian response, pressure questions, objections to the Christian account, and both Deep dives), with a shareable `?mode=case&opponent=<id>` URL.

Research tools:

- **Citation previews:** each numbered citation opens a preview with the registered author, title, exact locator and source link, and a route to the full reference, whose ↩ backlink returns to the citing sentence.
- **Question sources:** each question's numbered bibliography can be filtered to one worldview's answer (All shows every group).
- **Sources Library** (`/sources/`): the 224 checked sources, searchable and filterable by worldview and type, in pages of 25, each with the questions that cite it. `#source-<id>` links always reach their entry.

Worldview pages trace one worldview across all the questions; thinker pages list where each thinker is used.

The site must steelman before critiquing. Non-Christian positions should be sourced first from primary texts and serious representative thinkers from within the tradition. The Christian column is itself one of the competing worldviews and receives its own strongest objections and replies.

## Chosen stack

- **Astro** for a static, content-first site
- **TypeScript** in strict mode
- **Astro content collections** for validated structured content
- **Markdown/MDX** for deep dives
- **Plain CSS with design tokens** for the initial UI
- **Minimal client-side TypeScript** for compare filters and interactive disclosure
- **GitHub Actions + GitHub Pages** for deployment

No database, backend, authentication layer, or runtime CMS is planned for V1.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the decision rationale.

## Read first

- [`docs/METHODOLOGY.md`](docs/METHODOLOGY.md)
- [`docs/QUESTION-CATALOG.md`](docs/QUESTION-CATALOG.md)
- [`docs/SOURCES.md`](docs/SOURCES.md)
- [`docs/CONTENT-MODEL.md`](docs/CONTENT-MODEL.md)
- [`docs/ROADMAP.md`](docs/ROADMAP.md)

The site is static-first: every page, answer and bibliography is prerendered HTML. Client JavaScript (one small cached module) only enhances it with the disclosures, reading modes, previews, filters and library search. Without JavaScript all six answers are open, every citation is a working link and the full bibliography and Sources Library are shown.

## Status

**V1 feature-complete.** The corpus is written and reviewed: 168 answers, a recorded corpus-wide substantive audit (`research/final-audit/`) and its remediation batches R1–R6 and C1–C4, each independently reviewed. The interface phases UI-1 to UI-4D are merged and independently reviewed (`docs/ui/`).

**Release verification:** the integrated V1 release QA is recorded in [`docs/release/V1-RELEASE-QA.md`](docs/release/V1-RELEASE-QA.md), with its findings, browser coverage and recommendation. One external gate remains open: whether the site's ESV quotations fall within Crossway's standard permission terms (see that record and `docs/ESV-QUOTATION-LEDGER.md`). The site is already publicly deployed from `main`.

## Development

Requires Node 22.18 or later (the validation script uses native TypeScript support). CI and deployment use Node 24.

```sh
npm ci
npm run dev      # local dev server
npm run validate # validate content references and print answer coverage
npm run check    # type-check (astro check)
npm run build    # validate, type-check and build the static site to dist/
npm run preview  # preview the production build
```

After a build, the read-only checks:

```sh
node scripts/check-built-links.mjs  # every link, fragment and id in dist/; duplicate ids; theme switch
node scripts/audit-inventory.mjs    # corpus inventory and ESV ledger reconciliation (rewrites research/final-audit/data/)
```

`audit-inventory.mjs` regenerates `research/final-audit/data/`; on Windows, restore those files if only their line endings changed. Browser smoke tests for the release invariants are described in `docs/release/V1-RELEASE-QA.md`.

Pull requests into `main` run `.github/workflows/ci.yml` (`npm ci` and `npm run build`). Every push to `main` deploys publicly through `.github/workflows/deploy.yml` to https://simoncgoldstein.github.io/worldviews-examined/ (the repository's Pages source must be set to GitHub Actions).
