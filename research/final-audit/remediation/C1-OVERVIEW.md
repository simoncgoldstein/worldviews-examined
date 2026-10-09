# C1 overview: Hindu and Buddhist completeness

2026-10-09. Consolidated batch C1 combines the original R7 (Hindu devotional and image completeness) and R11 (Buddhist completeness). The consolidation replaces the execution structure of R7–R12 with C1–C4; the original findings in `research/final-audit/` are unchanged.

## Branch and session

- **Branch:** `c1-hindu-buddhist-completeness`, created from `main` @ `513091c` (the merge of PR #21, R6), after confirming that PR #21 was merged and the working tree was clean.
- **Session:** one Claude Opus 5.5 top-level production session with no subagents. No independent review was run during production, and no work is pre-approved here.
- **One PR, two lanes, kept separate:**
  - Hindu record: `C1-HINDU-COMPLETENESS.md`;
  - Buddhist record: `C1-BUDDHIST-COMPLETENESS.md`;
  - each has its own source ledger and review checklist.

## Commits

| # | SHA | Content |
|---|---|---|
| 1 | `ee987cb` | Source registrations, all checked:<br>• Hindu: Artha-pañcaka (JRAS 1910), Bhāgavata (Subba Rau 1928), Caitanya-caritāmṛta (Sarkar 1913), Śivajñānabodham (Nallaswami Pillai 1895), De, *Sanskrit Poetics* II (1925)<br>• Buddhist: SEP Huayan; Fazang's Golden Lion (CBETA T1881)<br>• extended notes for SBE 38, ESV and WLC<br>• Abhinavagupta profile completed; Fazang profile added |
| 2 | `ac6edcf` | Hindu: `worship` image theology and second-commandment response |
| 3 | `2ee2ab8` | Hindu: `final-end`, `love-beauty-creativity`, `ultimate-personal`, `ultimate-reality` |
| 4 | `4d2b71f` | Buddhist: `one-and-many` (Huayan); `final-end` (one Tsongkhapa sentence) |
| 5 | (this commit) | One wording fix in `hinduism/ultimate-personal`; the three C1 records; regenerated `research/final-audit/data/` |

## Scope boundaries kept

- **Hindu.**
  - The three-school Vedānta structure is unchanged.
  - No lane-wide metadata sweep (HIN-06 is C4).
  - No rewriting of R3/R5/R6 Hindu material, except the `final-end` lede scoping.
  - One Śaiva strand (Śaiva Siddhānta) only.
- **Buddhist.**
  - No new Pure Land research.
  - No change to no-self, Madhyamaka, Yogācāra or Tiantai wording.
  - BUD-02 and BUD-04 are left for C4.
  - Thich Nhat Hanh was not added (no lawful text checked).
- **Process notes.** Removed only from passages C1 rewrote. The C4 site-wide process-note pass has not been started.
- **Other batches.** Not touched: C2 (Jewish eschatology), C3 (naturalist consciousness) and Islamic material.

## Validation (run on the final content)

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, **53 thinkers**, **218 sources**, **168 answers** (168/168 present) |
| `npm run check` (astro check, run inside `npm run build`) | 0 errors, 0 warnings, 1 hint (pre-existing unused variable in `scripts/audit-inventory.mjs`) |
| `npm run build` | Success; 93 pages built |
| `git diff --check origin/main...HEAD` | Clean |
| `node scripts/check-built-links.mjs` (R4-repaired; base fixed in the script, so cross-page links are counted) | 9,909 links, of which 4,033 are cross-page and 8,163 fragments were checked; 0 broken; 0 duplicate ids; 0 outside base; 0 missing answers; 53 thinker pages (new `/thinkers/fazang/` and `/thinkers/abhinavagupta/` render) |
| `node scripts/audit-inventory.mjs` | 168 answers, 131,590 words, 2,772 citations. ESV reconciliation is unchanged from `main`: the 4 unledgered candidates and 1 orphan row are pre-existing C4 items, none in C1 pages. |

**ESV ledger.** No change. C1 adds no ESV quotation; the new Scripture references in `hinduism/worship` are locator-only.

## Word counts

Measured on answer bodies, with Cite tags removed.

| Lane | Before | After | Change | Answers changed |
|---|---|---|---|---|
| Hindu | 20,030 | 21,259 | +1,229 (+6.1%) | 5 |
| Buddhist | 19,315 | 19,691 | +376 (+1.9%) | 2 |

Largest increases:

- `hinduism/worship` +498;
- `buddhism/one-and-many` +344;
- `hinduism/love-beauty-creativity` +289;
- `hinduism/final-end` +285.

The justifications are in the lane records. Hinduism grew more because its gaps were two IMPORTANT findings; Buddhism's were MINOR.

## Ledes and pressure questions

| Page | Lede | Pressure questions |
|---|---|---|
| `hinduism/final-end` | Scoped to "classical Vedānta" (206 chars) | Unchanged |
| `buddhism/one-and-many` | Rewritten to scope "no hidden One" to Madhyamaka and name Huayan (222 chars) | PQ1 scoped to the chariot analysis |
| `hinduism/worship` | Unchanged | PQ3 replaced by a warrant question |

All other ledes and pressure questions on edited pages were reviewed and kept.

## Outstanding review requirements

C1 must not be merged until both of the following are done.

1. **Review A (Hindu).** A fresh top-level Claude Opus 5.5 session, without subagents, independently verifies:
   - image theology and its primary source, including the *arcā*/*mūrti* and symbol/presence distinctions;
   - the Bhāgavata use and the Gauḍīya attribution;
   - the Śaiva Siddhānta disclosure;
   - Abhinavagupta and rasa;
   - the second-commandment argument;
   - school consistency, ledes, citations and prose.

   Record: `C1-REVIEW-HINDU.md`.
2. **Review B (Buddhist).** A separate fresh session, run after Review A on the same branch to avoid conflicting edits, independently verifies:
   - the Huayan doctrine;
   - the Fazang and Indra's net attribution;
   - the relation to dependent origination and emptiness;
   - the Christian comparative response;
   - the Tsongkhapa sentence and the Thich Nhat Hanh decision;
   - citations.

   Record: `C1-REVIEW-BUDDHIST.md`.

Both reviews must recommend MERGE, and every BLOCKER and IMPORTANT finding must be fixed before the combined PR is merged. The user merges. C2–C4 have not begun.
