# Thinker profile audit (great-and-terrible)

Scope: the 34 thinkers named in the `thinkers:` frontmatter of `src/content/answers/*/great-and-terrible.mdx`. Edits were made in `src/content/thinkers/thinkers.yaml`. `npm run validate` passes.

Fetch notes: Britannica, the Michigan faculty page, Routledge/REP mirror pages, iranicaonline and several SEP slugs (madhva, dogen, ramanuja, calvin, shantideva alternates) returned 403/404. Where a claim was verifiable only from Wikipedia or a search snippet it was softened or removed. "Not verified" means no reliable source was fetched; the statement was left only where it is uncontroversial and low-risk, and is listed under residual risks.

## Priority thinkers

**halevi** Refs: https://plato.stanford.edu/entries/halevi/
- Corrected: birth "around 1075 in Toledo or Tudela" -> SEP says probably Tudela, 1050s-1060s, year unknown (era and bio fixed).
- Corrected: Kuzari "revised during the 1130s" -> SEP: written in the few years before the 1140 departure; language Judeo-Arabic.
- Corrected: death -> SEP: sailed from Alexandria May 1141, died in the Land of Israel that summer (bio previously implied death en route unclear).
- Removed unverified "trained in Hebrew and Arabic learning" and "lived in Muslim and Christian Spain".

**nachmanides** Refs: https://www.sefaria.org/api/topics/ramban ; https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/nahmanides-moses-ben-nahman ; EJ text via search (encyclopedia.com Nahmanides entries)
- Dates 1194 (Girona) and c. 1270 (Acre) confirmed (Sefaria; encyclopedia.com says c. 1195, probably Acre).
- Removed "chief rabbi of Catalonia" (not in fetched references); now "leading rabbi", physician added.
- "Forced to leave Spain" -> sentenced to banishment after the disputation; left for Jerusalem 1267 (encyclopedia.com).
- "Torah commentary completed late in life" -> written in old age, main part in Spain, additions in Israel (EJ).

**soloveitchik** Refs: https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/soloveitchik-joseph-baer ; https://www.ebsco.com/research-starters/history/joseph-b-soloveitchik/
- Corrected: RIETS "1941 until 1986" -> retired 1985 (Encyclopedia of Religion entry).
- "ordaining some two thousand" -> "almost two thousand ordained" (EBSCO).
- Removed "died in Boston" (place not confirmed); 1932 Berlin doctorate on Cohen, Maimonides School 1937, works/years (Halakhic Man 1944, Kol Dodi Dofek 1956 delivered, Lonely Man of Faith 1965) confirmed.

**saadia** Refs: https://plato.stanford.edu/entries/saadya/ ; https://www.sefaria.org/api/topics/saadia-gaon
- Birth Fayyum 882, death Baghdad 942, gaon of Sura 928 confirmed.
- Removed "worked in Palestine, Syria and Iraq" and "completed 933" (only Wikipedia-level support); removed `year: 933` from representativeWorks.
- "works on grammar, law and the calendar" -> SEP list: Hebrew dictionary, grammatical and mathematical writings; Bible translations (plural).
- Added that his Sura tenure was contested (SEP).

**ash-ari** Refs: https://www.ebsco.com/research-starters/biography/al-ashari
- Basra birth, conversion at about forty (912/913), dreams legend, Maqalat, Luma, Ibana confirmed.
- Softened "dominant in Sunni theology" to "highly influential". Dates 873/4-935/6 rest on Wikipedia/Britannica snippets via search (not fetched directly).

**maturidi** Refs: https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/maturidi-al-944
- Death 944, Maturid district, Hanafi, Kitab al-Tawhid and Ta'wilat confirmed. Source says he died at Maturid: bio now "in or near Samarqand". "Dominant" -> "leading" among Hanafis.

**ibn-arabi** Refs: https://plato.stanford.edu/entries/ibn-arabi/
- Corrected: left the West 1201 (not 1200). Education "in Seville" -> many teachers in al-Andalus and North Africa. "Syria, Iraq, Anatolia" -> Iraq and Anatolia (SEP).
- Removed unverified Futuhat start year 1202 and Fusus year 1229 (bio and works). Futuhat drafts 1231/1238 noted only from a search snippet. Damascus 1223 and death 1240, 100+ Fusus commentaries confirmed.

**witsius** Refs: https://prdl.org/author_view.php?a_id=91 (and the &limit=500 listing)
- Professorships Franeker 1675, Utrecht 1680, Leiden 1698 (d. 1708) confirmed. Oeconomia first edition Leeuwarden: Hagenaar, 1677 confirmed; later editions and English translations (1803, 1804) noted.
- Removed Enkhuizen birthplace, studies at Groningen/Utrecht/Leiden and pastorates (PRDL gives none; not verifiable). Mediation claim softened to "generally described".

**railton** Refs: https://www.uehiro.ox.ac.uk/people/professor-peter-railton ; PhilArchive record for "Moral Realism" (Phil. Review 95(2), 1986, 163-207, via search)
- Corrected: now emeritus; titles Kavka Distinguished University Professor and Perrin Professor (Uehiro bio). Facts, Values, and Norms (CUP 2003) confirmed.
- Removed birth year 1950, "taught since 1979", Princeton PhD 1980 under Lewis (Wikipedia only; Michigan page returned 403). Added Homo Prospectus (2016), AAAS membership.

**kitcher** Refs: https://www.christs.cam.ac.uk/college/people/fellows/professor-philip-kitcher ; https://sofheyman.org/persons/philip-kitcher
- Christ's College BA 1969, Princeton PhD 1974, Vassar/Vermont/Minnesota/UCSD, Columbia from 1999, John Dewey Professor Emeritus confirmed. Added Vassar and 1999.
- Birth 1947 London and "British-born" rest on encyclopedia.com (Contemporary Authors)/Wikipedia search snippets only; not fully verified. Book years rest on publisher listings.

**darwin** Refs: https://darwin-online.org.uk/darwin.html ; https://www.darwinproject.ac.uk/commentary/human-nature/expression-emotions
- Shrewsbury 1809, Edinburgh medicine, Christ's College, Beagle, Down House, Westminster Abbey, Origin 1859, Descent 1871, Expression 1872 confirmed. No change.

**dogen** Refs: https://www.saet.ac.uk/Buddhism/Dogen ; https://plato.stanford.edu/entries/japanese-zen/ ; REP article (via search)
- 1200-1253 (SAET, REP; SEP Zen entry gives 1254), Song China, Soto, Shobogenzo in Japanese, shikantaza, shusho, uji, two surviving Japanese Zen traditions confirmed. No change. Eihei Koroku (a listed work) not independently verified.

**madhva** Refs: https://iep.utm.edu/madhva/ ; https://www.encyclopedia.com/people/philosophy-and-religion/hinduism-biographies/madhva
- Dates: IEP 1238-1317, but encyclopedia.com notes dispute (1197-1276); bio now says so. Pajaka near Udupi confirmed (encyclopedia.com); Vayu belief is a follower belief (kept as sectarian).
- Corrected: "critic of both Advaita and Vishishtadvaita" -> "non-dualist Vedanta" (only that is in the sources). Anuvyakhyana not verified in a fetched source.

**kumarila** Refs: https://plato.stanford.edu/entries/kumaarila/
- c. 660 CE, contemporary of Dharmakirti, evidence for South India (Tamil forms), Slokavarttika, Tantravarttika, Tuptika, lost Brhattika, Bhatta school confirmed. No change.

**buddhaghosa** Refs: https://encyclopediaofbuddhism.org/wiki/Visuddhimagga ; Access to Insight Path of Purification PDF (metadata only)
- Only "5th century, Sri Lanka" confirmed. Removed "Mahanama, who was reigning in 428", "twelfth century" claim; hedged the Sinhalese-to-Pali tradition as "said to". Mahavihara/Anuradhapura rests on Wikipedia-level sources.

**shantideva** Refs: https://plato.stanford.edu/entries/shantideva/ (fetched at that slug)
- Late 7th-mid 8th c., Nalanda, Prasangika classification, recitation legend, ~1,000 verses, Siksasamuccaya confirmed. No change.

**vasubandhu** Refs: https://plato.stanford.edu/entries/vasubandhu/
- 4th-5th c. Gupta period, Gandhara, Kashmir, Ayodhya, Vaibhasika/Sautrantika, Frauwallner, Twenty and Thirty Verses confirmed. No change (Trisvabhavanirdesha not mentioned in the excerpt retrieved).

## Remaining thinkers

**maimonides** https://plato.stanford.edu/entries/maimonides/ : 1138-1204, Cordoba, Almohads, Fustat confirmed; Mishnah commentary 1168, Mishneh Torah c. 1180, Guide c. 1190, al-Fadil court physician not in retrieved text (unchanged, not verified).

**ghazali** https://plato.stanford.edu/entries/al-ghazali/ : Birth c. 1055/6 Tabaran-Tus, Nizamiyya Baghdad 1091, 1095 departure, 1096 pilgrimage, Tahafut c. 1095, Nishapur 1106, death 1111 at Tus confirmed. Removed unverified "private school and Sufi convent in Tus".

**ibn-taymiyya** https://plato.stanford.edu/entries/ibn-taymiyya/ : Harran 1263, family fled Mongols 1269 to Damascus, Sukkariyya post 1284, imprisonments Cairo/Alexandria/Damascus, death 1328 in prison confirmed. No change.

**ibn-sina** https://plato.stanford.edu/entries/ibn-sina/ : SEP gives ca. 970-1037, birth near Bukhara (Afshana), last 13 years at 'Ala' al-Dawla's court, died 1037. Corrected birth c. 980 -> c. 970 (birthYear replaced by era). Removed unverified "vizier at Hamadan" (now "counsellor ... including Hamadan and Isfahan"), and Shifa' c. 1020 date (bio and works).

**shankara** https://plato.stanford.edu/entries/shankara/ : Dating debate, Kerala hagiography, 32 years, Govinda/Gaudapada, works, spurious attributions confirmed. No change.

**ramanuja** https://iep.utm.edu/ramanuja/ : Both dating proposals, Sriperumbudur, Yadavaprakasa, Sri Bhasya, Vedarthasamgraha, Gita Bhasya, Gadya Traya confirmed. No change.

**nagarjuna** https://plato.stanford.edu/entries/nagarjuna/ : c. 150-250 CE, south India, ~450-verse MMK, Prasangika as Tibetan official reading confirmed. No change.

**tsongkhapa** https://plato.stanford.edu/entries/tsongkhapa/ : 1357-1419, Amdo, Ganden 1409, work years 1402/1407/1408/1418 confirmed. Removed unverified Rendawa as principal teacher and Drepung/Sera follow-on.

**augustine** https://iep.utm.edu/augustine/ : Thagaste 354, Manichaeism/Neoplatonism, baptism by Ambrose Easter 387, priest at Hippo c. 391, bishop c. 396, death in Vandal siege 430 confirmed. Confession/City of God dates unchanged (approximate).

**calvin** https://iep.utm.edu/john-calvin/ : Paris, Orleans, Institutes 1536 first edition, revised to 1559 confirmed. Removed "Bourges" (not in source). Geneva/Strasbourg chronology not verified.

**bavinck** Search result summarizing hermanbavinck.org / Banner of Truth biographies (not fetched): Hoogeveen 1854, Kampen, Leiden doctorate 1880 on Zwingli, Free University 1902, Stone Lectures 1908, Dogmatiek completed 1901, First Chamber 1911. No change; sources not directly fetched.

**edwards** https://plato.stanford.edu/entries/edwards/ : 1703-1758, Yale, Northampton, dismissal 1750, Stockbridge, Princeton, smallpox; works Religious Affections 1746, Freedom of the Will 1754, Original Sin 1758, True Virtue 1765 confirmed. No change.

**hume** https://plato.stanford.edu/entries/hume/ : Edinburgh 1711, France 1734, Treatise 1739-40, Enquiries 1748/1751, History 1754-62, failed chairs, Advocates Library, Dialogues 1779 confirmed. No change.

**mackie** Biography summary via search (Wikipedia-based, not fetched): Sydney, Otago, Sydney, York, University College Oxford fellow from 1967, FBA 1974, Ethics 1977, Miracle of Theism 1982. No change; weak source.

**russell** https://plato.stanford.edu/entries/russell/ : 1872-1970, Principia with Whitehead, analytic founder, Problems of Philosophy confirmed in the retrieved summary; Trellech birth, Nobel 1950, 1918 prison, other work years not in retrieved text. No change.

**dennett** Search results (Tufts Daily, APA In Memoriam; snippets): 1942-2024, Harvard BA, Oxford DPhil 1965 under Ryle, Tufts 1971-2022, Center for Cognitive Studies, died Portland, Maine. No change.

## Residual weak spots
Ash'ari dates, Mackie bio, Bavinck, Dennett (snippets only); Kitcher birth data; Buddhaghosa's Mahavihara detail; Madhva's Anuvyakhyana; Dogen's Eihei Koroku; Maimonides work years; Soloveitchik's Kol Dodi Dofek year (delivered 1956, published 1961).

## Follow-up: weak-source items closed

- **ash-ari** (https://www.iranicaonline.org/articles/asari-abul-hasan-ali-b/): Iranica gives ca. 260/874-324/936, born Basra, conversion at about forty (ca. 300/912-13), works Maqalat, Luma', Ibana. Era now "c. 874-936"; removed unverified "died in Baghdad" and "in Ramadan" (dreams legend kept, Ebsco).
- **mackie**: ADB, Oxford and DNB pages not retrievable (wrong or 404 results). Removed birthplace, education, 1967 fellowship and FBA 1974; kept only broad career, 1977 and 1982 works (publication years not checked against a fetched reliable page; flagged).
- **bavinck** (https://hermanbavinck.org/biography/): Hoogeveen 1854, Kampen and Leiden, 1880 Zwingli doctorate, Free University 1902, Stone Lectures 1908, Dogmatiek 1895-1901, Senate 1911 confirmed. Removed "briefly", the Kampen teaching claim and "succeeded Kuyper".
- **dennett** (https://as.tufts.edu/news-events/news/remembering-daniel-c-dennett-university-and-fletcher-professor-philosophy-emeritus): Harvard BA, Oxford doctorate, Tufts from 1971 (retired end of 2022 per Tufts Daily), directed Center for Cognitive Studies, died Portland, Maine. Removed "1965 under Ryle" and "co-directed" (now "directed").
- **kitcher**: Columbia page 403; Christ's College page (confirmed earlier) covers Cambridge, Princeton 1974, Vassar/Vermont/Minnesota/UCSD, Columbia 1999. Removed birthYear 1947 and "British-born".
- **buddhaghosa** (https://buddhistuniversity.net/content/canon/vsm_buddhaghosa; Nanamoli introduction snippet via search): only the fifth century and Anuradhapura/Sinhalese-to-Pali tradition supported. Removed "Mahavihara" wording.
- **madhva**: IEP and encyclopedia.com (37 works) do not name the Anuvyakhyana; removed it from bio and works.
- **dogen** (https://plato.stanford.edu/entries/japanese-zen/ ; SAET): Bendowa and Shobogenzo in Japanese confirmed; Eihei Koroku not found, removed from works. Note SEP gives 1254 for his death; SAET and REP give 1253 (kept).
- **maimonides** (https://plato.stanford.edu/entries/maimonides/): Commentary 1168, Guide 1190, Egypt 1166/Fustat, court physician, community leader confirmed. Mishneh Torah date and al-Fadil/Saladin detail not in SEP; removed.

`npm run validate` passes after these edits.
