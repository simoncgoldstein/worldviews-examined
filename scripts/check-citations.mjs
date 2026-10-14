// Corpus-wide citation integrity of the built site (read-only; run after `npm run build`).
//   node scripts/check-citations.mjs
// Derives every expectation from the answers' <Cite> tags and the source registry, then checks the
// built question pages: each citation has its marker in order, with its occurrence id; each distinct
// (source, locator) has one reference entry with the page-wide number, registered source, exact
// locator and every distinct note; each entry has one backlink per use, back to that use's marker; the
// registered URL is the only external link (no URL is invented for a source without one); every cited
// source is checked and listed in the Sources library. Written for the V1 release QA
// (docs/release/V1-RELEASE-QA.md).
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const load = (file) => YAML.parse(readFileSync(join(root, file), 'utf8'));
const sources = new Map(load('src/content/sources/sources.yaml').map((s) => [s.id, s]));
const questions = load('src/content/questions/questions.yaml');
const worldviews = load('src/content/worldviews/worldviews.yaml');
const decode = (s) =>
  s.replace(/&(amp|lt|gt|quot|#39|#x27|#x22);/g, (_, e) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", '#x27': "'", '#x22': '"' })[e]);
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const failures = [];
const fail = (message) => failures.push(message);
const totals = { citations: 0, markers: 0, entries: 0, backlinks: 0, notes: 0, withoutUrl: 0 };
const library = existsSync(join(dist, 'sources/index.html')) ? readFileSync(join(dist, 'sources/index.html'), 'utf8') : '';
const listed = new Set([...library.matchAll(/<li[^>]*\sid="source-([^"]+)"/g)].map((m) => m[1]));
if (listed.size === 0) fail('dist/sources/index.html has no library entries (run `npm run build` first)');

for (const question of questions) {
  const file = join(dist, 'questions', question.slug, 'index.html');
  if (!existsSync(file)) {
    fail(`no built page for question ${question.id}`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  let offset = 0;
  for (const worldview of worldviews) {
    const mdxFile = join(root, 'src/content/answers', worldview.id, `${question.id}.mdx`);
    if (!existsSync(mdxFile)) continue;
    const ns = `${worldview.id}-${question.id}`;
    // Expected numbering, as remark-citations.mjs assigns it: distinct (source, locator), first use first.
    const expected = [];
    const byKey = new Map();
    const uses = [];
    for (const tag of readFileSync(mdxFile, 'utf8').matchAll(/<Cite\s([^>]*?)\/>/g)) {
      const attrs = Object.fromEntries([...tag[1].matchAll(/(\w+)="([^"]*)"/g)].map((a) => [a[1], a[2].trim()]));
      const key = `${attrs.source}\u0000${attrs.locator}`;
      let entry = byKey.get(key);
      if (!entry) {
        entry = { n: expected.length + 1, source: attrs.source, locator: attrs.locator, notes: [], uses: 0 };
        byKey.set(key, entry);
        expected.push(entry);
      }
      if (attrs.note && !entry.notes.includes(attrs.note)) entry.notes.push(attrs.note);
      entry.uses += 1;
      uses.push(`${entry.n}-${entry.uses}`);
    }
    totals.citations += uses.length;

    const markers = [...html.matchAll(new RegExp(`<a id="${escape(ns)}-cite-(\\d+)-(\\d+)" href="#${escape(ns)}-src-(\\d+)" aria-label="([^"]*)">(\\d+)</a>`, 'g'))];
    totals.markers += markers.length;
    if (markers.map((m) => `${m[1]}-${m[2]}`).join() !== uses.join()) fail(`${ns}: markers do not follow the answer's citations (${markers.length} markers, ${uses.length} citations)`);
    for (const m of markers) {
      const entry = expected[Number(m[1]) - 1];
      if (!entry) continue;
      if (m[1] !== m[3] || Number(m[5]) !== offset + entry.n) fail(`${ns}-cite-${m[1]}-${m[2]}: links or numbers wrongly`);
      const label = decode(m[4]);
      if (!label.startsWith(`Source ${offset + entry.n}: `) || !label.endsWith(`, ${entry.locator}`)) fail(`${ns}-cite-${m[1]}-${m[2]}: label "${label}"`);
    }

    const entries = [...html.matchAll(new RegExp(`<li id="${escape(ns)}-src-(\\d+)" class="source-entry" value="(\\d+)" data-source="([^"]+)">([\\s\\S]*?)</li>`, 'g'))];
    totals.entries += entries.length;
    if (entries.length !== expected.length) fail(`${ns}: ${entries.length} reference entries, expected ${expected.length}`);
    if (expected.length && !html.includes(`<ol class="sources__list" start="${offset + 1}">`)) fail(`${ns}: list does not start at ${offset + 1}`);
    entries.forEach((m, i) => {
      const entry = expected[i];
      if (!entry) return;
      const at = `${ns}-src-${entry.n}`;
      const body = m[4];
      if (Number(m[1]) !== entry.n || Number(m[2]) !== offset + entry.n) fail(`${at}: numbered ${m[1]}/${m[2]}`);
      if (m[3] !== entry.source) fail(`${at}: source ${m[3]}, expected ${entry.source}`);
      const locator = body.match(/<span class="source-entry__locator">, ([\s\S]*?)<\/span>/);
      if (!locator || decode(locator[1]) !== entry.locator) fail(`${at}: locator "${locator?.[1]}", expected "${entry.locator}"`);
      const note = decode(body.match(/<span class="source-entry__note">([\s\S]*?)<\/span>/)?.[1] ?? '');
      for (const expectedNote of entry.notes) {
        totals.notes += 1;
        if (!note.includes(expectedNote)) fail(`${at}: note "${expectedNote}" not shown`);
      }
      const source = sources.get(entry.source);
      if (!source) return fail(`${at}: unregistered source ${entry.source}`);
      if (source.verificationStatus !== 'checked') fail(`${at}: cites unchecked source ${entry.source}`);
      if (!listed.has(entry.source)) fail(`${at}: ${entry.source} is not in the Sources library`);
      const external = [...body.matchAll(/<a href="([^"#][^"]*)"/g)].map((h) => decode(h[1]));
      if (source.url ? external.length !== 1 || external[0] !== source.url : external.length !== 0) fail(`${at}: external links ${JSON.stringify(external)}, registered ${source.url ?? 'none'}`);
      if (!source.url) totals.withoutUrl += 1;
      const backlinks = [...body.matchAll(/<a class="backlink" href="#([^"]+)"/g)].map((b) => b[1]);
      if (backlinks.length !== entry.uses) fail(`${at}: ${backlinks.length} backlinks for ${entry.uses} uses`);
      backlinks.forEach((id, k) => {
        if (id !== `${ns}-cite-${entry.n}-${k + 1}` || !ids.has(id)) fail(`${at}: backlink ${id}`);
        else totals.backlinks += 1;
      });
    });
    offset += expected.length;
  }
}

console.log({ ...totals, librarySources: listed.size, failures: failures.length });
if (failures.length) {
  for (const message of failures.slice(0, 40)) console.error(`  ${message}`);
  process.exit(1);
}
console.log('Every citation, reference entry, note, link and backlink matches the answers and the registry.');
