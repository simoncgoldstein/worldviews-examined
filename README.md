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

## Product goal

Build a rigorous, source-backed site that works in three modes:

1. **Question Explorer**: compare all six worldviews on one question.
2. **Worldview Explorer**: trace one worldview across all major domains.
3. **Apologetics Mode**: review a worldview's strongest claims, explanatory strengths, Christian responses, and precise pressure questions.

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

## Status

Phases 1 and 2 implemented: Astro skeleton, structured content collections with build-time validation, a source/citation system, and routes for questions, worldviews, thinkers and sources. No substantive worldview answers have been written yet (two outline fixtures exist for the featured question).

## Development

Requires Node 22.18 or later (the validation script uses native TypeScript support).

```sh
npm install
npm run dev      # local dev server
npm run validate # validate content references and print answer coverage
npm run build    # validate, type-check and build the static site to dist/
npm run preview  # preview the production build
```

Deployed from `main` by `.github/workflows/deploy.yml` to https://simoncgoldstein.github.io/worldviews-examined/ (the repository's Pages source must be set to GitHub Actions).
