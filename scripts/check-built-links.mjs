// Built-site link, fragment and route check (read-only; run after `npm run build`).
//   node scripts/check-built-links.mjs
// Checks every local href/src in dist/ (cross-page and same-page), every #fragment against the
// target page's ids, duplicate ids within a page, and that every answer file renders on a question page.
// The base path is fixed here rather than passed on the command line: Git Bash on Windows rewrites a
// "/worldviews-examined/" argument into a Windows path, which silently excluded every cross-page link
// from the R3 Review B and R4 production counts. Any local link outside the base is reported, not skipped.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const base = '/worldviews-examined/';

const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else files.push(p);
  }
})(dist);
const pages = files.filter((f) => f.endsWith('.html'));

const idsOf = new Map();
const allIds = new Set();
let dup = 0;
for (const f of pages) {
  const ids = new Set();
  for (const m of readFileSync(f, 'utf8').matchAll(/\sid="([^"]+)"/g)) {
    if (ids.has(m[1])) { dup++; console.log('DUPLICATE ID', f, m[1]); }
    ids.add(m[1]);
    allIds.add(m[1]);
  }
  idsOf.set(resolve(f), ids);
}

let links = 0, crossPage = 0, fragments = 0, external = 0, outsideBase = 0, broken = 0;
for (const f of pages) {
  for (const m of readFileSync(f, 'utf8').matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|data:|\/\/)/.test(url)) { external++; continue; }
    const [path, hash] = url.split('#');
    let target;
    if (!path) target = resolve(f);
    else {
      if (!path.startsWith(base)) { outsideBase++; broken++; console.log('OUTSIDE BASE', f, url); continue; }
      crossPage++;
      let p = join(dist, decodeURI(path.slice(base.length)));
      if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
      else if (!existsSync(p) && existsSync(p + '.html')) p += '.html';
      target = resolve(p);
    }
    links++;
    if (!existsSync(target)) { broken++; console.log('BROKEN', f, url); continue; }
    if (hash) {
      fragments++;
      const ids = idsOf.get(target);
      if (ids && !ids.has(decodeURIComponent(hash))) { broken++; console.log('BAD FRAGMENT', f, url); }
    }
  }
}

const answersDir = join(root, 'src', 'content', 'answers');
let answers = 0, missingAnswers = 0;
for (const wv of readdirSync(answersDir)) {
  for (const a of readdirSync(join(answersDir, wv))) {
    const q = a.replace(/\.mdx?$/, '');
    answers++;
    if (!allIds.has(`${wv}-${q}-heading`)) { missingAnswers++; console.log('ANSWER NOT RENDERED', wv, q); }
  }
}
const norm = pages.map((f) => f.split(sep).join('/'));
const count = (dir) => norm.filter((f) => new RegExp(`/${dir}/[^/]+/index\\.html$`).test(f)).length;

console.log({
  pages: pages.length, questionPages: count('questions'), thinkerPages: count('thinkers'),
  worldviewPages: count('worldviews'), answers, missingAnswers,
  links, crossPage, fragments, external, outsideBase, broken, duplicateIds: dup,
});
if (broken || dup || missingAnswers) process.exit(1);
