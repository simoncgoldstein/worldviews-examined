# C1 Hindu: devotional, image, Śaiva and aesthetic completeness

2026-10-09. Branch `c1-hindu-buddhist-completeness`, from `main` @ `513091c` (merge of PR #21, R6). One Claude Opus 5.5 top-level session, no subagents, no reviewer during production. This record covers the Hindu half of consolidated batch C1 (formerly R7). The Buddhist half is in `C1-BUDDHIST-COMPLETENESS.md`; the coordinating record is `C1-OVERVIEW.md`.

**Status: produced and self-checked only. Independent Review A (Hindu) is still required.**

## Findings addressed

| Finding | Severity | Result |
|---|---|---|
| HIN-01 image theology absent from `worship` | IMPORTANT | Fixed. The view now gives Śaṅkara's symbol account and the Śrīvaiṣṇava doctrine of the image descent (*arcāvatāra*) from a checked primary text. The Christian response argues from the Lord's prohibition, not from a charge of confusing matter with God. PQ3 revised. |
| HIN-02 bhakti beyond Rāmānuja | IMPORTANT | Fixed. Bhāgavata Purāṇa (checked translation) in `worship` and `final-end`; Gauḍīya disclosure (checked primary translation) in `final-end`, `love-beauty-creativity` and `ultimate-personal`. |
| HIN-02 Śaiva traditions | IMPORTANT (part) | Fixed. One bounded Śaiva Siddhānta paragraph in `ultimate-personal`, from the *Śivajñānabodham*. Kashmir Śaivism is not expounded. |
| HIN-02 rasa and Abhinavagupta | IMPORTANT (part) | Fixed. A view paragraph in `love-beauty-creativity` and a Deep dive separating the three uses of *rasa*, from S. K. De (1925). |
| HIN-06 Śaṅkara in all 28 thinker lists | MINOR | Not swept (assigned to C4). Abhinavagupta added only where he contributes. |
| XQ-02 process notes on edited pages | — | Removed where C1 rewrote the passage: `worship` ("not researched here"), `love-beauty-creativity` ("not treated here", "not surveyed"), `ultimate-reality` ("What is left out"). No lane-wide sweep. |

HIN-03 to HIN-05 were closed by R3, R5 and R6 and were not reopened. The audit reports are unchanged.

## Sources checked and registered

Every source below was read in an accessible public-domain copy (US status: published before 1931), with a `notes` line in `src/content/sources/sources.yaml` recording the edition, the access route and every passage read.

| id | Work, edition | School | Primary/secondary | Translation provenance | Passages used |
|---|---|---|---|---|---|
| `govindacharya-artha-pancaka` | Piḷḷai Lokācārya, *Artha-pañcaka*, tr. A. Govindācārya, ed. G. A. Grierson, *JRAS* 1910, pp. 565–607 (archive.org DLI scan of the 1910 volume) | Śrīvaiṣṇava (Teṅkalai) | Primary (13th-century Tamil summary) | Free English translation, "expanded and illustrated" (pp. 568, 570), never quoted as Lokācārya's words; Nārāyaṇa Yati's Sanskrit version printed pp. 598ff., our paraphrase only | Para-svarūpa I 1–5, pp. 576–577; Virodhi O 2, p. 589; Appendix V, p. 594 (translator's note); Sanskrit p. 601 |
| `subbarau-bhagavata-1` | *Srimad Bhagavatam*, tr. S. Subba Rau, vol. I (Skandhas 1–7), Tirupati 1928 (archive.org DLI) | Text common to Vaiṣṇava schools; rendering follows Śrīdhara, footnotes Vīrarāghava (V.) and Vijayadhvaja (D.) | Primary | Published translation, quoted sparingly | I.2.6 (p. 6); III.29.13–14 (p. 358); III.29.21–25 with V.'s note (pp. 359–360) |
| `sarkar-chaitanya-charitamrita` | Kṛṣṇadāsa Kavirāja, *Caitanya-caritāmṛta*, Madhya-līlā, tr. Jadunath Sarkar, 1913 (archive.org) | Gauḍīya Vaiṣṇava | Primary | Published translation ("literal" but abridged); Sarkar's chapter numbers run two behind the Bengali | ch. VII pp. 97–99; ch. XVII pp. 241–244; ch. XVIII pp. 252–255 |
| `nallaswami-sivajnanabodham` | Meykaṇḍār, *Śivajñānabodham*, tr. J. M. Nallaswami Pillai, 1895 (retyped reproduction on archive.org) | Śaiva Siddhānta | Primary (sūtras); translator's notes are exposition | Published translation; cited by sūtra only, no pages, because the copy is retyped | sūtras 1, 2, 8, 11, 12; translator's notes to 3, 5, 6 |
| `de-sanskrit-poetics-2` | S. K. De, *Studies in the History of Sanskrit Poetics*, vol. II, London: Luzac, 1925 (archive.org DLI) | Scholarship | Secondary | — | pp. 155–169, 335–336 (vol. I pp. 117–119, 137 read for the thinker profile) |
| `thibaut-shankara-brahmasutra-2` (existing) | SBE 38 | Advaita | Primary | Thibaut | New passages IV.1.4–6, pp. 340–345 |
| `westminster-larger-catechism`, `bible-esv` (existing) | — | Reformed | — | — | WLC Q. 109 re-read; Exod 20:3–6, 32:4–5 and Deut 4:15–19 read at esv.org (references only) |

Abhinavagupta's existing specialist profile now has a bio, significance and key ideas (from De). No profiles were created for Piḷḷai Lokācārya, Meykaṇḍār, Caitanya or Rūpa Gosvāmin; they are cited through their texts, and adding thinker pages for them is a C4 metadata decision.

## HIN-01: the consecrated image

**What the sources establish.** The two traditions do not say the same thing, and the page keeps them apart.

- **Advaita (Śaṅkara, BS IV.1.4–5).** A symbol (*pratīka*) is not to be taken as the Self. The contemplation of the higher (Brahman) is superimposed on the lower object, as one honours a king's charioteer as the king, "analogously as a contemplation on Vishnu is superinduced on his images" (p. 345). This is the nearest of the four candidate accounts to "the image symbolizes the deity": the image is a support for meditation, and Brahman, as ruler of all, gives the fruit.
- **Śrīvaiṣṇava (Piḷḷai Lokācārya).** The image (*arcā*) is the fifth of the Lord's own forms (*para*, *vyūha*, *vibhava*, *antaryāmin*, *arcā*). In it the Lord takes the name and shape the worshipper chooses and, though all-knowing and all-powerful, appears as if dependent, "to be ocularly manifest" in temples and homes (pp. 576–577). To think images inert and powerless is an error against God (p. 589). The Sanskrit version calls it the *arcāvatāra* ("image descent") and forbids the notion of material (*upādāna-buddhi*), requiring the notion of deity (*devatā-buddhi*) (p. 601). This is the "real presence / descent" account: the Lord graciously makes himself present and accessible in a consecrated form. The page does not call it "embodiment" in a stronger sense than the text does.
- **Bhāgavata qualification.** Kapila, speaking as the Lord, says that image-worship that neglects the Lord present in all beings is "throwing offerings into ashes", but the devotee should continue worship until he realises the Lord in his heart (III.29.21–25). Vīrarāghava's note restricts the rebuke to ignorant worshippers.
- **Śaiva Siddhānta.** Sūtra 12 directs the freed soul to worship "the Forms in the temples as His Form". This is used only to show that image worship is not exclusively Vaiṣṇava.

**Christian response.** The criticism no longer implies that the worshipper takes the wood or stone for an independent god. It now runs: (1) the Śrīvaiṣṇava holds the Lord present in the image; (2) the Reformed reading of Exod 20:3–6, Deut 4:15–16 (no form seen at Horeb) and Exod 32:4–5 (the calf honoured with a feast in the LORD's name) is that God has forbidden worship through images even of himself, as WLC Q. 109 puts it ("or God in it or by it"); (3) the dispute is therefore over which revelation is authoritative. **Classification: theological disagreement grounded in competing revelatory authorities.** The regulative principle itself is already set out in `christianity/worship` and was not repeated.

**PQ3.** The old question ("How does one distinguish worshipping the one divine through an image from worshipping the image?") is now answered on the page (*devatā-buddhi*, the Lord's own presence). It is replaced by a warrant question: "What would show that the Lord has bound his presence to a consecrated image, rather than that his worshippers have assigned him a dwelling?" PQ1 and PQ2 were unchanged.

## HIN-02: devotion beyond Rāmānuja

**Bhāgavata Purāṇa.** The passages used, with their contexts read:

- I.2.6: the highest dharma is that from which devotion arises, "induced by no motive" and unobstructed (in `worship`).
- III.29.13–14: true devotees do not accept the five forms of liberation offered by the Lord, only his service; such devotion frees from the three *guṇas* and fits the soul for the Lord's state (in `final-end`).
- III.29.21–25: the image warning above (in the `worship` Deep dive).
- I.3.28 ("Sri Krishna is the identical Narayana") was read but is cited only through Sarkar's Gauḍīya use of it.

**Gauḍīya disclosure: added.** Sarkar's translation is a lawful, checkable primary witness, so the paragraph was written rather than recorded as a limitation. The page distinguishes text from school: the Bhāgavata ranks devotion above liberation, while the Gauḍīya claims, which are attributed to the *Caitanya-caritāmṛta* only, are these:

- love of Krishna is "the fifth human end" (p. 98);
- the soul is "the eternal servant of Krishna" (p. 252);
- Krishna is "God Himself" and Brahman his diffuse radiance (p. 255);
- love has five *rasas* (pp. 241–244).

Terminology was kept minimal: no *acintya-bhedābheda*, *svayam bhagavān* or *prema* glossary.

**Placement (canonical homes).**

- `final-end` is the canonical home for devotion above liberation: one view paragraph and a Deep dive, "Love above liberation".
- `love-beauty-creativity` carries the five relations of love.
- `ultimate-personal` carries Krishna above impersonal Brahman.
- `worship` carries one sentence on Bhāgavata I.2.6 and links to `final-end`.
- No paragraph is repeated.
- `self-salvation` and `why-alive` were re-read and need no change. Their general statements ("enduring God-dependent individual bliss", "the soul's end is relational") remain true of the Gauḍīya account.

**Distinct final ends preserved.** `final-end` now names four outcomes and does not merge them:

- Advaita: nondual realization;
- Rāmānuja: manifested bliss in the Supreme Person, without world-governing power;
- Madhva: graded blessedness, with non-universal liberation;
- Gauḍīya: loving service above liberation.

The Deep dive ends by stating the difference. The lede was scoped to "classical Vedānta", because the unscoped "The final end is liberation" now contradicted the body's Gauḍīya paragraph.

## Śaiva disclosure

**Strand chosen: Śaiva Siddhānta**, because `ultimate-personal` was the page most at risk of implying that Hindu theism is exclusively Vaiṣṇava ("Viṣṇu, the one independent being"). The paragraph covers:

- the world has Hara (Śiva) as first cause (sūtra 1);
- the Lord is one with souls, different from them and both, and governs their births by their deeds (sūtra 2);
- the Lord comes as teacher (sūtra 8), and knowledge and undying love unite the soul to his feet (sūtra 11);
- souls and bonds are beginningless and grace (*arul*) is the Lord's eternal power. This is from the translator's notes and is attributed to "the tradition", not to Meykaṇḍār.

The Christian response in `ultimate-personal` now names Gauḍīya and Śaiva Siddhānta theology among the personal theisms and their beginningless souls. Kashmir Śaivism was deliberately not expounded, because two Śaiva strands on one page would exceed the bounded disclosure. Abhinavagupta appears only as an aesthetician, with his Kashmiri Śaiva identity stated in his thinker profile.

## Rasa and Abhinavagupta

The `love-beauty-creativity` view paragraph (De pp. 159, 164–169) says:

- from Bharata, drama exists to evoke rasa;
- for Abhinavagupta, rasa is neither the hero's nor the actor's feeling. It is the spectator's relish of a latent emotion awakened and generalised beyond private interest.
- hence grief and terror can be relished on the stage (De n. 35, which cites later writers in the same theory).

One interpretive sentence ("Art ... turning emotion into something contemplated rather than suffered") summarises De's "pure contemplation dissociated from all personal interests".

The Deep dive "Three uses of rasa" separates three things:

- the Taittirīya's Brahman-as-*rasa* (metaphysics, not art theory);
- aesthetic rasa, noting that it was **Bhaṭṭa Nāyaka**, per De pp. 156–159, who compared aesthetic relish to the bliss of Brahman. The page does not attribute that comparison to Abhinavagupta.
- Rūpa Gosvāmin's devotional rasas (De pp. 335–336), whose recipient is the devotee, not the connoisseur.

The Christian response was not given a rebuttal of rasa theory. Its only change is one sentence noting that Gauḍīya eternal personal love stands nearer the Christian view than Advaita does.

## Answers inspected and changed

**Read in full:** `worship`, `love-beauty-creativity`, `final-end`, `ultimate-personal`, `ultimate-reality`, `one-and-many`, `self-salvation`, `revelation`, `great-and-terrible`, `why-alive`. **Christian counterparts checked:** `christianity/worship` (the Heidelberg, Turretin and Westminster paragraphs on images and prescribed worship) and `christianity/final-end` (view, including "continuing service"), so that the revised responses state the Reformed position as its own page does.

| Answer | Change | Words before → after (visible / deep after) |
|---|---|---|
| `worship` | Image theology (view), Bhāgavata I.2.6, revised Christian response, PQ3, Deep dive rewritten; scope updated; lede unchanged | 696 → 1194 (+498; 778 / 416) |
| `love-beauty-creativity` | Gauḍīya five rasas; aesthetics paragraph; one Christian-response sentence; Deep dive "Three uses of rasa"; thinkers + `abhinavagupta`; scope updated; lede unchanged | 392 → 681 (+289; 431 / 250) |
| `final-end` | Bhāgavata/Gauḍīya paragraph; one clause in the Christian response; Deep dive "Love above liberation"; scope and **lede** updated | 639 → 924 (+285; 515 / 409) |
| `ultimate-personal` | Gauḍīya and Śaiva Siddhānta paragraph; Christian response names them; scope updated; lede unchanged | 603 → 757 (+154; 560 / 197) |
| `ultimate-reality` | "What is left out" replaced by "Other traditions" pointers | 1021 → 1024 (+3) |
| **Lane total** | 5 of 28 answers changed | **20,030 → 21,259 (+1,229, +6.1%)** |

Word counts are from the scratchpad `wc.mjs`: body only, with Cite tags removed and QuestionLink text kept. The audit inventory's own counts differ slightly by method.

**Proportionality.**

- **`worship` is the largest increase.** Its visible text (778) is now the longest in the Hindu lane, which previously peaked at 673 (`ultimate-reality`). It was compressed twice in production. The repeated "five forms" list was removed from the view, and the Christian response's three scriptural sentences were reduced to two. The remaining length carries HIN-01, the batch's highest-priority item: two school accounts and a response that engages them.
- **`love-beauty-creativity`** is a concise-tier page and nearly doubled its visible text (229 → 431). This was judged necessary because it previously had no account of art at all.
- **Review A should judge** whether either page should be trimmed further.

**Ledes.** One revised: `hinduism/final-end`, from "The final end is liberation (moksha) from rebirth: …" to "In classical Vedānta the final end is liberation (moksha) from rebirth: …" (206 characters). The `worship`, `love-beauty-creativity` and `ultimate-personal` ledes remain accurate, because each is already scoped to the Gītā or to theistic Vedānta, and were left alone.

**Pressure questions.** One changed: `worship` PQ3. All other questions on the edited pages were re-read against the additions and kept. `ultimate-personal` PQ2 ("For Rāmānuja and Madhva, if souls are as beginningless…") applies equally to Śaiva Siddhānta, but it is scoped by name and remains accurate.

**ESV.** No new or changed ESV quotation. Exod 20:3–6 (already cited), Deut 4:15–16 and Exod 32:4–5 are cited by reference only, and the ledger is unchanged. The WLC phrase is a confessional quotation.

## Hindu school-fairness assessment

- The three-school Vedānta structure is untouched on every page.
- New material is always named by school or text. It never says "Hindus believe images are…" or "Hindu final end is…".
- **Image theology.** Advaita's symbol account and the Śrīvaiṣṇava presence account are kept distinct. The Bhāgavata's internal warning is included, which complicates rather than flatters the practice.
- **Devotion and liberation.** The Bhāgavata (text) and the Gauḍīyas (school) are distinguished, and Madhva's non-universal liberation is still stated.

**Christian critique classifications.** All new or revised arguments are classed as theological disagreement:

- `worship`: competing revelatory authorities on images;
- `final-end`: the ground of the dependence;
- `ultimate-personal`: creation and beginningless souls;
- `love-beauty-creativity`: who the Lord is and how he is known.

No new claim of contradiction was introduced.

## Safeguards preserved

The following were not altered:

- R3 karma and divine-dispensation wording;
- R5's Advaita locus-of-ignorance reply (`ultimate-reality` Christian response) and its PQs;
- R5 `suffering` and `evil` questions;
- R6 Hindu ledes, except `final-end` as recorded above.

## Limitations and deferrals

- **Govindācārya's English** is a free, expanded translation. The page paraphrases it and does not quote it as Lokācārya's wording. The Sanskrit version is itself a paraphrase of the Tamil, and our English of it is a paraphrase.
- **No Pāñcarātra Saṃhitā or Āgama** was read directly. The Pāñcarātra connection appears only in the translator's appendix and is not asserted in the answers.
- **Bhāgavata coverage.** The Subba Rau OCR loses III.29.11–12 and all of volume II (Skandhas 8–12). The *rāsa-līlā* and Book XI were therefore not used.
- **The *Śivajñānabodham* copy** is retyped, so it is cited by sūtra only.
- **Rasa theory** is secondary (De). No Nāṭyaśāstra or Abhinavabhāratī text was read.
- **For C4:**
  - HIN-06 thinker metadata;
  - HIN-07, the IEP process note in `one-and-many` ("not available in a lawful readable edition");
  - remaining Hindu process notes on unedited pages;
  - whether to create thinker profiles for Piḷḷai Lokācārya, Meykaṇḍār, Caitanya and Rūpa Gosvāmin.

## Points for Review A

1. Is the Śrīvaiṣṇava paraphrase ("appears as if dependent on them", "visibly present") faithful to pp. 576–577 and p. 601?
2. Is Śaṅkara's IV.1.5 rightly presented as a symbol/superimposition account and not as denial of divine presence?
3. Does the `worship` Christian response state the Hindu view correctly and keep the Reformed position? Is "competing revelatory authorities" the right classification?
4. Check the Bhāgavata/Gauḍīya separation in `final-end` and the Caitanya-at-Udupi sentence: Sarkar's own reference reads "III. xxix. 11", so the page says "Kapila's chapter" rather than a verse.
5. Check Bhaṭṭa Nāyaka versus Abhinavagupta on the Brahman comparison.
6. Is the Śaiva Siddhānta attribution of translator's notes to "the tradition" adequate?
7. Lengths of `worship` and `love-beauty-creativity`.
