# Content Model

## Design goal

Keep worldview research independent from rendering code. A content editor should be able to add or revise an answer without touching UI components.

## Collections

### `worldviews`

One entry per worldview family.

Suggested fields:

```ts
{
  id: string,
  name: string,
  shortName: string,
  description: string,
  scopeNote: string,
  internalTraditions: string[],
  featuredThinkerIds: string[],
  order: number
}
```

### `categories`

```ts
{
  id: string,
  name: string,
  description: string,
  order: number
}
```

### `questions`

```ts
{
  id: string,
  categoryId: string,
  title: string,
  shortTitle?: string,
  framing: string,
  relatedQuestionIds: string[],
  featured?: boolean,
  order: number
}
```

### `answers`

Prefer one MDX entry per worldview/question pair.

Suggested frontmatter:

```ts
{
  worldviewId: string,
  questionId: string,
  status: 'outline' | 'draft' | 'researched' | 'reviewed',
  scope?: string,
  traditionNote?: string,
  summary: string,
  strengths: string[],
  sourceIds: string[],
  representativeThinkerIds: string[],
  analysis: {
    kind: 'christian' | 'nonChristian',
    strongestObjection?: string,
    christianReplySummary?: string,
    christianResponseSummary?: string,
    pressureQuestions?: string[]
  }
}
```

The MDX body contains the deep dive.

### `sources`

Suggested fields:

```ts
{
  id: string,
  type: 'scripture' | 'primary' | 'confessional' | 'commentary' | 'book' | 'article' | 'academic' | 'web',
  traditionTags: string[],
  author?: string,
  title: string,
  containerTitle?: string,
  translator?: string,
  edition?: string,
  publisher?: string,
  year?: number,
  url?: string,
  doi?: string,
  notes?: string
}
```

Locators belong on individual citation usages when practical, because one source may support many claims at different locations.

### `thinkers`

```ts
{
  id: string,
  name: string,
  worldviewId: string,
  tradition?: string,
  era?: string,
  description: string,
  keyWorkSourceIds: string[]
}
```

## Deep-dive citation model

The long-form MDX should support a reusable citation component such as:

```mdx
<Cite source="calvin-institutes" locator="I.3.1" />
```

or a compact Markdown-compatible syntax transformed at build time.

Rendered citations should expose the source title and locator without forcing the reader to leave the page. The source registry should render a canonical source page and bibliography.

## Review metadata

Consider adding later:

```ts
{
  reviewedBy?: string[],
  lastSubstantiveReview?: string,
  reviewNotes?: string
}
```

This is useful because steelman quality matters more than raw content volume.

## UI contract

### Non-Christian answer card

1. View
2. What it explains well
3. Christian response
4. Pressure point
5. Deep dive
6. Sources

### Christian answer card

1. Christian view
2. What it explains well
3. Strongest objection
4. Christian reply
5. Deep dive
6. Sources

The card renderer should derive the correct labels from `analysis.kind`, not from duplicated prose in content files.
