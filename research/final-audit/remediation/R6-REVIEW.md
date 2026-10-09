# R6 independent review: thesis clarity and progressive disclosure

Independent review of PR #21, run on 2026-10-09. One Claude Opus 5.5 top-level session, no subagents. The production session did not take part.

**Result: 0 BLOCKER, 1 IMPORTANT, 9 MINOR. Recommendation: MERGE.** The user merges. C1–C4 were not begun.

## 1. Starting point

| Item | Value |
|---|---|
| Branch | `r6-thesis-progressive-disclosure` |
| Base | `main` @ `c6d7e54` (merge of PR #20, R5) |
| Starting PR head | `9284048dd424286d927db17b94ce4de49f4f303b`, matching the expected head |
| Production commits present | `edb8368` (ledes and openings) and `9284048` (production record, lede inventory and audit data) |
| Working tree at start | clean, and up to date with `origin` |

The branch had not advanced beyond the production head.

## 2. Method

1. **Diff against the baseline.** I extracted the full word diff of all 33 answer files against `c6d7e54`. For every changed answer I compared the pre-R6 lede with the revised one, and for the seven revised openings, the pre-R6 paragraph with the new one. The production record's before/after ledger was not used as a substitute.
2. **Full-answer reading.** I read each of the 33 answers in full, in this order: lede, view or Christian view, explains-well, response or objection and reply, pressure questions, Deep dive.
3. **Claim-by-claim support.** I split each revised lede into its substantive claims and found the passage carrying each one on the same page. I checked the citation behind that passage and the school to which it is attributed.
4. **Prior corrections.** I checked the earlier review records (R3 Reviews A and B, R4, R5) wherever a lede touches a point they corrected.
5. **Horizontal and vertical sweeps.**
   - Horizontally: all six lanes for each of the eight priority questions (`know-the-good`, `evil`, `suffering`, `death`, `after-death`, `final-end`, `self-salvation`, `guilt`).
   - Vertically: all 168 current ledes read consecutively, lane by lane. All 28 Hindu ledes were read in sequence.
6. **Fixes and validation.** I made the minimum fixes, checked character counts, ran the full validation suite and regenerated the inventory.

## 3. Documents read

- `docs/METHODOLOGY.md`: in full.
- `docs/SOURCES.md`: the core rule, Scripture quotation and ESV policy, the verification protocol and the lane sections.
- `research/final-audit/README.md` and `REMEDIATION-PLAN.md`: in full.
- `CROSS-QUESTION.md`: §§5–6 (the thesis audit and progressive disclosure), which govern R6.
- `ARGUMENT-QUALITY.md`: in full.
- Lane audits:
  - `HINDUISM.md`, `BUDDHISM.md`, `JUDAISM.md`, `ISLAM.md` and `NATURALISM.md`: in full;
  - `CHRISTIANITY.md`: the findings tables (§§7–8, 12).
- `R6-THESIS-PROGRESSIVE-DISCLOSURE.md`: in full.
- `R6-LEDE-INVENTORY.md`: consulted for retention reasons, not reread row by row.
- R1–R5 review records: searched for every page touched here.
  - R3 Review A: M-2 on `islam/know-the-good`; M-4 on `hinduism/suffering`.
  - R3 Review B: I-5 and M-9 on Buddhist `guilt` and `self-salvation`. It also records the decision to keep the vow-18 exclusion and the Contemplation Sutra rescue "in tension".
  - R4 Review: R4R-16 and R4R-17 on al-Rāzī in `islam/evil`.
  - R5 Review: the Hindu suffering and evil pressure questions.
- `src/content/schemas.ts`: the `lede` limit, `text.max(240)`.
- The source registry entry for `three-pure-land-sutras-inagaki`.

The original final-audit reports were not modified.

## 4. Scope of full reading

| Set | Read in full? |
|---|---|
| The 33 R6-changed answers (32 ledes plus the `christianity/offspring-family` opening) | **Yes, every section** |
| The 7 revised openings | Yes, each compared with its pre-R6 text |
| All 168 current ledes | Yes, read consecutively by lane and horizontally by question |
| The 135 unchanged answer bodies | **No.** They were not substantively reread. Their ledes were swept for consistency only. |

## 5. Findings by severity

### IMPORTANT (1, fixed)

| ID | Answer | Defect | Evidence | Fix |
|---|---|---|---|---|
| **R6R-I1** | `buddhism/guilt` (lede) | "Pure Land adds Amitābha's help at death even for grave offenders" presented one sūtra's narrative as Pure Land teaching without condition. The body and R3 Review B deliberately keep this in tension with the Larger Sutra's eighteenth vow, which excludes grave offenses. A related problem: "cultivation that weakens its karmic results" generalized the salt simile, which the body limits to a *trivial* bad deed and says "does not promise automatic erasure of every serious injury." | View para 3 and Deep dive ("Pure Land and the limits of a slogan"): Contemplation Sutra lowest grade, pp. 84–85; Larger Sutra vow 18, p. 16; AN 3.100. R3 Review B, "Lane assessments": the exclusion and the rescue narrative "are kept in tension". | "…and cultivation that **can** weaken its karmic results. **One Pure Land sutra** adds Amitābha's help at death even for grave offenders." The wording now matches the body's scope without importing a condition the body does not state. |

### MINOR (9: 8 fixed, 1 record correction)

| ID | Answer | Defect | Fix |
|---|---|---|---|
| R6R-M1 | `christianity/evil` | "culpable departure from God's law that corrupts good created gifts" could be parsed as "God's law that corrupts". | "At root, evil is sin, culpable departure from God's law, and it corrupts the good gifts God created." The decree clause, the cross and Christ's final defeat of evil are unchanged. |
| R6R-M2 | `islam/know-the-good` | The lede made the *fitra* itself the faculty that "senses piety and rebellion". The view keeps two texts apart: Q 30:30, the *fitra* as a disposition toward pure devotion, and Q 91:7–10, the soul inspired with awareness of its rebellion and piety. | "God creates every person with a natural disposition (fitra) toward him and a soul inspired to know its own rebellion and piety; revelation guides both. The schools differ over how far reason knows good and evil without revelation." |
| R6R-M3 | `islam/evil` | "human wrongdoing is truly the wrongdoer's own" prejudges the very question the next sentence says divides Sunni theologians: creation of acts versus acquisition. The Deep dive gives al-Rāzī's reading of "from yourself" (4:79) as reverent speech, and R4R-17 limits what his argument settles to "how the agent is then answerable". | "…yet the wrongdoer is truly answerable and blameworthy." This uses the body's own term. |
| R6R-M4 | `hinduism/ultimate-personal` | "Advaita treats that Lord as real for worship and experience" could read as Advaita affirming the theistic schools' Lord with the same status. | "Advaita treats the personal Lord as real at the level of worship and ordinary experience, but the highest Brahman as beyond all qualities." This is the view's own phrasing (I.1.2: "real at the level of ordinary experience"), and it marks the two levels. |
| R6R-M5 | `hinduism/worship` | The Gītā's principle (9.26–27) was stated as the definition of Hindu worship. The view says "Hindu worship takes many forms … The Gītā gives the principle behind them." | "**In the Gītā,** worship is loving offering to the Lord…". This matches the Gītā attribution in `fail-the-good` and `self-deception`. No image theology was added (C1). |
| R6R-M6 | `hinduism/suffering` | "which the Lord dispenses justly" was unscoped, but the lane also presents Yoga, and elsewhere Mīmāṃsā, which do not make the Lord the dispenser. The body scopes the claim to "Vedānta accounts" and "the Brahma Sūtra commentaries". **It is *not* only theistic Vedānta:** both Śaṅkara's and Rāmānuja's commentaries are cited, including Śaṅkara on III.2.38–41. | "…which **Vedānta says** the Lord dispenses justly rather than arbitrarily." |
| R6R-M7 | `buddhism/evil` | "rooted in greed, hatred and delusion and harming oneself and others" ran two "and" phrases together. | "…rooted in greed, hatred and delusion, and harmful to oneself and others; …". |
| R6R-M8 | `buddhism/self-salvation` | "for those who cannot free themselves by calculated practice" is Shinran's formulation (*Tannishō* chs. 1 and 3, which the view attributes to him), here attributed to Pure Land generally. | "Pure Land relies on Amida Buddha's vow, **the Other Power Shinran stresses** for those who cannot free themselves." |
| R6R-M9 | Production record §9 | It says the longest revised lede is 238 characters. `judaism/after-death` is **240 characters**, exactly at the schema limit. | No lede change: the lede is valid and accurate. Recorded here because any future edit to that lede must shorten it. |

**Fix totals:** 9 ledes changed. No opening paragraph, body sentence, citation or quotation was changed.

### Considered and not changed

These were not manufactured into findings.

- **`naturalism/know-the-good`.** "anti-realists, that it projects values" was considered as possibly narrowing anti-realism to Mackie. It was kept: projectivism is the standard anti-realist account (Mackie's error theory, and expressivist projectivism as well), and the realist side is stated first and not reduced to preference.
- **`hinduism/evil`.** "Beneath them lies ignorance" was considered as possibly universalizing.
  - It was kept. It names only Advaita and Rāmānuja, and ignorance as the root of bondage is common to the Vedānta, Nyāya and Yoga accounts the page gives.
  - Madhva's distinct account (graded souls) remains in the Deep dive.
  - The R3 correction is not reversed: the lede makes no claim about all schools and karma-inequality.
- **`christianity/suffering`.** "The Son entered it and suffered for sinners, **so** believers' afflictions can become discipline rather than condemnation" asserts a causal link. It was kept: WCF 20.1, cited in the Deep dive, grounds the believer's deliverance from "the evil of afflictions" in the liberty Christ purchased.
- **`judaism/after-death` (41 words).** It was kept. The Mishnah clause is the evidence the final audit said was "asserted but not shown". The paraphrase of Sanhedrin 10:1 matches Kulp ("not a biblical doctrine", verified in R3 Review B).
- **Buddhist "Amida" and "Amitābha".** Both are kept. `self-salvation` uses Amida and `guilt` uses Amitābha, and each lede matches its own body (Shinran context versus the sūtra translation).
- **Typography.** Pre-R6 ledes use curly apostrophes (’); R6 ledes use straight ones ('). This is cosmetic and both render correctly. It is left for C4.

## 6. Review of all 32 revised ledes

Verdicts: **Pass** = accurate, supported and clearer; **Fixed** = finding above.

| # | Worldview | Question | Verdict | Accuracy and fairness | Body/source support | Readability | Fix |
|---|---|---|---|---|---|---|---|
| 1 | Christianity | evil | Fixed (M1) | Sin as culpable departure from the law; corruption of created good; "without being its author" keeps WCF 3.1/5.4. "As at the cross" is a paradigm, not a claim to explain every evil (reply para 2). | LC 24; Augustine *Ench.* 11, 13; WCF 3.1, 5.4; Acts 2:23, 4:27–28; Col 2:15; Rev 21:4 (reply) | Good after the parse fix | Relative clause recast |
| 2 | Christianity | suffering | Pass | The Son suffered (view para 3: in his human nature, the divine nature impassible, WCF 8.7, 2.1; HC 37). Not punishment for particular sin (para 2: Luke 13, John 9). "Can become"; purposes "often stay hidden". The cross is not every suffering. | Heb 2, 4, 5; 1 Pet 2:21–24; WCF 5.5, 20.1; Belgic 13 | Clear | — |
| 3 | Naturalism | after-death | Pass | "On the ordinary naturalist view" is sufficient scoping. Identity theories differ, and neither establishes an afterlife; naturalism is not said to settle every metaphysics of survival. | Russell ch. 1; SEP personal identity §§1–4, 7; Deep dive "Persistence is not personality" | Plain; the jargon is removed | — |
| 4 | Naturalism | know-the-good | Pass | Feelings corrected by reflection; realism first, as tracking objective facts; anti-realism as projection. Does not imply naturalists cannot know obligation. Railton (R2/R3) untouched. | Darwin ch. IV; Hume 3.3.1.15; Railton pp. 190–194; Mackie | Clear | — |
| 5 | Naturalism | evil | Pass | A positive causal account; realism/anti-realism disputed; no demand for cosmic redemption. | Hume 3.2.2.18; Mackie p. 108; Wrangham; Railton/Mackie (view para 3) | Long but clear | — |
| 6 | Naturalism | suffering | Pass | A positive account; "no providential purpose" is a comparative difference, not a contradiction (CR last sentence). | Philo 11.6–11.11; Flatt and Partridge; Russell ch. 4 | Clear | — |
| 7 | Judaism | know-the-good | Pass | Torah and reason as complementary; revealed-only commandments kept; not mere legal obedience. | Deut 30:11–19; Yoma 67b; Saadia III.1 (gratitude, avoiding injury) | Clear | — |
| 8 | Judaism | evil | Pass | The inclination is good in its place; mastery by indulgence; God's help (R3: not mastered unaided); own wrongdoing; no inherited guilt (Ezek 18:20, Deep dive); not equated with original sin (CR). | Gen Rabbah 9:7; Sukkah 52a–b; Ezek 18:20; Isa 45:7; Torah as means (CR; Kiddushin 30b on `know-the-good`) | Clear | — |
| 9 | Judaism | death | Pass | Mortality as limit; plural voices on sin; resurrection hope is normative (Sanhedrin 10:1) without claiming one historical account. | Ps 90; Gen 3:19; Avot 4:22; Sanhedrin 10:1; Shabbat 55a–b; Gen Rabbah 9:5 | Clear | — |
| 10 | Judaism | after-death | Pass | Judgment and resurrection first; the Mishnah's weight; the relation of soul, resurrection and World to Come explicitly disputed. No synthesis is fabricated. | Dan 12:2; Sanhedrin 91b; Avot 4:22; Sanhedrin 10:1 (Kulp); Teshuvah 3:6, 8:1–2 | Long (240 chars) but justified | — (M9 recorded) |
| 11 | Judaism | final-end | Pass | Maimonides attributed as "a major but not the only voice"; no resurrection-centred alternative asserted beyond the body. The C2 dependency stands. | Avot 4:17; Teshuvah 8:1–2, 9:2; Kings 12 | Clear | — |
| 12 | Islam | know-the-good | Fixed (M2) | *Fitra* and the soul's inspiration now kept distinct as in the view. School difference over reason is kept and not flattened (Ash'ari/Maturidi/Mu'tazili paragraph intact). | Q 30:30; 91:7–10; 75:2; Bukhari 1385; SEP §§7.1–7.2; Harvey pp. 217–218 | Clear | Two Qur'anic ideas separated |
| 13 | Islam | evil | Fixed (M3) | Decree plus answerability; the creation of acts / responsibility question attributed to Sunni theologians; no Mu'tazili claim. R4 al-Rāzī precision protected. | Q 4:78–79; *Ibāna* pp. 51–52, 104; *Mafātīḥ* on 4:78–79; Hoover pp. 201–203 | Clear | "answerable" |
| 14 | Hindu | ultimate-personal | Fixed (M4) | Rāmānuja and Madhva affirm the personal Lord. Advaita's saguṇa/nirguṇa now marked as levels; Advaita's empirical reality is not equated with ultimate reality. | Taitt. II.6; Śaṅkara BS I.1.2; Śrī Bhāṣya I.1.2; Madhva I.1.17 | Clear | "at the level of" |
| 15 | Hindu | great-and-terrible | Pass | "Each is a conscious self" is followed by the self–God difference and the destiny difference (Madhva). The view keeps Advaita's "imaginary portion". Karma, ignorance and bondage present. | Aitareya Ār. II.3.2.4; Gītā 3.36–40; BS intro; Śrī Bhāṣya I.1.1 | Clear | — |
| 16 | Hindu | what-is-man | Pass | One Self (Advaita) versus many real dependent souls (Rāmānuja, Madhva) stated directly. R5's persistence distinction untouched. | Gītā 2.12, 2.22, 15.7; Śrī Bhāṣya I.1.1; Madhva II.3.40–42 | Clear | — |
| 17 | Hindu | why-alive | Pass | "Dependent enjoyment" avoids merger language; scope is Advaita and Rāmānuja, as the page's scope string says. | Manu II.224, VI.35–37; SEP Śaṅkara §§4.1, 4.3; Śrī Bhāṣya IV.4 | Clear | — |
| 18 | Hindu | worship | Fixed (M5) | Devotion as the soul's highest relation (Rāmānuja) versus preparation for knowledge (Advaita) kept. Now scoped to the Gītā; no image theology invented. | Gītā 9.26–27, 12.1–5; Govindacharya 9.26, 8.14 | Clear | "In the Gītā" |
| 19 | Hindu | know-the-good | Pass | Dharma's sources (Manu II.6; Gītā 16.23–24); good versus pleasant (Kaṭha). The Mīmāṃsā injunction claim and the liberation question remain in the body. | Manu II.6, 10–13; Kaṭha I.2.1–2; Ślokavārttika | Clear | — |
| 20 | Hindu | fail-the-good | Pass | Attributed to the Gītā. Desire turning to anger is supported by Gītā 2.62–63 as well as the commentaries. | Gītā 3.36–43, 2.62–63; Śaṅkara 3.39 | Long single sentence; acceptable | — |
| 21 | Hindu | evil | Pass | The Gītā's sources of evil, then ignorance per named school. The R3 Madhva correction is not reversed (no "all schools" karma claim). | Gītā 16, 14, 18.31–32; BS intro; Śrī Bhāṣya I.1.4 | Dense (40 words) but accurate | — |
| 22 | Hindu | self-deception | Pass | The Gītā mechanism, then Advaita's deeper confusion, explicitly attributed. | Gītā 18.31–32, 3.38–40; BS intro | Clear | — |
| 23 | Hindu | suffering | Fixed (M6) | The Lord as dispenser is Vedānta's (Śaṅkara and Rāmānuja), now scoped. It does not claim that suffering proves identifiable wrongdoing (the body's limit kept). | BS II.1.34–36 (both); III.2.38–41; Yoga II.15–16 | Clear | "Vedānta says" |
| 24 | Hindu | death | Pass | Body versus self; bondage; release, not mere survival. School differences on the self kept in view para 2 and the Deep dive. | Gītā 2.20, 2.22, 2.27; Kaṭha I.2.18–19; Bṛh. IV.4.3–5 | Clear | — |
| 25 | Hindu | self-salvation | Pass | Problem → remedy; Advaita knowledge versus theistic devotion, refuge and grace. Theistic liberation is not merger; Madhva's unequal destinies remain in the body. | Gītā 3.36–43, 4.36–39, 18.66; Śrī Bhāṣya IV.1.13–15; IEP Madhva §3 | Clear | — |
| 26 | Hindu | guilt | Pass | Karma's binding; knowledge removes the power to bind (prārabdha limit in body); the Lord removes sin and his displeasure (Rāmānuja; deliberate-sin limit in body). | Gītā 4.36–39 comm.; Śrī Bhāṣya IV.1.13–15; Gītā 18.66 | Clear | — |
| 27 | Hindu | after-death | Pass | Conditioned continuity, not unchanged biography (Deep dive). Theistic liberation as lasting dependent bliss; not all individuality disappears. | Bṛh. IV.4.3–5; Gītā 2.12; Śrī Bhāṣya IV.4; Madhva IV.4.22 | Clear | — |
| 28 | Hindu | final-end | Pass | Moksha by school; "the liberated soul's" leaves Madhva's unequal destinies to the body (view para 4, Deep dive). | Śrī Bhāṣya IV.4.1–4, 17, 22; Madhva IV.4.22, III.1.21 | Clear | — |
| 29 | Buddhist | know-the-good | Pass | Roots of action; harm and benefit to oneself *and others*; not reduced to personal advantage. | MN 9; AN 3.65; MN 61; AN 2.9 | Clear | — |
| 30 | Buddhist | evil | Fixed (M7) | Intention and action joined; the Tiantai/Dōgen theory is not universalized ("the schools differ"). | MN 9.4–7; AN 3.69; AN 6.63 | Improved parse | Punctuation |
| 31 | Buddhist | self-salvation | Fixed (M8) | Path versus Other Power; Pure Land not presented as self-help. Shinran's anti-calculation development now attributed to him. | SN 56.11, 45.8; Larger Sutra vow 18; *Tannishō* chs. 1, 3, 9 | Clear | Shinran named |
| 32 | Buddhist | guilt | Fixed (I1) | Confession is not judicial absolution, and purification is not satisfaction (CR). The Contemplation Sutra is now scoped as one sūtra, preserving the R3 tension with vow 18. | MN 61; AN 3.4, 3.100; Contemplation Sutra pp. 84–85; Larger Sutra p. 16 | Clear | Scope narrowed |

## 7. Review of the seven revised openings

| # | Answer | Change | Improves understanding? | Notes |
|---|---|---|---|---|
| 1 | `christianity/offspring-family` (para 2) | "Calvin holds… Bavinck… Westminster names…" became doctrine-first | **Yes** | Hierarchy is now Scripture (para 1) → WCF 24.2 and 25.2 → Calvin → Bavinck.<br>Accuracy:<br>• marriage's three ends correct (WCF 24.2);<br>• procreation is "not its only point";<br>• children "belong to the visible church", which is membership and nurture, not a claim of automatic salvation (WCF 25.2's visible-church wording);<br>• Ephesians 6:4 fits household instruction;<br>• singleness is kept (1 Cor 7 in para 1; Calvin II.8.41–42 on continence as a gift to few);<br>• Calvin and Bavinck correctly attributed.<br>No new theologian. |
| 2 | `naturalism/after-death` (para 1) | "The ordinary mortalist answer" became "On the ordinary naturalist view, called mortalism" | Yes | Defines the term at first use. |
| 3 | `naturalism/know-the-good` (para 1) | The orienting sentence moved to the front | Yes | "On naturalist accounts" now generalizes before Darwin and Hume; accurate, since a non-natural moral faculty is not a naturalist option. |
| 4 | `islam/know-the-good` (para 1) | Teaching stated before the reports | Yes | *Fitra* glossed; "Moral knowledge therefore begins within the person, though it needs the guidance of revelation" is a fair transition to the schools paragraph. |
| 5 | `judaism/evil` (paras 1–2) | Inclination paragraph moved first; divine help and Ezekiel brought in from the CR's own citations; Eccl/Ezek citation split | Yes | Coherent order: wrongdoing → created inclination → mastery → God's help → personal responsibility → one Creator's world. The R3 "not unaided" correction is preserved. The CR's repetition of Sukkah 52a–b is acceptable because the comparison builds on it. |
| 6 | `judaism/death` (para 1) | Positive account first; Avot 4:22 and Sanhedrin 10:1 added from the page's own citations | Yes | Plural rabbinic voices remain intact in para 2. |
| 7 | `hinduism/great-and-terrible` (view) | One paragraph split at "The schools explain the root of that disorder differently." | Yes, modestly | The shared Gītā anthropology now stands apart from the school accounts. This is a structural improvement, not only a visual one. No wording changed except the new connective. |

## 8. Previously flagged pages found satisfactory

- **`christianity/what-is-man` and `great-and-terrible`.** Openings: Scripture-first since R2. Not rewritten.
- **`christianity/death`.** Lede kept. "For believers its sting is removed" is the gospel claim, and view para 3 carries Christ's victory.
- **`christianity/self-salvation` and `guilt`.** R1's satisfaction, propitiation and union are visible in the views.
- **`hinduism/ultimate-reality` and `one-and-many`.** Retained ledes are accurate. The school contrast cannot be removed truthfully, and both state the shared claim first.
- **`islam/ultimate-authority`, `jesus`, `revelation`, `history` and `after-death`.** No R6 edit; R4 protections intact (§13).

## 9. Source-support checks

Every substantive claim in the 32 revised ledes was matched to a body passage on the same page (§6 column 6).

- **Supported as written:** 23 ledes. The production ledger's support column was accurate for them.
- **Broader than the body (narrowed):**
  - `buddhism/guilt`: Pure Land scope, and the salt simile.
  - `hinduism/suffering`: the Vedānta scope.
  - `hinduism/worship`: the Gītā scope.
  - `buddhism/self-salvation`: Shinran's formulation.
- **Framed beyond the body's distinction:**
  - `islam/know-the-good`: *fitra* versus Q 91.
  - `islam/evil`: "own" versus "answerable".
  - `hinduism/ultimate-personal`: levels.
- **Wording only:** `christianity/evil`, `buddhism/evil`.
- No lede now introduces a claim its body does not support.

## 10. School-attribution checks

- **Hindu.**
  - Every Advaita-specific claim is labelled: one Self, superimposition, nondual realization, devotion as preparation.
  - "Theistic Vedānta" consistently means Rāmānuja with Madhva.
  - The Lord as dispenser is attributed to Vedānta, not to theistic Vedānta only, because Śaṅkara's commentary is a cited source.
  - No lede reduces theistic liberation to merger, or says that individuality disappears in all schools.
- **Buddhist.**
  - Tiantai and Dōgen are not universalized.
  - Shinran's anti-calculation formulation is attributed to him.
  - The Contemplation Sutra is attributed as one sūtra.
- **Islam.** "Sunni theologians"; Mu'tazili views not claimed; Ash'ari/Maturidi difference kept in the body.
- **Judaism.** Maimonides is attributed in `final-end`; "the sages differ" in `death`; disputed relations in `after-death`.
- **Naturalism.** Realist and anti-realist naturalists are both named; mortalism is called "ordinary", not definitional.

## 11. Cross-worldview consistency

For each of the eight priority questions, all six ledes give a direct answer in their own concepts.

| Question | Asymmetry? |
|---|---|
| `know-the-good` | None. Conscience and Scripture; feelings and reflection; Torah and reason; *fitra* and revelation; dharma's sources; roots of action. |
| `evil` | None. All say what evil is and where it comes from. The Christian lede is no longer the only defensive one. |
| `suffering` | None of substance. The unchanged Jewish lede is a plural-accounts answer, but substantive. |
| `death`, `after-death` | Hindu and Jewish ledes are now the longest (38–41 words). They are justified by school and normative content, not by vagueness. |
| `final-end` | Jewish (Maimonides attributed) and Hindu (by school) are precise; Christian and Islamic are doctrinal. No vague outlier. |
| `self-salvation`, `guilt` | Problem → remedy in all six. The Buddhist guilt lede is now scoped like the others. |

R6 introduced no new asymmetry. The Buddhist guilt overreach was the one place where a lede was broader than its peers' standard; it is fixed.

## 12. Within-worldview coherence

- **Hindu (28 ledes read in sequence).**
  - Individuality: enduring individuality appears only where Rāmānuja or Madhva are named (`what-is-man`, `after-death`, `final-end`, `why-alive`). Advaita's one Self appears only where Advaita is named. No editorial-voice contradiction.
  - Karma and the dispenser: consistent across `suffering` (Vedānta), `order` ("the Lord's inner rule") and the bodies of `evil` and `after-death`.
- **Judaism.** Resurrection terms agree across `death` ("awaits the resurrection of the dead"), `after-death` ("the dead will be raised"), `history` ("beyond that lie the resurrection of the dead and the World to Come") and `final-end`.
- **Buddhist.** Liberation terms (nirvana, Other Power, Pure Land birth) are coherent across `self-salvation`, `guilt`, `after-death` and `final-end`. Amida and Amitābha each match their own pages (§5).
- **Naturalism.** Realism and anti-realism are treated identically in `know-the-good` and `evil`. Mortalism appears in `after-death` and `death`.
- **Christianity and Islam.** No conflicts.

## 13. Preservation of R1–R5

| Batch | Protected content | Status |
|---|---|---|
| R1 | Atonement; Christ suffered in his human nature, the divine nature impassible; the cross as decree and wickedness; Christ's victory | Intact. The `suffering` lede's "the Son … suffered" is backed by the body's communicatio sentence (WCF 8.7). |
| R2 | Scripture-first anthropology; natural law; Railton | Intact. No Christian anthropology page and no Railton sentence was edited. |
| R3 | Natural prose; Jewish inclination "not unaided"; Hindu karma attribution (Madhva); Buddhist guilt / Other Power | Intact. Review restored the vow-18 tension in the Buddhist guilt lede (I1). |
| R4 | *Taḥrīf*; *Risāla*; Twelver disclosure; grave; al-Rāzī | No R4 page edited. `islam/evil` lede now uses "answerable", consistent with R4R-17. |
| R5 | Repaired pressure questions; the Hindu persistence distinction | No pressure question changed. |

## 14. Remaining length and readability

- Revised ledes after review: 791 (pre-R6) → 1,124 (R6) → **1,138 words (review: +14)**, an average of 35.6 words.
- Body text: unchanged by the review (0 words).
- Longest ledes: `judaism/after-death` 240 characters (41 words); `christianity/suffering`, `hinduism/great-and-terrible` and `hinduism/evil` 238.
- None has become a miniature paragraph that states diagnosis, remedy, school divisions and final state at once. The densest is `hinduism/evil` (Gītā sources plus two schools' root ignorance).
- A shorter `judaism/after-death` would have to drop either the Mishnah's normative weight or the disputed relation. Neither can go without loss, so no compression was imposed.

## 15. Citation verification

- **Five new production citation instances:**
  - `judaism/death`: Avot 4:22 (die and give account) ✔; Mishnah Sanhedrin 10:1 (Kulp, "not a biblical doctrine") ✔.
  - `christianity/offspring-family`: WCF 25.2 (visible church includes children) ✔; Ephesians 6:4 ✔.
  - `judaism/evil`: Ecclesiastes 7:29 and Ezekiel 18:20 split, each now after its own claim ✔.
- **Moved citation.** Sukkah 52a–b in `judaism/evil` now also supports mastery by habit and the guest image, which is the same passage R3 Review A checked ✔.
- **Review changes.** No citation was added or removed. No new source, no registry change (`src/content/sources` and `thinkers` are unchanged against `c6d7e54`).
- **Quotations.** No direct quotation was added or changed by production or review. The changed bodies contain no new quotation marks; the Qur'anic wording in `islam/know-the-good` is paraphrase, not Haleem quotation.

## 16. Validation

Run after the review fixes:

| Check | Result |
|---|---|
| `npm run validate` | pass: 6 worldviews, 6 categories, 28 questions, 52 thinkers, 211 sources, **168 answers** |
| `npm run check` | 0 errors, 0 warnings (1 pre-existing hint) |
| `npm run build` | **92 pages** built |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 129,991 words, 2,741 citations; ESV candidates 106, unledgered 4, orphan ledger rows 1 (unchanged from production) |
| `node scripts/check-built-links.mjs` | 92 pages (28 question, 52 thinker, 6 worldview), 168 answers rendered; **9,813 links, 4,000 cross-page**, 8,082 fragment checks; **0 broken, 0 duplicate IDs**, 0 outside base |

- **Link checker.** The committed checker fixes the base path internally, so the MSYS rewrite found in the R4 review cannot occur. The 4,000 cross-page count confirms this. It checks same-page fragments, cross-page links and their fragments, duplicate IDs, and that every answer renders on a question page.
- **Counts.** All counts equal production's, as expected, because the review changed ledes only.
- **ESV ledger.** `docs/ESV-QUOTATION-LEDGER.md` is unchanged by production and review.
- **Inventory.** `research/final-audit/data/` was regenerated (lede text and thesis word counts for the 9 ledes) and committed.

## 17. Remaining issues deferred to C1–C4

None of these is an R6 defect.

- **C1 (Hindu and Buddhist).**
  - `worship`: image theology and Śaiva devotion.
  - `final-end` and `ultimate-personal`: the Bhāgavata/Gauḍīya strand.
  - `love-beauty-creativity`: rasa.
  - Huayan in `one-and-many`.
- **C2 (Judaism).** `after-death` and `final-end`: Saadia VII, Ramban *Sha'ar ha-Gemul* and the Thirteen Principles. These are needed before a resurrection-centred final end can stand beside Maimonides in the thesis.
- **C3 (naturalism).** Consciousness in `what-is-man`.
- **C4 (editorial).**
  - Curly versus straight apostrophes in ledes.
  - `judaism/after-death` sits at exactly 240 characters.
  - "the human-nature anchor" label in `christianity/offspring-family`.
  - "honours" spellings.
  - Duplicate pressure questions.

## 18. Recommendation

**MERGE.** Every revised lede is accurate, supported by its body and clearer than its predecessor. The one IMPORTANT overreach (Buddhist guilt) and nine MINOR issues are fixed or recorded. No BLOCKER or IMPORTANT finding remains.

PR #21 has not been merged, and C1–C4 were not begun.
