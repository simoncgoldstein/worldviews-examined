# Revelation & History independent review (PR #14)

2026-10-07. Independent publication review of PR #14, **Produce Revelation & History answers (revelation, history,
jesus)**. Single Claude Opus 5.5 context; no subagents, no other reviewer. Starting head
`f8ebb1602941e7046a22e592af7abc1f38d00d82`. Not merged; the final corpus-wide audit was not begun.

**Result: 0 BLOCKER, 11 IMPORTANT, 13 MINOR. All fixed on the branch. Recommendation: MERGE.**

## Method

- Read all 18 answers, the domain README, the shared `jesus-evidence.md`, the production report and the three
  production notes, the registry diffs (sources, thinkers) and the ESV ledger diff.
- Applied the four-level test to every historical claim: what a source says → what it establishes → which explanation
  best fits → what follows theologically.
- Re-read cached research-pass texts: al-Razi on 4:157 (pp. 1–2, Arabic), al-Tabari reports 10779–10792 and his
  *tarjīḥ*, Ibn Kathir on 4:157, Hurtado ("Worship of Christ"), BCA 9.42–44 (Sanskrit), the *Vikuach* (Hebrew,
  second day), EJ "Barcelona Disputation", Wilson's Viṣṇu Purāṇa (III.2 p. 271; IV.24 p. 484), de Slane's
  *Prolégomènes* (introduction pp. iii–v; dynastic-cycle passage), Kuzari attributions.

## IMPORTANT findings

| # | Issue | Evidence | Correction |
|---|---|---|---|
| I1 | The shared crucifixion sentence ("crucified under Pontius Pilate, as Paul, the Gospels and … Tacitus attest") syntactically has Paul attest Pilate. Paul's undisputed letters attest the crucifixion, not Pilate. | `jesus-evidence.md` §E; Paul's Pilate reference (1 Tim 6:13) is deutero-Pauline. | All six lanes: "He was crucified, as Paul and the Gospels attest, and the Gospels and the Roman historian Tacitus place his execution under Pontius Pilate." |
| I2 | "Within a few years of his death his followers were proclaiming…" stated flatly; the packet says the dating of Paul's reception is an inference. | Packet §A, §C ("each step is an inference"). | Christian, naturalism, Buddhist: "…to judge from the tradition Paul says he had received…". The Christian Deep dive already gives Craig's dating as an inference. |
| I3 | The early-worship sentence stated as settled fact in five lanes; the packet rates it "well supported but debated", and Hurtado notes Dunn's dissent. | Packet §B 10; Hurtado n. 14. Hurtado does support "prayer to Christ", "within the first two decades" and "worship of Christ alongside God the Father". | Christian, naturalism, Jewish, Hindu and Buddhist: "Within about two decades, the historian Larry Hurtado argues, …". Wording otherwise kept, because Hurtado supports it. The Christian Deep dive's "does not show that the later creeds' formulations were already in place" already blocks the Nicene jump. |
| I4 | Christian reply and naturalism response: "James, whose family, the Gospels report, had not followed Jesus in his lifetime", cited to the EJ. The Gospel texts (Mark 3:21; John 7:5) were not read, and the packet classes James's conversion as a disputed inference. In context the clause implies a conversion narrative. | Packet §B 8; `ej-jesus` registry note. | Family claim removed. Both lanes now say only what the evidence carries: James, Jesus' brother, who became a leader of the Jerusalem church, with the appearance to him in Paul's tradition. Cited to 1 Cor 15:5–8 and Gal 1:13, 19; 2:9 as references, with no new ESV wording. |
| I5 | "Grief visions… fit less easily with appearances reported to groups" did not say that we have only Paul's report of the group appearances. | Packet §B 6 ("group claims rest on Paul's reported tradition"); §G. | Christian and naturalism: "the appearances to groups that Paul's tradition reports, though no independent account of what those groups experienced survives". |
| I6 | Islamic `jesus` said al-Tabari "prefers the second" (likeness on everyone in the house). In fact he prefers **either of two reports from Wahb**: all in the house transformed, or a single companion transformed after the others had scattered (ʿAbd al-Samad's report). He rejects the version in which the companions watched the change. | al-Tabari after report 10789: «وأولى هذه الأقوال بالصواب أحد القولين اللذين ذكرناهما عن وهب… أو القول الذي رواه عبد الصمد عنه». | View and Deep dive rewritten to state the two-way preference and his reason (the companions are not made liars). |
| I7 | The Islamic Christian response presented al-Razi as having "seen" a problem, with no mention that he raises it as an objection (*al-suʾāl al-thānī*) and answers it. The Deep dive presented only the first of his two answers. This risked making al-Razi a sceptic of the Qur'anic denial. | al-Razi p. 1 (objection), p. 2 «والجواب: اختلفت مذاهب العلماء…» (two lines of answer). | The response now says he "sets out the objection" and "answers it", and the Christian asks whether the answers succeed. The Deep dive gives both lines of answer: the kalām "another man, crowd misled, few transmitters" view, and the cast-likeness view with its four conflicting versions. |
| I8 | Naturalism `jesus`: "Serious naturalists do not deny…" and "Naturalism grants all of this" overstate uniformity among naturalists and exclude rhetorically. | Packet §B 6, §G (critics dispute specific reports). | "Naturalists, like critical historians generally, accept that Jesus existed"; "A representative critical-naturalist account grants all of this, though individual critics dispute particular appearance reports and details of the reconstruction"; mythicism "not representative of mainstream critical scholarship". |
| I9 | Jewish `history`: "Other strands expect an apocalyptic war of Gog and Magog…" was uncited and wrong. Maimonides himself expects the Gog and Magog war at the start of the messianic age. | Touger, Kings 12:2 (Sefaria, read live). | Replaced with the attested dispute: R. Yoḥanan against Shmuel in Sanhedrin 99a (Davidson, segment 11, read live; registry note extended). Maimonides' own Gog and Magog expectation is noted. |
| I10 | Buddhist `jesus`: "there is no enduring self to be raised in a body" assumes that Christian resurrection needs a body-independent enduring self. | Brief §33; Christian doctrine is of embodied personal identity. | "There is no creator, so no Creator's incarnation; there is no self that persists through death as the same person, which a bodily resurrection of that person presupposes; …". |
| I11 | Jewish `jesus`: the Christian two-stage reading and pressure question did not register the Jewish objection that the scheme is ad hoc. | Brief §29; fairness. | Added: "Jewish interpreters answer that the prophets nowhere announce such a two-stage scheme, so reading one in after the Messiah's apparent failure looks ad hoc." The pressure question now also asks what would establish the scheme. |

## MINOR findings

| # | Issue | Correction |
|---|---|---|
| M1 | "Paul, who was an enemy" (Christian reply): broader than the evidence. | "Paul, who had persecuted the movement" (Gal 1:13). The naturalism wording was aligned. |
| M2 | Tacitus "confirmed independently" (Islamic Deep dive); "confirms" (Christian Deep dive). The source of Tacitus' information is unknown (packet §A). | "the execution is also attested by a hostile Roman historian"; "attests". |
| M3 | Hindu `jesus`: "That is a claim of uniqueness within Jewish monotheism" stated as fact, and "one incarnation among many" in a pressure question was unattributed. | "On Hurtado's reading … though the reading of such texts is itself debated"; "as Vivekananda held". |
| M4 | Dalai Lama: the second-hand transmission was visible only in a citation note. | "as quoted in John Cobb's review" in the prose. |
| M5 | Soyen Shaku's "incarnated" could read as ordinary Buddhist doctrine. | Added: "This is his own adaptation for Western hearers, not a standard Buddhist doctrine of incarnation." |
| M6 | The Pure Land contrast could imply that Pure Land is worthless historically. | Added: "That is a difference in the kind of claim, not a verdict on its worth." |
| M7 | Hindu `revelation`: the Nyāya and Udayana claims were uncited. | Cited NS 2.1.69 and the Kusumāñjali V.1, both already used in `ultimate-authority`. |
| M8 | Buddhist `revelation`: Śāntideva's parity argument was said to have "the same shape as" Reformed self-attestation, which modernizes it. 9.44's "svaiḥ paraiś cāgamāntaram" (other parts of scripture disputed by one's own side too) was dropped. | "presses every tradition, the Reformed included, to say what grounds its own trust in scripture"; "which outsiders dispute and parts of which Buddhists dispute among themselves". |
| M9 | Hindu `history`: "and then begins again" was appended to the Viṣṇu Purāṇa III.2 quotation, but the text does not say it. | "Summing up Viṣṇu's work through the four ages, the same text says…". Cyclicity remains supported by IV.24, the Gītā and Śaṅkara. |
| M10 | Christian `revelation`: "Luke wrote from eyewitness tradition" jumps from what the source says to what it establishes. | "Luke says he wrote from eyewitness tradition". |
| M11 | Habermas was described only as "a Christian scholar". Craig's women-witness argument was stated without its contested status. | "The Christian apologist Gary Habermas"; "which he judges an unlikely invention (an argument from embarrassment whose force critics contest)". |
| M12 | Mujahid's words, quoted in our translation, were labelled only "our paraphrase". | Note now reads "Arabic; our paraphrase, with Mujahid's words in our translation". |
| M13 | The al-Razi profile published a birth year (1149) that the production noted as unverified. | `birthYear` removed, so the profile shows "d. 1210". The note records why. The death year rests on Macdonald's 606 AH; the Gregorian 1210 is the standard equivalent and is kept. |

## Checks with no change needed

- **Kuzari I.8:** the public-miracle test is attributed to the king in the Jewish `revelation` answer and Deep dive, and the rabbi answers at I.87/I.25. The Islamic `revelation` answer also attributes I.6 to "a king". Correct everywhere.
- **Pentateuch dating:** "This page does not settle when the Torah was written." No compositional chronology is implied.
- **Qur'an 4:157:** Haleem's wording is quoted; *wa-lākin shubbiha lahum* is given; the answer says the verse "does not say how or name anyone else". Substitution appears only as tafsir.
- **Historical comparison:** the comparison states "This is not the claim that later means false", and the Muslim reason is represented as revelatory, not as further first-century evidence. Minority readings (Fatoohi) are labelled minority and do not unsettle the standard view.
- **Ibn Kathir:** the young volunteer, the companions who "witnessed his raising" (شاهدوا رفعه) and "the most truthful of speakers" (أصدق القائلين) all match the Arabic.
- **al-Razi translations:** «متعارضة متدافعة، والله أعلم» renders as "mutually conflicting… God knows best"; «أقوام قليلين لا يبعد اتفاقهم على الكذب» as "a few people who could have agreed on a lie"; «يفتح باب السفسطة» as "opens the door of sophistry". All are accurate.
- **Vikuach:** «לא יקבל אותו השכל, והטבע אינו נותן, והנביאים מעולם לא אמרו כן» and «משיח אינו אלא מלך בשר ודם כמוך» match the paraphrase. It is paraphrase only, with the base-edition caveat.
- **EJ Barcelona:** "The Mishneh Torah of Maimonides was also condemned to be burned because of the references to Jesus in the chapter on the laws of kingship" supports the Jewish Deep dive.
- **Josephus:** the Testimonium is never quoted or used for the resurrection. *Ant.* 20.200 appears only in the Christian Deep dive, as "the Encyclopaedia Judaica treats it as Josephus' own", which the EJ opening sentence supports. One attributed encyclopedia treatment suffices for that narrow claim, and no lane goes further.
- **Hume:** §10.36's concession, the Spinoza/Voltaire distinction (SEP §3.1.1) and the probabilistic reading are all present. No answer says naturalists hold miracles to be logically impossible.
- **Ehrman:** the 2006 order (scripture → exaltation → visions → "stories of visions") is attributed to the debate only. "I won't say they're impossible" keeps method and metaphysics apart. Lowder's reburial hypothesis and his "slightly better than 50%" are given as his own.
- **Kalki:** Wilson IV.24 p. 484, "the Krita age shall return", supports restoration rather than an end.
- **Buddhist history:** DN 26, SN 15, SN 16.13, AN 7.66 and AN 8.51 support the decline and restoration claims as stated. Metteyya is "the next teacher in the cycle".
- **Naturalist history:** no "heat death". Russell's "vast death of the solar system" is quoted with its source. The answer says history is not meaningless, and Marx is named as non-representative.
- **Ibn Khaldun:** the dynastic cycles are placed inside linear sacred history. The French renderings ("heure que personne ne saurait avancer ni reculer"; "comme les individus, ont une existence, une vie qui leur est propre") are labelled our translation. The profile's dates (Tunis 1332 – Cairo 1406), offices, Qalʿat Ibn Salama, Timur in 1400 and Yemeni-Sevillian origin all match de Slane pp. iii–v. Specialist role is appropriate.
- **ESV:** all 30 new rows were re-fetched from esv.org and match exactly. No unledgered ESV wording was found in the 18 answers. This review added only verse references, no ESV wording, so ledger totals are unchanged. The per-answer proportion denominators shift by a few words and were not recomputed; every shift lowers the ESV share.

## External checks

| Suspected problem | Source | Result | Change |
|---|---|---|---|
| ESV wording of the 30 new rows | esv.org (live, 24 passages) | All exact | None |
| "Other strands expect Gog and Magog" | Sefaria: Touger Kings 12:2; Davidson Sanhedrin 99a | Maimonides himself expects Gog and Magog; Sanh. 99a records R. Yoḥanan against Shmuel | I9 |
| al-Razi birth year | Encyclopaedia Iranica and Britannica (HTTP 403); SEP URL guessed (404) | Not verifiable within a narrow check | M13: birth year removed |

No Josephus, Tacitus or wider historical-Jesus literature search was reopened.

## Not changed (judgement)

- **Length:** the `jesus` and `revelation` visible prose is above the guides. No paragraph was found whose removal would cost nothing to the argument. Most repetition is a deliberate canonical sentence. The Jewish `jesus` Deep dive restates part of Kings 11:4 (about 40 words) to give it context, and was left.
- **Testimonium:** "has been reworked by Christian hands; scholars debate whether it was altered or wholly interpolated" follows the EJ and Posen, and was left.
- **`jesus` PRODUCTION-NOTES:** the canonical-sentence table records the production state. The canonical sentences as now published are those in I1–I3 above.

## Validation (after fixes)

- `npm run validate`: valid (168/168; 50 thinkers, 41 profiled; 200 sources).
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: 90 pages.
- `git diff --check`: clean.
- Built-site link and fragment check: 90 pages, 9,239 local links, 7,547 fragment links, **0 broken, 0 duplicate IDs**.
