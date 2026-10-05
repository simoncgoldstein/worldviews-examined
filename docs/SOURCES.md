# Source and Thinker Strategy

## Core rule

Each worldview should be represented from its **best primary sources and strongest relevant thinkers**, not from hostile summaries. The thinker list is a research map, not a claim that every figure represents every adherent.

Every deep dive should identify the school being represented when internal diversity matters.

## Source priority

1. Primary/canonical texts
2. Foundational confessions, creeds, sutras, commentaries, or legal/theological works internal to the tradition
3. Major historical thinkers within the tradition
4. Major modern representatives within the tradition
5. High-quality academic scholarship for historical, textual, demographic, or comparative claims
6. Christian critical literature for the **Christian response**, not as the sole source for the steelman

For naturalistic atheism, which has no canon, prefer serious philosophical proponents and peer-level debates rather than popular polemicists alone.

## Thinker roles

Every thinker in the registry (`src/content/thinkers/thinkers.yaml`) has a role:

- **Primary**: a major thinker regularly used to represent a significant strand of the worldview.
- **Specialist**: used primarily for particular subjects, such as ethics, epistemology, mystical theology, affections or philosophy of mind.
- **Interlocutor**: historically or philosophically important to the comparison but not presented as a representative of the site's worldview lane.

Worldviews need not have the same number of primary thinkers. Thinkers within a lane do not necessarily agree with one another.

Thinkers are listed below in their explicit `displayOrder`, not alphabetically. The Reformed primary sequence (Augustine, Calvin, Turretin, Witsius, Bavinck, Vos, Van Til, Bahnsen) deliberately shows an intellectual and historical trajectory. Each thinker page is meant to carry a short biography, a statement of why the thinker matters to this site, key ideas, representative works and the questions where the thinker appears; these are written when a thinker is first substantively used.

## Source verification

Sources in the registry carry `verificationStatus`: `unverified` (seed bibliography) or `checked` (title, author/editor/translator, edition, publication details, locator conventions and URL verified against the actual edition, with `verifiedOn`). Outline, draft and researched answers may cite unverified sources; **reviewed and complete answers may cite only checked sources**. Verification is done source by source as research reaches reviewed or complete status, not in bulk; a source is marked `checked` only after its author/editor, title, edition and publication data, URL and locator convention have actually been verified.

### Verification protocol

A source is marked `checked` only when all of the following hold, and its `notes` record in one line how verification was done:

1. **Bibliographic metadata** (author, title, translator/editor, edition, place, publisher, year) was confirmed against the edition itself, the publisher's record, or a library catalog record.
2. **URL**, if given, resolves to that work.
3. **Locator convention** is confirmed (book.chapter.section, surah:ayah, sutta number, tractate and folio, Upanishad section, or that edition's page numbers).
4. **Every cited passage** was read and supports the specific claim it is attached to: in the cited edition, or, where that edition is not openly accessible, in an accessible text sharing the same canonical locator system (Bible verse, Qur'an ayah, Talmud folio, sutta and verse, Institutes book.chapter.section, Upanishad section). In the second case the translation is not quoted verbatim and its pagination is not cited.

Page-number locators require access to that edition's pagination. Prefer editions whose text readers can open; an accessible edition that can be checked is better for this site than a prestigious one that cannot. Research dossiers for each question (under `research/questions/`) keep the claim-to-citation record behind each answer.

## Citation expectations

Store sources in a structured registry with stable IDs. A citation should record, where applicable:

- author / corporate author;
- work;
- edition or translator;
- publication year;
- section, chapter, surah/ayah, tractate, sutta, verse, or page locator;
- URL or DOI for web-accessible scholarly sources;
- source type;
- worldview/tradition tags.

Quotations should be checked against the cited edition. Avoid unattributed quote collections.

## Source priorities for production

These priorities govern Phase 4 onward, alongside the production policy in `docs/METHODOLOGY.md`. In every lane, represent the prominent position first and surface internal differences only where they materially change the answer. Before seeking a source, check `research/PHASE-4-REUSE-MAP.md` for the verified works and locators already established.

- **Reformed Christianity.**
  1. Scripture.
  2. The Westminster Standards: the Confession, Larger Catechism and Shorter Catechism. Westminster is the primary confessional standard for this lane, not one source among many.
  3. Other major Reformed standards where useful: the Heidelberg Catechism, Belgic Confession and Canons of Dort. These are not yet in the registry; register and verify them when first used.
  4. Augustine and Calvin.
  5. Other major Reformed primary voices where the question warrants: Turretin, Witsius, Bavinck, Vos, Owen, Edwards, Van Til, Bahnsen, and others in the registry.
- **Rabbinic Judaism.** Tanakh; major rabbinic sources; representative major thinkers in the registry; strong internal Jewish or academic scholarship where interpretation requires it.
- **Classical Islam.**
  - Qur'an; sound hadith where relevant; major Sunni theological sources.
  - Al-Ghazali as a major synthesizing voice where appropriate.
  - Ash'ari, Maturidi and Ibn Taymiyya distinctions only where they materially affect the question.
  - Philosophical or mystical strands (Ibn Sina, Ibn Arabi) only where actually relevant.
- **Hindu traditions.**
  - Do not represent every school on every question. Give a broad account from the prominent traditions.
  - Use Vedānta as the principal centre of gravity for broad worldview questions: Advaita (Śaṅkara), Viśiṣṭādvaita (Rāmānuja) and Dvaita (Madhva).
  - Bring in Nyāya, Mīmāṃsā, Yoga or other schools when the question materially requires them.
- **Buddhist traditions.**
  - Do not survey every school on every question.
  - Begin with broadly shared concepts where appropriate: the Four Noble Truths, dependent origination, impermanence, no-self, karma, craving, ignorance and liberation.
  - Then use traditions selectively:
    - early Buddhism and Theravāda as a baseline;
    - Madhyamaka where metaphysics matters;
    - Yogācāra where mind and cognition matter;
    - Dharmakīrti and Buddhist epistemology where knowledge and reason matter;
    - Mahāyāna, Zen, Pure Land and others when the question genuinely requires them.
- **Naturalism.** There is no canon or confession. Organize sources around the strongest representative explanation for the question, using thinkers and specialists by problem area rather than citing the same roster every time.

---

# Reformed Christianity

## Primary and confessional sources

- Old and New Testaments
- Nicene Creed
- Definition of Chalcedon
- Westminster Confession of Faith
- Westminster Larger Catechism
- Westminster Shorter Catechism

## Major thinkers

### Primary

- Augustine of Hippo (a primary Christian antecedent: will, grace, evil, history, soteriology)
- John Calvin
- Francis Turretin
- Herman Witsius
- Herman Bavinck
- Geerhardus Vos
- Cornelius Van Til
- Greg L. Bahnsen

### Specialists

- Jonathan Edwards: affections, will, beauty, desire and religious experience
- John Owen: sin, mortification, the Holy Spirit, atonement, communion with God and Christology

### Christian interlocutors

- Thomas Aquinas
- Athanasius of Alexandria
- Anselm of Canterbury

These are important Christian thinkers but are **not** representatives of the site's specifically Reformed apologetic method. Aquinas in particular must be clearly distinguished from Van Tilian method.

## Research roles

- **Augustine**: will, grace, evil, the two cities, history and the structure of Christian anthropology that Reformed theology inherits.
- **Calvin**: knowledge of God, sensus divinitatis, image of God, fall, common grace themes, providence.
- **Turretin**: scholastic precision on theology proper, providence, freedom, knowledge, and polemics.
- **Witsius**: covenant theology.
- **Bavinck**: revelation, worldview integration, religion, anthropology, modernity.
- **Van Til**: Creator-creature distinction, analogical knowledge, no brute facts, transcendental method, antithesis/common grace.
- **Bahnsen**: accessible transcendental apologetic method, internal critique, ethics and worldview argument.

Use Scripture and the Reformed confessions as doctrinal norms; later theologians interpret and develop rather than replace them.

---

# Naturalistic atheism

There is no single atheist creed. The site should distinguish metaphysical naturalism, epistemology, ethics, philosophy of mind, and evolutionary explanation rather than treating "atheism" as one detailed positive doctrine.

## Representative thinkers

### Primary

- David Hume, as a major historical critic of natural theology, causation and induction
- Bertrand Russell
- J. L. Mackie
- Daniel Dennett
- Graham Oppy

### Specialists

- Peter Railton, especially for naturalistic moral realism
- W. V. O. Quine, for naturalized epistemology and ontology
- Alex Rosenberg, as a particularly rigorous reductive naturalist
- Charles Darwin, for the evolutionary origins of the moral sense (added in Phase 3; Darwin called himself an agnostic and is used for evolutionary anthropology, not as a representative of atheism)
- Philip Kitcher, for pragmatic naturalist ethics and the evolution of ethics (added in Phase 3)

## Use with care

- Richard Dawkins and Christopher Hitchens are relevant popular representatives but should not carry the philosophical steelman.
- Moral nihilism must not be attributed to all naturalists. Some defend naturalistic or non-theistic moral realism.
- Physicalism about mind must not be assumed when the specific argument concerns a broader atheist position unless the entry explicitly scopes itself to physicalist naturalism.

---

# Rabbinic Judaism

The category should principally represent post-Second-Temple rabbinic Judaism and should distinguish Orthodox, Conservative, Reform, and other modern streams when the question materially differs.

## Primary / foundational sources

- Hebrew Bible / Tanakh
- Mishnah
- Babylonian Talmud and Jerusalem Talmud where relevant
- Midrashic material where relevant

## Major thinkers

### Primary

- Saadia Gaon
- Judah Halevi
- Moses Maimonides
- Nachmanides
- Joseph B. Soloveitchik

## Research cautions

- Do not describe Old Testament religion as though it were simply identical with later rabbinic Judaism.
- Do not assume all modern Jewish thinkers share Orthodox commitments.
- Christian critique should carefully distinguish historical claims about Second Temple Judaism, later rabbinic development, and specifically Christian claims of fulfillment in Christ.

---

# Classical Islam

The default steelman should usually begin with mainstream Sunni Islam while noting Ash'ari, Maturidi, Athari, philosophical, Sufi, and Shi'a differences where they materially affect the issue.

## Primary / foundational sources

- Qur'an
- Major hadith collections, especially Sahih al-Bukhari and Sahih Muslim, when hadith is necessary to the claim
- Classical creedal/theological texts relevant to the school being represented

## Major thinkers

### Primary

- Abu al-Hasan al-Ash'ari
- Abu Mansur al-Maturidi
- Avicenna (Ibn Sina)
- al-Ghazali
- Fakhr al-Din al-Razi
- Ibn Taymiyya

### Specialist

- Ibn Arabi, for mystical theology and Sufi metaphysics

Identify philosophical (Avicenna), kalam (Ash'ari, Maturidi, al-Ghazali, al-Razi), traditionalist (Ibn Taymiyya) and mystical (Ibn Arabi) differences where they matter.

## Research cautions

- Do not collapse Ash'ari and Athari accounts of divine attributes, causation, or reason into one view.
- Do not treat medieval Islamic philosophy as simply identical with orthodox kalam.
- On Christ, revelation, and Scripture, distinguish the Qur'anic claims from later Muslim harmonizations and apologetic arguments.

---

# Hindu traditions

"Hinduism" is an umbrella category. The site must identify which school supplies the answer when schools substantially diverge.

## Primary / foundational sources

- Principal Upanishads
- Bhagavad Gita
- Brahma Sutras
- Bhagavata Purana and other devotional texts when relevant to bhakti traditions

## Major thinkers / schools

### Primary

- Shankara, Advaita Vedanta
- Ramanuja, Vishishtadvaita Vedanta
- Madhva, Dvaita Vedanta
- Udayana, Nyaya: the realist and natural-theological tradition
- Kumarila Bhatta, Mimamsa: Vedic authority, language and epistemology

### Specialist

- Abhinavagupta, Kashmir Shaivism: nondual Shaiva philosophy, aesthetics and consciousness

The roster deliberately extends beyond Vedanta. Major Vaishnava/bhakti traditions remain relevant where a question is relational or devotional.

## Research cautions

- Never present Advaita's nondual metaphysics as the only Hindu view.
- Questions about ultimate personality, self, liberation, evil, and devotion may receive sharply different answers in Advaita and Dvaita traditions.
- Karma and samsara are widespread concepts, but their metaphysical interpretation varies.

---

# Buddhist traditions

The site should distinguish Theravada, Mahayana, and Vajrayana where differences matter while identifying broadly shared concepts carefully.

## Primary / foundational sources

- Pali Canon / Nikayas for early Buddhist and Theravada material
- major Mahayana sutras where relevant
- tradition-specific canonical material when making tradition-specific claims

## Major thinkers

### Primary

- Buddhaghosa
- Nagarjuna
- Vasubandhu
- Dharmakirti: Buddhist logic and epistemology, essential to the Knowledge & Truth domain
- Tsongkhapa

### Specialists

- Shantideva, for ethics and the bodhisattva path
- Dogen, for Zen practice, time and enlightenment

## Research cautions

- Do not reduce Buddhism to "life is suffering."
- Distinguish dukkha, impermanence, dependent origination, no-self, karma, rebirth, nirvana, emptiness, and Buddha-nature carefully.
- Do not assume all Buddhist schools describe nirvana, consciousness, or ultimate reality in the same terms.

---

# Christian response sources

The Christian critique should normally draw from:

- Scripture;
- Westminster Standards;
- Calvin, Turretin, Bavinck, Vos;
- Van Til and Bahnsen for apologetic/epistemological issues;
- high-quality historical and textual scholarship when the dispute is empirical rather than purely theological.

The site should clearly distinguish:

- **what another worldview says**;
- **what historians/textual scholars establish**;
- **what the Christian concludes from those facts**.
