# UI-3 Independent Review — Christian Case

**PR:** https://github.com/simoncgoldstein/worldviews-examined/pull/31 (branch `ui3-christian-case`)
**Date:** 2026-10-13
**Reviewer:** Claude Opus 5.5, one fresh top-level session, no subagents. This session did not produce UI-3 and had no access to the production conversation. The production record (`UI3-CHRISTIAN-CASE.md`) and its screenshots were treated as claims to verify; every result below comes from this session's own scripts and reading.
**Scope:** review and corrections only. PR #31 was not merged. UI-4, the theme switch, the Further Study redesign and thinker portraits were not started.

**Verdict: MERGE.** Counts: 0 BLOCKER, 1 IMPORTANT, 5 MINOR, all fixed on the branch (§25).

## 1. SHAs and synchronization

| Item | SHA |
|---|---|
| Starting PR head (as expected) | `36eb696d56ee03a04662129d522ce4c5b0b2488c` |
| `origin/main` at review start, re-fetched before committing (unchanged) | `1ede1010cdbc93342dcce8611d354b12b6df168f` |
| Merge base | `1ede101`: the branch already contains all of `main`, so no merge was needed |
| Review fixes and this record | the commits after `36eb696` on the branch (reported in the PR conversation) |

`git status` was clean at the start. No production commit was rewritten and nothing was force-pushed.

## 2. Independence

- One new session; no subagents; the production session was not consulted.
- Test scripts were written from scratch in the session scratchpad (Playwright 1.57, not committed). In particular the 140-combination expectation was computed from Explore's own DOM (each answer's body children classified by `data-section`/`data-level`, element references kept), never from `christian-case.ts`'s `PARTS` table. A negative control (checking against the wrong opponent; moving one passage into another stage's cell) was run to show the checker fails when it should (36 errors; exactly the two affected cells).

## 3. Changed files examined

Every file in `git diff origin/main...HEAD` was read in full:

- **Runtime:** `src/scripts/modes.ts`, `compare.ts`, `christian-case.ts`, `reveal-hash.ts` (and the unchanged `answer-panels.ts`); `src/components/ChristianCaseView.astro`, `CompareView.astro`, `ModeSwitch.astro` (and the unchanged `AnswerPanel.astro`, `AnswerLevel.astro`, `AnswerSection.astro`); `src/pages/questions/[slug].astro`, `src/pages/index.astro`; `src/layouts/BaseLayout.astro`; `src/styles/case.css`, `compare.css`, `global.css`, `home.css` (and the pre-script rules in `explore.css`).
- **Docs:** `README.md`, `ARCHITECTURE.md`, `CONTENT-MODEL.md`, `UI3-CHRISTIAN-CASE.md`, and the eight producer screenshots.
- **Required reading:** `AGENTS.md`; `DESIGN-SPEC-V1.md` including §13; `METHODOLOGY.md`; `UI1-RESEARCH-LIBRARY.md`, `UI1-REVIEW.md`, `UI2-COMPARE.md`, `UI2-REVIEW.md`.

## 4. The Christian Case as an apologetic experience

Full cases were read stage by stage in the rendered page (all disclosures opened): Naturalism on *What is man?* and *Why can we know anything?*; Judaism on *Has ultimate reality revealed itself?* and *What happens after death?*; Islam on *revelation*; Hindu traditions on *What ultimately exists?*; Buddhist traditions on *What is evil?*.

**Verdict: coherent, and a distinct, serious apologetic reading tool.**

- **Sequence.** The alternative speaks first, in its own terms and with no commentary above it (stage 2); the positive Christian account follows (3); then the Christian critique (4), which in every case read is visibly written *against stage 2*: it names the schools and thinkers stage 2 presented (Papineau and Dennett; Halevi, Saadia and Farber; al-Ghazali and al-Baqillani; Advaita, Rāmānuja and Madhva; Buddhaghosa and Tiantai). The pressure questions (5) sharpen that critique. Christianity is then itself tested (6), and both Deep dives are offered for study (7).
- **Sympathy before criticism.** Stage 2 is the full *view* and *what this explains well*, unabridged. Where the authored answer states the alternative's own disagreement with Christianity, it is already here (for example Islam on *jesus*: "To say that God is the Messiah is to defy God"; Judaism: by Maimonides' test "Jesus was not the Messiah").
- **Christian positive position.** Given its own stage, at full length, before the critique. Sufficient.
- **Qualifications preserved.** Because whole sections are moved, every author's limit-statement reaches the reader unaltered: "a challenge of explanatory adequacy resting on theistic premises, not a demonstrated contradiction, and it proves no soul" (Naturalism, *what-is-man*); "a claim of comparative explanatory adequacy, not a charge of contradiction" (*knowledge-possible*); "The dispute is historical and revelatory" (Judaism, *after-death*); "These replies meet the charge of outright incoherence, though whether they succeed remains disputed within Vedānta" (Hindu); "a disagreement about the nature of the agent, not a charge that Buddhism ignores responsibility … a Tiantai teaching, not Buddhism's generally" (Buddhist).
- **What remains contested** is told by the texts themselves, and the interface adds no verdict: no score, winner card, progress meter or "conclusion" stage exists. The only emphasis is the quiet surface card on stage 4.
- **Studying sources without losing the argument.** Citations in every stage go to the two visible source groups and back (§16), the stage list stays beside the text on desktop, and thinker links return to the case.

## 5. Stage verdicts

### Stage 4 — The Christian response

Correct and well framed. It is the selected alternative answer's own *Christian response* section (verified as the element with id `<alt-ns>-christian-response` in all 140 combinations), labelled "From the *X* answer", with the heading "*X* answer: Christian response" for assistive technology. The label is accurate and necessary: the text is the site's Christian analysis, written in that tradition's answer file. The description repeated the worldview name twice above a label that names it a third time; it now reads "The Reformed critique of *X*, as written in its answer to this question." (M2).

### Stage 5 — Questions for examination

Correct. The selected answer's own *Pressure questions*, presented as a list of questions with the description "They are open questions to examine, not settled conclusions." Every item read is phrased as a question, not a verdict ("what evidence shows that it does?", "does that explain … or mark the point where explanation stops?").

### Stage 6 — Objections to the Christian account: attribution and fairness

**Distribution, verified independently by reading each section, not by tradition tags.** The 28 *Strongest objection* sections were extracted from the MDX and read:

| Intellectual origin of the objection (as the text presents it) | Count | Questions |
|---|---|---|
| Naturalist or secular critics (Hume, Russell, Darwin, Quine, Carroll, Ehrman, Sartre/Baier, cognitive science of religion, evolutionary biology, the psychology of self-deception) | 21 | after-death, death, evil, history, induction, jesus, know-the-good, knowledge-possible, logic-binding, love-beauty-creativity, offspring-family, one-and-many, order, revelation, self-deception, suffering, ultimate-authority, ultimate-reality, what-is-man, why-alive, worship |
| Moral-philosophical objections to Reformed doctrine (Kant; John Taylor; the proportionality of eternal punishment) | 5 | fail-the-good, final-end, great-and-terrible, guilt, self-salvation |
| Including a voice from another religious tradition | 2 | ultimate-personal (Maimonides and Śaṅkara), something-rather-than-nothing (Carroll and Vasubandhu) |

The production count by tradition tag (20 naturalist-only; 5 "Christian sources only") is substantially right but tags mislead in one respect: the five "Christian-tagged" objections are Kant's and Taylor's moral objections, not internal Christian ones. No objection comes from Islam. *ultimate-authority* mentions that "a Muslim can say the same of the Qur'an" as a parity argument inside a circularity objection.

**The confusion risk is real.** Several objections do not name their critic in the opening sentences (*offspring-family*: "The objection is that this sanctifies one historical family form … the households of Scripture include polygamy"; *final-end* on everlasting punishment; *death*: "Evolutionary accounts …"). Placed after a Christian response to Islam or Judaism, the polygamy objection or the eternal-punishment objection could easily be read as Islam's or Judaism's rejoinder, though neither tradition makes it in those terms. In Judaism on *after-death*, stage 4 ends "The dispute is historical and revelatory, not a contest between bodily and bodiless hope"; stage 6 then opens with Russell's mortalism, which Rabbinic Judaism rejects.

**The label and its description.** The heading **Objections to the Christian account** is right: it says whose account is under objection, and reads as a change of direction. The production description was:

> The Christian answer's own strongest objection, with the Christian reply. The objection may come from another tradition: it is not the *X* answer replying to the Christian response above. That answer has no separate rejoinder here; its fuller account is in its Deep dive, under Study the sources.

Assessment against the brief's criteria:

- **Accurate:** yes, in every case checked; it never attributes the objection to the selected tradition.
- **Readable and prominent:** prominent (directly under the heading, above the closed disclosure), but at about 50 words in three sentences and four lines on desktop it was roughly four times the other descriptions, and the key point sat in the middle of the second sentence.
- **Excessively defensive / a distraction:** somewhat; the third sentence was a methodological note to every reader.
- **One clause could mislead the other way:** "That answer has no separate rejoinder here" can be read as "this tradition has no reply", which the brief specifically asks the interface not to imply (§6 below). And "its fuller account is in its Deep dive" suggests the Deep dive is a rejoinder, which it is not designed to be.

**Change (M1):** the description is now two short sentences:

> The strongest objection the Christian answer addresses on this question, and its reply. It is not a reply from the *X* answer, and it may come from a different tradition.

It states provenance first ("the Christian answer addresses"), keeps the one disclaimer that prevents misattribution, and is true for every opponent: for Naturalism the objection is usually naturalist, but it is still stated in the Christian answer and not in the Naturalism answer, and "may" holds. Screenshots: `ui3-review/01` (Judaism, *after-death*, desktop) and `02` (Islam, *revelation*, phone).

**Is a presentation-only solution sufficient?** Yes, for misattribution. Most objections name their critic in the first sentence (Hume, Russell, Darwin, Kant, Quine, Carroll, Ehrman), and the heading plus the corrected description cover the rest. Reordering was considered (placing stage 6 straight after the Christian account, mirroring the Christian answer's own order) and rejected: the critique would then follow the Christian reply to a naturalist, which creates the same adjacency problem in the other direction, and ending with Christianity under examination is the fairer order for a mode that has just critiqued the alternative.

**Does stage 4 already answer stage 6?** The interface makes no such claim, and none should be made: they usually concern different claims (in *after-death*, the stage 4 response concerns the resurrection's having begun; the stage 6 objection concerns personal survival and everlasting punishment).

**Scholarly limitation (not a UI defect):** see §26.

### Stage 6 description length

Now concise: about 30 words, two sentences, three lines on desktop, comparable to stages 2 and 5.

## 6. Absence of an authored rejoinder

The schema has no separately labelled section in which each alternative answers the Christian response. That does **not** mean the alternatives' replies are absent:

- **Replies reported inside the Christian response** — e.g. "Naturalists reply that accurate beliefs are the best explanation of how creatures find food and avoid predators, so selection does favor truth … The debate is real and unresolved" (*knowledge-possible*); "Advaita has replies. Śaṅkara calls the superimposition … natural and without beginning …" (*ultimate-reality*); Buddhaghosa's middle way (*evil*).
- **Counterclaims in the alternative's own view** (stage 2), as in §4.
- **Fuller accounts in the Deep dives** (stage 7), which the case places alternative-first.

The interface now says nothing that implies the tradition lacks a response; the only statement about provenance is that the stage 6 objection is not a reply from the examined answer. The production record's "No alternative rejoinder … exists in the corpus" (§6, §23) and `CONTENT-MODEL.md`'s "since no answer authors such a rejoinder" were corrected to "no separately authored rejoinder section" (M5).

## 7. Seven-stage coherence

**Verdict: coherent.** Each stage has a distinct function (state, affirm, critique, question, be questioned, study), the stage list makes the sequence visible without becoming a wizard (no Next buttons, no progress, nothing locked), and every stage can be read directly. The one point where the sequence could imply a continuous exchange (5 → 6) is now clearly marked as a change of subject.

## 8. Christian Case distinct from Compare

- Compare is symmetric (any two, either order, matched rows, neutral stage names). Christian Case fixes Christianity, offers only the five alternatives (no Christianity option, verified in all 140), puts the alternative first, and names its stages argumentatively.
- The existing Christian response is identifiable as the core (stage 4, the only emphasised stage, "From the *X* answer").
- Pressure questions have their own stage; objections to Christianity are labelled as such.
- Both Deep dives and both source groups are offered (stage 7 and Sources).
- No scoring, winner card, progress meter or declaration of victory.

## 9. Shared-controller architecture

**Verdict: sound; exactly one controller moves scholarly nodes.** `modes.ts` owns the single `moved` list; `compare.ts` and `christian-case.ts` only return placement lists and sync their own controls; `arrange()` always unmounts every moved node before mounting the new layout, so two layouts can never hold nodes at once. Responsibilities checked line by line:

| Responsibility | Where | Assessment |
|---|---|---|
| Mode parsing, canonicalization | `parseQuery`, `urlFor` | Literal-text canonical check is an improvement on UI-2; verified by 33 URL cases (§15) |
| Saved selections | `selection` (pair + opponent) | Both remembered; crossing policy in `compareTarget`/`caseTarget` matches the record |
| DOM placement / restoration / placeholders | `mount`, `unmount` | Transactional `unmount` kept from UI-2; one defect in `mount` fixed (M3) |
| Disclosure persistence | `saveLevels`/`restoreLevels`, per-mode keys | Case and Compare levels kept separately; Explore's record never overwritten |
| Source-group visibility | `arrange` | Owns `hidden` on the groups; note for UI-4 below |
| Fragment resolution | `needsResolve`/`resolveForMode` + `landing` | Verified on 18 direct-load targets and click paths (§16) |
| Focus | `keepingFocus`, `settleFocus`, in-page link refocus | Verified (§17) |
| History | `navigate`, `record`, `onPopState` | One entry per change; Firefox scroll fix kept; rate-limit refusal kept |
| Failed-script fallback / exceptions | `apply` → `resetModes`, init `catch` | Verified with 21 injections (§12) |

**M3 (fixed).** `mount` inserted the placeholder, then appended the node, then recorded the pair. Injecting an exception into the append (a scenario the production suite did not cover) left one unrecorded `<!--moved-->` comment in the answer after recovery. No text was lost (the node never left), but the invariant "one placeholder per moved node" broke. The entry is now recorded before the append; `unmount` then restores correctly whether or not the append happened.

## 10. Compare regression

Independent `compare-matrix`: all 28 questions × 30 ordered pairs, through the real controls (Swap for reversals, otherwise the selects, choosing the order that never selects a disabled option). For every state: URL, both selects, exactly the other side's option disabled, every cell's element identity against Explore, worldview attribution, one prefix per heading, the four other answers undisturbed, the Examine wrapper intact (Compare does not split it), 0 duplicate ids, placeholders = moved nodes, exactly the two source groups visible, every citation target visible; then byte-for-byte restoration of `.reading`, `#overview`, `#sources`.

`compare-flows`: Open both / Close both and labels; keyboard Swap keeps focus and adds one entry, Back undoes it; desktop columns aligned at 1,280; phone matched order at 320 and 390 (glance, view, strengths, examine, study, footer — A then B) with no overflow; citation round trips in both columns; unselected target → Explore → Back restores; and the pair policy (below).

**Remembered pair:** a non-Christian pair (Hindu/Buddhist) survives a visit to Christian Case and an opponent change; the mode switch's Compare link keeps offering it, while the in-page link reads "Compare these two answers side by side" and leads to Christianity and the current opponent. Each link's label and destination agree. When the remembered pair contains Christianity, Case → Compare replaces the other side with the examined worldview (documented policy; Back restores the earlier pair).

Results by engine: §21.

## 11. DOM-node and ID restoration

In all 140 combinations (§14): each of the nine cells holds exactly the expected element objects in order; the Christian body is left empty and the alternative's body holds only its emptied Examine wrapper; 0 duplicate ids; placeholders = moved nodes. After each question's transition sequence the three regions are byte-identical to their pre-mode snapshot, with the six answers in their original order and no prefixes, placeholders or cell contents left.

Rendered-page immutability was checked against the deployed `main` site (which has Compare but not Case): for all 28 question pages, `.reading`, `#overview` and `#sources` are byte-identical (84/84), apart from the renamed `data-…-sources-note` hook.

## 12. Failure injection and fallback

21 scenarios, exceptions injected into `Document.createComment`, `CharacterData.replaceWith` (comments), `Element.append` into a cell, and the source-group query. After each, the verifier requires: every answer's inner markup equal to a clean Explore load (ignoring `open`), canonical body and Examine order, no placeholders, no stranded cell content, no prefixes, no duplicate ids, the mode controls withdrawn, both scaffolds hidden, Explore and all six source groups shown, the URL naming Explore, and focus not in a hidden element.

| # | Scenario | Result |
|---|---|---|
| 1 | Initial mount, before the first move | pass |
| 2 | Initial mount, partway through the first answer | pass |
| 3, 3b | Initial mount, partway through the second answer; during the Deep dives | pass |
| 3c | Initial mount, append fails after its placeholder | **orphan placeholder** before M3; pass after |
| 4 | After both answers moved (sources step) | pass |
| 5a, 5b, 5c | Opponent change: restoring; mounting; append failing | pass; pass; orphan before M3, pass after |
| 6a–6d | Case → Compare restoring / mounting; Compare → Case mounting / restoring | pass |
| 7, 8 | Case → Explore, restoration failing on the first / the last node | pass |
| 8b–8d | In-page "Read all six", in-page Compare link, unselected-fragment link, each failing in restoration | pass |
| 9a, 9b | Back between opponents (restoring); Forward into Compare (mounting) | pass |
| 10 | After a recovery: Back ×2 and Forward to older Case entries, a fragment into a closed Christian reply, a scripted opponent change | pass: page stays Explore, URL corrected, target revealed, nothing moves |

## 13. Mode transitions

All six directions and the brief's extended sequences, through the mode links, in every question of the matrix (252 checks) and in `case-flows`:

- Explore → Compare → Christian Case → Compare → Explore, then Back ×4 and Forward ×4: each step's URL restored exactly; Explore's open Islam answer still open afterwards.
- Christian Case → Compare → Christian Case with another opponent; Back ×3 restores each.
- Compare (Judaism/Islam) → Christian Case (opens on Judaism) → Compare (pair kept) → in-page link (Christianity/Judaism), focus moved to the newly current mode link.
- Deep dive and Christian objections opened in Case → Compare (same nodes, still open) → closed there → Back to Case restores Case's own open levels; Forward restores Compare's.
- Thinker link → Back (same opponent and URL; scroll within 40px in Chrome and Firefox, top of page in WebKit, §21) → change opponent (works).

## 14. The 140-combination test

`case-matrix`, all 28 questions × 5 opponents through the real controls (the mode link, then the select). For each: URL `?mode=case&opponent=<id>`; only the Case scaffold shown; select value right and no Christianity option; `aria-current` on Christian Case; stage order; nine cells by element identity; labels ("From the *X* answer" for stages 4–5); one correct prefix per heading and none outside; stage 4 holding `<alt-ns>-christian-response`, stage 6 holding `christianity-…-strongest-objection` and `-christian-reply`; bodies left behind as expected; the four other answers untouched; 0 duplicate ids; placeholders = moved; exactly two source groups, each byte-identical to Explore apart from `hidden`; every in-region `#` link resolves; every citation lands in a visible group; sources note and `data-case-name` text name the opponent; the in-page Compare link names `christianity,<opponent>`. Then nine transitions per question and the byte-for-byte restoration check.

Results by engine: §21.

## 15. URL parsing and history

`case-urls`, 33 cases (all five opponents; none; blank; unknown; an HTML-injection attempt; Christianity in two casings; duplicate equal and unequal opponents; comma lists; Christianity plus a valid one; `CASE`/`Islam`; `%20case%20` with `bud%64hism`; malformed `%E0%A4`, `%`; `mode=%`, `cases`, `apologetics`; `opponent` without `mode`; `mode=explore`; repeated `mode` both ways; Compare parameters in Case and Case parameters in Compare; unrelated parameters before, after and with a non-canonical value). For each: mode and selection shown, final address bar, **no added history entry**, the expected notice or none, and no reflection of the raw input anywhere in the page text. All pass in every engine. A notice clears at the next choice, and a scripted Christianity value is refused without a history entry.

History: one entry per mode or selection change; none for disclosures (§13). Malformed URLs never poison the remembered state, because the canonical selection replaces them before anything is saved.

**bfcache** (`case-bfcache`; Chrome launched without `--disable-back-forward-cache`): Case (Judaism, objections open) → thinker → Back: `pageshow.persisted === true`, a JS marker set before leaving still present, opponent, URL, open objections and two source groups intact; the select works afterwards and in-document Back returns to the previous opponent. Compare → Case → thinker → Back → Back: persisted, Case shown, then Compare restored. Firefox and WebKit: see §21.

## 16. Fragment and source navigation

**Finding I1 (IMPORTANT, fixed): direct links into a reading mode drifted when web fonts arrived.** In Firefox, a direct load of `?mode=case&opponent=islam#christianity-what-is-man-deep-dive` left the Deep dive summary 14px *above* the viewport, under the pinned label; the Christian reply and the Islam Deep dive landed at 26 and 45px instead of 48. The same links in Compare landed 88–117px low; Explore was exact. Tracing showed the script's `scrollIntoView` put the target at 48–49px at DOMContentLoaded; when the web fonts finished (`document.fonts.ready`) the text above had reflowed by up to 62px, and nothing compensated, because both mode regions set `overflow-anchor: none` (so `modes.ts` can keep positions itself) and WebKit has no scroll anchoring at all. Chrome escaped only because its fonts were ready first: with the font files delayed 1.2 s, Chrome needs the same correction (61px in Case, 88px in Compare). So a first visit on a slow connection could land a shared citation or section link off target in any engine. UI-2's Compare had the same latent defect. **Fix** (`reveal-hash.ts`): after the initial fragment scroll, if the fonts are still loading, the target is landed again when they are ready, unless the reader has scrolled in the meantime. `case-fonts` (4 targets × 3 modes × fonts normal and delayed 1.2 s, plus a reader who scrolls before the fonts arrive) fails 14 checks in Firefox on the pre-fix build and passes in all engines after it.

**Direct loads** of `?mode=case&opponent=islam#…` (18 targets): both worldview anchors and `…-heading` stay and land on the right thesis; stage anchors; the response; the pressure questions; the Christian objection and reply (closed disclosure opened); both Deep dives; the answer's and page's sources stay in Case; an unselected answer's section, its source group and `#overview` switch to Explore with the URL cleaned; `#compare-examine` switches to Compare. Each target is on screen and no closed ancestor remains.

**The emptied Examine wrapper.** A link to `#islam-…-examine` stays in Case and lands on stage 4, the place its contents now occupy, on screen; nothing scrolls to the hidden wrapper, and focus is moved only if the focused element was hidden. Browser find-in-page (`window.find`, Chrome and Firefox) reaches text moved out of the wrapper ("a challenge of explanatory adequacy …") inside stage 4.

**Citation round trips** from all seven passages that cite (Naturalism case: view, Christian view, response, pressure questions, the closed objection disclosure, both closed Deep dives): citation → source entry on screen, still in Case → close every disclosure → `↩` backlink reopens and lands on the marker → close again and repeat the same hash → reopens again. Stage 7's footer links: "Sources cited in this answer" stays in Case; "Back to the six answers" switches to Explore honestly.

**Unselected targets by click** (overview, another answer, an unselected source group) from y = 1,500: Explore, target on screen, focus not hidden; Back restores the case, the opponent and the exact scroll position.

**Citation and source integrity:** source ids, citation ids, numbers, locators and bibliography entries are the same elements (byte-identical groups in every combination; 84/84 rendered regions identical to `main`). All six groups remain in the static HTML. **UI-4 note:** `modes.ts` owns `hidden` on the source groups in both modes; a future question-level filter must compose with it (offer only the visible groups in a mode, or let the mode's visibility take precedence) and must leave every anchor in place.

## 17. Focus and keyboard

Real key events: Enter on the Christian Case link enters Case and keeps focus on the link; Tab reaches the opponent select; ArrowDown changes the opponent (Chrome, WebKit; Firefox's closed-select arrow behaviour differs and was not asserted) with focus kept and one history entry; Enter on a stage link lands on the stage; Enter and Space toggle a summary. A Tab walk from the mode switch through the Case region (55 stops in Chrome) never reached a hidden element, every stop was on screen, and every stop showed a focus outline of at least 2px. In-page links that hide their own region move focus to the now-current mode link. After a switch to Explore, focus never stays in a hidden element.

## 18. Accessibility tree and screen readers

`ariaSnapshot` after two opponent changes: `h1` question; `navigation "Reading mode"` with three links and a polite `status` ("Christian Case: Reformed Christianity and Classical Islam."); visually hidden `h2` "Christian Case"; `combobox "Worldview to examine"`; `h2` "The two answers" with the two worldview names as `h3`; `navigation "In this case"` with the seven stage links; then the six stage `h2`s in order, each passage `h3` attributed ("Classical Islam: The view", "Reformed Christianity: The Christian view", "**Classical Islam answer:** Christian response", "Classical Islam answer: Pressure questions"), the objection disclosure as `group "Reformed Christianity: Strongest objection and Christian reply"`, and the Deep dives as `group "Classical Islam: Deep dive"` / `"Reformed Christianity: Deep dive"`. No repeated or leftover prefixes; hidden content absent.

- Stage 4's attribution ("Classical Islam answer: Christian response") correctly says where the text is written without implying Islam wrote the critique, and the stage heading "The Christian response" precedes it.
- Pressure questions (`h3` under "Questions for examination") and the objection (a group under "Objections to the Christian account") are distinguished by both heading and role.
- Reading order of stage 6: heading, description, then the disclosure (summary, objection, reply).

**Not done:** no NVDA, JAWS or VoiceOver was available. The accessibility tree is not a screen reader and does not establish how announcements or the stage list sound.

## 19. Mobile and desktop visual results

Producer screenshots 01–08 were inspected and match the build, except the old stage 4 and stage 6 descriptions in 04 and 05 (superseded; current state in `ui3-review/`).

**Review screenshots** (`docs/ui/screenshots/ui3-review/`):

| File | Shows |
|---|---|
| `01-objections-judaism-after-death-1280-light.png` | Pressure questions, then *Objections to the Christian account* with the shortened description (M1), Russell's objection opened (Judaism, *after-death*) |
| `02-objections-islam-revelation-390-light.png` | The same stage on a phone: Hume's objection after the Christian response to Islam (*revelation*) |
| `03-response-hindu-1280-dark.png` | Stage 4 in dark theme with the shortened description (M2): the Hindu answer's Christian response keeping Advaita, Rāmānuja and Madhva apart |

Also inspected (not committed): 320 and 390 first screens and stage lists, 768 light, 1,024 dark (Islam response), 1,280 dark (objections), 1,600 light (objections), 1,280 light (Study the sources).

**Overflow:** every Case disclosure open, five cases (Naturalism, Islam, Hindu, Buddhist, Judaism), 320, 390, 640, 768, 1,024, 1,280 and 1,600px, light and dark: **0 horizontal overflow in 70 runs** (Chrome; other engines §21). All Case controls (mode links, select, stage links, summaries, in-page links) ≥ 44px tall at 320 and 390.

**Desktop:** a serif reading column at the measure, a quiet sans stage list in a sticky 200px column, hairline stage rules; stage 4's surface card is the only emphasis and is restrained in both themes (screenshot `ui3-review/03`, dark). Theses side by side from 48rem. It reads as a research library, not an instructional wizard: the stage list is a table of contents, not a progress control.

**Phones** (measured, *What is evil?*, Buddhist):

| | 320 × 844 | 390 × 844 |
|---|---|---|
| Opponent select bottom | 659 | 537 |
| First (alternative) thesis | 766 (first screen) | 644 |
| Christian thesis | 1,065 | 890 |
| Stage list | 1,290–1,559 (269px) | 1,088–1,327 (239px) |
| Stage 2 | 1,612 | 1,380 |
| Stage 4 (Christian response) | 6,210 | 5,153 |

**Assessment: acceptable; no layout change.** The argument begins on the first screen (both theses within about 1.3 screens), and the stage list arrives on the second screen, from which *The Christian response* is one tap. Scrolling to stage 4 without the list is long (about six screens) because stages 2 and 3 are the two complete positive accounts, which the spec requires to be read in full and unabridged. Moving the stage list above the theses would push the argument down by 240–270px; shrinking it would mean smaller targets or text. The 320px site header and breadcrumb wrap (outside UI-3). Recorded as a limitation: no "back to stages" affordance at the end of a long stage on phones.

## 20. Browser coverage, no-JavaScript, print, performance

See §21 for the engine table. Details of the individual suites:

**No-JavaScript and slow scripts (`case-slow`, for Case and Compare URLs):**

| Case | Result |
|---|---|
| JavaScript disabled | Explore: 6/6 answers, overview, 6 groups, 0 visible buttons or selects, no scaffold, the `<noscript>` line |
| Module blocked | Explore after the fallback: 6/6, overview, 6 groups, no controls |
| Module delayed 7 s, reader idle | Full Explore at the fallback; the requested mode applied when the module arrives |
| Module delayed 7 s, reader scrolled into the Hindu answer with a citation focused | Stays Explore, focus kept, URL Explore, the mode link offers the requested selection. **Before M4 the focused passage dropped 72px** (§25); after, it stays exactly in place |
| Pending module (2 s) + direct fragment into the closed Christian reply | Case applied, target revealed and on screen |
| Late module (7 s) + the same fragment | Target visible and on screen; the address bar names what is shown |
| Reload in Case | Opponent kept; open objections kept (Chrome, WebKit; Firefox build drops `history.state`) |
| Exceptions during mounting or transitions | §12 |

**Print (`case-print`, *what-happens-after-death*, Buddhist):** with every disclosure closed on screen, print media plus `beforeprint`: title "Christian Case: Reformed Christianity and Buddhist traditions"; all seven stage headings and their descriptions (which carry the stage 4–6 attributions); sections in order (view, strengths, Christian view, strengths, Christian response, pressure questions, strongest objection, Christian reply, Deep dive ×2); 26/26 paragraphs and theses, 30/30 citation markers; exactly the two source groups (25 entries); no select, stage list, mode switch or in-page links; no empty cells; on-screen open/closed state restored afterwards. Same with the objections open and with both Deep dives open. Compare print (Hindu/Buddhist) and Explore after leaving Case print in full; a Case URL with JavaScript disabled prints the full Explore page with all six groups.

**Performance (Chrome, CDP, *why-is-man-great-and-terrible*, final build):**

| Item | Result | Production baseline |
|---|---|---|
| Shared module | 19,746 B minified, 6,294 B gzip (+421 B for the review fixes) | 19,325 B / 6,297 B |
| Initial load of a Case URL (local preview) | DOMContentLoaded 80 ms, load 374 ms; CLS 0.0000 | 119 / 377 ms |
| 150 paced opponent changes (synchronous work including layout) | median 18.4 ms, p95 23.5 ms, max 44.6 ms | median 27 ms |
| 90 paced mode changes | median 18.0 ms, p95 36.5 ms, max 61.1 ms | median 23 ms |
| Event listeners (after GC) | 51 → 51 | no growth |
| DOM nodes | 6,268 → 6,281 (the 13 live placeholders) | no growth |
| JS heap (after GC) | 0.85 → 0.99 MB | |
| Placeholders after 240 changes | 13 = moved nodes; 0 duplicate ids | |
| `history.length` / `history.state` | capped at 50 by Chrome / 22 characters | |

One file, one request, no framework, no content fetch. The latencies are measured differently from production's (synchronous work around the dispatch), so only the order of magnitude compares. No optimization is warranted.

## 21. Results by engine

Playwright 1.57 scripts in the session scratchpad (not committed), against `astro preview` on `http://[::1]:4329`. The machine had 0.3–1.4 GB free, so every suite ran **serially**, one engine and one browser process at a time, with a fresh context per question or scenario. No assertion was weakened for memory.

| Engine | Version |
|---|---|
| Chrome | Google Chrome 155.0.8059.40 (installed), headless |
| Firefox | Playwright Firefox 144.0.2 (build 1497) |
| WebKit | Playwright WebKit 26.0 (build 2227) **on Windows: not Safari, not macOS or iOS** |

**Final build** (after every fix), all suites:

| Suite | What it checks | Chrome | Firefox | WebKit |
|---|---|---|---|---|
| `case-matrix` | 140 combinations by element identity; 252 transition checks; byte-for-byte restoration (§14) | **0 failures** | **0 failures** | **0 failures** (paced 400 ms) |
| `compare-matrix` | 28 × 30 ordered pairs = 840 states; restoration (§10) | **0 failures** | **0 failures** | **0 failures** (paced 650 ms) |
| `case-fail` | 21 failure injections plus 6 post-recovery checks (§12) | pass | pass | pass |
| `case-urls` | 33 URL cases, notice clearing, scripted refusal (§15) | pass | pass | pass |
| `case-flows` | extended sequences, per-mode levels, 18 direct-load targets, 7 citation round trips, unselected targets with Back position, footer links, find-in-page, thinker round trip, keyboard (§13, §16, §17) | pass | pass | pass except the known WebKit limitation: Back from a thinker page restores mode, opponent and URL but returns to y = 0 (UI-1/UI-2 recorded the same) |
| `compare-flows` | Open/Close both, keyboard Swap, desktop alignment, phone matched order, citations, remembered pair (§10) | pass | pass | pass |
| `case-slow` | no-JS, blocked, delayed (idle and reading), pending and late fragment, reload — Case and Compare URLs (§20) | pass | pass (reload drops open levels: Playwright Firefox loses `history.state`, as recorded since UI-1) | pass |
| `case-print` | 3 Case states, Compare, Explore after Case, no-JS (§20) | pass | pass | pass |
| `case-layout` | 70 overflow runs (7 widths × 2 themes × 5 cases), phone geometry, control heights (§19) | 0 overflow | 0 overflow | 0 overflow |
| `case-bfcache` | Case → thinker → Back; Compare → Case → thinker → Back → Back (§15) | pass, **real restores 2/2** (`persisted: true`) | pass after a reload; **no bfcache restore observed** (`persisted: false`) | pass after a reload; **no restore observed** |
| `case-fonts` | 4 targets × 3 modes × fonts normal and delayed 1.2 s; a reader who scrolls first (I1) | pass | pass (14 failures on the pre-fix build) | pass |
| accessibility tree | `ariaSnapshot` after opponent changes (§18) | pass | pass | pass |
| `case-perf` | CDP (§20) | pass | n/a | n/a |

**Test corrections (the tests, not the product):** the citation round trip moved from the Hindu to the Naturalism case because the Hindu pressure questions on *What is man?* carry no citation; the Compare matrix chooses the order of select changes so it never picks a disabled option; the print check stopped treating the stage descriptions (printed by design, since they carry attributions) and the answer heading button as controls; the bfcache test waits for the thinker URL and for the question page after Back, because an early `waitForLoadState` could resolve on the old page and make Back race the navigation (Firefox, intermittent).

**Not tested:** real Safari (macOS, iOS), branded Firefox, real screen readers, physical printing, bfcache restores in Firefox and WebKit. These remain UI-5 release-QA items.

## 22. Scholarly immutability

- `git diff origin/main -- src/content src/lib docs/ESV-QUOTATION-LEDGER.md research`: **empty** after the review fixes.
- Source and thinker registries, citation ids and locators, and ESV quotations unchanged (`audit-inventory.mjs`: 104 ESV candidates, 0 unledgered, 0 orphan rows; its line-ending rewrite in `research/final-audit/data` was restored).
- Rendered scholarly regions identical to deployed `main` (84/84).
- New text in the review is interface text only: two stage descriptions. No claim about any tradition was added; no apologetic argument was written into a template.

## 23. §13 compatibility

No §13 feature was implemented. Nothing in UI-3 blocks them: Case uses only tokens (theme switch, accent trial); the answer footer travels whole into stage 7 (Further Study footer); ids and anchors are unchanged (citation previews, Sources Library deep links); source-group `hidden` composition is noted for UI-4 (§16). Thinker portraits remain post-launch.

## 24. Severity scale

As in the brief. Nothing found lost content, duplicated an id, broke a mode or misrepresented a tradition, so there is no BLOCKER. I1 is IMPORTANT because it is a navigation failure on a core path (a shared section or citation link into a reading mode) with a real cross-browser trigger. The stage 6 issue was judged MINOR rather than IMPORTANT because the production wording was accurate and already prevented misattribution; the change improves concision and removes one clause that could be over-read.

## 25. Findings and corrections

| # | Severity | Finding | Fix |
|---|---|---|---|
| I1 | IMPORTANT | Direct fragment links into Christian Case or Compare drifted by up to 62px (Case) and 117px (Compare) once web fonts loaded, because the mode regions disable scroll anchoring: in Firefox a Deep dive summary ended above the viewport under the pinned label. Reproduced in Chrome with delayed fonts. Latent in UI-2 as well. | After the initial fragment scroll, re-land the target when `document.fonts.ready` resolves, unless the reader has scrolled (`reveal-hash.ts`). §16. |
| M1 | MINOR | Stage 6 description: accurate but about 50 words in three sentences (four times the other descriptions), the key disclaimer mid-sentence, and "That answer has no separate rejoinder here; its fuller account is in its Deep dive" could be read as saying the tradition has no reply, or that the Deep dive is its rejoinder. | Two sentences, about 30 words: "The strongest objection the Christian answer addresses on this question, and its reply. It is not a reply from the *X* answer, and it may come from a different tradition." (`ChristianCaseView.astro`) |
| M2 | MINOR | Stage 4 description named the worldview twice, above a label naming it a third time. | "The Reformed critique of *X*, as written in its answer to this question." |
| M3 | MINOR | `mount()` recorded a moved node only after appending it; an exception in the append left an unrecorded placeholder in the answer after recovery (content intact). | The entry is recorded before the append (`modes.ts`). Failure scenarios 3c and 5c pass. |
| M4 | MINOR (pre-existing since UI-1/UI-2; `reveal-hash.ts` logic unchanged by UI-3) | A late module kept the element a third of the way down the screen in place. When that was an answer's thesis and the reader had focused a citation below it, the answer's tool row appeared between them and the focused passage dropped 72px (Case and Compare URLs alike). Not hidden, focus kept. | The late-load anchor is now the reader's focused element when it is on screen, else the element a third of the way down (`reveal-hash.ts`). The passage stays exactly in place. |
| M5 | MINOR | Docs overstated the absence of replies: "No alternative rejoinder … exists in the corpus" (`UI3-CHRISTIAN-CASE.md` §6, §23) and "no answer authors such a rejoinder" (`CONTENT-MODEL.md`); §5 and §7 of the record quoted the old descriptions. | Reworded to "no separately authored rejoinder section", with the replies that do exist noted; the quotations updated with a pointer to this review. |

**Totals: 0 BLOCKER, 1 IMPORTANT, 5 MINOR. All fixed.** Also tidied: an unindented continuation line in `compare.css`'s print rule (cosmetic, not counted).

**Recorded, not changed:** the phone scroll distance to stage 4 (§19); no stage-list "you are here"; Case → Compare replacing a Christianity-containing pair's other side (documented policy, Back restores); `UI2-COMPARE.md` still describes Christian Case as "In preparation" (a historical record; current docs are correct).

## 26. Remaining legitimate scholarly question

**Tradition-specific objections to the Christian answers warrant a separate, narrowly scoped editorial project**, for the editors to decide. In Christian Case against Judaism, Islam, Hinduism or Buddhism, stage 6 almost always shows a naturalist or Kantian objection; the reader rarely meets the strongest objection *that tradition* presses against the Christian account (for example Islamic objections to the Trinity and incarnation, the Jewish messianic objection, Advaita on a personal ultimate beyond *ultimate-personal*, Buddhist objections to an enduring soul and eternal destiny). The alternatives' own positions are present (stage 2) and some replies are reported inside the Christian responses, so nothing is misrepresented; but the Christian side of these pairings is tested mainly by secular critics.

Suggested scope, if wanted: start with the questions where the religious contrast is central (*jesus*, *revelation*, *ultimate-personal*, *after-death*, *guilt*, *self-salvation*); it would need either a content-model decision (more than one objection per Christian answer, each attributed) or a revised single objection where a religious one is stronger, with normal source checking and independent review. **It must not be solved in UI code**, and the current stage 6 wording does not depend on it.

## 27. Validation (final build)

| Check | Result |
|---|---|
| `npm run validate` | Content valid: 6 worldviews, 6 categories, 28 questions, 56 thinkers, 236 sources, 168 answers |
| `npm run check` | 0 errors, 0 warnings, 1 hint (pre-existing) |
| `npm run build` | 96 pages |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 134,273 words, 2,838 citations; ESV candidates 104, unledgered 0 (1 known non-ESV excluded), orphan rows 0 |
| `MSYS_NO_PATHCONV=1 node scripts/check-built-links.mjs` | 96 pages, 168/168 answers, **11,169 links** (4,654 cross-page, 8,906 fragments, 2,725 external), 0 outside base, 0 broken, 0 duplicate ids |

The link count equals the production count; the review changed no link. The production record's +281 over UI-2 (28 Case mode links, 196 stage-list links, 56 in-page links, 1 homepage link) was confirmed by the unchanged total and the markup.

## 28. Recommendation

**MERGE.**

- The branch contains current `main`; no merge was required.
- The one IMPORTANT defect (I1, direct links drifting after web fonts load in the reading modes) is fixed and covered by a new suite in all three engines.
- The shared coordinator is the single owner of node movement, and its recovery paths hold under 21 injected failures, including two the production suite did not try (fixed, M3).
- All 140 question–opponent combinations and all 840 Compare pair states verified by element identity with byte-for-byte restoration, in three engines (§21).
- Christian Case is a coherent, fair apologetic sequence; stage 6 cannot be mistaken for the selected tradition's reply, and now says so concisely.
- No scholarly content or quotation changed.

The user merges. UI-4 was not started.
