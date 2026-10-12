# C4: Final editorial, citation and metadata audit (consolidated R10 + R12)

2026-10-12. Production record. One Claude Opus 5.5 top-level session, no subagents. No independent review was run; one is recommended (§26).

## 1. Branch, base and commits

- **Branch:** `c4-final-editorial-source-audit`, from `main` @ `e19b85b` (merge of PR #24, C3). `main` was fetched and verified at that SHA; PR #24 is merged and `docs/DESIGN-SPEC-V1.md` is present (merged via PR #25, `bee8e5c`).
- **Commits:**
  1. `a6cb799` Christian minor corrections, provenance labels, naturalist process notes and duplicates
  2. `0284bc3` translation provenance, ESV reconciliation and remaining process notes
  3. `0360d3c` presentable public pages, BC/AD dates, spelling, duplicate questions, thinker notes
  4. `edf5590` scope strings describe positions, not bibliographies or research process
  5. `388aec7` hadith locators follow the registered sunnah.com numbering
  6. this record, regenerated inventory and final validation (final SHA in the PR)

## 2. Scope and method

**Governing documents read in full:** `AGENTS.md`; `docs/METHODOLOGY.md`, `SOURCES.md`, `CONTENT-MODEL.md`, `DESIGN-SPEC-V1.md`; the final-audit `README.md`, `REMEDIATION-PLAN.md`, `CROSS-QUESTION.md`, `ARGUMENT-QUALITY.md`, `TRANSLATION-AND-CITATIONS.md`, `SOURCES-AND-THINKERS.md`, `CHRISTIANITY.md` §§11–12 and `LIMITATIONS.md`; the NAT/JUD/ISL/HIN/BUD finding tables; and the deferral, residual and limitation sections of every R1–R6 and C1–C3 production and review record.

**Answers examined:**

- **All 168 ledes**, read consecutively by question (§17).
- **Read in full:** all 28 Christian answers, consecutively (§5, §18); all 28 naturalist answers; 27 Jewish answers (all except `final-end`, which C2 and its review covered and which no C4 item touched).
- **Islamic, Hindu and Buddhist lanes:**
  - These were independently reviewed in R4, C1 Review A and C1 Review B.
  - They were examined by corpus-wide pattern searches for process language, provenance labels, BCE/CE, spelling, scope wording and pressure-question overlap.
  - Every hit was read in context, and each page with a deferred item was read at the relevant passage.
  - Vertical consistency was checked by claim family (§18).
- **Answers modified: 146 of 168.** Most changes are small and mechanical: link text, apostrophes, spelling, scope strings and provenance labels. Substantive prose edits are itemized in §§3–5 and §16.

**Prior work was treated as current.** The October 7 audit describes an older corpus. Every finding was checked against the current text before any action. Reviewed R1–C3 solutions were not replaced.

## 3. Current-state checklist

Status before C4 is the state found at `e19b85b`. "Resolved earlier" means an R/C batch had already fixed the finding, and C4 verified it.

| ID | Origin | Status before C4 | C4 action | Evidence |
|---|---|---|---|---|
| XQ-02 process notes | audit | Partly resolved (R2, R3, C1–C3 removed many) | **Resolved.** 37 remaining sentences removed or rewritten (§4); 84 "anchor"/"flagship" link texts replaced | §4 |
| XQ-06(a) naturalism `jesus` duplicates the Christian reply | audit | Unresolved | **Accepted, with link.** The canonical shared sentences remain so the page stands alone (Christian Case mode). A link to `christianity/jesus` was added | `naturalism/jesus` CR |
| XQ-06(b) Augustine XII.13 in Hindu and Buddhist `history` | audit | Unresolved | **Accepted.** The use is apt in each lane, and each answer must stand alone | §15 |
| XQ-06(c) evolved-reason argument in `naturalism/what-is-man` | audit, C3 §28 | Unresolved | **Resolved.** One sentence plus a link to the canonical home, `knowledge-possible` | §15 |
| XQ-06(d) / NAT-07 duplicate naturalist PQs | audit, R5, C3 | Partly resolved (R5, C3) | **Resolved** for the three listed overlaps (§16) | §16 |
| XQ-06(e) inability owned by the flagship | audit | Resolved earlier (R1–R3) | Verified: `fail-the-good` and `self-salvation` give one paragraph and link | — |
| XQ-07 label and canonical homes | audit | Resolved earlier for CHR-24 and `know-the-good` | Moral-grounding duplicate in `naturalism/great-and-terrible` trimmed (§15) | §15 |
| CHR-14 to CHR-31 | audit | Mixed | See §5 | §5 |
| TC-01 Ephesians 2:8 ledger row | audit | Unresolved (orphan row) | **Resolved** by narrowing the citation (§6) | §6 |
| TC-02 Turretin Latin labels | audit | Partly resolved | **Resolved.** 15 citations labelled (§7) | §7 |
| TC-03 tafsir and *Vikuach* base editions | audit | Disclosed in the registry only | **Resolved as far as possible.** Not identifiable; the uncertainty now appears in each public citation (§8) | §8 |
| TC-04 Ibn Khaldun translation chain | audit | Unresolved | **Resolved** (§9) | §9 |
| TC-05 Bavinck Dutch | audit, R2 | Partly resolved (KT pages; C3 §33.9) | **Resolved.** Four passages checked; one sentence corrected; 49 citations labelled (§10) | §10 |
| BUD-02 Dōgen label | audit, C1 | Unresolved | **Resolved** (§11) | §11 |
| BUD-04 Vasubandhu "translation" | audit, C1 | Unresolved | **Resolved** (§11) | §11 |
| BUD-06 Thich Nhat Hanh note | audit, C1 | Process note in public prose | **Resolved.** The note is removed. The book remains unread and uncited (in copyright; no lawful text checked) | §4 |
| HIN-06 Śaṅkara on 28/28 | audit, C1 | Unresolved | **Checked and retained.** Every Hindu answer attributes at least one specific reading to Śaṅkara (§13) | §13 |
| HIN-07 Madhva IEP note | audit, C1 | Process note in public prose | **Resolved.** Moved into the citation note | §4 |
| JUD-07 Maimonides on 28/28 | audit, C2 | Unresolved | **Checked and retained.** Every Jewish answer uses him substantively; C2 added other thinkers only where used (§13) | §13 |
| NAT-08 thin metadata; roles | audit, C3 | Partly resolved (C3) | Papineau added to `ultimate-reality`. Single-thinker lists are accurate to their bodies. Roles are only proposed (§14) | §§13–14 |
| SRC-01 registry roles | audit | Unresolved | **Proposals only, no role changed** (§14) | §14 |
| SRC-02 metadata saturation | audit | Partly resolved | See HIN-06, JUD-07, CHR-20, CHR-21 | §13 |
| CHR-21 Owen in `self-deception` | audit, R1, R3 | Unresolved | **Resolved.** Owen added; his indwelling-sin paragraph is substantive | §13 |
| R1 Kant Book II edition | R1 review | Accepted limitation | Unchanged; registered CUHK text (§23) | §23 |
| R2 contemporary dissent on Adam uncited | R2 | Open | **Accepted.** The flagship describes dissent without a citation. No revisionist source was registered (optional) | §23 |
| R3-S&D Muslim double locator | R3 review B | Unresolved | **Resolved.** Muslim 181a and 2999 and Bukhari 5641–5642 and 7439 now use the registered sunnah.com numbering | commit 5 |
| R3-S&D `christianity/final-end` Deep-dive overlap | R3 review B | Unresolved | **Resolved.** The duplicated paragraph was cut to one linking sentence | §5 (CHR-26) |
| R5 three-question answers | R5 review | Open editorial standard | 20 answers had three pressure questions before C4; 18 do now. The rest are left. Whether to amend the methodology to "one to three" is recorded for the user | §16 |
| R6 apostrophes; 240-character lede; "honours" | R6 review | Open | **Resolved.** Straight apostrophes throughout ledes and scopes; American spelling sweep (§21). `judaism/after-death` stays at 240 characters, inside the limit | §§17, 21 |
| C1 profiles (Piḷḷai Lokācārya, Meykaṇḍār, Caitanya, Rūpa Gosvāmin) | C1 | Optional | **Not created.** They are cited only through their texts, and no thinker page would add navigation value proportionate to new unverified biographies | §19 |
| C1 Huayan One Mind pointer in Buddhist `ultimate-reality` | C1 review B | Optional | Not added. The `one-and-many` canonical home is linked from the existing Deep dive | — |
| C2 Kabbalah modern source, Berkovits, Berman, Haredi/Modern Orthodox | C2 | Optional | Not pursued (new scholarship). Recorded in §23 | §23 |
| C2 Ibn Tibbon recension; NLI records | C2 review | Open | Unchanged (§23) | §23 |
| C3 Oppy, Reichenbach and Quine process notes | C3 §28 | Unresolved | **Resolved** (§4) | §4 |
| C3 optional `christianity/ultimate-authority` Quine upgrade | C3 | Optional | **Done.** "no statement is immune to revision" is now quoted from the checked 1951 printing, p. 40, instead of via SEP | §5 |

## 4. Public process notes: removals and destinations

| Answer | Removed or rewritten | Destination |
|---|---|---|
| christianity/induction | "This answer claims less" | Rewritten: "The doctrine of providence claims less" |
| christianity/revelation | "the comparison this site makes"; "This page does not settle those dates" | Rewritten as substantive sentences |
| christianity/evil | "that is why the reply above answers through the cross" | Rewritten as an argument |
| christianity/what-is-man | "reported here as Bavinck's view" | "it is Bavinck's view" |
| naturalism/ultimate-reality | Oppy "could not be lawfully read for this domain" | This record (§23). The Deep dive heading is now "A view without a canon" |
| naturalism/something-rather-than-nothing | Russell "reported here through Reichenbach's survey"; Oppy | Citation note: "Russell 1948, as quoted by SEP"; Oppy in §23 |
| naturalism/ultimate-personal | Oppy sentence | §23 |
| naturalism/knowledge-possible | "A note on sources" (Quine 1969 under copyright) | The existing citation notes already say "as quoted by SEP"; §23 |
| naturalism/ultimate-authority | "Every lane on this site" | "Every worldview" |
| naturalism/offspring-family, love-beauty-creativity, worship | "This answer stays at the level of…"; "this answer does not adjudicate"; "cited here through this survey" | Deleted; the Deep-dive headings were retitled |
| judaism/ultimate-reality | Kabbalah "not treated here" | Linked to the C2 Kabbalah material in `one-and-many` |
| judaism/logic-binding, induction | "were not researched for this answer" (×2) | Deleted. `induction` now says "classical Jewish thought" |
| judaism/ultimate-authority | Karaites "mentioned here only as context. This page represents…"; "for the Revelation & History domain" | Rewritten; link to `revelation` |
| judaism/offspring-family, love-beauty-creativity | "This answer reports classical sources without adjudicating"; "no single position is assumed here" | Deleted |
| judaism/revelation | "This page does not settle when the Torah was written" | "When the Torah was written remains disputed" |
| judaism/jesus | "The Hebrew text used here is an online transcription whose base edition is not stated" | Citation note: "Hebrew; our paraphrase of an online transcription"; registry `edition` field (§8) |
| islam/order, something-rather-than-nothing | "The scanned Arabic edition is noisy…"; "read here in a 1930 Arabic edition with noisy scanned text…" | Citation note: "Arabic; paraphrased, checked against the SEP survey"; the registry keeps the OCR detail |
| islam/revelation | "beyond this page, which makes no claim either way" | Deleted (the preceding sentences already bound the claim) |
| islam/love-beauty-creativity, offspring-family | "not covered here"; "outside the scope of this answer" | Moved into the scope strings ("not treated") |
| hinduism/one-and-many (HIN-07) | Madhva's list "given here through secondary scholarship… not available in a lawful readable edition" | Citation note: "secondary account of the school's list" |
| hinduism/love-beauty-creativity | "in this answer" | Deleted |
| buddhism/history | *mappō* "not treated here" | Deleted |
| buddhism/jesus | Thich Nhat Hanh "not consulted for this page" | "have also written on Jesus"; §23 |
| buddhism/revelation | "not examined for this page"; Yogācāra "not treated here" | Rewritten as substantive claims |
| buddhism/ultimate-authority | "known here only through the Stanford Encyclopedia's account"; "belongs to the Revelation & History domain and is not treated here" | "as the Stanford Encyclopedia summarizes it" (secondary attribution kept); link to `revelation` |

**Link text.** Production terms used as visible link text ("the human-nature anchor", "the salvation anchor", "the flagship", "the flagship anthropology" and others; 84 instances) were replaced with reader-facing phrases such as "the account of human nature" and "the account of man's greatness and misery".

**Scope strings.**
- 21 Christian scopes listed authors and confessions (CHR-28). They now describe the doctrine treated, keeping the "Van Til distinguished from the doctrine" qualifiers.
- 30 non-Christian scopes contained verse lists, editions or process wording ("via SEP", "as mapped by SEP", "deferred to Revelation & History"). They now describe the position and schools treated.
- Scope strings appear in each card's header.

**Genuine uncertainty kept in the prose.** Substantive uncertainty that bears on a claim was kept in the text, for example:
- "Muslim scholars have almost universally denied…";
- secondary attributions such as "as SEP summarizes him";
- the Talmud's Jesus passage "assessed as later legend".

Only research-status narration was removed.

## 5. Christian findings CHR-14 to CHR-31

| ID | Before C4 | C4 action |
|---|---|---|
| CHR-14 Hebrews 11:3 | "from nothing" in quotation marks beside Heb 11:3 | **Fixed.** No quotation marks. The doctrine rests on John 1:3 and Colossians 1:16 (all things made through the Word), Heb 11:3 is paraphrased at its own scope (the visible not made from visible things), and WCF 4.1 supplies "of nothing". `the anchor question` was relinked as "the account of ultimate reality". The Buddhist page's Christian response does not quote Heb 11:3 |
| CHR-15 Isaiah 1:18 | Removed by R2 | Verified resolved |
| CHR-16 "no other lane" | Present in `ultimate-personal` | **Fixed** ("Christianity adds that God is personal within himself"). Gauḍīya and Śrīvaiṣṇava theism make the universal claim unsafe |
| CHR-17 Advaita objection uncited | Present | **Fixed.** Cited to Śaṅkara BSBh I.1.2, pp. 15–16 and SEP §2.3, the locators already verified on the Hindu page |
| CHR-18 "Humean" | Reply restricted to "the Humean" | **Fixed.** It now adds that non-Humean naturalists who posit necessities or powers do offer an explanation; with them the dispute is over a further ground (link to `naturalism/order`) |
| CHR-19 polygamy and patriarchy | Patriarchy half unanswered | **Fixed.** Reply: patriarchal custom reported, not made the ordinance; man and woman bear the image together (Gen 1:27); headship reshaped by self-giving love (Eph 5:25–33; 6:4); Reformed churches teach headship but differ over application. No claim is made about all Christian traditions |
| CHR-20 Bavinck vs cognitive science | Read as a reply to current research | **Fixed.** "Writing in the 1890s… a theological judgment about the theories he knew, not a reply to current research". Turretin added to metadata (XI.10.2–4 is substantive, and the scope already named him) |
| CHR-21 Owen and Witsius metadata | `guilt` fixed by R1 | Owen added to `self-deception`. Witsius in `guilt` is substantive (the covenant reading of Romans 5) |
| CHR-22 confessional shorthand | Partly fixed (R1, R3) | **Fixed.** "Westminster adds/defines/counts/forbids", "Heidelberg's sense" → full document names (`worship`, `offspring-family`, `revelation`, `hinduism/worship`). "Paul says" kept where a specific passage is expounded |
| CHR-23 distancing verbs | Fixed by R3 | Verified |
| CHR-24 "human-nature anchor" for the flagship | Fixed earlier in `evil`; label still in `offspring-family` | The label no longer exists anywhere (link-text pass) |
| CHR-25 resurrection link in `after-death` | Present (R3) | Verified. *Psychopannychia* not added (not registered; adds nothing the WCF 32.1 citation lacks) |
| CHR-26 hell reply | Strengthened in R3 (WCF 6.6; Edwards on infinite obligation) | Verified. The Deep-dive paragraph duplicating the reply was cut to one linking sentence. The closing concession is kept: it states the limit honestly and does not undercut the doctrine |
| CHR-27 citation dump | Fixed by R1 | Verified: the WCF citations are individual and explained |
| CHR-28 scope strings | `great-and-terrible` partly fixed; `jesus` a bibliography | **Fixed** for all 21 author-list scopes (§4) |
| CHR-29 concise-page source tours | `one-and-many` and `why-alive` acceptable after R2/R6 | `love-beauty-creativity` paragraph and `offspring-family` Bavinck sentence made doctrine-first, with attribution kept |
| CHR-30 offices of Christ | Added by R1 (SC 23–26) | Verified |
| CHR-31 Vos | Absent | **Optional; not pursued.** Augustine and Bavinck already carry the linear, Christ-centred history. A PD route exists for a later addition: *The Pauline Eschatology* (1930) entered the US public domain in 2026 (§23) |

Other Christian edits:
- `ultimate-authority`: Quine is now quoted from the checked "Two Dogmas" (p. 40), replacing the SEP-mediated paraphrase. Bavinck §18 was corrected (§10).
- `what-is-man`: "bear or contain" became "bear", adding "in a creaturely way" (§10).

**Christian voice (all 28 read consecutively).**
- The lane reads as one Reformed account.
- Scripture leads the doctrinal paragraphs.
- Calvin, Turretin, Bavinck, Augustine, Owen and Edwards serve as expositors.
- Van Til is consistently separated from the confessional doctrine.
- The redemptive centre added by R1 is present and visible in `guilt`, `self-salvation`, `jesus`, `evil`, `suffering` and `death`.
- No defensive meta sentence remains.
- No CHR finding required reopening R1–R3 work.

## 6. ESV reconciliation (TC-01 and whole ledger)

- **Before:** the inventory reported 106 candidates, 103 rows, 4 unledgered candidates and 1 orphan row.
- **TC-01:** `christianity/self-salvation` now cites the quotation "by grace you have been saved through faith" to Ephesians 2:8, and the unquoted point about good works to 2:9–10. The existing row (Ephesians 2:8; 1 verse; 8 words; 42 bytes) is therefore correct, and the orphan disappears.
- **Hebrews 11:3:** "from nothing" was never ESV wording. The quotation marks were removed (CHR-14). There was no row to remove.
- **False positives:**
  - "above" in `christianity/induction` is a word of WCF 5.3.
  - "persists" in `buddhism/order` is a word from SN 12.20.
  - `scripts/audit-inventory.mjs` now lists both separately as checked non-ESV wording.
- **Broader scan:** every quotation in a sentence ending in an ESV citation (112 fragments) was compared with the rows.
  - No ESV quotation lacks a row.
  - The other hits were Westminster, Augustine, Qur'an and Rāmānuja wording.
  - Two rows (`christianity/knowledge-possible` Romans 1:18–21 and `christianity/jesus` 1 Corinthians 15:3–8) are real quotations that the heuristic misses because a colon intervenes.
- **Totals (unchanged):** 103 rows, 872 quoted words, 4,410 bytes and 177 conservative verse instances. The row sums, stated totals and book table agree. No ESV quotation was added, removed or reworded in C4.
- **After:** 105 candidates, 0 unledgered (2 known non-ESV excluded), 0 orphan rows.
- **Proportions:**
  - Recomputed for all 168 answers; many rows were stale from earlier batches.
  - Corpus share: 872 / 135,589 = 0.64%.
  - Highest: `christianity/history`, 7.80%.
  - Highest book: Romans, 30 verse charges.
  - All are far inside 500 verses, half a book and 25%.
- **Permission:**
  - Crossway's permissions page was rechecked on 2026-10-12. The terms are unchanged, including the exclusion of "commentary or other biblical reference work", and the digital notice matches the site's.
  - The numbers do not settle whether this site is such a work.
  - Recorded in the ledger, `SOURCES.md` and §24 as a publication-stage rights item. Conservative remedy: Crossway's written confirmation, or references or a registered KJV text in place of direct ESV wording.
  - This is not a legal determination.

## 7. Turretin Latin notes (TC-02)

All 15 unlabeled citations of `turretin-institutio-1847` were checked for quotation:

| Answer | Citations |
|---|---|
| ultimate-reality | 2 |
| something-rather-than-nothing | 4 |
| ultimate-personal | 2 |
| order | 4 |
| love-beauty-creativity | 1 |
| worship | 1 |
| islam/something-rather-than-nothing | 1 |

- None quotes Turretin. The only adjacent quotation in `order` is Calvin's.
- Each now carries `note="Latin; paraphrased"`, the KT and RH convention. In `something-rather-than-nothing` the redundant inline "(our paraphrase of the Latin)" was removed.
- "our translation" remains only on `ultimate-authority`, where the Latin phrase *organice et ministerialiter, non despotice* is actually rendered.

## 8. Tafsir and *Vikuach* editions (TC-03)

- R4 and C2 had not identified the base editions. The KSU pages for al-Ṭabarī and Ibn Kathīr were rechecked on 2026-10-12 and still name no printed edition. altafsir.com does not name one for al-Rāzī, and Hebrew Wikisource does not for the *Vikuach*.
- No edition was invented. Each registry record now has `edition: "online Arabic text; printed base edition not named"` (or "online Hebrew transcription; …"), so the uncertainty appears in every public citation rather than only in a registry note.
- The report numbers printed on the KSU al-Ṭabarī page (10779–10792) suggest a numbered modern edition, but this was not confirmed.

## 9. Ibn Khaldun (TC-04)

`islam/history` cites de Slane's *Prolégomènes*. Its notes now read:
- "Arabic in de Slane's French translation; our English from the French" (vol. 1, two citations);
- "Arabic in de Slane's French translation; our paraphrase" (vol. 2).

The chain is Arabic → de Slane's French → project English. Nothing implies translation from the Arabic.

## 10. Bavinck Dutch spot-checks (TC-05)

Control: Project Gutenberg Dutch first edition, vol. 1 (eBook 51052) and vol. 2 (eBook 67966). Downloaded 2026-10-12 from the PG mirror `aleph.pglaf.org`; gutenberg.org itself returned 503/504.

| Formulation (answer) | Dutch | Result |
|---|---|---|
| Man **is** the image; the whole person displays it (`christianity/what-is-man`, §33.8, 33.10) | "Gelĳk de Zoon, zoo is de mensch als zoodanig, geheel en al, beeld Gods. Hĳ draagt maar niet, hĳ is het beeld Gods. Echter … wat de Zoon in absoluten zin is, de mensch is in relatieven zin"; §33.10 "Alzoo is de gansche mensch beeld en gelĳkenis Gods. Hĳ is het naar ziel en lichaam" | **Confirmed.** "bear or contain" narrowed to "bear" (*draagt*); "in a creaturely way" added from the same passage (*op creatuurlĳke wĳze*) |
| Unity in diversity and diversity in unity, absolute in God; creatures a faint analogy in which one side never comes into its own (`one-and-many`, `ultimate-personal`, §27.25) | "Ook in God is er eenheid in de verscheidenheid, verscheidenheid in de eenheid. Ja deze orde en harmonie is in Hem op absolute wĳze aanwezig. Bĳ schepselen is daarvan slechts eene zwakke analogie. Of de eenheid of de verscheidenheid komt niet tot haar recht." | **Confirmed.** The deism/pantheism claim in the `one-and-many` reply is also confirmed ("om eenerzĳds tegen het deisme het verband en andererzĳds tegen het pantheisme het onderscheid van God en wereld te handhaven") |
| The world an organism in a figurative sense; God governs by implanted powers and laws (`one-and-many`, `order`, §29.12) | "Krachtens die eenheid kan de wereld in overdrachtelĳken zin een organisme heeten…"; "leidt en regeert naar de hun ingeschapene krachten en wetten" | **Confirmed** |
| "With Turretin the testimony of the Spirit began to lose its place of honor" (`christianity/ultimate-authority`, §18) | "Langzamerhand begon het testimonium internum ook in de Geref. theologie zĳne eereplaats te verliezen. Bĳ Turretinus … Amyraldus … Molinaeus … wordt het reeds verzwakt, en vereenzelvigd met zoodanige verlichting des H. Geestes, waardoor het verstand in staat wordt gesteld, om de notae en criteria … op te merken." | **Corrected.** Bavinck describes a gradual loss in later Reformed theology and names Turretin among several in whom it was "already weakened" into an illumination for perceiving Scripture's marks. The sentence now says exactly that |

- Already checked before C4: §6.3, §7 (Logos) and §12 (KT, 2026-10-07); §33.9 (C3).
- **Labels:** all 49 previously unlabeled Bavinck Monergism citations now carry `note="automated English translation; paraphrased"`. Each was checked for direct quotation first, and none quotes Bavinck. No machine English is presented as a published translation.

## 11. Dōgen and Vasubandhu (BUD-02, BUD-04)

- **Dōgen:** the three `dogen-shobogenzo-ja` citations (`great-and-terrible` ×2, `evil`) now carry `note="Japanese; our paraphrase"`. The prose quotes nothing, and the doctrinal wording reviewed in R3 and C1 is unchanged.
- **Vasubandhu:** `buddhism/something-rather-than-nothing` now reads "(our paraphrase of the Sanskrit)". The sentence is an unquoted summary, and the argument is unchanged.

## 12. C1–C3 deferrals

- **Tsongkhapa (`buddhism/why-alive`).** Re-read at Lotsawa House on 2026-10-12. Verse 6 states that renunciation not joined to bodhicitta "will not become a cause for the perfect bliss of unsurpassed awakening". The locator "verses 7–9" became "verse 6". The summary sentence citing "verses 2–9" became "verses 2–8", since verse 9 concerns wisdom, which that sentence does not mention.
- **HIN-06, HIN-07, Thich Nhat Hanh, C3 notes:** see §§3–4 and §13.
- **C2 medieval Hebrew:** the *Vikuach* provenance is now in the citation (§8). Ibn Tibbon's Hebrew is described in the prose as rendering one of Saadia's two versions; which one remains open (§23).

## 13. Thinker associations: before and after

| Thinker | Before | After | Change |
|---|---:|---:|---|
| Turretin | 12 | 13 | + `christianity/worship` (XI.10.2–4 on images; already in scope) |
| Owen | 1 | 2 | + `christianity/self-deception` (indwelling-sin paragraph) |
| Papineau | 1 | 2 | + `naturalism/ultimate-reality` (causal-closure citation; named in the Deep dive) |
| Maimonides | 28 | 28 | Retained. Each Jewish answer uses him substantively; the thinnest (`death`, `self-deception`, `offspring-family`, `know-the-good`) each attribute a specific ruling or argument |
| Śaṅkara | 28 | 28 | Retained. Each Hindu answer attributes a specific reading to him; even the thinnest (`jesus`: "the Lord's birth is only an appearance"; `logic-binding`; `induction`; `offspring-family`) carry one |
| Bavinck | 21 | 21 | Retained. Each use is cited and now labelled |

- No thinker was removed from an answer. No association was found to be decorative once the bodies were read.
- No orphaned thinker links were created. The link check confirms all thinker pages.
- **Registry corrections:**
  - BC/AD in eras and bios (§21).
  - 12 thinker `notes` rewritten as scholarly notes without process records. Removed wording is preserved in the repository history. Among it: "Registry sourceId … should be reconciled"; "removed as unverified (Michigan page returned 403)"; "Profiled at first public use"; "R4 (2026-10-08) read…".
  - Railton's note was deleted (it contained only process information).

## 14. Registry roles: proposals for the user's decision (no role changed)

| Thinker | Current role | Answers | Evidence | Recommendation |
|---|---|---:|---|---|
| Darwin | specialist | 11 | Evolutionary anthropology across five domains; registry note: agnostic, not a representative of atheism | **Keep specialist.** Breadth reflects the subject (evolution), not representative standing |
| Railton | specialist | 8 | All uses are moral realism, across four domains | **Keep specialist** (subject-specific: ethics). Primary would also fit; user decision |
| Oppy | primary | 0 | Lawful text unavailable (UR, C3); no profile | **Decide:** keep as primary with no page content beyond description and works, or move out of the public roster until used. Recommend keep: he is the leading contemporary systematic naturalist |
| Vos | primary | 0 | CHR-31 optional; *Pauline Eschatology* (1930) now US public domain | **Keep primary.** The Reformed sequence is fixed in CONTENT-MODEL. Use him when `history` or `final-end` is next revised |
| Bahnsen | primary | 0 | Van Til 1955 suffices in KT (audit) | **Keep primary** (fixed sequence); unused by design |
| Witsius | primary | 1 | Covenant reading in `guilt` | Keep |
| Soloveitchik | primary | 3 | Modern Orthodox voice (C2) | Keep |
| al-Rāzī, Ibn Sīnā | primary | 2 each | Tafsir and Ishārāt used substantively | Keep |
| Mackie, Dennett | primary | 3, 2 | Error theory; illusionism (C3) | Keep |
| Rosenberg, Kitcher | specialist | 0 | Never used; Rosenberg has no profile | **Decide:** retain as registry entries (harmless) or remove from the public roster. Recommend retain until a question uses them |
| Aquinas, Athanasius, Anselm | interlocutor | 0 | Interlocutor role by design; no profiles | Keep |

With placeholders no longer shown publicly (§21), the seven profile-less pages display description, role and works only.

## 15. Canonical homes and cross-links

| Concept | Canonical home | C4 change |
|---|---|---|
| Reliability of evolved reason | `naturalism/knowledge-possible` | `naturalism/what-is-man` CR reduced to one sentence plus a link |
| Moral authority and obligation | `naturalism/know-the-good` | `naturalism/great-and-terrible`: CR paragraph shortened to the claim plus a link; knave PQ removed; "Christian note" Deep dive removed. `fail-the-good` PQ replaced (§16) |
| Scientific method as final court | `naturalism/ultimate-authority` | `knowledge-possible` PQ2 removed; a link from its CR kept |
| Providence and second causes | `order` | `christianity/order` reply now links `naturalism/order` for non-Humean views |
| Resurrection evidence | `christianity/jesus` | Verified from `after-death`, `death` and `naturalism/after-death`; `naturalism/jesus` CR now links the Christian answer |
| Satisfaction, image of God, inability, Humean induction, authority vs recognition | `guilt`, `what-is-man`, `great-and-terrible`, `induction`, `ultimate-authority`/`revelation` | Verified; no change needed |
| Sinai's historicity | `judaism/revelation` | `judaism/ultimate-authority` now links it instead of naming a "domain" |
| Mahāyāna canon | `buddhism/revelation` | `buddhism/ultimate-authority` now links it |

## 16. Pressure-question duplicates

| Overlap | Classification | Action |
|---|---|---|
| naturalism `knowledge-possible` PQ2 ≈ `ultimate-authority` PQ1 | Genuine duplicate | KP PQ2 removed; canonical home UA |
| naturalism `know-the-good` PQ2 ≈ `great-and-terrible` PQ1 ≈ `fail-the-good` PQ1 | Genuine duplicates of the authority question | Flagship PQ1 removed. `fail-the-good` PQ replaced with a failure-specific question: wrong chosen calmly over years, where no momentary passion overrides a calmer concern (the view's model is impulse overriding concern) |
| naturalism `ultimate-personal` PQ1 ≈ reasons/causes in `what-is-man` CR | Same premise applied to a different subject | UP PQ1 kept (personal versus impersonal explanation); the `what-is-man` CR point moved to its canonical home (§15) |
| naturalism `evil` PQ2 ≈ `know-the-good` PQ1 (genealogy versus truth) | Near-duplicate | Replaced with the evil-specific question the CR argues: without a given end, what makes cruelty a corruption of a capacity rather than one more use? |
| naturalism `love-beauty-creativity` PQ2 ≈ `offspring-family` PQ1 (costly faithfulness) | Genuine duplicate (R5 review called it weak) | Removed |
| buddhism `revelation` PQ1 ≈ `ultimate-authority` PQ2 (realization versus conviction) | Genuine duplicate | Revelation PQ1 removed; canonical home UA |
| buddhism `order` PQ1 ≈ `ultimate-reality` PQ1 (constancy of conditionality) | Genuine duplicate | UR PQ1 removed; canonical home `order` |
| hinduism `one-and-many` PQ1 ≈ `what-is-man` PQ2 ≈ `why-alive` PQ2 (Advaita: who is liberated) | Genuine duplicates | Removed from `one-and-many` and `why-alive`; canonical home `what-is-man` |
| hinduism `evil` PQ1 ≈ `suffering` PQ2 (desert from unknown history) | Near-duplicate | `suffering` PQ2 removed; `evil` PQ1 (R5-sharpened) kept |
| islam `induction` PQ2 (promise received without induction) | Presses nothing distinctive; the CR concedes Christian parity (R5 review) | Removed |
| naturalism `self-salvation` PQ2 ≈ `final-end` PQ2 (irreparable loss) | Related; different subjects (remedy versus final account) | Kept both |

- **Fairness of changed questions:**
  - The new `fail-the-good` question fits the page's own model: Hume's violent-over-calm passions, Darwin's impulse over instinct. A naturalist can reply that calm self-interest also defeats sympathy; the question does not claim otherwise.
  - The new `evil` question restates the CR's classified point (explanatory, not contradiction).
  - Neither assumes a Christian premise as neutral.
- **Count:** 20 answers had three questions before C4; 18 do now. The methodology's "one or two" remains an editorial standard. Whether to amend it is recorded for the user.

## 17. Ledes

- All 168 ledes were read consecutively by question (inventory in `data/INVENTORY.md`).
- Every lede gives a direct answer to its question, and each matches its body.
- No lede leads with a research caveat. None universalizes a minor school.
- **Changed:**
  - 27 ledes and scopes with curly apostrophes were normalized (YAML re-quoted; text unchanged apart from the apostrophe).
  - American spelling: "center", "judgment", "honored", "favors", "tranquility".
- No lede content was rewritten. R6's revisions and C1–C3's targeted changes remain accurate.
- Lengths: maximum 240 (`judaism/after-death`); all within the schema limit.

## 18. Horizontal and vertical consistency

**Horizontal (28 questions):**
- All six answers address the same question.
- Comparable criticisms are classified the same way ("theological disagreement grounded in revelation", "explanatory incompleteness, not contradiction").
- Every answer links to deeper source evidence through its Deep dive and Sources.
- Every Christian scope now states that the treatment is Reformed.
- No regression from R1–C3 was found.

**Vertical (claim families):**

| Lane | Families checked | Result |
|---|---|---|
| Christianity | Scripture, Trinity, creation, image (now confirmed against the Dutch), Fall, satisfaction, union, resurrection, providence, judgment | Consistent across all 28 |
| Naturalism | Physicalism versus naturalism (UR, `what-is-man`, `one-and-many`); realist and anti-realist ethics (`know-the-good`, `evil`, flagship, `fail-the-good`) | Consistent; realism is never denied and nihilism never imputed |
| Judaism | Maimonides versus Saadia and Nachmanides on resurrection (`after-death`, `what-is-man`, `death`, `history`); modern movements (`ultimate-authority`, `revelation`, `after-death`) | Consistent |
| Islam | Ashʿarī versus Māturīdī on reason and value (`evil`, `know-the-good`, `knowledge-possible`); Twelver authority (`ultimate-authority`, `revelation`, `history`); *taḥrīf* (`jesus`, `revelation`) | Consistent |
| Hindu traditions | Advaita, Rāmānuja, Madhva and Śaiva across UR, Man, M&E and S&D | Consistent per C1 Review A; no C4 change touched the distinctions |
| Buddhist traditions | No-self and conventional agency; Huayan; Pure Land | Consistent per C1 Review B |

## 19. Source and quotation integrity

- Validator: every citation resolves, and no unverified source is cited.
- **Registry records changed:**
  - `edition` added to four records (§8);
  - BC/AD in nine notes;
  - the quoted SEP phrase "roughly in the first century BCE" in the `sep-abhidharma` note turned into a marked paraphrase.
- No source was re-marked or newly registered.
- **Quotation changes:**
  - `buddhism/revelation` no longer quotes SEP's "roughly in the first century BCE". The claim is paraphrased with the same citation, which avoids altering a quotation's era style.
  - `christianity/ultimate-authority` now quotes Quine from the checked 1951 printing.
- **Not created:** profiles for the four C1 figures (§3), or bios for the seven unprofiled registry thinkers. No biography-writing program was begun.

## 20. Word counts

- Corpus (inventory measure): 134,400 → 134,146 (−254).
- By lane: Christianity +184; naturalism −266; Judaism −37; Islam −77; Hindu −29; Buddhist −29.
- Largest changes:
  - `naturalism/great-and-terrible` −157 (moral-authority duplicate trimmed);
  - `christianity/offspring-family` +56 (CHR-19 reply);
  - `hinduism/one-and-many` −39;
  - `naturalism/knowledge-possible` −37.
- The reviewed long-form additions (Hindu image theology, Jewish eschatology, Huayan, naturalist consciousness) were not trimmed.

## 21. Presentation changes made at the user's direction

The C4 brief excluded UI work. The user then directed: "remove tags such as Reviewed or other notes — we need this presentable. Ensure BC and AD are used across the board, no BCE and or CE." That instruction was carried out as text removal only, with no change to typography, colors, navigation, layout, reading modes or citation components.

**Template changes:**
- `AnswerCard`: removed the "Reviewed" status badge and its outline note; the scope line remains.
- `questions/[slug]`: removed "N of 6 worldview entries written · Each entry shows its review status".
- `questions/index` and `index`: removed "Content is being built in phases / outlines" notices and the coverage counts.
- `worldviews/[slug]`: removed status labels in the entries list.
- `thinkers/[slug]`:
  - "Biography not yet written", "Not yet written" and "Not yet cited" placeholders are no longer shown; the section is omitted when empty;
  - status labels removed;
  - representative works link to the registry only when the record is checked;
  - the closing line now reads "a reading aid", not "a research convenience".
- `sources`:
  - the lede no longer calls the registry a "seed registry";
  - "Checked YYYY-MM-DD" labels and the research-log `notes` are no longer displayed;
  - only checked sources are listed (the 12 unchecked seed records are cited nowhere).
- `method`: the "Review status" section was removed, since the statuses are no longer displayed.

**Not changed:** the `reviewStatus` schema, the validator rules and the data. Status still governs validation.

**Text:**
- **BC/AD.** Every BCE/CE in answers, thinker eras and bios, and source records was converted ("c. AD 150–250", "AD 1015", "fifth century AD", "500 BC"). `grep` finds no BCE or CE in `src/` or `docs/`.
- **Spelling.** 188 British spellings in answer prose and the few in thinker bios were changed to American, matching R1's convention. Text inside quotation marks, italic titles (Hume's *Enquiry*) and citation attributes was not changed.

The broader UI items in DESIGN-SPEC §2 and §10.11 (homepage "Apologetics Mode", mode names) were left for the UI phase.

## 22. Validation

Final results on the head of this branch:

| Command | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers; 168/168 present |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing, `scripts/audit-inventory.mjs` unused variable) |
| `npm run build` | 96 pages built |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,146 words, 2,835 citations; ESV candidates 105, unledgered 0 (2 known non-ESV excluded), orphan rows 0 |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 10,155 links, 4,150 cross-page, 8,359 fragments, 2,722 external; **0 broken, 0 duplicate IDs**, 0 outside base |

**Differences from the C3 baseline:**
- Citations 2,832 → 2,835. Additions: CHR-14 (+2), CHR-17 (+2), CHR-19 (+2) and the Ephesians split (+1). Removals: the naturalist flagship's duplicate (−3) and the `christianity/final-end` Deep-dive duplicate (−1). The Quine replacement is net 0.
- Links 10,141 → 10,155 (new cross-links and citations).
- Pages, sources and thinkers unchanged.

## 23. Limitations register (reconciled)

All 56 entries of `LIMITATIONS.md` and the later deferrals were reclassified:

| Class | Items |
|---|---|
| **Resolved** | 1 (Van Til note), 6 (Huayan, C1), 7 (Kabbalah basic, C2), 8 (al-Rāzī, R4), 9 (Bavinck spot-check, C4), 11 (Quine "Two Dogmas", C3; 1969 essays remain SEP-quoted with notes), 14 (uṣūl primaries, R4), 21 (rasa via De, C1), 25 (image theology, C1), 30 (post-Holocaust, C2), 39 (tafsir and *Vikuach* disclosed in citations, C4), 45 (note removed, C4), 48–54 (R1, R4, C1–C3), 55 (independent reviews R3A/R3B), 56 (Dōgen label, C4) |
| **Accepted scope limitation** (disclosed in citation notes, scopes or registry) | 2 Bahnsen; 3 Oppy unread; Russell's 1948 wording via SEP (noted on its citation); 4 Bouyges and Forget OCR (registry; citation notes); 5 Madhva via IEP (citation note); 10 strong simplicity (in text); 12–13, 15–18, 20, 22–24, 26–28, 31–38, 40–44, 47 as listed in the October register; R1 Kant Book II CUHK text; Bavinck's untouched passages paraphrased from the automated English with labels |
| **Optional future research** | Vos (*Pauline Eschatology*, 1930, now US public domain); a modern Kabbalah specialist (tzimtzum); Berkovits; Berman (JUD-08); Thich Nhat Hanh (in copyright); Śākta mention in Hindu UR; a revisionist source on Adam (R2); Ibn Tibbon's recension; NLI records for *Sha'ar ha-Gemul*; profiles for C1 figures and the seven unprofiled registry thinkers; al-Bāqillānī/al-Rummānī; Khadduri's *Risāla* |
| **Rights or metadata question for publication** | ESV and the Crossway "commentary or other biblical reference work" exclusion (§6). Two-Dogmas public-domain status rests on the OBP records (registry). Monergism Bavinck quotation permissions (only paraphrased; none quoted) |
| **Blocker to launch** | None in the scholarly content. The ESV eligibility question must be settled before public launch (§24) |

## 24. Remaining publication risks and blockers

1. **ESV eligibility.**
   - Not a content defect, but a release prerequisite: confirm with Crossway, or switch direct quotations to references or KJV.
   - The inventory, ledger and proportions are accurate and current, so either path is mechanical.
2. **UI-phase text.** The homepage's "Apologetics Mode" card and mode names await the design-spec implementation. No stale research-phase notice remains on public pages.
3. **Unprofiled registry thinkers (7).** Their pages now show description, role and works without placeholder notes. Writing short verified bios, or hiding unused entries, is a user decision (§14).

## 25. Scope confirmation

- `docs/DESIGN-SPEC-V1.md` was not modified.
- No design code, typography, colors, layout, navigation, reading mode, citation component or style file was changed. The template edits in §21 remove text only, at the user's direction.
- No portraits were generated, and no portrait hook was added.
- No question, worldview family, ID or slug was added or changed.
- No registry role was changed.
- PR not merged; UI implementation not begun.

## 26. Recommendation: one fresh independent C4 review

A separate Claude Opus 5.5 top-level session, without subagents, should review this PR against `e19b85b` and write `research/final-audit/remediation/C4-REVIEW.md`. Suggested focus:

1. Each §4 removal: was any scholarly caveat lost? In particular check the Islam scope moves, `judaism/induction` ("classical"), the Buddhist `revelation` rewrites and `naturalism/ultimate-reality`'s Deep dive.
2. The Bavinck §18 correction, and the "in a creaturely way" addition, against the Dutch (§10).
3. CHR-14 (John 1:3; Col 1:16; the Heb 11:3 paraphrase), CHR-17 (the reuse of Hindu-page locators), CHR-18, CHR-19 and CHR-20 for accuracy and Reformed fidelity.
4. The new `naturalism/fail-the-good` and `naturalism/evil` pressure questions for fairness (§16).
5. The ESV reconciliation and the new known-non-ESV list in the inventory script.
6. The 51 rewritten scope strings: does each still name the school or scope represented, as the validator's purpose requires?
7. The §21 template edits: text removal only; no broken anchors; nothing scholarly hidden (source research notes remain in the registry and the repository).
8. The BC/AD conversions in thinker eras and the spelling sweep's quotation protection, by spot-check.
9. Full validation and link check.
