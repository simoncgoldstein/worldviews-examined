# Implementation Handoff

This file is intended for a local coding agent taking over after planning.

## First task

Create the Astro skeleton **inside this repository without deleting the planning documents**.

Recommended target:

- Astro current stable
- strict TypeScript
- MDX integration
- static output
- GitHub Pages deployment

Do not add React/Preact on day one. Build the first comparison UI using Astro components and minimal client-side TypeScript. Add an island framework only if a concrete interaction becomes awkward without it.

## First implementation milestone

Build the homepage, Method page, and a single complete comparison route using placeholder data for:

`/questions/why-is-man-great-and-terrible`

The first route should prove:

- six worldview cards render responsively;
- Christian vs. non-Christian analytical labels differ correctly;
- summary and deep dive can coexist without visual overload;
- source references can be rendered from stable IDs;
- worldview filters can hide/show cards;
- content is loaded from collections rather than hard-coded in components.

## Do not mass-generate theology yet

The vertical slice should be reviewed before generating the remaining answer corpus. A flawed schema multiplied across ~150 answer entries will be expensive to repair.
