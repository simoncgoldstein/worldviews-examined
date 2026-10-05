# Research brief: `great-and-terrible`

Shared contract for every research, review and drafting agent working on Phase 3.

**Public question:** *Why is man so great and so terrible?*
Internal id `great-and-terrible`; public slug `why-is-man-great-and-terrible`.

**The phenomenon to be explained.** The extraordinary combination seen in human beings:
rationality, creativity, civilization, love, sacrifice, moral aspiration and apparent dignity,
alongside cruelty, deceit, domination, disordered desire, self-destruction, and knowingly doing
what one believes to be wrong.

Read first: `docs/METHODOLOGY.md`, `docs/CONTENT-MODEL.md`, `docs/SOURCES.md`, and the current
registries `src/content/sources/sources.yaml` and `src/content/thinkers/thinkers.yaml`.

## 1. Independence

- Steelman researchers do **not** write Christian critique, and do not read other worldviews'
  packets or answer drafts. Christian-response agents read the steelman packet they respond to,
  not the other responses.
- Do not research a non-Christian worldview by searching for Christian criticism of it. Christian
  polemical sources are never evidence for what another tradition teaches.

## 2. Precision of claims

- Name the school or thinker when internal diversity matters ("In Ash'arite theology…",
  "Advaita Vedanta, especially in Shankara…"), not "Islam teaches…" / "Hinduism teaches…".
- Do not use *contradiction*, *incoherent*, *cannot account for*, *fails* unless the argument
  actually establishes that. Distinguish: logical contradiction; internal tension; explanatory
  incompleteness; unsupported ultimate premise; underdetermination; Christian theological
  disagreement; comparatively weaker explanatory grounding.
- Do not confuse "this worldview does not use the Christian category" with "this worldview has
  no answer".
- Do not overstate confidence in historical, philosophical or theological claims. Mark
  contested interpretations as contested.
- Same standard of charity and precision for all six lanes.

## 3. Source hierarchy

Positive account: (1) canonical/primary texts; (2) major representative thinkers; (3) recognized
internal scholars or institutions; (4) strong academic scholarship (e.g. SEP, IEP, university
press monographs).

Christian response: (1) Scripture; (2) Westminster Standards where directly relevant; (3) major
Reformed theologians; (4) Van Til/Bahnsen where the point is about worldview or epistemology;
(5) reliable historical/philosophical scholarship.

## 4. Verifiable sources and the verification protocol

Prefer editions whose text you can actually open (CCEL, New Advent, SuttaCentral, Access to
Insight, quran.com, Sefaria, Perseus, archive.org full text, publisher open access, SEP/IEP,
Google Books preview). An accessible edition that can be checked is better for this site than a
prestigious edition that cannot.

A source may be marked `checked` only when **all** of these hold:

1. Bibliographic metadata (author, title, translator/editor, edition, place, publisher, year)
   was confirmed against the edition itself, the publisher's page, or a library catalog record.
2. The URL, if given, resolves to that work.
3. The locator convention is confirmed (book.chapter.section, surah:ayah, sutta number,
   tractate+folio, Upanishad section numbers, page numbers of *that* edition, etc.).
4. Every cited passage was read and supports the specific claim it is attached to — in the
   cited edition, **or**, where the edition is not openly accessible, in an accessible text that
   uses the same canonical locator system (Bible verse, Qur'an ayah, Talmud folio, sutta and
   verse numbers, Institutes book.chapter.section, Upanishad section). In the latter case, do not
   quote that translation verbatim and do not cite its page numbers.

Page-number locators require access to that edition's pagination. Record how verification was
done (one line) so it can go into the source's `notes`. If a passage could not be read, say so;
it stays unverified. Never fabricate a locator, page number or quotation.

## 5. Source records

For each source you propose, give a YAML block in the registry's format (see
`src/content/sources/sources.yaml` and `src/content/schemas.ts`). Reuse an existing `id` when it
is the same edition; propose a new kebab-case id (`author-shortwork`) otherwise. Types:
`scripture | primary | confessional | commentary | book | article | academic | web`.

## 6. Citation format in drafts

MDX: `<Cite source="calvin-institutes" locator="II.2.15" />` immediately after the clause it
supports. Attributes double-quoted. Locator is short plain text. Cite the specific passage that
supports the specific claim — never a citation dumped at paragraph end because a source discusses
the topic. Avoid citation clusters.

## 7. Answer shape (MDX body; headings spelled exactly)

Reformed Christianity: `## The Christian view` · `## What this explains well` ·
`## Strongest objection` · `## Christian reply` · `## Deep dive`

Others: `## The view` · `## What this explains well` · `## Christian response` ·
`## Pressure questions` (a markdown list) · `## Deep dive`

Subheadings inside Deep dive use `####` (section headings render as h3). Visible short sections
must be useful without opening Deep dive and comparable across six cards on one page:

- The view / The Christian view: ~130–220 words.
- What this explains well: ~80–160 words; genuine strengths, never backhanded.
- Christian response / Strongest objection / Christian reply: ~150–260 words each.
- Pressure questions: 2–3 brief, diagnostic questions that do not smuggle in the Christian conclusion.
- Deep dive: ~600–1300 words; adds primary-source grounding, school distinctions, thinker-level
  nuance and historical context. It must not merely repeat the summary.

Comparable seriousness matters more than equal length.

## 8. Output locations

- Research packets: `research/questions/great-and-terrible/packets/<worldviewId>.md`
- Reviews: `research/questions/great-and-terrible/reviews/`
- Drafts: `research/questions/great-and-terrible/drafts/`

Do not edit `src/` unless your task explicitly says so. Worldview ids: `christianity`,
`naturalism`, `judaism`, `islam`, `hinduism`, `buddhism`.
