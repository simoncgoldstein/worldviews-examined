# Core Question Catalog

V1 has a fixed map of 28 questions organized into six broad domains. IDs and existing slugs remain stable.

## IDs and public slugs

Every question has two distinct identifiers:

- `id`: a short, stable, internal identifier (the `ID` column below). It is used in content references, answer file names and validation, and must not change once content exists.
- `slug`: the readable public URL segment, for example `/questions/why-is-man-great-and-terrible/`. A slug may be revised later (with a redirect) without touching any content reference.

For example, `id: great-and-terrible`, `slug: why-is-man-great-and-terrible`, `title: Why is man so great and so terrible?`. The slugs for all questions live in `src/content/questions/questions.yaml`, which is the source of truth; the tables below list IDs only.

## 1. Ultimate Reality

| ID | Question |
|---|---|
| `ultimate-reality` | What ultimately exists? |
| `something-rather-than-nothing` | Why is there something rather than nothing? |
| `ultimate-personal` | Is ultimate reality personal? |
| `order` | Why is reality orderly rather than chaotic? |
| `one-and-many` | Why is reality both one and many? |

## 2. Knowledge & Truth

| ID | Question |
|---|---|
| `knowledge-possible` | Why can we know anything? |
| `logic-binding` | Why is logic universally binding? |
| `induction` | Why should induction and scientific regularity work? |
| `ultimate-authority` | What is the ultimate authority for truth? |

## 3. Man & Human Nature

| ID | Question |
|---|---|
| `what-is-man` | What is man? |
| `why-alive` | Why are we alive? |
| `offspring-family` | Why do humans have offspring and form families? |
| `love-beauty-creativity` | Why do humans love, create, and seek beauty? |
| `worship` | Why does man worship or absolutize something? |
| `great-and-terrible` | Why is man simultaneously so great and so terrible? |

## 4. Morality, Evil & the Human Problem

| ID | Question |
|---|---|
| `know-the-good` | Why do we know or seek the good? |
| `fail-the-good` | Why do we fail to do the good we know? |
| `evil` | What is evil, and where does it come from? |
| `suffering` | Why do we suffer? |
| `death` | Why do we die, and why does death seem wrong? |
| `self-deception` | Why can humans know truth and still deceive themselves? |

## 5. Salvation, Liberation & Human Destiny

| ID | Question |
|---|---|
| `self-salvation` | What is wrong with man, and how can he be saved or liberated? |
| `guilt` | How can real guilt be dealt with? |
| `after-death` | What happens after death? |
| `final-end` | What is man's final end? |

## 6. Revelation & History

| ID | Question |
|---|---|
| `revelation` | Has God or ultimate reality revealed itself? How would we know? |
| `history` | Where is history going? Is it linear, cyclical, or ultimately directionless? |
| `jesus` | Who is Jesus Christ, and what follows if the central historical claims about Him are true? |

## Note on count

The tables above contain exactly 28 entries, all seeded in `src/content/questions/questions.yaml`. The map is intentionally broad enough and frozen for this production cycle. Do not add standalone questions for grace, works, assurance, holy books, historical evidence, resurrection evidence, internal consistency, free will, consciousness, mathematics, or denominational diversity: develop them within existing anchors and medium questions. Anchors carry foundational argument; medium questions apply it; concise questions link back.

The `self-salvation` anchor retains `slug: can-man-save-himself` and anchor depth. Its answer brief is **diagnosis → remedy → means → role of grace/effort → final state**, including guilt, transformation, and assurance where relevant. The `jesus` anchor must compare each lane's claims with the historical evidence as well as describe those claims. See `docs/METHODOLOGY.md`.

## Featured question

`great-and-terrible` (public URL `/questions/why-is-man-great-and-terrible/`) should receive prominent homepage placement. It integrates anthropology, morality, common grace, sin, dignity, culture, and redemption unusually well.
