# C2 independent review: Jewish theological and eschatological completeness

2026-10-12. Independent substantive review of PR #23 (`c2-jewish-theological-completeness`).

## 1. Starting point

- **Starting PR head:** `d71856399f9c4b0a664570b5205abb23984ed623`. It matched `origin` after `git fetch`, and the working tree was clean.
- **Base:** `main` @ `7909cc7640f0e8a65f339644f1f43ee78b7e4379`.
- **Commits confirmed:** `69c28a2` (sources), `3aaf555` (resurrection and final end), `b506cdf` (modern movements), `29bc43f` (Soloveitchik, Kabbalah, post-Holocaust), `d718563` (record and trimming). There were no intervening commits.

## 2. Session independence

The review ran in one fresh top-level Claude Opus 5.5 session, separate from the C2 production session (2026-10-09), with no subagents. The production record's claims were treated as hypotheses. Every primary source below was obtained and read again in this session. No production scratch files were reused. C3 and C4 were not begun.

## 3. Method and scope

**Governing documents read:**

- `docs/METHODOLOGY.md`;
- the C2 production record;
- the JUD findings in `research/final-audit/JUDAISM.md`;
- earlier review records, through the memory index, for R3, R5, R6 and C1 standards.

**Sources obtained independently:**

| Source | Route |
|---|---|
| Saadia, Treatise VI, VII and IX (Ibn Tibbon Hebrew, Leipzig 1864) | Sefaria API |
| *Sha'ar ha-Gemul*, all 87 paragraphs; ¶64 and ¶¶69–87 read in full | Sefaria API |
| Maimonides, *Treatise on Resurrection* (Hebrew) | Sefaria API |
| Abelson, Introduction to Helek | Wikisource text and the Wikimedia Commons scan, pages located by running heads |
| Metsudah Amidah and *Ani ma'amin* | Sefaria API |
| Sanhedrin 90a and 91b; Berakhot 17a; Mishnah Sanhedrin 10:1 and Berakhot 5:2 | Sefaria API (Davidson English; Hebrew for Berakhot 5:2) |
| *Emet Ve-Emunah* | BJPA PDF, printed pp. 19–31 extracted |
| CCAR 1885, 1976 and 1999 | ccarnet.org |
| Hirsch, *Nineteen Letters* | archive.org text of the 1899 scan |
| Fackenheim, *Commentary* (1968) | commentary.org |
| Soloveitchik, *Lonely Man of Faith* | *Tradition* PDF page images: pp. 10, 11, 17 and 51 viewed |
| *Jewish Encyclopedia*, "Sefirot, The Ten" | jewishencyclopedia.com |

The NLI catalogue records linked from Sefaria returned 403 and were not opened. Bot protection was not bypassed.

**Coverage:**

- The seven changed answers were read in full, against `7909cc7`.
- Seven related answers were read in full: `death`, `history`, `jesus`, `self-salvation`, `guilt`, `ultimate-personal`, `evil`.
- `christianity/after-death` was read for WCF 32. The Jewish references in `christianity/revelation`, `final-end`, `ultimate-authority`, `what-is-man` and `suffering` were checked by search.
- `great-and-terrible` and `knowledge-possible` were not reread. No C2 claim depended on them.

## 4. Findings by severity

**0 BLOCKER, 2 IMPORTANT, 10 MINOR. All are fixed.**

| ID | Sev. | Answer | Finding | Fix |
|---|---|---|---|---|
| I-1 | IMPORTANT | one-and-many | The Kabbalah Deep Dive ended with an unsupported claim ("In none of these accounts are the sefirot further gods… the dispute is how one God's self-manifestation relates to his hidden infinity"). It also left out the entry's other extreme, the *Ma'arekhet* identification of the sefirot with the En Sof. As written, it compressed contested doctrines into one synthesis that read as interchangeable with Maimonidean unity. | Names Azriel and Recanati (wholly distinct) and the school that identified the sefirot with the En Sof in their totality. The closing sentence is replaced by a supported one: the range of answers shows this is not Maimonides' unity in another vocabulary. |
| I-2 | IMPORTANT | revelation | The visible text said the second and third Conservative views and the Reform statements "do not depend on the national-witness argument". That is our inference, and it misleads: *Emet Ve-Emunah* p. 20 still calls Sinai "the single greatest event in the history of God's revelation". | Now states that quotation, and that these views do not hold the Torah's words were dictated at Sinai. The national-witness argument is described as defending the classical claim. |
| M-1 | MINOR | after-death | Saadia VII.6 on Deuteronomy 32:39 was rendered as "the one who wounded is the one who heals". Saadia's argument concerns the patient: "as the healed is the one who was wounded, so the revived is the one who died" (כאשר הנרפא הוא אשר מחץ כן המחויה הוא אשר המית). | Corrected. |
| M-2 | MINOR | ultimate-authority | Dropped qualifier. *Emet Ve-Emunah* p. 21 says "For many Conservative Jews" halakha is indispensable "first and foremost because it is what the Jewish community understands God's will to be". The indispensability itself is general (p. 24: "All of us"). | The text now says "for many of its members"; the locator is now pp. 21–24 (the burden of proof is on p. 23). |
| M-3 | MINOR | final-end | Two problems with ¶87 and the view: (a) ¶87 says the difference with the Spanish authors is *only* one of names, but the page said "partly"; (b) the view said what Nachmanides rejects is only the body falling away, although ¶81 also rejects Maimonides' use of "World to Come" for the world of souls ("שנה עלינו סדרי הקבלה"). | "Only in names"; the view adds the terminological rejection; the locator is ¶¶80–81, 87. |
| M-4 | MINOR | what-is-man | "Two types within humanity … They are not two kinds of people" was not Soloveitchik's wording. He says "two Adams, two men … two types" (p. 10), and halakha unites the two "into one community" (p. 51), not "one life". | Now "not as rival sources but as 'two types'"; the person of faith lives in both; "one community". |
| M-5 | MINOR | after-death | PQ1 asked what justifies Maimonides' denial of a bodily share in final reward. It bypassed his own answer: resurrection is itself "the reward of the righteous only" (Helek p. 42), and the final good is intellectual. PQ2 (accountability with body and soul distinguished) was now answered on the page by Sanhedrin 91b and Saadia IX.5. | PQ1 now engages his answer. PQ2 now asks the open question of personal identity on Maimonides' account. |
| M-6 | MINOR | after-death | The Christian response called the Reformed sequence "close to Nachmanides'" without qualification. "There is no such difference to press" read more broadly than intended. | Adds "though without his this-worldly messianic age before the resurrection"; scoped to "on that point". |
| M-7 | MINOR | after-death | The *Ani ma'amin* no. 13 paraphrase in quotation marks was loose. The Hebrew says שתהיה תחיית המתים בעת שיעלה רצון. | "that there will be a resurrection of the dead at the time the Creator wills". |
| M-8 | MINOR | ultimate-authority | Pittsburgh art. 3 also keeps "such ceremonies as elevate and sanctify our lives". The Reform sentences read as stacked quotations. | Clause added; framed as "its statements show a development". |
| M-9 | MINOR | after-death | Process phrasing in the Deep Dive: "the text used here is Judah ibn Tibbon's Hebrew translation". | "Judah ibn Tibbon's medieval Hebrew translation renders one of them." |
| M-10 | MINOR | registry | Three registry notes needed correcting: (a) the *Treatise on Resurrection* is "undivided" — in fact 12 Sefaria segments, the body in segment 2; (b) the `siddur-metsudah-hebrew` note carried the loose translation and gave no placement; (c) the `emet-ve-emunah-1988` note omitted "for many". | Notes corrected. |

No other changes were made. Correct material was left alone.

## 5. Changed answers reviewed in full

| Answer | Doctrinal/historical accuracy | Source verification | Tradition/movement attribution | Christian fairness | Editorial length | Verdict and fixes |
|---|---|---|---|---|---|---|
| after-death | Accurate. The three accounts are correctly distinguished. | All locators verified (Saadia VII.1–8, IX.5; ¶¶64, 78, 87; Helek pp. 42, 56; Treatise; Amidah; Berakhot 5:2; Sanhedrin 10:1, 91b; Pittsburgh art. 7; EVE pp. 29–30) | Good; Maimonides never presented as denying resurrection | Good after M-6 | Visible 665→700 (audit-script count); justified, since JUD-01 was IMPORTANT | MERGE; M-1, M-5, M-6, M-7, M-9 |
| final-end | Accurate | ¶¶64, 69, 73, 75, 77, 78, 80–81, 84, 87; Saadia IX.5–6, VII.8; Berakhot 17a; Sanhedrin 90a | Good after M-3 | Good: the embodiment difference is scoped to Maimonides; the decisive claim (Christ) is stated as disputed | Visible 635→648; justified | MERGE; M-3 |
| ultimate-authority | Accurate | Helek pp. 53–54; Hirsch L. 17 p. 171; EVE pp. 21–24; CCAR 1885 art. 3, 1976 §4, 1999 Torah | Good after M-2 and M-8; dated; no strictness scale | Unchanged; aimed at the classical court | Visible 788→813; moderate density; length justified (§11) | MERGE; M-2, M-8 |
| revelation | Accurate after I-2 | Helek p. 53 ("like a scribe writing from dictation", verbatim); LMF p. 10; EVE pp. 19–20; CCAR 1999 | Good | Unchanged; a single evidential standard is preserved by the Deep Dive sentence | Visible 750→757; justified | MERGE; I-2 |
| what-is-man | Accurate after M-4 | LMF pp. 10, 11, 17, 51 viewed; Saadia IX.5; ¶78 | Soloveitchik scoped as his own interpretation (p. 10) | Unchanged | +4 | MERGE; M-4 |
| one-and-many | Accurate after I-1 | JE vol. 11 pp. 154–155 | Kabbalah kept distinct from Ḥabad and from Maimonides | Unchanged | Deep Dive +18 | MERGE; I-1 |
| suffering | Accurate | Fackenheim §II (every quotation verbatim); EVE p. 26 | Fackenheim's own argument, explicitly "not a single post-Holocaust doctrine" | The unchanged Christian response remains accurate ("classical rabbinic sources") | Deep Dive only | MERGE; no change |

## 6. Related answers reviewed

`death`, `history`, `jesus`, `self-salvation`, `guilt`, `ultimate-personal` and `evil` were read in full. All seven are consistent with C2, and none was changed. R5's `ultimate-personal` PQ1 (Halevi's address) is intact.

## 7. Saadia, Treatise VII

The text is Ibn Tibbon's Hebrew (Sefaria version "Emunot we-Deot; Leipzig, 1864"). Sefaria divides Treatise VII into 8 chapters. Chapter 1 has two segments: a header and the exordium-plus-nature section.

| Ch. | Verified content |
|---|---|
| VII.1 | The four sources are nature, reason, Scripture and tradition (הטבע והשכל והכתוב והקבלה). Resurrection is "יותר קל ויותר קרוב" than creation from nothing. No created thing can annihilate a body. Parts of an eaten person's body are kept unmixed "לעת הפקידה". |
| VII.2 | The plain sense stands unless one of four things compels otherwise: sense, reason, another verse, or tradition. |
| VII.3 | Job 14:12 and similar texts state human inability, not God's refusal. |
| VII.4 | Ezekiel 37 and Isaiah 26:19 are cited. The resurrection is for Israel only and is in this world. Each person raised knows "כי הוא אשר היה חי, והוא אשר מת, והוא בעצמו אשר חיה". Daniel 12:2 concerns this world, and "many" singles out Israel. |
| VII.5 | Allegorizing resurrection would license allegorizing the commandments, creation and the miracles. |
| VII.6 | Deuteronomy 32:39: "the revived is the one who died" (see M-1). |
| VII.7 | Tradition. Saadia uses Sanhedrin 90a's measure-for-measure as "will not live in the days of the Messiah". |
| VII.8 | Q1: "every righteous person and penitent" of the nation is raised at the redemption. Q2: they will not die again but are transferred "מימות המשיח אל נעימות העולם הבא". Q6: they eat, drink and possibly marry. Q7: the transition is likened to Moses on Sinai. |

**On the chronology.** Saadia teaches *explicitly* that the raised never die again and pass into the World to Come (Q2). This is his own statement, not a later synthesis.

**One nuance not on the page.** In Q10 Saadia inclines to the view that those *alive* at the redemption die after long lives (Isaiah 65:20). The page does not claim otherwise.

## 8. Saadia, Treatise IX

| Ch. | Verified content |
|---|---|
| IX.5 | Opens: "כבר בארתי ופרשתי שהגמול והענש לגוף ולנפש יחד, מפני שהם פעל אחד". So "because they acted as one" is Saadia's *explicit* reason, stated as already established. Reward and punishment are one created subtle substance, light to the righteous and fire to the wicked. The body is sustained without food, as Moses lived by the created light on his face. |
| IX.6 | The rewarded are "אדם גופים ונפשות", so God creates a new heaven and earth, a "place and enclosure" without food or fields. Isaiah 66:22 refers to the World to Come; Isaiah 65:17 to the redemption. |

The page does not generalize Saadia to all medieval authorities.

## 9. Saadia: recension and Hebrew provenance

Independent search confirms the following:

- The Judeo-Arabic Treatise VII survives in two significantly different forms, the Oxford and Leningrad recensions.
- Landauer (1880) printed the Oxford version. Bacher (1896) published the Leningrad ("Petersburg") version.
- Rosenblatt's translation includes "the first translation into a modern language of the variant of the seventh treatise".

Which recension Ibn Tibbon renders was **not independently confirmed** in this review. The registry claims only that it "represents one", which is true, and does not name which. The public text now says that Ibn Tibbon's Hebrew "renders one of them". All English is paraphrase of the Hebrew, and nothing is presented as verified Arabic wording.

## 10. Nachmanides, *Sha'ar ha-Gemul*

**Attribution and segmentation**

- The text is the final gate of *Torat ha-Adam* (Sefaria ref `Torat HaAdam, The Gate of Recompense`, 87 paragraphs).
- The version title is "Mossad Harav Kook, Jerusalem 1963", with NLI record 990017767010205171. NLI returned 403, so the record was not opened.
- The edition is plausibly Chavel's *Kitvei Ramban*, but that is not confirmed. The registry correctly does not claim it, and correctly presents the Sefaria metadata as Sefaria's.
- The ¶ numbers cited match the segment content.
- Sefaria's only English version of *Torat HaAdam* (Weingarten) was not used. All page English is the project's paraphrase.

**Paragraph findings**

| ¶ | Verified content |
|---|---|
| 64 | There are two names, Gan Eden and the World to Come, besides the goods of this world. The World to Come is "העיקר הגדול". Gan Eden is the reward "אחרי המות מיד", as Gehenna is the punishment. *Nuance:* ¶64 lists "ימות המשיח לחיים ותחיית המתים שבאותו זמן" among this-world goods, while ¶78 places the judgment and the resurrection "בסופן" (at the end of the messianic days). The page follows ¶78, Nachmanides' own summary. This is accurate. |
| 69–73 | Sanhedrin 90a's "measure for measure" shows the World to Come is "עולם התחיה", not "עולם הנשמות". It is renewed "לאחר ימות המשיח ותחיית המתים" (¶73). Beit Hillel: formation in the World to Come begins with skin, flesh, sinews and bones. |
| 75–77 | Berakhot 17a describes "אנשי התחיה בגוף ובנפש". The body subsists like the soul through the radiance, as Moses on the mountain did; Elijah's body was never separated. ¶76: the raised "אינן חוזרין לעפרם". ¶77 answers the purposeless-body objection: the Creator wills the body's continuance; the body subsists as the soul does, in union with supernal knowledge; Moses' face shone. |
| 78 | Summary: souls in Gan Eden; then the messianic days, which belong to this world; at their end the judgment and the resurrection, "השכר הכולל הגוף והנפש", "תקות כל מקוה להקב"ה"; this is the World to Come, where the soul cleaves to supernal knowledge more than in Gan Eden, "לעד ולנצח נצחים". |
| 80 | He praises Maimonides on the soul's knowledge of God: "והם דברים טהורים". |
| 81–86 | Maimonides "שנה עלינו סדרי הקבלה": he made the World to Come the bodiless world of souls and placed it immediately after death. Nachmanides reads him as holding that the resurrected later die, the Messiah and his generation included (¶84). |
| 87 | With the Spanish authors (Ibn Gabirol), "אין בינינו רק בשינוי השמות". Saadia's Daniel commentary agrees with Nachmanides' usage. "All agree" on the resurrection and on the permanence of that time, except Maimonides, who limits it. Nachmanides keeps "אנשי התחיה לעדי עד". |

**Chronology** (verified): intermediate state of souls (Gan Eden/Gehenna); the messianic age in this world; at its end the judgment and resurrection; the everlasting embodied World to Come.

**The differences with Maimonides** are both terminological (¶¶81, 84) and substantive: the permanence of the raised body (¶87). The page now states both (M-3).

## 11. Maimonides: Helek and the thirteenth principle

**Source.** Abelson, "Maimonides on the Jewish Creed", *JQR* 19 (October 1906), pp. 24–58.

- The scan's first page carries running head 24, and its title is "MAIMONIDES ON THE JEWISH CREED".
- Pages were located by running head (PDF page n = journal page n + 23).
- The translation is from Holzer's 1901 Arabic–Hebrew edition (Wikisource header). It is public domain.

| Page | Verified content |
|---|---|
| 42 | "The Resurrection of the Dead is one of the cardinal doctrines of the Law of Moses. He who does not believe in this has no religion…" and "it is the reward of the righteous only"; "man is bound to die and become dissolved". The statement concerns *physical* resurrection. The World to Come, "the final goal", is treated separately (pp. 43–44) as the intellect's survival. |
| 53–54 | The eighth principle. The whole Torah "is all of divine origin"; "Moses was like a scribe writing from dictation" (p. 53, verbatim); and on p. 54, "The interpretation of traditional law is in like manner of divine origin". So the principle itself includes the transmitted interpretation. The authority page's paraphrase is accurate and does not conflate two doctrines. |
| 56 | The thirteenth principle: "The resurrection of the dead. We have already explained this." This is the complete wording in this translation. |

**The thirteenth principle versus *Ani ma'amin*.**

- The Metsudah Hebrew of no. 13 reads אני מאמין … שתהיה תחיית המתים בעת שיעלה רצון מאת הבורא. Sefaria places it after the weekday morning service ("Post Service, Thirteen Principles").
- The page calls it "a separate liturgical formula, not his wording". This is correct, and the translation has been tightened (M-7).

## 12. Maimonides, *Treatise on Resurrection*

**Source.** Sefaria's version title is "Kobetz Teshuvot HaRambam, 1859"; the NLI record was not opened, and the editor is not confirmed. The text opens with Samuel ibn Tibbon's statement as translator.

| Claim | Status |
|---|---|
| The occasion: a student in Damascus denied resurrection by citing Maimonides; a letter from Yemen in 1500 Seleucid era reported the same; the treatise is dated 1502 SE (c. 1191) | ✔ |
| "תחית המתים פנה התורה והוא שוב הנפש לגוף ולא יפורש זה" | ✔ |
| Denying that the soul returns to the body leads to "הכחשת הנפלאות", and denying the miracle is "כפירה בעיקר ויציאה מן הדת" | ✔ |
| Those raised "יאכלו וישתו וישגלו ויולידו וימותו אחרי חיים ארוכים מאד"; "החיים שאין מות אחריהם הוא חיי העה"ב אחר שאין גוף בהם" | ✔. The treatise itself states the eventual death, not only the *Mishneh Torah*. |
| Daniel 12:2 is "זכרון שא"א לפרשו" | ✔ |

The descriptive locators are retained. No section numbers were invented.

## 13. Amidah and Mishnah

| Text | Verified content |
|---|---|
| Amidah, second blessing (Metsudah, Ashkenazi weekday) | מחיה מתים ("revives the dead"); ומקיים אמונתו לישני עפר ("keeps faith with those who sleep in the dust"); closing מחיה המתים. The English is marked as our translation, and the page claims no single rite for all Jews. |
| Mishnah Berakhot 5:2 | Rain is mentioned "בתחיית המתים", so the second blessing is named by its theme. |
| Mishnah Sanhedrin 10:1 | Excludes one who says there is no resurrection of the dead from the Torah. |
| Sanhedrin 90a | The baraita gives "measure for measure", which Nachmanides uses (¶69) and Saadia also uses (VII.7). |
| Sanhedrin 91b | The lame-and-blind guards: the owner judges them together. |
| Berakhot 17a | Rav: the World to Come has no eating or drinking; the righteous enjoy the Shekhinah's radiance. Nachmanides applies this to the raised (¶75) and Maimonides to souls. The page attributes each reading to its interpreter. |

## 14. Comparison of the three accounts

| | Saadia | Nachmanides | Maimonides |
|---|---|---|---|
| **Intermediate state** | Not developed in VII/IX. Treatise VI on the soul's departure lies outside C2 and is not claimed on the page. | Gan Eden or Gehenna for souls immediately after death (¶64) | The soul's survival; he calls this "World to Come" (so ¶81 reads *Teshuvah* 8) |
| **Messianic events** | The redemption in this world (VII.4) | The messianic days in this world (¶78) | The messianic age in this world (Helek; *Teshuvah* 9:2) |
| **Resurrection** | At the redemption; Israel's righteous and penitent (VII.4, VII.8 Q1) | At the end of the messianic days, with the judgment (¶78) | A real return of soul to body, for the righteous only (Helek p. 42; Treatise) |
| **Final reward** | World to Come: a new heaven and earth for body and soul; created light (IX.5–6) | World to Come: everlasting, body and soul, the soul cleaving more fully to knowledge of God (¶78) | World to Come: bodiless, the intellect's knowledge of God (Helek pp. 43–44; *Teshuvah* 8) |
| **Does bodily life end again?** | No (VII.8 Q2) | No (¶¶76, 87) | Yes: the raised die after long lives (Treatise) |

All three affirm bodily resurrection. They differ over:

- **Timing:** Saadia places it within the redemption; Nachmanides after the messianic days.
- **Who is raised:** for Saadia at the redemption, Israel's righteous; for Maimonides, the righteous.
- **Terminology:** what "World to Come" names.
- **Permanence:** whether the body shares the final state.

`final-end`'s Deep Dive ("Three sequences, one term") states the timing and terminology, and `after-death` states who is raised for Saadia. The pages' summary claim, "all three affirm the resurrection; what they dispute is whether the body shares in final blessedness", names the central dispute without denying the others.

## 15. `after-death`

The page distinguishes:

- judgment (Avot 4:22; Sanhedrin 91b);
- the soul's immediate state (Nachmanides ¶64);
- bodily resurrection;
- the final World to Come;
- the three medieval accounts.

Resurrection is presented positively in the visible text, including in prayer and creed.

**PQ1, original.** It was a real tension, but phrased as if Maimonides had no answer. His best reply has two parts:

- The body *is* rewarded, in the resurrection itself, "the reward of the righteous only".
- The final good is a knowledge the body cannot share, because the body exists for nourishment and reproduction (his argument, quoted by Nachmanides ¶83).

**PQ1, revised.** It now asks whether that finite reward gives the body its due. That is a tension, not a contradiction.

**PQ2.** The original was answered on the page (Sanhedrin 91b; Saadia IX.5). It is replaced by the open question of personal identity for Maimonides' surviving soul.

**Lede.** Retained at 240 characters (the schema limit; R6R-M9). Still accurate.

## 16. `final-end`

**Lede (222 characters).** "The final good is life with God in the World to Come, beyond the messianic age. Maimonides sees it as the soul's incorporeal knowledge of God; Saadia and Nachmanides give the raised body a share in that life with the soul."

- **Verdict: accurate.**
- "Beyond the messianic age" holds for all three as an ordering of value. For Saadia and Nachmanides it also holds as an ordering in time.
- The lede does not erase the distinction: the second sentence states it.
- It was not changed.

**Pressure questions.**

- PQ1 engages Nachmanides' positive reason (¶77: the Creator wills to keep what he formed) as well as Maimonides' loss. It is fair.
- PQ2 (knowing God and the transformed heart) is not answered by the exposition. Retained.

**Christian response.**

- Citations: Romans 8:29–30, Revelation 21:1–4 and 1 Corinthians 15:20–23 are by reference only.
- Shared eschatological *form* is distinguished from disputed redemptive *ground* ("who brings the fulfillment"), and Christ's resurrection is presented as the Christian's disputed claim.

## 17. Pressure questions on the seven changed pages

| Page | PQ | Disposition |
|---|---|---|
| after-death | PQ1, PQ2 | Revised (M-5) |
| final-end | PQ1, PQ2 | Fair; retained |
| ultimate-authority | Two PQs (unchanged) | Still fair. The new Orthodox, Conservative and Reform paragraph does not answer them, because they address the classical court. |
| revelation | Two PQs (unchanged) | Consistent with the new paragraph |
| what-is-man | PQs (unchanged) | Consistent with Soloveitchik |
| one-and-many | PQs (unchanged) | Consistent |
| suffering | PQs (unchanged) | Consistent |

None presupposes the Christian answer. `ultimate-personal` PQ1 (R5) is preserved.

## 18. Orthodox sources

- **Eighth principle (Helek pp. 53–54).** Verbatim as above. It covers the Torah's origin, the image of Moses as a scribe taking dictation, and the divine origin of the traditional interpretation.
- **Hirsch, *Nineteen Letters*, Letter 17.** The archive.org text has: "education, progress to the Torah height, not, however, lowering the Torah to the level of the age". The phrase starts at the foot of p. 170 and the quoted words are on p. 171. The context is his answer to the reformers ("merely to seek greater ease … is not and never can be Reform"). The citation is accurate.
- **Soloveitchik (LMF p. 10).** "since we do unreservedly accept the unity and integrity of the Scriptures and their divine character, we reject this hypothesis". This refers to the critics' two-source theory of the two creation accounts. He answers it with "dual man", not a dual tradition. The page's "rejects the critical theory of separate sources" is accurate *for that context*.
- **Scope.** Orthodoxy is said to "maintain" the classical structure. Maimonides' principle is given as "the classical formulation", not as every Orthodox Jew's philosophy.

## 19. Conservative/Masorti sources (*Emet Ve-Emunah*, 1988)

- **Revelation (pp. 19–20).**
  - "the uncovering of an external source of truth emanating from God";
  - it rejects relativism, and also "fundamentalism and literalism, which do not admit a human component";
  - Sinai is "the single greatest event";
  - three views are introduced as ways revelation "has been understood in various ways within the Conservative community", with "ample precedents" in the classical sources.
  - So the views are presented as legitimate positions held within the movement, not as a consensus and not merely as views under discussion. The page's "records three views within the movement" is accurate.
- **Halakhah (pp. 21–24).**
  - "For many Conservative Jews" (M-2);
  - "The sanctity and authority of Halakhah attaches to the body of the law, not to each law separately" (p. 22, verbatim apart from the page's lower case);
  - change "through rabbinic decision", "the burden of proof is on the one who wants to alter them" (p. 23);
  - individuals cannot change the law (pp. 22–23).
  - It is not presented as relaxed Orthodoxy or as autonomy.
- **Holocaust (p. 26).** "We deny as false and blasphemous the assertion that the Holocaust was the result of its victims' transgressions or of the sins of Jewry as a whole."
  - This rejects a specific explanation. The same section allows that theodicies "may have some philosophic value" (p. 27).
  - The page does not overgeneralize.
- **Eschatology (pp. 29–30).** It names the two doctrines (bodily resurrection; the soul's immortality): "For some of us, they are literal truths … Others understand these teachings in a more figurative way."

## 20. Reform statements

| Statement | Verified wording | On the page |
|---|---|---|
| 1885, art. 3 | "accept as binding only its moral laws, and maintain only such ceremonies as elevate and sanctify our lives" | Clause added (M-8) |
| 1885, art. 7 | "We reject as ideas not rooted in Judaism, the beliefs both in bodily resurrection and in Gehenna and Eden"; the soul's immortality is affirmed | Accurate in `after-death` |
| 1976, §3 | "Torah results from the relationship between God and the Jewish people" | — |
| 1976, §4 | Obligations "extend to many other aspects of Jewish living"; "confront the claims of Jewish tradition … exercise their individual autonomy, choosing and creating on the basis of commitment and knowledge" | Autonomy is not quoted in isolation |
| 1999, Torah | "God's ongoing revelation to our people and the record of our people's ongoing relationship with God"; "the whole array of mitzvot … those that address us as individuals and as a community"; the preamble acknowledges "the diversity of Reform Jewish beliefs and practices" | Reform is not presented as denying revelation or obligation |

The three statements are dated. The text now says they "show a development".

## 21. Movement scope and chronology

**Authority versus revelation.** The two paragraphs do different work:

- `ultimate-authority` asks where authority for practice lies.
- `revelation` asks what revelation is.

Each page carries one denominational paragraph, and the overlap is limited to the eighth principle.

**The classical answer stays clear:**

- the classical paragraphs come first;
- the classical account "remains the Orthodox position";
- modern diversity is never treated as evidence against the classical account;
- the `revelation` Deep Dive keeps the theological accounts distinct from the historical evidence.

## 22. Soloveitchik

**Metadata.** *Tradition* 7:2 (Summer 1965): 5–67. Scan offset: journal page = PDF page + 4. PDF p. 6 shows journal p. 10, confirming the corrected offset.

| Page | Verified content |
|---|---|
| p. 10 | The reservation: "completely subjective and lays no claim to representing a definitive Halakhic philosophy". "Two Adams, two men, two fathers of mankind, two types, two representatives of humanity". |
| p. 11 | Adam the first's image is "man's inner charismatic endowment as a creative being"; the mandate to fill and subdue. |
| p. 17 | Adam the second seeks "an intimate relation with God"; the divine breath as his "living experience of God". |
| p. 51 | The man of faith's "steady oscillating … between majesty and covenant". The task is "uniting the two communities into one community where man is both the creative, free agent, and the obedient servant of God". |

The quotation is Soloveitchik's own words, about the Halakhah's aim. After M-4 the paragraph follows his wording and is scoped as his interpretation.

## 23. Kabbalah

**The entry** (*Jewish Encyclopedia* vol. 11, pp. 154–155; Executive Committee and Isaac Broydé; signed "E. C. I. Br.") supports:

- the definition as "potencies or agencies";
- the twelfth-century date;
- Azriel and Recanati ("totally different from the Divine Being");
- the *Ma'arekhet* (identical in their totality with the En Sof);
- the Zohar (names of the Deity);
- Luria and Cordovero (the One immanent in all the sefirot; they "can never include the Infinite").

The closing "further gods" synthesis was not supported (I-1). The subsection is now a modest, attributed disclosure. Tzimtzum is still not claimed. A modern specialist source remains a C4 option.

## 24. Fackenheim

**Article.** Commentary, August 1968, §II.

**Verified verbatim:**

- "Good Orthodox Jews have resorted to the ancient 'for our sins are we punished,' but this recourse, unacceptable already to Job, is in this case all the more impossible";
- "No purpose, religious or non-religious, will ever be found in Auschwitz";
- "a commanding Voice speaks from Auschwitz";
- "Jews are forbidden to grant posthumous victories to Hitler";
- the commands to survive as Jews and to remember the victims;
- the prohibitions on despairing "of man and his world" and "of the God of Israel";
- "may be forced into new, possibly revolutionary, relationships with Him".

The page attributes these to Fackenheim, says the modern responses "differ", and makes no claim of a complete solution. Victims' suffering is never treated as evidence of guilt.

**Profile.**

- Verified: born 1916 in Halle (one Wikipedia infobox gives 1917); Sachsenhausen 1938–39; to Canada (interned 1940); rabbi in Hamilton 1943–48; University of Toronto; Jerusalem, died 2003.
- The profile attributes no movement-wide arguments to him.
- The route `/thinkers/emil-fackenheim/` builds and resolves.

## 25. Christian comparative fairness

Neither revised response argues "Judaism lacks resurrection". Each:

- affirms what the Jewish sources share;
- scopes the embodiment difference to Maimonides;
- places the decisive dispute on Christ's resurrection, messiahship and judgeship as disputed historical and revelatory claims.

M-6 adds the qualification about the messianic interval.

The `ultimate-authority` comparison (WCF 1.9–10) remains aimed at the classical court and Bava Metzia 59b. Its "no human court … is beyond correction" does not deny Reformed church courts.

## 26. Cross-page consistency

- No page represents Maimonides as denying resurrection.
- Saadia and Nachmanides are described consistently.
- The messianic era is never equated with final reward.
- "World to Come" is attributed wherever its sense shifts.
- `history`'s lede ("beyond that lie the resurrection … and the World to Come") fits Nachmanides and Maimonides. For Saadia the resurrection falls within the redemption, which `final-end` states. Left unchanged, as production judged.
- The eschatology has one home in each case (`after-death`, `final-end`), and the other pages link to it.

## 27. Ledes

| Answer | Length | Verdict |
|---|---|---|
| after-death | 240 | Accurate |
| final-end | 222 | Accurate (§16) |
| ultimate-authority | 223 | Describes the classical rabbinic baseline, whose scope is clear from the first paragraph and the modern-movements paragraph |
| revelation | 214 | Same as `ultimate-authority` |
| what-is-man | 149 | Unchanged, accurate |
| one-and-many | 187 | Unchanged, accurate |
| suffering | 181 | Unchanged, accurate |

All are within the 240-character limit.

## 28. Length and progressive disclosure

Counts are from `audit-inventory.mjs` (its counting differs slightly from production's Cite-stripped counts).

| Answer | Total at d718563 → review | Visible | Length verdict |
|---|---|---|---|
| after-death | 1,151 → 1,190 | 665 → 700 | **Justified.** Four short visible paragraphs, in the order direct answer, explanation, qualification. The recension and *Ani ma'amin* details sit in the Deep Dive. The growth comes from fairer PQs and one qualification. |
| final-end | 1,046 → 1,059 | 635 → 648 | **Justified.** The terminology controversy is in the Deep Dive. |
| ultimate-authority | 1,094 → 1,119 | 788 → 813 | **Justified, dense.** The movement paragraph is one paragraph with one sentence per document. It is a development narrative, not a catalogue. Further compression would cost the Conservative or Reform distinction JUD-02 required. |
| revelation | 1,142 → 1,149 | 750 → 757 | **Justified.** |

Lane: 21,782 → 21,888 words (+106, +0.5%). The corpus is 133,463 words.

Progressive disclosure follows R6's hierarchy:

- resurrection appears positively in the visible text of both eschatology pages;
- editions and recensions stay in the Deep Dive or the registry.

## 29. Registry, quotations and metadata

**Fifteen records checked.**

| Record(s) | Finding |
|---|---|
| `ramban-shaar-ha-gemul-hebrew` | Accurate; the Sefaria metadata is presented as Sefaria's |
| `maimonides-helek-abelson` | Accurate; pages confirmed |
| `maimonides-treatise-resurrection-hebrew` | Corrected (M-10) |
| `siddur-metsudah-hebrew` | Corrected (M-10). The publisher is honestly omitted. |
| `emet-ve-emunah-1988` | Corrected (M-10). Pages and offset confirmed. |
| `ccar-pittsburgh-platform-1885`, `ccar-centenary-perspective-1976` | Accurate |
| `hirsch-nineteen-letters-drachman` | Accurate. The quotation spans pp. 170–171; the cited words are on p. 171. |
| `fackenheim-jewish-faith-holocaust` | Accurate |
| `jewish-encyclopedia-sefirot` | Accurate |
| `saadia-emunot-ibn-tibbon` | Accurate; recension caveat in §9 |
| `mishnah-kulp` | The Berakhot 5:2 Hebrew was confirmed. Kulp's English was not re-fetched; the API version name failed. It remains checked from production and R3. |
| `talmud-bavli-koren` | Accurate |
| `soloveitchik-lonely-man-of-faith` | Accurate |
| `ccar-principles-1999` | Accurate |

**Thinkers.**

- Each new key idea and work for Maimonides, Saadia and Nachmanides is supported by the sources read.
- Soloveitchik is attached only where used.
- Fackenheim: see §24.

**Quotations.** Every verbatim English quotation from Abelson, Hirsch, the Conservative and Reform statements and Fackenheim was checked against its source. Hebrew is presented as paraphrase or "our translation" throughout.

**ESV.**

- No direct ESV quotation was added or changed by C2 or by this review. All four `bible-esv` citations in the diff are references only.
- The ledger is unchanged: 106 candidates, 4 unledgered, 1 orphan. These are pre-existing C4 items.

## 30. Earlier remediation

- **R3:** the evil inclination and bodily resurrection are intact.
- **R5:** `ultimate-personal` PQ1 is preserved.
- **R6:** the ledes and the hierarchy are intact.
- **C1:** the standards for primary-source verification, translation provenance and fair Christian criticism were applied.

No regressions.

## 31. Validation (final content)

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 54 thinkers, 228 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 pre-existing hint |
| `npm run build` | 94 pages, including `/thinkers/emil-fackenheim/` |
| `git diff --check` | Clean |
| `node scripts/check-built-links.mjs` | 168 answers, 0 missing; 10,048 links (4,091 cross-page; 8,283 fragments); 0 broken; 0 duplicate ids; 0 outside base; 54 thinker pages. Counts are unchanged from production because no links were added or removed. |
| `node scripts/audit-inventory.mjs` | 168 answers, 133,463 words, 2,812 citations; data regenerated and committed |

## 32. Recommendation

**MERGE.**

- The primary-source claims are independently verified: Saadia VII and IX; *Sha'ar ha-Gemul* ¶¶64, 69–87; Helek pp. 42, 53–54 and 56; the *Treatise on Resurrection*; the Amidah and the Mishnah; the movement documents; Soloveitchik; Fackenheim.
- Comparative fairness holds.
- The expanded prose is proportionate.
- Both IMPORTANT findings and all ten MINOR findings are fixed, and the full suite passes.

The user merges. PR #23 was not merged by this review.

**Deferred to C4 (not begun):**

- JUD-07, the Maimonides metadata sweep;
- process notes outside C2 passages (e.g. `jesus`, "The Hebrew text used here…");
- the ESV reconciliation;
- duplicate-question cleanup;
- optional: a modern Kabbalah source (tzimtzum), Berkovits, Berman.

Also open:

- confirming which Arabic recension Ibn Tibbon renders;
- the NLI edition records for *Sha'ar ha-Gemul* and the 1859 *Kovetz*.

C3 and C4 have not begun.
