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
  description,                    // one line, used in lists and as the page lede
  bio?,                           // concise biography, eventually about 80-150 words
  significance?,                  // why the thinker matters to Worldviews Examined
  keyIdeas: string[],             // short concepts for scanning and later cross-linking
  displayOrder?,                  // explicit order within worldview + role (1 = first)
  representativeWorks: { title, year?, sourceId? }[],  // link sourceId rather than duplicating bibliography
  notes?
}
```

The registry is a research map, not a claim that thinkers within a lane agree.

**Biographies are a core thinker-page feature, but are written as thinkers are used.** `bio`, `significance` and `keyIdeas` are optional so the registry can be seeded without inventing profiles. A missing biography is shown as "not yet written", never as finished. Biographies and significance are normally completed when a thinker is first used in researched content, and are required (validated) for every thinker named by a `reviewed` or `complete` answer. A `bio` outside roughly 60-180 words produces a validation warning. Profiles were first written and verified in Phase 3 for the thinkers cited by the flagship question; other entries remain unprofiled until used. Portraits or sketches are deferred to final polish (Phase 7); there is no image support yet.

**Ordering is explicit, not alphabetical.** Within a worldview, thinkers are ordered by role (primary, specialist, interlocutor), then by `displayOrder`, then by name as a fallback for entries without one. `displayOrder` must be unique within a worldview and role (validated). The Reformed primary sequence is intentionally historical and intellectual: Augustine, Calvin, Turretin, Witsius, Bavinck, Vos, Van Til, Bahnsen. Worldview, registry and thinker pages all respect this order.

**Thinker page layout:** name; dates · worldview · school · role; lede; biography; why this thinker matters; key ideas; representative works; the questions the thinker appears in.

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
  verifiedOn?: 'YYYY-MM-DD'                       // required when 'checked'; quote it in YAML ("2026-10-05"), since an unquoted date is parsed as a Date
}
```

Each work is registered once. Locators belong to individual citations.

**Verification happens as research enters `reviewed` / `complete` status**, source by source, not in bulk. `checked` means the title, author/editor/translator, edition, publication details, locator conventions and URL were verified against the actual edition. Seed entries are `unverified`; do not set `checked` without doing that work. `outline`, `draft` and `researched` answers may cite unverified sources; `reviewed` and `complete` answers may not (validated).

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
  lede?                             // optional, <= 240 chars: the one-sentence thesis shown under the worldview name
}
```

`analysis.kind` must match the worldview's `analysisKind` (validated). Do not put argument, claims or summaries in frontmatter; unsourced prose there would bypass the citation system. The single exception is `lede`, the answer's one-sentence thesis: it may only restate, in one sentence, what the cited sections below already establish, so a reader can skim the six theses and see the contrast.

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

At build time a remark plugin wraps each section in an `AnswerSection` component and renders its heading one level down (an `h3` inside the worldview's `h2`) with an ID unique to that answer. Subheadings inside a section (`####` in the Deep dive, which render as `h4`) also get IDs namespaced to the answer, so identical subheadings in different answers do not collide on the question page. The Deep dive renders as a collapsible `<details>`; every other section is always visible. Section marks (`§` before Christian response; `◇` before Strongest objection and Pressure questions) are CSS, keyed to the section, and hidden from assistive technology.

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
- Numbering runs once across the whole question page (1…N). Within an answer, each distinct (source, locator) pair gets one number in order of first appearance; repeating the same pair, even in another section or the Deep dive, reuses the number and gives its Sources entry one `↩` backlink per use. Each answer's numbers continue from the previous answer in worldview order (`AnswerEntry.offset` in `src/lib/content.ts`). The same pair cited in two different answers gets a number in each, because sources are listed under the answer where the reader met them.
- The same source cited at a different locator gets its own number; its Sources entry uses the source's `shortCitation`.
- Markers render as `<sup class="cite"><a href="#…-src-N">N</a></sup>`, a real anchor needing no JavaScript, with an `aria-label` such as "Source 1: Calvin, Institutes, I.1.1". One consolidated **Sources** section follows all the cards on the question page, subdivided by the answer in which each source is cited (not by the source's own tradition), and its entries are the `:target`. Anchor ids stay namespaced per answer, so the displayed number can change without changing any link.
- **Deep dive fragment behavior.** The Deep dive is a semantic `<details>`. A small framework-free script (`src/scripts/reveal-hash.ts`) opens any closed ancestor `<details>` of the fragment target on initial load and on `hashchange`, then scrolls the target into view (instantly, so it never animates and respects reduced motion). It exists because a source's `↩` backlink can point at a citation inside a closed Deep dive, and browsers other than Chrome are not guaranteed to open it. Citation to source navigation is plain anchor navigation and needs no JavaScript; the script only improves the closed-details case.

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

Section headings come from the MDX body; the card renders them in the order written. On wide screens the two cards in each row share subgrid rows (header, five sections, thinkers, sources), so comparable sections line up and can be read across; on narrow screens cards stack and each stands alone.

### Non-Christian answer card

1. The view
2. What this explains well
3. § Christian response
4. ◇ Pressure questions
5. Deep dive (collapsible)
6. Representative thinkers

### Christian answer card

1. The Christian view
2. What this explains well
3. ◇ Strongest objection
4. Christian reply
5. Deep dive (collapsible)
6. Representative thinkers

Each card opens with the worldview name and its one-sentence thesis (`lede`). Sources for all cards are listed once, after the cards (see Citations).

### Editorial notation

`§` analytical or major subsection; `◇` pressure question or strongest objection; `↩` citation backlink; `↗` external source; `·` metadata separator; `→` deeper navigation; `←` return navigation. Use sparingly; do not add decorative religious icons.
