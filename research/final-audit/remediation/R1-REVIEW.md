# R1 independent review

2026-10-07. Review of PR #16, **R1: Reformed gospel center (atonement, evil, suffering, death)**, starting from head `3c83095` (`3c8309515acffb9a29a7da90d0629ba0f6aa1a32`).

- **Reviewer:** one fresh Claude Opus 5.5 top-level session. No subagents or other reviewer were used.
- **Scope:** every file changed by R1.
- **What was read:**
  - the governing audit files (`README.md`, `REMEDIATION-PLAN.md`, `CHRISTIANITY.md`, `CROSS-QUESTION.md`, `ARGUMENT-QUALITY.md`) and `R1-GOSPEL-CENTRE.md`;
  - the six Christian answers;
  - the full main sections of the ten touched non-Christian answers;
  - the Owen source record and thinker profile, the extended registry notes, the ESV ledger and the regenerated inventory.
- **Not edited:** the original audit files. The only change to `R1-GOSPEL-CENTRE.md` is American spelling (see M-12).

## Result

| Severity | Count |
|---|---|
| BLOCKER | 0 |
| IMPORTANT | 5 (all fixed) |
| MINOR | 13 (all fixed) |

**Recommendation: MERGE** at the review head.

## Primary-source checks performed

| Source | How checked | Result |
|---|---|---|
| Turretin, *Institutio* vol. 2, XIV.10.13–15 and XIV.13.1–3 | Latin OCR of the registered archive.org scan (`institutiotheolo02turr`) | Conditions of substitution and "no one wronged": accurate. Condition 4 and the twofold union were paraphrased loosely (I-4, M-1). XIV.10.13–15 all fall on p. 371. XIV.13.2: *communis et in Ecclesiis nostris recepta sententia*, with Piscator named as dissenting, so "the received Reformed view" is fair |
| Owen, *Works* 10 (Goold) | Archive.org OCR (`worksofjohnowen10owen`) | Goold's note, p. 141: four positions on extent. I.3, pp. 173–174: the dilemma. III.6–7, pp. 263–267. Quotations and locators confirmed. One attribution was overstated (I-3). Rights: "NOT_IN_COPYRIGHT", 1862 |
| Calvin, *Institutes* (Beveridge) | CCEL plain text | II.16.3: "it is because he first loves us, that he afterwards reconciles us to himself". II.16.6: sacrifices called by the name of sin; "propitiatory victim"; sins "transferred to him by imputation". III.1.1: "of the least benefit". III.11.1: "twofold benefit"; "principal ground". III.11.10: "as at a distance and without us"; Osiander's "essential righteousness" and "gross mixture". I.18.3–4: "where is our redemption?"; the wicked "not excusable". All exact |
| Witsius, *Economy* I.8.30–31 (Crookshank 1803) | Archive.org OCR (`economycovenant01witsgoog`) | Adam is head in the covenant of works; Christ "in virtue of the covenant of grace" accomplishes righteousness for "his chosen covenant people"; Adam is the type of Christ. The page's "sets both within one covenant" was wrong (I-1) |
| Kant, *Religion* Bk. II, Sec. One, C | Registered CUHK Greene-Hudson text | "can never be discharged by another person, so far as we can judge according to the justice of our human reason"; "no transmissible liability…"; "the most personal of all debts"; "morally another"; "bears as vicarious substitute the guilt of sin". All exact. The printed 1960 scan is lending-only and its search-inside endpoint is closed, so it was not checked further (see "Residual") |
| Canons of Dort II.3, 5, 8 | CRCNA 2011 text | Wording confirmed for the new quotations in `guilt` |
| ESV | — | No new ESV wording was added by the review. The 17 R1 rows were reconciled (207 words, 1,085 bytes, 53 verse charges; totals 799 / 4,061 / 160). Every new R1 quotation was matched to a ledger row |

## Findings

### IMPORTANT

| ID | Answer | Original | Evidence | Correction |
|---|---|---|---|---|
| **I-1** | christianity/guilt (reply) | "Witsius sets both [Adam and Christ] within one covenant, so Christ's obedience is not credit passed between strangers." | Witsius I.8.31 places Adam's sin "in virtue of the covenant of Works" and Christ's obedience "in virtue of the covenant of grace". Adam is the *type* of Christ. Two covenants, parallel heads. | "Witsius reads Romans 5 as a covenant parallel: as Adam's sin is charged to those included with him in the covenant of works, so Christ's obedience is charged to his covenant people in the covenant of grace." |
| **I-2** | christianity/guilt (Deep dive); `owen` thinker profile | "This argument for definite atonement is Owen's own development… The account given here rests on the common confessional doctrine, not on every step of Owen's argument." The profile said Owen's arguments "go beyond the common confessional doctrine". Dort II.8 was summarized as "intended its saving effectiveness for the elect". | Dort II.8 itself says Christ "should effectively redeem… all those and only those who were chosen from eternity to salvation". WCF 8.5 limits the purchase to "all those whom the Father hath given unto him"; WCF 8.8 says redemption is certainly applied to all for whom it was purchased. The page left the reader thinking definite atonement was Owen's addition, which understated the confessional position. | The paragraph now separates three things: (1) Owen's argument (the dilemma; reasoning from payment to release), attributed; (2) the confessional teaching, quoted from Dort II.3, 5 and 8 (sufficiency, indiscriminate proclamation, effective redemption of the elect) and WCF 8.5 and 8.8; (3) the fact that not every Reformed theologian argued as Owen did (Goold, p. 141). The profile now says the particular design is confessional and Owen's arguments for it are his. |
| **I-3** | christianity/guilt (Deep dive) | "What satisfies, he [Owen] insisted, is not a quantity of pain but the Son's obedience and self-offering…" | Owen, III.7 p. 267: satisfaction is "a taking upon him the whole punishment due to sin, and in the offering of himself doing that which God… was more delighted and pleased withal…". Owen does not set punishment against obedience. The page attributed a contrast he does not make. | "Christ, he argued, took on himself the whole punishment due to sin and, in offering himself, did what pleased God more than all the sins he answered for had offended him." Also "a legal term the Bible does not use" became Owen's "a term borrowed from the law, not a word the Bible uses for Christ's death". |
| **I-4** | christianity/guilt (reply) | "Christ's twofold union with his people, by nature and by covenant" | Turretin XIV.10.15: *duplici unione nostra cum Christo, naturali et forensi seu mystica*. "Covenant" is not his term here. The loose paraphrase also blurred the very distinction (representation versus union) the reply needs. The registry note already had it right. | "twofold union with his people: natural, because he shares their nature, and forensic or mystical, because he and they are made one" |
| **I-5** | christianity/suffering (view) | "…what is proper to that nature is ascribed to the one person, without making the divine nature suffer as creatures do." | "As creatures do" implies the divine nature suffers in some other way. That conflicts with the cited WCF 2.1 ("without… passions") and with the Chalcedonian point R1 intended. | "The incarnate Son truly suffered, in body and soul, according to his human nature. Because Christ is one person, what he suffered in that nature is rightly said of the Son himself, yet the divine nature does not suffer." (WCF 8.7; 2.1; HC 37) |

### MINOR

| ID | Answer | Problem | Correction |
|---|---|---|---|
| M-1 | guilt | Turretin's fourth condition (*potentia poenas omnes nobis debitas ferendi, et auferendi tam a se quam a nobis*) was rendered "bear the penalty and rise from it". Locator "pp. 370–371", but §§13–15 fall on p. 371 | "bear the whole penalty without being held by it"; locator p. 371 |
| M-2 | guilt | 2 Corinthians 5:21: "as with the sin offering" was presented, unattributed, as the meaning | "Christ did not become sinful; the sinless one bore sin that was not his own. Calvin connects Paul's phrase with the Old Testament sacrifices for sin, which were themselves called by the name of sin." (II.16.6) |
| M-3 | guilt | Isaiah 53:10: "his life becomes 'an offering for guilt'" follows neither the ESV text ("his soul makes an offering for guilt") nor its footnote exactly | "his soul makes 'an offering for guilt'"; 53:11 sin-bearing added as paraphrase. Ledger unchanged (same 4 quoted words) |
| M-4 | guilt | The wrath element of propitiation had no direct biblical citation (Romans 3:25 and 1 John 4:10 do not name wrath) | Romans 1:18 and 5:9 cited (locator only; no new ESV wording) |
| M-5 | guilt (Deep dive) | "Substitution is the centre that holds these images together" stood as an unqualified claim, though it is a theological synthesis, not a confessional formula | "In Reformed theology, substitution is the center…" |
| M-6 | guilt (reply) | Union could be read as replacing imputation. "The union is also personal" risked confusion with the hypostatic ("personal") union | Added: "Union does not replace imputation. The righteousness counted to believers remains Christ's; union is why it can justly be counted to those joined to him." Also "spiritual and real" |
| M-7 | guilt | The Deep dive repeated the main text's "repentance… supplies no satisfaction" ("Repentance must not become a competing payment either") | Repeated sentence cut |
| M-8 | evil | "those who killed him were 'lawless men'" misreads Acts 2:23. Peter's hearers killed him "by the hands of lawless men" | "his hearers had used 'lawless men' to kill him" (same quoted words) |
| M-9 | death | "By his resurrection he 'abolished death'": 2 Timothy 1:10 ties this to Christ's appearing. A later sentence said "death is abolished only when the dead are raised", contradicting the quotation | "Christ Jesus 'abolished death…'"; "death, the last enemy, is destroyed only when the dead are raised" (1 Corinthians 15:26) |
| M-10 | judaism/self-salvation | "guilt must be dealt with justly as well as mercifully" implied that the Jewish account is merciful but not just | The Christian side now says God's justice requires guilt to be "answered, not only pardoned". The Jewish side: God's merciful acceptance of genuine return "is itself just and needs no further satisfaction" |
| M-11 | 10 comparative pages | The same parenthetical link wording appeared in all ten | Varied in `judaism`, `islam` and `buddhism` `great-and-terrible`. The rest are one per page and read naturally |
| M-12 | several | British spellings in R1 prose: centre ×3 (`guilt`, `evil`, `suffering`), fulfils ×2 (`guilt`, `jesus`), cancelled ×2 (`guilt`, `evil`), offence ×2 (`islam/great-and-terrible`). The R1 report and PR title also used "centre" | Americanized. The branch name and the `R1-GOSPEL-CENTRE.md` filename are kept because other records refer to them |
| M-13 | self-salvation | "complete from the first" was cited only to WCF 11.1 | Locator now WCF 11.1, 5 |

Consequential update: the ESV ledger's per-answer denominators were recomputed for the eight answers whose prose changed. The method reproduces the R1 figures exactly at `3c83095`. The corpus denominator is now 123,598, and the share stays 0.65%. Totals are unchanged.

## Assessments

- **`guilt` as canonical home: passes.** The page now explains, in order:
  - guilt;
  - God's justice (Romans 3);
  - substitution;
  - satisfaction;
  - propitiation;
  - union;
  - justification;
  - repentance and repair.

  Sibling pages can legitimately link to it instead of rebuilding the doctrine. It does not take over `self-salvation` (calling, regeneration and perseverance are pointed there) or `jesus` (offices are pointed there). The length (1,771 inventory words; 1,065 visible / 693 Deep dive) is earned. Only one repeated sentence was cut.
- **Romans 3:21–26: sound.** The page covers:
  - universal sin;
  - justification as gift;
  - redemption;
  - *hilastērion* as propitiation (ESV);
  - former sins passed over in forbearance;
  - "just and the justifier".

  "At the cross, forgiveness does not suspend justice: justice is done, and mercy is given" summarizes what the next paragraphs ground (Isaiah 53, 1 Peter, Galatians 3:13, 2 Corinthians 5:21). It does not claim Romans 3 alone proves the penal mechanism. Kept. The *hilastērion*/mercy-seat debate does not change the wording, which follows the ESV.
- **Substitution: sound after M-2 and M-3.** "He bears what they owe and gives what they lack" is well grounded. "Made sin" is bounded, and the sin-offering reading is attributed to Calvin.
- **Satisfaction: sound.** The reality comes before the term ("not bypassed but answered", then "Reformed theology calls that answer satisfaction"). It covers obedience, sacrifice, judgment and reconciliation (WCF 8.5), not a quantity of pain; after I-3, Owen is no longer misused for that point.
- **Propitiation: sound after M-4.** Wrath is kept as God's righteous opposition to sin, and the sacrifice is God's own provision in love (1 John 4:10; Calvin II.16.3). This avoids both the pagan caricature and reduction to expiation.
- **WCF 8 / 11: correct.** Accomplishment (WCF 8) is kept apart from application (11.4: not justified until the Spirit applies Christ). Christ's righteousness is the ground and faith the instrument (11.1–2). Union is not identified with justification.
- **Calvin:** every quotation is exact and fairly used. Justification remains forensic, and Osiander's "essential righteousness" is described accurately.
- **Turretin:** accurate after I-4 and M-1. Both passages are labeled "Latin; paraphrased". No paraphrase is presented as a quotation.
- **Owen source and profile:** metadata, rights and locators are correct, and the biography is accurate. His inclusion is proportionate: two Deep-dive paragraphs.
- **Owen versus the confessions; Dort: sound after I-2.** Dort's three distinctions are quoted in its own 2011 wording, with no later slogan imposed. Definite atonement is presented as confessional; Owen's argument for it is attributed to him.
- **Witsius and representation: fixed (I-1).** The reply rests first on Romans 5. Witsius is no longer misstated.
- **Union, imputation and justification:** after I-4 and M-6, federal headship, covenant representation, union and imputation are kept distinct and their connection shown. Union is not made the ground of justification.
- **Kant:** quoted at full strength, including his qualifier. The reply covers:
  - who Christ is (the conditions; HC 14–17);
  - voluntary mediation;
  - representation (Romans 5; Witsius);
  - union (Turretin; Calvin);
  - its own limits.

  The candid conclusion is preserved.
- **Atonement motifs:** five motifs, with victory tied to the same death (Colossians 2:13–15). "Center" is now marked as a Reformed synthesis (M-5).
- **`self-salvation`: passes.** It covers:
  - accomplishment (linked to `guilt`);
  - application by the Spirit (Calvin III.1.1);
  - justification and sanctification kept distinct (Calvin III.11.1; WCF 11, 13, 17, 18).

  The precise locators replace the old citation dump.
- **`jesus`: passes.** The offices paragraph quotes WSC 25 exactly and summarizes Q. 24 and 26 accurately. It sits between the person and the resurrection and does not interrupt the historical case.
- **`evil`: passes (after M-8).** The cross is the paradigm of decree and real culpability (Acts 2:23; 4:27–28; Calvin I.18.3–4, exact). The page states that it "does not explain every evil" and discloses no sufficient reason for any atrocity. Final defeat (Colossians 2:15; Revelation 21:4). Philo's challenge is left standing.
- **`suffering`, Christology: fixed (I-5).** The one person of the Son suffers according to the human nature, and the divine nature does not suffer. There is no Nestorian "only his humanity suffered" wording.
- **`suffering`, pastoral balance: passes.** It keeps:
  - Job's unanswered questions;
  - lament (Psalm 13; Psalm 22 on Christ's lips);
  - mystery;
  - sympathy;
  - hope.

  2 Corinthians 4:17 is explicitly bounded: "the hope is not that suffering is small".
- **`death`: passes (after M-9).** Death remains an enemy and a judgment; Christ's victory is "already" (Hebrews 2:14–15; 2 Timothy 1:10) and "not yet" (1 Corinthians 15:26). HC 42 is read correctly: believers' death is no payment, and death itself is not called good.
- **Page architecture: works.**
  - `guilt` owns the atonement.
  - `suffering` owns Christ's solidarity and hope and links to `guilt`.
  - `death` owns victory and resurrection hope and links to `jesus` for the historical case.
  - `evil` uses the cross as a paradigm without rebuilding the atonement.
- **Theses:** no R1-created mismatch. The `evil`, `suffering` and `death` theses are left for R6.

### Comparative fairness

| Tradition | Assessment |
|---|---|
| Judaism | Fair. *Teshuvah*, mercy, covenant, the offerings, Yom Kippur and victims' claims are presented first and in full. The Christian response is framed as a disagreement over whether forgiveness needs the satisfaction Christianity finds in Christ. M-10 removed one implication of injustice |
| Islam | Fair. *Tawba*, mercy, righteous deeds, victims' rights and Bukhari 6463 are retained. "Not… a mechanical tally of deeds" is kept |
| Hindu traditions | Fair. Advaita and Rāmānuja are still distinguished, and the Vedāntin reply ("may justly remit his own displeasure") is kept |
| Buddhism | Fair. Intention, confession, restraint, cultivation and Pure Land are kept. "The Buddhist rejects that diagnosis rather than offering an incomplete version of it" is kept |
| Links | All ten resolve to `christianity/guilt`. Each response states the Christian premise in a sentence before linking, so it can be read without clicking |

### Other results

- **American English:** R1 prose is clean after M-12. Pre-existing "offence" in unedited paragraphs is left for R10.
- **Translation and provenance:**
  - Turretin is labeled paraphrase.
  - Owen's spelling appears only in the source text, not in quotations used.
  - Calvin is quoted from the registered Beveridge text.
  - Kant is quoted from the registered CUHK text.
- **Other Reformed expositors:** no gap requires another one. Murray, Hodge and Ursinus would add little beyond the current Scripture, confession, Calvin, Turretin, Owen and Witsius structure: best exposition, not maximum roster.

## Residual (not a finding)

The Kant Book II wording is checked against the registered CUHK transcription only. The printed Harper Torchbooks text is lending-only on archive.org, and its search-inside endpoint refused access. This is the same basis on which the Book I quotations were already accepted, and the registry discloses it. It stays an R12 or limitations item.

## Scope

- Fixes are confined to R1 pages and records.
- R2–R12 were not begun.
- The original final-audit files are unchanged.
- No question, ID, slug, UI, style or schema file was changed.
