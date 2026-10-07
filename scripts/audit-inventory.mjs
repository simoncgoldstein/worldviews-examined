// Final corpus audit inventory (read-only diagnostic; writes only under research/final-audit/data/).
//   node scripts/audit-inventory.mjs
// Produces per-answer metrics, aggregate tables, thinker/source usage, ESV quotation candidates
// reconciled against docs/ESV-QUOTATION-LEDGER.md, and prose/argument/provenance flags.
// Numbers are diagnostic only: they locate pages for qualitative reading, they do not grade them.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const content = join(root, 'src', 'content');
const outDir = join(root, 'research', 'final-audit', 'data');
mkdirSync(outDir, { recursive: true });

const y = (p) => parse(readFileSync(join(content, p), 'utf8'), { customTags: ['timestamp'] });
const questions = y('questions/questions.yaml');
const sources = y('sources/sources.yaml');
const thinkers = y('thinkers/thinkers.yaml');
const sourceById = new Map(sources.map((s) => [s.id, s]));
const thinkerById = new Map(thinkers.map((t) => [t.id, t]));
const qById = new Map(questions.map((q) => [q.id, q]));

const WORLDVIEWS = ['christianity', 'naturalism', 'judaism', 'islam', 'hinduism', 'buddhism'];
const TIER = {
  anchor: ['ultimate-reality', 'knowledge-possible', 'ultimate-authority', 'what-is-man', 'evil', 'self-salvation', 'revelation', 'jesus'],
  flagship: ['great-and-terrible'],
  concise: ['one-and-many', 'offspring-family', 'love-beauty-creativity', 'fail-the-good', 'self-deception'],
};
const tierOf = (q) => Object.entries(TIER).find(([, ids]) => ids.includes(q))?.[0] ?? 'medium';
const FOUNDATIONAL = new Set(['scripture', 'primary', 'confessional']);

// Name-led sentence detection: a sentence whose grammatical subject is a source or thinker.
const surname = (n) => n.replace(/\(.*?\)/g, '').trim().split(/\s+/).pop();
const nameTokens = new Set();
for (const t of thinkers) {
  nameTokens.add(t.name.replace(/\(.*?\)/g, '').trim());
  nameTokens.add(surname(t.name));
}
for (const extra of ['al-Ghazali', 'Ghazali', 'Ibn Sina', 'Ibn Taymiyya', 'Ibn Khaldun', 'Śaṅkara', 'Rāmānuja', 'Nāgārjuna', 'Dharmakīrti', 'Śāntideva', 'Udayana', 'Kumārila', 'Buddhaghosa', 'Vasubandhu', 'Shinran', 'Halevi', 'Saadia', 'Rashi', 'Nachmanides', 'Ramban'])
  nameTokens.add(extra);
const CONFESSION_LEAD = /^(The )?(Westminster|Shorter Catechism|Larger Catechism|Heidelberg|Belgic|Canons of Dort|Dort|The confession|The Confession|The catechism|The Catechism|The Standards)/;
const nameLed = (sentence) => {
  const s = sentence.replace(/^[*_"“(\s]+/, '');
  if (CONFESSION_LEAD.test(s)) return 'confession';
  for (const n of nameTokens) {
    if (n.length < 3) continue;
    if (s.startsWith(n + ' ') || s.startsWith(n + "'s ") || s.startsWith(n + '’s ') || s.startsWith('For ' + n + ',')) return 'thinker';
  }
  return null;
};

const stripTags = (t) =>
  t
    .replace(/<Cite[^>]*\/>/g, '')
    .replace(/<QuestionLink[^>]*>([\s\S]*?)<\/QuestionLink>/g, '$1')
    .replace(/<[^>]+>/g, '');
const words = (t) => (stripTags(t).match(/\S+/g) ?? []).filter((w) => !/^#+$/.test(w)).length;

function sections(body) {
  const out = [];
  let cur = null;
  for (const line of body.split(/\r?\n/)) {
    const m = line.match(/^##(?!#)\s+(.+?)\s*$/);
    if (m) {
      cur = { title: m[1], lines: [] };
      out.push(cur);
    } else if (cur) cur.lines.push(line);
  }
  return out.map((s) => ({ title: s.title, text: s.lines.join('\n') }));
}

const FLAGS = {
  contradiction: /contradict|incoheren|self-refut|self-defeat/gi,
  cannotAccount: /cannot (account|ground|explain|justify)|can(no|')t (account|ground)|no (ground|basis) for/gi,
  borrow: /borrow/gi,
  provenance: /our translation|our rendering|paraphras|via SEP|as quoted|quoted (in|by)|summar(y|ises|izes) of|close rendering/gi,
};
const UNIVERSAL = /\b(Judaism|Islam|Hinduism|Buddhism|Naturalism|Christianity) (teaches|says|holds|denies|affirms|insists|claims|believes|rejects|has no|offers|sees|treats)\b/g;

const answers = [];
const esvCandidates = [];
for (const wv of WORLDVIEWS) {
  for (const file of readdirSync(join(content, 'answers', wv)).filter((f) => f.endsWith('.mdx'))) {
    const raw = readFileSync(join(content, 'answers', wv, file), 'utf8').replace(/^﻿/, '');
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    const fm = parse(m[1], { customTags: ['timestamp'] });
    const body = m[2];
    const cites = [...body.matchAll(/<Cite\s+source="([^"]+)"\s+locator="([^"]*)"(?:\s+note="([^"]*)")?\s*\/>/g)].map((c) => ({ source: c[1], locator: c[2], note: c[3] }));
    const distinct = [...new Set(cites.map((c) => c.source))];
    const secs = sections(body);
    const deep = secs.find((s) => s.title === 'Deep dive');
    const main = secs.filter((s) => s.title !== 'Deep dive');
    const mainText = main.map((s) => s.text).join('\n');
    const sentences = stripTags(mainText)
      .split(/(?<=[.!?])\s+(?=[A-Z“"*])/)
      .map((s) => s.trim())
      .filter((s) => s.length > 20 && !s.startsWith('#'));
    const led = sentences.map(nameLed);
    // ESV quotation candidates: quoted material in the text run immediately preceding an ESV cite.
    const runs = body.split(/(<Cite\s+source="[^"]+"\s+locator="[^"]*"(?:\s+note="[^"]*")?\s*\/>)/);
    for (let i = 1; i < runs.length; i += 2) {
      const cm = runs[i].match(/source="([^"]+)"\s+locator="([^"]*)"/);
      if (cm[1] !== 'bible-esv') continue;
      const prev = stripTags(runs[i - 1]);
      const qs = [...prev.matchAll(/[“"]([^”"]{2,400})[”"]/g)].map((q) => q[1]);
      if (qs.length) esvCandidates.push({ file: `${wv}/${file}`, locator: cm[2], fragments: qs, words: qs.join(' ').split(/\s+/).length });
    }
    const flags = {};
    for (const [k, re] of Object.entries(FLAGS)) flags[k] = (stripTags(body).match(re) ?? []).length;
    const noteFlags = cites.filter((c) => c.note && FLAGS.provenance.test(c.note)).length;
    FLAGS.provenance.lastIndex = 0;
    const universal = [...stripTags(body).matchAll(UNIVERSAL)].map((u) => u[0]);
    answers.push({
      worldview: wv,
      question: fm.questionId,
      domain: qById.get(fm.questionId)?.category,
      order: qById.get(fm.questionId)?.order,
      tier: tierOf(fm.questionId),
      status: fm.reviewStatus,
      words: words(body),
      mainWords: words(mainText),
      deepWords: deep ? words(deep.text) : 0,
      thesisWords: fm.lede ? fm.lede.split(/\s+/).length : 0,
      lede: fm.lede ?? '',
      scope: fm.scope ?? '',
      citations: cites.length,
      distinctWorks: distinct.length,
      foundationalWorks: distinct.filter((s) => FOUNDATIONAL.has(sourceById.get(s)?.type)).length,
      secondaryWorks: distinct.filter((s) => !FOUNDATIONAL.has(sourceById.get(s)?.type)).length,
      thinkers: fm.thinkers ?? [],
      scriptureCites: cites.filter((c) => c.source === 'bible-esv').length,
      esvQuoteRuns: esvCandidates.filter((e) => e.file === `${wv}/${file}`).length,
      crossLinks: (body.match(/<QuestionLink/g) ?? []).length,
      mainSentences: sentences.length,
      thinkerLed: led.filter((l) => l === 'thinker').length,
      confessionLed: led.filter((l) => l === 'confession').length,
      flags: { ...flags, provenanceNotes: noteFlags, universal: universal.length },
      universal,
      sources: distinct,
      unknownSources: distinct.filter((s) => !sourceById.has(s)),
      uncheckedSources: distinct.filter((s) => sourceById.get(s)?.verificationStatus !== 'checked'),
      provenanceNotes: cites.filter((c) => c.note).map((c) => `${c.source} ${c.locator}: ${c.note}`),
    });
  }
}
answers.sort((a, b) => WORLDVIEWS.indexOf(a.worldview) - WORLDVIEWS.indexOf(b.worldview) || a.order - b.order);

// ---- ledger reconciliation
const ledgerRows = readFileSync(join(root, 'docs', 'ESV-QUOTATION-LEDGER.md'), 'utf8')
  .split('\n')
  .filter((l) => /^\| `[a-z]+\/[a-z-]+\.mdx` \|/.test(l))
  .map((l) => {
    const c = l.split('|').map((x) => x.trim());
    return { file: c[1].replace(/`/g, ''), locator: c[2], fragments: +c[3], words: +c[4], bytes: +c[5], verses: +c[6] };
  });
const key = (r) => `${r.file}|${r.locator}`;
const ledgerKeys = new Map();
for (const r of ledgerRows) ledgerKeys.set(key(r), (ledgerKeys.get(key(r)) ?? 0) + 1);
const candKeys = new Map();
for (const c of esvCandidates) candKeys.set(key(c), (candKeys.get(key(c)) ?? 0) + 1);
const unledgered = esvCandidates.filter((c) => !ledgerKeys.has(key(c)));
const orphanLedger = ledgerRows.filter((r) => !candKeys.has(key(r)));

// ---- aggregates
const sum = (xs, f) => xs.reduce((n, x) => n + f(x), 0);
function aggregate(by) {
  const groups = new Map();
  for (const a of answers) {
    const k = a[by];
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(a);
  }
  return [...groups].map(([k, xs]) => {
    const srcs = new Set(xs.flatMap((x) => x.sources));
    return {
      key: k,
      answers: xs.length,
      words: sum(xs, (x) => x.words),
      citations: sum(xs, (x) => x.citations),
      distinctSources: srcs.size,
      foundational: [...srcs].filter((s) => FOUNDATIONAL.has(sourceById.get(s)?.type)).length,
      secondary: [...srcs].filter((s) => !FOUNDATIONAL.has(sourceById.get(s)?.type)).length,
      thinkers: new Set(xs.flatMap((x) => x.thinkers)).size,
      thinkerLed: sum(xs, (x) => x.thinkerLed),
      confessionLed: sum(xs, (x) => x.confessionLed),
      mainSentences: sum(xs, (x) => x.mainSentences),
    };
  });
}

// ---- thinker usage (metadata) and source usage
const thinkerUse = thinkers.map((t) => {
  const used = answers.filter((a) => a.thinkers.includes(t.id));
  return {
    id: t.id,
    name: t.name,
    worldview: t.worldview,
    role: t.role,
    answers: used.length,
    answerIds: used.map((a) => `${a.worldview}/${a.question}`),
    domains: [...new Set(used.map((a) => a.domain))],
    bio: Boolean(t.bio),
    worksWithSource: (t.representativeWorks ?? []).filter((w) => w.sourceId).length,
  };
});
const sourceUse = sources.map((s) => {
  const used = answers.filter((a) => a.sources.includes(s.id));
  return {
    id: s.id,
    type: s.type,
    tags: s.traditionTags,
    status: s.verificationStatus,
    answers: used.length,
    lanes: [...new Set(used.map((a) => a.worldview))],
    citeCount: 0,
  };
});
const allCites = [];
for (const wv of WORLDVIEWS)
  for (const file of readdirSync(join(content, 'answers', wv)).filter((f) => f.endsWith('.mdx'))) {
    const raw = readFileSync(join(content, 'answers', wv, file), 'utf8');
    for (const c of raw.matchAll(/<Cite\s+source="([^"]+)"\s+locator="([^"]*)"/g)) allCites.push({ wv, q: file.replace('.mdx', ''), source: c[1], locator: c[2] });
  }
for (const s of sourceUse) s.citeCount = allCites.filter((c) => c.source === s.id).length;

writeFileSync(join(outDir, 'answers.json'), JSON.stringify(answers, null, 1));
writeFileSync(join(outDir, 'thinker-usage.json'), JSON.stringify(thinkerUse, null, 1));
writeFileSync(join(outDir, 'source-usage.json'), JSON.stringify(sourceUse, null, 1));
writeFileSync(join(outDir, 'esv-candidates.json'), JSON.stringify({ candidates: esvCandidates, unledgered, orphanLedger, ledgerRows: ledgerRows.length }, null, 1));

// ---- markdown report
const md = [];
const table = (head, rows) => {
  md.push(`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`);
  for (const r of rows) md.push(`| ${r.join(' | ')} |`);
  md.push('');
};
md.push('# Corpus inventory (generated)', '', `Generated by \`node scripts/audit-inventory.mjs\`. ${answers.length} answers. Words = whitespace tokens after removing Cite/QuestionLink tags (headings excluded). "Name-led" = main-section sentences (excluding Deep dive) whose grammatical subject opens with a registered thinker name or a confession title; a crude locator for source-driven prose, not a finding by itself.`, '');
const totalWords = sum(answers, (a) => a.words);
md.push(`**Total authored words:** ${totalWords}. **Citations:** ${sum(answers, (a) => a.citations)}. **Cross-links:** ${sum(answers, (a) => a.crossLinks)}. **Review status:** ${[...new Set(answers.map((a) => a.status))].map((s) => `${s} ${answers.filter((a) => a.status === s).length}`).join(', ')}.`, '');
for (const by of ['worldview', 'domain', 'question']) {
  md.push(`## By ${by}`, '');
  table([by, 'answers', 'words', 'citations', 'distinct sources', 'foundational', 'secondary', 'thinkers', 'name-led / main sentences'], aggregate(by).map((g) => [g.key, g.answers, g.words, g.citations, g.distinctSources, g.foundational, g.secondary, g.thinkers, `${g.thinkerLed + g.confessionLed} / ${g.mainSentences}`]));
}
md.push('## Per answer', '');
table(
  ['worldview', 'question', 'domain', 'tier', 'status', 'words', 'main / deep', 'thesis words', 'cites', 'works (found./sec.)', 'thinker meta', 'ESV cites / quote runs', 'links', 'name-led (thinker+conf) / sentences'],
  answers.map((a) => [a.worldview, a.question, a.domain, a.tier, a.status, a.words, `${a.mainWords} / ${a.deepWords}`, a.thesisWords, a.citations, `${a.distinctWorks} (${a.foundationalWorks}/${a.secondaryWorks})`, a.thinkers.join(', '), `${a.scriptureCites} / ${a.esvQuoteRuns}`, a.crossLinks, `${a.thinkerLed}+${a.confessionLed} / ${a.mainSentences}`]),
);
md.push('## Theses (all 168, body omitted)', '');
for (const wv of WORLDVIEWS) {
  md.push(`### ${wv}`, '');
  for (const a of answers.filter((x) => x.worldview === wv)) md.push(`- **${a.question}** (${a.thesisWords}w): ${a.lede}`);
  md.push('');
}
md.push('## Argument-strength and provenance language (counts in whole body)', '');
table(['answer', 'contradict*/incoheren*', 'cannot account/ground', 'borrow', 'provenance words (body)', 'provenance notes on Cite', 'universalizing "X teaches"'], answers.filter((a) => Object.values(a.flags).some((v) => v > 0)).map((a) => [`${a.worldview}/${a.question}`, a.flags.contradiction, a.flags.cannotAccount, a.flags.borrow, a.flags.provenance, a.flags.provenanceNotes, a.universal.join('; ')]));
md.push('## Thinker usage (answer metadata)', '');
table(['thinker', 'lane', 'role', 'answers', 'domains', 'bio'], thinkerUse.sort((a, b) => a.worldview.localeCompare(b.worldview) || b.answers - a.answers).map((t) => [t.name, t.worldview, t.role, t.answers, t.domains.join(', '), t.bio ? 'yes' : 'no']));
md.push('## Source usage', '');
table(['source', 'type', 'status', 'answers', 'cites', 'lanes'], sourceUse.sort((a, b) => b.citeCount - a.citeCount).map((s) => [s.id, s.type, s.status, s.answers, s.citeCount, s.lanes.join(', ')]));
md.push('## ESV reconciliation', '', `Ledger rows: ${ledgerRows.length}. Quoted-ESV candidates detected in answers: ${esvCandidates.length}.`, '');
md.push('### Candidates with no ledger row (file + locator)', '');
for (const c of unledgered) md.push(`- ${c.file} — ${c.locator}: ${c.fragments.map((f) => `“${f}”`).join(' / ')}`);
md.push('', '### Ledger rows with no detected quotation', '');
for (const r of orphanLedger) md.push(`- ${r.file} — ${r.locator}`);
md.push('', '### Cite notes (provenance)', '');
for (const a of answers) for (const n of a.provenanceNotes) md.push(`- ${a.worldview}/${a.question}: ${n}`);
md.push('', '### Unknown or unchecked sources cited', '');
for (const a of answers) if (a.unknownSources.length || a.uncheckedSources.length) md.push(`- ${a.worldview}/${a.question}: ${[...a.unknownSources, ...a.uncheckedSources].join(', ')}`);
writeFileSync(join(outDir, 'INVENTORY.md'), md.join('\n').trimEnd() + '\n');
console.log(`Audited ${answers.length} answers, ${totalWords} words, ${allCites.length} citations; ESV candidates ${esvCandidates.length}, unledgered ${unledgered.length}, orphan ledger rows ${orphanLedger.length}.`);
