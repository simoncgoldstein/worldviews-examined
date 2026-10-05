# Content Model

## Design goal

Keep worldview research independent from rendering code. A content editor should be able to add or revise an answer without touching UI components.

The authoritative definitions are the Zod schemas in `src/content/schemas.ts`. This document explains them.

## IDs and slugs

- `id`: stable internal identifier (`/^[a-z0-9]+(-[a-z0-9]+)*$/`). Used for every reference. Never changes once content exists.
- `slug`: readable public URL segment. May change later without touching content.

Example: `id: great-and-terrible`, `slug: why-is-man-great-and-terrible`, `title: Why is man so great and so terrible?`.

## Collections

### `worldviews` (`src/content/worldviews/worldviews.yaml`)

```ts
{
  id, slug, name, shortName,
  analysisKind: 'christian' | 'nonChristian', // drives UI labels
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
  id, slug, name, worldview /* worldview id */, schools: string[],
  birthYear?, deathYear?, era?,   // era for approximate or debated dating
  description,
  representativeWorks: { title, year?, sourceId? }[],
  notes?
}
```

The registry is a research map, not a claim that thinkers within a lane agree.

### `sources`

```ts
{
  id, type: 'scripture' | 'primary' | 'confessional' | 'commentary' | 'book' | 'article' | 'academic' | 'web',
  title, author?, traditionTags: string[] /* worldview ids */,
  containerTitle?, translator?, editor?, edition?, place?, publisher?, year?, url?, doi?,
  shortCitation?,     // used for second and later citations
  displayCitation?,   // overrides the citation derived from the metadata
  notes?
}
```

Each work is registered once. Locators belong to individual citations.

### `answers`

One MDX file per worldview/question pair at `src/content/answers/<worldviewId>/<questionId>.mdx`.

```ts
{
  worldviewId, questionId,
  reviewStatus: 'outline' | 'draft' | 'researched' | 'reviewed' | 'complete',
  scope?, traditionNotes: string[],
  summary,                 // "The view"
  strengths: string[],     // "What this explains well"
  thinkers: string[],      // thinker ids
  analysis:                // discriminated on `kind`
    | { kind: 'christian',    strongestObjection?, christianReply? }
    | { kind: 'nonChristian', christianResponse?, pressureQuestions: string[] }
}
```

The MDX body is the deep dive. Its citations are not stored in frontmatter; they are written inline and extracted at build time.

`analysis.kind` must match the worldview's `analysisKind` (validated). Labels are derived from `kind` in `src/lib/labels.ts`, never from content prose.

#### Review status and required sections

| Status | Meaning | Enforced by the schema |
|---|---|---|
| `outline` | Placeholder only | nothing beyond `summary` |
| `draft` | Written, not source-checked | nothing beyond `summary` |
| `researched` | Sourced and structurally complete | `strengths`, plus the full analytical section for its kind |
| `reviewed` | Steelman and Reformed review passed | all of the above, plus `scope` and at least one `thinkers` entry |
| `complete` | Ready for public use | same as `reviewed` |

Non-Christian analytical section: `christianResponse` and at least one `pressureQuestions` entry. Christian analytical section: `strongestObjection` and `christianReply`. An entry therefore cannot be marked researched or higher without its analytical section.

Coverage across the 28 questions × 6 worldviews is intentionally incomplete until Phase 4; `npm run validate` prints it.

Known limitation: citations can only appear in the MDX body, not in the frontmatter summary fields. Phase 3 should decide whether summary-level claims need citations (for example by moving sections into the MDX body).

## Citations

Write citations inline in answer MDX:

```mdx
... knowledge of God and of ourselves are bound together.<Cite source="calvin-institutes" locator="I.1.1" />
<Cite source="bible-esv" locator="Genesis 1:27" note="optional note" />
```

- `source` is a registered source id; `locator` is a short plain-text locator (`I.3.1`, `WCF 1.4`, `4:157`, `pp. 25–31`, `chapter 4`, `365a`). Both are required; attributes must be double-quoted string literals.
- Each distinct (source, locator) pair gets one number in order of first appearance; repeating the same pair reuses the number and gives the Sources entry one `↩` backlink per use.
- The same source cited at a different locator gets its own number; its Sources entry uses the source's `shortCitation`.
- Markers render as `<sup class="cite"><a href="#…-src-N">N</a></sup>`, a real anchor needing no JavaScript, with an `aria-label` such as "Source 1: Calvin, Institutes, I.1.1". The Sources entry is the `:target` and links back.

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

Section labels come from `analysis.kind`.

### Non-Christian answer card

1. The view
2. What this explains well
3. § Christian response
4. ◇ Pressure question(s)
5. Representative thinkers
6. Deep dive, with its numbered Sources

### Christian answer card

1. The Christian view
2. What this explains well
3. ◇ Strongest objection
4. Christian reply
5. Representative thinkers
6. Deep dive, with its numbered Sources

### Editorial notation

`§` analytical or major subsection; `◇` pressure question or strongest objection; `↩` citation backlink; `↗` external source; `·` metadata separator; `→` deeper navigation; `←` return navigation. Use sparingly; do not add decorative religious icons.
