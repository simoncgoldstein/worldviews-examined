# R3: Natural explanatory prose in Morality & Evil and Salvation & Destiny (production record)

2026-10-08. Branch `r3-natural-explanatory-prose`, from `main` @ `de9492b` (`de9492bd6a1066169cdcb00942fd629f4cde9d48`, the merge of PR #17, R2). One Claude Opus 5.5 top-level session. No subagents were used, and no reviewer was invoked during production.

**This record is a production self-review only. It is not the independent review these domains still need.** Two fresh independent reviews are required before merge (see the end of this record).

The audit files in this directory are a historical record and were not edited.

## Process fact confirmed

- **Morality & Evil.** The production report (`research/domains/morality-evil/PRODUCTION-REPORT.md`) states that "No … subagent or external reviewer was used."
- **Salvation & Destiny.** The production report states: "'Reviewed' records this run's steelman/Reformed self-review; **no independent or external review was invoked**."
- **No `REVIEW.md`** exists in either domain directory.

Neither domain has ever been independently reviewed. R3 does not change that fact.

## Scope

10 questions × 6 lanes = **60 answers**:

- **Morality & Evil:** `know-the-good`, `fail-the-good`, `evil`, `suffering`, `death`, `self-deception`.
- **Salvation & Destiny:** `self-salvation`, `guilt`, `after-death`, `final-end`.

No answer outside these two domains was edited. No lede, scope string, thinker list, review status, question, ID, slug, schema, UI or style file was changed. Pressure questions were not changed except for two spelling corrections ("offence" → "offense").

**Coverage:**

- **All 60 answers were read in full** before editing, question by question across the six lanes.
- **All 60 were read again after editing:**
  - lane by lane, in domain order, with citations stripped (the brief's "read without citations" test);
  - then horizontally, comparing each question's theses and Christian responses across lanes.
- **59 answers were changed.** `christianity/guilt` was left unchanged on purpose. R1 rewrote it as the canonical atonement page, its voice already meets the standard, and its R1-review corrections must not be disturbed.

## Commits

| SHA | Message |
|---|---|
| `d4b92b9` | Naturalize Morality and Evil Christian answers |
| `ffc57a3` | Naturalize Morality and Evil non-Christian answers |
| `f818474` | Naturalize Salvation and Destiny Christian answers |
| `79a6797` | Naturalize Salvation and Destiny non-Christian answers |
| (this commit) | R3 validation and production report |

The planned "cross-worldview review" commit was folded into the four production commits. Each lane was re-read and corrected before its domain was committed. The horizontal pass after Pass B produced one citation-order fix, which is in the report commit.

## Findings addressed

| Finding | Status | Where |
|---|---|---|
| **XQ-01** (Morality & Evil and Salvation & Destiny voice, all six lanes) | Addressed | All 59 changed answers. See the systemic patterns below |
| **CHR-08** (Christian defensive, meta voice) | Addressed | Ten Christian pages (`guilt` already met the standard) |
| **CHR-23** (Scripture reported with distancing verbs) | Addressed | "Paul describes / Romans connects / Jeremiah describes / Genesis depicts" replaced with direct doctrine in `know-the-good`, `fail-the-good`, `evil`, `suffering`, `death`, `self-deception`, `self-salvation`, `after-death`, `final-end`. Kept where a specific passage is being expounded ("Paul says that Gentiles…" in Romans 2; Peter in Acts 2; 1 Corinthians 15) |
| **CHR-22** (confession shorthand), within scope | Addressed | Every "Westminster says/summarizes/includes/applies/describes/calls/distinguishes" and "Heidelberg describes/makes" in the 60 answers was rewritten. Each became either the doctrine stated directly with a citation, or "the Westminster Confession / the Heidelberg Catechism" where the document itself is the subject |
| **NAT-03** (Christian responses to naturalism under-press) | Addressed | `naturalism/know-the-good` now carries the moral-grounding argument. `fail-the-good` and `suffering` responses now make substantive arguments |
| **XQ-07** (moral grounding lives in the flagship, not `know-the-good`) | Addressed for `know-the-good` | The duplicate in `naturalism/great-and-terrible` was not touched (R12) |
| **JUD-05** (`judaism/evil` Christian response makes no argument) | Addressed | It now states the comparative claim (a created inclination governed by Torah, versus a fall from created uprightness), gives the rabbinic reply, and classifies the disagreement as theological |
| CHR-24 (flagship labelled "the human-nature anchor" in `christianity/evil`) | Fixed incidentally | The sentence was rewritten for voice, so the label became "the flagship". The same label in `buddhism/evil` was corrected likewise |
| CHR-25 (`after-death` has no link to the resurrection evidence) | Fixed incidentally | The reply now names the evidential burden and links to `jesus` |
| CHR-26 (`final-end` hell reply thin and self-deprecating) | Addressed as prose | The three self-deprecating sentences were replaced by an actual reply (WCF 33.2, 6.6) that keeps its limit |
| ISL-05 (`after-death` wording implies the grave doctrine has no basis) | Partly | The sentence "Further accounts of the grave must not be invented from the word alone" was removed. Adding the sourced doctrine of the grave remains R4 |

Not addressed (later batches): theses (R6); pressure-question substance (R5); site-wide process notes outside these domains (R10); JUD-01 and JUD-04 (R8); ISL-04 and the substance of ISL-05 (R4); HIN-05 (R5); CHR-21 Owen metadata (R12); the moral-grounding duplicate in `naturalism/great-and-terrible` (R12).

## Systemic prose problems corrected

1. **Self-referential sentences** about "this page", "this anchor", "this answer", "the present comparison" and "this focused account". About 45 instances were removed or rewritten.
   - Examples: "Those distinctions prevent this anchor from becoming either a catalogue of tragedies or a promise…" (`christianity/evil`); "This page keeps those wider arguments connected…" (`christianity/suffering`); "Keeping those questions distinct allows naturalism's causal strengths…" (`naturalism/evil`); "No complete Mahāyāna metaphysics of Buddhahood is claimed by this focused comparison" (`buddhism/final-end`).
2. **Instructions to the writer** ("The Christian should…", "must engage…", "A comparison must…", "should not be…"). About 40 instances. Each was replaced by the argument it was meant to introduce, or cut where that argument was already made.
3. **Defensive qualifications.** Repeated "does not mean / should not be taken as / must not be confused with" constructions were consolidated. Qualifications that protect fairness or truth were kept, usually rewritten as positive statements.
4. **Disclaimer-only Christian responses.** About 25 responses were rewritten so that each:
   - states the opponent's position;
   - makes a specific Christian argument;
   - locates the disagreement;
   - classifies it (theological disagreement, comparative adequacy, or a question about grounding or warrant);
   - keeps the necessary limit.
5. **Distancing and confession shorthand** in the Christian lane (CHR-22, CHR-23).
6. **British spellings** in the 60 answers: offence, defence, favour, behaviour, programme, licence, centre and centred were Americanized. No quotation or title was altered.

## Before/after examples

**Writer-centered language turned into substantive exposition**

- `judaism/guilt`.
  - Before: "The Christian should therefore address the strongest Jewish position: God mercifully welcomes genuine return… Asking why repentance is not sufficient is meaningful only after acknowledging that position…"
  - After: "The strongest Jewish position, then, is that God mercifully welcomes genuine return within a commanded covenantal life. The Christian question, why repentance is not sufficient, is put to that position, not to a scheme of self-earned innocence: it asks whether a just God's welcome needs the ground Christianity finds in Christ."
- `islam/self-salvation`.
  - Before: "…nor may sovereignty be treated as a sufficient answer only when Christianity invokes it. The comparison must explain and defend the different remedies."
  - After: "Both appeal to divine sovereignty, so sovereignty cannot settle the question for one side and not the other. What separates them is whether forgiveness requires that justice be satisfied, which Christianity affirms and Islam denies."
- `hinduism/self-salvation`.
  - Before: "The Christian cannot refute this diagnosis simply by pointing to someone who knows a duty and breaks it. He must explain why rebellion and disordered love should have explanatory priority over the mistaken identity."
  - After: "…pointing to someone who knows a duty and breaks it does not refute Advaita's diagnosis. The Christian argument is different: rebellion and disordered love have explanatory priority over mistaken identity, because the suppression of known truth is itself an act of the will."
- `islam/evil`.
  - Before: "The Christian reply must accept the corresponding limit in its own providence doctrine if it invokes unknown reasons…"
  - After: "Christian providence doctrine accepts the same limit, since the Reformed confessions also decline to explain particular harms. Neither tradition can fault the other merely for appealing to a wisdom it cannot trace."
- `naturalism/suffering`.
  - Before: "He should not criticize naturalism merely for declining to supply the purpose it does not claim… A Christian response must defend its wider account, not manufacture a contradiction…"
  - After: two pressed points. First, both sides treat suffering as something that ought not to be. Second, naturalism offers relief but no redress for what is irreparable. Both are classed as comparative adequacy: "Neither shows that the naturalist contradicts himself in calling suffering bad."

**Unnecessary defensive qualifications removed or made positive**

- `christianity/know-the-good`: "It does not require saying that unbelievers never identify a true obligation, nor that every conscience judges every case reliably" became "Unbelievers really do identify true obligations, yet no conscience judges every case reliably."
- `christianity/evil`: "Calling evil privative does not make its victims' injuries imaginary or its perpetrators harmless" became "Privation is not unreality: the victims' injuries are real and the perpetrators are culpable."
- `islam/know-the-good`: "It does not treat human beings as lacking every moral orientation… Nor does it identify the discomfort of conscience with an infallible verdict" became "Human beings are not blank until they learn a command, yet the discomfort of conscience is not an infallible verdict."
- `buddhism/know-the-good`: "Shame and moral dread are also described as guardians of the world, not as faculties Buddhism simply rejects" became "Shame and moral dread are honored as the guardians of the world."

**Necessary fairness qualifications preserved** (often shortened, never dropped)

- Mackie's error theory is "one naturalist option among others, not the definition of naturalism" (`naturalism/know-the-good`). Naturalists "draw real moral distinctions" (`naturalism/evil`).
- Judaism is "not works-righteousness" (`judaism/self-salvation`). The rabbinic inclination account "contains no inherited guilt" (`judaism/evil`). Maimonides' incorporeal reward is "one interpretation, not the definition of every Jewish resurrection hope" (`judaism/after-death`).
- "Islam is therefore not a system of merit accounting; its central claim is about mercy" (`islam/self-salvation`). Victims' rights are kept in every Islamic Salvation & Destiny page.
- "Both claims belong to Advaita, not to every Hindu school" (`hinduism/evil`). "Not every Hindu position denies a real sufferer" (`hinduism/suffering`). Madhva's teaching on eternal misery is "a specifically Dvaita distinction, not a claim about all Hindus".
- Tiantai's inherent evil is "a Tiantai teaching, not Buddhism's generally". Yogācāra afflicted mentation belongs "to that school rather than to every Buddhist tradition". "Buddhism's goal is not self-extinction" (`buddhism/final-end`).
- Classification sentences were kept wherever a category could be misread. Examples: "That is an argument about which account better explains moral authority, not a proof that naturalist realism is incoherent"; "Plurality is not incoherence, and the disagreement is theological".

## Christian explanatory voice

- **Doctrine-first openings.**
  - `evil` now opens "At its root, evil is sin: any failure to conform to God's law…", with the fall and creation's futility following from it.
  - `death` opens with death's entry through Adam's sin and its status as an enemy.
  - `suffering`, `self-deception`, `fail-the-good` and `final-end` likewise state the doctrine before citing it.
- **Confessions named only as subjects where they act as subjects.** Otherwise the doctrine is stated and the confession is cited.
- **Replies that answer:**
  - `fail-the-good`: Edwards' natural/moral inability made concrete, and Kant's premise named as the point of dispute.
  - `self-deception`: the doctrine applies to Christians first (WCF 5.5), so it insulates no one.
  - `self-salvation`: the distribution of grace answered directly from WCF 3.7 (no one is condemned for lacking grace; mercy is by nature not owed), with the limit kept.
  - `after-death`: the evidential burden is named and linked to `jesus`.
  - `final-end`: the hell reply now argues from the nature of the final good, from WCF 33.2 and 6.6, and from responsibility, and says where the disagreement finally lies.
- **Theologians** are named only for distinctive moves: Augustine (privation), Calvin (union, the twofold benefit), Turretin (natural law), Edwards (inability), Bavinck (calamities, the intermediate state).

## Preservation of R1 and R2

**R1 (atonement, cross, suffering, victory over death):**

- `christianity/guilt` is unchanged.
- In `evil`, the reply (Acts 2:23; 4:27–28; Calvin I.18.3–4; Colossians 2:15; Revelation 21:4; Philo left standing) is unchanged.
- In `suffering`, the Christological paragraph, including the impassibility wording ("yet the divine nature does not suffer"), is unchanged; so are the reply on Job, lament and Psalm 22 and its hope section.
- In `death`, the victory paragraph (Hebrews 2:14–15; 2 Timothy 1:10; 1 Corinthians 15) and the reply are unchanged.
- In `self-salvation`, the union and twofold-benefit paragraph and the WCF locators are unchanged.
- The ten R1 comparative sentences in the non-Christian `guilt` and `self-salvation` pages are unchanged. Only surrounding sentences were edited.

**R2 (natural law in `know-the-good`):**

- The R2-review corrections were preserved verbatim:
  - Turretin XI.1.11, first principles *with* immediate conclusions (I-4);
  - Railton's concession reported with his reply (I-5);
  - the relation of the causal, epistemic and normative questions (I-6);
  - the XI.1.9, 15 and XI.1.18 locators (M-13, M-14).
- Three sentences changed:
  - "Paul describes people…" became "People can know God's righteous decree and still suppress the truth";
  - the unbelievers sentence was made positive;
  - "This does not mean that morality without God is mere preference" was folded into the fairness clause.
- The page is 15 words shorter.

## Naturalist moral-grounding result

`naturalism/know-the-good`'s Christian response previously disclaimed and did not argue. It now:

1. grants that conscience has a natural history;
2. separates the two naturalist positions: with Mackie the dispute is over realism itself, with Railton it is narrower;
3. states Railton's sensible knave (p. 169) **together with Railton's own answer** (pp. 201–203): the obligation still holds, the knave's desires cannot exempt him, and the obligation has general grounds as logic's demands do. This satisfies the R2-review lesson I-5;
4. presses the authority question and gives the Christian answer (obligation is personal at its source), linking to `christianity/know-the-good` rather than repeating the natural-law exposition;
5. classifies the claim: "an argument about which account better explains moral authority, not a proof that naturalist realism is incoherent or that naturalists cannot condemn cruelty."

The Deep dive's Railton paragraph was shortened to avoid repeating it. `naturalism/great-and-terrible` was not touched; the duplication there is R12's. The citations relocated are `railton-moral-realism` p. 169 (already used in the naturalist flagship) and pp. 201–203 (already used in `christianity/know-the-good`).

## Other lanes

- **Naturalism:**
  - realism and anti-realism are kept distinct in every page;
  - the "mortalism need not contradict itself" classification is kept;
  - the Christian responses now press irreparable loss, redress and standing to forgive (`guilt`, `suffering`, `death`, `after-death`, `final-end`) as adequacy questions.
- **Judaism:**
  - teshuvah, covenant, Torah as divine help, mercy, Yom Kippur's interpersonal limit, victims and Leviticus 5 are kept;
  - responses now locate the disagreement: where change begins (`fail-the-good`), what corrects the knower (`know-the-good`), the depth and origin of disorder (`evil`), the synthesis versus plural voices (`suffering`), and who brings fulfillment (`final-end`, linking to `judaism/jesus`).
- **Islam:**
  - tawba, mercy (Bukhari 6463), God turning first (9:118), victims' rights (Muslim 2581), intercession by permission and the Ash'ari/Maturidi/Mu'tazili distinctions are kept;
  - responses are now school-specific (`know-the-good`), argue the depth of the human problem (`fail-the-good`, `self-deception`) and the ground of mercy (`self-salvation`, with the Muslim reply), with parity on unknown purposes (`evil`) and on servant versus child (`final-end`).
- **Hindu traditions:**
  - Advaita, Viśiṣṭādvaita and Dvaita are kept distinct throughout;
  - the Lord as dispenser of karma's fruits is now stated in `suffering` (existing BS II.1.34–36 citation) and engaged in the response;
  - beginningless karma's answer to arbitrariness is stated in `evil` (BS II.1.34–36, checked: Thibaut SBE 34, "the transmigratory world is without beginning… like seed and sprout");
  - responses argue per school, including WCF 19.5 against Advaita's transcendence of dharma (`know-the-good`).
- **Buddhist traditions:**
  - Nikāya, Theravāda, Madhyamaka, Yogācāra, Tiantai, Mahāyāna and Pure Land distinctions are kept;
  - Other Power is not reduced to self-effort;
  - responses now argue what a wrong finally is (`know-the-good`), accountability without an enduring self (`evil`, `after-death`), cessation versus a restored creation (`suffering`, `death`), and whom the Pure Land vow forgives (`self-salvation`).

## Source and citation changes

**No source was added to the registry, and no citation was removed.** New citation uses (distinct source and locator per answer):

| Answer | Citation | Basis |
|---|---|---|
| christianity/self-salvation | `wcf` 3.7 (quoted: "for their sin, to the praise of his glorious justice") | Checked against the cached OPC text; WCF 3.7 is already cited in the flagship |
| christianity/final-end | `wcf` 6.6 (quoted: "with all miseries spiritual, temporal, and eternal") | Checked against the OPC text |
| hinduism/know-the-good | `wcf` 19.5 (quoted: "forever"; "the authority of God the Creator, who gave it") | Checked against the OPC text |
| islam/know-the-good | `turretin-institutio-1847` XI.1.4, 7 (Latin; paraphrased) | Relocated from `christianity/know-the-good` (R2-reviewed passages) |
| islam/final-end | `bible-esv` 1 John 3:1–3 (locator only; no quotation) | Used in `christianity/final-end` |
| naturalism/know-the-good | `railton-moral-realism` p. 169; pp. 201–203 | Relocated (see above) |
| hinduism/evil | `bible-esv` Romans 1:18–21 (locator only); `thibaut-shankara-brahmasutra` II.1.34–36 at a new sentence | Existing; II.1.35–36 checked in the cached Thibaut SBE 34 text |
| buddhism/evil | `buddhaghosa-path-of-purification` XIX.19–20 at a new sentence in the Christian response | Existing in the same page's Deep dive |

Also verified for wording that was newly quoted or newly paraphrased:

- WCF 10.2 ("altogether passive", now quoted in `judaism/fail-the-good`);
- WCF 5.5 (paraphrased in `christianity/self-deception`);
- Larger Catechism Q. 1 (paraphrased in `christianity/final-end`).

One citation-order fix was made in `judaism/fail-the-good`. The audit script attributes a quotation to the first `<Cite>` after it, so the WCF 10.2 quotation now carries its own citation and is no longer read as an ESV fragment.

## ESV ledger

**No change.** No ESV quotation was added, altered or removed:

- new Scripture uses are locator-only paraphrases;
- one draft phrase ("just and the justifier" in `islam/self-salvation`) was rewritten as a paraphrase to avoid adding ESV wording.

The regenerated inventory reports 4 unledgered candidates and 1 orphan row. These are the same pre-existing items recorded in R1 and R2: false positives plus the TC-01 Ephesians 2:8 locator (R12). The per-answer denominators in the ledger's proportions table were not recomputed. Corpus words rose by 993 (0.8%), so the corpus share moves only negligibly; the brief limits ledger updates to quotation changes.

## Word counts

Method: strip frontmatter, `Cite` tags and `QuestionLink` tags (keeping their text), then count whitespace-delimited words. This is the R1/R2 method.

| Domain | Before | After | Δ |
|---|---:|---:|---:|
| Morality & Evil (36) | 22,150 | 22,648 | +498 (+2.2%) |
| Salvation & Destiny (24) | 19,078 | 19,573 | +495 (+2.6%) |
| **R3 total (60)** | **41,228** | **42,221** | **+993 (+2.4%)** |

| Worldview (10 answers each) | Before | After | Δ |
|---|---:|---:|---:|
| Christianity | 9,190 | 9,308 | +118 |
| Naturalism | 6,459 | 6,963 | +504 |
| Judaism | 6,398 | 6,490 | +92 |
| Islam | 6,513 | 6,658 | +145 |
| Hindu traditions | 6,324 | 6,421 | +97 |
| Buddhist traditions | 6,344 | 6,381 | +37 |

The whole corpus (inventory script) went from 124,416 to 125,409 words, citations from 2,627 to 2,640, and cross-links from 400 to 426.

**Unusually large changes, explained:**

- `naturalism/know-the-good` (+114): the relocated moral-grounding argument (the brief's §14).
- `christianity/final-end` (+112): the hell reply now argues instead of conceding (CHR-26).
- `naturalism/suffering` (+82): two pressed points replace a disclaimer (NAT-03).
- `naturalism/self-salvation` (+73): entrenched wrongdoing and irreparable loss argued.
- `islam/death` (+62): the created-test versus intruder argument.
- `hinduism/evil` (−80): a view paragraph of meta commentary was replaced by karma's own answer, and two meta sentences were cut.

Naturalism grew most because its Christian responses were the most disclaimer-bound (NAT-03).

## Per-answer coverage ledger

Every row below was read in full before and after editing. Key:

- **M** self-referential or meta sentence;
- **P** research-process note;
- **W** instruction to the writer;
- **D** defensive overqualification;
- **A** distancing attribution or confession shorthand;
- **S** Christian response or reply strengthened from existing material;
- **US** American spelling.

"Safeguards" lists what was checked to survive. In every row, citations were checked to still support the revised sentences.

| Answer | Changed | Problems | Safeguards checked | Citation change | Words |
|---|---|---|---|---|---|
| christianity/know-the-good | yes | A, D | R2 Turretin XI.1.11; Railton reply; causal/epistemic/normative relation | — | 1,333→1,318 |
| christianity/fail-the-good | yes | A, D, S | WCF 9.3/16.7 scope; Romans 7 reading limited to believers | — | 407→456 |
| christianity/evil | yes | A, M, D | R1 cross reply; Philo left standing; mystery limited; CHR-24 label | — | 1,213→1,163 |
| christianity/suffering | yes | A, M, D | R1 Christology (impassibility wording); Siloam/John 9 no-blame | — | 874→836 |
| christianity/death | yes | A, M, D | R1 victory; "defeated but not yet destroyed"; HC 42 | — | 758→732 |
| christianity/self-deception | yes | A, W, S | No inference of opponents' motives; WCF 5.5 | — | 393→438 |
| christianity/self-salvation | yes | A, D, S | R1 union and twofold benefit; justification/sanctification distinct; Dort III/IV.16 | +WCF 3.7 | 1,118→1,130 |
| christianity/guilt | **no** | — | R1 canonical page and R1-review corrections | — | 1,781 |
| christianity/after-death | yes | A, S | No soul-sleep or purgatory; intermediate state not final | (link → jesus) | 671→700 |
| christianity/final-end | yes | A, D, S | Creator–creature distinction; everlasting punishment affirmed, not softened | +WCF 6.6 | 642→754 |
| naturalism/know-the-good | yes | W, M, D, S, US | Realism vs error theory; evolution neither proves nor debunks | +Railton p. 169, pp. 201–203 | 578→692 |
| naturalism/fail-the-good | yes | M, D, S | Railton realism; "not a creed" | — | 419→454 |
| naturalism/evil | yes | M, W, D, S, US | Philo's arguments attributed to Philo; evil-skeptics represented | (link → christianity/evil) | 945→993 |
| naturalism/suffering | yes | W, D, S, US | Causes vs desert; aging theory scope | (Russell reused) | 548→630 |
| naturalism/death | yes | D, S, US | Epicurean vs deprivation; Williams; Nagel/Feldman differ | — | 575→622 |
| naturalism/self-deception | yes | D, M, S | Deflationary vs intentionalist; adaptation hypothesis not established | — | 387→413 |
| naturalism/self-salvation | yes | D, S | AHA "not a creed"; anti-realist alternative; no canon is not a contradiction | — | 1,033→1,106 |
| naturalism/guilt | yes | M, D, S | Forgiveness vs excuse/pardon/reconciliation; self-forgiveness debated | — | 635→681 |
| naturalism/after-death | yes | D, M, S | Identity theories plural; no speculative survival promised | (link → jesus) | 673→703 |
| naturalism/final-end | yes | M, D, S | Finite goods real; "not a creed" | — | 666→669 |
| judaism/know-the-good | yes | W, M, D, S | Saadia's rational duties; Maimonides not "arbitrary convention" | — | 565→569 |
| judaism/fail-the-good | yes | W, D, S | Divine help (Kiddushin 30b); not works-righteousness | WCF 10.2 cite order | 415→444 |
| judaism/evil | yes | M, D, S (JUD-05), US | Isaiah's woe not moral evil; no inherited guilt; Maimonides' taxonomy not victim-blame | — | 914→943 |
| judaism/suffering | yes | W, M, D, S | Plural voices kept; post-Holocaust scope clause kept (one neutral clause) | — | 538→532 |
| judaism/death | yes | W, M, D, S | Shabbat 55 no personal-sin proof; Genesis Rabbah's two strands | — | 556→558 |
| judaism/self-deception | yes | S | Luzzatto; Maimonides on self-examination | — | 379→416 |
| judaism/self-salvation | yes | W, D | R1 sentence kept; teshuvah test; victims; Nachmanides heart | (link → christianity/self-salvation) | 1,025→1,024 |
| judaism/guilt | yes | W, D | R1 sentence kept; Leviticus 5; Yoma 8:9 | — | 670→682 |
| judaism/after-death | yes | D, S | Maimonides one interpretation; Sanhedrin 91b | (link → jesus) | 669→668 |
| judaism/final-end | yes | M, W, D, S | Messianic era vs World to Come; Nachmanides strand | (link → judaism/jesus) | 667→654 |
| islam/know-the-good | yes | W, M, D, S | Ash'ari/Maturidi/Mu'tazili; Harvey on al-Maturidi | +Turretin XI.1.4, 7 | 558→580 |
| islam/fail-the-good | yes | M, S | Mercy in 12:53; Hoover's tension in Ibn Taymiyya | — | 422→463 |
| islam/evil | yes | W, M, D, S, US | Acquisition not settled by naming it; wisdom vs obligation | (link → christianity/evil) | 971→961 |
| islam/suffering | yes | W, M, D, S, US | Testing/expiation/consequence distinct; Bukhari vs Muslim scope | — | 570→573 |
| islam/death | yes | D, M, S, US | Appointed term vs knowledge of time; barzakh | — | 596→658 |
| islam/self-deception | yes | W, M, S | No reading of motives; mercy named in remedy | — | 371→402 |
| islam/self-salvation | yes | W, M, D, S | Bukhari 6463; 9:118; victims; Ash'ari decree | — | 1,005→999 |
| islam/guilt | yes | D, M | R1 sentence kept; 4:48 not a bar to repentance | — | 693→681 |
| islam/after-death | yes | W, D, S (ISL-05 wording) | Intercession by permission; victims | — | 652→650 |
| islam/final-end | yes | D, M, S | Vision of God; servant/Lord distinction; no universalism | +1 John 3:1–3 | 675→691 |
| hinduism/know-the-good | yes | W, M, D, S, US | Mīmāṃsā about moral knowledge only; Manu's self-satisfaction scope | +WCF 19.5 | 552→594 |
| hinduism/fail-the-good | yes | M, S | Śaṅkara vs Rāmānuja agency | (link → hinduism/self-salvation) | 413→450 |
| hinduism/evil | yes | M, D, S, US | Advaita not all Hinduism; Nyāya distinct; Madhva contested passage | +BS II.1.34–36 (new sentence), +Romans 1 | 966→886 |
| hinduism/suffering | yes | W, M, D, S, US | Lord as dispenser; no individual karmic diagnosis | — | 549→550 |
| hinduism/death | yes | M, D, S | Śaṅkara vs Rāmānuja on 2.12; grief not trivial | — | 585→581 |
| hinduism/self-deception | yes | M, D, S, US | Superimposition not every lie | — | 374→354 |
| hinduism/self-salvation | yes | W, M, P, D, S | R1-era sentences kept; prapatti not all Rāmānuja's; Madhva distinct | — | 996→1,025 |
| hinduism/guilt | yes | D, M | R1 sentence kept; fire image qualification; deliberate sin excluded | — | 647→650 |
| hinduism/after-death | yes | D, M, S | Hindu vs Buddhist rebirth; non-return grounds | — | 622→674 |
| hinduism/final-end | yes | D, W, S | Advaita not annihilation; Madhva Dvaita-specific | (link → christianity/final-end) | 620→657 |
| buddhism/know-the-good | yes | M, D, S, US | Kālāma in context; not "mere preference" | (link → christianity/guilt) | 528→525 |
| buddhism/fail-the-good | yes | W, D, US | AN 3.4 confession; latent tendencies | — | 429→423 |
| buddhism/evil | yes | M, D, S | Conventional agency; Tiantai school-specific; Śāntideva not legal theory | Vism XIX.19–20 also in response | 964→946 |
| buddhism/suffering | yes | W, M, D, S | Two arrows not blame; Śāntideva an added emphasis | — | 551→536 |
| buddhism/death | yes | M, D, S, US | Theravāda analysis not medical; Mahāyāna voice | — | 571→590 |
| buddhism/self-deception | yes | W, M, US | Yogācāra school-specific | — | 383→367 |
| buddhism/self-salvation | yes | W, M, D, S | Pure Land Other Power; salt simile scope; vow-18 exclusion | (link → christianity/guilt) | 997→1,021 |
| buddhism/guilt | yes | D, S | R1 sentence kept; salt simile scope | — | 645→679 |
| buddhism/after-death | yes | D, S | MN 38; SN 12.17; MN 72 and SN 22.85 | — | 632→654 |
| buddhism/final-end | yes | M, D, S | Not self-extinction; not annihilation; bodhisattva not endless postponement | — | 644→640 |

(P in `hinduism/self-salvation`: "The anchor uses the checked promise and commentary without silently adding…" was a process note. It was removed; the scholarly point about prapatti stays, with its IEP citation.)

## Mechanical sweep (§27A)

The 60 answers were searched for:

- "this page / anchor / answer / question";
- "the present answer/page/comparison/claim/scope";
- "comparison must/should";
- "the Christian should/must";
- "he must";
- "not researched";
- "lawfully";
- "not consulted";
- "Westminster says/explains/…";
- "Heidelberg describes/makes";
- "Dort says/affirms";
- "Belgic N";
- "should not be";
- "must not";
- standalone "here";
- British spellings.

Every match was inspected in context. Remaining matches, with reasons:

- **`judaism/suffering`:** "Post-Holocaust Jewish theology, which presses these questions further, lies beyond these classical sources." This is a deliberate reader-facing scope clause for a substantive omission. The brief permits one neutral clause, and the omission is assigned to R8 (JUD-04).
- **"here" in its ordinary sense**, not page-referential:
  - "Evil here is a moral direction…";
  - "Even here, an eternal migrating soul…";
  - "The good pursued here [in this world]";
  - and three similar uses.
- **"Paul says / Peter says / Paul describes / Paul makes"** where a specific passage is being expounded: Romans 2, Acts 2, 1 Corinthians 15 and Romans 3 in `guilt`.
- **"Shinran's reported teaching" and "as presented by Hoover"** are kept. These are provenance qualifications that affect the factual claim (the Tannishō is a report, and Ibn Taymiyya is read through Hoover), not narration of the research process.

No "not researched", "lawfully", "not consulted" or automated-translation narration remains in the 60 answers.

## Deferred items

**Pressure questions (R5):**

- `hinduism/suffering` PQ1 ("What grounds the karmic order…"). The view now states the Lord-as-dispenser answer, so the PQ should be rephrased to engage it (HIN-05). `hinduism/evil` PQ1 likewise.
- `hinduism/after-death`: the Christian response's question about memory and justice now overlaps PQ1. One of the two could be varied.
- `islam/death` PQ2 is now partly echoed in the Christian response. It is acceptable as written.

**Theses (R6):** no lede was changed. The R6 list in `CROSS-QUESTION.md` §5 still applies to:

- naturalism `know-the-good` and `after-death`;
- judaism `know-the-good`, `evil`, `death`, `after-death` and `final-end`;
- islam `know-the-good` and `evil`;
- all ten Hindu theses;
- buddhism `know-the-good`, `evil`, `self-salvation` and `guilt`;
- christianity `evil`, `suffering` and `death` (Christ is absent from the thesis; noted by R1).

The improved opening paragraphs now give the elementary answer immediately after these theses.

**Process notes (R10):** none was touched outside the two domains. Within them, only the `judaism/suffering` scope clause remains (above).

**Other batches:**

- R4: the grave doctrine in `islam/after-death` (ISL-05 substance); al-Razi in `islam/evil` (ISL-04).
- R8: the resurrection-centered strand in `judaism/after-death` and `final-end` (JUD-01); post-Holocaust theology (JUD-04).
- R12:
  - Owen in `christianity/self-deception` metadata (CHR-21);
  - the moral-grounding duplicate in `naturalism/great-and-terrible`;
  - the Dōgen paraphrase label in `buddhism/evil` (BUD-02).

## Residual caveats

1. **New argumentative sentences.** Several Christian responses now carry arguments they previously only gestured at. They are built from material already on the site: R1's satisfaction doctrine, R2's natural law, WCF 3.7, 5.5, 6.6, 10.2, 19.5 and 33.2, and Railton. The independent reviewers should still test each for fairness and for overreach. In particular:
   - the servant/child contrast in `islam/final-end`;
   - "the vow answers bondage rather than satisfying justice" in `buddhism/self-salvation`;
   - the memory-and-justice question in `hinduism/after-death`;
   - "the inclination to evil… a fall from created uprightness" in `judaism/evil`;
   - the created-end explanatory claim in `naturalism/evil`.
2. **Two view-section additions in the Hindu lane** (`suffering`, `evil`) make the Lord-as-dispenser and beginningless-karma answers explicit. They improve fairness and rest on an existing, now re-checked citation, but they are content additions, not only voice.
3. **`judaism/after-death`** now says the rabbinic resurrection texts "envisage body and soul raised and judged together" (Sanhedrin 91b). The fuller resurrection-centered sourcing is still R8's.
4. **ESV denominators** in the ledger were not recomputed (see above).

## Validation

- `npm run validate`: content valid (168 answers, 201 sources, 50 thinkers).
- `npm run check`: 0 errors, 0 warnings (1 pre-existing hint).
- `npm run build`: 90 pages.
- Built-site link and fragment check (scratchpad `linkcheck.mjs`, run with `MSYS_NO_PATHCONV=1` and the `C:/` dist path): 9,529 local links, 7,831 fragment links, **0 broken, 0 duplicate IDs**.
- `git diff --check`: clean.
- `node scripts/audit-inventory.mjs`: regenerated `research/final-audit/data/` (125,409 words; 2,640 citations; ESV candidates 106; 4 unledgered and 1 orphan, all pre-existing).

## Scope confirmation

R4–R12 were not begun. The original audit files are unchanged. No source, thinker, question, schema, UI or style file was changed.

## Independent review still required

R3 must not merge on this self-review. Two separate fresh sessions are required, each with one top-level Opus 5.5 agent and no subagents. Each should write its own record in this directory.

- **Review A — Morality & Evil (36 answers), `R3-REVIEW-MORALITY-EVIL.md`.** A full domain review against the pre-R3 versions at `de9492b`, covering:
  - factual and source accuracy;
  - fair representation and internal diversity;
  - argument classification;
  - Christian-response strength;
  - natural prose;
  - substantive regressions;
  - source claim versus historical or theological judgment;
  - cross-lane parity.
- **Review B — Salvation & Destiny (24 answers), `R3-REVIEW-SALVATION-DESTINY.md`.** The same standards, with particular attention to:
  - diagnosis and remedy fit;
  - guilt and forgiveness;
  - grace and effort;
  - assurance;
  - personal identity;
  - resurrection and liberation;
  - final destiny;
  - R1's atonement corrections;
  - school distinctions.

Merge only after both reviews recommend it and every BLOCKER and IMPORTANT finding is resolved.
