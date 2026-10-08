# R6: Thesis clarity and progressive disclosure

Production record. 2026-10-08. One Claude Opus 5.5 top-level session, no subagents. **Independent review has not been run.** It belongs to a fresh session (see §24).

## 1. Branch and base

- Branch: `r6-thesis-progressive-disclosure`.
- Base: `main` @ `c6d7e54`, the merge of PR #20 (R5), confirmed merged 2026-10-08T19:05Z.
- The working tree was clean at branch creation.

## 2. Original findings addressed

| ID | Finding | R6 result |
|---|---|---|
| XQ-03 (IMPORTANT) | About 34 theses lead with a caveat, a taxonomy or "the schools differ" | 32 ledes revised; the flagged ones left unchanged are listed in §7 with reasons |
| HIN-03 (IMPORTANT) | About 20 Hindu theses dominated by classification and disagreement | 15 Hindu ledes revised; `ultimate-reality` and `one-and-many` kept (§7) |
| `CROSS-QUESTION.md` §6 | Openings: names dominate (`christianity/what-is-man`, `great-and-terrible`, `offspring-family`); exceptions introduced so early the basic view is lost (Hindu M&E, `judaism/evil`, `islam/know-the-good`); basics buried (`christianity/self-salvation`, `guilt`, `judaism/after-death`) | 7 openings revised; the rest were already fixed by R1–R5 (§§7, 11) |

## 3. Method

1. Extracted all 168 `lede` values and read them consecutively. The full inventory is in `R6-LEDE-INVENTORY.md`, with one row per answer: direct answer, caveat-led, taxonomy-led, abstract, whether the first paragraph explains the lede, whether essentials are deferred, and the action taken.
2. For every candidate, read the whole first section. For each revision, also read the rest of the body: explains-well, response, pressure questions and Deep dive.
3. Each revised lede was written only from claims the page already establishes. The supporting passage is named in §9.
4. Reread the changed ledes horizontally (by question) and vertically (by lane), then swept all 168 again (§§17–18, 22).

## 4. Totals

| Measure | Count |
|---|---|
| Ledes inventoried | **168** |
| Ledes revised | **32** |
| Opening explanations revised | **7** |
| Answers touched | **33** (32 ledes, plus the opening of `christianity/offspring-family`, whose lede is unchanged) |
| New sources | 0 |
| New or changed direct quotations | 0 |
| ESV ledger changes | 0 |

## 5. Changes by worldview

| Lane | Ledes revised | Openings revised |
|---|---|---|
| Hindu traditions | 15: ultimate-personal, great-and-terrible, what-is-man, why-alive, worship, know-the-good, fail-the-good, evil, suffering, death, self-deception, self-salvation, guilt, after-death, final-end | 1: great-and-terrible (paragraph split) |
| Rabbinic Judaism | 5: know-the-good, evil, death, after-death, final-end | 2: evil, death |
| Naturalism | 4: after-death, know-the-good, evil, suffering | 2: after-death, know-the-good |
| Buddhist traditions | 4: know-the-good, evil, self-salvation, guilt | 0 |
| Classical Islam | 2: know-the-good, evil | 1: know-the-good |
| Christianity | 2: evil, suffering | 1: offspring-family |

## 6. Flagged answers that earlier batches had already resolved

- **`christianity/self-salvation` and `guilt`.** R1 put satisfaction, propitiation and union with Christ into the visible view: `guilt` paras 2 onward; `self-salvation` para 2 (Calvin III.1.1 on union, the twofold benefit). Nothing is left only in the Deep dive.
- **`christianity/evil`, `suffering`, `death`.** R1 added the cross, the suffering Son and Christ's victory to the visible sections. Only the `evil` and `suffering` ledes still lacked that centre, and both are now revised. The `death` lede ("for believers its sting is removed") already states the gospel claim, and its view para. 3 carries Christ's victory, so it is unchanged.
- **`christianity/what-is-man` and `great-and-terrible`.** R2 rewrote both openings Scripture-first (§11). They were not changed.
- **`judaism/after-death`.** The audit found the resurrection strand "asserted but not shown." The view now quotes Daniel, the Sanhedrin parable and Mishnah Sanhedrin 10:1, and records that Maimonides lists deniers of resurrection among those who forfeit the World to Come (R3 Review B). Only the lede needed to change.
- **Hindu M&E openings.** R3 and R5 gave `evil` and `suffering` the Brahma Sūtra karma answer and the Lord as dispenser in the view. Those openings are no longer "exceptions first", so only their ledes changed.

## 7. Flagged answers deliberately left unchanged

| Answer | Audit note | Reason kept |
|---|---|---|
| hinduism/ultimate-reality | "acceptable; optional" | It gives the shared answer first: Brahman as source, support and end. The one school contrast that follows is brief, and the question cannot be answered truthfully without it. |
| hinduism/one-and-many | disagreement clause | It opens with the shared Vedānta claim (the many traced to one Brahman), then states the three positions directly as names-and-forms, body and eternal difference. That is the "primary positions stated directly" model, not a generic warning. |
| christianity/death | Christ absent from thesis (R3 note) | The thesis's "for believers its sting is removed" is the gospel claim, and the view states it fully in para. 3. Adding more would crowd the 240-character limit for no gain in accuracy. |
| christianity/what-is-man, great-and-terrible | names dominate openings | Resolved by R2 (§11). |
| islam/ultimate-authority, islam/jesus | (brief §23) | R4's detail is ordered as answer, then the sources, then the school differences. It progresses clearly, so nothing was reordered. |

## 8. Flagged answers still requiring correction

None within R6 scope. The dependencies on later research batches are listed in §23.

## 9. Before/after ledger

| Answer | Original lede | Revised lede | Reason | Body support | Opening changed | Qualification retained |
|---|---|---|---|---|---|---|
| buddhism/evil | Evil is unwholesome intention and conduct rooted in greed, hatred and delusion; Buddhist schools differ over how defilement relates to mind and ultimate reality. (24w) | Evil is unwholesome intention and action, such as killing, stealing and lying, rooted in greed, hatred and delusion and harming oneself and others; the schools differ over how such defilement relates to ultimate reality. (34w)  | Concrete examples and harm added; school tail kept, specific | View para 1 (AN 3.69; precepts); DD "School differences remain material" (Dōgen, Tiantai) | no | Yes |
| buddhism/guilt | Wrongdoing calls for recognition, disclosure, restraint and cultivation; karmic purification differs from acquittal, and Pure Land offers a distinct account of release. (22w) | Wrongdoing calls for honest recognition, disclosure to a teacher or companion, restraint, and cultivation that weakens its karmic results. Pure Land adds Amitābha's help at death even for grave offenders. (30w)  | Concrete practices; Pure Land help stated, not just "distinct account" | View paras 1–3 (Rāhula; salt simile; Contemplation Sutra) | no | Body keeps "does not promise automatic erasure" and "not the universal Buddhist account" |
| buddhism/know-the-good | Moral discernment identifies actions rooted in greed, hatred, and delusion by their harms, with reflection, wise guidance, and practice correcting unreliable judgment. (22w) | Actions rooted in greed, hatred and delusion are unwholesome, and those free of them wholesome. Their harm or benefit to oneself and others shows the difference, and reflection, wise counsel and practice train judgment. (34w)  | Leads with the roots of action | View paras 1–2 (roots; Kālāma); "What this explains well" | no | Yes |
| buddhism/self-salvation | Dukkha arises through craving and ignorance; ethical, meditative and wise cultivation leads to release, while Pure Land supplies a materially different reliance on Other Power. (25w) | Suffering (dukkha) arises from craving and ignorance and ends through the Eightfold Path of ethics, meditation and wisdom. Pure Land relies on Amida Buddha's vow, Other Power, for those who cannot free themselves by calculated practice. (36w)  | Path stated plainly; Pure Land Other Power stated as reliance on the vow | View paras 1–4 (Four Truths; Eightfold Path; eighteenth vow; Shinran) | no | Yes: Other Power not reduced to effort (R3) |
| christianity/evil | Evil is the corruption of created good and culpable departure from God’s law; Reformed theology affirms divine government without making God the sinful agent. (24w) | At root, evil is sin: culpable departure from God's law that corrupts good created gifts. God governs even evil, as at the cross, without being its author, and Christ will finally defeat it. (33w)  | Defensive second clause replaced by the R1 centre: decree and wickedness at the cross; final defeat | View paras 1–3 (sin as lawlessness; privation; WCF on decree, not author of sin); reply paras 1 and 3 (Acts 2:23, 4:27–28; Col 2:15; Rev 21:4) | no | Yes: "without being its author" keeps the WCF denial; "at root" keeps moral evil distinct from the miseries that followed |
| christianity/suffering | Suffering belongs to a world disordered by sin and governed by God’s providence; its particular purposes often remain hidden, while believers’ afflictions can become discipline rather than condemnation. (28w) | Suffering belongs to a world disordered by sin yet governed by God. The Son entered it and suffered for sinners, so believers' afflictions can become discipline rather than condemnation, though their particular purposes often stay hidden. (36w)  | Adds the suffering Son (R1) so the thesis carries the Christian centre, not only the caveat | View para 3 (Heb 2, 4, 5; suffered in his human nature; bore our sins); DD "discipline is not condemnation"; reply on hidden judgments | no | Yes: "particular purposes often stay hidden"; "can become" |
| hinduism/after-death | The enduring self passes through further births under karma; liberation ends that bondage, with material disagreement over whether individuality is ultimate. (21w) | At death the self takes another body as its desires and deeds have conditioned it. Liberation ends rebirth: as nondual realization in Advaita, or as the soul's lasting, dependent bliss with the Lord in theistic Vedānta. (36w)  | Rebirth as conditioned continuity, then the two forms of liberation | View paras 1–3 (Gītā; caterpillar; Advaita; Rāmānuja, Madhva non-return) | no | Yes: no unchanged-biography migration; theistic liberation not reduced to nonduality |
| hinduism/death | The body dies while the self endures; rebirth makes mortality part of bondage, but Vedānta schools disagree about the self’s ultimate identity. (22w) | The body dies but the self does not: it passes to another body as desire and action have shaped it. Death therefore belongs to the round of bondage, and the hope is release from rebirth, not mere survival. (38w)  | Positive answer about death and rebirth; school difference left to the view | View paras 1–2 (Gītā; Kaṭha; Bṛhadāraṇyaka; Śaṅkara vs Rāmānuja) | no | Body keeps the school difference on what endures |
| hinduism/evil | Evil is understood through disordered desire, ignorance and karma; schools differ over ultimate selfhood, divine permission and the roots of unequal conditions. (22w) | Evil comes from desire, anger and greed and from an intellect that takes wrong for right. Beneath them lies ignorance, which Advaita traces to confusing the Self with body and mind, and Rāmānuja to karma obscuring a real soul's knowledge. (40w)  | Gītā sources of evil first; the root ignorance stated per school | View paras 1–3 (Gītā; Śaṅkara superimposition; Rāmānuja karma-obscured soul) | no | Yes: karma/inequality answer (R3) unchanged in the body; lede no longer claims it for all schools (Madhva) |
| hinduism/fail-the-good | Desire can veil knowledge and become anger when frustrated: the Gita explains wrongdoing through this conflict, while its interpreters differ over the self and its remedy. (26w) | The Gītā's answer is desire: born of restless passion, it veils knowledge through the senses, mind and understanding and turns to anger when frustrated, so a person can see the right and still be driven against it. (37w)  | States the Gītā's answer as the answer, attributed to the Gītā | View para 1 (Gītā 3.36–43, rajas; Śaṅkara) | no | Yes: Gītā-scoped, not universalized |
| hinduism/final-end | Moksha ends karmic bondage, but Advaita nonduality and the theistic schools’ enduring, dependent individual bliss are materially different final goods. (20w) | The final end is liberation (moksha) from rebirth: for Advaita, realizing that the Self is nondual; for Rāmānuja and Madhva, the liberated soul's lasting, dependent bliss with the Lord. (29w)  | Names the final end, then gives each school's form of it | View paras 1–4 | no | Body keeps Madhva's differing blessedness and unequal destinies |
| hinduism/great-and-terrible | Vedānta locates human greatness in the enduring conscious self and human disorder in desire, karma and ignorance, while its schools disagree sharply over the self's relation to God and whether souls share the same ultimate condition. (36w) | Humans are great because each is a conscious self that longs for the immortal, and terrible because desire, karma and ignorance obscure that self. The schools differ over the self's relation to God and whether all souls share one destiny. (40w)  | Greatness and terribleness stated in the Vedic/Gītā vocabulary; school difference shortened | View (Aitareya Āraṇyaka; Gītā 3.36–40; Śaṅkara; Rāmānuja; Madhva's graded souls) | yes (single paragraph split; no wording change except one connective) | Yes: self–God relation and Madhva's unequal destinies kept |
| hinduism/guilt | Hindu remedies differ: Advaita knowledge removes karma’s binding potency, while theistic Vedānta also speaks of the Lord removing sin and displeasure. (21w) | Wrongdoing binds the self through karma. For Advaita, liberating knowledge removes karma's power to bind; for Rāmānuja, the Lord, approached in knowledge and devotion, removes sin and his own displeasure. (30w)  | Removes "Hindu remedies differ"; states each remedy | View paras 1–3 (karma; Śaṅkara fire of knowledge; Rāmānuja divine displeasure removed) | no | Body keeps prārabdha limit and Rāmānuja's deliberate-sin exclusion |
| hinduism/know-the-good | Discernment of good involves distinguishing duty from desire, with scripture and tradition authorizing dharma and Hindu schools differing over its relation to liberation. (23w) | The good is dharma, known above all from scripture, received tradition and the conduct of the wise. Discerning it means choosing the good over the merely pleasant rather than following desire. (31w)  | Answers with dharma and its sources rather than an abstraction | View paras 1–2 (Gītā 16.23–24; Kaṭha good vs pleasant; Manu II sources) | no | Mīmāṃsā injunction claim and the liberation question remain in the body (view para 2; DD) |
| hinduism/self-deception | Desire can veil understanding, while a distorted intellect can misidentify duty itself; Vedanta interpreters differ over the deeper mistake about the self. (22w) | In the Gītā, desire veils understanding and a darkened intellect can take wrong for right, so a person keeps some knowledge while attachment steers its use. Advaita adds a deeper confusion of the Self with body and mind. (38w)  | Gītā mechanism first; Advaita-specific claim attributed | View para 1 (Gītā 18.31–32, 3.38–40; Śaṅkara) | no | Yes |
| hinduism/self-salvation | Bondage through desire, ignorance and karma is answered by discipline and liberating knowledge or by devotion and divine aid; the schools differ over both the means and the liberated self. (30w) | The human problem is bondage to rebirth through desire, ignorance and karma. The remedy is liberation, reached in Advaita through knowledge of the Self and in theistic Vedānta through devotion, refuge and the Lord's grace. (35w)  | Problem → remedy with both school routes named | View paras 1–4 (bondage; Śaṅkara; Rāmānuja refuge and favor; Madhva grace) | no | Yes: Madhva's unequal destinies remain in the body |
| hinduism/suffering | Suffering is related to embodied attachment and karmic histories, but its meaning differs between Advaita’s account of mistaken self-identification and theistic Vedanta’s real dependent souls. (25w) | Suffering belongs to embodied, changing existence and to the fruits of past deeds, which the Lord dispenses justly rather than arbitrarily. Advaita adds that its root is the Self's mistaken identification with body and mind. (35w)  | Positive account with the Lord as dispenser (R3/R5) first; Advaita difference kept | View para 1 (Gītā; Yoga); para 2 (BS commentaries, Lord as dispenser); "What this explains well" (school significance) | no | Body keeps "does not identify the deed behind any particular person's suffering" |
| hinduism/ultimate-personal | It depends on the school. For Rāmānuja and Madhva the supreme reality is a personal Lord with infinite good qualities; for Advaita the personal Lord is real for worship and experience, but the highest Brahman lies beyond all qualities. (39w) | In theistic Vedānta, yes: for Rāmānuja and Madhva the supreme reality is a personal Lord. Advaita treats that Lord as real for worship and experience, but holds that the highest Brahman lies beyond all qualities. (35w)  | Removes "It depends on the school"; states the theistic answer and the Advaita qualification directly | View paras 2–5 (Advaita saguṇa/nirguṇa; Rāmānuja highest Person; Madhva Viṣṇu) | no | Yes: Advaita contrast kept; "infinite good qualities" dropped because only Rāmānuja's is shown on the page |
| hinduism/what-is-man | A human being is an eternal conscious self embodied in a changing body-mind and reborn under karma; Vedānta's schools disagree on what that self finally is. (26w) | A human being is an eternal conscious self embodied in a changing body-mind and reborn under karma. For Advaita that Self is one consciousness in all bodies; for Rāmānuja and Madhva souls are many, real and dependent on God. (39w)  | Generic "disagree" replaced by the actual contrast | View para 1 (Gītā 2.22; Kaṭha); para 3 (Advaita same Self; Rāmānuja many real souls; Madhva distinct dependent souls) | no | Yes: R5's persistence distinction untouched in the body |
| hinduism/why-alive | The rare human birth is for life's legitimate aims and, beyond them, liberation, which the schools understand as knowledge of the Self or loving union with God. (27w) | The rare human birth is for life's legitimate aims and, beyond them, liberation, which Advaita understands as knowing the Self to be Brahman and Rāmānuja as the soul's dependent enjoyment of God. (32w)  | "loving union" replaced by Rāmānuja's dependent enjoyment so theistic liberation is not read as merger | View para 3 (Śaṅkara: Self is Brahman; Rāmānuja: enjoying the Supreme Person, dependent) | no | Yes |
| hinduism/worship | Worship ranges from a leaf offered with love to meditation on the Imperishable; the schools disagree whether devotion is the soul's eternal relation to God or a step beyond. (29w) | Worship is loving offering to the Lord, from a leaf or a flower to every act of life. Rāmānuja treats such devotion as the soul's highest relation to God; Advaita values it as preparation for liberating knowledge. (37w)  | Ordinary devotion first (Gītā 9.26–27), then the school contrast | View paras 1–3 (Gītā principle; Śaṅkara on knowers of the Imperishable; Rāmānuja devotion) | no | Yes; nothing on arcā/image theology added (R7) |
| islam/evil | Evil occurs within God’s decree while human wrongdoing remains blameworthy; Sunni schools differ over moral knowledge, divine wisdom and the relation between creation and guilt. (25w) | Nothing, good or ill, happens outside God's decree, yet human wrongdoing is truly the wrongdoer's own and blameworthy. Sunni theologians differ over how God's creating of acts and human responsibility fit together. (32w)  | Decree and responsibility as the answer; school list reduced to the actual question | View para 1 (Q 4:78–79 reading); para 3 (al-Ash'ari; Maturidi; Ibn Taymiyya via Hoover) | no | Yes: scoped to Sunni theologians; Mu'tazili denial not claimed |
| islam/know-the-good | The Qur’an presents an innate moral orientation needing guidance, while Islamic schools disagree about what reason can know and what makes obligation binding. (23w) | God creates every person with an innate moral orientation, the fitra, able to sense piety and rebellion within, and revelation guides it. The schools differ over how much reason can know of good and evil without revelation. (37w)  | Leads with fitra and the soul's moral awareness, then the school question | Revised view para 1 (Q 30:30, 91:7–10, 75:2; Bukhari 1385); para 2 (Ash'ari/Mu'tazili/Maturidi) | yes (para 1 states the teaching before the reports) | Yes: the reason/revelation dispute is the second sentence |
| judaism/after-death | Resurrection and accountability are central rabbinic claims, while Jewish accounts differ over how resurrection, the soul and the World to Come relate. (22w) | After death each person faces God's judgment, and the dead will be raised; the Mishnah excludes from the World to Come anyone who denies that resurrection is taught in the Torah. How resurrection, the soul and that World relate is disputed. (41w)  | Judgment and resurrection first, with the Mishnah's weight; disagreement kept as the last clause | View para 1 (Daniel; Sanhedrin parable; Avot reckoning); para 3 (Mishnah Sanhedrin 10:1; Maimonides) | no | Yes: "How resurrection, the soul and that World relate is disputed"; no single timetable claimed |
| judaism/death | Mortality calls for wisdom and accountability, but rabbinic texts differ over its relation to sin and can even describe death as good. (22w) | Death is the appointed limit of a finite life, calling for wisdom, repentance and accountability before God. The sages differ over its tie to sin, and the tradition awaits the resurrection of the dead. (34w)  | Positive account of mortality first; resurrection hope stated | Revised view para 1 (Ps 90; Gen 3:19; Avot 4:22; Mishnah Sanhedrin 10:1); para 2 (Shabbat 55; Gen Rabbah 9:5) | yes | Yes: plural rabbinic voices on sin and death kept |
| judaism/evil | Evil includes harmful wrongdoing and the vulnerabilities of embodied life; rabbinic inclination accounts and Maimonides’ taxonomy explain them in different ways. (21w) | Moral evil is a person's own wrongdoing: the inclination, good in its place, grows into a master when indulged and is governed through Torah and God's help. Calamity comes under the one Creator's rule, not a rival power. (38w)  | Replaces taxonomy with the rabbinic answer: own wrongdoing, created inclination, divine help | Revised view para 1 (Gen Rabbah 9:7; Sukkah 52a–b; Ezek 18:20); para 2 (Isa 45:7; Eccl 7:29); CR (Torah and God's help) | yes (inclination paragraph now first; divine help and Ezekiel added from the page's own citations) | Yes: inclination good in its place vs culpable yielding; no inherited guilt; Maimonides' account kept as distinct |
| judaism/final-end | The final good is life with God in the World to Come; messianic peace serves a larger end, and its relation to resurrection is interpreted differently. (26w) | The final good is life with God in the World to Come. Maimonides, a major but not the only voice, describes it as incorporeal delight in knowing God, beyond the messianic age of peace that serves it. (37w)  | Drops the ambiguous tail; attributes the incorporeal account and the messianic distinction to Maimonides | View paras 1–3 (Avot; Maimonides on World to Come and messianic era) | no | Yes: "a major but not the only voice"; R8 dependency recorded |
| judaism/know-the-good | Moral discernment involves reason and a conscience formed by Torah, with revelation specifying obligations and Jewish interpreters differing over their rational grounding. (22w) | A person knows the good through Torah, which is near, to be understood and done, and through reason, which can grasp duties such as gratitude and avoiding harm; some commandments are known only because God gave them. (37w)  | Leads with Torah and reason; names the revealed-only commandments | View para 1 (Deut 30:11–19 near; Yoma intelligible prohibitions); para 2 (Saadia rational vs traditional duties: gratitude, avoiding injury) | no | Yes: revelation keeps its authoritative role |
| naturalism/after-death | Representative naturalist mortalism treats death as the end of the person; bodily or psychological accounts of identity do not themselves establish an afterlife. (23w) | On the ordinary naturalist view, death ends the person: when the living body stops, no one remains to think or feel. Theories of personal identity differ, but neither bodily nor psychological accounts establish an afterlife. (35w)  | States the ordinary answer directly; removes "Representative naturalist mortalism" | View para 1 (Russell; no continuing observer); paras 2–3 (identity theories; copying is not evidence) | yes (first sentence defines mortalism) | Yes: "On the ordinary naturalist view" scopes it; identity theories still named as differing |
| naturalism/evil | Evil can name extreme human wrongdoing within a natural world; its causes, its moral status and the usefulness of the label remain separate disputes. (24w) | Evil names the gravest harms people inflict, explained by natural motives such as limited sympathy, competition for scarce goods and aggression, not by a supernatural power; naturalists differ over whether its wrongness is objective. (34w)  | Gives a positive naturalist account of evil instead of "can name … separate disputes" | View para 1 (Hume limited generosity, scarcity; Mackie); para 2 (Wrangham); para 3 (Railton vs Mackie) | no | Yes: realism/anti-realism dispute retained |
| naturalism/know-the-good | Social instincts and reflection explain moral cognition, while naturalists disagree whether its judgments discover objective facts or project and construct human values. (22w) | People learn right from wrong through evolved social feelings like sympathy, corrected by reflection, experience and a more impartial view. Realists hold that this can track objective moral facts; anti-realists, that it projects values. (34w)  | Answers how the good is known (feelings corrected by reflection) before the realism dispute | View para 1 (Darwin; Hume general point of view); para 2 (Railton correction through feedback; Mackie projection) | yes (orienting sentence moved to front) | Yes: realism listed first and not reduced to preference; anti-realism kept as an option |
| naturalism/suffering | Suffering arises in vulnerable organisms and social worlds without requiring a providential intention; causal explanation and human responses to harm need not supply an ultimate cosmic purpose. (27w) | Suffering is what vulnerable, sentient creatures undergo through injury, disease, aging and harm done by others. It has natural causes to understand and relieve, but no providential purpose behind it. (30w)  | Positive statement of what suffering is and what naturalism does about it | View paras 1–2 (Philo; aging); "What this explains well" (medicine, sympathy, institutions); DD (no cosmic intention, grounds for relief) | no | Yes: "no providential purpose" matches the view; no claim that suffering is unexplained |

**Lede length.** The 32 revised ledes went from 791 to 1,124 words: an average of 24.7 before and 35.1 after. All are within the schema's 240 characters; the longest is 238. The increase is deliberate. Most old ledes were short because a clause of the form "the schools differ" stood in for content. The revised ones name the actual positions. They remain within the range of the existing corpus: `christianity/revelation` has 39 words, and the pre-R6 `hinduism/ultimate-personal` had 39.

## 10. Source safeguards

- **No new source and no new direct quotation.** Every claim in a revised lede or opening is carried by a citation already on the page.
- **`judaism/evil`.** Two of the page's own claims moved from the Christian response into the view, both with the page's existing citations: divine help (Sukkah 52a–b, the citation R3 Review A checked) and personal responsibility (Ezekiel 18:20). The combined citation "Ecclesiastes 7:29; Ezekiel 18:20" was split into two, one after each claim.
- **`judaism/death`.** The view now cites Avot 4:22 and Mishnah Sanhedrin 10:1. Both were already cited on the page, in the explains-well section and the response. The resurrection sentence repeats the response's own wording.
- **`christianity/offspring-family`.** The new citations are WCF 25.2, already in the Deep dive, and Ephesians 6:4, inside the Deep dive's Ephesians 6:1–4. Neither is quoted.
- **`islam/know-the-good`.** The paraphrases of Q 30:30 and 91:8 are not quotations. They follow Haleem's sense: "natural disposition", "pure faith", and "inspired it [to know] its own rebellion and piety".
- **`hinduism/ultimate-personal`.** The old lede's "with infinite good qualities" covered Madhva too, but the page shows that only for Rāmānuja (Śrī Bhāṣya I.1.2). The revised lede drops the phrase rather than overstate Madhva.

## 11. Christian opening-paragraph findings

- **`what-is-man`: unchanged.** The view opens with Genesis 2:7, Genesis 1:26–28, Psalm 8 and Acts 17. It then covers:
  - unity of body and soul, from Ecclesiastes 12:7, Matthew 10:28 and WCF 4.2;
  - the incomplete intermediate state (WCF 32.1);
  - the image in knowledge, righteousness and holiness.

  Calvin and Bavinck enter only in para. 3, as attributed formulations, and Bavinck's "is the image" is the source-checked one. Turretin's broader/narrower distinction remains in the Deep dive, where R2 placed it; in the view Turretin V.10 is cited but not named. Nothing here reads as a theologian tour.
- **`great-and-terrible`: unchanged.** The opening is a biblical narrative in six movements: creation and image (Gen 2:7; 1:26–28; Ps 8), the Fall and Adam as covenant head (Gen 3; Rom 5:12–19), corruption (Jer 17:9; Rom 3; Eph 2), continued image-bearing and common grace (Gen 9:6; Jas 3:9; Matt 5:45; Acts 14:17), then renewal. WCF, Augustine and Calvin confirm the doctrine rather than lead it. The external philosophical objections to federal representation remain in the objection and reply. No nonhistorical-Adam material was added.
- **`offspring-family`: opening para. 2 rewritten.** Para. 1 was already Scripture-first, but para. 2 ran "Calvin holds… Bavinck treats… Westminster names…". It now explains the doctrine and lets the sources confirm it. First, marriage's three ends (WCF 24.2). Second, procreation within marriage without being its only point. Third, children within the visible church and the household as the first school of faith (WCF 25.2; Eph 6:4). Then singleness and continence as a gift (Calvin II.8.41–42), and finally the generational image (Bavinck, attributed). All four sources are kept, and no new historical theology was added. The Christian count of name-led main sentences in `INVENTORY.md` fell from 74 to 72.
- **Gospel centre.** `self-salvation`, `guilt`, `evil`, `suffering` and `death` were each checked. In every one, satisfaction, propitiation, union with Christ, Christ's suffering according to his human nature, the cross as decree-and-wickedness, and Christ's victory over death are visible, not deferred to the Deep dive. None of them was moved.

## 12. Hindu school-distinction findings

- **No universal Hindu creed was introduced.** Every revised Hindu lede does one of three things:
  - attributes its main claim to a shared text, such as the Gītā in `fail-the-good` and `self-deception`;
  - states a shared Vedānta concept, such as dharma, bondage, karma, rebirth or liberation;
  - gives the school contrast directly, as in `ultimate-personal`, `what-is-man`, `why-alive`, `worship`, `self-salvation`, `guilt`, `after-death` and `final-end`.
- **Advaita is never made to stand for Hinduism.** Every Advaita-specific claim is labelled: the Self as one consciousness, superimposition, liberation as nondual realization, and devotion as preparation for knowledge.
- **Theistic liberation is never reduced to nonduality.** `after-death`, `final-end` and `why-alive` describe it as the soul's lasting, dependent bliss or enjoyment of God. `why-alive`'s old phrase "loving union with God" was changed because it could be read as merger.
- **Madhva.** `great-and-terrible` keeps the question "whether all souls share one destiny". The new `evil` lede no longer says the schools agree on the karma answer to inequality. R3 Review A limited that agreement to Śaṅkara and Rāmānuja because of Madhva, and the body still gives the full answer.
- **R3/R5 karma corrections preserved.** `suffering` now leads with the Lord dispensing fruits "justly rather than arbitrarily", which is the Brahma Sūtra answer. It is not described as an impersonal mechanism. The body's limit, that the theory does not name the deed behind any particular suffering, is unchanged.
- **The `worship` lede draws only on the Gītā material already on the page** (9.26–27; 12.1–5). No *arcā*, Āgama or Śaiva claim was added.
- **First-paragraph review of all 28.** The UR, KT, Man, Revelation & History, `order`, `something-rather-than-nothing`, `love-beauty-creativity` and `offspring-family` openings already state the positive claim before naming schools. In the M&E and S&D openings, the first paragraph now gives the shared text or concept and the second the school difference. `great-and-terrible` was the one dense single paragraph; it is now split at the point where the schools begin.

## 13. Jewish eschatological qualification

- **`after-death`.** The new lede leads with judgment and resurrection, and gives the Mishnah's exclusion of those who deny that resurrection is taught in the Torah. It ends with the qualification the body requires: "How resurrection, the soul and that World relate is disputed."
- **`final-end`.** The new lede attributes the incorporeal account and the messianic-age distinction to Maimonides, as "a major but not the only voice". It does not assert a resurrection-centred alternative that the body cannot yet support.
- **`death`.** The lede and the view now state the hope of resurrection from Mishnah Sanhedrin 10:1, which the response already cited. Nothing more is claimed.
- **R8 dependency.** A fuller resurrection-centred lede for `final-end` and `after-death` would need the Saadia VII, Ramban *Sha'ar ha-Gemul* and Thirteen Principles material scheduled for R8.

## 14. Islamic school-distinction safeguards

- **`evil`** is scoped to "Sunni theologians" and does not claim a Mu'tazili view. The view's al-Ash'ari, Maturidi and Ibn Taymiyya (via Hoover) paragraph is unchanged.
- **`know-the-good`** keeps the Ash'ari, Mu'tazili and Maturidi paragraph intact as the second paragraph.
- **No R4 page was edited:** `jesus`, `revelation`, `ultimate-authority`, `history` and `after-death`. Their *taḥrīf*, *Risāla*, Twelver, grave and *iʿjāz* material is untouched.

## 15. Buddhist and naturalist clarity results

**Buddhist traditions**
- `know-the-good` and `guilt` now lead with the roots of action and with concrete practices: recognition, disclosure, restraint and cultivation.
- `evil` gives examples and the harm done to self and others. The school clause is kept, because Dōgen and Tiantai are material in the Deep dive.
- `self-salvation` keeps Pure Land Other Power as reliance on Amida's vow for those who cannot free themselves by calculated practice. It is not reduced to self-effort.
- No Theravāda claim is universalized, and no Pure Land claim is made central where it was not already.

**Naturalism**
- `after-death` states the ordinary answer first ("On the ordinary naturalist view, death ends the person"). The body defines "mortalism" in its first sentence. Identity theories are named as differing, and no claim is made that naturalism entails one metaphysics of death.
- `know-the-good` answers how the good is known: evolved social feelings corrected by reflection, experience and impartiality.
  - Realism is listed first, as a view that can track objective moral facts. Anti-realism is listed second.
  - The Railton fairness corrections (R2) are untouched, and the body's "one naturalist option among others" is kept.
- `evil` and `suffering` now give positive naturalist accounts instead of abstractions built on negations.

## 16. Body-to-lede consistency

For each of the 32 revised ledes:
- every substantive assertion was matched to a passage on the same page (the "Body support" column of §9);
- the school scope was checked;
- the lede was read together with its first paragraph.

Two drafts were corrected during this check, before commit:
- `hinduism/evil` no longer attributes the karma answer to inequality to all schools;
- `hinduism/ultimate-personal` no longer attributes "infinite good qualities" to Madhva.

The final 168 sweep found no lede that introduces a claim its body does not support.

## 17. Horizontal (by question)

For each question with a revised lede, all six lanes were read together:

| Question | Result |
|---|---|
| `know-the-good` | All six now give a direct answer: conscience corrected by Scripture; social feeling corrected by reflection; Torah and reason; *fitra* and revelation; dharma from scripture and tradition; the roots of action. |
| `evil` | All six say what evil is and where it comes from. Christianity's lede is no longer the only one that sounds defensive. |
| `suffering` | All six are concrete. The Christian lede now carries its centre (the suffering Son), as the others carry theirs (karma and the Lord; dukkha; natural vulnerability; plural Jewish accounts; decree and testing). |
| `death`, `after-death`, `final-end` | Every lane names its hope or its denial of one. Jewish plurality and Hindu school plurality are kept in a final clause, not opened with. |
| `self-salvation`, `guilt` | Problem → remedy throughout. Christian (satisfaction), Hindu (knowledge / the Lord), Buddhist (path / Other Power), Jewish (*teshuvah*), Islamic (*tawba* and victims' rights) and naturalist (repair) are all stated in their own vocabulary. |

No lane now has a vague thesis while another has a concrete one. The structures still differ, as they should.

## 18. Vertical (by lane)

- **Hindu.** The 15 revised ledes were read together with the 13 unchanged ones. Terminology is consistent:
  - Advaita: the Self as one consciousness; confusion of Self with body and mind; nondual realization; devotion as preparation.
  - Rāmānuja: real, many, dependent souls; the Lord's favor, refuge and dependent enjoyment.
  - Madhva: distinct dependent souls and unequal destinies.
  - "Theistic Vedānta" consistently names Rāmānuja and Madhva together.

  No lede contradicts another.
- **Judaism.** The inclination appears in `evil`, as good in its place, governed with Torah and God's help, and with no inherited guilt. This matches the unchanged `great-and-terrible`, `fail-the-good` and `self-deception`. Resurrection and the World to Come agree across `death`, `after-death`, `final-end` and the unchanged `history`.
- **Islam, Buddhist traditions, naturalism, Christianity.** No terminology conflicts.

## 19. Citations and source changes

- New citation instances: 5, all to sources and passages already on the same page.
  - `judaism/evil`: Ecclesiastes and Ezekiel split.
  - `judaism/death`: Avot 4:22 and Sanhedrin 10:1.
  - `christianity/offspring-family`: WCF 25.2 and Ephesians 6:4.
- The inventory total rose from 2,736 to 2,741. No registry change and no orphaned citation.

## 20. ESV ledger

No ESV quotation was added or changed, and `ESV-QUOTATION-LEDGER.md` is unchanged. `esv-candidates.json` was regenerated byte-identical.

## 21. Word counts

Body words (frontmatter, Cite and QuestionLink tags stripped; the R2 method): **131,133 → 131,323 (+190)**.

| Answer | Before | After | Δ |
|---|---|---|---|
| judaism/evil | 1,026 | 1,080 | +54 |
| judaism/death | 586 | 636 | +50 |
| christianity/offspring-family | 474 | 521 | +47 |
| islam/know-the-good | 584 | 613 | +29 |
| hinduism/great-and-terrible | 1,117 | 1,126 | +9 |
| naturalism/after-death | 703 | 704 | +1 |
| naturalism/know-the-good | 801 | 801 | 0 (sentence moved) |

Revised ledes: 791 → 1,124 words (§9). On the inventory-script measure, which excludes headings and frontmatter, the corpus went from 129,801 to 129,991 words.

## 22. Validation

| Check | Result |
|---|---|
| `npm run validate` | pass: 6 worldviews, 28 questions, 211 sources, **168 answers** |
| `npm run check` | 0 errors, 0 warnings (1 pre-existing hint) |
| `npm run build` | 92 pages built |
| `git diff --check` | clean |
| `node scripts/audit-inventory.mjs` | 168 answers, 2,741 citations; ESV candidates, unledgered and orphan counts unchanged from main |
| `node scripts/check-built-links.mjs` | 9,813 links: **4,000 cross-page**, 8,082 fragment and anchor checks, **0 broken, 0 duplicate IDs** |

The link checker examines both cross-page links and in-page fragments. The 4,000 cross-page count shows that the MSYS path bug found in the R4 review is not affecting this run.

**Final 168-lede sweep.**
- No lede opens with "It depends", "Different interpreters…", "Several traditions…", "Representative…" or "The schools differ".
- 23 ledes still mention disagreement. Each does so only after a positive answer, and in each the contrast is substantive.
- Unexplained technical terms: none. *fitra*, *dukkha*, moksha and Other Power are glossed or stated in plain words, and Advaita and Vedānta are names used throughout the lane.

**Residual items** (none of them an R6 defect):
- `hinduism/love-beauty-creativity`: "splendour" follows Sastri's quoted wording; aesthetics is R7.
- `judaism/offspring-family`: the tail "though the sages record disputes and an exception" is a mild caveat that names something real; left as is.
- `naturalism/what-is-man`: the consciousness gap is R9.

## 23. Deferred R7–R12 dependencies

- **R7 (Hindu):**
  - `worship` needs *arcā*/Āgama image theology and Śaiva devotion before its lede can mention them;
  - `final-end` and `ultimate-personal` need the Bhāgavata/Gauḍīya strand;
  - `love-beauty-creativity` needs rasa.
- **R8 (Judaism):** `after-death` and `final-end` need Saadia VII, Ramban and the Thirteen Principles before a resurrection-centred final end can be put alongside Maimonides in the thesis.
- **R9 (naturalism):** consciousness in `what-is-man`.
- **R10:** `christianity/offspring-family`'s reply still calls `what-is-man` "the human-nature anchor" (CHR minor), and the "honours" spellings in pre-R6 prose remain. Neither was touched.
- **R11 (Buddhist):** Huayan in `one-and-many`.
- **R12:**
  - duplicate pressure questions;
  - 20 answers with three questions (release pass).

## 24. Recommendation

A fresh top-level Claude Opus 5.5 session without subagents should independently review this PR against the `c6d7e54` baseline. The review covers:
- the 32 revised ledes and 7 revised openings;
- thesis-to-body consistency;
- Hindu school distinctions;
- Jewish eschatological qualification;
- Sunni and Twelver scope;
- Buddhist diversity;
- naturalist moral realism;
- preservation of R1–R5.

R6 has not been merged. R7–R12 were not begun.
