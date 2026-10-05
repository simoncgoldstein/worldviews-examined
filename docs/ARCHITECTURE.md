# Architecture

## Decision

Use **Astro + TypeScript + content collections + Markdown/MDX**, built as a fully static site and deployed to GitHub Pages.

## Why Astro

This project is primarily a durable body of structured writing, not an application whose core value depends on client-side state. Astro fits that shape well:

- static prerendering by default;
- file-based routing and straightforward shareable URLs;
- Markdown and MDX support for long-form theological content;
- content collections for schema validation, querying, and TypeScript safety;
- minimal client JavaScript by default;
- selective interactive islands if compare/filter behavior later benefits from a UI framework;
- official GitHub Pages deployment path.

A React/Vite SPA would work, but would make the browser responsible for more rendering and state than the product requires. A documentation framework would also work, but this project needs a custom comparison interface rather than a conventional docs sidebar as its primary experience.

## Initial technology choices

- Astro
- TypeScript, strict mode
- MDX integration for deep dives that need reusable citation or note components
- Plain CSS with custom properties/design tokens
- Minimal vanilla TypeScript for filters, disclosure, and URL state
- Static source registry and build-time validation
- GitHub Actions deployment to GitHub Pages

## No backend in V1

Do not add:

- database;
- authentication;
- server-rendered API;
- runtime CMS;
- analytics requiring a backend;
- user accounts.

The subject matter changes slowly. A build-time content system is a feature, not a limitation.

## Proposed routes

```text
/
/method
/questions
/questions/[question]
/worldviews
/worldviews/[worldview]
/categories/[category]
/compare?question=suffering&views=christianity,islam,naturalism
/sources
/sources/[source]
/thinkers
/thinkers/[thinker]
```

Implemented so far: `/`, `/method/`, `/questions/`, `/questions/[slug]/`, `/worldviews/`, `/worldviews/[slug]/`, `/thinkers/`, `/thinkers/[slug]/` and `/sources/`. Source anchors (`/sources/#source-<id>`) stand in for individual source pages for now. Category and compare routes belong to Phase 5. The compare example uses question IDs in the query string.

### IDs versus slugs

Content uses two identifiers on every routable entry:

- `id`: stable internal identifier, short and lowercase-hyphenated. All cross-references (answer files, `relatedQuestions`, thinker and source references, validation output) use IDs. IDs do not change even if titles or URLs do.
- `slug`: readable public URL segment used in routes. A slug can be changed later (with a redirect) without touching content.

Example: question `id: great-and-terrible`, `slug: why-is-man-great-and-terrible`, route `/questions/why-is-man-great-and-terrible/`. Worldviews follow the same rule (`id: christianity`, `slug: reformed-christianity`). Both are validated for uniqueness at build time.

If GitHub Pages base-path handling complicates clean routing, configure Astro's `site` and `base` settings explicitly rather than moving to hash routing unless necessary.

## Proposed content tree

```text
src/
  content/
    categories/
    questions/
    worldviews/
    answers/
      christianity/
      naturalism/
      judaism/
      islam/
      hinduism/
      buddhism/
    sources/
  components/   # UI only; no theological content
  lib/          # content access, citation helpers, validation logic
  content.config.ts
scripts/
  validate-content.ts
  layouts/
  pages/
  styles/
```

### Why separate answer files

There will eventually be roughly 26 core questions x 6 worldview families. Separate answer entries make it easier to:

- assign research/review work by worldview or question;
- validate citations;
- revise one answer without touching a giant monolithic file;
- mark individual entries as draft/researched/reviewed;
- compare coverage programmatically.

## Content layer (implemented in Phase 2)

- Registries (`worldviews`, `categories`, `questions`, `thinkers`, `sources`) are one YAML list per collection; `answers` are one MDX file per worldview/question pair at `src/content/answers/<worldviewId>/<questionId>.mdx`.
- All schemas live in `src/content/schemas.ts` (Zod, imported by both Astro and the validation script). Cross-reference rules live in `src/lib/content-checks.ts`.
- `npm run validate` checks duplicate IDs/slugs, every reference, answer pair uniqueness, citation data, and required analytical sections by review status, then prints answer coverage. `npm run build` runs it first, so an invalid reference fails the build.
- Citations are written `<Cite source="calvin-institutes" locator="I.1.1" />` in answer MDX. A remark plugin (`src/lib/remark-citations.mjs`) numbers them and exposes the list; the page renders numbered superscripts and a Sources list from that one list. Citation navigation is plain anchors and needs no JavaScript.
- **Astro 7 note:** Sätteri is the default Markdown processor in Astro 7 and does not run remark plugins. The project sets `markdown.processor` to `unified()` from `@astrojs/markdown-remark` solely so the citation plugin can run. This does not change the stack (Astro + MDX, static).

## Client-side interaction

Core reading must work without JavaScript. JavaScript may enhance:

- showing/hiding selected worldview cards;
- summary vs. deep-dive disclosure;
- copying a shareable comparison URL;
- lightweight filtering/search UI.

If richer client behavior becomes necessary, add a small Astro island using Preact or React only for that component. Do not convert the site into a full SPA without a concrete reason.

## Search

Implement after the content model is stable. Prefer a build-time/static search index. Search is a secondary navigation path, not a dependency of the core question/worldview pages.

## Deployment

Use GitHub Actions with Astro's supported Pages deployment approach. V1 target URL:

```text
https://simoncgoldstein.github.io/worldviews-examined/
```

A custom domain can be added later without architectural changes.
