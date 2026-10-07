# R1: Reformed gospel center (remediation record)

2026-10-07. Branch `r1-reformed-gospel-centre`, from `main` @ `68a13db` (merge of PR #15, the final corpus audit). One Claude Opus 5.5 top-level session; no subagents; no reviewer invoked during production. **An independent review is required before merge** (`REMEDIATION-PLAN.md`: conceptual risk high).

The audit files in this directory are a historical record and were not edited. This file records which of their findings R1 addresses.

## Purpose

Make the atonement and Christ's redemptive work the clear canonical center of the Christian account of guilt, salvation, evil, suffering and death, so that later Christian critiques can point to a doctrine the site has actually explained.

## Findings addressed

| Finding | Status | Where |
|---|---|---|
| **CHR-01** (atonement never expounded; WCF 8.5, HC 12–18 unused) | Addressed | `christianity/guilt` is now the canonical home: Romans 3:21–26 expounded; Isaiah 53, 2 Corinthians 5:21, Galatians 3:13, 1 Peter 2:24 and 3:18, Hebrews 9–10; WCF 8.4–5 and 11.1–4; HC 14–17 |
| **CHR-04** (evil: no cross, no final defeat of evil) | Addressed | `christianity/evil` reply: Acts 2:23; 4:27–28; Colossians 2:15; Revelation 21:4 |
| **CHR-05** (suffering: no suffering Christ, lament, hope) | Addressed | `christianity/suffering`: Hebrews 2:10, 14–18; 4:15; 5:7–8; Job; Psalms 13 and 22; 2 Corinthians 4:17; Revelation 21:4 |
| **CHR-06** (death: Christ's victory absent) | Addressed | `christianity/death`: Hebrews 2:14–15; 2 Timothy 1:10; 1 Corinthians 15:20, 26, 54–57; John 11:25–26 |
| **CHR-13** (no Owen, Turretin or Calvin III in salvation) | Addressed | Owen (*Death of Death*, newly registered), Turretin XIV.10 and XIV.13, Calvin III.1.1, III.11.1 and III.11.10 in `guilt` and `self-salvation` |
| **XQ-08** (Christian critiques depend on an unexplained doctrine) | Addressed | Ten non-Christian Christian responses now state the premise in one sentence and link to `christianity/guilt` |
| **CHR-27** (self-salvation citation dump "WCF 11.1–3; 13.1–3; 17.1–3; 18.1–4") | Addressed | Split into precise locators (WCF 11.1; 13.1–2; 17.2; 18.4) |
| **CHR-30** (offices of Christ absent) | Addressed | `christianity/jesus`: WSC 23–26 |
| CHR-21 (thin thinker metadata in `guilt`) | Partly addressed | `guilt` now lists Calvin, Turretin, Owen and Witsius; Owen's profile (bio, significance, key ideas) written. `self-deception` metadata (Owen) left for R12 |
| CHR-22 (confession shorthand) | Partly addressed | Every edited paragraph swept. In `self-salvation`, `evil`, `jesus` and `suffering`, "Westminster/Dort/Belgic 13 says" became doctrine-first prose or "The Westminster Confession…". Unedited paragraphs elsewhere are left for R10 |
| CHR-08 (meta voice) | Touched only where edited | `self-salvation`: two defensive sentences removed ("This diagnosis does not mean…"; "The anchor joins those matters…"). The domain-wide voice pass remains R3 |

Not addressed (belongs to later batches): CHR-24 ("the human-nature anchor" label in `evil`, R10); the Ephesians 2:8 ledger locator (TC-01, R12); theses of `evil`, `suffering` and `death` (R6; see caveats).

## Answers changed

**Christian (6):** `guilt` (rewritten), `self-salvation`, `jesus`, `evil`, `suffering`, `death`.

**Non-Christian Christian responses (10):** `judaism/guilt`, `judaism/self-salvation`, `judaism/great-and-terrible`, `islam/guilt`, `islam/self-salvation`, `islam/great-and-terrible`, `hinduism/guilt`, `hinduism/great-and-terrible`, `buddhism/guilt`, `buddhism/great-and-terrible`. Only the Christian-response sentence that invoked satisfaction was changed in each.

## `christianity/guilt`: structure before and after

**Before** (638 words): real guilt; Romans 3:21–26 cited as a range and summarized abstractly; "the ground of pardon is therefore Christ's obedience and satisfaction" asserted; faith as instrument; repentance not satisfaction; Kant's objection from *Religion* Bk. I; a reply resting on Hebrews 9 ("depicts") and Witsius alone.

**After** (1,613 words; 973 visible, 627 Deep dive), in the order the brief requires:

1. **Real guilt:** answerable to God; a wrong to a neighbor is also a wrong before God.
2. **Justice not ignored:** Romans 3:21–26 expounded. God had "passed over former sins"; the cross shows this patience was not indifference, "so that he might be just and the justifier". This is stated before the word "satisfaction" appears.
3. **Willing mediator and representative:** God provides the remedy in love (1 John 4:10). The Son comes willingly, takes our nature and stands as head of his people.
4. **Substitution:** "he bears what they owe and gives what they lack". Isaiah 53, 1 Peter, Galatians 3:13 and 2 Corinthians 5:21, with "made sin" bounded: Christ did not become sinful, and was treated as the sin-bearer, as with the sin offering (Calvin II.16.6).
5. **Satisfaction:** "God's justice is not bypassed but answered", then named and confirmed by WCF 8.5. Obedience and self-offering, not pain alone (Hebrews 9–10).
6. **Propitiation:** God's wrath, his righteous opposition to sin, turned away. God provides the sacrifice; Calvin: "because he first loves us, that he afterwards reconciles us".
7. **Union with Christ:** Calvin III.1.1 (separated from Christ, his work is of no benefit; the Spirit is the bond).
8. **Faith:** justification by imputation of Christ's obedience and satisfaction; faith receives and pays nothing (WCF 11.1–2).
9. **Repentance, restitution, sanctification:** these follow and do not purchase. The existing Zacchaeus, victims and fatherly-displeasure material is kept in the Deep dive.

**Deep dive:**

- One work, several images: sacrifice, ransom, reconciliation, curse-bearing and victory (Colossians 2:13–15); substitution as the center, not a replacement.
- Satisfaction, the word and the thing (Owen; Turretin XIV.13); WCF 8 (accomplishment) kept distinct from WCF 11 (application, 11.4).
- Owen and definite atonement, attributed and bounded.
- Kant's own substitute.
- Pardon, renewal and repair (Osiander; WCF 11.2, 13, 15, 17, 18).

## Scripture added and how it functions

- **Romans 3:21–26** carries the page's central argument (justice and justifier), not a decorative range.
- **Isaiah 53:4–6, 10–11:** bearing, substitution, the "offering for guilt", making many accounted righteous. It is used as the Christian reading; the Jewish reading (Rashi: the servant as Israel) stays in `judaism/great-and-terrible`.
- **2 Corinthians 5:21:** the exchange, with the "made sin" boundary.
- **Galatians 3:13:** curse-bearing (paraphrased).
- **1 Peter 2:24 and 3:18:** sin-bearing; "the righteous for the unrighteous, that he might bring us to God".
- **Hebrews 9:11–14; 10:5–14:** voluntary self-offering, once for all, cleansing the conscience; the Son's will to obey (10:5–10).
- **1 John 4:10:** propitiation as God's love, against the pagan caricature.
- **Romans 5:12–19:** Adam and Christ as representative heads (the reply to Kant).
- **Colossians 2:13–15:** the debt cancelled and the powers defeated (Deep dive; also `evil`).
- **Elsewhere:**
  - Romans 5:8–10 (`self-salvation`).
  - Hebrews 1:1–2; 7:24–27; 1 Corinthians 15:24–26 (`jesus`, offices).
  - Acts 2:23; 4:27–28; Revelation 21:4 (`evil`).
  - Hebrews 2:10, 14–18; 4:15; 5:7–8; 1 Peter 2:21–24; Job 38, 42; Psalms 13:1–2 and 22:1; Mark 15:34; 2 Corinthians 4:17; Revelation 21:4 (`suffering`).
  - Hebrews 2:14–15; 2 Timothy 1:10; 1 Corinthians 15:20, 26, 54–57; John 11:25–26; Revelation 21:4 (`death`).

## Confessional sources

| Source | Locators | Use |
|---|---|---|
| Westminster Confession 8.4–5 | `guilt` | Accomplishment: obedience, sacrifice, satisfaction of justice, reconciliation purchased |
| Westminster Confession 11.1–4 | `guilt`, `self-salvation` | Application: pardon, imputation, faith as instrument; 11.3 ("exact justice and rich grace"); 11.4 (not justified until the Spirit applies Christ) |
| Westminster Confession 8.7, 2.1 | `suffering` | Christological precision: each nature does what is proper to it |
| Westminster Confession 10.1, 13.1–2, 17.2, 18.4, 3.8 | `self-salvation`, `evil` | Doctrinal boundaries |
| Westminster Shorter Catechism Q. 23–26 | `jesus` | Threefold office; Q. 25 priest: "to satisfy divine justice, and reconcile us to God" |
| Heidelberg Catechism Q&A 14–17 | `guilt` | Why the mediator must be truly human, righteous and truly God; God will not punish another creature for human guilt |
| Heidelberg Catechism Q&A 37 | `suffering` | Christ sustained wrath in body and soul |
| Heidelberg Catechism Q&A 42, 56, 60–61 | `death`, `guilt` | Retained |
| Canons of Dort II.3, 5, 8 | `guilt` (Deep dive) | Sufficiency for the whole world; indiscriminate offer; effectiveness for the elect. These set the frame for Owen |
| Belgic Confession Art. 13 | `evil`, `suffering` | Now quoted accurately ("with undue curiosity") instead of "Belgic 13 limits speculation" |

## Theologians: usage and reasons

| Theologian | Where | Why |
|---|---|---|
| **Calvin** | II.16.3–4 (God loves before he reconciles), II.16.6 (sin offering; "made sin") in `guilt`; III.1.1 (union; the Spirit as bond) in `guilt` and `self-salvation`; III.11.1 ("twofold benefit"; justification as "the principal ground on which religion must be supported") in `self-salvation`; III.11.10 (union "not at a distance"; Osiander rejected) in `guilt`; I.18.3–4 (the crucifixion by God's will; the wicked not excused) in `evil`, replacing the weak I.17.8 locator | Calvin Book III was almost absent from the salvation domain (CHR-13). It now carries union and the double benefit |
| **Turretin** | XIV.10.13–15 (conditions of just substitution; no one wronged; twofold union) and XIV.13.1–2 (satisfaction includes lifelong obedience) | His conditions answer the "unrelated third party" caricature better than any confessional sentence. Latin 1847, paraphrased and marked |
| **Owen** | *Death of Death* III.7 ("satisfaction" a legal term for a biblical reality; to bear iniquity is to bear its punishment; God more pleased with the Son's obedience and offering than displeased by sin); I.3 (the dilemma) | Restores the major English Reformed expositor of the atonement. The **definite-atonement argument is attributed to Owen** and set beside Dort II.3, 5, 8 and Goold's note distinguishing other Reformed positions. The page says it rests on the common confessional doctrine, not on every step of Owen's argument |
| **Witsius** | I.8.31, retained | Covenant headship. He no longer carries the reply to Kant alone |

## Owen source registration

`owen-works-goold-10`: *The Works of John Owen*, vol. 10, ed. William H. Goold (Edinburgh: T. & T. Clark, 1862).

- **Copy and metadata:** archive.org `worksofjohnowen10owen`, University of California Libraries copy. The record marks it "NOT_IN_COPYRIGHT" (no notice; 1862). Metadata was confirmed from the record and the scanned title page.
- **Read in the OCR text:**
  - Goold's prefatory note, pp. 140–141;
  - *Death of Death* I.3, pp. 173–174;
  - III.6, pp. 263–264;
  - III.7, pp. 265–267.
- **Status:** checked 2026-10-07; paraphrased only.
- **Owen's thinker profile:** bio, significance and key ideas written; representative works linked to vols. 6 and 10.

## Treatment of the doctrines

- **Substitution.** Plain first ("he bears what they owe and gives what they lack"), then grounded in Isaiah 53, the apostles and 2 Corinthians 5:21. It is not reduced to physical pain; curse, condemnation, obedience, righteousness and reconciliation are all included.
- **Satisfaction.** Explained as justice "not bypassed but answered" before the term appears. It is confirmed by WCF 8.5 and extended to Christ's whole obedience (Owen; Turretin XIV.13). Accomplishment (WCF 8) is kept distinct from verdict and application (WCF 11).
- **Propitiation.** Romans 3:25 explained in context. God's wrath, his righteous opposition to sin, is turned away. The pagan caricature is ruled out by 1 John 4:10 and Calvin II.16.3–4: God provides the sacrifice because he first loves.
- **Union with Christ.** Calvin III.1.1 (no benefit while separated; the Spirit binds); Turretin's twofold union (natural and covenantal); Calvin III.11.10 (ingrafted; not at a distance). Union is kept distinct from forensic justification: Osiander is rejected, and imputation is stated separately (WCF 11.1).
- **Reply to Kant.** Kant is now quoted at full strength from *Religion* Bk. II ("no transmissible liability… the most personal of all debts"), including his qualifier "so far as we can judge according to the justice of our human reason". The reply has four parts:
  1. It rejects the caricature: Turretin's five conditions and the claim that no one is wronged; HC 14–17.
  2. It answers with union: the twofold union; the Adam/Christ structure; Witsius; Calvin III.11.10.
  3. It states its limits candidly: restitution remains, and the reply depends on covenantal and Christological premises. It does not claim to hold "on every theory".
  4. A Deep-dive note shows that Kant's own solution keeps a "vicarious substitute" inside the person.

## Changes to sibling pages

- **`self-salvation`:**
  - One paragraph on accomplishment and union (Christ's finished work → link to `guilt`; Calvin III.1.1 and III.11.1).
  - Justification, sanctification and perseverance with precise WCF locators.
  - Calvin's "principal ground".
  - Defensive and confession-shorthand sentences rewritten.
  - The page keeps its own focus (inability, grace and application) and does not rebuild the atonement.
- **`jesus`:**
  - One paragraph on the threefold office (WSC 23–26): prophet → revelation; priest → satisfaction and intercession, linked to `guilt`; king → victory over every enemy, death included.
  - "Westminster summarizes" removed.
  - The historical case is untouched, and the canonical shared sentences are unchanged.
- **`evil`:**
  - The reply now runs through the cross as the paradigm of decree and culpability (Acts 2:23; 4:27–28; Calvin I.18.3–4). Joseph is kept as a parallel.
  - It states that the cross "does not explain every evil" and discloses no reason for any particular atrocity.
  - Final defeat of evil (Colossians 2:15; Revelation 21:4).
  - Philo's challenge is still left standing as a dispute about warrant.
- **`suffering`:**
  - New view paragraph: the Son entered suffering (Hebrews). Precision: he suffered truly in body and soul in his human nature, and what is proper to that nature is ascribed to the one person without making the divine nature suffer as creatures do (WCF 8.7, 2.1; HC 37).
  - The reply adds Job, lament and Christ's cry from Psalm 22, and hope (2 Corinthians 4:17; Revelation 21:4) framed as "the hope is not that suffering is small".
  - The mystery and anti-blame material is kept.
- **`death`:**
  - New view paragraph: "Christianity does not merely interpret death. It claims that death has been invaded and defeated." Death is "defeated but not yet destroyed".
  - The reply ties HC 42 to Christ's death and resurrection and links to `jesus` for the historical case.
  - The intermediate state stays with `after-death`. The Deep dive keeps bodily resurrection and adds new creation (Revelation 21:4).

## Non-Christian comparative responses

In each page, one natural sentence now states the Christian premise: God forgives justly because Christ bore the guilt. Each links to `christianity/guilt` and keeps its fairness clause (the disagreement is theological and the other tradition knows mercy).

| Page | Change |
|---|---|
| `judaism/guilt` | Adds the question "how a just God forgives guilt that remains real". The Jewish reply is extended: God's promise to forgive the returning "needs no further satisfaction" |
| `judaism/self-salvation` | Satisfaction explained in one sentence; corruption and the Spirit kept |
| `judaism/great-and-terrible` | The servant sentence adds "in which God himself provides what justice requires" plus the link; Rashi's reading is kept |
| `islam/guilt` | Justice as well as mercy; "Islam… sees no need for such a satisfaction" added to the Islamic side |
| `islam/self-salvation` | Satisfaction glossed as Christ bearing sin in the sinner's place |
| `islam/great-and-terrible` | "answered and not merely waived"; the Bukhari 6463 counterpoint is kept |
| `hinduism/guilt` | The theistic Vedānta question is kept; the Christian ground is stated |
| `hinduism/great-and-terrible` | Propitiation glossed; the Vedāntin reply ("may justly remit his own displeasure") is kept |
| `buddhism/guilt` | Atonement glossed; "The Buddhist rejects that diagnosis" is kept |
| `buddhism/great-and-terrible` | One sentence after Shinran: in Christ the wronged God bears the cost of forgiving |

No critique was intensified, and no description of another tradition was changed.

## Natural prose and source narration

With the citations hidden, `guilt` reads as doctrine first. Each theologian is named only for a distinctive move:

- Calvin on God's prior love and on union;
- Turretin's conditions of just substitution;
- Owen on the word "satisfaction" and on definite atonement;
- Witsius on covenant headship.

The Westminster Confession is the grammatical subject twice: once to name satisfaction (8.5) and once for "exact justice and rich grace" (11.3). No "Westminster says / Calvin says / Owen says" sequence remains. The inventory's name-led sentence count in `guilt` is 3 thinker-led and 1 confession-led out of 41 main sentences. In `self-salvation` it is 2 + 0 of 35, against 1 + 1 of 30 before.

## ESV ledger

- **Rows:** 17 new rows (207 words, 1,085 bytes, 53 conservative verse charges), all checked on esv.org 2026-10-07.
  - `guilt`: 7 rows;
  - `death`: 5;
  - `suffering`: 4;
  - `evil`: 1.
- **Totals:**
  - 799 words;
  - 4,061 bytes;
  - 160 verse instances;
  - the largest book charge is 27, for Romans and Hebrews (each well under half a book);
  - the corpus proportion is 0.65%.
- **Proportions table:** the 16 rows for edited answers were recomputed.
- **Precision fixes:** one citation was split so that the Psalm 22 quotation carries a precise locator. The `self-salvation` WCF 10.1 quotation's citation order was fixed so that the inventory no longer reads it as ESV.
- **Remaining inventory items:**
  - four "unledgered" candidates, all pre-existing false positives or R12 items (`induction` "above", `something-rather-than-nothing` "from nothing", `buddhism/order` "persists", `self-salvation` Ephesians 2:8–10 versus the ledger's "Ephesians 2:8");
  - one pre-existing orphan row (the same Ephesians 2:8 locator; TC-01, R12).

## Citation and source-registry changes

- **New source:** `owen-works-goold-10`.
- **Reading notes extended (no other metadata changed):**
  - `bible-esv`;
  - `wcf`;
  - `westminster-shorter-catechism`;
  - `heidelberg-catechism`;
  - `canons-of-dort`;
  - `belgic-confession`;
  - `calvin-institutes-beveridge`;
  - `turretin-institutio-1847` (XIV.10, XIV.13);
  - `kant-religion-greene-hudson` (Bk. II, Sec. One, C, read at the CUHK text already registered).
- **Kant:** the first use of a Book II locator.
- **Thinker:** `owen` profile completed.
- **No other source added.**

## Cross-link architecture

| Page | Owns | Links added |
|---|---|---|
| `guilt` | Satisfaction, propitiation, substitution, guilt and justice, representation and union (the reply to transfer) | → `jesus` (offices); → `self-salvation` (application); → `after-death`; → `great-and-terrible` |
| `self-salvation` | Inability, grace, application, regeneration, justification versus sanctification, perseverance | → `guilt` |
| `jesus` | Person and work, offices, historical resurrection case | → `guilt` (priestly work) |
| `evil` | Nature of evil, providence, decree and culpability, cross as paradigm | — |
| `suffering` | Mystery, incarnate sympathy, hope | → `guilt` |
| `death` | Death as enemy, Christ's victory, resurrection | → `guilt`; → `jesus` |
| Ten non-Christian pages | — | → `christianity/guilt` |

Cross-links rose from 378 to 393. No sibling page rebuilds the atonement.

## Word counts

| Answer | Before | After | Visible / Deep dive after |
|---|---:|---:|---|
| christianity/guilt | 638 | 1,613 | 973 / 627 |
| christianity/self-salvation | 1,014 | 1,110 | 614 / 483 |
| christianity/jesus | 1,362 | 1,442 | 734 / 695 |
| christianity/evil | 983 | 1,203 | 707 / 483 |
| christianity/suffering | 598 | 863 | 605 / 245 |
| christianity/death | 552 | 751 | 483 / 255 |
| 10 non-Christian pages | 8,703 | 8,949 | +246 in total |

| Measure | Before | After |
|---|---:|---:|
| Corpus words | 120,014 | 122,095 |
| Christian lane words | 21,547 | 23,382 |

`guilt` grew about 2.5 times, past the size of the anchor pages (the inventory still labels it "medium"). That is the cost of making it the canonical home. The reviewer may judge whether the Deep-dive sections on Owen or on Kant's own substitute should be trimmed.

## Validation

- `npm run validate`: valid (168 answers, 201 sources, 50 thinkers).
- `npm run check`: 0 errors, 0 warnings.
- `npm run build`: 90 pages.
- Built-site link and fragment check: 9,366 local links, 7,671 fragment links, **0 broken, 0 duplicate IDs**.
- `git diff --check`: clean.
- `node scripts/audit-inventory.mjs`: regenerated `data/`.

## Remaining caveats

1. **Length of `guilt`.** It is the longest Salvation & Destiny answer.
2. **Theses.** Only the `guilt` thesis was changed: the old one used "satisfaction" unexplained, and the page's core truth changed. The theses of `evil`, `suffering` and `death` still do not mention Christ. They are not doctrinally wrong, so they are left for the R6 thesis sweep.
3. **Owen and the confession.** Owen's definite-atonement argument is attributed and bounded. The reviewer should check that "the account given here rests on the common confessional doctrine" fairly describes WCF 8.5 and 8.8, whose language ("for all those whom the Father hath given unto him") is itself particular.
4. **Turretin.** He is read in the 1847 Latin and paraphrased, so the wording is ours, not Giger's.
5. **Kant.** The Book II wording is from the CUHK Greene-Hudson text, as for Book I. The printed Torchbooks edition is still unchecked (registry note).
6. **Voice.** Unedited paragraphs of the six Christian pages keep the Morality & Evil and Salvation & Destiny voice ("Heidelberg describes", "Westminster includes", meta sentences in the Deep dives). That is R3 and R10 work.
7. **CHR-24** ("the human-nature anchor" in the `evil` Deep dive) is untouched (R10).

## Scope confirmation

R2–R12 were not started. No question, ID, slug, UI, style or schema file was changed. The audit findings files are unchanged.

## Recommendation

**An independent review is required before merge.** It should focus on:

- the confessional precision of `guilt` (substitution, satisfaction, propitiation, union and imputation kept distinct);
- whether the Owen attribution is fair;
- the Christological precision of `suffering`;
- whether the ten comparative sentences still represent each tradition fairly.
