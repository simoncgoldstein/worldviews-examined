# Revelation & History production report

2026-10-07. Branch `phase-4-revelation-history-production`, based on `main` at `d7d57a0` (PR #13 merged). Single Opus 5.5
session; **no subagents and no independent reviewer**. All 18 answers carry `reviewStatus: reviewed`, which here means
**self-reviewed by the production run**, not independently reviewed. The final corpus-wide audit was not begun.

**18 new answers; 15,709 authored words** (theses + visible + Deep Dive); **287 answer-local distinct source/locator
pairs; 335 citation markers; 70 distinct registered works cited.** Site coverage is now **168/168 answers**.

Counts exclude headings, citation tags, bibliography and thinker metadata. Visible counts exclude the thesis and include
the Christian response or objection-and-reply and the pressure questions. Pairs are deduplicated within an answer, not
across answers.

## Editorial method

The established hierarchy was kept: **core truth → natural explanation → important nuance → technical Deep Dive**.
- Theses answer in the first clause, without thinker names; 26–39 words, 142–230 characters (limit 240).
- Openings explain before quoting. Two quotation-led openings (Jewish `revelation`, Islamic `jesus`) were rewritten in the
  thesis pass.
- Named thinkers appear in visible prose where the attribution matters (Maimonides' test, Halevi's dialogue, al-Ghazali's
  converging evidence, Śaṅkara's reading of the avatāra, Ehrman's reconstruction, the three Hindu and two Buddhist
  receptions). Scholarly disputes (Craig vs Lowder; Gottlieb vs Tal; Earman vs Hume; al-Tabari vs Ibn Kathir) are in the
  Deep dives.
- The governing historical rule (source → historical conclusion → explanation → theology) is applied in every `jesus`
  lane and in the historical evaluations of Sinai, the Qur'an's preservation, the Vedic tradition and the Mahāyāna sūtras.

## Word counts by question and worldview

### `revelation` (anchor): 5,662 words

| Lane | Thesis | Chars | Visible | Deep dive | Citations | Uses |
|---|---:|---:|---:|---:|---:|---:|
| christianity | 39 | 222 | 577 | 415 | 23 | 25 |
| naturalism | 31 | 215 | 572 | 298 | 17 | 20 |
| judaism | 38 | 214 | 570 | 339 | 19 | 21 |
| islam | 30 | 188 | 585 | 344 | 19 | 21 |
| hinduism | 31 | 205 | 577 | 282 | 13 | 15 |
| buddhism | 34 | 210 | 578 | 322 | 13 | 13 |

### `history` (medium): 4,195 words

| Lane | Thesis | Chars | Visible | Deep dive | Citations | Uses |
|---|---:|---:|---:|---:|---:|---:|
| christianity | 35 | 210 | 432 | 259 | 17 | 20 |
| naturalism | 36 | 210 | 419 | 220 | 7 | 10 |
| judaism | 34 | 207 | 427 | 245 | 13 | 15 |
| islam | 33 | 201 | 412 | 233 | 15 | 17 |
| hinduism | 31 | 202 | 435 | 221 | 11 | 12 |
| buddhism | 33 | 217 | 443 | 247 | 13 | 14 |

### `jesus` (anchor): 5,852 words

| Lane | Thesis | Chars | Visible | Deep dive | Citations | Uses |
|---|---:|---:|---:|---:|---:|---:|
| christianity | 36 | 193 | 619 | 665 | 34 | 39 |
| naturalism | 33 | 223 | 580 | 346 | 19 | 23 |
| judaism | 26 | 142 | 566 | 418 | 13 | 18 |
| islam | 39 | 208 | 602 | 402 | 17 | 23 |
| hinduism | 38 | 226 | 508 | 180 | 14 | 17 |
| buddhism | 33 | 230 | 527 | 234 | 10 | 12 |

**By worldview (all three questions):**

| Lane | Words |
|---|---:|
| christianity | 3,077 |
| naturalism | 2,535 |
| judaism | 2,663 |
| islam | 2,680 |
| hinduism | 2,303 |
| buddhism | 2,451 |

**Depth notes:**
- `revelation` visible prose is 570–585 against a guide of about 400–525; drafts ran 576–720 and were cut twice. Each lane
  must state what is revealed, how it is recognized and how that recognition fares historically.
- `history` visible prose is 412–443 (guide 275–400), in line with earlier medium questions (396–461).
- `jesus` visible prose is 508–619 (guide 425–575). It is the longest question on the site, as the brief allowed. The
  Hindu (180) and Buddhist (234) Deep dives are short on purpose: those traditions have no ancient teaching about Jesus.
- Nothing was padded. Per-question records:
  [`revelation`](../../questions/revelation/PRODUCTION-NOTES.md),
  [`history`](../../questions/history/PRODUCTION-NOTES.md),
  [`jesus`](../../questions/jesus/PRODUCTION-NOTES.md).

## Source footprint

70 distinct works were cited, all registered and `checked`.

**One source record added (199 → 200):** `ej-jesus`, the Encyclopaedia Judaica (2nd ed., Gale 2007) article "Jesus" on
Jewish Virtual Library. It was the narrow check on Josephus *Antiquities* 20.200 the dossier required (see the Josephus
section).

**Notes extended with new locators read in production** (no status changes):
- `buddhaghosa-path-of-purification`: XIII.29–30, 64–65.
- `ibn-khaldun-prolegomenes-slane`: pp. 348–350; introduction pp. iii–v.
- `carroll-something-rather-than-nothing`: §1 n. 1.
- `fatoohi-end-of-jesus-life`: printed page numbers.
- `darwin-descent`: ch. V.
- `macdonald-muslim-theology`: pp. 149–151, 241.
- `kern-lotus-sutra`: page corrections (II pp. 40–41).
- `sastri-gita-shankara`: 8.16.
- `roy-final-appeal`: p. 17.
- `quran-haleem`: 3:47, 19:20–21.
- `craig-ehrman-debate-2006`: segments relocated in the live transcript.

**Primary and core sources carry every view section:** Scripture, Westminster and Belgic; Augustine, Calvin, Turretin,
Bavinck; Hume; the Tanakh, Talmud, Maimonides, Halevi, Saadia, Nachmanides; the Qur'an, Bukhari, al-Tabari, al-Razi, Ibn
Kathir, al-Ghazali, Ibn Khaldun; the Gītā, Manu, Śaṅkara, Rāmānuja, the Viṣṇu Purāṇa; the Pāli canon, the Lotus Sūtra,
Śāntideva, Buddhaghosa, Shinran. The historical track uses the shared packet's balance: critical (Martin, Ehrman, Lowder,
Jewish Encyclopedia), defenders (Craig, Habermas, Hurtado) and reference works (Posen, SEP, Birmingham, EJ).

Distinct works: `aha-humanist-manifesto-iii`, `anguttara-nikaya-sujato`, `augustine-city-of-god`,
`bavinck-reformed-dogmatics-monergism-1`, `-3`, `-4`, `belgic-confession`, `bible-esv`, `birmingham-quran-manuscript`,
`buddhaghosa-path-of-purification`, `buhler-manu`, `bukhari-sahih-khan`, `calvin-institutes-beveridge`,
`carroll-something-rather-than-nothing`, `cobb-review-good-heart`, `craig-ehrman-debate-2006`, `craig-empty-tomb-nts`,
`darwin-descent`, `digha-nikaya-sujato`, `ej-barcelona-disputation`, `ej-jesus`, `farber-torahs-exodus`,
`fatoohi-end-of-jesus-life`, `gandhi-autobiography-desai`, `geiger-mahavamsa`, `ghazali-confessions-field`,
`gottlieb-sinai-argument`, `govindacharya-gita-ramanuja`, `habermas-resurrection-research`, `halevi-kuzari-hirschfeld`,
`hume-enquiry`, `hurtado-worship-of-christ`, `ibn-kathir-tafsir`, `ibn-khaldun-prolegomenes-slane`,
`jamison-witzel-vedic-hinduism`, `jewish-encyclopedia-jesus`, `josephus-antiquities-whiston`, `kern-lotus-sutra`,
`lowder-empty-tomb-jhc`, `macdonald-muslim-theology`, `maimonides-mishneh-torah-touger`, `martin-yale-new-testament`,
`nachmanides-vikuach-wikisource`, `posen-testimonium-flavianum`, `quran-haleem`, `railton-moral-realism`,
`rashi-tanakh-judaica-press`, `razi-mafatih-al-ghayb`, `roy-final-appeal`, `russell-free-mans-worship`,
`saadia-emunot-ibn-tibbon`, `samyutta-nikaya-sujato`, `sastri-gita-shankara`, `sep-abhidharma`,
`sep-arabic-islamic-language`, `sep-buddha`, `sep-miracles`, `sep-religious-experience`, `shantideva-bodhicaryavatara`,
`shinran-tannisho-cws`, `soyen-shaku-sermons`, `tabari-jami-al-bayan`, `tacitus-annals-church-brodribb`,
`talmud-bavli-koren`, `tanakh-jps-gender-sensitive`, `thibaut-shankara-brahmasutra`, `turretin-institutio-1847`,
`vivekananda-complete-works-4`, `wcf`, `wilson-vishnu-purana`.

**Dossier works not cited publicly:** `pliny-letters-melmoth` (early worship is carried by Paul and Hurtado),
`westminster-larger-catechism`, `jha-slokavarttika` (removed as a duplicate of `ultimate-authority`),
`sep-mind-indian-buddhism` (never registered).

## Thinker footprint

Public thinker metadata (number of answers out of three):

| Lane | Thinkers |
|---|---|
| Reformed | Bavinck 3, Augustine 2, Calvin 2, Turretin 1 |
| Naturalism | Hume 2, Darwin 1, Russell 1, Railton 1 |
| Judaism | Maimonides 3, Saadia 3, Halevi 1, Nachmanides 1 |
| Islam | al-Ghazali 1, **Ibn Khaldun 1 (new profile)**, **al-Razi 1 (profile written)** |
| Hindu | Śaṅkara 3, Rāmānuja 1 |
| Buddhist | Śāntideva 1, Buddhaghosa 1, Shinran 1 |

- **Ibn Khaldun** was added as an Islam specialist and profiled from de Slane's introduction. The `history` answer relies
  on him materially.
- **Al-Razi** was already registered but had no biography; it was written from Macdonald (1903, p. 241) and his
  commentary, because his *tawātur* objection carries the Islamic `jesus` answer. The registry's birth year was not
  re-verified, and this is recorded in the profile's notes.
- Registry: 50 thinkers, 41 profiled (was 49 and 39).
- **Not profiled; cited through their sources:** Ehrman, Martin, Craig, Lowder, Habermas, Hurtado, Kohler, Farber,
  Gottlieb, Tal, al-Tabari, Ibn Kathir, Fatoohi, al-Jurjani, Roy, Vivekananda, Gandhi, Soyen Shaku, the Dalai Lama, Cobb.
- Van Til appears once (the Christian `revelation` Deep dive, as the far end of an emphasis spectrum) and is not in the
  metadata.

## ESV quotation changes

30 rows were added to `docs/ESV-QUOTATION-LEDGER.md`:

| Answer | Quotations |
|---|---|
| `christianity/revelation` | Ps 19:1–4; Heb 1:1–2; Acts 2:22; Luke 1:1–4; Acts 17:30–31; 1 Cor 15:17 |
| `christianity/history` | Gen 12:3; Gal 4:4; Matt 28:20; Rev 21:5; Eph 1:9–10; Heb 9:26 |
| `judaism/history`, `islam/history` | Heb 9:26 |
| `christianity/jesus` | John 1:14; Col 2:9; Mark 10:45; Rom 1:3–4 (two fragments); Acts 2:36; 1 Cor 15:20; 1 Cor 15:3–8 ("received"); Gal 1:18–19; 1 Cor 15:4; 1 Cor 8:6 (two fragments); 1 Cor 16:22 |
| `naturalism/jesus` | 1 Cor 15:4 |
| `judaism/jesus` | Heb 9:28 |
| `hinduism/jesus` | 1 Cor 8:6 (two fragments); John 1:14 |
| `buddhism/jesus` | Mark 14:36 |

- **This batch:** 230 words, 1,121 bytes, 46 conservative verse charges.
- **Ledger totals:** 592 words, 2,976 bytes, 107 verse instances. That is 0.49% of about 120,927 answer-body words,
  recomputed by script for all 168 answers.
- **Highest book charge:** Romans, at 21.
- **Checks:** every quotation was checked against esv.org on 2026-10-07. The ledger's scope line, book table, 18
  proportion rows and corpus measure were updated.
- In keeping with the brief, `jesus` quotes compactly and gives most passages as references.

## Project-generated translations

**Short renderings presented as our translation:**
- al-Razi on 4:157, "a few people who could have agreed on a lie", "mutually conflicting", "God knows best";
- Mujahid via al-Tabari, "they crucified a man other than Jesus";
- Ibn Khaldun (French), "no one could advance or delay it" and "like individuals, have an existence, a life of their
  own".

Each was rechecked against the cached Arabic or French text.

**Paraphrased and labelled:**
- al-Tabari and Ibn Kathir on 4:157; al-Razi's sophistry objection;
- Saadia III.7, VIII.1, VIII.8, VIII.9 (Hebrew);
- Nachmanides' *Vikuach* (Hebrew Wikisource transcription, base edition unstated: paraphrase only, with the caveat in the
  prose);
- Turretin XIII.1 (Latin);
- BCA 9.42–44 (Sanskrit).

Bavinck is paraphrased throughout (Monergism automated English; no consequential wording quoted). No polished direct
English quotation of the *Vikuach* appears.

## Secondary-attributed primary claims

- Earman, Campbell, Babbage, Ahmed and Baden Powell are given as SEP Miracles reports them.
- Alston, Plantinga, Freud and Marx are given as SEP Religious Experience reports them.
- Al-Jurjani is given via SEP (Street & Germann §2.2).
- Bashshar ibn Burd, Ibn al-Muqaffaʿ and the Muʿtazili attitude are given via Macdonald (1903).
- The Dalai Lama's words are given "as quoted by Cobb".
- Kohler's apparition theory is given via the Jewish Encyclopedia (1906).
- Habermas's survey is given as "a Christian scholar surveying the literature", with no percentages.

## Narrow external checks

No new research was done. Checks covered:
- exact wording before quotation;
- locators;
- **one targeted authenticity check** on *Antiquities* 20.200 (the EJ "Jesus" article);
- **one locator search** for Buddhaghosa on eons, in a cached copy of the already registered BPS *Visuddhimagga*;
- **one biography check** for al-Razi (Macdonald p. 241).

Almost all checks used the research pass's cached copies of the registered editions. Live fetches were used for esv.org,
Sefaria, quran.com, SuttaCentral, the Birmingham release, the Craig–Ehrman transcript, SEP and Gutenberg. Each question's
production notes list the checks.

**Corrections of the dossier made during production (recorded, not research):**
- *Kuzari* I.8's criteria for public miracle are spoken by the Khazar king, not by the rabbi.
- SEP Miracles does not say that Earman calls Hume's maxim "misapplied". It reports Campbell and Earman calling it trivial
  (§3.1.2) and Earman calling Part 1 an "abject failure" (§3.3).
- No read source supported "heat death". Carroll §1 n. 1 supports only the low-entropy arrow of time.
- Ehrman's 2006 order is scripture, then exaltation, then visions; it is not visions first.
- Al-Tabari prefers Wahb's account because it explains the companions' honest belief. Ibn Kathir instead has the
  companions see the ascension. The answer records the disagreement.
- The dossier's "no ancient source before the Qur'an denies that Jesus was executed" was not used, because second-century
  docetic denials (not researched) are a known exception.
- The Lotus II "one vehicle" passage is on pp. 40–41.
- The Mishneh Torah's Kings chapter was condemned to be burned after the Barcelona disputation (EJ). The draft wording
  "cut by censors" was replaced.

## Remaining research caveats

All of these are disclosed in public prose or in the citation notes where material.

- **Reformed:** the dating of Daniel and Isaiah 40–55 was not researched, so prophecy is treated as an internal argument.
  N. T. Wright is unavailable. Bavinck is paraphrased.
- **Naturalism:** Lüdemann, Allison and the psychiatric and cognitive-dissonance literature were not read. Ehrman's later
  book was not read. Earman and Mackie are available only via SEP.
- **Judaism:**
  - the Pentateuch's date is not sourced ("This page does not settle when the Torah was written");
  - Berman was not consulted;
  - the *Vikuach* base edition is unstated;
  - Schäfer was not read, so the Jewish Encyclopedia (1906) stands in.
- **Islam:**
  - al-Baqillani and *ṣarfa* were not read;
  - Sanaa and early variants were not read ("no claim either way");
  - the tafsir base editions are unnamed;
  - docetic parallels before the Qur'an were not researched.
- **Hindu:** there is no scholarly survey of Hindu receptions of Jesus, so three primaries give the range. Ramakrishna was
  not used.
- **Buddhist:** the Yogācāra defences and the later "well spoken" criterion were not read. Thich Nhat Hanh was not
  consulted. East Asian *mappō* is named only.
- **Shared Jesus:** no source was found for the exact dates of Luke, John, Tacitus or Pliny, so none is printed.
  *Antiquities* 20.200 rests on one encyclopedia's treatment, which is attributed.

## Question separations

- **`revelation` vs `ultimate-authority`:** every lane now states the distinction in a sentence and links to
  `ultimate-authority`. `revelation` asks why a claimed revelation should be believed genuine in the first place, and
  carries the historical evaluation that `ultimate-authority` explicitly deferred. Material already in
  `ultimate-authority` was linked, not repeated: Kumārila's authorless-Veda argument, AN 4.180 and the Kālāma Sutta,
  WCF 1.4–5, and Maimonides YT 8:1's "Our eyes saw".
- **`history` vs `final-end`:** history as a whole (cosmic cycles, sacred history, nations, the end of the world), with the
  personal goal linked to `final-end`.
- **`jesus` vs `guilt` and `self-salvation`:** atonement is linked, not re-argued (Christian, Islam, Buddhist). Islamic
  *tawḥīd* is linked to `ultimate-reality`, not repeated.

## History pattern consistency by worldview

See the table in the [`history` notes](../../questions/history/PRODUCTION-NOTES.md#history-pattern-by-worldview). Each
pattern matches the lane's `ultimate-reality` and `final-end` answers:
- Reformed: creation from nothing, then renewal (re-creation), not annihilation.
- Naturalism: no cosmic purpose; a finite, unguaranteed story.
- Judaism: the messianic age, resurrection and the World to Come kept distinct, as in Teshuvah 8–9.
- Islam: linear, ending in judgement. Ibn Khaldun's cycles are political.
- Hindu: beginningless saṃsāra, with Kalki as restoration, not consummation.
- Buddhist: no first point; future hope without cosmic consummation.

## Jesus: shared facts, explanations and comparisons

**Shared fact wording** is identical across lanes wherever a fact is stated. The six-column audit, its canonical
sentences and the four fixes it forced are in the [`jesus` notes](../../questions/jesus/PRODUCTION-NOTES.md).

**Historical facts vs disputed claims used publicly:**
- Established and attributed: existence; crucifixion under Pilate; early proclamation; appearance experiences, including
  Paul's; Paul's meetings with Cephas and James; James's prominence and execution; worship within two decades.
- Debated: the burial details; the empty tomb; the dating of the 1 Cor 15 tradition; the origin of resurrection language;
  the level of early Christology.
- Inference or theology: bodily resurrection; divine identity.

**Strongest critical explanation as published** (naturalism view; Christian objection):
- it grants the facts;
- visions of the dead are common and sincerely believed;
- Ehrman's 2006 sequence is scripture-driven vindication, then exaltation, then visions and "stories of visions", then the
  Gospels decades later;
- empty-tomb scepticism (Lowder's reburial; Ehrman's improbable but "more probable than a miracle" scenario);
- the historian's limit, "the least probable occurrence", with Hume setting the prior.

The answers distinguish method from metaphysics. Ehrman says "I won't say they're impossible."

**Strongest Christian explanation as published:**
- bodily resurrection best explains the facts together;
- grief visions explain individuals, but fit less easily with group appearances, Paul (an enemy) and James;
- the claim that one man had already been raised needs explaining;
- worship within two decades is not explained by agent traditions alone (Hurtado);
- the prior: a historian, as historian, will not affirm a miracle, but if God exists resurrection is not intrinsically
  absurd, and "background beliefs matter on both sides";
- history alone does not produce the Christian confession (Bavinck).

**Josephus and Tacitus:**
- the Testimonium is never quoted, and it is described as reworked (Posen);
- 20.200 is quoted from Whiston, with the EJ's treatment attributed;
- Tacitus is dated "early second century" and cited for the execution and the movement's spread, "not the resurrection".

**Qur'an 4:157 and the tafsir:**
- the text is quoted with its Arabic key phrase, and "names no substitute";
- substitution appears only as later tafsir: al-Tabari's reports and his preference; al-Razi's conflicting variants and
  *tawātur* objection; Ibn Kathir as a strong classical Sunni reading;
- the minority readings are given via Fatoohi;
- the historical comparison is in the brief's terms, with "not the claim that later means false".

**Jewish later evidence:** Maimonides' "executed by the court", Sanhedrin 43a and the *Toledot Yeshu* are labelled later
tradition or polemic, not first-century counter-evidence. The Jewish position is presented as criteriological, not as a
denial of the facts.

**Hindu and Buddhist receptions:** modern, attributed and dated, never "the Hindu/Buddhist view". The Christian responses
judge fit with the earliest evidence, not lateness.

## Historical-accountability symmetry

The same standard is applied in each direction:
- **Christian sources are scrutinized:**
  - 1 Cor 15 is "a summary, not an eyewitness transcript", and its dating is an inference;
  - Galatians and Acts are hard to harmonize;
  - Mark comes forty years after the events;
  - the empty tomb is debated;
  - the Testimonium is reworked;
  - prophecy is not used as public proof;
  - Calvin's argument from Moses has the same form as the Sinai argument and faces the same objection.
- **Sinai** gets its strongest form (Maimonides, Halevi, Gottlieb) and its critics (Farber, Tal), with documentary
  distance stated cautiously.
- **The Qur'an** gets its strongest form (*iʿjāz*, al-Ghazali), the same caveats (perception, preservation ≠
  inspiration) and a direct historical comparison on the crucifixion without "later = false".
- **The Vedic and Mahāyāna claims** get the corresponding preservation and chronology tests.
- **No later source** is given artificial equality with the first-century record. No Christian source is exempt from
  historical evaluation.

## Editorial passes

1. **Worldview consistency:**
   - `revelation` fits Knowledge & Truth (self-attestation as ground in UA; evidence here);
   - `history` fits Ultimate Reality and `final-end`;
   - `jesus` fits each lane's God, man and salvation (*tawḥīd*; no atonement in Islam; no creator or enduring self in
     Buddhism; avatāra theology in Hinduism).
2. **Historical symmetry:** see above.
3. **Thesis hierarchy:**
   - all 18 theses were read alone, and three were rewritten:
     - Christian `revelation`: clause order;
     - Islamic `revelation`: mixed voice ("Yes. Muslims believe");
     - Jewish `jesus`: the site's evaluation removed from the lane's thesis;
   - the 18 opening paragraphs were then read alone, and two were rewritten so that explanation precedes quotation.
4. **Jesus evidence consistency:** the six-column audit, with four fixes.
5. **Repetition and duplication:**
   - a 12-word repeated-sequence check against the whole corpus found only the deliberate canonical fact sentences, plus
     three incidental repeats, which were reworded:
     - Buddhist `revelation` vs `ultimate-authority`;
     - Maimonides' test in Jewish `history` vs `jesus`;
     - the SEP "fault line" quotation in two naturalism answers;
   - a manual Deep-dive comparison found two topic overlaps, now linked instead:
     - Kumārila (Hindu `revelation` vs `ultimate-authority`);
     - Śaṅkara's "not in reality" (Hindu `revelation` vs `jesus`).

## Validation

Run at the branch tip before the report commit:
- `npm run validate`: passed. Coverage is 168/168 answers; 50 thinkers, 41 profiled; 200 sources; all new answers are
  `reviewed` and cite only checked sources.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: 90 static pages.
- **Built-site internal links and fragments** (script recreated in the scratchpad; `/worldviews-examined` base stripped):
  90 pages, 9,231 local links, 7,539 fragment links, **0 broken, 0 duplicate IDs**.
  - All three new question pages render six answers: one Christian reply and five Christian responses.
- `git diff --check`: clean. External URLs were not comprehensively probed.

## Commits

- `d0e3521` Add revelation answers
- `957de0e` Add history answers
- `fd43dd7` Add jesus answers
- The final consistency/report commit contains this file. Its SHA is given in the PR.

## Recommendation for the independent Revelation & History review

Prioritize:
1. **Christian and naturalism `jesus`:**
   - whether the strongest critical explanation is stated at full strength;
   - whether the Christian reply's "resurrection language" and "worship" points overreach Hurtado;
   - whether the four levels hold everywhere.
2. **Islamic `jesus`:**
   - the Arabic paraphrases of al-Tabari, al-Razi and Ibn Kathir (especially al-Razi p. 2's "a few people who could have
     agreed on a lie");
   - the historical comparison's wording;
   - the decision to limit it to first- and early-second-century evidence.
3. **Josephus 20.200:** whether one encyclopedia's treatment, attributed, is sufficient, or whether a second source is
   needed.
4. **Jewish `revelation` and `jesus`:** the Halevi attribution correction, the Farber and Tal summaries, and the *Vikuach*
   paraphrases against the Hebrew.
5. **Buddhist `revelation`:** the BCA 9.42–44 paraphrase against the Sanskrit, and the Mahāyāna framing (historical-memory
   framing vs the defenders' justifications).
6. **The two new or completed thinker profiles** (Ibn Khaldun, al-Razi). Al-Razi's birth year was not re-verified.
7. **Length:** `revelation` and `jesus` visible prose above the guides.
8. **Christian `revelation`:** whether the Bavinck/Calvin/Van Til "difference of emphasis" is fair, and whether the reply's
   claim that Christianity's case is "testable" is stated without overreach.
