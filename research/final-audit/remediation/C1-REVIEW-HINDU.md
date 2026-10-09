# C1 Independent Review A: Hindu theological completeness

2026-10-09. Reviewer: one fresh top-level Claude Opus 5.5 session, no subagents, not the production session. Scope: the **Hindu portion only** of PR #22 (`c1-hindu-buddhist-completeness`). The Buddhist portion, `buddhism/one-and-many`, `buddhism/final-end`, the Huayan sources and the Fazang profile, was not reviewed or edited. It awaits Review B.

- **Starting head:** `c7389a89354371df19c541a0ff3aaefb48549438`. The branch matched origin and contained the five expected production commits (`ee987cb`, `ac6edcf`, `2ee2ab8`, `4d2b71f`, `c7389a8`); none intervened.
- **Base:** `main` @ `513091c`.
- **Method:**
  - Each pre-C1 answer was compared in full against `513091c`.
  - Every primary and secondary source was re-fetched independently as archive.org OCR text: JRAS 1910, SBE 38, Subba Rau 1928 vol. I, Sarkar 1913, Nallaswami Pillai 1895, De 1925 vol. II, and De 1923 vol. I.
  - Every cited passage was read in context, together with the surrounding pages.
  - The production record was treated as a claim to test, not as evidence.
  - WLC Q. 109 was re-read on opc.org; Deut 4:15–16 and Exod 32:4–5 were re-read on esv.org.

## Result

**0 BLOCKER, 1 IMPORTANT (A1), 6 MINOR (A2–A7).** All seven were fixed in three Hindu answers and one source record. No Buddhist content was touched.

| # | Severity | Answer | Finding | Fix |
|---|---|---|---|---|
| A1 | IMPORTANT | `worship` | The Christian response collapsed two questions into one. "God has forbidden this way of approaching him" and "whether the Lord has promised to dwell in consecrated images" treat the Śrīvaiṣṇava as worshipping the God of Israel through an unauthorised image. That concedes the first-commandment question, which is who is worshipped, and answers only the second, which is how. It also attributed a "promise" that no checked source asserts; Lokācārya speaks of the Lord *choosing* to be manifest. | The response is rewritten around two explicit questions. Who is worshipped (first commandment): the Christian does not identify the LORD of Israel with Viṣṇu or any Hindu deity. How (second commandment): images are forbidden even of the true God (Deut 4:15–16, Exod 32:4–5, WLC Q. 109). The response states that the Śrīvaiṣṇava concedes neither premise. The classification is unchanged. The response is shorter than production's version apart from the added distinction. |
| A2 | MINOR | `worship` | "Śaṅkara treats the image as a support for contemplation" claims more than the source. In BS IV.1.4–5 the subject is Upaniṣadic symbol-meditation ("Āditya is Brahman", "name is Brahman"). Viṣṇu's images appear once, at the end, as an analogy, and the sentence that Brahman, ruler of all, grants the fruit was omitted. Followed by "Śrīvaiṣṇava teaching claims more", the wording implied that Advaita has a school-wide, merely symbolic image theology. | Changed to "Śaṅkara mentions images only in passing, as an analogy", naming the sun-as-Brahman meditation and keeping "Brahman, the ruler of all, grants the fruit". The next sentence now says Śrīvaiṣṇava teaching says more "about the image itself". |
| A3 | MINOR | `worship` | PQ3 ("bound his presence … rather than that his worshippers have assigned him a dwelling") poses a dichotomy the tradition partly combines. On p. 577 the worshipper does choose the name and form, and the Lord consents to be present in it. This is the R5 repeat-error pattern. | PQ3 is now: "If worshippers choose the name and form in which the Lord is approached, what shows that he has consented to dwell in that image, rather than that their devotion alone has made it holy?" It engages the source's own claim and asks for the warrant, not for empirical verification. |
| A4 | MINOR | `worship` | "On this account the worshipper adores not matter but the Lord present in it" repeated the previous sentence and "What this explains well". | Deleted (−13 words). |
| A5 | MINOR | `ultimate-personal` | "One with souls, different from them, and both at once" quotes sūtra 2 accurately but omits Meykaṇḍār's own gloss. His commentary defines "advaita" as inseparability, not identity: "He is not the soul, and the soul cannot become the Lord." Without the gloss a reader can take the formula for Advaita, or for Rāmānuja's body–soul relation. | One sentence added from the sūtra 2 commentary. |
| A6 | MINOR | `ultimate-personal`; `sources.yaml` | **Wrong locator and attribution.** The page cited "translator's notes to sūtras 3, 5, 6" for beginninglessness, co-eternity and grace, and attributed them to "the tradition" only. In the copy:<br>• grace as the Lord's eternal śakti is in Meykaṇḍār's commentary to sūtra 5 (udāraṇa c);<br>• the co-eternal soul is in the commentary to sūtra 7;<br>• the beginningless soul and bonds (*anādi*) is in the translator's notes to **sūtra 2**;<br>• the notes to 3 and 6 do not state co-eternity. | The sentence is reattributed: the commentary says co-eternity and grace, and the translator draws the beginninglessness conclusion. The locator is now "sūtras 5, 7, commentary; sūtra 2, translator's notes", and the source note is amended. |
| A7 | MINOR | `love-beauty-creativity` | "From Bharata … the purpose of a play or poem is to evoke rasa". De (pp. 159–160) has Bharata making rasa the business of *drama*; poetics adopted it later through the Dhvanikāra and Ānandavardhana. | Changed to "a play, and later of a poem". |

**Production-record correction (no public-text change).** C1-HINDU-COMPLETENESS.md says the sentence "Art … turning emotion into something contemplated rather than suffered" summarises De's "pure contemplation dissociated from all personal interests". That phrase (p. 158) is De's exposition of **Bhaṭṭa Nāyaka**, not Abhinavagupta. The sentence is nonetheless supported for Abhinavagupta's theory by De's n. 35 (pp. 165–166): the relish is "dissociated from personal interests", and "pain is never felt, and even when felt it is a pleasurable pain". It stays, under the existing locator (pp. 164–169).

## Coverage: five changed Hindu answers, read in full

Visible / Deep-dive word counts use the production method: body only, Cite tags removed, QuestionLink text kept.

| Answer | Accuracy | Primary-source support | School attribution | Christian fairness | Editorial length | Fixes |
|---|---|---|---|---|---|---|
| `worship` | Accurate after A2. Every Lokācārya paraphrase checked against pp. 576–577, 589 and 601. | Strong: Śaṅkara, Lokācārya (English and Sanskrit), Bhāgavata and Vīrarāghava's note all read in context. | Advaita, Śrīvaiṣṇava, Bhāgavata and Śaiva Siddhānta are each named. Advaita is no longer given an image theology broader than the source. | Defective before A1; fair after. Both commandments are distinct, the Hindu premises are not treated as conceded, and the classification is right. | Justified, 805 visible. See the length section. | A1, A2, A3, A4 |
| `love-beauty-creativity` | Accurate. | Sarkar ch. XVII and De pp. 155–169, 335–336 checked. | The Gauḍīya rasas are attributed to the *Caitanya-caritāmṛta* and Rūpa; the Brahman comparison to Bhaṭṭa Nāyaka; aesthetic rasa to Abhinavagupta. | Fair: one sentence, and it does not claim agreement on doctrine. | Justified, 436 visible. | A7 |
| `final-end` | Accurate. The five liberations match III.29.13 (Subba Rau: "four kinds of heavenly state … or unification"). | Bhāgavata III.29.13–14 and Sarkar pp. 97–99 and 252 checked. Sarkar p. 254 confirms "not … the cessation of re-birth, but … the beatitude of loving". | The text (Bhāgavata) and the school (Gauḍīya) are explicitly distinguished; the four ends are kept separate. | Fair. Closeness is acknowledged and the difference is located in the ground of dependence. | Justified, 517 visible. | None needed |
| `ultimate-personal` | Accurate after A5 and A6. | Sarkar p. 255 and sūtras 1, 2, 8, 11 checked, with commentary to 2, 5 and 7 and the notes to 2. | Śaiva Siddhānta is no longer at risk of conflation with Advaita. | Fair. The creation and beginningless-souls point is verified for each school named. | Justified, 587 visible (+27). | A5, A6 |
| `ultimate-reality` | Accurate. Only the Deep-dive pointer changed. | n/a | Removes a process note. "Not the whole Hindu landscape" now replaces the former explicit mention of Śākta metaphysics; acceptable, and the C4 process-note pass may revisit it. | Unchanged. The R5 locus-of-ignorance reply is intact. | Unchanged (674). | None needed |

## Related answers read in full (unchanged)

| Answer | Verdict |
|---|---|
| `one-and-many` | Consistent. Its three-school Vedānta frame is accurate and is not contradicted by the Śaiva or Gauḍīya additions. The IEP process note on Madhva's five differences remains a C4 item (HIN-07). |
| `self-salvation` | Consistent. "Enduring God-dependent individual bliss" covers the Gauḍīya and Bhāgavata end without misstatement; the R3 grace and dispensation wording is intact. |
| `revelation` | Consistent. Nothing in C1 bears on śruti or avatāra; Śaṅkara's and Rāmānuja's avatāra readings are unaffected. |
| `great-and-terrible` | Consistent. The R3 karma and dispenser analysis and the R5 questions are intact. |
| `why-alive` | Consistent. Its four puruṣārthas are exactly the "four aims" against which the Gauḍīya "fifth human end" is defined in `final-end`. |

## Source checks

### Śaṅkara, BS IV.1.4–6 (SBE 38, pp. 340–347)

- **IV.1.4.** The Self is not to be apprehended in symbols (*pratīka*): the symbol's own character is not sublated while it is meditated on, and "golden ornaments and figures made of gold are not identical with each other".
- **IV.1.5.** "Brahman" is to be superimposed on the sun, name and so on, not the reverse, "on account of exaltation", as when one views "the king's charioteer as a king" (p. 343). Śaṅkara compares the construction to viewing mother-of-pearl "as silver" (p. 344).
- **IV.1.5, p. 345.** Brahman, "the supreme ruler of all, will give the fruit"; Brahman is meditated on "in so far as a contemplation on Brahman is superinduced on its symbols, analogously as a contemplation on Vishnu is superinduced on his images."
- **Verdict.** The superimposition is an authorised, scripturally enjoined contemplation, not an error to be corrected. Images are an analogy, not the subject. The text distinguishes the symbol from the supreme Self. It supports "image as support for the higher contemplation" for Śaṅkara, but not a complete Advaita theology of images. A2 narrows the page accordingly, without setting symbol and presence against each other.

### Piḷḷai Lokācārya, *Artha-pañcaka* (JRAS 1910)

- **Five forms (p. 576).** "Para … Vyūha … Vibhava … Antaryāmi … Arcā — the Imaged" are listed as the five categories of the Lord's own nature (Para-svarūpa). Arcā is the fifth of the Lord's forms, so "one of the Lord's own forms" is supported.
- **Presence (p. 577).** The arcā form "consists in the images of Bhagavan … having no fixed form, but that which the worshipper may choose … no fixed name but that which the worshipper may choose … all-powerful, but seeming as if powerless; all-sufficient, but seeming as if needy; — thus seeming to exchange places, the Worshipped with the worshipper, and choosing to be ocularly manifest to him in temples and homes".
  - The page's "takes the name and shape his worshippers choose and, as if dependent on them, becomes visibly present" is a faithful paraphrase.
  - "As if" keeps the condescension apparent: the Lord is not actually impotent.
  - Presence is a real descent, not mere representation.
- **Hostility to God (p. 589).** Paratva-virodhi includes "thinking that the images of God are inert and powerless". Checked.
- **Sanskrit version (Nārāyaṇa Yati, p. 601).**
  - "Arcā-'vatāro dāru-loha-śilā-mṛt-svādhīna-vigrahaḥ": the image descent is a form of wood, metal, stone or clay. *Svādhīna-vigraha* itself carries the idea of a body given into the worshipper's power, which supports "as if dependent".
  - The four kinds of image: self-manifest (*svayaṃvyakta*), *divya* (installed by gods), *saiddha* (by sages), *mānuṣa* (by men).
  - "Tathāpi sarvatro-'pādāna-buddhir niṣiddhā, devatā-buddhir eva kartavyā. Anyathā, ātma-nāśo dhruva eva."
  - The page's "regard the image as the deity, not as wood, metal, stone or clay (our paraphrase of the Sanskrit)" is accurate. It is narrower than the Sanskrit, which also calls self-manifest images non-material (*aprākṛta*), a claim the page rightly does not make.
- **Appendix V (pp. 594–595).** The fire-in-wood and fire-in-iron verse is quoted by the translator from a Śrīvaiṣṇava work, and the page calls it that.
- **Provenance.** Govindācārya's English is free and expanded (pp. 568, 570), and the Sanskrit is itself a paraphrase of the Tamil. The page quotes neither as Lokācārya's words, labels its Sanskrit rendering a paraphrase, and builds no Tamil reading. Adequate.
- **Consecration.** The sources establish installed images (*pratiṣṭhāpita*) and the Lord's choice to be present. They do not establish consecration ritual. The page says "consecrated image (*mūrti*)" only descriptively, makes no claim about rites, and names no Pāñcarātra or Āgamic source. After A1, "promised" is gone, so nothing implies more than was read.

### Bhāgavata Purāṇa (Subba Rau 1928, vol. I)

- **I.2.6 (p. 6).** "No Dharma higher than that by which devotion to Sri Krishna arises, a devotion induced by no motive (desire) and unobstructed". The page's "devotion to the Lord" correctly neutralises Śrīdhara's interpretive "Sri Krishna".
- **III.29.13–14 (p. 358).** Devotees "do not accept, though offered by Myself" the heavenly states (dwelling in his region, equal wealth, presence, same form) "or unification", "but only … worshipping Me". Such Bhakti-yoga gets the soul "out of the Samsara brought about by the three gunas" and makes it "fit for attaining to My state". The `final-end` Deep dive keeps both halves, so devotion is ranked above liberation without being cut off from it. The hierarchy is represented accurately.
- **III.29.21–25 (pp. 359–360).**
  - The speaker is Kapila, the Lord's descent, addressing his mother Devahūti.
  - The text says the Lord is present in all beings, and that one who neglects him there and worships an idol is "throwing his offerings into ashes" (v. 22).
  - "When worshipped through an idol … I am not pleased with the worshipper who scorns other beings" (v. 24).
  - The devout "should continue to worship Me … until he realises Me in his own heart" (v. 25).
  - V.'s footnote to v. 22 limits the condemnation to "ignorant men", since it would otherwise be inconsistent with the injunctions elsewhere.
  - The Deep dive presents a moral rebuke, says the worship continues, and gives Vīrarāghava's qualification. It does not present this as rejection of images or as a Christian proof-text.
- **Limits.** III.29.11–12 and vol. II are not usable. The page claims no more than the passages read.

### Gauḍīya: *Caitanya-caritāmṛta* (Sarkar 1913)

- **Preface.** "My version is literal; only, in certain places needless details have been curtailed … the texts … quoted … have been indicated by reference". It is abridged. The chapter numbering was confirmed: ch. VII, at Udupi, is Madhya 9 and ch. XVIII, Sanātana, is Madhya 20.
- **Ch. VII, pp. 97–99.** At Udupi, before Madhva's image, Caitanya says: love of Krishna "is the fifth human end, the limit of human attainment"; "Truly devoted men renounce the fivefold salvation", citing "III. xxix. 11".
- **Ch. XVII, pp. 241–244** (Caitanya instructing Rūpa).
  - Five chief rasas: śānta, dāsya, sakhya, vātsalya, madhura.
  - Each has the merits of the one before, plus its own: "dasya … the merit of the shanta … plus service"; madhura has "all the above four qualities … in a heightened form".
  - The page's sequence, glosses and cumulative claim are all supported.
- **Ch. XVIII, pp. 252–255.**
  - "The soul of man is the eternal servant of Krishna" (OCR "352").
  - Love is "the (supreme) need … and the highest achievement of humanity".
  - "Krishna is God Himself"; Krishna appears as Brahman "just as the Sun appears to our eyes as an (indistinguishable) mass of light", according to knowledge, yoga or faith.
- **Attribution.** The page attributes these claims to "Caitanya's Gauḍīya tradition" with a CC citation and reports Udupi as "Caitanya is reported to cite". It does not present them as Caitanya's own writing, and it builds no Bengali reading. It does not claim all Gauḍīya thinkers use one wording. Adequate.
- **Erotic imagery.** "The love of lovers" sits inside "the devotee's love for Krishna". De p. 335 confirms that Rūpa's madhura rasa is "not in its secular aspect but primarily as a phase of bhakti-rasa", and the Deep dive says its recipient is the devotee. No reduction to sensual experience, no universalising.

### Śaiva Siddhānta: *Śivajñānabodham* (Nallaswami Pillai)

- **Sūtra 1.** The universe undergoes origin, development and decay, so "Hara is the first cause".
- **Sūtra 2.** "He is one with the souls (Abetha). He is different from them (Betha). He is one and different from them (Bethabetha) … causes the souls to undergo … evolution (births) and return … by including their good and bad acts".
  - The commentary says "Adwaitham" only "denies the separate existence and separability of the two"; "He is not the soul, and the soul cannot become the Lord".
  - The relation is therefore neither Advaita identity nor Rāmānuja's body–soul relation, though the translator calls the system "Adwaitha" in this sense. A5 adds that.
- **Sūtra 8.** "The Lord appearing as Guru to the Soul which had advanced".
- **Sūtra 11.** "This Adwaitha knowledge and undying Love will unite it to His Feet".
- **Sūtra 12.** The freed soul is to "contemplate their Forms and the Forms in the temples as His Form". The heading is "On the mode of worship", so "worship" in the `worship` Deep dive is fair.
- **Attribution.** The Sanskrit sūtras are traditionally ascribed to the Raurava Āgama, and Meykaṇḍār is held to have rendered them in Tamil with his commentary (introduction). "Meykaṇḍār's *Śivajñānabodham*" follows standard usage for the Tamil work and is acceptable.
- **Translator's notes versus primary text.** See A6. Two of the three claims turned out to be Meykaṇḍār's own commentary, so the attribution is now *more* exact, not weaker.
- **Placement.** `ultimate-personal` is the right canonical home: it was the page that implied Hindu theism was solely Vaiṣṇava. The `worship` Deep dive adds one sentence (sūtra 12), and `ultimate-reality` points to it. No further Śaiva material is needed to avoid a contradiction, and Kashmir Śaivism stays out of scope.

### Rasa (De 1925, vol. II; vol. I for the profile)

- **Bhaṭṭa Nāyaka (pp. 156–159).** He gives a subjective theory of rasa: "the enjoyer of rasa in poetry is like the knower of Brahma, but the aesthetic attitude is different from the philosophic", because complete detachment "is not possible in the aesthetic attitude". The page correctly assigns the Brahman comparison to him, not to Abhinavagupta, and preserves the distinction.
- **Bharata (p. 159).** He "declared that the business of the drama was to evolve one or more of the eight rasas". See A7.
- **Abhinavagupta (pp. 164–169).**
  - What is manifested is "not the mood itself but its reflection in the form of a subjective condition of aesthetic enjoyment".
  - That condition is alaukika.
  - The permanent mood "remains in the hearts of the appreciating audience in the subtle form of latent impressions".
  - It is generalised, so that it is relished "not … by him alone, but by all persons of poetic sensibility".
  - Rasa is "not an objective entity which can reside in the hero or the actor".
  - n. 35 explains why pity and horror are relished.
  - The page's account matches: spectator, latent dispositions, generalisation, freedom from private interest and tragic relish. It does not flatten the theory into "art turns suffering into pleasure", and "contemplated rather than suffered" is warranted by n. 35.
- **Three uses of rasa.** The Taittirīya (metaphysics), aesthetic rasa and Rūpa's bhakti-rasa (De pp. 335–336: the recipient is "not the literary sahṛdaya but the bhakta") are kept apart, and the Deep dive says outright that a shared word does not make one doctrine.
- **Abhinavagupta profile.** De vol. I confirms:
  - his fame "rests chiefly on his philosophical" works (p. 117);
  - his laghu- and bṛhatī-vṛtti on Utpala's Īśvarapratyabhijñā, Utpala being his paramaguru (p. 119);
  - his date at the end of the tenth and beginning of the eleventh century, with a "latest date … 1015 A.D." (p. 137).

  The Kashmiri Śaiva affiliation, the dating and the Abhinavabhāratī and Locana entries are correct. The profile does not claim the Abhinavabhāratī was read. Adding `abhinavagupta` to `love-beauty-creativity` thinkers is justified, because he is central to its aesthetics paragraph.

### Reformed worship response

- **Scripture and confession.**
  - Exod 20:3–6, already cited, is read as the first and second commandments.
  - Deut 4:15–16: "you saw no form on the day that the LORD spoke to you at Horeb" (esv.org).
  - Exod 32:4–5: "These are your gods, O Israel" … "Tomorrow shall be a feast to the LORD" (esv.org).
  - WLC Q. 109 forbids "all worshiping of it, or God in it or by it", and also "the making of any representation of feigned deities, and all worship of them" (opc.org).
- **Consistency with `christianity/worship`.** That page states the strict Reformed reading and flags it as specifically Reformed. The Hindu response now says "The Reformed objection", which matches.
- **Classification.** "Theological disagreement grounded in competing revelatory authorities" is right: neither commandment is conceded, and no internal contradiction is alleged.
- **Advaita.** The Advaita sentence is unchanged ("finally transcended … worship is never outgrown"). It does not say Advaitins cannot devote themselves meaningfully; PQ1 asks the question instead.

### Source-registration accuracy

All five new Hindu registrations have accurate metadata, URLs and passage lists. The one exception was the Nallaswami Pillai locator, now corrected under A6.

- The `subbarau-bhagavata-1` note's "five forms of liberation" wording is interpretive; Subba Rau has "four kinds of heavenly state … or unification". It is left as is, because the standard count is five and Sarkar's Gauḍīya text says "fivefold".
- The `de-sanskrit-poetics-2` note is accurate.
- **For Review B:** none of these sources is shared with the Buddhist lane. The only `sources.yaml` edit in this review is the `nallaswami-sivajnanabodham` note.

## Length analysis

- **`worship`: length justified.**
  - Visible words: 779 at production, 810 after review. The +31 comes from A1's two-question distinction and A2's scope, net of A4's 13-word trim; the response was compressed while A1 was written.
  - The Gītā and Rāmānuja paragraphs predate C1, were R6-reviewed, and carry the lede, so moving them would undo R6.
  - Both image accounts are needed before the criticism. They are the substance of HIN-01, and A2 makes Śaṅkara's account narrower rather than longer.
  - "What this explains well" is four sentences, one of them new and needed.
  - The Christian response now carries two distinct objections at about the length of production's single blurred one.
  - The philology already lives in the Deep dive (four kinds of image, the iron-ball verse, Vīrarāghava). No visible paragraph repeats another after A4.
- **`love-beauty-creativity`: length justified (436 visible).**
  - The page previously had no account of art.
  - The aesthetics paragraph answers the title's "beauty and creativity" and leads into "What this explains well" ("why art can delight even when it portrays grief").
  - The Deep dive's "Three uses of rasa" is real clarification, not repetition.
  - The transitions run devotion → human love → art.
- **`final-end`: justified (517 visible).** The four-end hierarchy is clear, and the Deep dive's text-versus-school distinction is needed.
- **`ultimate-personal`: justified (587 visible).** The +27 from A5 and A6 prevents a school conflation. The Śaiva paragraph remains one paragraph.
- **Cross-page repetition.** Gauḍīya doctrine has one canonical home per claim, as production stated: devotion above liberation in `final-end`, the rasas in `love-beauty-creativity`, and Krishna above Brahman in `ultimate-personal`, each linked rather than restated. None was found.

## Horizontal comparison and classifications

- **Image worship.** Distinguished from the Christian prohibition on stated grounds (A1). Christian sacramental presence is not invoked as a parity weapon. PQ3 asks for warrant in terms that a sacramental Christian would also have to meet.
- **Divine initiative and grace.** "Striking parallel" in `worship` and `love-beauty-creativity` names a parallel, not an identity.
- **Liberation and eternal communion.** `final-end` names the closeness and then the difference: Christ, bodily renewal, the ground of dependence. It concedes no agreement on creation, incarnation, sin, satisfaction or resurrection.
- **Personhood.** In `ultimate-personal`, Gauḍīya and Śaiva Siddhānta theism count as personal, while the disagreement over creation and beginningless souls is stated.
- **Aesthetics.** The Christian response does not rebut rasa theory and does not manufacture a disagreement.
- **Classifications.** Every revised argument is classified as theological disagreement. No new claim of contradiction was found or added.

## R1–R6 regression check

All of the following were preserved:

- R3's karma and divine-dispenser wording (`great-and-terrible`, `self-salvation`), and enduring selfhood;
- R5's locus-of-ignorance reply in `ultimate-reality`;
- R5's suffering and rebirth questions, on pages not touched;
- R6 ledes:
  - `worship`, `love-beauty-creativity` and `ultimate-personal` are unchanged and remain accurate;
  - `final-end` was rescoped to "In classical Vedānta". This is accurate and does not place the Gauḍīyas outside Vedānta, since "classical" scopes it to the three schools named;
- R1–R2 Reformed standards: the WLC and Scripture are used as the confession and text say.

No page now opens with a school taxonomy, the positive view comes before criticism, and the new terms are glossed in place.

## Validation (final tree)

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 53 thinkers, 218 sources, 168 answers (168/168) |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing) |
| `npm run build` | 93 pages |
| `git diff --check` | Clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 131,651 words (+61 from production's 131,590), 2,772 citations (unchanged). ESV: 4 unledgered and 1 orphan row, both pre-existing C4 items. |
| `node scripts/check-built-links.mjs` (R4-repaired; base fixed in the script) | 9,909 links, 4,033 cross-page, 8,163 fragments checked; 0 broken, 0 duplicate ids, 0 outside base, 0 missing answers; 53 thinker pages. Cross-page links counted, so the MSYS failure mode is absent. |

**ESV ledger:** unchanged. The review added no ESV quotation; the Scripture in `worship` remains locator-only.

**Word-count changes in this review** (total / visible):
- `worship`: 1,181 → 1,212 (visible 779 → 810);
- `love-beauty-creativity`: 670 → 673;
- `ultimate-personal`: 748 → 775.

Hindu lane: +61 words.

## Limitations and C4 deferrals

- **Not read directly:** no Pāñcarātra Saṃhitā, Āgama, Nāṭyaśāstra, Abhinavabhāratī, Tamil *Śrīvacana-bhūṣaṇa* or Bengali CC. The pages claim nothing that depends on them.
- **Unusable in the Bhāgavata OCR:** III.29.11–12 and vol. II.
- **C4 items:**
  - Śaṅkara thinker-metadata sweep (HIN-06);
  - the `one-and-many` IEP process note (HIN-07);
  - whether `ultimate-reality`'s "Other traditions" should mention Śākta theology again;
  - whether to give profiles to Piḷḷai Lokācārya, Meykaṇḍār, Caitanya and Rūpa Gosvāmin. They are cited only through their texts. Their absence from `thinkers:` lists is consistent with existing practice and is not a defect.

## Recommendation

**Hindu portion: MERGE.**
- All BLOCKER and IMPORTANT findings are resolved.
- The Hindu sources were independently verified.
- Comparative fairness holds.
- Validation passes.

**PR #22 as a whole remains on HOLD** until the separate Buddhist independent review (Review B) is complete. This review did not merge, did not begin Review B, and did not begin C2–C4.
