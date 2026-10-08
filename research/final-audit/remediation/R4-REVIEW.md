# R4 independent review — Islamic primary sources, schools and comparative fairness

**Independent review of PR #19.** This record does not rewrite the final-audit findings or the R4 production record. It tests the producer's claims against the sources and records what was corrected.

## Process facts

| Item | Value |
|---|---|
| PR | #19, branch `r4-islam-sources-schools-fairness` |
| Production base | `440fec7d88077adce6f35d64f6a9051061fd944b` |
| Review starting head | `adb1fd92e0bbb2bf32bae408f5c3e1acda286f09` (confirmed; the branch had not advanced) |
| Session | One fresh top-level Claude Opus 5.5 session; no subagents |
| Answers read in full | The nine R4 answers: `islam/` `jesus`, `revelation`, `ultimate-authority`, `history`, `knowledge-possible`, `logic-binding`, `induction`, `evil`, `after-death` |
| Comparison | The other Islamic answers where *taḥrīf*, consensus, the Mahdi, Shi'a doctrine or Ibn Taymiyya recur (searched; no conflicts); `christianity/` `jesus`, `revelation`, `ultimate-authority`, `knowledge-possible`, `logic-binding`, `induction`, `evil`, `after-death`; `judaism/jesus` (Sanhedrin 43a) |
| Answers changed in review | 5: `islam/jesus`, `islam/revelation`, `islam/ultimate-authority`, `islam/evil`, `islam/induction` |
| Scope kept | No other lane edited. No pressure-question sweep (R5), thesis rewrite (R6) or process-note cleanup (R10). |

## Severity summary

| Severity | Count | Fixed |
|---|---|---|
| BLOCKER | 0 | — |
| IMPORTANT | 3 | 3 |
| MINOR | 16 | 16 |

## How the sources were checked

- **Arabic primaries.** The production session's cached Shāmila pages were used for reading. Cache fidelity was tested by re-fetching *Jawāb* 2:303 and 5:123 and the *Risāla* title page live from shamela.ws; the live pages matched the cache.
- **Passages re-read in Arabic:**
  - *Jawāb* 2:301–305, 354–360, 395–398, 418–442 and 5:122–126;
  - *Risāla* §§48–67, 112–121, 243–264 and 1309–1341;
  - *Darʾ* 1:3–7 and 145–148;
  - *Radd* pp. 250–253, 293, 297 and 300;
  - al-Bāqillānī pp. 33–36;
  - al-Rāzī on 4:78–79;
  - Ibn Kathīr on 3:78.
- **New in review:** Ibn Ḥajar, *Fatḥ al-Bārī* 13:523–525, read live on shamela.ws (book 1673, Salafiyya edition; the catalog card was read).
- **Qur'an.** Live from quran.com resource 85 (Abdel Haleem):
  - 2:75–79, 3:78, 4:46, 5:13–15, 5:41, 5:43–48, 5:68, 10:94;
  - 14:27, 26:80, 4:78–79, 23:99–100, 52:35.
- **Hadith.** Bukhari 7363, 1374, 1369 and 4699 (English and Arabic), live from the fawazahmed0 jsDelivr dataset. The dataset's book/hadith references (e.g. 1374 = Book 23, Hadith 126) match sunnah.com's scheme, so the numbering aligns.
- **Translations.**
  - Fyzee pp. 84–101, from the DLI OCR, with creed text and Fyzee's notes kept apart.
  - de Slane vol. 2, pp. 158–159 and 188.
  - Macdonald pp. 106–108.
- **Christian and historical sources.**
  - Belgic Confession Art. 7, live from crcna.org.
  - Codex Sinaiticus project pages (About, Date, Content), live.
  - Martin, Yale RLST 152, lecture 2, live.
  - ESV, live from esv.org: Mark 15:40–41, John 19:25–26, 1 Cor 1:23 and 1 Cor 15:3–4.

## Findings

### IMPORTANT

**R4R-01 · `islam/jesus` Christian response · historical argument overstated in places, under-argued in others.**
- *Original:*
  - "Paul, writing within about twenty-five years, knew Cephas and James."
  - "Mark and John name women followers, and John a disciple, who watched at the cross."
  - "Tacitus … independently places the execution under Pontius Pilate."
  - "Even the Talmud … presupposes that Jesus was executed."
  - "Codex Sinaiticus … already contains the whole New Testament."
  - "That evidence counts heavily against … late alteration."
- *Problems:*
  1. Paul's contact with Cephas and James was offered as if it were testimony to the execution. Neither man is presented as watching it, and the paragraph never said what Paul himself reports. That is the real early evidence: Christ crucified (1 Cor 1:23), and Christ's death as received tradition (1 Cor 15:3–4).
  2. Mark 15:40 has the women "looking on from a distance"; only John 19:25–26 places women and the beloved disciple "by the cross". These are the Gospels' own reports, which Ibn Taymiyya's account disputes, so they cannot simply be set against him as established eyewitness fact.
  3. "Independently" claims more than is known: Tacitus does not name his source. `christianity/jesus` already treats him more carefully.
  4. The Talmud passage is late and legendary. It should be used only as a later tradition that assumes an execution.
  5. Sinaiticus shows only that the text existed by the mid-fourth century. That answers alteration after Muhammad, not earlier alteration, and "late" was undefined.
- *Correction:*
  - The response now states Ibn Taymiyya's premise (four writers relaying a few onlookers' belief).
  - It sets against that premise Paul's own proclamation, dated by Martin L2 (letters begin c. 50).
  - It distinguishes Paul's contact with Cephas and James from witness of the execution, and summarises Mark and John accurately.
  - It says the Gospel reports are the ones in dispute, and that their eyewitness value is a historical judgement.
  - Tacitus is described as a hostile outsider whose source is unstated; the Talmud as a much later tradition that assumes Jesus' death; Sinaiticus as showing the account was in place before Muhammad.
  - The conclusion now separates five claims:
    1. that Jesus was crucified, and that his followers proclaimed it within living memory: strongly attested;
    2. that the account entered by later alteration: counted heavily against;
    3. what the Qur'an means by the Injīl: not settled by this evidence;
    4. that the first witnesses mistook whom they saw die: cannot be strictly refuted;
    5. that the Qur'an's denial is false: not claimed beyond the evidence. The classification stays a historical conflict with a disagreement over revelation behind it.
- *Files:* `src/content/answers/islam/jesus.mdx`.

**R4R-02 · `islam/jesus` Deep dive · the Ibn ʿAbbās "no word removed" report attributed without qualification.**
- *Original:* "Ibn ʿAbbas is reported as saying both that no one can remove a word from God's books, so the People of the Book distort them by misinterpretation, and that they changed what God wrote."
- *Problem:* The two reports are not of equal standing.
  - The "changed and wrote with their own hands" report (Bukhari 7363) is a full, chained hadith.
  - The "no one removes the wording" saying comes from an unchained chapter heading (Bukhari, Tawḥīd ch. 55). Ibn Kathīr cites it as Ibn ʿAbbās's.
  - Ibn Ḥajar has not found the gloss *yuḥarrifūna = yuzīlūna* connected to Ibn ʿAbbās by a sound route, and he notes a report from him to the contrary. He also reports Ibn al-Mulaqqin taking "no one removes…" as al-Bukhārī's own preferred view, which he calls almost explicit that the clause is al-Bukhārī's comment, though it may be Ibn ʿAbbās's (*Fatḥ al-Bārī* 13:523).
  - Ibn Kathīr's text also reads *yuḥarrifūna wa-yazīdūna* where al-Bukhārī has *yuḥarrifūna: yuzīlūna*.
- *Correction:*
  - The page now gives Bukhari 7363 as the sound report.
  - It gives Ibn Kathīr's attribution of the opposite view, and Ibn Ḥajar's caution about it.
  - New source `ibn-hajar-fath-al-bari`, registered with the passage read.
  - Ibn Kathīr's registry note is qualified.
- *Files:*
  - `islam/jesus.mdx`, including the scope line;
  - `sources.yaml` (new record; `ibn-kathir-tafsir` note).

**R4R-03 · Validation record · the built-site link check did not examine cross-page links.**
- *Original:* R4 production record: "92 pages, 5,769 links, 0 broken, 0 duplicate IDs".
- *Problem:* The scratchpad `linkcheck.mjs` takes the base path as a command-line argument and silently skips any link not starting with it.
  - Under Git Bash without `MSYS_NO_PATHCONV=1`, the argument `/worldviews-examined/` is rewritten into a Windows path, so every cross-page link is skipped.
  - Reproduced on the starting head:
    - without the flag: `{pages: 92, links: 5767, frags: 5767}`, so links equal fragments and only same-page `#` links were counted;
    - correctly invoked: `{pages: 92, links: 9761, frags: 8030, broken: 0}`.
  - R3 Review B's "5,649 links, 5,649 fragment checks" has the same signature. R3 production (9,529/7,831) and R3 Review A (9,610/7,911) were run correctly.
  - No page had stopped being built and no link was broken, but about 4,000 cross-page links had not been checked in R4's reported run.
- *Correction:*
  - Re-ran correctly at the start and end of the review.
  - Added `scripts/check-built-links.mjs`, which:
    - fixes the base path inside the script;
    - reports, rather than skips, any local link outside the base;
    - checks every answer file renders on a question page;
    - exits non-zero on any failure.
  - A dated correction note was added to the production record's Validation section.
- *Files:* `scripts/check-built-links.mjs`; `R4-ISLAM-SOURCES-FAIRNESS.md`.

### MINOR

| ID | Page / record | Original | Problem and evidence | Correction |
|---|---|---|---|---|
| R4R-04 | `islam/jesus` view | "some of the People of the Book twisted words … concealed … wrote things 'with their own hands'" | The twisting and writing verses concern some of the Jews in context (2:75–79; 4:46 "Some Jews"; 5:13 Children of Israel; 5:41). Concealment (5:15) addresses the People of the Book; forgetting (5:14) the Christians. | The view now summarizes ("distorting, concealing and forgetting") and the Deep dive carries the distinctions, now including 5:14. Citation widened to 2:75–79. |
| R4R-05 | `islam/jesus` view | "a small band of Jews"; "No evangelist or disciple saw the execution" | *Jawāb* 2:303 says *ṭāʾifa min al-yahūd*, "a party of Jews"; "small" is not in the text. Ibn Taymiyya says none of the four, none of the disciples, "nor even any of his followers" witnessed it, and calls mistaken disciples excused (2:302). | "a party of Jews"; "No evangelist, disciple or other follower"; "the disciples who believed their report were mistaken, not dishonest". |
| R4R-06 | `islam/jesus` view | "judged that the alteration was mostly of meaning and interpretation" | *Jawāb* 5:123 scopes the formula to what the People of the Book cite as contradicting Muhammad. | "where the earlier books as read contradict Muhammad, the fault lies mostly in their meaning…". |
| R4R-07 | `islam/jesus` Deep dive | "ranged from no change at all to wholesale alteration of the Gospels" | 2:420 reports some who make "most" of them altered, plus an extreme who denies them any sanctity. Ibn Taymiyya's own judgement ("little … more evident") was missing. | "to treating most of the Gospels as altered. He judged that little had been altered…". |
| R4R-08 | `islam/jesus` Deep dive | "Other verses assume that the Torah and the Gospel in their communities' hands still contain God's judgment" | Plain for 5:43, but Ibn Taymiyya reports scholars who read 5:47 as addressed to Christians before Muhammad, matching Ḥamza's reading *li-yaḥkuma* (*Jawāb* 2:424–425). The brief asked that 5:43–48 not be treated as self-evident. | "Other verses, read plainly, assume…; some classical scholars, however, read that command as addressed to Christians before Muhammad's mission". `ibn-taymiyya-jawab-sahih` note extended (2:423–425). |
| R4R-09 | `islam/revelation` view | "Twelver Shi'a Muslims … hold that the Qur'an in the community's hands is the complete Qur'an" | Generalized from one creed. Al-Ṣadūq does insist on it (Fyzee p. 85), but Fyzee's note (p. 85 n. 2) records Shi'a who held part of the Qur'an to be missing and kept with the hidden Imam. | Attributed to "the tenth-century creed of al-Saduq … though some Shi'a have held otherwise"; locator pp. 85–86. `saduq-shiite-creed-fyzee` note extended. |
| R4R-10 | `islam/revelation` view | "mostly one of meaning" cited to *Jawāb* 2:418–420 | The "mostly meaning, a little wording" formula is at 5:123. 2:418–420 gives the range and "little altered". | Locator "2:418–420; 5:123". |
| R4R-11 | `islam/ultimate-authority` view | "§§53–59, pp. 21–22" for the four kinds of *bayān*, including finding the qibla by the stars | The qibla example is §§60–67, pp. 22–24. | "§§53–67, pp. 21–24"; registry note extended. |
| R4R-12 | `islam/ultimate-authority` view | "Al-Shafi'i read the same phrase in 4:59 as the commanders the Prophet appointed" | *Risāla* §§260–261: "some scholars said… and this resembles what he said, God knows best". He adopts a reported reading. | "Al-Shafi'i accepted the reading…". |
| R4R-13 | `islam/ultimate-authority` view | "Ibn Taymiyya, who traced the rule through al-Razi back to al-Ghazali" | *Darʾ* 1:5: "a group preceded them to it, among them Abū Ḥāmid". | "who noted that al-Ghazali and others had used such a rule before al-Razi". |
| R4R-14 | `islam/ultimate-authority` Christian response | "whether the community's agreement, or … an infallible Imam, can be a sure guide alongside the revealed text" | "Alongside" frames al-Shāfiʿī's consensus as a rival source. In the *Risāla* (§§1309–1312) it binds as a witness to the Sunna. | "as a witness to it rather than a rival … whether any human authority can be an unerring guide to what revelation requires: for al-Shafi'i the agreement of the whole community, for Twelvers an Imam protected from error". |
| R4R-15 | `islam/ultimate-authority` view | Consensus and analogy explained in both the view and the Deep dive | Duplication. | View condensed to one sentence pointing to the Deep dive. |
| R4R-16 | `islam/evil` Deep dive | "He takes "all is from God" (4:78)…" | Quotation marks around wording that is not the registered translation; Abdel Haleem has "Both come from God." | Haleem's wording. |
| R4R-17 | `islam/evil` Deep dive | "His reading settles that God creates the act." | An authorial endorsement of the kind the brief excludes. | "On his reading God creates the act … and al-Razi's arguments do not by themselves settle [answerability]". |
| R4R-18 | `islam/induction` Deep dive; `ibn-taymiyya-radd-mantiqiyyin` note | "That fire burns in general is known by experience and habit" | *Radd* p. 300: the logicians have no knowledge of the proposition's universality, only experience and habit. | "rests only on experience and habit"; registry note matched. |
| R4R-19 | `thinkers.yaml` (`shafii`) | "Analogy and ijtihad … certain only in the outward" | The *Risāla* (§§1328–1332) contrasts certainty (*iḥāṭa*) with what is right "in the outward". | "right in the outward but not certain". |

## Checks that passed

- **Ibn Taymiyya, *Jawāb*** (each claim's status checked):
  - (1) Mostly meaning, a little wording: his own conclusion (5:123; 2:420 "this is more evident").
  - (2) Muslims do not claim every copy everywhere was altered: his own statement (2:418–419, 422).
  - (3) The Injīl is distinct from the four Gospels: stated at 2:420. It closes a sentence reporting what "many people say", but the same distinction underlies his own argument at 2:397: the Gospel in Christians' hands was neither written nor dictated by Christ.
  - (4) Two evangelists knew Jesus and two did not: 2:397. It appears inside "the argument of the majority", which he endorses ("the transmission of two, three or four is open to error").
  - (5) The crucifixion account was mistaken, not forged: his own position (2:302–303, 397). He allows elsewhere that verbal alteration, where it occurred, lay in narrative reports (2:424).
  - (6) The account goes back to a party of Jews: the deceived-majority view is reported as most people's, and the lying view as some *mutakallimūn*'s and Ibn Ḥazm's (2:303–304).
  - (7) Some honestly believed it: the disciples' error is excused (2:302).
  - (8) Unaltered text exposes altered passages: his own answer (2:442).
  - Also confirmed: 10:94 implies neither doubt nor asking (2:356–358); an objector must establish wording, meaning and translation (5:124–125).
  - **Independent corroboration:** Ibn Ḥajar (*Fatḥ al-Bārī* 13:524) classes Ibn Taymiyya's *Jawāb* as championing "alteration in a small part, most intact", the position the page attributes to him.
- **Al-Shāfiʿī, *Risāla*:**
  - §48: every case has guidance in the Book.
  - §§53–59: kinds of *bayān*.
  - §§252–257: *ḥikma* is the Sunna; nothing is obligatory except by the Book, then the Sunna.
  - §120: the Arabic is *jihat al-ʿilm al-khabar fī al-kitāb aw al-sunna aw al-ijmāʿ aw al-qiyās*; the project translation is exact.
  - §§1309–1312: consensus binds because the Sunna cannot escape the community as a whole, which does not agree against it or on error.
  - §1321: analogy where there is no Book, Sunna or consensus.
  - §1324: *humā ismān li-maʿnan wāḥid*, "two names for one meaning", exact.
  - §§1328–1334: *iḥāṭa* outward and inward only from a text or a Sunna transmitted by the many; analogy right in the outward; analogists sometimes differ.
  - Macdonald pp. 106–108 is quoted exactly ("must put its stamp on every rule"; four sources in his order). The page attributes the later weight of consensus to Macdonald's account of later Shāfiʿī books, not to al-Shāfiʿī. "My People will never agree in an error" is not attributed to al-Shāfiʿī.
- **Ibn Taymiyya, *Darʾ*:**
  - 1:4–5: al-Rāzī's universal rule ("reason is the root of transmission"; the text is reinterpreted or consigned to God).
  - 1:146–147: disputes referred to God and the Messenger (4:59); clear reason is never contradicted by authentic transmission; apparent conflicts come from fabricated reports or weak inferences.
  - The 1:147 typographical slip (*mujārāt/majālāt* for *maḥārāt/muḥālāt*) is real, so paraphrase there is correct.
  - The wider claim about the treatise as a whole stays attributed to SEP.
- **Ibn Taymiyya, *Radd*:**
  - p. 250: a proof is whatever entails; one premise or several.
  - p. 252: the syllogism gives only the form.
  - p. 252: "the reality in every proof is entailment".
  - p. 253: 52:35 as an innate, self-evident premise put as a rhetorical question.
  - p. 293: *wa-hādhā lā nizāʿ fīhi*, matching SEP's "This is not disputed".
  - p. 297: the "lean camel meat" proverb (*wa-li-hādhā yuqāl*); those who reason by *fiṭra* err less.
  - p. 300: *lā aʿlamu fī al-qaḍāyā al-ḥissiyya kulliyya lā yumkin naqḍuhā*. The page's "our translation" is accurate.
  - The two SEP-translation quotations are SEP's wording (checked in the cached SEP text).
  - The induction paragraph's earlier quotation-mark problem is fixed: "probable rather than certain" is SEP's reading and labelled so. The summary "more critical of the logicians' discipline, but not of reasoning" is faithful.
- **Twelver creed (Fyzee):**
  - p. 85: the Qur'an is what lies "between the two boards", no more.
  - p. 86: other revelation exists outside it, which the R4 draft correction handled rightly.
  - pp. 92–93: prophets and *awṣiyāʾ* are distinct categories.
  - pp. 95–96: the twelve Imams named; "proofs"; "present in the earth but invisible"; "in authority"; "interpreters of His revelations"; immune from sins and errors; their command is God's command.
  - p. 98: the Mahdi fills the earth with justice; Jesus "will descend … and pray behind him"; no other Qāʾim however long the occultation.
  - pp. 99–100: infallibility.
  - Fyzee's note comparing the twelfth Imam with the Sunni mahdi is not cited as creed.
- **Ibn Khaldun (de Slane):**
  - p. 158: "De tout temps, les musulmans…"; Jesus descends; the reports' authenticity contested.
  - p. 159: the collectors named.
  - p. 188: "qu'un bien petit nombre … à l'abri de la critique"; those who deny any Mahdi cite "Point de Mehdi, excepté Eïça".
  - The page does not say Sunnis reject the Mahdi, and it does not treat the reports as equally sound.
- **Al-Rāzī on 4:78–79:**
  - Necessary and possible: the dependence holds "whether angel, inanimate thing, animal's act or plant's attribute".
  - Al-Jubbāʾī's division.
  - "From yourself" read as *riʿāyat al-adab* (Abraham, 26:80), or as a question of denial.
  - The Muʿtazilī argument from God's wonder: "nothing but the appeal to praise and blame, which we have mentioned is countered by [God's] knowledge (*muʿāraḍa bi-l-ʿilm*)". The page's summary is accurate.
  - R3's parity paragraph on hidden wisdom is preserved.
- **Grave:**
  - Bukhari 1374: two angels seat and question the dead; the believer is shown the place in the fire exchanged for one in paradise; the hypocrite or unbeliever says "I do not know; I said what the people said" and is struck with iron hammers.
  - Bukhari 1369 and 4699: 14:27 applied to the answer in the grave; Shuʿba's addition "revealed concerning the punishment of the grave".
  - The page separates the barzakh verse (23:99–100), the hadith and al-Nasafī's creedal summary. The names Munkar and Nakīr are correctly left to the creed, since 1374 does not give them.
- **Al-Bāqillānī, pp. 33–36:**
  - Three aspects, attributed to "our colleagues and others": predictions (9:33, 3:12, 8:7); the unlettered Prophet's history (29:48); *naẓm* outside every genre, uniformly eloquent across length and subject.
  - `islam/revelation` classifies the first two as historical claims and the third as literary.
- **Qur'an citations.** Haleem's renderings are quoted exactly in the revised text: 5:14 "forgot some of what they were told to remember"; 5:47; 5:48; 10:94; 14:27; 26:80 "when I am ill"; 4:79 "from yourself"; 52:35.

## Required summary

### *Taḥrīf* and Jesus

- **Qur'anic texts.** The classes are now kept apart:
  - spoken twisting (3:78; 4:46);
  - distortion of words from their meaning (5:13, 41), which concerns Jews in context;
  - writing by hand and calling it God's (2:79);
  - concealment, addressed to the People of the Book (5:15);
  - forgetting, of Christians (5:14).
  - Against these stand the verses that assume earlier guidance is still present (5:43–47, 68), with the classical alternative reading of 5:47 noted; *muhaymin* (5:48); and 10:94, read with Ibn Taymiyya.
- **Doctrinal range.** Shown from:
  - Bukhari 7363 (alteration of the text);
  - the disputed Ibn ʿAbbās heading (meaning only);
  - al-Ṭabarī (additions to the book);
  - Ibn Kathīr (copies altered, revealed books preserved);
  - Ibn Taymiyya's report of the spread of views and his own "little altered" judgement.
  - Ibn Ḥajar's four-way classification confirms that range.
- **Ibn Taymiyya.** Accurate after R4R-05 to -08; the status of each claim is recorded above.
- **Historical evidence.** Reworked under R4R-01. In brief:
  - *Paul:* proclamation dated c. 50 onward; contact with Cephas and James, who are not said to have seen the execution.
  - *Mark and John:* reports, not proofs. Mark's women watch "from a distance"; the beloved disciple is not identified with the evangelist.
  - *Tacitus:* a valuable hostile witness whose source is unknown, so "independent" is not claimed.
  - *Talmud:* late and legendary; used only as a tradition that assumes an execution.
  - *Mark's date:* c. 70, Martin L2. It places a narrative within about forty years; it does not by itself make the narrative eyewitness.
  - *Codex Sinaiticus:* the text was in place by the mid-fourth century, which answers alteration after Muhammad only. Earlier alteration is answered by Paul.
- **Christian critique.** It credits *taḥrīf* with coherence and engages Ibn Taymiyya's actual explanation, and it states what cannot be refuted (that the first witnesses were deceived).
  - The classification stays a historical conflict with a disagreement over revelation behind it.
  - R4 had dropped the pre-R4 point that the substitution stories are late and mutually conflicting. That is acceptable: Ibn Taymiyya's account does not depend on them, and al-Rāzī's "mutually conflicting" stays in the view and Deep dive.
- **Length.** 1,766 → 1,932 words. **Some compression warranted**, and applied: the view's Qur'an list was moved to the Deep dive and al-Ṭabarī's preferences condensed. What remains of the growth is the historical qualification the brief required. It is now the longest answer, 161 words above `christianity/guilt`. A further trim of the pre-R4 commentator material is possible in R6.

### Al-Shāfiʿī and Islamic authority

- **Primary text and attribution.** The four routes are named together at §120, in the order Book/Sunna, consensus, analogy. The page correctly says he argues for each rather than stating the later textbook formula, and it keeps Macdonald's different order and his account of later Shāfiʿī practice distinct.
- **Consensus.** Answerable to the Sunna (§§1309–1312); presented as a witness, not a rival (R4R-14).
- **Analogy.** Subordinate (§1321); equated with *ijtihād* (§1324); right in the outward, not certain (§§1328–1334).
- **The 4:59 reading.** Adopted from others (R4R-12).
- **Twelver comparison.** Fair: an infallible Imam is distinguished from fallible Sunni legal reasoning. The Belgic Art. 7 quotations are exact.
- **Length.** 1,458 → 1,470 words. **Some compression warranted**, and applied: the view's repetition of the Deep dive's consensus and analogy material was cut, offsetting the corrected Christian response.

### Ibn Taymiyya and reason

- ***Darʾ*.** Accurate for 1:3–7 and 145–148. Only volume 1 was read, and the treatise-wide claim stays with SEP.
- ***Radd*.** Accurate (one MINOR, R4R-18). Pagination agrees with SEP's Bombay figures at p. 293. SEP's p. 296 "lean camel meat" sits at p. 297 in the Shāmila text; the page cites "296–297".
- **SEP dependence.** Disclosed. LNC/LEM, mass transmission, moral *fiṭra* and created causal powers remain SEP-mediated and are labelled so.
- **Fidelity.** The three "our translation" phrases (§120; "two names for one meaning"; *Radd* p. 300) were checked against the Arabic.
- **Knowledge & Truth consistency.** The pages keep these figures distinct:
  - al-Ghazālī's acceptance of logic and his occasionalism (presented as one Sunni view);
  - al-Māturīdī's wider scope for reason;
  - Ibn Taymiyya's critique of the logicians, not of reasoning, and his *fiṭra*;
  - al-Nasafī's creed on the three sources of knowledge.

### Twelver Shi'a

- **Al-Ṣadūq and the Imamate.** Accurate. "Twelver" is used throughout, never "Shi'a" for all.
- **Qur'an.** Completeness of the received text is al-Ṣadūq's position; dissent is now noted (R4R-09). The Qur'an is distinguished from other revelation.
- **Occultation.** Accurate, including Jesus praying behind the Mahdi (Fyzee p. 98).
- **Sunni comparison.** Accurate and proportionate: three placements only.

### Secondary corrections

- **Al-Rāzī:** accurate; two MINOR wording fixes (R4R-16, -17).
- **The grave:** accurate.
- **Al-Bāqillānī:** accurate.

### Technical integrity

- **Source registry.**
  - 209 → 210 records: `ibn-hajar-fath-al-bari` added.
  - The eight R4 records were checked for author, edition, editor or translator, date, locator system and the passages actually inspected. None claims more than was read: the *Darʾ* note says "Only vol. 1"; the *Risāla* note names its § ranges.
  - Four notes were extended or corrected: `ibn-kathir-tafsir`, `ibn-taymiyya-radd-mantiqiyyin`, `shafii-risala-shakir`, `saduq-shiite-creed-fyzee`, plus `ibn-taymiyya-jawab-sahih` (2:423–425).
- **Thinker profiles.**
  - `shafii` (one key idea corrected) and `saduq` ("one of the earliest Shiʿite creeds extant" is Fyzee's phrase) are accurate and tied to content actually used.
  - `ibn-taymiyya` and `razi` updates are accurate.
- **Citations.**
  - New: *Fatḥ al-Bārī* 13:523; *Jawāb* 2:424–425; Martin L2 and 1 Cor 1:23, 15:3–4 in `jesus`.
  - All resolve. The validator reports 0 unknown and 0 unchecked sources.
- **ESV.**
  - Only locator citations were added (1 Cor 1:23; 15:3–4, read at esv.org in this review and recorded in the `bible-esv` note). Paul's words are paraphrased without quotation marks, so no ESV quotation was added.
  - Inventory: ESV candidates 106, unledgered 4, orphan 1, unchanged and pre-existing. `esv-candidates.json` and the ledger are unchanged.
  - **ESV ledger: no change.**
- **Build and links.**
  - 90 → 92 pages: the two new thinker pages, `/thinkers/al-shafii/` and `/thinkers/al-shaykh-al-saduq/`.
  - Link-count discrepancy: explained under R4R-03; the counting method was broken, not the site.
  - Correct counts:
    - starting head: 9,761 links (3,994 cross-page), 8,030 fragments;
    - final: 9,768 links (3,995 cross-page), 8,037 fragments, 2,586 external not fetched, 0 outside base, 0 broken, 0 duplicate IDs;
    - 28 question pages, 52 thinker pages and 6 worldview pages; all 168 answers rendered.

## Comparative fairness and classifications

| Objection | Muslim answer presented first | Christian response after review | Classification |
|---|---|---|---|
| *Taḥrīf* and the Gospels | Yes: the range of *taḥrīf* positions and Ibn Taymiyya's error account | Engages his premise; separates what the evidence settles from what it cannot | Historical conflict over a disagreement about revelation |
| Qur'an and Sunna | Yes: the *Risāla* grounds the Sunna in the Qur'an | Parallel to Reformed self-attestation | Theological |
| *Ijmāʿ* | Yes: answerable to the Sunna | Witness, not rival; the difference is unerring guidance | Theological |
| Twelver Imamate | Yes: successors, not prophets | Same difference stated precisely | Theological |
| Rational demonstration | Al-Ghazālī's rule and Ibn Taymiyya's no-conflict thesis | Pressure question only | Philosophical |
| Divine decree | Al-Rāzī's reading and replies | R3 parity unchanged | Shared difficulty, not a contradiction |
| The grave | Hadith and creed distinguished from the Qur'an | No Christian critique added | — |
| *Iʿjāz* | Al-Bāqillānī's three aspects | Two are classed as historical, one as literary | Disagreement over revelation; explanatory question |

The production claim that "No Christian criticism became stronger; two became more qualified" was tested.
- None became more aggressive.
- Three, not two, became more qualified: `jesus`, `ultimate-authority` and `revelation`. `revelation` dropped "confirming the Gospel while denying its central event" and grants coherence to *taḥrīf*.
- In review, `jesus` gained a legitimate strengthening (Paul's own proclamation) together with qualifications.
- No R1–R3 correction was undone. This covers atonement, providence parity, historical accountability, rival positions stated first, and natural prose.

## Limitations

- **Shāmila transcriptions.** No print scan was compared.
  - An archive.org upload of the Dār al-ʿĀṣima *Jawāb* exists (`20220723_20220723_1014`), but it is an uploader's copy of an in-copyright edition with no rights statement, so it was not used.
  - A 1964 al-Madanī print's OCR (`AAlexandrina-086458`) was too noisy to align.
  - Page alignment therefore rests on the Shāmila catalog cards. The live re-fetch shows only that the cache equals Shāmila, not that Shāmila equals print.
- **Fyzee.** The scan's "Out_of_copyright" marking is the Digital Library of India's own. Only short phrases are quoted.
- **Not consulted:** Michel's English *Jawāb*, Khadduri's *Risāla*, al-Mufīd and later Twelver theology, and al-Rummānī and al-Khaṭṭābī.
- **R3 Review B.** Its link-count line is affected by the same fault as R4R-03. That record was not edited; this note supersedes it.

## Validation

| Command | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 52 thinkers, **210 sources**, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing) |
| `npm run build` | 92 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 129,135 words, 2,721 citations; ESV candidates 106, unledgered 4, orphan 1. `research/final-audit/data/` regenerated and committed. |
| `node scripts/check-built-links.mjs` | 92 pages; 168/168 answers rendered; 9,768 links (3,995 cross-page); 8,037 fragments; 0 outside base; **0 broken; 0 duplicate IDs** |

### Word counts (authored words, audit inventory)

| Answer | Base | R4 production | After review |
|---|---|---|---|
| islam/jesus | 1,141 | 1,766 | 1,932 |
| islam/ultimate-authority | 873 | 1,458 | 1,470 |
| islam/revelation | 955 | 1,233 | 1,244 |
| islam/evil | 953 | 1,141 | 1,149 |
| islam/history | 668 | 852 | 852 |
| islam/after-death | 683 | 797 | 797 |
| islam/logic-binding | 667 | 715 | 715 |
| islam/knowledge-possible | 870 | 906 | 906 |
| islam/induction | 736 | 766 | 766 |
| **Islam lane** | 20,344 | 22,432 | 22,629 |
| **Corpus** | 126,850 | 128,938 | 129,135 |

## Recommendation

All BLOCKER and IMPORTANT findings are resolved and the complete validation suite passes. **MERGE.** The user merges. R5–R12 were not begun.
