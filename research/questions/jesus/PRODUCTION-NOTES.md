# `jesus` production record

Anchor question: **Who is Jesus Christ, and what follows if the central historical claims about Him are true?** Produced
2026-10-07 from the frozen Revelation & History dossier, starting every lane from the shared packet
`research/domains/revelation-history/jesus-evidence.md`. Single Opus 5.5 session; "reviewed" means **self-reviewed by
the production run**; no subagents, no independent reviewer. Counting conventions as in
[`revelation`](../revelation/PRODUCTION-NOTES.md).

| Lane | Thesis | Chars | Visible | Deep dive | Citations | Uses |
|---|---:|---:|---:|---:|---:|---:|
| christianity | 36 | 193 | 619 | 665 | 34 | 39 |
| naturalism | 33 | 223 | 580 | 346 | 19 | 23 |
| judaism | 26 | 142 | 566 | 418 | 13 | 18 |
| islam | 39 | 208 | 602 | 402 | 17 | 23 |
| hinduism | 38 | 226 | 508 | 180 | 14 | 17 |
| buddhism | 33 | 230 | 527 | 234 | 10 | 12 |

Total 5,852 words, the longest question on the site, as the brief allowed. Visible prose is 508–619 (guide 425–575):
the Christian lane carries the claim, the historical case, the strongest critical explanation and a comparative reply;
the Islamic lane carries the Qur'anic text, three commentators and the historical comparison. The Hindu and Buddhist
Deep dives are deliberately short (180, 234): those traditions have no ancient Jesus doctrine and nothing was
manufactured for symmetry.

## The four levels

Every lane separates (1) what a source says, (2) what it establishes historically, (3) which explanation best accounts
for it and (4) what follows theologically. Examples:
- (1) "Paul passes on a tradition he had 'received'... appeared to Cephas..." → (2) "Several of his followers, and
  Paul, had experiences they understood as appearances of the risen Jesus." → (3) bodily resurrection (Christian) vs
  visions, interpretation and legend (Ehrman) → (4) "history alone does not produce the Christian confession".
- Islam: the Qur'an's words (1) are kept apart from the tafsir stories (later interpretation), from the first-century
  record (2) and from the Muslim reason for preference (revelation).
- Judaism: Maimonides' "executed by the court" and Sanhedrin 43a are labelled later rabbinic tradition, not first-century
  evidence.

## Six-column fact audit (mandatory)

Canonical wording, used verbatim wherever a lane states the fact (checked by script, `grep -F`, after the consistency
pass):

| Fact | Canonical sentence | Chr | Nat | Jud | Isl | Hin | Bud |
|---|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Existence | As the critical historian Dale Martin puts it, "reputable historical scholars all admit that Jesus of Nazareth existed." | ✓ | ✓ | – | – | – | – |
| Crucifixion | He was crucified under Pontius Pilate, as Paul, the Gospels and the Roman historian Tacitus attest. | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Early proclamation | Within a few years of his death his followers were proclaiming that God had raised him. | ✓ | ✓ | – | – | – | ✓ |
| Appearances | Several of his followers, and Paul, had experiences they understood as appearances of the risen Jesus. | ✓ | ✓ | – | – | – | – |
| Paul | Source-level: the received tradition (1 Cor 15:3–8) and his meeting with Cephas and James (Gal 1:18–19). | ✓ | ✓ | – | ✓ | – | – |
| James | "whose family, the Gospels report, had not followed Jesus in his lifetime" (attributed, with EJ); James's leadership; Josephus' notice (Christian Deep dive). | ✓ | ✓ | – | ✓ | – | – |
| Burial | Paul's tradition says he "was buried"; the details of the burial are debated. | ✓ | ✓ | – | – | – | – |
| Empty tomb | Whether his tomb was found empty is genuinely debated. | ✓ | ✓ | – | – | – | – |
| Early Christology | Within about two decades Jewish followers were praying to Jesus and calling him Lord alongside the one God. | ✓ | ✓ | ✓ | – | ✓ | ✓ |

– means the lane does not state that fact, not that it states it differently. No lane describes any of these facts in
different words. Fixes made by the audit: the Christian objection's "The empty tomb is disputed" and naturalism's "The
empty tomb is treated as uncertain" were replaced by the canonical sentence; the canonical appearance sentence was added
to the Christian view; naturalism's "two people who had not been followers: Paul... and James" (which stated a disputed
inference as fact) was replaced by the attributed Gospel report.

## Historical claims used, and their status

- **Stated as established (with source):** existence (Martin L13 ch. 2, attributed); crucifixion under Pilate (Paul,
  the Gospels, Tacitus 15.44; EJ "Jesus"); early resurrection proclamation (1 Cor 15:3–8); appearance experiences, Paul's
  included; Paul's meetings with Cephas and James (Gal 1:18–19); James's execution (Josephus XX.9.1, which the EJ treats
  as genuine); worship within two decades (Hurtado, attributed).
- **Presented as debated:** burial details; the empty tomb (Craig vs Lowder vs Ehrman, with Habermas's survey attributed
  to "a Christian scholar"); the dating of the 1 Cor 15 tradition ("an inference from Paul's chronology", Craig's
  "within the first five years" attributed); the origin of resurrection language (Ehrman vs Hurtado); how "high" early
  Christology was ("does not show that the later creeds' formulations were already in place").
- **Presented as explanatory inference or theology:** bodily resurrection; divine identity.
- **Not used:** consensus percentages (Habermas's 75%/25% was read and deliberately omitted); "all historians agree";
  "the disciples died for what they knew was true"; "500 eyewitnesses were interviewed"; women's testimony as proof.

## Chronology wording

- Paul: "writing in the 50s"; 1 Thessalonians "about 50"; Mark "about 70, some forty years after the crucifixion" (Martin
  L2); "within about twenty-five years" for Paul relative to the events (Islam, Judaism `revelation`).
- Gospels: Ehrman's "30, 40, 50, 60 years later" and "35 or 40 years after the fact" for Mark, attributed.
- Tacitus: "writing in the early second century" (no exact year printed). Pliny not used publicly.
- Luke and John: no dates printed.
- Josephus: no date printed in prose (the work's 93/94 self-dating is in the registry).
- Talmud: "centuries later"; no redaction date printed. Qur'an: "some six centuries later".

## Josephus and Tacitus

- *Antiquities* 18 (Testimonium) is never quoted: "reworked by Christian hands; scholars debate whether it was altered or
  wholly interpolated" (Posen).
- *Antiquities* 20.200: the dossier flagged that no read source assessed its authenticity. **Narrow check:** the
  Encyclopaedia Judaica article "Jesus" (Gale 2007, via Jewish Virtual Library; author not given) treats it as Josephus'
  narrative of James's martyrdom while calling 18.63–64 rewritten or interpolated. Registered as `ej-jesus`; the
  Christian Deep dive says only that "the Encyclopaedia Judaica treats it as Josephus' own", not that it is "secure".
- Tacitus is cited for the execution under Pilate and the movement's spread, explicitly "not the resurrection".

## Qur'an 4:157 and the tafsir

- Haleem's wording quoted; the Arabic phrase *wa-lākin shubbiha lahum* given; "does not say how or name anyone else".
- Al-Tabari (reports 10779–10792): the substitution stories and his preference for Wahb's all-in-the-house version,
  with his reason, read in the Arabic and paraphrased. Ibn Kathir: the volunteer youth; those in the house saw the
  ascension; God clarified the matter in the Qur'an. The two commentators' disagreement about the companions is stated.
- Al-Razi: the sophistry/*tawātur* objection (p. 1), the kalām answer and the "few people who could have agreed on a lie"
  (p. 2, our translation), four variants "mutually conflicting... God knows best".
- Minority readings (Fatoohi): Ismaʿili exception, Sayyid Ahmad Khan, ʿAbduh, Shaltut, Fatoohi's own view; 3:55 and 5:117
  as their lexical basis.
- Historical comparison in the brief's terms: "Within Islam its revelation is sufficient reason to correct earlier
  testimony. Historically, however, it does not supply an identifiable earlier source that overturns the first-century
  and early second-century evidence." **Deliberate restraint:** the dossier's sentence "no ancient source before the Qur'an
  denies that Jesus was executed" was not used, because second-century docetic teachers (not researched) are a known
  exception; the comparison is limited to first- and early-second-century evidence.

## Jewish later evidence

Sanhedrin 43a is described with its herald, Ulla's "close ties with the government" and the five disciples, judged
legendary by the Jewish Encyclopedia (1906, attributed), and "both its identification and date are debated". The
*Toledot Yeshu* is "later polemical folklore". Nachmanides' *Vikuach* is paraphrased only, with the base-edition caveat
in the prose; the EJ "Barcelona" entry supplies setting, Christiani's three theses and the aggadah debate. Saadia VIII.9
was rechecked in the Hebrew. The Christian response is interpretive (two stages; Heb 9:28) and does not become a
prophecy catalogue; Isaiah 53 is one sentence (Rashi).

## Hindu and Buddhist receptions

All six voices are attributed and dated; none is "the Hindu view" or "the Buddhist view". Roy (1820/1823), Vivekananda
(1900), Gandhi (1927); Soyen Shaku (1906), the Dalai Lama (1994, "as quoted by Cobb"). Thich Nhat Hanh is named only as
not consulted. The Christian responses say the receptions "mostly do not dispute the history" and test the
reinterpretation's fit with the earliest evidence (uniqueness within Jewish monotheism; the resurrection as unrepeatable;
Vivekananda's bracketing of history; "Abba, Father"). Shinran (Pure Land) is used, and listed, as the closest Buddhist
analogue to salvation by another.

## Sources, thinkers and links

- christianity: ESV John 1:14, Col 2:9, Mark 10:45, Rom 1:3–4, Acts 2:36, 1 Cor 15:20, 1 Cor 15:3–8, 1 Cor 15:4,
  Gal 1:18–19, 1 Cor 8:6, 1 Cor 16:22; WCF 8.2; Calvin II.12.1, II.16.13; Turretin XIII.1 (Latin, paraphrase); Bavinck I
  §14 p. 537 (paraphrase); Martin L13 ch. 2, L2 ch. 1, L5 ch. 2; Tacitus 15.44; Josephus XX.9.1; Posen; EJ "Jesus";
  Craig NTS (summary; argument (1)); Lowder n. 3, §2; Habermas ("Some Specific Research Trends"); Hurtado ("Early
  devotion to Christ"; (iii); "Historical factors (ii)"); Craig–Ehrman debate (Ehrman opening statement, conclusion);
  SEP Miracles §4.2. Thinkers calvin, turretin, bavinck. Links `guilt`, `revelation`, Jewish `jesus`.
- naturalism: Martin L13 chs. 1–4; Tacitus; ESV 1 Cor 15:3–8, 15:4; Craig–Ehrman (opening statement, first rebuttal,
  conclusion); Lowder introduction, n. 3, §§1.1, 2; Jewish Encyclopedia (Kohler, "In Theology"); EJ "Jesus"; Hurtado;
  SEP Miracles §3.3; Hume 10.12–13, 10.37. Thinker hume.
- judaism: Touger Kings 11:4; Vikuach first and second days (paraphrase); Rashi on Isa 53:3; Saadia
  VIII.9 (paraphrase); Talmud Sanh. 43a; Jewish Encyclopedia (Jacobs; Krauss); EJ Barcelona; Turretin XIII.1; ESV Heb
  9:28; Hurtado; Tacitus. Thinkers maimonides, nachmanides, saadia. Links `ultimate-reality`, `revelation`, Christian
  `jesus`.
- islam: Qur'an 3:45, 3:47, 3:49, 3:55, 3:59, 4:157–158, 4:171, 5:72, 5:117, 61:6; al-Tabari, al-Razi pp. 1–2, Ibn Kathir
  on 4:157 (Arabic; paraphrase or our translation); Fatoohi pp. 1, 6, 19; Tacitus; ESV Gal 1:18–19; Sanh. 43a. Thinker
  **razi (new profile)**. Links `ultimate-reality`, `self-salvation`, `revelation`, `history`.
- hinduism: Roy pp. 3–4, 17, contents ch. II; Vivekananda "Christ, the Messenger"; Gandhi I.XX, II.XV; Sastri Gītā 4.6–8;
  Tacitus; Hurtado; ESV 1 Cor 8:6, 1 Cor 15:17, John 1:14. Thinker shankara. Link `revelation`.
- buddhism: Soyen Shaku pp. 123–125; Cobb p. 580; DN 1:2.2–2.6; Tacitus; Hurtado; ESV Mark 14:36, 1 Cor 15:17; Shinran
  *Tannishō* chs. 1, 3. Thinker shinran. Links `ultimate-personal`, `self-salvation`.

## Narrow source checks performed (2026-10-07)

- Encyclopaedia Judaica "Jesus" (new source, see above).
- Live Craig–Ehrman transcript: every Ehrman quotation and its segment.
- Cached research-pass texts: Martin L13 (chapters mapped by transcript headings), L2, L5; Craig NTS; Lowder; Habermas
  (sections mapped); Hurtado (sections mapped); Josephus (Whiston); Tacitus (Perseus); Pliny; Jewish Encyclopedia; al-Tabari
  and Ibn Kathir (KSU Arabic); al-Razi pp. 1–2 (windows-1256); *Vikuach* (days mapped); EJ Barcelona; Roy; Vivekananda;
  Gandhi; Soyen Shaku; Cobb; Fatoohi (printed folios).
- Sefaria: Touger Kings 11 (segments 1–9), Davidson Sanh. 43a (segments 20–23), Saadia VIII.9 (Hebrew).
- quran.com: 3:45, 3:47, 3:49, 3:55, 3:59, 4:156–159 (and the Uthmani Arabic of 4:157), 4:171, 5:72–75, 5:116–117,
  19:20–21, 19:30–34, 61:6.
- esv.org: all ESV wording quoted.
- CCEL Calvin II.12.1, II.16.13; OPC WCF 8.2, 8.4.
- Macdonald p. 241 for the al-Razi profile.

## Project-generated translations

- Al-Razi on 4:157: "a few people who could have agreed on a lie" (p. 2), "mutually conflicting" and "God knows best"
  (p. 2), labelled "Arabic; our translation"; "opens the door of sophistry" (p. 1), labelled "Arabic; our paraphrase" in
  context.
- Mujahid via al-Tabari: "they crucified a man other than Jesus" (our translation, within the paraphrased citation).
- Al-Tabari and Ibn Kathir otherwise paraphrased; Nachmanides and Saadia paraphrased; Turretin paraphrased.

## ESV direct quotations

- `christianity/jesus.mdx`: eleven rows (64 words).
- `naturalism/jesus.mdx`: 1 Cor 15:4 "was buried".
- `judaism/jesus.mdx`: Heb 9:28 "will appear a second time".
- `hinduism/jesus.mdx`: 1 Cor 8:6 (two fragments), John 1:14 "became flesh".
- `buddhism/jesus.mdx`: Mark 14:36 "Abba, Father".

## Remaining caveats

- Wright, Allison and Lüdemann unavailable; the psychiatric and cognitive-dissonance literature not read: the naturalist
  case is Ehrman's and Lowder's, and group-appearance psychology is not over-specified.
- Ehrman's later account (*How Jesus Became God*) not read: the answers describe only the 2006 debate's order (scripture,
  exaltation, then visions).
- Second-century docetic and Gnostic denials of the crucifixion not researched (see the Qur'an note above).
- Rom 9:5 and the pre-Pauline status of Phil 2 not used.
- The James-conversion inference rests on the Gospels' reports (Mark 3:21; John 7:5 not reread) as summarized by the EJ.
