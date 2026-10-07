# Translation provenance, ESV and citation integrity: final corpus audit

**Result: 0 BLOCKER, 0 IMPORTANT, 5 MINOR** (`TC-nn`; `BUD-02` and `BUD-04` are also recorded in `BUDDHISM.md`).

## 1. Programmatic citation integrity

`node scripts/audit-inventory.mjs` and `npm run validate` agree:

- **2,533** `<Cite>` tags in 168 answers. Every `source` ID resolves to the registry, and every locator is a non-empty single line.
- **No cited source is `unverified`.** The two unverified registry entries (`tanya-kehot`, `dogen-shobogenzo`) are cited nowhere.
- **No unknown source IDs.**

## 2. Provenance-language review

Every instance of "our translation", "paraphrase", "via SEP", "as quoted", "summary" and "close rendering" was reviewed, in both `note=` attributes (54 instances) and inline body labels (15 instances). The full list is in `data/INVENTORY.md`, "Cite notes (provenance)".

**Secondary-attributed primary claims are all visibly secondary:**

- Quine ×6, Juwayni, Fumerton and Russell (1948) via SEP;
- Ibn Taymiyya via SEP ("quoting al-Radd … via SEP");
- the Dalai Lama via Cobb;
- al-Shāfiʿī via Macdonald ("a 1903 summary, not a reading of al-Shafi'i's Risala");
- Dharmakīrti PV I via SEP.

None is presented as a first-hand quotation. **PASS.**

**Paraphrase versus quotation.** No paraphrase was found inside quotation marks, with one exception: the non-ESV phrase "from nothing" in quotation marks next to a Hebrews 11:3 citation (CHR-14). It reads as a theological term rather than ESV wording, but it could mislead.

## 3. Translation-provenance register

| Answer(s) | Source | Language | Published translation / our translation / paraphrase | Label correct? |
|---|---|---|---|---|
| christianity: knowledge-possible, logic-binding, induction, ultimate-authority, jesus; islam/logic-binding; judaism/jesus | Turretin, *Institutio* (1847) | Latin | Paraphrase; one phrase is "our translation" (*organice et ministerialiter, non despotice*) | ✔ (note on each citation) |
| christianity: ultimate-reality, something-rather-than-nothing, ultimate-personal, order, what-is-man, worship, love-beauty-creativity; islam/something-rather-than-nothing | Turretin, *Institutio* (1847) | Latin | Paraphrase | **✘ No label on 17 citations** (UR and Man domains). Only `something-rather-than-nothing` V.1 carries an inline "(our paraphrase of the Latin)" (TC-02). |
| all Christian answers citing Bavinck (21 answers) | Bavinck, *Gereformeerde Dogmatiek*, Monergism 2026 automated English (OpenAI 5.2 from the Dutch) | Dutch, machine-translated | Paraphrase of an automated translation; no direct quotations found in public answers | ✔ disclosed in sources; publicly stated once ("Bavinck is read in an automated English translation" in `one-and-many`). See TC-05. |
| judaism: knowledge-possible, logic-binding, ultimate-authority, revelation, history, jesus | Saadia, *Emunot ve-De'ot* (Ibn Tibbon Hebrew) | Hebrew (Judaeo-Arabic original) | Paraphrase; phrases are "our translation" | ✔ |
| judaism/jesus | Nachmanides, *Vikuach* (Wikisource transcription) | Hebrew | Paraphrase; base edition unstated (disclosed) | ✔ |
| judaism: one-and-many, ultimate-reality | *Tanya* (Hebrew, Sefaria) | Hebrew | Paraphrase | ✔ (inline in `one-and-many`) |
| all Judaism answers citing them | Tanakh (JPS), *Mishneh Torah* (Touger), *Guide* (Friedländer), Mishnah (Kulp), Bavli (Koren), Midrash Rabbah (Sefaria), Ramban (Chavel), *Kuzari* (Hirschfeld), Rashi (Judaica Press) | — | Published translations | ✔ |
| islam: ultimate-reality, something-rather-than-nothing, order, induction | al-Ghazali/Ibn Rushd, *Tahāfut* (Bouyges 1930); Ibn Sina, *Ishārāt* (Forget) | Arabic | Paraphrase (noisy OCR, disclosed) | ✔ |
| islam/jesus | al-Ṭabarī, *Jāmiʿ al-bayān*; Ibn Kathīr; al-Rāzī, *Mafātīḥ* | Arabic | Paraphrase plus short "our translation" quotations (Mujahid; al-Rāzī) | ✔ (base editions unnamed: known caveat, TC-03) |
| islam/history | Ibn Khaldun, *Prolégomènes* (de Slane) | French translation of Arabic | "French; our translation" | ~ Label omits that de Slane's French is itself a translation of the Arabic, so the English is a translation of a translation (TC-04) |
| islam: why-alive, offspring-family, love-beauty-creativity, worship | al-Ghazali, *Alchemy of Happiness* (Field) | English abridgement of an Urdu version of a Persian work | Paraphrase | ✔ disclosed in public prose (ISL-06) |
| islam: most | Qur'an (Haleem), Bukhari (Khan), Muslim (Siddiqui), Ghazali (Field, Skellie, Stern, Winter), Ash'ari (Klein) | — | Published translations | ✔ |
| hinduism: all | Müller, Thibaut, Sastri, Govindacharya, Subba Rau, Bühler, Griffith, Cowell, Vidyabhusana, Jha, Woods, Wilson | — | Published public-domain English; quoted verbatim | ✔ (no own translations in the lane) |
| buddhism: knowledge-possible, logic-binding, ultimate-authority | Dharmakīrti, PV (GRETIL); Nāgārjuna, VV (GRETIL); Vasubandhu, *Triṃśikā* | Sanskrit | "Sanskrit; our paraphrase" | ✔ |
| buddhism: ultimate-reality, order | Nāgārjuna, MMK | Sanskrit | "our paraphrase of the Sanskrit" | ✔ |
| buddhism/one-and-many | MMK 25.19–20 | Sanskrit | "our translation of the Sanskrit" on a quoted-sense sentence | ✔ |
| buddhism/something-rather-than-nothing; christianity/something-rather-than-nothing | Vasubandhu, AKBh (GRETIL) | Sanskrit | "our translation" on an *unquoted* summary sentence (Buddhist page, line 18); "our paraphrase" elsewhere | ~ Should read "paraphrase" (BUD-04) |
| buddhism/revelation | Śāntideva, *Bodhicaryāvatāra* 9.42–44 | Sanskrit | "Sanskrit; our paraphrase" | ✔ |
| buddhism: great-and-terrible, evil | Dōgen, *Shōbōgenzō* (`dogen-shobogenzo-ja`) | **Japanese** | Paraphrase ("retells", "insists", "rereads") | **✘ No language or paraphrase label** (BUD-02) |
| buddhism: all | Nikāyas (Sujato), *Visuddhimagga* (Ñāṇamoli), Shinran (CWS), Pure Land sūtras (Inagaki), *Nyāyabindu* (Stcherbatsky), Lotus (Kern), *Ratnagotravibhāga* (Johnston) | Pāli / Sanskrit / Chinese / Japanese | Published translations | ✔ |
| naturalism | Epicurus (Hicks) | Greek | Published translation | ✔ |

## 4. ESV ledger audit (Audit 22)

**Totals reconcile exactly.**

- Ledger rows: 77. Sum of the rows: 592 quoted words, 2,976 bytes, 107 conservative verse instances. These equal the stated totals.
- The book table (21 books) also sums to 107 verses, 592 words and 2,976 bytes.
- Per-answer ESV proportions: the maximum is 7.80% (`christianity/history`), below Crossway's 25% condition. The site total of 107 verse instances is far below 500.

**Every direct ESV quotation is recorded.** The script found 80 quotation runs next to ESV citations. Every one has a ledger row except:

| Detected run | Assessment |
|---|---|
| `christianity/induction` Exodus 4:1–5, "above" | False positive: a WCF word in quotation marks |
| `christianity/something-rather-than-nothing` Hebrews 11:3, "from nothing" | Not ESV wording; scare quotes (CHR-14) |
| `buddhism/order` Hebrews 1:3, "persists" | False positive: SN 12.20's word |
| `christianity/self-salvation` Ephesians 2:8–10, "by grace you have been saved through faith" | Real quotation. The ledger records the locator as **Ephesians 2:8** with a charge of 1 verse, but the citation range is **2:8–10**. Under the ledger's own conservative rule ("count each cited range … in full") the charge should be 3 (TC-01). |

**Every ledger row corresponds to a real quotation** (the one unmatched row is the Ephesians 2:8/2:8–10 mismatch). One per-row word discrepancy (`hinduism/great-and-terrible`, Romans 1:24, 28) is a detection artefact: the adjacent Rāmānuja phrase "delight in such actions" is not ESV. The ledger's 3 words is correct.

**Wording.** All ESV quotations were compared with the ESV from memory. One suspected error was checked externally (see §6); it was not an error, because the ESV Text Edition 2025 reads Ephesians 1:10 "to unite all things in Christ". No mismatch was found.

**Places where a reference or paraphrase would serve better** (record only):

- Hebrews 9:26 is quoted in three lanes (Christianity, Judaism, Islam `history`); a reference would serve in the non-Christian responses.
- Jeremiah 33:25 is quoted in `naturalism/order` and twice in the Christian lane.
- 1 Corinthians 8:6 is quoted in `one-and-many`, `jesus` and `hinduism/jesus`.
- The six-verse charge for 1 Corinthians 15:3–8 in `jesus` comes from a single quoted word ("received").

This is not a permission problem, but trimming would reduce repetition. **Permission context:** SOURCES.md records that Crossway's standard allowance excludes "commentary or other biblical reference works". Whether a worldview-comparison site counts as commentary should be rechecked at publication (already recorded in SOURCES.md).

## 5. Quotation checking (non-ESV)

- Spot checks against the checked editions as cited:
  - Calvin II.2.12, "shapeless ruin";
  - Calvin I.13.1, "lisps";
  - Augustine *De doctrina* II.32.50;
  - Hume *Enquiry* 4.19 and 10.13, 10.36–37;
  - Russell, *Problems* chs. VII–VIII;
  - Maimonides, *Guide* III.15;
  - Avot 1:1;
  - SN 12.20;
  - Kālāma (AN 3.65).

  These match the domain reviews' verification records (KT `REVIEW.md` "Checked and left alone"; RH `REVIEW.md` "Checks"). No new quotation error was found.
- The Morality & Evil and Salvation & Destiny domains had no independent quotation re-check (see README). Their public prose contains few direct quotations (most are paraphrase with locators), so the residual risk is low.

## 6. External checks performed in this audit

| Suspected issue | Source consulted | Result | Changes finding? |
|---|---|---|---|
| `christianity/history` quotes Ephesians 1:10 as "to unite all things in Christ"; the 2016 ESV reads "in him" | esv.org current text (Ephesians 1:9–10), fetched 2026-10-07 | The ESV Text Edition 2025 reads "to unite all things in Christ, things in heaven and things on earth in him." | No. The quotation is correct for the edition named in the site notice. |

No other external research was performed. Every other finding rests on the repository.

## 7. Findings

| ID | Sev. | Finding | Remedy |
|---|---|---|---|
| TC-01 | MINOR | ESV ledger row `christianity/self-salvation`: locator Ephesians 2:8 against citation 2:8–10; charge 1 against 3 under the conservative rule. | Correct the ledger row (+2 verses: 109) or narrow the citation to 2:8 and cite 2:9–10 separately. |
| TC-02 | MINOR | 17 Turretin citations (UR, Man and one Islam response) lack the "Latin; paraphrased" note used in the KT and RH domains. | Add the note for consistency. |
| TC-03 | MINOR | Tafsir base editions (Ṭabarī, Ibn Kathīr, Rāzī) and the *Vikuach* base edition are unnamed (known caveat). | Name them if identifiable; otherwise keep the disclosure. |
| TC-04 | MINOR | Ibn Khaldun "French; our translation" omits that de Slane's French is itself a translation. | Amend the note: "de Slane's French translation of the Arabic; our English". |
| TC-05 | MINOR | Bavinck is cited 21× from the automated English translation. SOURCES.md requires checking "consequential or disputed English wording against the Dutch". Formulations are paraphrased (no direct quotations found), but distinctive claims such as "man *is* the image", "unity in diversity … in an absolute way" and "with Turretin the testimony of the Spirit began to lose its place of honour" carry argumentative weight. | During remediation, spot-check these against the Dutch Gutenberg control. |
| BUD-02 | MINOR | Dōgen is paraphrased from the Japanese without a label. | Add "(our paraphrase of the Japanese)" or a citation note. |
| BUD-04 | MINOR | "our translation" on an unquoted sentence. | Change to "paraphrase". |
