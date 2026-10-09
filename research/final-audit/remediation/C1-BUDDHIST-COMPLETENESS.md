# C1 Buddhist: Huayan and bounded enrichments

2026-10-09. Branch `c1-hindu-buddhist-completeness`, from `main` @ `513091c`. One Claude Opus 5.5 top-level session, no subagents, no reviewer during production. This record covers the Buddhist half of consolidated batch C1 (formerly R11). The Hindu half is in `C1-HINDU-COMPLETENESS.md`; the coordinating record is `C1-OVERVIEW.md`.

**Status: produced and self-checked only. Independent Review B (Buddhist) is still required.**

## Findings addressed

| Finding | Severity | Result |
|---|---|---|
| BUD-01 Huayan absent from `one-and-many` | MINOR (mandatory in C1) | Fixed from SEP "Huayan Buddhism" and Fazang's Chinese text. |
| BUD-03 Tsongkhapa thin (optional) | MINOR | One sentence added to `final-end` from the already-registered *Three Principal Aspects* (vv. 9, 11–12). No new Tsongkhapa source. |
| BUD-06 Thich Nhat Hanh (optional) | MINOR | Not added (see below). |
| BUD-05 `offspring-family` PQ | MINOR | Already fixed in R5; not touched. |
| BUD-02, BUD-04 provenance labels | MINOR | Assigned to C4; the passages were not edited in C1, so they were left. |

## Sources checked and registered

| id | Work, edition | Primary/secondary | Provenance | Passages |
|---|---|---|---|---|
| `sep-buddhism-huayan` | Bryan W. Van Norden and Nicholaos Jones, "Huayan Buddhism", *SEP* (first published 2019; substantive revision 17 Sep 2024) | Secondary (specialist survey) | — | Preamble, §§1.1–1.3, 2, 3, 4.2–4.4 read in full text fetched from the URL |
| `fazang-golden-lion-cbeta` | Fazang, *Jin shizi zhang* (金師子章), in Chengqian's 華嚴經金師子章註, Taishō T45 no. 1881, CBETA | Primary (Chinese) | Our paraphrase of the Chinese, never quoted. Only Fazang's base text was used: CBETA's TEI marks it `div type="orig"`, separate from Chengqian's commentary. | Whole essay; used §6 (參而不雜, five teachings), §7 gate 2 and gate 4 "Indra's net" (p. 669c), §8 (諸緣各住自位) |
| `tsongkhapa-three-principal-aspects` (existing) | tr. Adam Pearcey, Lotsawa House | Primary | Published translation; paraphrased | vv. 1–14 re-read; vv. 9, 11–12 newly cited |

A new specialist thinker profile, **Fazang** (643–712, `displayOrder` 4), was written from SEP §4. It was added to `one-and-many` metadata only.

**Attribution check for Indra's net.** Fazang's own text names the fourth of the ten mysterious gates 因陀羅網境界門 ("the gate of the realm of Indra's net"). Its image is that every hair of the golden lion contains lions, which enter a single hair, endlessly, "like the jewels of the heavenly emperor's net" (T45:669c). SEP says Indra's net is a metaphor from the Avataṃsaka Sūtra "frequently used" in Huayan, and lists it among Fazang's metaphors (§§1.3, 4.3). The page attributes the image to Fazang's essay and does not claim he invented it. The rafter-and-building argument is cited to SEP §1.3, which reports it from Fazang's *Treatise on the Five Teachings*; that treatise was not read directly.

## What was added to `one-and-many`

- **View.** One paragraph:
  - Huayan reads emptiness as interdependence: "one is all, all is one".
  - Fazang's rafter illustrates the relation.
  - The Golden Lion's Indra's-net gate, with the qualifications that the myriad things "intermingle without confusion" and each "keeps its own position".
  - Interpenetration is not numerical identity, because each dharma is distinct as existing and open as empty (SEP §4.3).
- **What it explains well.** One sentence: a thing's identity depends on its place in a whole without being swallowed by it.
- **Christian response.** Rewritten:
  - It recognises Huayan's relational plurality.
  - It states the three positions separately: Madhyamaka (empty designations), Huayan (the mutually dependent whole is ultimate, with One Mind as source but not separate, SEP §4.2) and Christianity (a Creator distinct from the world, one God in three persons).
  - It asks whether such a whole explains why it exists and has this pattern.
  - Classification: **comparative metaphysical disagreement about where explanation rests, not a contradiction**. The response does not claim that relational existence is unintelligible without a Creator.
- **Deep dive "Huayan among the schools."** It covers:
  - Fazang's five-grade *panjiao*, from the Golden Lion §6 and SEP §4.4;
  - Huayan versus Madhyamaka: dependence read negatively, as no own-nature, or positively, as the non-obstruction of *li* and *shi*;
  - Huayan versus Yogācāra: Fazang's objection to the defiled store-consciousness;
  - the statement that Huayan, like Tiantai, is one school's teaching.
- **Removed.** The research-status sentence "Huayan … is not treated here. Neither is 'the' Buddhist answer."
- **Scope** updated, and `fazang` added to thinkers.

**School-distinction checks.**

- **Early dependent origination.** The SN 12.15 middle way stays the baseline.
- **Madhyamaka.** Unchanged paragraphs; the "Not a hidden One" Deep dive is retained.
- **Yogācāra.** Distinguished through Fazang's critique.
- **Tiantai.** Its own section is unchanged, apart from dropping "as one example among many". The page does not equate Tiantai and Huayan.
- **Universality.** Interpenetration is never called a general Buddhist doctrine.

**Lede.**

- Revised from "Neither unity nor plurality is ultimate. … but nothing, not even emptiness, is a hidden One beneath them."
- New lede: "Things are many because they arise from many conditions, and connected because each depends on others. Madhyamaka finds no hidden One beneath them; Huayan holds that each thing contains all others without losing its place." (222 characters.)
- Reason: Fazang's One Mind is described by SEP as "the one and only source of all that exists", so the old unscoped "nothing … is a hidden One" would now overstate the page. The new lede scopes that claim to Madhyamaka.

**Pressure questions.**

- **PQ1** was "If both unity and plurality are empty, what makes some groupings, like a person, more than arbitrary labels?" Huayan's rafter argument answers it, so it is now scoped to the chariot analysis: "If unity is only a conventional label for many parts, as the chariot analysis holds, …".
- **PQ2** is unchanged.
- **No Huayan PQ was added.** Its question is put in the Christian response, and this keeps the page at two questions.

## Optional items

**Tsongkhapa (BUD-03): minimal addition.** `why-alive`, `self-salvation` and `final-end` already use the *Three Principal Aspects* for the freedoms of human life, renunciation and bodhicitta (vv. 2–9). `final-end`'s Deep dive, however, ended on an unanswered question: "how wisdom and compassion together characterize awakening". Tsongkhapa's own answer was missing, and it is in the registered text: without the wisdom realizing the nature of things, renunciation and bodhicitta cannot cut conditioned existence at its root (v. 9); dependent arising and emptiness must be understood together (vv. 11–12). One sentence (+32 words) was added. No *Lamrim Chenmo* or *Ocean of Reasoning* source was sought: the standard English translations are copyrighted, and no further claim was judged missing.

**Thich Nhat Hanh (BUD-06): not added.** *Living Buddha, Living Christ* (1995) is in copyright, and no lawful full text or substantial authorised excerpt was checked. Paraphrasing an unread book, or quoting popular summaries, would breach the verification protocol. `buddhism/jesus` keeps its two checked receptions (Soyen Shaku; the Dalai Lama via Cobb), which already show the pattern the page describes. The page's existing sentence "their works were not consulted for this page" is a process note. It is left for the C4 site-wide process-note pass, not rewritten here.

## Answers inspected and changed

**Read in full:** `one-and-many`, `ultimate-reality`, `why-alive`, `self-salvation`, `final-end`, `jesus`.

| Answer | Change | Words before → after (visible / deep after) |
|---|---|---|
| `one-and-many` | Huayan view paragraph, explains-well sentence, Christian response, PQ1 scoped, Deep dive; scope, lede and thinkers updated | 449 → 793 (+344; 493 / 300) |
| `final-end` | One Tsongkhapa sentence in the Deep dive | 625 → 657 (+32) |
| **Lane total** | 2 of 28 answers changed | **19,315 → 19,691 (+376, +1.9%)** |

**Proportionality.** `one-and-many` is concise-tier. Its visible text grew from 276 to 493. In production it was compressed twice: the rafter and lion details were shortened, the response was cut, and a third PQ and an unsourced sentence about Tiantai's scriptures were dropped. The mandated Huayan explanation cannot be stated fairly in less without reducing it to "Indra's net". Review B should judge whether to trim further.

## Consistency

- **Lane pages read together.** `one-and-many`, `ultimate-reality`, `final-end`, `self-salvation` and `why-alive` were read together for:
  - dependent origination;
  - emptiness;
  - interpenetration (only in `one-and-many`, scoped to Huayan);
  - no-self;
  - liberation;
  - Pure Land.
- **R3/R6 Pure Land wording** (the eighteenth vow and the Contemplation Sutra's grave-offender narrative) is untouched.
- **Flag for Review B.** `buddhism/ultimate-reality`'s lede ("Buddhism places no permanent being or substance beneath reality …") is unscoped, while its scope string and body cover Pāli, Theravāda, Madhyamaka and Yogācāra only. With Huayan now described elsewhere (One Mind as source "without separation"), a reviewer may judge whether the lede needs scoping. It was not changed: the claim is not false of Huayan as SEP describes it, which denies a separate ground, and the page itself was outside C1's edit scope.
- **Christian counterpart.** `christianity/one-and-many` was read to confirm that the Christian response's Trinitarian statement matches its counterpart.

## Safeguards preserved

The following were not altered:

- no-self, dependent origination, Madhyamaka, Yogācāra, Tiantai and Buddha-nature wording;
- Pure Land Other Power and the R3/R6 corrections;
- moral accountability without an enduring self;
- R6 Buddhist ledes, apart from `one-and-many` as recorded above.

## Deferred to C4

- BUD-02 (the Dōgen paraphrase label);
- BUD-04 ("our translation" applied to a summary in `something-rather-than-nothing`);
- the `jesus` process note;
- Buddhist thinker metadata generally.

## Points for Review B

1. Is the SEP-based Huayan summary accurate, especially §4.3's existing/empty distinction and the One Mind sentence (§4.2) in the Christian response?
2. Is the paraphrase of the Chinese in §§6–8 faithful (參而不雜; 各住自位; the Indra's-net gate)?
3. Check the Indra's net attribution to Fazang's essay.
4. Is the Huayan/Madhyamaka contrast fair to Madhyamaka?
5. Does the Christian response avoid demanding a Creator for intelligibility?
6. The lede revision and PQ1 scoping.
7. The `ultimate-reality` lede flag above.
8. The Tsongkhapa sentence against vv. 9, 11–12.
