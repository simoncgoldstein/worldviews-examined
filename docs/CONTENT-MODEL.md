# Content Model

## Design goal

Keep worldview research independent from rendering code. A content editor should be able to add or revise an answer without touching UI components.

The authoritative definitions are the Zod schemas in `src/content/schemas.ts` and the section rules in `src/lib/answer-sections.ts`. This document explains them.

## IDs and slugs

- `id`: stable internal identifier (`/^[a-z0-9]+(-[a-z0-9]+)*$/`). Used for every reference. Never changes once content exists.
- `slug`: readable public URL segment. May change later without touching content.

Example: `id: great-and-terrible`, `slug: why-is-man-great-and-terrible`, `title: Why is man so great and so terrible?`.

## Collections

### `worldviews` (`src/content/worldviews/worldviews.yaml`)

```ts
{
  id, slug, name, shortName,
  analysisKind: 'christian' | 'nonChristian', // selects the answer section set and presentation
  description,
  scopeNote,                                   // what the lane covers and does not claim
  traditionNotes: { name, note }[],            // schools/streams; never present a lane as uniform
  order
}
```

### `categories`

```ts
{ id, slug, title, description, order }
```

### `questions`

```ts
{
  id, slug, title, shortTitle?, category /* category id */,
  summary,            // neutral framing, never an answer
  order, featured, relatedQuestions: string[] /* question ids */
}
```

### `thinkers`

```ts
{
  id, slug, name, worldview /* worldview id */,
  role: 'primary' | 'specialist' | 'interlocutor',
  usedFor: string[],              // subjects, mainly for specialists
  schools: string[],
  birthYear?, deathYear?, era?,   // era for approximate or debated dating
  description,
  representativeWorks: { title, year?, sourceId? }[],
  notes?
}
```

The registry is a research map, not a claim that thinkers within a lane agree.

**Roles**

| Role | Meaning |
|---|---|
| `primary` | A major thinker regularly used to represent a significant strand of the worldview. |
| `specialist` | Used primarily for particular subjects (ethics, epistemology, mystical theology, affections, philosophy of mind, ...). |
| `interlocutor` | Historically or philosophically important to the comparison but **not** presented as a representative of the site's worldview lane. |

Lanes do not need the same number of primary thinkers; every lane needs at least one (validated). The UI shows primary representatives first, then specialists, and keeps interlocutors visibly separate. A Christian interlocutor is labelled as such, because it is not a representative of the site's Reformed apologetic method. Thomas Aquinas in particular is distinct from Van Tilian method.

The finalized rosters are listed in `docs/SOURCES.md`.

### `sources`

```ts
{
  id, type: 'scripture' | 'primary' | 'confessional' | 'commentary' | 'book' | 'article' | 'academic' | 'web',
  title, author?, traditionTags: string[] /* worldview ids */,
  containerTitle?, translator?, editor?, edition?, place?, publisher?, year?, url?, doi?,
  shortCitation?,     // used for second and later citations
  displayCitation?,   // overrides the citation derived from the metadata
  notes?,
  verificationStatus: 'unverified' | 'checked',   // default 'unverified'
  verifiedOn?: 'YYYY-MM-DD'                       // required when 'checked'
}
```

Each work is registered once. Locators belong to individual citations.

**Verification.** `checked` means the title, author/editor/translator, edition, publication details, locator conventions and URL were verified against the actual edition. Seed entries are `unverified`; do not set `checked` without doing that work. `outline`, `draft` and `researched` answers may cite unverified sources; `reviewed` and `complete` answers may not (validated).

### `answers`

One MDX file per worldview/question pair at `src/content/answers/<worldviewId>/<questionId>.mdx`.

**Frontmatter is metadata only:**

```ts
{
  worldviewId, questionId,
  reviewStatus: 'outline' | 'draft' | 'researched' | 'reviewed' | 'complete',
  scope?, traditionNotes: string[],
  thinkers: string[],               // thinker ids
  analysis: { kind: 'christian' | 'nonChristian' },
  lede?                             // optional, <= 240 chars, unsourced teaser for navigation only
}
```

`analysis.kind` must match the worldview's `analysisKind` (validated). Do not put argument, claims or summaries in frontmatter; unsourced prose there would bypass the citation system.

**All prose lives in the MDX body under level-two headings**, spelled exactly and in this order.

Christian answers (`kind: christian`):

```md
## The Christian view
## What this explains well
## Strongest objection
## Christian reply
## Deep dive
```

Non-Christian answers (`kind: nonChristian`):

```md
## The view
## What this explains well
## Christian response
## Pressure questions
## Deep dive
```

At build time a remark plugin wraps each section in an `AnswerSection` component and renders its heading one level down (an `h3` inside the worldview's `h2`) with an ID unique to that answer. The Deep dive renders as a collapsible `<details>`; every other section is always visible. Section marks (`§` before Christian response; `◇` before Strongest objection and Pressure questions) are CSS, keyed to the section, and hidden from assistive technology.

**Status rules**

| Status | Meaning | Enforced |
|---|---|---|
| `outline` | Placeholder only | structure only: no preamble, canonical titles, no duplicates, canonical order. Sections may be partial. |
| `draft` | Written, not source-checked | same as outline |
| `researched` | Sourced and structurally complete | all core sections present and non-empty (everything except Deep dive); non-Christian Pressure questions contains a list item |
| `reviewed` | Steelman and Reformed review passed | all of the above, plus: a non-empty Deep dive; `scope` and at least one thinker; at least one `<Cite />` in the view section and in the principal analytical section (Christian response / Strongest objection); only `checked` sources cited |
| `complete` | Ready for public use | same as `reviewed` |

An entry therefore cannot be marked researched or higher without its analytical sections. Coverage across the 28 questions × 6 worldviews is intentionally incomplete until Phase 4; `npm run validate` prints it.

## Citations

Write citations inline in any section of an answer body:

```mdx
... knowledge of God and of ourselves are bound together.<Cite source="calvin-institutes" locator="I.1.1" />
<Cite source="bible-esv" locator="Genesis 1:27" note="optional note" />
```

- `source` is a registered source id; `locator` is a short plain-text locator (`I.3.1`, `WCF 1.4`, `4:157`, `pp. 25–31`, `chapter 4`, `365a`). Both are required; attributes must be double-quoted string literals.
- Numbering is document-wide across all sections of one answer. Each distinct (source, locator) pair gets one number in order of first appearance; repeating the same pair, even in another section, reuses the number and gives its Sources entry one `↩` backlink per use.
- The same source cited at a different locator gets its own number; its Sources entry uses the source's `shortCitation`.
- Markers render as `<sup class="cite"><a href="#…-src-N">N</a></sup>`, a real anchor needing no JavaScript, with an `aria-label` such as "Source 1: Calvin, Institutes, I.1.1". The numbered Sources list sits after the answer's sections (outside the collapsible Deep dive) and is the `:target`.
- Fragment links into a closed Deep dive open it in Chrome; other browsers' behavior is not verified. The visible markers a reader activates are always in sections that are already visible or already open.

## Source hierarchy

For a worldview's own account: canonical/primary texts; major thinkers within the tradition; recognized internal institutions or scholars; high-quality academic scholarship. Christian polemical sources are not primary evidence for what another worldview believes.

For the Christian response: Scripture; Westminster Standards where directly relevant; major Reformed theologians; Van Til and Bahnsen where apologetic method is involved; reliable historical and philosophical scholarship.

## Review metadata

Consider adding later:

```ts
{
  reviewedBy?: string[],
  lastSubstantiveReview?: string,
  reviewNotes?: string
}
```

## UI contract

Section headings come from the MDX body; the card renders them in the order written.

### Non-Christian answer card

1. The view
2. What this explains well
3. § Christian response
4. ◇ Pressure questions
5. Deep dive (collapsible)
6. Representative thinkers
7. Sources

### Christian answer card

1. The Christian view
2. What this explains well
3. ◇ Strongest objection
4. Christian reply
5. Deep dive (collapsible)
6. Representative thinkers
7. Sources

### Editorial notation

`§` analytical or major subsection; `◇` pressure question or strongest objection; `↩` citation backlink; `↗` external source; `·` metadata separator; `→` deeper navigation; `←` return navigation. Use sparingly; do not add decorative religious icons.
