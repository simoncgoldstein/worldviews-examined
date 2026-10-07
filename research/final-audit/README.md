# Final corpus substantive audit

2026-10-07. Branch `final-corpus-substantive-audit`, from `main` @ `8a39fda` (merge of PR #14, Revelation & History).

One Claude Opus 5.5 top-level session: no subagents, no other reviewer. **Audit only.** No answer, registry, question, UI or style file was modified. The only additions are this directory and the read-only inventory script `scripts/audit-inventory.mjs`.

## Files

| File | Contents |
|---|---|
| `README.md` | This summary |
| `CHRISTIANITY.md` | Full Reformed audit: Scripture, confessions, theologians, prose, all 28 answers classified, visitor-level reading |
| `NATURALISM.md`, `JUDAISM.md`, `ISLAM.md`, `HINDUISM.md`, `BUDDHISM.md` | Lane audits: coherence, sources, expected-major-source checks, diversity, prose, strongest and weakest pages, findings, diagnosis and remedy |
| `CROSS-QUESTION.md` | Horizontal comparison of all 28 questions, pressure-question symmetry, thesis revision list, progressive disclosure, anchors and canonical homes, flagship review, diagnosis and remedy synthesis, historical accountability, subtopic coverage |
| `SOURCES-AND-THINKERS.md` | Source inventory, expected-major-source matrix, thinker usage, distribution anomalies |
| `ARGUMENT-QUALITY.md` | Classification audit; every IMPORTANT argumentative finding |
| `TRANSLATION-AND-CITATIONS.md` | Translation-provenance register, ESV ledger audit, citation integrity, external check log |
| `LIMITATIONS.md` | Final limitations register: all 56 residual caveats classified |
| `REMEDIATION-PLAN.md` | **The governing deliverable**: 12 bounded batches in priority order |
| `data/INVENTORY.md`, `data/*.json` | Generated per-answer and aggregate inventory (`node scripts/audit-inventory.mjs`) |

## Corpus inventory

| Measure | Value |
|---|---|
| Answers | **168** (28 questions × 6 lanes); all `reviewed` |
| Authored words | **120,014** (whitespace tokens after removing tags) |
| Citations | **2,533**; all resolve; no unverified source cited |
| Registry | 200 sources (188 checked); 50 thinkers |
| Cross-links | 378 |
| ESV ledger | 77 rows; 592 words, 2,976 bytes, 107 verse instances (reconciles; 1 locator fix) |

| Lane | Words | Citations | Distinct sources | Foundational / secondary | Thinkers |
|---|---|---|---|---|---|
| Christianity | 21,547 | 554 | 55 | 34 / 21 | 7 |
| Naturalism | 20,052 | 371 | 57 | 19 / 38 | 7 |
| Judaism | 19,663 | 389 | 30 | 22 / 8 | 5 |
| Islam | 19,966 | 441 | 35 | 24 / 11 | 8 |
| Hindu | 19,400 | 398 | 34 | 28 / 6 | 5 |
| Buddhist | 19,386 | 380 | 38 | 30 / 8 | 8 |

Domain and question tables are in `data/INVENTORY.md`.

**All 168 answers were read in full**, lane by lane and in question order. All 168 theses were also read consecutively. Each question was compared across its six answers.

## Overall intellectual health

**Good, and better than most comparative-religion writing in fairness and argument hygiene.**

- No page calls a disagreement a contradiction.
- Diversity is never treated as refutation.
- Historical claims are worded at the strength their evidence warrants.
- Christianity concedes its own limits (the induction circle, the evidential problem of evil, the unprovability of a miracle by historical method). It is tested at least as hard as its rivals.
- Every religious lane is led by its foundational texts.
- School distinctions are preserved across the corpus: Ash'ari / Maturidi / Athari / falsafa; Advaita / Viśiṣṭādvaita / Dvaita; Theravāda / Madhyamaka / Yogācāra / Pure Land; realist / anti-realist naturalism.

The weaknesses fall in three areas:

1. **The redemptive centre of the Christian lane is under-expounded.** The atonement is never explained, although the Christian critique of every other lane depends on it. Christ is nearly absent from the Christian answers on evil, suffering and death. The flagship's Christian view is the least biblical Christian page.
2. **The first two Phase 4 domains, Morality & Evil and Salvation & Destiny (60 answers in all lanes), are written in a defensive, meta, self-referential voice.** They never received the independent domain review and editorial-hierarchy pass that the four later domains received.
3. **A handful of fairness gaps where a critique omits the opponent's classical answer, plus several missing expected sources:**
   - Islam: *taḥrīf*; no Shi'a disclosure;
   - Hindu traditions: image theology; bhakti beyond Rāmānuja;
   - Judaism: the resurrection strand; modern streams;
   - naturalism: consciousness.

## Finding counts

| Severity | Count | Where |
|---|---|---|
| **BLOCKER** | **0** | — |
| **IMPORTANT** | **28** | Christianity 13 · Naturalism 2 · Judaism 2 · Islam 3 · Hindu 3 · Buddhist 0 · Cross-question 5 |
| **MINOR** | **54** | Christianity 18 · Naturalism 6 · Judaism 6 · Islam 5 · Hindu 4 · Buddhist 6 · Cross-question 2 · Sources 2 · Translation and citations 5 |

XQ-08 (cross-question) and CHR-01 describe the same gap from two sides. They are counted separately because one is a fairness asymmetry and the other a doctrinal omission.

**No blocker was found.**

- No factual error, major doctrinal misrepresentation, consequential citation failure or departure from the Westminster Standards was found.
- One suspected ESV misquotation was checked externally and found correct for ESV Text Edition 2025.

## Major strengths

1. **Argument classification:** contradiction, tension, incompleteness, underdetermination and theological disagreement are kept distinct corpus-wide.
2. **Historical accountability (Revelation & History):** a single standard for Sinai, Moses, the Qur'an, the Veda, the Mahāyāna sūtras and Jesus. The four levels (source claim, historical conclusion, inference, theology) are respected. No chronology-alone refutations.
3. **Reformed method in Ultimate Reality, Knowledge & Truth and Revelation & History:** Scripture first. Van Til's apologetic is carefully separated from confessional doctrine ("Three claims, not one").
4. **The non-Christian flagship answers** and the Hindu and Buddhist school differentiation.
5. **Parity of self-attestation:** every lane's final authority is examined by the same test, including the Spirit's witness.

## Systemic weaknesses

1. Atonement, propitiation, satisfaction and union with Christ are unexplained (CHR-01; XQ-08).
2. The Morality & Evil and Salvation & Destiny voice across all six lanes (XQ-01).
3. About 35 process and sourcing notes in public prose (XQ-02).
4. About 34 theses that lead with caveats (XQ-03), concentrated in the Hindu lane and the Morality & Evil and Salvation & Destiny domains.
5. Pressure questions already answered in the opponent's own terms (XQ-04; ISL-01; HIN-01).
6. Secondary spines in two lanes: SEP for naturalism (31% of citations); SEP plus Macdonald (1903) for Sunni uṣūl and Ibn Taymiyya.
7. Single thinkers standing in for wider traditions: Maimonides for Jewish eschatology; Rāmānuja for bhakti.

## Process fact to record

The audit brief states that all 168 answers were "independently reviewed by domain". The repository shows a narrower history:

- **Independent `REVIEW.md` files exist for four domains:** Ultimate Reality, Knowledge & Truth, Man & Human Nature, and Revelation & History.
- **Morality & Evil (36 answers) and Salvation & Destiny (24 answers) received no independent review.**
  - Morality & Evil, production report: "No … external reviewer". Its PR fix commit `4f99f69` changed six lines.
  - Salvation & Destiny, production report: "'Reviewed' records this run's steelman/Reformed self-review; **no independent or external review was invoked**."
- The flagship received its Phase 3 independent review.

The voice problem (XQ-01) coincides exactly with the two unreviewed domains. Batch R3 should end with the independent review those domains never had.

## Is renewed research required?

**Yes, but bounded.** Batches R1 and R2 need only light registration (Owen; passages in editions already checked). R4 (Islam), R7 (Hindu) and R8 (Judaism) need targeted new sources. R9 (naturalism) and R11 (Buddhist) need light research. No broad new research programme is needed, and the 28-question architecture can house every gap.

## Validation

`npm run validate`, `npm run check` and `npm run build` pass, and `git diff --check` is clean. Results are in the final report (PR description).
