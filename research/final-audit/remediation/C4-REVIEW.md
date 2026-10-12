# C4 independent review: final scholarly publication gate

2026-10-12. Independent review of PR #26 (`c4-final-editorial-source-audit`), against the production record `C4-FINAL-EDITORIAL-AUDIT.md`.

## 1. Heads

- **Base:** `main` @ `e19b85b9f75c3c521d720f50450595f65dd3e4e1`. Rechecked at the end of the review: no other PR entered `main`.
- **Starting PR head:** `e8f38b13c243af99bd231e9065ba5c4e11c24edf`. This matches the six production commits (`a6cb799`, `0284bc3`, `0360d3c`, `edf5590`, `388aec7`, `e8f38b1`). The working tree was clean.
- **Final PR head:** the review commit that adds this file (SHA reported in the PR).

## 2. Independence

- One fresh top-level Claude Opus 5.5 session, started after `/clear`, without subagents. It is separate from the production session.
- Nothing from production was taken on trust:
  - The ESV totals, Bavinck's Dutch, Turretin's Latin, the hadith numbering, Hume's text and SEP's section contents were all re-derived from the sources themselves.
  - The source texts were: Project Gutenberg 51052/67966, archive.org `institutiotheolo01turr`/`02turr` and `vedntasutrastr01bdar`, sunnah.com, davidhume.org and plato.stanford.edu.

## 3. Reading and diff scope

- **Changed files reviewed:** all 165. Every non-answer file was read as a whole diff. That covers the seven templates and the component, read in full as files, plus the two registries, three docs, the script and the record. The regenerated `research/final-audit/data/*` files were checked by re-running the script rather than by hand.
- **Answer diffs:** all 146 changed MDX files.
  - A word-level script split the 420 hunks into two kinds. Mechanical hunks (183) changed only apostrophes, the spelling map, `note=` attributes, BC/AD or link text. Substantive hunks (237) changed anything else.
  - Every substantive hunk was read with its before and after paragraph.
  - All 84 link-text replacements were listed with their target and sentence, and each was checked against its destination.
- **Read in full:** the two new pressure-question answers (`naturalism/fail-the-good`, `naturalism/evil`).
- **Read section by section:**
  - The Christian reply and Deep dive of `christianity/evil`.
  - The objection and reply of `christianity/offspring-family`.
  - The changed paragraphs of `christianity/ultimate-personal`, `christianity/ultimate-authority`, `christianity/worship`, `christianity/something-rather-than-nothing` and `christianity/what-is-man`.
  - The Advaita paragraphs of `hinduism/ultimate-personal`, `hinduism/ultimate-reality` and `hinduism/jesus`.
  - The Deep dive of `naturalism/ultimate-reality`.
  - The process-note passages of `judaism/induction` and `buddhism/revelation`.
  - The pressure questions of all 13 pages whose question sets changed.
- **Ledes:** all 168, read together by question.
- **Not re-read:** whole Islamic, Hindu and Buddhist answers whose only changes were mechanical. R4 and C1 A/B already reviewed them.

## 4. Findings

**0 BLOCKER · 4 IMPORTANT · 9 MINOR.** All 13 are fixed in this commit.

### IMPORTANT

| # | File | Finding | Fix |
|---|---|---|---|
| I-1 | `naturalism/fail-the-good` | The new pressure question rested on a false premise. It said Hume and Darwin explain only wrongdoing where "a sudden impulse overrides a calmer concern". Hume says the opposite at *Treatise* 2.3.4.1 (checked at davidhume.org): once a passion "has once become a settled principle of action… it directs the actions and conduct without that opposition and emotion, which so naturally attend every momentary gust of passion." A defender of the view answers the question straight away, so it pressed a strawman. | The View now states Hume's settled-passion point, with a citation to 2.3.4.1. The question was replaced with one tied to the Christian response's actual claim ("the difference lies in what the wrongdoer has failed"): *Settled passions and habits explain wrong pursued calmly for years as well as wrong done on impulse. When someone knowingly pursues such a wrong, has he failed anything beyond his own considered judgment and the people he harms, and if so, what?* A naturalist realist can answer it ("the moral facts"), and the further authority question stays where it belongs, in `know-the-good`. |
| I-2 | `naturalism/evil` | The new question ("If intelligence, loyalty and power have no given end…") and the response sentence it restated ("What naturalism does not supply is a given end") assumed a disputed premise. Neo-Aristotelian naturalists ground the ends of capacities in species flourishing, and etiological accounts ground them in selected function. "No given end" is true only of an end given by a Creator. | The response now says naturalism does not supply "an end given by a Creator". It adds that naturalists who locate ends in evolved function or flourishing must show that cruelty departs from those ends rather than being among the uses selection favored. The question now engages that stronger account and stays specific to evil (corruption or privation), distinct from `know-the-good` (authority): *If the ends of intelligence, loyalty and power are set by their evolved functions or by human flourishing, what makes their use in cruelty a corruption of them, when selection also favored their use against outsiders?* That last clause rests on the page's own Darwin citation (ch. V, p. 130). |
| I-3 | `christianity/evil` (Deep dive) | A C4 rewrite turned a hedged sentence into a flat concession. On whether WCF 3.1 and 5.4 establish God's blamelessness, it said "By themselves they do not". WCF 5.4 itself affirms that "the sinfulness thereof proceedeth only from the creature, and not from God". The new wording therefore conceded against the Confession the page cites in the same paragraph. | Now: "They show where the Confession places the blame, but they do not explain why God ordained a world that includes evil, which is why the Christian answer turns to the cross." This keeps the honest limit (no theodicy for particular evils) without denying the confessional claim. |
| I-4 | `docs/ESV-QUOTATION-LEDGER.md`, `docs/SOURCES.md` | Both documents treated the Crossway question as a "publication-stage", "before public launch" item. The site is already public. `.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main`. The Pages API reports `public: true`, `build_type: workflow`. `https://simoncgoldstein.github.io/worldviews-examined/` returned 200 on 2026-10-12, with the ESV quotations and the "Used by permission" notice live. | Both documents now say the site is public, the question is current, and any merge redeploys. See §15. |

### MINOR

| # | File | Finding | Fix |
|---|---|---|---|
| M-1 | `christianity/ultimate-personal` (CHR-17); `hinduism/ultimate-personal` | The CHR-17 sentence attributed "real at the level of worship and ordinary experience" to Thibaut BSBh I.1.2, pp. 15–16. Read in the archive.org SBE 34 text, that passage establishes only "that omniscient omnipotent cause… is Brahman", a "Lord possessing the stated qualities". SEP *Śaṅkara* §2.3 is "Two-Tiered Reality": it does not mention qualities. Īśvara as "lower brahman qualified with attributes" is §2.4, and "brahman without parts, attributes" is §2.2. The Hindu page, the source of the reused locators, had the same overreach. | Christian page: each claim now sits on the passage that supports it, with SEP §§2.2–2.4. Hindu page: "grants the fruit of worship" is now cited to BSBh IV.1.5, pp. 342–345 (already verified on `hinduism/worship`), and SEP to §§2.2–2.4. No doctrinal claim changed. |
| M-2 | `christianity/induction`; `scripts/audit-inventory.mjs` | "above" is a word of WCF 5.3, but it was quoted with no Westminster citation, directly before an Exodus ESV citation. Readers would take it as Scripture, and the script needed an exception to ignore it. | WCF 5.3 is now named and cited (the registry records 5.1–3 as read), so the script exception is retired. The one remaining exception (`buddhism/order`, "persists", SN 12.20) is keyed to file, ESV locator and exact fragment, and every fragment must match. A new or changed quotation is therefore still reported. |
| M-3 | ESV ledger, C4 section | It said the script "reports… 2 unledgered candidates". The script actually reports 0 unledgered, with the known non-ESV words excluded. | Wording corrected, and the retirement of the "above" exception recorded. |
| M-4 | `docs/CONTENT-MODEL.md` | It still said a missing biography "is shown as 'not yet written'". C4's template no longer shows it. | Updated to describe the current behavior. |
| M-5 | 4 answers, 6 thinker entries | The spelling sweep missed: "splendour" (a Hindu lede and body paraphrase), "fervour" (an unquoted paraphrase in `hinduism/order`), "modelled", "Living with scepticism / mitigated scepticism" (an unquoted list item in `naturalism/induction`), and "realisation" ×3, "encyclopaedic", "organised", "practising", "favour" and the key idea "Defence of an enduring self" in thinker bios. | Changed to American spelling. Quoted wording ("flavour", Calvin's "colour") and bibliographic titles are left as printed. |
| M-6 | `judaism/knowledge-possible`, `islam/ultimate-authority` | Two research-process cross-references survived: "a historical question for a later domain" and "to be taken up in the Revelation & History domain". | Both now link the `revelation` question, as C4 did for `judaism/ultimate-authority`. |
| M-7 | `christianity/offspring-family` (CHR-19) | The reply affirmed that "Reformed churches teach a husband's headship" but cited only Ephesians 5:25–33, so the text that grounds headship was missing. | It now says the New Testament "patterns a husband's headship on Christ's headship of the church" and cites Ephesians 5:22–33; 6:4 (a reference, not a quotation). This brings the reply in line with Reformed teaching without flattening it. |
| M-8 | `naturalism/ultimate-reality` Deep dive | "current positions are drawn from… surveys" still described sourcing rather than the view. | Now: positions "are worked out by contemporary philosophers such as Papineau and mapped in the standard surveys". |
| M-9 | `islam/history` (3 citations) | "Arabic in de Slane's French translation" was ambiguous. | Now: "Arabic, read in de Slane's French translation; our English from the French" (or "; our paraphrase"). |

Considered and left unchanged (no defect, or a judgment call), each for the reason given:
- **"the account of man's greatness and misery" as a link label in the non-Christian lanes.** The phrase is Pascalian, but it accurately describes the destination.
- **The uncited remark in `buddhism/revelation` that Yogācāra also defended the Mahāyāna sūtras.** This is standard history, made in passing.
- **The hedge "Later Mahāyāna writers are reported to have…".** It still marks the claim as secondhand.
- **"Lane".** It is a defined public term (the method page has "The six comparison lanes"), not process language.
- **`hinduism/one-and-many` now has only a Madhva question.** The Advaita question has its canonical home in `what-is-man`.

## 5. Process-note preservation

All 37 removals in record §4 were checked against the before and after text.
- **Lost caveats:** none. The remaining classes:
  - **Source caveats that moved to citation notes:** Russell 1948 "as quoted by SEP"; the four Quine 1969 quotations "as quoted by SEP"; Bouyges "Arabic; paraphrased, checked against the SEP survey"; Madhva "secondary account of the school's list"; the *Vikuach* "paraphrase of an online transcription".
  - **Scope exclusions moved into scope strings** (Islamic music and images, visual art, family law). The scopes still name the schools treated: Sunni, with the Twelver view noted.
  - **Real uncertainty still visible in the prose:** Torah dating "remains disputed"; prophecy dates "disputed"; "by traditional accounts" for Mahāyāna origins; "as the Stanford Encyclopedia summarizes it" for Dharmakīrti PV I.
- **`judaism/induction`, "classical Jewish thought":** justified. The sources are the Hebrew Bible, the Talmud, Maimonides and Nachmanides. The scope string and the lede both confine the claim to classical sources, so it makes no claim about modern Jewish philosophers.
- **`buddhism/revelation`:** the dating qualification ("by traditional accounts… roughly in the first century BC") is now an unquoted paraphrase, marked as such in the registry. That avoids altering SEP's quoted "BCE". Nothing about textual authority was hidden: Śāntideva's parity argument and the AN 2.24–25 interpretation caution remain.
- **`naturalism/ultimate-reality`:** the positive explanation is intact in the View and the Deep dive (physicalism versus naturalism, neutral monism, emergence, abstract objects). Oppy's absence affects no claim; it is recorded in the C4 limitations register.
- **One over-correction:** in `christianity/evil` the process sentence was turned into a theological concession (I-3, fixed).

## 6. Cross-link labels

- All 84 replaced labels are accurate: "the account of human nature" leads to `what-is-man`, "the account of salvation/liberation" to `self-salvation`, and so on.
- Each new label fits its sentence grammatically.
- No label promises more than the destination gives. For example, "as the account of human nature notes" in `christianity/offspring-family` points to a page that does note the Reformed disagreement over headship.
- The link checker verifies every target (§23).

## 7. Christian CHR-14 to CHR-31

| ID | Review result |
|---|---|
| CHR-14 | Correct. John 1:3 and Colossians 1:16 are paraphrased without quotation marks, and Hebrews 11:3 is paraphrased at its own scope ("the visible world was not made out of visible things"). WCF 4.1's "of nothing" is accurate ("to create, or make of nothing"). The Buddhist page does not quote Hebrews 11:3. |
| CHR-15 | Resolved earlier (R2). |
| CHR-16 | Correct. "Christianity adds that God is personal *within himself*" keeps the Trinitarian distinction without denying personal theism in Gauḍīya or Śrīvaiṣṇava thought. |
| CHR-17 | The citations overreached (M-1, fixed). |
| CHR-18 | Fair and substantive. Non-Humean necessitarians "do offer" an explanation, and the dispute moves to a further ground. The link to `naturalism/order` lands on a page whose lede names "real necessities in nature". Humeanism, naturalism and atheism are kept distinct. |
| CHR-19 | Accurate and defensible: custom is distinguished from ordinance; both sexes bear the image (Gen 1:27); headship is shaped by sacrificial love; Reformed churches differ over application; no claim about all of Christianity. The headship text was added (M-7). |
| CHR-20 | Correct. The *Gereformeerde Dogmatiek* first edition dates from 1895–1901, so "writing in the 1890s" is accurate for vol. 1 §8. Turretin's metadata is backed by the XI.10.2–4 paragraph (§9). |
| CHR-21 | Owen's indwelling-sin paragraph in `self-deception` is substantive and cited. |
| CHR-22 | Verified: the confession shorthand is gone ("the Westminster Confession", "the Larger Catechism", "the Heidelberg Catechism's sense"). |
| CHR-23 to CHR-25, CHR-27, CHR-30 | Verified as recorded. |
| CHR-26 | `final-end`: the duplicate paragraph is cut. The new linking sentence keeps judgment visible, and WCF 33.2 is still cited in the reply. |
| CHR-28 | The 21 scopes now describe doctrine. Each still says Reformed and keeps the Van Til qualifier. |
| CHR-29 | Done, with attribution kept. |
| CHR-31 | Vos was not added, which is acceptable as an optional item. |

The R1 satisfaction and propitiation material and the R2 Scripture-first anthropology are untouched; no hunk altered them.

## 8. Bavinck's Dutch

Control text: PG 51052 (vol. 1) and 67966 (vol. 2), downloaded from `aleph.pglaf.org`.
- **§18, the Spirit's testimony.**
  - The Dutch reads: "Langzamerhand begon het testimonium internum ook in de Geref. theologie zĳne eereplaats te verliezen. Bĳ Turretinus, Theol. El. II qu. 6 § 11 sq.… Amyraldus… Molinaeus… wordt het reeds verzwakt, en vereenzelvigd met zoodanige verlichting des H. Geestes, waardoor het verstand in staat wordt gesteld, om de notae en criteria… op te merken."
  - The corrected sentence is accurate. Bavinck describes a gradual loss across later Reformed theology and names Turretin among several in whom the testimony was *already* weakened. He does not say Turretin began the decline.
  - The two readings are different historical claims, and the page now makes the right one.
- **§33.8, "in a creaturely way".** The Dutch reads: "Hĳ draagt maar niet, hĳ is het beeld Gods… Gene is het beeld Gods op Goddelĳke, deze op creatuurlĳke wĳze." The phrase is Bavinck's own qualification, not an addition, and "bear" (*draagt*) is right.
- **The other passages** (unity in diversity, §27; the organism "in overdrachtelĳken zin" and "ingeschapene krachten en wetten", §29) were also located and agree.
- **Labels.** All 58 Bavinck citations across the four Monergism volumes carry `note="automated English translation; paraphrased"`. None sits after a quotation, and no public text calls the automated rendering a published translation.

## 9. Turretin and other provenance

- **Turretin.**
  - All 43 paraphrase citations carry "Latin; paraphrased". The one actual rendering (`organice et ministerialiter, non despotice`) carries "our translation".
  - Spot check against the 1847 Latin, vol. 2, Locus XI q. 10: §§2–3 allow images "historicas… vel ornatus gratia, vel oblectationis ergo". §§3–4 deny images of God and religious images "in locis sacris". Both the `worship` and the `love-beauty-creativity` paraphrases are faithful.
- **Tafsir and *Vikuach*.** The registry `edition` field ("online Arabic text; printed base edition not named"; "online Hebrew transcription; …") renders on every citation entry and on the Sources page. That is concise and accurate, and no edition is invented.
- **Ibn Khaldun.** The chain is Arabic → de Slane's French → the project's English, with the wording clarified (M-9). Nothing implies a translation from the Arabic.
- **Dōgen and Vasubandhu.**
  - The three Dōgen citations read "Japanese; our paraphrase", and the prose quotes nothing.
  - Vasubandhu now has "(our paraphrase of the Sanskrit)", correcting "translation".
- **Tsongkhapa.** "Verse 6" and "verses 2–8" are consistent with the production record's Lotsawa House reading. This review did not re-fetch it.

## 10. Hadith locators

- Commit `388aec7` removed only the in-book suffixes. The registered numbers did not change.
- Checked live on sunnah.com: Bukhari 7439 is "In-book reference: Book 97, Hadith 65" (Abū Saʿīd's report on seeing the Lord, intercession and rescue from the Fire), and Muslim 181a is "Book 1, Hadith 354". Both match the uses.
- Muslim 2999 (Book 55, 82) and Bukhari 5641–5642 (Book 75, 2) match the registry's own read records.
- No citation moved to a different report, and no doctrinal claim changed.

## 11. Pressure-question fairness

- **`fail-the-good`:** HOLD as produced, fixed as I-1. The final question is accurate about Hume, specific to failure, answerable by a realist, and not a duplicate of `know-the-good`.
- **`evil`:** HOLD as produced, fixed as I-2. The final question names the strongest naturalist account of ends, presses the privation claim that only this page argues, and assumes no theistic teleology.
- **Three-question answers.** 18 answers have three questions. `docs/METHODOLOGY.md` says "one or two precise questions", while the schema and validator allow any number of at least one. This is a documented mismatch.
  - Recommendation for the user: either amend the methodology to "one to three", or trim the 18 in an editorial pass.
  - This review changed neither.

## 12. The eleven overlap resolutions

Verified against the before and after text:
- **Genuine duplicates removed** (canonical home kept):
  - naturalism: `knowledge-possible` question 2 (home `ultimate-authority`, linked from the response); flagship question 1 (home `know-the-good`); `love-beauty-creativity` question 2.
  - buddhism: `revelation` question 1 (home `ultimate-authority`); `ultimate-reality` question 1 (home `order`).
  - hinduism: `one-and-many` question 1 and `why-alive` question 2 (home `what-is-man`); `suffering` question 2 (home `evil`).
  - islam: `induction` question 2 (it pressed nothing distinctive).
- **Replaced:** the two naturalist questions (§11).
- **Retained parallel:** naturalist `self-salvation` and `final-end`.
- Every page still has at least one specific, accurate question. The naturalist flagship's moral-authority material now lives in `know-the-good`, with a link.

## 13. ESV ledger

- **Recomputed from the ledger rows:** 103 rows, 872 words, 4,410 UTF-8 bytes and 177 verse charges. The book table agrees row for row; Romans is highest at 30 verse charges.
- **Fragments.** Every row's fragments were extracted from the current MDX before its citation.
  - All 103 locate a quotation.
  - Word counts all match.
  - Byte counts match the ledger's convention (closing punctuation inside the quotation marks excluded).
  - The only residual differences come from punctuation or ellipsis conventions. They are pre-existing, a byte or two each, and leave the totals unchanged.
- **No change from C4.** Extracting the fragments at `e19b85b` and at `e8f38b1` gives identical ESV wording. No quotation was touched by the spelling or BC/AD sweeps.
- **Ephesians 2:8.** The quotation "by grace you have been saved through faith" is now cited to 2:8 alone, and 2:9–10 is cited separately for an unquoted point. The 1-verse row is correct.
- **After this review:** 104 candidates, 0 unledgered, 1 known non-ESV excluded, 0 orphan rows. The review edits add no ESV quotation; the Ephesians 5:22 change is a reference.
- **Proportions.** The per-answer proportions move by a few words in four Christian answers (`evil`, `induction`, `offspring-family`, `ultimate-personal`). They stay far below every limit, so those table rows were not recomputed.

## 14. False positives

- "persists" (`buddhism/order`) is Sujato's SN 12.20, quoted earlier in the same answer. It is confirmed non-ESV.
- "above" is WCF 5.3, and it now carries its own citation (M-2).
- The exception mechanism is narrow. It matches on file, locator and exact fragment, and every fragment must match, so it cannot mask new ESV wording.

## 15. Crossway permission and the public notice

**Crossway's terms**, checked at crossway.org/permissions on 2026-10-12:
- Up to 500 verses may be quoted "without a formal license or express written permission", provided that:
  - the quotation is under half of any book and under 25% of the work;
  - the verses are "not being quoted in a commentary or other biblical reference work".
- Uses beyond that need "written permission or a formal license".
- The required digital notice ends "Used by permission. All rights reserved." The site prints that notice exactly, ESV Text Edition 2025 included.

**The five distinct things:**
1. **Notice.** Present and correct in form.
2. **Standard permission.** Crossway's gratis terms are a conditional grant. The notice is the attribution those terms require. The numbers are far inside the limits, but whether the site counts as a "commentary or other biblical reference work" is **not established**.
3. **Written permission for this project.** None is on record.
4. **Public access to the ESV text.** Being able to read the text grants nothing.
5. **Right to reproduce.** Follows only from (2) or (3).

**Result: not yet established.**
- The notice does not create permission.
- If the site is eligible for the standard terms, the notice is exactly what Crossway asks for. If it is not, "Used by permission" asserts a grant the project does not have.
- This review does not alter a notice Crossway prescribes. It records the dependency instead (I-4).

**Deployment.**
- `deploy.yml` runs on every push to `main`. The site is public and already serves these quotations; it has done so since the earlier batches were merged.
- Merging C4 redeploys the same quotation set. C4 adds no ESV wording. It also removes the stale public "outlines only" notices that are live today.
- Holding C4 therefore does not reduce ESV exposure. Only one of the following does:
  1. Crossway's written confirmation or permission; or
  2. replacing direct ESV wording with references or a registered KJV text (103 rows, mechanical, using the ledger); or
  3. taking the Pages deployment offline until (1) or (2) is done.

Which to choose is the user's decision.

## 16. Does merging publish?

Yes. A push to `main` triggers `Deploy to GitHub Pages` (recent runs on the PR #24 and #25 merges succeeded), and the Pages site is public with HTTPS. CI on PRs only builds and never deploys.

## 17. Thinker associations and roles

- **New associations:**
  - Turretin in `worship` (the XI.10 paragraph);
  - Owen in `self-deception` (the cited indwelling-sin paragraph);
  - Papineau in `naturalism/ultimate-reality` (the causal-closure citation, pp. 8–9, 30–33).
  All three are backed by the answer bodies.
- **The 28/28 saturation cases.** The weakest associations were spot-checked:
  - Śaṅkara on Hindu `jesus` (cited Gītā-bhāṣya 4.6), `logic-binding`, `induction` and `offspring-family`;
  - Maimonides on Jewish `death`, `self-deception`, `offspring-family` and `know-the-good`.
  Each attributes a specific, cited position, so retaining all 28 is justified.
- **Roles.** The registry diff contains no `role` change. The decision list in production §14 still applies: Oppy, Vos, Bahnsen, Rosenberg and Kitcher are unused; Darwin and Railton are specialists. Seven thinkers have no biography. Their pages render the description, role and works cleanly, which is not a scholarly blocker.
- **Thinker `notes` are public.** The 12 rewritten notes now read as scholarly notes.

## 18. Templates and source pages

The full files were read for `AnswerCard`, `index`, `method`, `questions/index`, `questions/[slug]`, `worldviews/[slug]`, `thinkers/[slug]` and `sources`.
- **Removals.** Only status, coverage and placeholder text was removed, and no empty heading remains. Biography, Significance and Appears-in sections render only when they have content.
- **Unchanged:** citations, the Sources sections, anchors, backlinks and Deep-dive disclosure. The built-link check confirms anchors and backlinks.
- **Registry links.** Representative works link to the registry only for checked sources, so there are no dead anchors.
- **Sources page.**
  - It lists only checked sources, 224 entries. The 12 unchecked seed records are cited nowhere.
  - Its lede claim ("Every work cited in an answer has been checked against the edition named") is true: the validator enforces it for reviewed answers.
  - Publication years are bibliographic. Verification dates are no longer shown, so neither can be mistaken for the other.
- **Removed research-log notes.** Each qualification a reader needs is already public through a citation note or the `edition` field: translation chains, SEP mediation, OCR or approximate pages, the automated English, and unnamed base editions. The rest was process history.
- **Rendered check.** The built site was served locally and the `great-and-terrible` question page inspected on desktop. The thesis is followed directly by the scope line, with no gap where the badge was removed. Thinker pages without a biography (Oppy, Rosenberg, Vos) were checked as text. **Narrow-screen rendering could not be checked:** the browser window would not resize in this environment.

## 19. BC/AD and spelling

- **BC/AD.**
  - A whole-word search of `src/` and `docs/` finds no BCE, CE, B.C.E. or C.E.
  - All BC/AD instances were read. None crosses the era boundary, so no year zero arises.
  - The SEP "first century BCE" quotation was turned into a marked paraphrase rather than edited inside quotation marks.
  - Registry notes changed only paraphrased dates.
- **Spelling.**
  - Spot-checked in all six lanes. Quotations ("flavour" in the Upaniṣad translation, Calvin's "colour", Hume's "uncontroulable") and titles ("Encyclopaedia", "Defence" in registered titles) are preserved.
  - Residual misses fixed (M-5).
  - "Mitigated skepticism" is used as a descriptive term, never inside quotation marks.

## 20. Ledes

- All 168 were read together by question. The longest is `judaism/after-death` at 240 characters, within the schema limit.
- Every lede answers the shared question and is supported by its body. School qualifications are intact (Advaita versus theistic Vedānta, Sunni versus Twelver, Maimonides versus Saadia and Nachmanides, realist versus anti-realist naturalism).
- No lede turns one thinker's view into a school-wide conclusion. All are suitable for the six-thesis overview.
- Only "splendour" changed (M-5). The new `fail-the-good` View sentence leaves that lede accurate, because it says impulse "can" override.

## 21. Earlier batches

No C4 hunk alters the conclusions of R1 (satisfaction, propitiation, union), R2 (Scripture-first anthropology, Van Til attribution), R3, R4 (tafsir, taḥrīf, Shiʿi disclosure), R5, R6, C1 (image theology, bhakti, Śaiva, Huayan), C2 (Saadia, Nachmanides, Maimonides, modern movements) or C3 (physicalism, illusionism, panpsychism). The C4 regressions found are I-3 (`christianity/evil`) and the two new questions (I-1, I-2), all fixed.

## 22. Consistency

- **Horizontal.**
  - All six answers address the same question in each of the 28.
  - The Christian responses engage the strongest alternatives. After this review that includes non-Humean naturalists, function- and flourishing-based ends, and Hume's settled passions.
  - Criticisms are classified the same way across lanes.
- **Vertical.**
  - Christianity reads as one Reformed account.
  - Naturalism never imputes nihilism, and its realism and anti-realism are kept distinct.
  - The other lanes are consistent with their claim families as checked in production and in R4 and C1–C3.
  - The two Advaita passages (`ultimate-personal`, `ultimate-reality`) now cite the right SEP sections for the two-level account.

## 23. Validation (after corrections)

| Command | Result |
|---|---|
| `npm run validate` | valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers; 168/168 |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, unledgered 0 (1 known non-ESV excluded), orphan rows 0 |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 10,164 links, 4,153 cross-page, 8,368 fragments, 2,725 external; 0 broken, 0 duplicate IDs, 0 outside base |

Changes from the production baseline:
- Citations +3 (Hume 2.3.4.1, WCF 5.3, BSBh IV.1.5).
- Words +127 (the I-1 and I-2 corrections).
- Links +9 (the new citations and two `revelation` links).
- ESV candidates −1 ("above" now cited to WCF).

## 24. Accepted limitations

- Production §23 stands: Oppy unread; Quine 1969 via SEP; Bouyges OCR; Madhva via IEP; untranslated Bavinck passages paraphrased from the automated English; unnamed tafsir and *Vikuach* base editions; the optional Vos, Kabbalah, Berkovits and Berman work.
- Added by this review:
  - the methodology versus three-question mismatch (§11);
  - narrow-screen rendering not checked (§18);
  - the Tsongkhapa verse 6 locator taken from production's reading.

## 25. Publication prerequisites

1. **ESV rights (§15).** This is the only one, and it is current because the site is already public.
2. **User decisions, not prerequisites:** registry roles and the seven biographies (production §14); the pressure-question count policy (§11).

## 26. Recommendation

| Item | Scholarly quality | Technical integrity | Publication permission | Disposition |
|---|---|---|---|---|
| C4 corrections (§§4–12) | Accurate after review fixes | Validated | n/a | Approve |
| New naturalist questions | Fair after I-1 and I-2 | n/a | n/a | Approve |
| Provenance labels (Bavinck, Turretin, tafsir, *Vikuach*, Ibn Khaldun, Dōgen, Vasubandhu) | Confirmed against sources | Render publicly | n/a | Approve |
| Templates and source pages | No scholarly content hidden | 0 broken links or anchors | n/a | Approve |
| ESV quotation set (103 rows) | Faithful, ledgered | Reconciled | **Not established** (biblical-reference-work exclusion; no written grant) | User action required |
| "Used by permission" notice | Crossway's prescribed wording | Present | Accurate only if eligible | Keep; resolve eligibility |
| Deployment | n/a | Auto-deploys on merge; site already public | Republishes the same ESV set | User decision |

**MERGE ONLY AFTER SPECIFIED PREREQUISITES.**
- **Scholarly and technical approval: yes.** With this commit there is no remaining scholarly or technical blocker, and PR #26 may be merged on those grounds.
- **ESV publication: not authorized by anything on record.** Merging republishes the site. The ESV quotation set is already public from earlier merges, and C4 neither adds to nor removes it.
- **The prerequisite** is the user's explicit decision on that existing exposure. Choose one of §15's three options: Crossway's written confirmation, conversion to references or KJV, or taking Pages offline until one of those is done. Then merge.
- **If the user accepts the current exposure while seeking Crossway's confirmation,** merging C4 does not make it worse. C4 actually improves the public site by removing the stale "outlines only" notices.
- **Not to be described as publication-ready** until the ESV question is settled.

No UI redesign, design-spec change or portrait work was started. PR #26 was not merged.
