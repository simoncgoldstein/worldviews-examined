# R5 independent review: pressure-question fairness and argument symmetry

2026-10-08. Review of PR #20 (`r5-pressure-question-symmetry`), based on `main` @ `6a34393`.

## Reviewer and method

- **Reviewer.** One fresh Claude Opus 5.5 top-level session, no subagents. It did not take part in R5 production.
- **Starting head.** `f8b9d85d92651a9bf322db1be68228e43389fa2e`, as expected. The branch had not advanced.
- **Governing records read.**
  - `docs/METHODOLOGY.md`;
  - `research/final-audit/README.md` and `REMEDIATION-PLAN.md` (R5);
  - `CROSS-QUESTION.md` (XQ-04 list) and `ARGUMENT-QUALITY.md`;
  - the NAT, JUD, ISL, HIN and BUD finding tables;
  - the R5 production record;
  - the R5 deferrals in `R3-REVIEW-MORALITY-EVIL.md`, `R3-REVIEW-SALVATION-DESTINY.md` and `R4-REVIEW.md`, and the verification protocol in `docs/SOURCES.md`.
- **Reading.**
  - **All 21 R5-edited answers were read in full**, with the pre-R5 wording taken from `git diff 6a34393..f8b9d85`.
  - The unchanged comparison pages were also read: `hinduism/evil`, `naturalism/logic-binding`, `naturalism/knowledge-possible`, `christianity/order`, `christianity/induction` and `christianity/ultimate-personal`.
  - `christianity/know-the-good` and `christianity/ultimate-authority` were checked through the passages the naturalist pages link to.
  - `islam/induction`, `naturalism/love-beauty-creativity` and `christianity/something-rather-than-nothing` were added to test overlap and parity claims.
- **Three reviews.**
  1. **Changed questions.** All 24 were judged against the nine tests of the brief (§5A).
  2. **Retained questions.** All 24 that production kept after review were examined independently.
  3. **Corpus consistency.** All 290 questions were extracted mechanically and read as one list. That list was read for duplicates, asymmetries and recreated errors only. The other 242 questions were **not** reviewed substantively.
- **Source checks.** Each was made directly in the registered edition, not from the production record:
  - SBE 34 and SBE 38 (archive.org OCR);
  - Harvey, pp. 174–184 (archive.org PDF);
  - SBE 48, I.1.13;
  - SEP "Problem of Induction" §§3.2, 5.2;
  - SEP "Naturalism in Epistemology" §4.2;
  - SEP "Śaṅkara" §3.4;
  - Qur'an (Abdel Haleem, quran.com resource 85) 4:157, 5:44, 5:48, 15:9, 16:103, 17:15;
  - AN 4.63 (Sujato, SuttaCentral).

## Findings

| Severity | Count |
|---|---|
| BLOCKER | 0 |
| IMPORTANT | 5 (all fixed) |
| MINOR | 7 (all fixed) |

No BLOCKER was found. Production's source work is sound: every quotation it added was confirmed in the registered edition, and no earlier correction was undone. The IMPORTANT findings fall into three groups:
- two questions that misstate the opposing position or its strongest reply (Strawson; epistemic normativity);
- two that bring back the defect R5 set out to remove, a question answered in the view or a dichotomy the tradition rejects (Hindu `what-is-man`, `after-death`);
- one that frames an eternal act in temporal terms and omits the school's own reply (Maturidi).

### IMPORTANT

**I-1. `naturalism/induction` PQ1: Strawson misused**
- **Problem.** The question asked whether a theist "may equally treat trust in God's faithfulness as a basic standard of reasonableness." Strawson's claim is that proportioning belief to inductive evidence is *analytic* of "reasonable," a conceptual norm open to anyone. Trust in God's faithfulness is a substantive existential claim, held as a basic commitment (`christianity/induction` says exactly this). The analogy therefore set a norm of reasoning beside a theological proposition as if they were the same kind of thing. The defender's obvious answer, that they differ in kind, ends the question without pressing anything. It also read as though Strawson licenses treating any favored belief as basic.
- **Evidence.** SEP §5.2 quotes Strawson 1952: 256–57 (reasonableness analytic). It also records that Strawson grants a distinct question, whether "induction will continue to be successful," which he calls a "contingent, factual matter" (1952: 262), and BonJour's objection that conformity to standards does not show conclusions likely true.
- **Fix.** The question now presses Strawson's own concession:

  > "Strawson argues that following inductive evidence is simply what being reasonable means, but grants that whether induction will go on succeeding is a separate, contingent question of fact. On naturalism, what answers that second question?"

  It cites SEP §5.2.
- **Parity.** This asks for an explanation, not a non-circular proof. The Christian answers the same question with God's faithfulness, held basically and admitted to be circular in Hume's sense. PQ2 then presses one naturalist answer, inference to real laws.

**I-2. `naturalism/ultimate-authority` PQ2: epistemic normativity**
- **Problem.** "What gives the norm 'follow the evidence' its authority, if it is not itself one of the network's empirical findings?" Its conditional implied that a norm would need to be an empirical finding to be legitimate on naturalism. It ignored the main naturalist account of epistemic norms, which the sister page already cites: `knowledge-possible` says moderate naturalists ground the epistemic "ought" in "what reliably produces true belief, which matters to creatures with goals" (SEP §4.2). It also nearly repeated PQ1 ("other than the method's own results").
- **Evidence.** SEP §4.2: Kornblith's practical grounding is that whatever one values, one has reason to want a cognitive system that reliably produces truths, so the hypothetical norm is "in effect a categorical one." Others hold that epistemic norms are categorical (Kelly) or find this "too contingent a ground."
- **Fix.**

  > "Kornblith argues that the norm 'follow the evidence' binds every agent, since whatever anyone wants, a reliable way of forming true beliefs serves it. Is a norm grounded in what serves our goals, however universal, the same as one that binds a rational agent whatever their goals?"

  It cites SEP §4.2. The question is now distinct from PQ1 (the method's warrant) and from `logic-binding` PQ2 (revisability).

**I-3. `islam/ultimate-personal` PQ1 and response: the Maturidi eternal act**
- **What production got right.** The response sentence correctly reports Harvey p. 175: God's creative action (*takwīn*) is an eternal attribute, "God's actions … are eternal without exception," and this is the school's most distinctive doctrine against Ash'arism.
- **Problem 1: a temporal "before".** The question asked what the merciful act is "*before* it has any effect." That builds a temporal "before" into eternity, which Maturidis deny. The Christian page also rejects such a "before" for God (Augustine, `christianity/something-rather-than-nothing`).
- **Problem 2: the Ash'ari objection without the Maturidi reply.** Its second clause, "how does it differ from God's power to show mercy?", is the classic Ash'ari objection. Harvey pp. 181–183 gives the Maturidi answer the question ignored: power bears on what can exist, while *takwīn* realizes it.
- **Problem 3: the response omitted the Ash'ari alternative.** It said Maturidis differ from Ash'aris without saying what Ash'aris hold.
- **Evidence.** Harvey:
  - p. 175: the *takwīn* doctrine.
  - p. 176 n. 5: Ibn Kullab held all God's actions eternal, "including His mercy." This supports applying the doctrine to mercy.
  - pp. 181–183: the Ash'ari objection and the replies of al-Bazdawī and Abū al-Muʿīn al-Nasafī. Kholeif's analysis: for Ash'aris *takwīn* "like all *ṣifāt al-fiʿl*" is "merely a conceptual relationship … between Him and the object of His power" (p. 182).
  - p. 184: Maturidis "bite the bullet on God's action 'at a distance'".
- **Fixes.**
  - **Response.** It now gives the Ash'ari view (acts are relations between eternal power and what it brings about in time; p. 182). It then gives the Maturidi view, scoped to "God's acts, beginning with his creative action (*takwīn*)" (p. 175).
  - **New question:**

    > "Maturidis distinguish God's power, which concerns what can exist, from his eternal act, which brings it into being, though its effects arise only in time. If God's act of mercy is eternally complete, yet no one receives it until they exist, what does its completeness consist in?"

    It cites Harvey pp. 181–184. It engages the Maturidi reply and presses the point Harvey himself identifies. It is Maturidi-specific: the Reformed lane holds an eternal *decree* with a temporal *execution* (`christianity/order`, Turretin), not an eternally complete act, so no parity clause is needed.
- **Not changed.** The doctrine is not attributed to Sunni Islam generally.

**I-4. `hinduism/what-is-man` PQ1 already answered in the view**
- **Problem.** "Does the human body make any difference to who a person is, or only to what the self can do?" The page answers this directly. Because "the self is the same in all bodies, differences of species and birth belong to the body, not the self" (Gītā 5.18), and the human birth matters as opportunity (9.33 commentary). Once that is granted, the only remaining difficulty is the Christian premise that the body belongs to personal identity. The response already states that premise and classifies it as a theological disagreement. R5 had replaced one answered question with another, the error it was meant to correct.
- **Fix.**

  > "If the body is clothing the self leaves behind, does the self keep anything of the life lived in it, such as the love and duties formed there, or only the karma it carries forward?"

- **Why it is fair.** It accepts the clothing analogy and imposes no Christian premise. The tradition has real answers, such as the impressions and progress said to carry into a later birth, and devotion in theistic Vedānta. No new passage was cited for these, since the question asserts none. It does not use lost memory as a disproof of identity (the R3 Review B correction is preserved). It differs from PQ2 (Advaita bondage), PQ3 (individuation) and `why-alive` PQ1 (why this life matters).

**I-5. `hinduism/after-death` PQ1: false dichotomy**
- **Problem.** "Is it finally a personal judgment or an impersonal consequence that the Lord administers?" The Brahma Sūtra's own conclusion combines the two. Bādarāyaṇa rejects Jaimini's view that the deed or *apūrva* brings the fruit by itself. He holds that "the fruits come from the Lord acting with a view to the deeds done by the souls" (SBE 38, III.2.41, p. 183). The question presented the tradition's combined account as unstable without argument. It also stood close to `hinduism/order` PQ1 (karma as a law above the Lord or his will).
- **Fix.**

  > "Bādarāyaṇa holds that the fruits of action come from the Lord, who gives them with a view to the deeds done. Does the Lord's part add anything to the deed's own desert, such as a verdict or mercy, or does he only see that each deed meets its fruit?"

  It cites SBE 38, III.2.41, p. 183.
- **Why it is fair.** It asks about the relation between divine agency and the moral order. It invites theistic Vedānta's strongest answer, the Lord's grace to the surrendered. It no longer overlaps `order` PQ1 (the metaphysical status of karma) or the response's recognizability question (R3 Review B I-4, preserved).

### MINOR

| ID | Answer | Problem | Fix |
|---|---|---|---|
| M-1 | hinduism/ultimate-reality (response; PQ1) | **Three source-precision issues in the new Advaita reply.** (a) The locator "Introduction, pp. 6, 9" points to Śaṅkara's own introductory section on superimposition (*adhyāsa*) to I.1.1, not to Thibaut's Introduction. The sister pages cite it as "I.1.1, intro.". (b) "The causal power of ignorance has the Lord for its substratum and can be called neither real nor unreal" compresses I.4.3, p. 243. There it is the *world's causal potentiality* that "is of the nature of Nescience." Its substratum is "the highest Lord" *as creator* ("without it the highest Lord could not be conceived as creator"), i.e. Īśvara at the explanatory level of world-causation, not nirguṇa Brahman at the ultimate standpoint. The same page says it "is destroyed by perfect knowledge," which matters because the PQ stresses that ignorance is beginningless. "Neither real nor unreal" is a common gloss, but Thibaut's wording is that *māyā* "cannot be defined either as that which is or that which is not." (c) "These replies answer the charge of incoherence" stated more than the evidence supports. SEP §3.4 records continuing critiques from Rāmānuja and Madhva. | (a) Locator changed to "I.1.1, intro., pp. 6, 9". (b) The sentence now reads: the world's causal potentiality, "of the nature of ignorance and … destroyed by knowledge, has the highest Lord, the world's creator, for its substratum," and *māyā* "cannot be defined either as that which is or that which is not" (quoted from the checked edition). (c) The response now says the replies "meet the charge of outright incoherence, though whether they succeed remains disputed within Vedānta; what the Christian presses is a question of explanation." PQ1's wording now matches (b). |
| M-2 | hinduism/ultimate-authority PQ3 | It said a rival school might assign "the texts of identity to a lower standpoint." Rival schools do not do this. They reject the two-standpoint scheme and *reinterpret* the identity texts. Rāmānuja reads "Thou art that" as co-ordination in which "thou" denotes the highest Self as having the individual souls for its body (SBE 48, I.1.13, pp. 228–229, newly read). | The question now names Rāmānuja's actual reading and asks "what principle decides which set of texts governs the reading of the other?" The accommodation parallel is kept: it is genuine, since Christians too must say which texts are accommodated. |
| M-3 | islam/why-alive PQ3 | "Is someone tested fairly who met the message only in a distorted form?" leaned toward implying that Islam lacks an answer. It also merged hearing the message with understanding it. "The same question" overstated the Christian parallel, since the Reformed answer runs through general revelation (Romans 1–2) and WCF 10.4. Islamic tradition has developed answers on those the message did not adequately reach. Following the brief, no new *Fayṣal* research was opened. | Changed to "what counts as the message having reached someone: hearing it at all, or hearing it clearly enough to understand it? Christians face a parallel question…". Q 17:15 was re-read in Haleem; the quotation is exact. |
| M-4 | islam/revelation PQ2 | The question asked what would distinguish revelation from transmission, but omitted the Qur'an's own answer to that charge. | The question now notes that "the Qur'an answers the charge that a man taught him by noting that the man's language is foreign" (16:103, Haleem, checked) before asking what evidence would discriminate. It still treats transmission as possible, not shown. |
| M-5 | islam/history PQ1 | A sound providence question, but it did not engage the tradition's stated ground for the difference. | It now grants that the rabbis and scholars were "entrusted to preserve" the Torah (5:44) while God himself guards the Qur'an (15:9), both checked in Haleem. It then asks why the earlier revelations were left in such keeping. It raises no confirm/correct incoherence and makes no historical demand. |
| M-6 | naturalism/offspring-family PQ1 | R5's question (a promise binding "once … the evolved feelings that supported it have faded") (a) reintroduced feelings as if the naturalist ground depended on them, and (b) duplicated `naturalism/love-beauty-creativity` PQ2 ("…why it should be faithful when it is costly?"). | It now engages the humanist ground the page cites: "Humanists ground family life in fulfillment through relationships and care for others. When a marriage has stopped bringing fulfillment and keeping the promise is costly, what makes the promise still binding?" It no longer turns on evolution, so it is distinct from `love-beauty-creativity` PQ2. Promise-based and realist answers remain open. |
| M-7 | naturalism/order PQ1 | "Explain a regularity rather than restate it" assumed the Humean answer was mere restatement. Humeans reply that a law explains by unifying (the Deep dive says this). | Changed to "…and citing it unifies a regularity with many others. Does that unification explain why the regularity holds, or show only how it fits the wider pattern?" It now engages the Humean reply rather than imposing a definition of explanation. |

## Answers changed by this review

**12 answers:**
- naturalism: `order`, `induction`, `offspring-family`, `ultimate-authority`;
- Islam: `ultimate-personal`, `why-alive`, `revelation`, `history`;
- Hindu: `ultimate-reality`, `ultimate-authority`, `what-is-man`, `after-death`.

No Christian, Jewish or Buddhist answer was changed. No adjacent Christian response needed clarification. The only response-level edits are the Islamic schools sentence (I-3) and the Advaita reply (M-1), both in non-Christian answers.

**Word changes: +195** (129,606 → 129,801).

| Answer | Words | Answer | Words |
|---|---|---|---|
| hinduism/ultimate-reality | +38 | islam/history | +18 |
| islam/ultimate-personal | +37 | hinduism/ultimate-authority | +17 |
| naturalism/ultimate-authority | +27 | hinduism/after-death | +16 |
| islam/revelation | +20 | naturalism/order | +11 |
| islam/why-alive | +7 | naturalism/offspring-family | +2 |
| hinduism/what-is-man | +2 | naturalism/induction | 0 |

## All 24 changed pressure questions

Wording is the final wording after this review. "Upheld" means the R5 wording was kept.

| # | Answer | PQ | Final wording (abridged) | Principal worldview reply | Verdict | Correction | Source |
|---|---|---|---|---|---|---|---|
| 1 | naturalism/order | 1 | Best-system law unifies; does unification explain why the regularity holds? | Unification and systematization are explanatory (Humean) | Fair after fix | M-7 | SEP Laws §§2, 8 (cited on page) |
| 2 | naturalism/order | 2 | Real necessities or powers: is it a further fact which ones nature has, and if so, what explains it? | Necessities are basic; for essentialists, laws follow from the essences of properties | Upheld. "If so" lets non-Humeans take them as basic; comparative, not a contradiction claim | — | SEP Laws §3 |
| 3 | naturalism/induction | 1 | Strawson grants that continued success is a separate factual question; what answers it on naturalism? | Real laws (IBE), brute regularity, evolutionary reliability | Fair after fix | **I-1** | SEP Induction §5.2 (Strawson 1952: 256–57, 262) |
| 4 | naturalism/induction | 2 | Why is a universal law a better explanation than one restricted to observed cases? | Foster: a restricted law is more mysterious | Upheld. A recognized objection to the nomological-explanatory answer (SEP §3.2); distinct from PQ1 | — | SEP Induction §3.2 |
| 5 | naturalism/offspring-family | 1 | When fulfillment fails and the promise is costly, what makes it binding? | The promise and the other's claim; realist or constructivist grounds | Fair after fix | M-6 | AHA Manifesto III (cited on page) |
| 6 | naturalism/offspring-family | 2 | Does the kin-selection history of partiality to one's own children give reason to trust it or discount it? | Genealogy is not evaluation; reflective endorsement | Upheld. Engages debunking without assuming genealogy invalidates the judgment | — | SEP Morality and Biology §§1.1, 4.1 |
| 7 | naturalism/worship | 3 | Do agency-detection false alarms discount belief in God as such, or only beliefs formed where the tendency misfires? | Byproduct accounts; origin is not truth (the page says so) | Upheld. Does not equate bias with falsity; asks for a reliability assessment; distinct from PQ1 (parity of natural histories) | — | SEP Religion and Science §1.4 |
| 8 | naturalism/why-alive | 3 | Does a life whose best efforts fail through no fault of its own have less meaning? | Objectivists: meaning lies in orientation toward real goods, not in success | Upheld. Answerable either way, and each answer has a cost; does not call frustrated lives meaningless; distinct from PQ1–2; no longer about Russell | — | SEP Meaning of Life §3 |
| 9 | naturalism/ultimate-authority | 2 | Kornblith's universal instrumental grounding: is it the same as a categorical norm? | Kornblith: universal because every agent has goals | Fair after fix | **I-2** | SEP Naturalism in Epistemology §4.2 |
| 10 | naturalism/what-is-man | 3 | (removed) | — | Upheld. The argument keeps its canonical home (`knowledge-possible` PQ1), and the response's first paragraph keeps the point | — | — |
| 11 | naturalism/know-the-good | 2 | If an obligation can bind someone with no reason of his own to comply, as Railton allows, what is lost? | Railton: not categorical, yet "not tantamount to relativism"; "a limitation we must live with" | Upheld. Accurate to pp. 201–203; does not say Railton denies moral reasons; preserves R2/R3. Overlap with `great-and-terrible` PQ1 is recorded for R12 | — | Railton pp. 201–203 |
| 12 | judaism/ultimate-personal | 1 | Halevi agrees that "merciful" names God's acts, yet God is known through his address; what does the address disclose? | Halevi: acquaintance with the God of Abraham through prophecy and the name *Adonai*, not a description of the essence | Upheld. A real interpretive difference; does not merge Halevi into Maimonides; no eternal-beloved premise | — | Kuzari II.2, IV.3, IV.16 |
| 13 | islam/ultimate-personal | 1 | Power vs eternal act (Maturidi): what does an eternally complete act of mercy consist in? | Maturidi: power concerns the possible, *takwīn* realizes it | Fair after fix | **I-3** | Harvey pp. 175, 181–184 |
| 14 | islam/why-alive | 3 | Q 17:15: what counts as the message reaching someone? Christian parallel | Those not adequately reached are excused | Fair after fix | M-3 | Q 17:15 (Haleem) |
| 15 | islam/revelation | 2 | Al-Bāqillānī's sign and Q 16:103: what evidence would distinguish revelation from transmission? | Q 16:103; the Qur'an corrects rather than copies | Fair after fix. A hypothetical route is not treated as proof, nor the unexpected as miracle | M-4 | al-Bāqillānī pp. 33–36; Q 16:103 |
| 16 | islam/jesus | 1 | For likeness commentators, what answers al-Rāzī's worry about eyewitness testimony and *tawātur*? | The second line of answer (no likeness miracle); the likeness confined to one occasion (al-Rāzī rejects this) | Upheld. Correctly limited to likeness accounts; R4's wording on Ibn Taymiyya kept | — | al-Rāzī on 4:157, pp. 1–2 (cited) |
| 17 | islam/ultimate-authority | 1 | If consensus binds because the Sunna cannot escape the whole community, how is the community's agreement established? | Limit consensus to what all know (e.g., obligatory prayers) | Upheld. Keeps al-Shāfiʿī's ground (§§1309–1312); does not set consensus against revelation | — | Risāla §§1309–1312 |
| 18 | islam/history | 1 | Torah "entrusted to preserve" (5:44) vs God guarding the Qur'an (15:9): why that keeping? | Testing (5:48); finality requires divine guarding | Fair after fix. A providence question, not incoherence | M-5 | Q 5:44, 5:48, 15:9 |
| 19 | hinduism/ultimate-reality | 1 | Beginningless, indefinable ignorance: does it explain the many, or mark where explanation stops? | Anirvacanīya: explanation stops by design; every view has a stopping point | Upheld after wording aligned (M-1). Engages the replies; does not repeat "who is ignorant?" | M-1 | SBE 34 I.1.1 intro., I.4.3; SBE 38 IV.1.3; SEP §3.4 |
| 20 | hinduism/suffering | 1 | Is all suffering requital, or could some serve another purpose without injustice? | Requital and purification coincide (fruition exhausts karma) | Upheld. Follows from III.2.38's "pain, pleasure, and a mixture of the two" as fruits; meets the II.1.36 justice argument on its own terms; distinct from PQ2 | — | SBE 38 III.2.38–41, pp. 180–183 |
| 21 | hinduism/ultimate-authority | 3 | Advaita's two standpoints vs Rāmānuja's co-ordination reading: which texts govern? Accommodation parallel | Novelty principle; co-ordination (*sāmānādhikaraṇya*) | Fair after fix | M-2 | SBE 48 I.1.13, pp. 228–229 |
| 22 | hinduism/what-is-man | 1 | Does the self keep anything of the life lived in a body beyond karma? | Impressions and progress carried forward; devotion (reviewer's summary, not cited on the page) | Fair after fix | **I-4** | Gītā 2.22, 5.18 (cited) |
| 23 | hinduism/after-death | 1 | Does the Lord add a verdict or mercy to desert, or only match deed and fruit? | The Lord's grace to the surrendered | Fair after fix | **I-5** | SBE 38 III.2.41, p. 183 |
| 24 | buddhism/offspring-family | 2 | Parents revered because they raised and showed the world; what is owed to those who did not? | Mettā owed to all; the highest repayment (AN 2.33) does not depend on desert | Upheld. AN 4.63 gives exactly this ground ("Why is that? Parents are very helpful…"); no creator premise | — | AN 4.63 (re-read); AN 2.33 |

## The 24 questions retained by production

| Group | Questions | Assessment |
|---|---|---|
| Named in the brief | `hinduism/evil` PQ1 | **Sound.** The R3 wording concedes the Vedānta warrant (II.1.34–36) and asks the application question; the Deep dive states the limit. It sits close to `suffering` PQ2, noted for R12. |
| | `islam/jesus` PQ2 | **Fair** under historical accountability. It asks for evidence apart from the Qur'an's authority. The response states the Christian side's own limit: incarnation is not historically established, and the narrow mistaken-identity claim cannot be strictly refuted. R4's qualifications stand. |
| | `naturalism/logic-binding` PQ2 | **Fair.** Canonical home of the revisability question; now distinct from `ultimate-authority` PQ2. |
| | `naturalism/knowledge-possible` PQ1 | **Fair.** Engages the "selection favours truth" reply by confining it to domains where usefulness and truth can come apart. |
| | `naturalism/knowledge-possible` PQ2 | **Fair, but it overlaps `ultimate-authority` PQ1.** Already signposted; R12. |
| School-specific | `judaism/ultimate-personal` PQ2; `islam/ultimate-personal` PQ2; `islam/ultimate-authority` PQ2; `islam/history` PQ2 | **Fair**, accurate to Maimonides, the *bi-lā kayfa* formula, al-Ghazālī and Ibn Taymiyya, and Ibn Khaldūn. |
| Hindu neighbours | `hinduism/suffering` PQ2; `after-death` PQ2; `what-is-man` PQ2–3; `ultimate-authority` PQ1–2; `ultimate-reality` PQ2; `evil` PQ2 | **Fair.** `suffering` PQ2 (judging the sufferer) differs from PQ1 (the purpose of suffering). `after-death` PQ2 is a school question. `what-is-man` PQ2 overlaps `one-and-many` PQ1 and `why-alive` PQ2 (already in the R12 list). |
| Naturalist and Islamic neighbours | `naturalism/worship` PQ1–2; `naturalism/why-alive` PQ1–2; `islam/why-alive` PQ1–2 | **Fair**, not answered on the page. |
| Buddhist neighbour | `buddhism/offspring-family` PQ1 | **Fair.** It asks how the ignoble-quest teaching relates to family love. |

## Source checks

| Source | What was checked | Result |
|---|---|---|
| `thibaut-shankara-brahmasutra-2` (new) | Registry metadata (SBE 38; Śaṅkara; Thibaut, tr.; Müller, ed.; Clarendon 1896; archive.org `vedntasutrastr02bdar`). III.2.38–41 at pp. 180–183. IV.1.3 at pp. 338–340, printed pages from the OCR running heads | **Confirmed.** "You yourself who ask this question!" (p. 340) is exact. It answers the objection "that a system of non-duality cannot be established because the Self is affected with duality by Nescience," and before knowledge "the soul is implicated in the transmigratory state." The site's reading, that the question arises within the empirical standpoint, is accurate. III.2.38–41: deeds "pass away as soon as done"; the Lord requites "in accordance with the merit of the agents"; Jaimini's *apūrva* view; Bādarāyaṇa's conclusion (p. 183). The topic is introduced at the empirical level ("a ruler and the objects of his rule"). |
| `thibaut-shankara-brahmasutra` | Introduction to I.1.1, pp. 3, 6, 9. I.4.3, pp. 242–243 | **Wording confirmed.** p. 6: superimposition "learned men consider to be Nescience." p. 9: "natural beginning- and endless superimposition," which knowledge removes. Beginningless is therefore not unremovable, and the page does not confuse the two. Two precision corrections (locator; the I.4.3 paraphrase) are in M-1. |
| `sep-shankara` | §3.4 | **Confirmed.** The locus question (individual or *brahman*) is listed as contentious in post-Śaṅkara Advaita. No Bhāmatī or Vivaraṇa position is named, and none is attributed to Śaṅkara. |
| `harvey-transcendent-god` | pp. 174–184 (PDF index = page + 16) | p. 175 is confirmed as production reported. The further readings that drive I-3 are pp. 176 n. 5, 181–184. |
| `quran-haleem` | 4:157, 5:44, 5:48, 15:9, 16:103, 17:15 (resource 85) | 17:15 is quoted exactly. 5:44 is quoted exactly ("entrusted to preserve"). 16:103 is paraphrased. |
| `anguttara-nikaya-sujato` | AN 4.63 | Confirmed: "Parents are very helpful to their children, they raise them, nurture them, and show them the world." |
| `thibaut-ramanuja-sribhashya` | I.1.13, pp. 228–229 (archive.org `vedntasutrastr03badauoft`) | Newly read for M-2 and noted in the registry. |
| `sep-induction-problem`, `sep-epistemology-naturalized` | §§3.2, 5.2; §4.2 | Read for I-1 and I-2 and noted in the registry. |

- **Registry.** No new source was registered by this review; the registry stays at 211. The notes of the eight entries above record what this review read. They state only what was read.
- **Direct quotations.** The only new direct quotation is from SBE 34, a checked edition: the *māyā* clause in M-1.
- **ESV.** No ESV quotation changed, so the ledger is unchanged.

## Horizontal symmetry

| Theme | Strongest reply granted | Does the question challenge Reformed Christianity too? | Verdict |
|---|---|---|---|
| Order and induction | Humean unification; non-Humean basic necessities; Strawson; IBE | Yes. `christianity/induction` concedes the circle and claims only a better explanation. The naturalist questions now ask for explanation, not proof. | Symmetric after I-1 and M-7. The Buddhist and Hindu `induction` questions ask a comparable explanatory question; not R5's scope. |
| Moral knowledge and obligation | Railton's non-categorical realism; Kornblith's instrumental epistemic norms; the humanist family ethic | Yes, and answered. The Christian claims a personal ground and grants the knave's rejoinder (`know-the-good`). | Consistent. Naturalist realism is not collapsed into preference. |
| Divine personality and love | Maimonides' attributes of action; Halevi; Maturidi eternal acts; Ash'ari relations | The eternal-beloved premise stays in the responses, classed as resting on revelation. The new Maturidi question is not a Reformed problem in the same form (decree versus execution). | Symmetric after I-3. |
| Authority and interpretation | Al-Shāfiʿī's grounding of consensus; Advaita's two standpoints; the Rāmānuja reading | Yes. The accommodation parallel is stated on the Hindu question. Reformed self-attestation is examined in `christianity/ultimate-authority`. | Fair. Diversity is not treated as refutation. |
| Revelation and history | Q 16:103; *taḥrīf*; Ibn Taymiyya on mistaken witnesses | Christian prophecy and resurrection claims face the same historical standard (Revelation & History domain). | Fair. R4's *taḥrīf* and crucifixion corrections are intact. |
| Suffering, karma and justice | Lord as dispenser (II.1.34–36; III.2.38–41); grace | The Christian's own burden, undeserved harm, is stated on `hinduism/evil`. | Fair after I-5. |
| Identity and rebirth | The self carries continuity, not memory | Christianity does not ground identity in memory either; this is stated. | Fair after I-4. The R3 correction is intact. |
| Family duties and gratitude | AN 4.63's ground; mettā; AN 2.33 | The Larger Catechism Q. 127 parallel exists (production record). | Fair. No creator premise; devas are not confused with a creator God. |

Different lanes keep different strengths. No question was softened to manufacture balance: the Maturidi, Advaita, Strawson and Kornblith questions remain pointed.

## Argument classifications

- **R5's classifications hold, with two refinements:**
  - The Advaita reply now says the replies *meet* the incoherence charge while remaining disputed within Vedānta. The residual question stays one of explanatory adequacy.
  - The after-death question no longer implies an internal tension in a combined account.
- **No question now calls a disagreement a contradiction.**
  - The Strawson and Kornblith questions press explanatory incompleteness and the nature of normativity.
  - The Maturidi question presses intelligibility within a recognized intra-Sunni dispute.
  - The Islamic history question is about providence.

## R1–R4 regression check

| Batch | Correction | Status |
|---|---|---|
| R2 | Railton and moral realism | Intact. `know-the-good` is unchanged by this review. Railton is not presented as denying reasons, and the categoricity concession is accurately scoped. |
| R3 | Hindu karma and suffering; rebirth identity (memory is not the ground) | Intact. I-4 and I-5 strengthen them. |
| R3 | Jewish and Islamic fairness | Intact. |
| R4 | *Taḥrīf*; crucifixion evidence (`jesus` response unchanged); al-Shāfiʿī's consensus; Twelver disclosure | Intact. Nothing in `islam/jesus` was changed. |

## Three-question answers (methodology)

- **Count verified:** 10 / 110 / 20 answers with one, two and three questions; 290 questions in 140 answers.
- **The 20 answers with three questions:**
  - Buddhist: `great-and-terrible`, `what-is-man`, `why-alive`, `worship`;
  - Hindu: `great-and-terrible`, `ultimate-authority`, `what-is-man`, `why-alive`, `worship`;
  - Islamic: `great-and-terrible`, `what-is-man`, `why-alive`, `worship`;
  - Jewish: `great-and-terrible`, `what-is-man`, `why-alive`, `worship`;
  - naturalist: `great-and-terrible`, `why-alive`, `worship`.
- **Status.** `METHODOLOGY.md` ("one or two precise questions") states an **editorial standard, not a hard content requirement**. `CONTENT-MODEL.md` requires only that the section contain at least one list item, and the validator enforces no maximum.
- **R5 did not newly violate it.** It removed a third question (`naturalism/what-is-man`) and added none. This review added none.
- **Effect on presentation.** Three questions do not materially undermine presentation.
- **Recommendation.** A bounded release-pass task, best folded into R12's redundancy work, should do one of two things:
  - reduce the 20 answers to two questions each, starting with the third questions that duplicate another page; or
  - amend the methodology to "one to three".

## Duplicate questions remaining

Production's eight R12 items were checked. None is created by an R5 revision, so all stay in R12. The `hinduism/after-death` ↔ `order` adjacency is resolved by I-5. Additional items found in this review's inventory sweep:

- **`naturalism/know-the-good` PQ2 ≈ `great-and-terrible` PQ1 ≈ `fail-the-good` PQ1** (the knave's reason).
  - R5 sharpened the first along the categoricity line that R3 Review A asked for, so this review keeps it.
  - R12 should trim the flagship or `fail-the-good` version, since the argument now lives in `know-the-good` (NAT-03).
- **`naturalism/love-beauty-creativity` PQ2** asks whether evolution explains costly faithfulness.
  - It is pre-existing, and partly answered in the view (origin is not ought).
  - After M-6 it no longer duplicates `offspring-family` PQ1, but it remains weak.
- **`islam/induction` PQ2** (how the promise is received without induction) is a question the response concedes applies equally to Christianity. As a pressure question it presses nothing distinctive.
- **`hinduism/evil` PQ1 ≈ `hinduism/suffering` PQ2** (inferring desert from an unknown history).

## Validation

All checks were run on the final tree:

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 52 thinkers, 211 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing) |
| `npm run build` | 92 pages built |
| `git diff --check` | Clean |
| `node scripts/audit-inventory.mjs` | 168 answers; 129,801 words (+195); 2,736 citations (+8). ESV candidates 106, unledgered 4, orphan 1 (all pre-existing, unchanged). `data/` regenerated. |
| `node scripts/check-built-links.mjs` | 9,802 links, of which 3,999 are cross-page, 8,071 fragments and 2,602 external. 0 broken, 0 duplicate IDs, 0 outside the base. |

- **Link checker.** The committed R4 checker fixes the base path in the script, so the Git Bash path rewrite no longer applies. It walks every HTML file in `dist/` and counts cross-page links separately from fragments. Cross-page links (3,999) differ from total links (9,802), so cross-page links were not dropped.
- **Count changes.**
  - Citations rose by 8, one per new `<Cite>`: two in `islam/ultimate-personal`, and one each in naturalist `induction` and `ultimate-authority`, Islamic `revelation` and `history`, and Hindu `ultimate-authority` and `after-death`.
  - Links rose by 17 and fragments by 17, from the citation anchors and backlinks those citations add. Cross-page links rose by 1.

## Limits and deferred work

- **Coverage.** The other 242 questions were inventory-swept, not substantively reviewed.
- **Not opened.** Al-Ghazālī's *Fayṣal* (unreached hearers) and Bhāmatī or Vivaraṇa sources.
- **Deferred to later batches.**
  - **R7:** `hinduism/worship` PQ3 (image theology).
  - **Release pass:** the three-question methodology issue.
  - **R12:** the duplicate list above.

## Recommendation

All 5 IMPORTANT and 7 MINOR findings are fixed, and full validation passes. **MERGE.** The user merges. R6–R12 were not begun.
