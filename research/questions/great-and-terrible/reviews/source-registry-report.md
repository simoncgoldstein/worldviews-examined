# Source and thinker registry consolidation: great-and-terrible

Date: 2026-10-05. Files changed: `src/content/sources/sources.yaml`, `src/content/thinkers/thinkers.yaml`. Answer MDX, schemas and code untouched.

## Summary

- Distinct source ids cited in the six answers: 85. Registry now holds 96 sources (19 seeds, 77 new).
- Checked: 77. Unverified: 8.
- Ids with no record found: none.
- `npm run validate`: passes (6 worldviews, 28 questions, 48 thinkers, 96 sources, 6 answers).

## Rule applied

A source is `checked` only where the researcher's final record (latest packet, QA resolution or response draft wins) says the four protocol conditions were met. I downgraded to `unverified` any record whose researcher text itself flagged an unconfirmed item: a missing catalog record, an unconfirmed year, translator or page markers. Nothing was upgraded on my own judgement. One upgrade follows the QA resolution: `dennett-self-artifact` (page numbers confirmed against the PDF).

Edits made in the merge: "Newly read" passages from the response drafts were appended to the notes of `bible-esv`, `wcf`, `calvin-institutes-beveridge`, `mishnah-kulp`, `edwards-works-hickman-1`, `quran-haleem` and `thibaut-ramanuja-sribhashya`. The `railton-moral-realism` and `mackie-ethics` amendment notes replaced the earlier ones. Long notes were condensed. Records with a year range (`ramban-torah-chavel`, `yerushalmi-guggenheimer`, `maimonides-mishneh-torah-touger`, `talmud-bavli-koren`) take the first year because `year` is an integer. The seed `hume-enquiry`, `sep-naturalism`, `nagarjuna-mmk`, `shantideva-bodhicaryavatara`, `buddhaghosa-path-of-purification`, `quran-haleem`, `bible-esv` and `wcf` entries were updated with the verified metadata. The seed uncited entries `bavinck-reformed-dogmatics` and `van-til-defense` got the researchers' "not read" notes and remain unverified. All other seed entries are kept as they were.

## Cited sources

| Source id | Type | Status | Basis (abridged from notes) |
|---|---|---|---|
| anguttara-nikaya-sujato | primary | checked | Cite by SuttaCentral numbering (e.g. AN 3.69; AN 1.49–52 = PTS A I 10). Verified 2026-10-05: metadata (scpub5, 2018, CC0) from SuttaCentral ... |
| ashari-ibana-klein | primary | checked | Cited by page of Klein's translation. Text read in the archive.org scan. The Ibanah's relation to al-Ash'ari's kalam works is debated; cite it for ... |
| augustine-city-of-god | primary | checked | New Advent online edition (revised and edited by Kevin Knight) of the Dods translation; imprint from New Advent's source line. Locator book.chapter. ... |
| augustine-confessions | primary | checked | Text read in New Advent's online edition ("Revised and edited for New Advent by Kevin Knight"; archaic pronouns modernized), whose source line gives ... |
| augustine-enchiridion | primary | checked | New Advent online edition of the Shaw translation; imprint from New Advent's source line. Locator: chapter (NPNF numbering). Read 2026-10-05: chs. ... |
| bavinck-calvin-common-grace | article | checked | pp. 99–130 of the book reissue; first published in The Princeton Theological Review 7 (1909). Preface (read) names Vos as translator. Page numbers ... |
| bible-esv | scripture | checked | Current ESV text (2016); publisher and first-publication year confirmed on esv.org. Verses read on BibleGateway 2026-10-05: Gen 1:26-28, 6:5, 8:21, ... |
| buddhaghosa-path-of-purification | primary | checked | Cite by chapter.paragraph (e.g. XIV.142), which is stable across BPS editions. Verified 2026-10-05 against the BPS PDF (imprint page: 1st ed. 1956, ... |
| bukhari-sahih-khan | primary | checked | Cited by sunnah.com hadith number (e.g. 1385), the standard numbering shown there as "Reference: Sahih al-Bukhari N"; sunnah.com states the ... |
| calvin-commentary-romans | commentary | checked | John Owen (vicar of Thrussington) translation, CCEL digitization; imprint confirmed against archive.org catalog records ("Edinburgh: Printed for the ... |
| calvin-institutes-beveridge | primary | checked | Beveridge translation (1845) as digitized by CCEL; imprint confirmed against archive.org catalog records of the 1845 Edinburgh volumes. Locators ... |
| ccar-principles-1999 | primary | checked | Adopted May 1999 at the Pittsburgh convention. Read for image of God, mitzvot, repentance. |
| crc-acts-synod-1924 | confessional | checked | English translation by Henry De Mots (Archives of the CRC, May 2000); title page and preface read in the PDF 2026-10-05. Locator: article and page of ... |
| darwin-descent | primary | checked | Darwin Online F944 (ed. John van Wyhe). Cited by chapter and page of this edition. Passages read 2026-10-05 in the Darwin Online text and ... |
| dennett-self-artifact | article | checked | pp. 39-50 (Annals NYAS 1001); adapted from Freedom Evolves (2003). Metadata and pages verified 2026-10-05 against the article PDF (Zenodo 915272; 12 ... |
| dogen-shobogenzo | primary | checked | Metadata confirmed 2026-10-05 from LoC and Columbia MARC via Open Library (ISBN 9781590304747). Cite by fascicle (Busshō, Shoaku makusa); read in the ... |
| edwards-works-hickman-1 | primary | checked | Banner of Truth 1974 reprint of the 1834 Hickman edition; edition statement and text read in the CCEL digitization 2026-10-05. Cite by work and ... |
| ghazali-disciplining-soul | primary | unverified | Unverified: page markers for pp. 23-25 are out of order in the scan and need confirming against a print copy. Title and copyright pages (Islamic ... |
| ghazali-marvels-heart | primary | checked | Foreword by T. J. Winter. ISBN 978-1-887752-31-2. Cited by page of this edition. Passages read in a full-text scan of this edition showing its title ... |
| ghazali-repentance-stern | primary | checked | Translation of Kitab al-tawba, Book XXXI of Ihya' 'Ulum al-Din (translation begins p. 29). Cited by page of this edition. Passages read in a ... |
| govindacharya-gita-ramanuja | primary | checked | Cite by Gītā chapter.verse, with page of this edition where helpful. Translator's own footnotes (including comparative remarks) are not Rāmānuja's. ... |
| halevi-kuzari-hirschfeld | primary | checked | Metadata from archive.org record. Locators part.paragraph as printed (Sefaria segment index is offset). I.27, I.31-43, I.95, III.5 read on Sefaria; ... |
| harvey-transcendent-god | academic | checked | Open access. ISBN 978 1 4744 5164 2 (hb). Cited by page of the EUP edition (PDF read via the archive.org mirror of the OAPEN file). Reports ... |
| hoover-theodicy | academic | checked | ISBN 978 90 04 15847 4. Cited by page of this edition. Read in a full-text scan showing title and copyright pages and printed pagination (pp. 39-44, ... |
| hume-enquiry | primary | checked | Cited by section.paragraph (site label "E 8.23", with SBN pages). Verified 2026-10-05 for 8.7 and 8.23. |
| hume-epm | primary | checked | Cited by section.paragraph (e.g. 9.4; the site labels these "M 9.4", with SBN pages). Verified 2026-10-05: 9.4, 9.5, 9.6. |
| hume-treatise | primary | checked | Cited by book.part.section.paragraph (e.g. 2.3.3.10), as displayed on Hume Texts Online, which also gives SBN pages. Verified 2026-10-05 on ... |
| iep-madhva | academic | checked | Cite by section (intro; §3 Dvaita Vedanta). Read 2026-10-05. |
| iep-ramanuja | academic | checked | Quotes Vedārthasaṅgraha §99 in translation. Cite by section title. No publication year on page. Read 2026-10-05. |
| jha-slokavarttika | primary | checked | Cite by section and verse (e.g. "Codanā-sūtra 16–18", "Ātmavāda 29"). Jha's introduction and notes are his, not Kumārila's. Edition details from the ... |
| kant-religion-greene-hudson | primary | checked | Cited by Book and section (Bk. I, sections I-IV; General Observation). Passages read 2026-10-05 in the Greene-Hudson text at the CUHK Humanum site ... |
| kitcher-ethical-project-precis | article | checked | pp. 1–19. Verified 2026-10-05 in the journal PDF: p. 4 (altruism failures; conscience "built"), p. 6 (progress rare), p. 10 (ethics as social ... |
| mackie-ethics | book | checked | First published Pelican 1977; pagination checked 2026-10-05 in a scan of the Penguin reprint (1990; scan not linked): pp. 15, 29, 33, 35 (ch. 1 ... |
| maimonides-eight-chapters | primary | unverified | Unverified: publisher and year are standard for Gorfinkle (Columbia 1912) but no catalog record was opened. Public-domain text read on Sefaria ... |
| maimonides-guide-friedlander | primary | checked | Metadata from archive.org record (UC Libraries copy; title page "Second edition published 1904"; lix, 414 p.). Locators part.chapter. I.1, I.2, ... |
| maimonides-mishneh-torah-touger | primary | unverified | Unverified: the NLI catalog record linked from the Sefaria version was not opened; volumes 1986-2007. Touger translation read on Sefaria 2026-10-05; ... |
| majjhima-nikaya-sujato | primary | checked | Cite by sutta and SuttaCentral segment/section number (e.g. MN 14.2–4). Verified 2026-10-05: metadata (scpub3, 2018, CC0) from the SuttaCentral ... |
| midrash-rabbah-sefaria | primary | checked | "The Sefaria Midrash Rabbah, 2022" English (CC-BY). Locators parashah:section (Sefaria numbering). Read: 8:5 (angels debate man's creation), 8:11 ... |
| mishnah-kulp | primary | unverified | Unverified: version record gives no year or place (metadata partial). Kulp English (Mishnah Yomit, CC-BY) read on Sefaria 2026-10-05; locators ... |
| muller-upanishads-1 | scripture | checked | Contains Chāndogya, Kena, Aitareya-Āraṇyaka (incl. Aitareya Upaniṣad = AA II.4–6), Kauṣītaki, Īśā. Cite text + canonical section (e.g. "AA ... |
| muslim-sahih-siddiqui | primary | checked | Cited by sunnah.com number including letter suffix (e.g. 2658b), shown there as "Reference: Sahih Muslim N"; sunnah.com states the translation is by ... |
| nagarjuna-mmk | primary | checked | Metadata confirmed via Open Library record for ISBN 9780195093360 (OUP, New York, 1995). Cite by chapter.verse; cited verses (8.12, 17.1-3, 18.4-6, ... |
| quran-haleem | scripture | checked | Cited by surah:ayah. Read in Abdel Haleem's translation as hosted on quran.com (resource 85; may reflect a later printing) 2026-10-05, including ... |
| railton-moral-realism | article | checked | pp. 163-207. Verified 2026-10-05 against a JSTOR PDF of the journal pages (page numbers from printed folios): pp. 168-169 (the Knave), 190-191 ... |
| ramban-torah-chavel | commentary | checked | Chavel translation read on Sefaria (CC-BY). Locators "on [book] chapter:verse". Read: on Gen 2:9; on Deut 30:6. Chavel's notes (e.g. citing R. ... |
| rashi-tanakh-judaica-press | commentary | unverified | Unverified: print metadata not confirmed (the NLI catalog record returned HTTP 403; Rosenberg, Judaica Press 1982-83 is believed from bookseller ... |
| ratnagotravibhaga-johnston | primary | checked | Cite by chapter.verse in Johnston numbering (I.28, I.40–41, I.60–63); vyākhyā by Johnston page (marked "Rgv NN" in e-text). Read 2026-10-05. Takasaki ... |
| russell-what-i-believe | primary | checked | To-day and To-morrow series. Cited by chapter (1 Nature and Man; 2 The Good Life; 4 Salvation: Individual and Social). Wikisource transcription of ... |
| saadia-emunot-ibn-tibbon | primary | checked | Hebrew text (Leipzig 1864) read on Sefaria; treatise.chapter locators follow that edition's divisions. Read: III.1 (rational commandments), IV.1 ... |
| samyutta-nikaya-sujato | primary | checked | Cite by sutta (e.g. SN 56.11, SN 22.100:2.3). Verified 2026-10-05: metadata (scpub4, 2018, CC0) from SuttaCentral publication API; passages read in ... |
| sastri-gita-shankara | primary | checked | Gītā text and Śaṅkara's commentary. Cite by Gītā chapter.verse (add "comm." for the bhāṣya). Verified against the archive.org scan (title page and ... |
| sep-altruism-biological | academic | checked | First published 2003; substantive revision 21 July 2013. Cited by section. Verified 2026-10-05 (kin selection, reciprocal altruism, group selection, ... |
| sep-arabic-islamic-religion | academic | checked | First published 31 May 2023. Cite by section number (§5 evil; §7 ethics). |
| sep-buddhism-tiantai | academic | checked | First published 19 Nov 2014; substantive revision 13 Nov 2022. Read §4.1 ("evil is inherently included in Buddhahood") on 2026-10-05. |
| sep-ibn-arabi | academic | checked | First published 5 Aug 2008; substantive revision 5 Dec 2025. Cite by section number. |
| sep-ibn-sina | academic | checked | First published 15 Sep 2016; substantive revision 31 Oct 2025. Cite by section number. |
| sep-japanese-zen | academic | checked | First published 28 Jun 2006; substantive revision 7 Mar 2024. Read §2 (Dōgen's practice-realization, shushō; practice and realization "not two") on ... |
| sep-korean-philosophy | academic | checked | First published 14 Jan 2022. Read §2.2 (Xuanzang's five lineages, pañcagotra, including icchantikas "beyond the possibility of salvation"; Wŏnch'ŭk's ... |
| sep-morality-biology | academic | checked | First published 2008; substantive revision 15 July 2025. Cited by section. Verified 2026-10-05 (§§1.1, 2.2, 2.3, 4.1). |
| sep-naturalism | academic | checked | First published 2007; substantive revision 31 March 2020. Cited by section (§1 ontological naturalism; §1.7 moral facts; §2 methodological ... |
| sep-shankara | academic | checked | First published 4 October 2021. Cite by section number. Read 2026-10-05. |
| sep-sin-christian | academic | checked | First published 15 April 2021; substantive revision 7 November 2025 (the version read). Cited by section number. Read 2026-10-05: §4.3 (original ... |
| sep-tsongkhapa | academic | checked | First published 2011; substantive revision 17 Apr 2024. Read §1.1, §3, §5 on 2026-10-05. |
| sep-weakness-will | academic | checked | First published 2008; substantive revision 18 September 2025. Cited by section (§2 Davidson; §3.3 Holton; §3.4.2 empirical psychology). Not a ... |
| shantideva-bodhicaryavatara | primary | checked | Metadata confirmed 2026-10-05 from LoC/Harvard MARC via Open Library (ISBN 9780199540433; OUP 2008, Oxford World's Classics; originally published ... |
| shinran-tannisho-cws | primary | checked | Cite by section number (arabic, 1–18). Read section 3 on 2026-10-05: a good person attains birth, so an evil person all the more; Amida's Vow ... |
| soloveitchik-lonely-man-of-faith | article | checked | Scanned original journal issue (PDF linked from the Tradition page) read; page numbers are the journal's printed pages (first page 5; PDF page n = ... |
| subbarau-madhva-brahmasutra | primary | checked | Madhva's sūtra division differs from Śaṅkara's (e.g. Śaṅkara II.1.34–36 = Madhva II.1.35–37); cite Madhva's numbering plus page. Year from preface ... |
| talmud-bavli-koren | primary | unverified | Unverified: year range 2012-2019 taken from the publisher series, not checked against a catalog record. William Davidson Edition English read on ... |
| tanakh-jps-gender-sensitive | scripture | checked | Read on Sefaria (version "THE JPS TANAKH: Gender-Sensitive Edition", source jps.org), cited by book chapter:verse. Year 2023 confirmed from ... |
| tanya-kehot | primary | unverified | Unverified: translator list and 1973 first bilingual edition come from publisher/bookseller listings only; which translator rendered Part I is not ... |
| taylor-original-sin | book | checked | Cited by Part and page of the 1740 first edition. Checked 2026-10-05 against the archive.org scan (Princeton Theological Seminary copy) and its OCR ... |
| taylor-original-sin-supplement | book | checked | Bound with the 1740 first edition in the same archive.org volume, with its own pagination. Cited by page. Checked 2026-10-05 against the scan and OCR ... |
| tennie-ratchet | article | checked | pp. 2405–2415 (PubMed 19620111). Cited by section (Abstract; §5 "Cooperation and social transmission"). Verified 2026-10-05 in the PubMed Central ... |
| thibaut-ramanuja-sribhashya | primary | checked | Cite adhyaya.pada.sutra plus SBE page. Verified against the archive.org scan 2026-10-05, including II.2.3 (p. 487) and IV.1.13 (pp. 722-723). |
| thibaut-shankara-brahmasutra | primary | checked | Covers BS I.1–II.2. Cite adhyāya.pāda.sūtra plus SBE page. Verified against the archive.org scan (title page, running heads), 2026-10-05. |
| tsongkhapa-three-principal-aspects | primary | checked | Cite by verse (1–14, numbered in the translation). Verified 2026-10-05: page resolves; translator and dates from the page colophon; Tibetan source ... |
| vasubandhu-trimsika | primary | checked | Cite by verse (Tvk 2–6, 10–13, 17, 19). Verified 2026-10-05: URL resolves to the TEI e-text; verse numbering read directly. For an English rendering ... |
| vidyabhusana-nyaya-sutras | primary | checked | Cite book.chapter.sūtra (e.g. NS 1.1.2). Translator's bracketed glosses are his, not the sūtra's. OCR page numbers unreliable; do not cite pages. ... |
| wcf | confessional | checked | Text as published by the Orthodox Presbyterian Church (its constitutional text; later American revisions fall in chapters not cited); the OPC page ... |
| westminster-larger-catechism | confessional | unverified | Unverified: year 1648 not confirmed against a catalog record (reviewer to confirm or omit). Text as published by the OPC; Q&A 17-28 read at the OPC ... |
| witsius-economy-covenants | primary | checked | Two volumes; vol. 1 title page read on the archive.org scan (Google digitization). Locator book.chapter.section. Book I, ch. 8, §§30–35 (Adam as ... |
| woods-yoga-sutra | primary | checked | Sūtras with Vyāsa's Yoga-bhāṣya and Vācaspati Miśra's gloss. Cite by book.sūtra (e.g. YS 2.3). Metadata from the archive.org catalog record of the ... |
| wrangham-two-types | article | checked | pp. 245–253 (PubMed 29279379). Cited by section (Abstract; "Proactive vs. Reactive Aggression"; "Resolving the Rousseau–Kropotkin vs. Hobbes–Huxley ... |
| yerushalmi-guggenheimer | primary | checked | Read on Sefaria (Guggenheimer edition, CC-BY). Locators tractate chapter:halakhah. Read: Sanhedrin 4:9 (Mishnah text reads universally, "anybody who ... |

## Unverified cited sources: what is missing

- `ghazali-disciplining-soul`: Page markers for pp. 23-25 are out of order in the scan; confirm against a print copy.
- `maimonides-eight-chapters`: No catalog record opened for Gorfinkle (Columbia 1912); passages were read.
- `maimonides-mishneh-torah-touger`: NLI catalog record not opened; passages were read on Sefaria.
- `mishnah-kulp`: Version record gives no year or place; metadata partial. Passages were read.
- `rashi-tanakh-judaica-press`: Print metadata (NLI record returned HTTP 403; Rosenberg/Judaica Press 1982-83 believed only). Confirm a catalog record or cut the Rashi sentence in the Judaism response.
- `talmud-bavli-koren`: Year range 2012-2019 not checked against a catalog record.
- `tanya-kehot`: Translator list and 1973 edition from bookseller listings only; which translator rendered Part I is unconfirmed.
- `westminster-larger-catechism`: Year 1648 not confirmed against a catalog record; confirm or omit the year.

Caveats on sources kept as `checked` (researcher-stated; reviewer may want to re-check before the answers reach `reviewed`):

- `wcf`: the OPC page does not state which textual revision it prints (the notes say so).
- `kant-religion-greene-hudson`: passages read in a lightly corrected online text; confirm wording against the printed edition.
- `crc-acts-synod-1924`: correspondence of the translation's pages to the Dutch pagination is not confirmed.
- `witsius-economy-covenants`: OCR is poor; check quotations against page images.
- `nagarjuna-mmk`, `shantideva-bodhicaryavatara`, `dogen-shobogenzo`: metadata confirmed, passages read in the Sanskrit or Japanese originals (same locator system); the translators' wording was not seen, so do not quote them verbatim.
- `shantideva-bodhicaryavatara`: registry date is now 2008 (reissue; originally published 1998), not the seed's 1995.

## Thinker merge notes

- Replaced 33 existing entries with the profile versions (calvin, bavinck, van-til, augustine, witsius, edwards, hume, russell, mackie, dennett, railton, maimonides, halevi, soloveitchik, saadia, nachmanides, ash-ari, maturidi, ghazali, ibn-taymiyya, ibn-sina, ibn-arabi, shankara, ramanuja, madhva, kumarila, buddhaghosa, nagarjuna, vasubandhu, shantideva, dogen, tsongkhapa, dharmakirti).
- `razi`: dates-only correction applied to the existing entry (deathYear 1209 to 1210, per SEP). The profile's bio-less entry and its note were not copied.
- Added `darwin` and `kitcher` after `rosenberg` in the naturalism section.
- Existing entries without a profile are unchanged: turretin, vos, bahnsen, owen, aquinas, athanasius, anselm, oppy, rosenberg, quine, udayana, abhinavagupta. Order, section comments and the header comments are preserved.
- `dogen`: profile keeps 1200-1253 (death year 1253), as required.
- The Van Til comment "Drafted as a worked example of the profile fields; not yet reviewed against sources" is gone (the profile version replaced the entry).
- Dropped `representativeWorks[].sourceId` where the id is not in sources.yaml (the works are kept): `russell-mysticism-logic`, `kitcher-ethical-project`, `vasubandhu-abhidharmakosa`, `tsongkhapa-lamrim-chenmo`, `dharmakirti-pramanavarttika`.
- Fixed a YAML flow-mapping error in the profile's Maimonides entry (a title containing a comma, now quoted).
- Thinker profile count: 35 of 48 have a bio and significance.

## Gap closure

Date: 2026-10-05. Only the eight `unverified` records in `src/content/sources/sources.yaml` were edited. `npm run validate` passes (96 sources). Six are now `checked`; two remain `unverified`. National Library of Israel (NLI) pages return a Cloudflare challenge to automated clients, so no NLI record could be opened; where Sefaria's version metadata names an NLI record, the version metadata itself is the basis.

| Source id | Outcome | Basis |
|---|---|---|
| westminster-larger-catechism | checked, year 1647 | `year` now means the year the Westminster Assembly completed the catechism. The OPC states "Larger and Shorter Catechisms (1647)" at https://www.opc.org/confessions.html. Scottish General Assembly adoption (1648) is a later event and is noted, not used. The OPC Larger Catechism page (https://www.opc.org/lc.html) carries no date; Q. 25 re-read there and supports the answer's quoted clause. A Parliament-approval date was not found in any source opened, so none is asserted. |
| rashi-tanakh-judaica-press | checked | Sefaria version metadata (https://www.sefaria.org/api/texts/Rashi_on_Isaiah.53.3): "The Judaica Press complete Tanach with Rashi, translated by A. J. Rosenberg", CC-BY. Open Library records for Rosenberg's Isaiah (Judaica Press; ISBN 0910818509, 1982; ISBN 0910818525, 1983) support the print edition. `year` omitted (multi-volume series). Weakest of the six: no library catalog record opened (Princeton and NLI blocked). |
| talmud-bavli-koren | checked, year removed | Sefaria version "William Davidson Edition - English" (https://www.sefaria.org/api/texts/Berakhot.17a) states it is from the digital William Davidson edition of the Koren Noé Talmud with Steinsaltz; publisher page https://korenpub.com/collections/the-noe-edition-koren-talmud-bavli-1 confirms Koren Publishers Jerusalem, 42 volumes. The 2012-2019 range could not be confirmed against a catalog, so `year` is dropped and the record describes the online edition. `url` changed to a specific page. |
| mishnah-kulp | checked, no year | Sefaria version "Mishnah Yomit by Dr. Joshua Kulp", source http://learn.conservativeyeshiva.org/mishnah/ (CC-BY); Sefaria's Kulp topic and Modern Commentary pages place him at the Conservative Yeshiva, Jerusalem. No publication year exists in any record found, so `year` stays omitted; author/translator Kulp added. |
| maimonides-mishneh-torah-touger | checked, year removed | Sefaria version title "Mishneh Torah, trans. by Eliyahu Touger. Jerusalem, Moznaim Pub. c1986-c2007" (https://www.sefaria.org/api/texts/Mishneh_Torah,_Repentance.5.1; NLI source not opened). Open Library lists Touger's Moznaim volumes (Hilchot Teshuvah 1987, Sefer Hamadah 2010). The volume for each cited chapter is unconfirmed, so the range is recorded under `edition` and `year` dropped. |
| maimonides-eight-chapters | checked | Open Library work record: New York, Columbia University Press, 1912 (LCCN 14000274); archive.org records eightchaptersofm00maim and cu31924029203119 list Maimonides, Ibn Tibbon, Gorfinkle. Sefaria version transcribes this translation via Wikisource. |
| tanya-kehot | unverified | Sefaria's version "Kehot Publication Society (English Translation)" names no translator or year. Kehot and bookseller listings give four translators and 1973, but nothing opened says who translated Part I or whether Sefaria's text is the 1973 or a revised rendering. Kehot product page 404; no catalog record found. Needs a print copy or Kehot's translator credits for Part I. |
| ghazali-disciplining-soul | unverified | Imprint confirmed (title and copyright pages in the archive.org scan `6-abu-hamid-muhammad-ghazali-on-disciplining-the-soul-and-breaking-the-two-desires`; Open Library). The cited pages are wrong by the printed pagination, so the protocol's fourth condition fails. See below. |

### Recommended locator change for ghazali-disciplining-soul (answers not edited)

The OCR text prints folios 24/25 and 26/27 out of order. Running heads settle it: "SPIRITUAL DISCIPLINE" heads even pages and "Disciplining the Soul" heads odd pages (folios 18-22 confirm), and the section opens on an unheaded page (24). Resulting positions:

| Passage | Cited now | Should be |
|---|---|---|
| "Were the traits of character not susceptible to change there would be no value in counsels, sermons and discipline" | p. 23 (answers lines 27 and 107) | p. 25 |
| Four degrees; second type "knows that he is not acting as he should" | pp. 24-25 (line 79) | p. 26 |
| Desire and anger created for a purpose, not to be extirpated; restore moderation | p. 25 (line 19) | pp. 27-28 |

Section locator alternative: Ihya', Book XXII, section 3, "An Exposition of the Susceptibility of the Traits of Character to Change through Discipline" (scan marker [22.3]). This section contains all three passages. If a print copy confirms the pages above, mark the record `checked` after updating the three Cite locators. The pages 18-19 and 37 citations were not rechecked.
