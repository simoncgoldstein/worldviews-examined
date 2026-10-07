# Sources and thinkers: final corpus audit

The generated data is in `data/source-usage.json`, `data/thinker-usage.json` and `data/INVENTORY.md`. Regenerate it with `node scripts/audit-inventory.mjs`. **Result: 0 BLOCKER, 0 IMPORTANT (lane source findings are counted in the lane files), 2 MINOR** (`SRC-nn`).

## 1. Source inventory

- **Registry:** 200 sources; 188 `checked`, 2 `unverified` (`tanya-kehot`, `dogen-shobogenzo`). **Neither unverified source is cited in any public answer.**
- **Citations:** 2,533 in 168 answers. Every citation resolves to a registered source, and every cited source is `checked`. Validator and audit script agree.
- **Source types:** 105 primary, 54 academic, 15 article, 8 book, 7 confessional, 5 scripture, 3 commentary, 3 web.

| Lane | Citations | Distinct sources | Foundational (scripture / primary / confessional) | Secondary | SEP / IEP citations | Top sources |
|---|---|---|---|---|---|---|
| Christianity | 554 | 55 | 34 | 21 | 11 / 0 | ESV 174, WCF 81, Calvin 46, Turretin 28, *City of God* 26, Bavinck vol. 2 22 |
| Naturalism | 371 | 57 | 19 | 38 | **116** / 0 | Darwin 30, Russell *What I Believe* 28, Hume *Enquiry* 24, ESV 22, Railton 21 |
| Judaism | 389 | 30 | 22 | 8 | 0 / 0 | *Mishneh Torah* 61, Tanakh 58, Bavli 51, Mishnah 43, *Guide* 33 |
| Islam | 441 | 35 | 24 | 11 | 55 / 0 | Qur'an 184, Bukhari 33, ESV 23, SEP Arabic–Islamic religion 21, SEP Ibn Taymiyya 20 |
| Hindu | 398 | 34 | 28 | 6 | 18 / 16 | Gītā–Śaṅkara 78, BSBh 48, Śrī Bhāṣya 44, Upaniṣads II 29, Gītā–Rāmānuja 26 |
| Buddhist | 380 | 38 | 30 | 8 | 23 / 0 | SN 60, AN 48, MN 43, *Visuddhimagga* 34 |

*Note: ESV appears in every non-Christian lane because the Christian response cites it. Those 22–26 citations per lane are not part of the lane's own steelman.*

## 2. Expected-major-source matrix

✔ present and used substantively; ~ present but thin or secondary-mediated; ✘ absent. "Material?" says whether the absence weakens the public account.

| Worldview | Domain | Expected source or thinker | Present? | Material if absent? | Action |
|---|---|---|---|---|---|
| Christianity | all | Scripture | ✔ (174 citations) | — | — |
| Christianity | all | Westminster Standards | ✔ (WCF 81, LC/SC) | — | — |
| Christianity | all | Three Forms of Unity | ✔ (Belgic 13, HC 13, Dort 4) | — | — |
| Christianity | UR, KT, Man, RH | Augustine, Calvin, Turretin, Bavinck | ✔ | — | — |
| Christianity | S&D | Calvin *Inst.* III, Turretin XIV–XVI, Owen | ✘ | **Yes** | CHR-01, CHR-13 |
| Christianity | S&D | WCF 8.4–8.5; HC 12–18, 40 | ✘ | **Yes** | CHR-01 |
| Christianity | UR (one-many) | Van Til *Defense* (now checked) | ✘ | Yes (concise page) | CHR-11 |
| Christianity | KT | Van Til, distinguished from confession | ✔ | — | — |
| Christianity | RH | Vos | ✘ | Moderate (lawful access uncertain) | CHR-31 |
| Christianity | Man | Edwards (affections, *End of Creation*) | ✔ | — | — |
| Christianity | M&E | Owen (indwelling sin) | ~ (one citation) | Low | — |
| Christianity | KT | Bahnsen | ✘ | No (Van Til 1955 suffices) | — |
| Naturalism | UR | Hume *Dialogues*, Russell, Carroll | ✔ | — | — |
| Naturalism | UR | Oppy | ✘ (blocked) | Low (SEP maps substitute) | Keep disclosed |
| Naturalism | KT | Quine | ~ (via SEP) | Moderate | NAT-01 |
| Naturalism | Man | Darwin, Dennett | ✔ | — | — |
| Naturalism | Man | Consciousness literature | ✘ | **Yes** | NAT-02 |
| Naturalism | M&E | Railton, Mackie, Hume | ✔ | — | — |
| Naturalism | RH | Hume X, Ehrman, Lowder, Martin | ✔ | — | — |
| Judaism | all | Tanakh, Mishnah, Talmud, Midrash | ✔ | — | — |
| Judaism | UR, KT | Saadia, Halevi, Maimonides, Nachmanides | ✔ | — | — |
| Judaism | UR | Kabbalah | ✘ | Low–moderate (`one-and-many`) | JUD-03 |
| Judaism | Man | Soloveitchik | ~ (1 answer) | Low–moderate | JUD-02 |
| Judaism | S&D | Saadia VII; Ramban *Sha'ar ha-Gemul*; 13th principle | ✘ | **Yes** | JUD-01 |
| Judaism | KT, RH | Modern streams (Reform, Conservative; Heschel) | ~ | **Yes** | JUD-02 |
| Judaism | M&E | Post-Holocaust theology | ✘ | Moderate | JUD-04 |
| Islam | all | Qur'an, Bukhari, Muslim | ✔ | — | — |
| Islam | UR, KT, Man, M&E | al-Ash'ari *Ibāna*, al-Ghazali | ✔ | — | — |
| Islam | UR, KT | al-Maturidi | ~ (Harvey) | Low–moderate | ISL-03 |
| Islam | UR, KT, M&E | Ibn Taymiyya | ~ (SEP, Hoover only) | Moderate | ISL-03 |
| Islam | UR | Ibn Sina | ✔ (*Ishārāt*) | — | — |
| Islam | UR, M&E | al-Razi | ~ (`jesus` only) | Low–moderate | ISL-04 |
| Islam | RH | Classical tafsir | ✔ (Ṭabarī, Rāzī, Ibn Kathīr) | — | — |
| Islam | KT | al-Shāfiʿī *Risāla* | ~ (Macdonald 1903) | **Yes** | ISL-03 |
| Islam | RH | Ibn Taymiyya *al-Jawāb al-ṣaḥīḥ* (*taḥrīf*) | ✘ | **Yes** | ISL-01 |
| Islam | KT, RH | Shi'a source | ✘ | **Yes** (scope-note promise) | ISL-02 |
| Hindu | UR, KT, M&E, RH | Upaniṣads, Gītā, Brahma Sūtra | ✔ | — | — |
| Hindu | all | Śaṅkara, Rāmānuja, Madhva | ✔ | — | — |
| Hindu | UR, KT | Nyāya (NS, Udayana), Mīmāṃsā (Kumārila) | ✔ | — | — |
| Hindu | Man | Bhāgavata Purāṇa | ✘ | **Yes** (`worship`, `love-beauty-creativity`) | HIN-02 |
| Hindu | Man | Image theology (*arcā*, Āgama) | ✘ | **Yes** (`worship`) | HIN-01 |
| Hindu | Man | Abhinavagupta / rasa | ✘ | Moderate | HIN-02 |
| Hindu | UR | Śaiva / Śākta | ✘ (disclosed) | Low–moderate | HIN-02 |
| Buddhist | all | Nikāyas | ✔ | — | — |
| Buddhist | UR, KT, Man, M&E | Buddhaghosa, Nāgārjuna, Vasubandhu, Dharmakīrti, Śāntideva | ✔ | — | — |
| Buddhist | Man, S&D | Pure Land (Shinran) | ✔ | — | — |
| Buddhist | M&E | Zen (Dōgen) | ✔ (Japanese; label gap) | — | BUD-02 |
| Buddhist | UR | Huayan | ✘ | Low–moderate | BUD-01 |
| Buddhist | Man, S&D | Tsongkhapa | ~ | Low | BUD-03 |

## 3. Thinker usage (answer metadata)

| Lane | Thinker | Role | Answers | Comment |
|---|---|---|---|---|
| Christianity | Bavinck | primary | 21 | — |
| Christianity | Calvin | primary | 19 | — |
| Christianity | Augustine | primary | 17 | — |
| Christianity | Turretin | primary | 9 | Absent from S&D |
| Christianity | Edwards | specialist | 5 | — |
| Christianity | Van Til | primary | 4 | KT only |
| Christianity | Witsius | primary | **1** | Primary but nearly unused |
| Christianity | Vos | primary | **0** | Unused |
| Christianity | Bahnsen | primary | **0** | Unused (not material) |
| Christianity | Owen | specialist | **0** | Cited once without metadata |
| Christianity | Aquinas, Athanasius, Anselm | interlocutor | 0 | Appropriate |
| Naturalism | Hume, Russell | primary | 17 each | — |
| Naturalism | Darwin | **specialist** | **11** | Used as broadly as a primary; consider role change |
| Naturalism | Railton | **specialist** | **8** | Carries realist ethics across four domains; consider primary |
| Naturalism | Quine | specialist | 4 | — |
| Naturalism | Mackie | primary | 3 | — |
| Naturalism | Dennett | primary | **2** | Primary but narrowly used |
| Naturalism | Oppy | primary | **0** | Blocked |
| Naturalism | Rosenberg, Kitcher | specialist | 0 | Unused |
| Judaism | Maimonides | primary | **28** | Every answer, including pages whose bodies barely use him |
| Judaism | Saadia | primary | 13 | — |
| Judaism | Nachmanides | primary | 8 | — |
| Judaism | Halevi | primary | 6 | — |
| Judaism | Soloveitchik | primary | **1** | Primary but nearly unused |
| Islam | al-Ghazali | primary | 22 | — |
| Islam | Ibn Taymiyya | primary | 15 | Read only through SEP and Hoover |
| Islam | al-Ash'ari, al-Maturidi | primary | 7 each | — |
| Islam | Ibn Sina | primary | **2** | — |
| Islam | al-Razi | primary | **1** | — |
| Islam | Ibn 'Arabi, Ibn Khaldun | specialist | 1 each | Appropriate |
| Hindu | Śaṅkara | primary | **28** | Every answer |
| Hindu | Rāmānuja | primary | 22 | — |
| Hindu | Madhva | primary | 11 | — |
| Hindu | Udayana | primary | 4 | — |
| Hindu | Kumārila | primary | 3 | — |
| Hindu | Abhinavagupta | specialist | **0** | Unused |
| Buddhist | Buddhaghosa | primary | 18 | — |
| Buddhist | Nāgārjuna | primary | 8 | — |
| Buddhist | Vasubandhu | primary | 5 | — |
| Buddhist | Dharmakīrti | primary | 4 | KT only (appropriate) |
| Buddhist | Tsongkhapa | primary | 3 | — |
| Buddhist | Śāntideva | specialist | 5 | — |
| Buddhist | Shinran | specialist | 3 | — |
| Buddhist | Dōgen | specialist | 2 | — |

**Recent additions inspected:**

- **Udayana** (4): used well for Nyāya theism; appropriate.
- **Quine** (4): read only via SEP; role appropriate, access limited.
- **Shinran** (3, plus Pure Land references in 4 more pages): his role as the Pure Land specialist fits.
- **Ibn Khaldun** (1): appropriate.
- **al-Razi** (1): primary role not yet earned by use.

**Primary but almost unused:** Vos, Bahnsen, Witsius, Oppy, Dennett, Soloveitchik, al-Razi and Ibn Sina. **Specialists used so broadly their role should change:** Darwin and Railton. Do not change registry roles in this pass (SRC-01).

## 4. Material source omissions

The material omissions are in the matrix above. The summary below orders them by consequence:

1. Reformed atonement sources (CHR-01, CHR-13).
2. *Taḥrīf* and Ibn Taymiyya's *Jawāb* (ISL-01).
3. The Jewish resurrection strand (JUD-01).
4. The Hindu theology of images (HIN-01).
5. Shi'a disclosure (ISL-02).
6. Modern Jewish streams (JUD-02).
7. Consciousness (NAT-02).
8. Islamic juridical and theological primaries (ISL-03).
9. Bhakti beyond Rāmānuja and Śaiva traditions (HIN-02).
10. Van Til on the one and the many (CHR-11).

## 5. Source-distribution anomalies (Audit 23)

| Pattern | Instance | Assessment |
|---|---|---|
| One secondary source carrying too much of a tradition | SEP for naturalism (116 citations, 31%) | IMPORTANT (NAT-01). Accurate but encyclopedic. |
| | SEP plus Macdonald for Sunni uṣūl and Ibn Taymiyya | IMPORTANT (ISL-03) |
| | Harvey for Maturidi; Hoover for Ibn Taymiyya's theodicy | Acceptable specialist secondary |
| One thinker becoming the tradition | Maimonides in Jewish eschatology | IMPORTANT (JUD-01) |
| | Rāmānuja as the whole of bhakti | IMPORTANT (HIN-02) |
| | Bavinck in Christian UR and Man | Acceptable: he is an expositor, not a stand-in for Scripture |
| SEP where primary sources were available | Ibn Taymiyya (Arabic public domain), al-Shāfiʿī (Arabic public domain), Dharmakīrti PV I | IMPORTANT for Islam (ISL-03); low for PV I |
| Modern interpretation replacing foundational texts | Not observed. Foundational texts lead in every religious lane. | — |
| Sources used outside their competence | Bavinck (1895) on naturalistic origins of religion, used against current cognitive science of religion | MINOR (CHR-20) |
| Legitimate repeated foundational sources | ESV, WCF, Qur'an, Nikāyas, Tanakh, Gītā | Correctly high |

## 6. Primary and secondary imbalance

- Every religious lane is primary-led: Christianity 34/21 distinct works, Judaism 22/8, Islam 24/11, Hindu 28/6, Buddhist 30/8.
- Naturalism is secondary-led (19/38). This partly reflects the absence of a canon, and partly that SEP surveys substitute for blocked or copyrighted primaries.
- No lane's steelman relies on Christian critical literature (SOURCES.md rule satisfied).

## 7. Findings

| ID | Sev. | Finding | Action |
|---|---|---|---|
| SRC-01 | MINOR | Registry roles out of step with use: primaries unused or nearly unused (Vos, Bahnsen, Oppy, Witsius, Soloveitchik, al-Razi, Ibn Sina, Dennett); specialists used broadly (Darwin, Railton); Abhinavagupta, Rosenberg and Kitcher unused. | Decide in remediation whether to (a) use them, (b) change roles, or (c) annotate why they remain. Do not change roles now. |
| SRC-02 | MINOR | Metadata saturation: Maimonides and Śaṅkara on 28/28 answers; Bavinck on 21. Some listings do not reflect the body (`judaism/death`, `judaism/self-deception`, `hinduism/history`, `hinduism/jesus`). Christian metadata omissions: Turretin (`worship`), Owen (`self-deception`). | Metadata clean-up batch. |
