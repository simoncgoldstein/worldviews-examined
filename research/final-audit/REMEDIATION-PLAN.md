# Remediation plan

This plan governs the final remediation phase. It groups all **82 findings (0 BLOCKER, 28 IMPORTANT, 54 MINOR)** into **12 bounded correction batches**. Each batch is sized for one focused session and one PR. Finding IDs refer to the lane and topic files in this directory.

**Ground rules for every batch:**

- Edit only the answers named.
- Keep the 28-question architecture, IDs and slugs frozen.
- Update the ESV ledger whenever a quotation changes.
- Run `npm run validate`, `npm run check` and `npm run build`.
- Re-run `node scripts/audit-inventory.mjs` and commit the regenerated `research/final-audit/data/`.

## Priority order

| Order | Batch | Severity | Answers | Renewed research? | Conceptual risk | Independent review after? |
|---|---|---|---|---|---|---|
| 1 | **R1 Reformed gospel centre: atonement, evil, suffering, death** | IMPORTANT ×6 (+ MINOR ×1) | christianity: guilt, self-salvation, jesus, evil, suffering, death (+ link edits in judaism/islam/hinduism/buddhism guilt) | **Light**: WCF 8, HC 12–18, Calvin III, Turretin are already registered; **register Owen** (*Death of Death*, public domain) | **High** (central doctrine; confessional precision) | **Yes** |
| 2 | **R2 Reformed anthropology, flagship and Scripture grounding** | IMPORTANT ×7 | christianity: great-and-terrible, what-is-man, ultimate-authority, one-and-many, logic-binding, know-the-good | **Light**: Van Til *Defense* (already checked) for one-and-many; LC 22 and WCF 7.2 already registered | High (flagship; historicity of Adam boundary) | **Yes** |
| 3 | **R3 Natural voice for Morality & Evil and Salvation & Destiny, all six lanes** | IMPORTANT ×2 (+ MINOR) | the 60 answers of know-the-good, fail-the-good, evil, suffering, death, self-deception, self-salvation, guilt, after-death, final-end | No | Medium (rewriting risks dropping the fairness qualifications these pages carefully built) | **Yes**: these domains never had one |
| 4 | **R4 Islamic school, source and fairness corrections** | IMPORTANT ×3, MINOR ×5 | islam: jesus, revelation, ultimate-authority, history, evil, after-death (+ KT pages citing Ibn Taymiyya) | **Yes**: Ibn Taymiyya *al-Jawāb al-ṣaḥīḥ* and one *Darʾ taʿāruḍ* passage (Arabic public domain); al-Shāfiʿī *Risāla*; one checked Twelver Shi'a source; Bukhari on the grave | Medium | **Yes** |
| 5 | **R5 Pressure-question and argument symmetry** | IMPORTANT ×1 (+ MINOR ×8) | the 14 pressure questions in `CROSS-QUESTION.md` §2; hinduism/ultimate-reality, evil, suffering; naturalism/order, induction | No (except what R4 and R7 supply) | Low–medium | Light review (one session) |
| 6 | **R6 Thesis and progressive disclosure** | IMPORTANT ×2 | about 34 theses listed in `CROSS-QUESTION.md` §5; openings of christianity/what-is-man, great-and-terrible, offspring-family | No | Low (theses must still match bodies) | No (self-check against bodies) |
| 7 | **R7 Hindu devotional and image completeness** | IMPORTANT ×2, MINOR ×4 | hinduism: worship, love-beauty-creativity, final-end, ultimate-personal, one-and-many | **Yes**: a checked source on *arcā*/Āgama image theology; Bhāgavata Purāṇa (public-domain translation); a rasa/Abhinavagupta survey; one Śaiva Siddhānta disclosure source | Medium | **Yes** |
| 8 | **R8 Jewish eschatology and modern streams** | IMPORTANT ×2, MINOR ×6 | judaism: after-death, final-end, what-is-man, ultimate-authority, revelation, suffering, evil, one-and-many | **Yes**: Saadia *Emunot* VII (edition already checked; new passages); Ramban *Sha'ar ha-Gemul*; Maimonides' 13 principles (Commentary on Mishnah, Sanhedrin 10); a Conservative or Reform statement on revelation (CCAR already registered) | Medium | **Yes** |
| 9 | **R9 Naturalism position completeness** | IMPORTANT ×2, MINOR ×5 | naturalism: what-is-man (+ christianity/what-is-man), know-the-good, one-and-many, and the SEP-reliant UR and KT pages | **Yes (light)**: SEP "Consciousness" / "The Hard Problem" level is enough; optionally one Quine primary | Low–medium | Yes, for NAT-02 only |
| 10 | **R10 Process-note relocation and remaining Christian minor prose** | IMPORTANT ×1 (+ MINOR ×13) | ~30 answers containing process notes (XQ-02), plus the Christian minor items CHR-14 to CHR-31 | No | Low | No |
| 11 | **R11 Buddhist completeness** | MINOR ×6 | buddhism: one-and-many, jesus, why-alive, offspring-family, something-rather-than-nothing, great-and-terrible, evil | Light (SEP Huayan entry; optional Thich Nhat Hanh) | Low | No |
| 12 | **R12 Translation, citation, ESV, metadata and registry roles; redundancy and canonical links** | MINOR ×10 | per `TRANSLATION-AND-CITATIONS.md` and `SOURCES-AND-THINKERS.md`; XQ-06, XQ-07 | Only the Bavinck Dutch spot-check (TC-05) | Low | No |

## Batch details

### R1. Reformed gospel centre (CHR-01, CHR-04, CHR-05, CHR-06, CHR-13, XQ-08)

1. **`christianity/guilt` becomes the canonical home of the atonement.**
   - Scripture first: Isaiah 53:4–6, 10; 2 Corinthians 5:21; Galatians 3:13; Romans 3:21–26 (propitiation, God "just and the justifier"); 1 Peter 2:24 and 3:18; Hebrews 9:11–14 and 10:10–14.
   - Then WCF 8.5 and HC 12–18 and 40 as confirmation.
   - Then Calvin II.16 and III.11 and Owen for exposition, with Owen attributed where his particular formulation (definite atonement) goes beyond the common doctrine.
   - Answer the Kant "transfer" objection with union with Christ (Calvin III.1.1, III.11.10) as well as Witsius's covenant representation.
2. `christianity/self-salvation`: one paragraph summarizing satisfaction and union, linking to `guilt`. Trim the defensive sentences. Replace the citation dump (CHR-27).
3. `christianity/jesus`: one sentence on the threefold office (SC 23–26) (CHR-30) and the link to `guilt`.
4. `christianity/evil`: add the cross (Acts 2:23; 4:27–28) as the paradigm of decree and wickedness; add the final defeat of evil (Revelation 21:4; Colossians 2:15). Keep the honest limits.
5. `christianity/suffering`: add the suffering Son (Hebrews 2:10, 17–18; 4:15), lament and Job, 2 Corinthians 4:17 and Revelation 21:4.
6. `christianity/death`: add Christ's victory (1 Corinthians 15:54–57; Hebrews 2:14–15; 2 Timothy 1:10).
7. In the non-Christian `guilt` and `self-salvation` responses, replace the bare assertion "requires Christ's satisfaction" with a link to the new canonical explanation (XQ-08).

**Risk:** high. Confessional precision matters: distinguish WCF's satisfaction from Owen's limited-atonement arguments; keep justification and sanctification distinct (already correct). **Independent review required.**

### R2. Reformed anthropology, flagship and Scripture grounding (CHR-02, CHR-03, CHR-07, CHR-09, CHR-10, CHR-11, CHR-12)

- **Flagship view:** Scripture-first rewrite of the opening paragraph. Image: Genesis 1:26–27; Fall: Genesis 3 and Romans 5:12–19; corruption: Jeremiah 17:9, Ephesians 2:1–3 and Romans 3:10–18; common grace: Matthew 5:45 and Acts 14:17. WCF and Calvin follow as confirmation and exposition. Keep the objection and reply (they are excellent).
- **Historicity of Adam:** in the flagship Deep dive, state the confessional position (LC 22; WCF 6.3, 7.2; Romans 5; 1 Corinthians 15:21–22, 45). Describe contemporary dissent as dissent, not as an open confessional question. Make `what-is-man`'s pointer accurate.
- **`what-is-man`:** doctrine-first paragraph on the image; keep Turretin's broader and narrower distinction and Bavinck's "is the image" as attributed formulations.
- **`ultimate-authority`:** add Christ's attestation of Scripture.
- **`one-and-many`:** replace the stale caveat with Van Til's one-and-many argument from *Defense* (checked). Attribute it as Van Til's apologetic development, not confessional doctrine (as KT does). Remove the process note.
- **`logic-binding`:** remove the research-note sentences; quote Augustine once; replace Isaiah 1:18.
- **`know-the-good`:** natural-law exposition (Calvin II.8.1; Turretin XI.1 if passage-checked) and a direct reply on the authority of obligation.

**Independent review required.**

### R3. Natural voice for Morality & Evil and Salvation & Destiny (XQ-01, CHR-08, CHR-23, CHR-22, NAT-03, JUD-05, and the domain-wide notes-to-self)

For each of the 60 answers:

1. Delete sentences about the page itself ("this page / anchor / answer…").
2. Delete instructions addressed to the Christian writer.
3. Fold "does not mean X" qualifications into one sentence per section where the qualification is needed for fairness. Keep every qualification that protects fairness; cut those that protect the author.
4. In the Christian pages, state doctrine in the theologian's own voice instead of "Paul describes…".
5. Move the naturalism moral-grounding argument into `naturalism/know-the-good`.

Do **not** change sources, claims or classifications in this batch, except where R1, R2 or R5 have already done so. Order: do R1 and R2 first so the Christian pages are rewritten once. **Independent domain review required** (closes limitation 55).

### R4. Islamic corrections (ISL-01 to ISL-08)

1. **`islam/jesus` and `islam/revelation`:** present *taḥrīf* (textual and interpretive), with Ibn Taymiyya's *al-Jawāb al-ṣaḥīḥ* as the classical source. Then let the Christian response engage it (manuscripts predating Islam; Qur'an 5:47, 10:94 as interpreted by commentators).
2. **Shi'a disclosure:** one paragraph in `ultimate-authority` (the Imamate as interpretive authority; the closing of prophecy shared). One sentence in `history` (the Mahdi and occultation). An optional sentence in `revelation`.
3. **`ultimate-authority` and the KT pages:** replace or supplement Macdonald 1903 with a checked *Risāla* passage. Check at least the Ibn Taymiyya claims that are quoted against a primary text; keep SEP as the map.
4. Minor items: al-Razi on decree in `evil` (ISL-04); the grave in `after-death` (ISL-05); *iʿjāz* theorists (ISL-07, optional).

### R5. Pressure-question and argument symmetry (XQ-04, NAT-04, NAT-06, NAT-07, JUD-06, ISL-08, HIN-04, HIN-05, BUD-05)

Rephrase or replace the 14 listed pressure questions. Add one-sentence replies where the tradition has a classical answer: Advaita on the locus of *avidyā*; Īśvara as the dispenser of karma's fruits. Light single-session review.

### R6. Thesis and progressive disclosure (XQ-03, HIN-03)

Revise about 34 theses so the shared, elementary answer comes first and the school difference second. Re-check that every revised thesis is supported by its body (schema rule: the lede "must not introduce a claim the body does not support"). Fix the opening paragraphs of `christianity/what-is-man`, `great-and-terrible` and `offspring-family` if R2 has not already done so.

### R7. Hindu devotional and image completeness (HIN-01, HIN-02, HIN-04 to HIN-07)

- **`worship`:** add the *arcā*/*mūrti* theology to the view, then let the Christian response engage it as a disagreement grounded in the second-commandment premise.
- **`love-beauty-creativity`:** add a rasa/Abhinavagupta sentence from a checked survey.
- **`final-end`, `worship`, `ultimate-personal`:** add the Bhāgavata/Gauḍīya devotional strand where it materially differs.
- **Lane level:** add one Śaiva disclosure where the answers otherwise imply Vaiṣṇava uniformity.
- Metadata clean-up (HIN-06).

### R8. Jewish eschatology and modern streams (JUD-01 to JUD-08)

- **`after-death` and `final-end`:** source the resurrection-centred strand (Saadia VII; Ramban *Sha'ar ha-Gemul*; the 13th principle) beside Maimonides.
- **`ultimate-authority` and `revelation`:** add a disclosed modern-streams paragraph. Use Soloveitchik in `what-is-man`.
- Optional: Kabbalah sentence (`one-and-many`); post-Holocaust sentence (`suffering`).
- `evil` Christian response: state the actual argument.
- Metadata clean-up (JUD-07).

### R9. Naturalism completeness (NAT-01, NAT-02, NAT-05, NAT-08)

- **Consciousness:** add a paragraph to `naturalism/what-is-man` covering the hard problem and the physicalist, illusionist and panpsychist responses, plus one classified sentence in the Christian response. Add a parallel objection sentence in `christianity/what-is-man`.
- Cleanthes attribution in `one-and-many`.
- Optional Quine primary.

### R10. Process notes and Christian minor prose (XQ-02, CHR-14 to CHR-29)

- Move about 35 research-status sentences into citation notes or the Sources page. Where an absence matters to the reader, keep one neutral clause ("Kabbalistic accounts, not treated here, …").
- Apply the Christian MINOR list: Hebrews 11:3, Isaiah 1:18, "no other lane", the Advaita citation, Humean wording, polygamy, Bavinck 1895, the confession shorthand, the "human-nature anchor" label, the after-death link, the hell reply, the scope strings, the concise-page source tours.

### R11. Buddhist completeness (BUD-01, BUD-03, BUD-05, BUD-06)

Huayan sentence; optional Tsongkhapa and Thich Nhat Hanh. (BUD-02 and BUD-04 are in R12.)

### R12. Translation, citation, ESV, metadata, registry; redundancy (TC-01 to TC-05, BUD-02, BUD-04, SRC-01, SRC-02, CHR-21, XQ-06, XQ-07)

- ESV ledger Ephesians 2:8–10 row.
- Turretin "Latin; paraphrased" notes; Ibn Khaldun note; Dōgen label; Buddhist "translation" → "paraphrase".
- Bavinck Dutch spot-check of the three load-bearing formulations.
- Thinker metadata clean-up.
- Registry role decisions (record them; change roles only if the user approves).
- Canonical-home links per `CROSS-QUESTION.md` §3: trim duplicate pressure questions; flagship owns inability; `knowledge-possible` owns the reliability argument.

## Which batches require renewed research

R1 (light: register Owen), R2 (light), R4, R7, R8, R9 (light), R11 (light), R12 (Dutch spot-check only).

## Which batches require independent review

R1, R2, R3, R4, R7, R8 (full); R5 and R9 (light). R6, R10, R11 and R12 need only self-check and the validation suite.

## Explicitly out of scope

- The final UX and editorial release pass.
- Any redesign.
- Any new question.
- A generic copyedit beyond the batches above.
