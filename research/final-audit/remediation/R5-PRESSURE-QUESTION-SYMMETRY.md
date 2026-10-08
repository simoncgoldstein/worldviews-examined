# R5: Pressure-question fairness and argument symmetry

2026-10-08. Branch `r5-pressure-question-symmetry`, from `main` @ `6a34393` (merge of PR #19, R4). One Claude Opus 5.5 top-level session, no subagents, no reviewer during production.

## Scope and findings addressed

| Finding | Severity | Result |
|---|---|---|
| XQ-04 pressure-question symmetry | IMPORTANT | All 15 listed questions examined. 13 revised in R5. 1 kept after review (`hinduism/evil` PQ1, already repaired by R3). `islam/revelation` PQ2 had been corrected by R4 for *taḥrīf*; R5 changed it again only to remove its overlap with `islam/jesus` PQ2. |
| NAT-04 order/induction asymmetry | MINOR | Fixed: neither page now asks naturalism for a non-circular proof the Christian page concedes it lacks. |
| NAT-06 questions answered in the view | MINOR | Fixed: `offspring-family` PQ1–2, `worship` PQ3, `why-alive` PQ3. |
| NAT-07 duplicate questions | MINOR | `order`/`induction` given distinct work. `ultimate-authority` PQ2 no longer repeats `logic-binding` PQ2. `what-is-man` PQ3 removed in favour of its canonical home in `knowledge-possible`. |
| JUD-06 | MINOR | Fixed. |
| ISL-08 | MINOR | Fixed (`ultimate-personal`, `why-alive`). |
| HIN-04 locus of *avidyā* | MINOR | Advaita's reply added from Śaṅkara's text; question restated after the reply. |
| HIN-05 karmic grounding | MINOR | `evil` already satisfactory after R3 (kept). `suffering` PQ1 replaced; BS III.2.38–41 verified and cited. |
| BUD-05 | MINOR | Fixed. |
| R3 Review A deferral: `naturalism/know-the-good` PQ2 | — | Fixed. |
| R3 Review B / R3 production deferral: `hinduism/after-death` PQ1 | — | Fixed. |
| R4 deferrals: `islam/history` PQ1, `islam/ultimate-authority` PQ1, `revelation`/`jesus` overlap | — | Fixed. |

The original audit files are unchanged.

## Mechanical inventory

| Measure | Before R5 | After R5 |
|---|---|---|
| Answers with a pressure-question section | 140 (Christian entries use objection and reply instead) | 140 |
| Pressure questions | **291** | **290** |
| Answers with 1 / 2 / 3 questions | 10 / 109 / 21 | 10 / 110 / 20 |

- **Intended count.** `METHODOLOGY.md` says "one or two precise questions". 20 answers still carry three. The structure was preserved except where a duplicate was removed (`naturalism/what-is-man`). Whether three is acceptable is an editorial decision for the release pass, not an R5 fairness issue.
- **Duplicates and obsolete questions found by the inventory.** Those within R5's brief were resolved (below). Those outside it are listed under "Deferred".

## Coverage ledger

Actions: **changed**; **removed/replaced**; **kept after review**; **already fixed** (by R3 or R4).

| Answer | PQ | Original problem | Wording after R1–R4 (before R5) | Worldview's reply on the page | Action | Reason | Source check | Final assessment |
|---|---|---|---|---|---|---|---|---|
| naturalism/order | 1 | NAT-04: asks for the non-circular warrant Christianity concedes it lacks | "If laws only summarize…, what gives us reason, before tomorrow arrives, to expect the part we have seen to continue?" | Humean, non-Humean and antirealist accounts; only non-Humeans claim laws explain (DD) | changed | Page now owns "do laws explain?" | none needed (SEP §§2, 8 already cited) | Fair; Humean can answer by unification |
| naturalism/order | 2 | NAT-07: duplicates induction PQ2 | "…where do those necessities come from?" | Armstrong; dispositional essentialism | changed | Asks whether *which* necessities hold is a further, unexplained fact | none | Distinct from induction; comparative, not a contradiction claim |
| naturalism/induction | 1 | NAT-04, NAT-07: near-verbatim of order PQ1 | "If laws are only summaries…, what makes it reasonable, before tomorrow arrives…?" | Externalism, rule-circularity, IBE, Bayesian priors, Strawson, Reichenbach, Quine | changed | Parity question on basic standards of reasonableness; matches the Christian page's own concession | none | Symmetric by design |
| naturalism/induction | 2 | NAT-07 | "If laws are real necessities, where do those necessities come from?" | IBE answer (Armstrong, BonJour, Foster) and its critics (DD) | changed | Presses the IBE answer's own known difficulty (local vs universal law) | none (DD already states the critics' point) | Engages the reply |
| naturalism/offspring-family | 1 | NAT-06: view already separates origin from ought | "If family exists because it served reproduction, what makes faithfulness to an infertile or ageing spouse fitting?" | Origin does not settle ought; ethics, not biology | changed | Asks about the ground of the obligation, not genealogy; no implication that infertile spouses are less valuable | none | Fair to secular realists and constructivists |
| naturalism/offspring-family | 2 | Answered on the page (DD "Explanation and evaluation") | "Can a description of how parental love evolved tell us when it is owed?" | Same | changed | Replaced by the debunking question (does the kin-selection origin of a moral sense bear on its reliability?) | none | Distinct from PQ1 |
| naturalism/worship | 3 | NAT-06: answered by cognitive science of religion | "Why does the human mind so persistently seek something ultimate to revere?" | CSR byproduct/adaptation accounts; "neither shows that religion is false" | removed/replaced | Engages the causal/epistemic distinction through the agent-detection account | none (SEP §1.4 already cited) | Distinct from PQ1 (parity of natural histories) |
| naturalism/why-alive | 3 | NAT-06: aimed at Russell's consistency, not naturalism | "Does Russell's 'we create value' leave room for the early Russell's ideals…?" | Subjectivist and objectivist accounts | removed/replaced | Meaning when efforts fail; does not treat finite meaning as meaningless | none | Distinct from PQ1 (subjectivism) and PQ2 (objective goods) |
| naturalism/ultimate-authority | 2 | NAT-07: ≈ logic-binding PQ2 | "If even logic is revisable, by what standard would a proposed revision of logic be judged correct?" | Quinean holism; Fumerton critique; "every framework reaches commitments" | changed | Revisability of logic belongs to `logic-binding`; new PQ takes the response's third pressed item, the norm "follow the evidence" | none | Distinct |
| naturalism/logic-binding | 2 | NAT-07 | "If logic is revisable, by what logic would we judge a revision correct?" | Quine | kept after review | Canonical home of the revisability question | — | Fair |
| naturalism/what-is-man | 3 | NAT-07/XQ-06: duplicates knowledge-possible PQ1 | "Can an account of how reasoning evolved also justify the claim that our reasoning reaches truth?" | — | removed | The evolutionary-reason argument's canonical home is `knowledge-possible`; the response's first paragraph keeps the point | — | Page now has two questions |
| naturalism/knowledge-possible | 1, 2 | Canonical home; PQ2 overlaps UA PQ1 | unchanged | Selection favours truth (Post); no first philosophy | kept after review | PQ1 is the canonical question; PQ2 already links to UA | — | PQ2 overlap deferred to R12 |
| naturalism/know-the-good | 2 | R3 Review A: answered by Railton's applicability claim | "How does the proposed standard bind someone whose interests oppose it?" | Railton: the knave is obligated but has no categorical reason | changed | Asks the categoricity question at Railton's own concession | none (Railton pp. 201–203 cited) | Distinct from `fail-the-good` and flagship PQ1 in asking what is *lost* |
| judaism/ultimate-personal | 1 | JUD-06: Christian premise (love needs an eternal object); Maimonides answered | "If God's love is eternal, whom did God love before anything was created?" | Maimonides' attributes of action; Halevi's agreement on the words and protest about knowledge | changed | Presses Halevi's own combination; preserves the Christian–Jewish distinction (stated in the response) without making it circular | none (Kuzari II.2, IV.3 cited) | Distinct from PQ2 (Maimonides on prayer) and UR PQ2 |
| judaism/ultimate-personal | 2 | — | unchanged | — | kept after review | Specific to Maimonides; fair | — | — |
| islam/ultimate-personal | 1 | ISL-08: same Christian premise; Sunni answer in the response | "…are they eternally exercised, and toward whom, before anything was created?" | Eternal attributes, temporal objects; schools differ on God's acts | changed, plus one sentence in the response | Response now distinguishes Maturidi eternal acts, the Ash'ari contrast and Ibn Taymiyya's voluntary attributes; PQ engages the Maturidi doctrine itself | **Harvey p. 175 re-read** (checked edition) | Engages the reply; Maturidi-specific, not "Islam" |
| islam/why-alive | 3 | ISL-08: equally a Christian problem (the unevangelized) | "If life is a test, what becomes of those who never had a fair chance to take it?" | — (page silent on the unreached) | removed/replaced | Engages Q 17:15; states the Christian parallel explicitly | **Q 17:15 read** (Haleem, resource 85) | Reciprocal |
| islam/revelation | 2 | ISL-01 (R4 fixed); R4 review: overlap with jesus PQ2 | "If, as Ibn Taymiyya held, the earlier scriptures were altered mostly in meaning…, what evidence apart from the Qur'an shows that the Gospels' account of the crucifixion is among what was changed or mistaken?" | Al-Baqillani's three aspects; al-Ghazali's cumulative case | already fixed (R4); changed for overlap | `revelation` now presses recognition of revelation (al-Baqillani's historical-knowledge sign); `jesus` keeps the crucifixion evidence | none (Baqillani pp. 33–36 cited in DD) | No restoration of the confirm/contradict dilemma |
| islam/jesus | 1 | Repeated the response's closing point without its replies | "If God made the death of another man look like Jesus' death even to his companions, how can eyewitness testimony… be trusted?" | Al-Razi's objection and the two lines of answer (DD) | changed | Now addressed to commentators who hold the likeness view, since the other line of answer does not need it | none (al-Razi cited) | Narrower and fairer |
| islam/jesus | 2 | — | "What evidence, apart from the Qur'an's authority, shows that the first-century witnesses to the crucifixion were mistaken?" | Ibn Taymiyya: onlookers deceived | kept after review | Canonical home of the historical question; matches R4's qualified wording | — | Fair under the historical-accountability standard |
| islam/ultimate-authority | 1 | R4: refine in light of al-Shafi'i's grounding of consensus | "If a genuine consensus… cannot err, how is it established that a consensus has really been reached…? (Literalists such as Da'ud al-Zahiri…)" | Al-Shafi'i: consensus answers to the Sunna, which cannot escape the whole community | changed | Engages al-Shafi'i's actual ground; does not set consensus against revelation | none (Risāla §§1309–1312 cited) | Fair |
| islam/ultimate-authority | 2 | — | reason and revelation (al-Ghazali, Ibn Taymiyya) | — | kept after review | Accurate to both positions | — | Twelver Imamate is handled in the response, not equated with Sunni scholarship |
| islam/history | 1 | R4: partly answered by *taḥrīf*; repeated the evidence question | "…what in the history of the earlier messages shows that the final one restores them rather than revises them?" | One message to every community; *taḥrīf* (revelation page) | changed | History-specific providence question, answerable from the tradition (e.g. the earlier books entrusted to their communities) | none | No asymmetric demand for historical certainty |
| islam/history | 2 | — | moral judgement vs Ibn Khaldun's natural decline | — | kept after review | Still useful after the Mahdi paragraph | — | — |
| hinduism/ultimate-reality | 1 | HIN-04: Advaita's replies absent | "In Advaita, whose is the ignorance…, if Brahman alone is real?" | **Added:** Śaṅkara's replies (see below) | changed | Retained in a precise form after the reply is granted | **SBE 34 Intro and I.4.3 re-read; SBE 38 IV.1.3 newly registered; SEP §3.4 re-read** | Tradition no longer portrayed as silent |
| hinduism/evil | 1 | HIN-05 | "What warrants karma as an explanation of unequal conditions without making victims' suffering evidence of a known prior offense?" (R3 wording) | BS II.1.34–36, Śaṅkara and Rāmānuja; Lord as dispenser | already fixed (R3); kept after review | Concedes the warrant and asks a precise application question | — | Satisfactory |
| hinduism/suffering | 1 | HIN-05: ignored the dispenser answer the view now states | "What grounds the karmic order rather than merely naming the connection it is meant to explain?" | Lord as dispenser (II.1.34–36); **added** III.2.38–41 | removed/replaced | Grants the dispenser doctrine and asks whether all suffering must be requital | **SBE 38 III.2.38–41 verified** | Distinct from PQ2 (judging sufferers) and `evil` PQ1 (application) |
| hinduism/ultimate-authority | 3 | XQ-04: diversity as pressure | "If the same texts yield three incompatible readings, what decides between them?" | Response: disagreement refutes none of the schools | removed/replaced | Presses one actual adjudication rule (the two standpoints) and names the Christian parallel (accommodation) | none | Same standard applied to both |
| hinduism/what-is-man | 1 | Answered in the view (opportunity) | "If the body is like clothing, why does the human birth… matter so much for liberation?" | Human birth as opportunity (Gītā 9.33 comm.) | removed/replaced | Presses the body's role in personal identity, the response's own point | none | Distinct from PQ2 (Advaita bondage) and PQ3 (individuation); also removes overlap with `why-alive` PQ1 |
| hinduism/after-death | 1 | R3 Review B: answered in the response (the self, not memory, carries continuity) | "What connects the self's responsibility across births when ordinary personal memory changes?" | Self carries desert; fruition is the working out of one's own action | changed | Presses the response's stated Hindu reply against the dispenser doctrine; no memory-identity premise | none (BS II.1.34–36 cited) | Distinct from `evil`/`suffering`; adjacent to `order` PQ1 but about justice, not metaphysics |
| buddhism/offspring-family | 2 | BUD-05: category mistake about Buddhist gods | "Why should parents be revered like gods in a teaching without a creator?" | AN 4.63: parents honoured because they raised and nurtured their children and showed them the world | removed/replaced | Engages the gratitude ground the sutta actually gives | **AN 4.63 re-read** (SuttaCentral, Sujato) | No creator premise |
| Others read with the targeted pages | — | — | `naturalism/worship` 1–2; `naturalism/why-alive` 1–2; `islam/why-alive` 1–2; `islam/ultimate-personal` 2; `hinduism/evil` 2; `hinduism/suffering` 2; `hinduism/after-death` 2; `hinduism/what-is-man` 2–3; `hinduism/ultimate-authority` 1–2; `hinduism/ultimate-reality` 2; `buddhism/offspring-family` 1 | — | kept after review | Accurate, specific, not answered on the page | — | — |

**Totals.** 48 questions read substantively. 24 changed: 23 rewritten and 1 removed. 24 kept after review. Of the 15 audit-listed questions, 13 were revised, 1 was kept, and 2 had already been corrected by R3 or R4.

## Before and after

**naturalism/order**
- Before: "If laws only summarize the whole pattern of what actually happens, what gives us reason, before tomorrow arrives, to expect the part we have seen to continue?" / "If laws are real necessities in nature, where do those necessities come from?"
- After: "On a best-system view, a law is part of the simplest true summary of what happens. In what sense does citing such a law explain a regularity rather than restate it?" / "If laws are real necessities or powers in things, is it a further fact that nature has these necessities rather than others, and if so, what explains it?"

**naturalism/induction**
- Before: "If laws are only summaries of what has happened, what makes it reasonable, before tomorrow arrives, to expect the summary to hold?" / "If laws are real necessities, where do those necessities come from?"
- After: "If Strawson is right that being reasonable simply is following inductive evidence, may a theist equally treat trust in God's faithfulness as a basic standard of reasonableness, and if not, what is the relevant difference?" / "If real laws are the best explanation of past regularities, what makes a law that holds everywhere a better explanation than one that holds only for the cases observed so far?"

**naturalism/offspring-family**
- After: "Naturalists ground fidelity in ethics rather than biology. What makes a lifelong promise binding once keeping it has become costly and the evolved feelings that supported it have faded?" / "If the sense that one owes special care to one's own children was shaped by kin selection, does that history give reason to trust the sense or to discount it?"

**naturalism/worship PQ3**
- After: "If belief in gods arises partly from a readiness to detect agents, which also produces false alarms, is that a reason to discount belief in God as such, or only beliefs formed where the tendency is known to misfire?"

**naturalism/why-alive PQ3**
- After: "If meaning comes from contributing to real goods, does a life whose best efforts fail through no fault of its own have less meaning than one whose efforts succeed?"

**naturalism/ultimate-authority PQ2**
- After: "What gives the norm 'follow the evidence' its authority, if it is not itself one of the network's empirical findings?"

**naturalism/know-the-good PQ2**
- After: "If an obligation can bind someone who has no reason of his own to comply, as Railton allows, what is lost when moral demands are not reasons for everyone they bind?"

**judaism/ultimate-personal PQ1**
- After: "Halevi agrees with Maimonides that 'merciful' describes God's acts, yet holds that God is known through his own address. What does that address disclose about God that an attribute of action does not?"

**islam/ultimate-personal.** Response sentence added:
> The schools then explain God's acts differently. Maturidis hold that God's acts are themselves eternal and only their effects are bound to time, the doctrine that most distinguishes them from the Ash'aris. Ibn Taymiyya speaks of voluntary attributes that God exercises when he wills (see the Deep dive).

- PQ1 after: "If, as the Maturidis hold, God's merciful act is eternal and only its effects are temporal, what is that act before it has any effect, and how does it differ from God's power to show mercy?"

**islam/why-alive PQ3**
- After: "If God does not punish 'until We have sent a messenger,' is someone tested fairly who met the message only in a distorted form? Christians face the same question about those who hear the gospel badly or not at all."

**islam/revelation PQ2**
- After: "Al-Baqillani offered the unlettered Prophet's knowledge of earlier prophets and kings as a sign. What would distinguish knowledge given by revelation from knowledge that could have reached him from the Jews and Christians of Arabia?"

**islam/jesus PQ1**
- After: "For commentators who hold that God cast Jesus' likeness on another man, what answers al-Razi's worry that such a miracle would unsettle the eyewitness testimony on which mass transmission, including the Qur'an's own, depends?"

**islam/ultimate-authority PQ1**
- After: "If consensus binds because the Sunna cannot escape the whole community, as al-Shafi'i argued, how can anyone establish that the whole community has in fact agreed on a given point?"

**islam/history PQ1**
- After: "If every messenger brought the same message, why was the final revelation preserved while the earlier ones were left open to misreading and alteration?"

**hinduism/ultimate-reality PQ1**
- After: "In Advaita, if ignorance has no beginning and can be called neither real nor unreal, does that explain how the one Brahman appears as many, or mark the point where explanation stops?"

**hinduism/suffering PQ1**
- After: "If the Lord dispenses pain and pleasure according to merit and demerit, is all suffering requital, or could some serve another purpose, such as purification or another's good, without injustice?"

**hinduism/ultimate-authority PQ3**
- After: "Advaita reads the texts that teach difference as true only from the empirical standpoint. What principle keeps a rival school from assigning the texts of identity to a lower standpoint instead? Christian appeals to divine accommodation face a similar test."

**hinduism/what-is-man PQ1**
- After: "If the same self can inhabit a dog's body or a human one, does the human body make any difference to who a person is, or only to what the self can do?"

**hinduism/after-death PQ1**
- After: "If fruition is the working out of one's own action, yet the Brahma Sūtra makes the Lord its dispenser, is it finally a personal judgment or an impersonal consequence that the Lord administers?"

**buddhism/offspring-family PQ2**
- After: "If parents are revered because they raised their children and showed them the world, what is owed to parents who did not?"

## Hindu *avidyā* reply (HIN-04)

Added to the `hinduism/ultimate-reality` response, after Rāmānuja's objection:

> Advaita has replies. Śaṅkara calls the superimposition that constitutes ignorance natural and without beginning, so there was never a self that first existed free of it and then fell into it. He says that the causal power of ignorance has the Lord for its substratum and can be called neither real nor unreal. And to the question of who lacks true knowledge he answers, "You yourself who ask this question!" The question, that is, arises within the empirical standpoint, where the individual self is real enough to be ignorant. Later Advaitins disputed whether ignorance is located in the individual self or in Brahman. These replies answer the charge of incoherence; what remains is a question of explanation.

Sources:

| Claim | Source | What was read |
|---|---|---|
| Superimposition is ignorance; it is natural, beginningless and endless | Thibaut, SBE 34, Introduction pp. 6, 9 (p. 3, Thibaut's note "original, beginningless") | archive.org OCR, `vedntasutrastr01bdar` |
| The causal potentiality "is of the nature of Nescience… has the highest Lord for its substratum"; *māyā* "cannot be defined either as that which is or that which is not" | SBE 34, I.4.3, pp. 242–243 | same |
| "You yourself who ask this question!"; before knowledge the soul is in the transmigratory state | Thibaut, **SBE 38**, IV.1.3, pp. 337–340 | archive.org OCR, `vedntasutrastr02bdar`; **newly registered** as `thibaut-shankara-brahmasutra-2` |
| Locus (individual or Brahman) contentious in post-Śaṅkara Advaita | SEP "Śaṅkara" (Dalal) §3.4 | re-read |

- **School distinctions.** Śaṅkara's text gives two answers: the Lord as substratum of the causal Nescience (I.4.3), and the questioner as the one ignorant (IV.1.3).
- **The later split.** The Bhāmatī (individual) and Vivaraṇa (Brahman) positions are not named, because no checked source for them was read. SEP's general statement carries the clause, and no later formulation is attributed to Śaṅkara.

## Hindu karmic-dispenser result (HIN-05)

- **`evil`.** It already gives the Brahma Sūtra's answer: II.1.34–36 in both Śaṅkara and Rāmānuja, checked in R3 Review A. PQ1 already concedes that warrant and asks the application question, so it is kept unchanged.
- **III.2.38.** The original plan's locator was verified rather than assumed. SBE 38 pp. 180–183 (III.2.38–41) is directly relevant:
  - the fruits of action, "pain, pleasure, and a mixture of the two", come from the Lord, because deeds pass away as soon as they are done (38);
  - scripture says so (39);
  - Jaimini's rival view is that the deed, or the apūrva, brings the fruit (40);
  - Bādarāyaṇa concludes that the Lord gives fruits "with a view to the deeds done by the souls", so he is not partial (41).
- **`suffering`.** A supporting sentence citing III.2.38–41 was added beside II.1.34–36. PQ1 now grants that grounding and asks whether all suffering must be requital. It keeps three things distinct, each now carried by its own question:
  - coherent explanation (`evil` PQ1 grants it);
  - warranted application (`evil` PQ1);
  - judging the sufferer (`suffering` PQ2).
- The page asks for no public recollection of past lives.

## Naturalist order and induction distinction

- **`order`:** what laws are and whether they explain, covering the Humean restatement worry and the source of the non-Humean necessities.
- **`induction`:** what warrants extrapolation. PQ1 is a parity question about basic standards of reasonableness: Strawson's own answer against the Christian page's concession. PQ2 presses the IBE answer's known difficulty, local versus universal laws, which the Deep dive already records.
- **Neither page now asks for a certainty the Christian answer does not provide.**

## Jewish and Islamic eternal-love questions

Neither question now presupposes that love requires an eternal object.

- **Judaism:** PQ1 presses Halevi's combination of attributes of action with knowledge through address. It does not ask Maimonides to answer a premise he rejects. The Trinity difference stays in the response, where it is classified as resting on whether the New Testament is revelation.
- **Islam:** PQ1 presses the Maturidi doctrine of eternal acts with temporal effects. That is a recognized question within Sunni theology, since Ash'aris contested *takwīn*. The response now marks the Maturidi, Ash'ari and Ibn Taymiyya differences, and the Christian's question remains classified as resting on Christian revelation.

## Buddhist filial-reverence correction

- **What changed.** The creator-based question was replaced with one that asks about the ground AN 4.63 actually gives: parents "raise them, nurture them, and show them the world", re-read in Sujato's translation.
- **What the old question got wrong.** The sutta calls parents "elder gods", a title of honour that sits comfortably in a cosmology with devas. It does not imply that reverence requires a creator.
- **The new question.** It asks what is owed when that ground fails. A Christian answer exists too: honour that includes "bearing with their infirmities" (Larger Catechism Q. 127). The question is therefore comparative, not a gotcha.

## Newly checked sources

- **New registry entry:** `thibaut-shankara-brahmasutra-2` (SBE 38, Clarendon 1896; archive.org Toronto copy). It covers III.2.38–41 and IV.1.3. Registry: 210 → 211 sources.
- **Re-read and noted:**
  - `thibaut-shankara-brahmasutra`: Introduction; I.4.3;
  - `sep-shankara`: §3.4;
  - `harvey-transcendent-god`: pp. 174–177;
  - `quran-haleem`: 17:15–16.
- **Re-read, no registry change:** AN 4.63 (`anguttara-nikaya-sujato`).
- **Not used:**
  - **Bhāmatī and Vivaraṇa:** no checked source was read for these two later Advaita positions.
  - **al-Ghazālī's *Fayṣal*:** his view on those who never heard the message; not registered.

## Overlap resolved

- order ↔ induction
- logic-binding ↔ ultimate-authority (naturalism)
- what-is-man ↔ knowledge-possible (naturalism)
- offspring-family PQ2 ↔ the page's own Deep dive
- islam/revelation ↔ islam/jesus
- islam/history ↔ islam/jesus
- hinduism/what-is-man PQ1 ↔ hinduism/why-alive PQ1
- hinduism/after-death PQ1 ↔ its Christian response
- hinduism/ultimate-reality PQ1: rewritten so that it no longer repeats `what-is-man` PQ2, which asks who is bound and who liberated

## Cross-worldview symmetry pass

All 24 revised questions were read horizontally. For each one, two questions were asked: how the Christian would answer the same criticism, and whether the other worldview was given an equal chance to answer.

| Theme | Result |
|---|---|
| Divine love and personality | No lane is asked to concede that love needs an eternal beloved. The Christian claim stays in the responses, classified as resting on Christian revelation. |
| Ultimate authority and interpretation | The Hindu question names the Christian parallel (accommodation). The Islamic consensus question engages al-Shāfiʿī's subordination of consensus to the Sunna. The naturalist question presses a norm that the Christian standard also uses, but which the Christian grounds differently. |
| Natural order and induction | The Christian lane's concession (`christianity/induction`) is now matched: the naturalist questions ask about explanation and the IBE step, not non-circular proof. |
| Moral grounding | The family and know-the-good questions target the ground of obligation, not genealogy. Naturalist realism is not collapsed into preference. |
| Suffering and evil | The Hindu questions grant the dispenser doctrine. The Christian response's own burden (undeserved harm) is already stated on `hinduism/evil`. |
| Personal identity | No question uses lost memory as a disproof of identity. |
| Revelation and history | The `jesus` question keeps the historical standard used for Christianity's own claims. `revelation` and `history` no longer repeat it. The `revelation` question's alternative source hypothesis is the same kind of test that Christian prophecy claims face. |
| Unequal opportunity | Reciprocity is stated explicitly on `islam/why-alive`. The Reformed position (WCF 10.4) faces the question at least as sharply. |

- **Christian responses.** No revised question contradicts or outruns its Christian response. Two responses received minimal adjacent clarifications: the Islamic schools on God's acts, and the Advaita reply.
- **Limits.** No question was weakened to manufacture balance: the Advaita, Maturidi and IBE questions remain pointed. No question uses a stock "Christianity faces this too" clause. The parity notes appear only where the parallel is specific (accommodation; the unevangelized).

## Questions unchanged and why

| Question | Why it stays |
|---|---|
| `hinduism/evil` PQ1 | R3 already made it fair |
| `islam/jesus` PQ2 | Canonical historical question; matches R4's qualifications |
| `islam/ultimate-authority` PQ2 and `islam/history` PQ2 | Accurate to the positions |
| `naturalism/logic-binding` PQ2 and `knowledge-possible` PQ1 | Canonical homes |
| `judaism/ultimate-personal` PQ2 and `islam/ultimate-personal` PQ2 | School-specific and fair |
| The other questions read alongside the targeted pages | Accurate, specific and not answered on the page; listed in the ledger |

## Deferred (not R5)

- **R12 (redundancy and canonical links).** Further duplicates found by the inventory but outside R5's brief:
  - `naturalism/what-is-man` PQ2 ≈ `great-and-terrible` PQ2 (equal standing at low capacity);
  - `naturalism/knowledge-possible` PQ2 ≈ `ultimate-authority` PQ1 (already signposted);
  - `naturalism/fail-the-good` PQ1 ≈ `great-and-terrible` PQ1 (binding the unwilling);
  - `naturalism/ultimate-personal` PQ1 ≈ the reasons-versus-causes point in `what-is-man`;
  - `buddhism/revelation` PQ1 ≈ `ultimate-authority` PQ2 (realization versus conviction);
  - `buddhism/order` PQ1 ≈ `ultimate-reality` PQ1 (constancy of conditionality);
  - `hinduism/one-and-many` PQ1 ≈ `what-is-man` PQ2 ≈ `why-alive` PQ2 (Advaita: who is liberated);
  - `hinduism/after-death` PQ1 is adjacent to `order` PQ1 (Lord and karma), though its focus differs.
- **Editorial / release pass.** 20 answers carry three questions against the methodology's "one or two".
- **R7.** `hinduism/worship` PQ3 (image worship) depends on the *arcā* theology R7 will add.
- **R6, R8–R11.** No R5 item.

## Validation

All run on the final tree:

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 52 thinkers, 211 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing) |
| `npm run build` | 92 pages built |
| `git diff --check` | Clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 129,606 words (+471), 2,728 citations. ESV candidates 106, unledgered 4, orphan 1 (all pre-existing, unchanged). `research/final-audit/data/` regenerated and committed. |
| `node scripts/check-built-links.mjs` (R4's repaired checker, fixed base path) | 9,785 links, of which 3,998 cross-page and 8,054 fragments; 0 broken, 0 duplicate IDs, 0 outside the base |

- **No ESV quotation changed.** The ledger is unchanged.
- **Link checker.** It checks cross-page links as well as same-page fragments: cross-page links are counted (3,998), and links ≠ fragments.

**Word changes:** +471 across 21 answers.

| Answer | Change | Answer | Change |
|---|---|---|---|
| hinduism/ultimate-reality | +129 | islam/ultimate-personal | +65 |
| hinduism/suffering | +41 | naturalism/induction | +33 |
| hinduism/ultimate-authority | +28 | naturalism/offspring-family | +28 |
| naturalism/worship | +27 | islam/why-alive | +22 |
| hinduism/after-death | +21 | judaism/ultimate-personal | +20 |
| naturalism/know-the-good | +20 | naturalism/order | +19 |
| naturalism/why-alive | +14 | hinduism/what-is-man | +13 |
| buddhism/offspring-family | +9 | islam/jesus | +5 |
| naturalism/ultimate-authority | +3 | islam/history | −2 |
| islam/revelation | −2 | islam/ultimate-authority | −5 |
| naturalism/what-is-man | −17 | | |

## Scope confirmation

- R6–R12 were not begun.
- No Christian answer, question, ID, slug, schema, UI or style file was changed.
- No *taḥrīf* or Twelver research was reopened.
- A fresh, focused independent review (one Opus 5.5 session) is recommended before merge. The user merges.
