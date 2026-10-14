// Browser smoke test of the release invariants (read-only; run after `npm run build`).
//   node scripts/release-smoke.mjs [chromium|firefox|webkit ...]   (default: all three, serially)
// Serves dist/ itself on a local port and drives the built site with Playwright, which is not a
// project dependency. Install it once outside the project's dependencies, for example:
//   npm install --no-save playwright && npx playwright install chromium firefox webkit
// Covers: the three reading modes, Back/Forward restoration of reading state (including the WebKit
// `pagehide` regression fixed in release QA), Sources Library deep links and restoration, citation ->
// preview -> reference -> backlink round trips in every mode, the question Sources filter, and reading
// without JavaScript. See docs/release/V1-RELEASE-QA.md for the full release QA this samples.
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

let playwright;
try {
  playwright = await import('playwright');
} catch {
  console.error('Playwright is not installed. Run: npm install --no-save playwright && npx playwright install');
  process.exit(2);
}

const dist = join(resolve(fileURLToPath(new URL('..', import.meta.url))), 'dist');
const BASE = '/worldviews-examined';
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml' };
const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = join(dist, path.startsWith(BASE) ? path.slice(BASE.length) : path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!path.startsWith(BASE) || !existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-store' });
  createReadStream(file).pipe(res);
});
await new Promise((ready) => server.listen(0, '127.0.0.1', ready));
const B = `http://127.0.0.1:${server.address().port}${BASE}`;

const engines = process.argv.slice(2).length ? process.argv.slice(2) : ['chromium', 'firefox', 'webkit'];
let failed = 0;
for (const engine of engines) {
  // Chromium falls back to an installed Chrome when Playwright's own build is not downloaded.
  const browser = await playwright[engine].launch().catch((error) => {
    if (engine === 'chromium') return playwright.chromium.launch({ channel: 'chrome' });
    throw error;
  });
  const results = [];
  const check = (name, ok, detail) => {
    results.push(ok);
    if (!ok) console.log(`  FAIL ${name} :: ${JSON.stringify(detail)}`);
  };
  const newPage = async (options = {}) => (await browser.newContext({ viewport: { width: 1280, height: 900 }, ...options })).newPage();
  const settle = (page, ms = 400) => page.waitForTimeout(ms);
  const follow = (page, href) => Promise.all([page.waitForEvent('load'), page.evaluate((h) => { const a = document.createElement('a'); a.href = h; document.body.append(a); a.click(); }, href)]);
  const reading = (page) => page.evaluate(() => ({
    mode: document.querySelector('.question-page')?.dataset.mode,
    search: location.search,
    open: [...document.querySelectorAll('[data-answer][data-open]')].map((a) => a.id),
    levels: [...document.querySelectorAll('.question-page details[open] > summary[id]')].map((s) => s.id),
  }));
  const landed = (page, id) => page.evaluate((id) => {
    const el = document.getElementById(id);
    const r = el?.getBoundingClientRect();
    return !!el && el.getClientRects().length > 0 && !el.closest('[hidden]') && r.top >= -1 && r.bottom <= innerHeight + 1;
  }, id);
  const roundTrip = async (page, selector, label, mode) => {
    const marker = page.locator(selector).first();
    await marker.scrollIntoViewIfNeeded();
    const [markerId, href] = [await marker.getAttribute('id'), await marker.getAttribute('href')];
    await marker.click();
    await settle(page, 300);
    check(`${label}: preview opens`, await page.evaluate(() => document.getElementById('cite-preview')?.matches(':popover-open')), null);
    await page.click('.cite-preview__full');
    await settle(page);
    check(`${label}: reference shown`, await landed(page, href.slice(1)), href);
    await page.click(`${href} a.backlink[href="#${markerId}"]`);
    await settle(page);
    check(`${label}: backlink returns to the claim`, (await landed(page, markerId)) && (await reading(page)).mode === mode, markerId);
  };

  // Reading modes from shared URLs
  let page = await newPage();
  await page.goto(`${B}/questions/what-is-man/?mode=compare&views=judaism,islam`);
  await settle(page);
  check('Compare URL opens Compare with the named pair', await page.evaluate(() => document.querySelector('.question-page').dataset.mode === 'compare' && [...document.querySelectorAll('[data-compare] [data-row="view"] .compare__cell')].map((c) => c.dataset.worldview).join() === 'judaism,islam'), null);
  await page.goto(`${B}/questions/has-ultimate-reality-revealed-itself/?mode=case&opponent=buddhism`);
  await settle(page);
  check('Christian Case URL opens the named opponent', await page.evaluate(() => document.querySelector('[data-case] [data-part="response"][data-side="alt"]')?.dataset.worldview === 'buddhism' && document.querySelector('[data-case] [data-part="objections"]')?.dataset.worldview === 'christianity'), null);

  // Back/Forward restoration of reading state across question pages
  await page.goto(`${B}/questions/what-is-man/`);
  await settle(page);
  await page.click('#christianity .answer__toggle');
  await page.click('#christianity-what-is-man-examine');
  await follow(page, `${B}/questions/why-do-we-die/`);
  await settle(page);
  check('another question does not inherit open answers', (await reading(page)).open.length === 0, await reading(page));
  await page.goBack();
  await settle(page, 800);
  let state = await reading(page);
  check('Back restores the open answer and section', state.open.join() === 'christianity' && state.levels.includes('christianity-what-is-man-examine'), state);
  await page.goto(`${B}/questions/what-is-man/?mode=compare&views=christianity,naturalism`);
  await settle(page);
  await page.click('[data-compare] [data-cell] > details > summary >> nth=0');
  await follow(page, `${B}/questions/what-is-evil/`);
  await page.goBack();
  await settle(page, 800);
  state = await reading(page);
  check('Back restores Compare and its open section', state.mode === 'compare' && state.levels.length === 1, state);
  await page.goto(`${B}/questions/what-is-evil/?mode=case&opponent=judaism`);
  await settle(page);
  await page.selectOption('[data-case-select]', 'islam');
  await follow(page, `${B}/method/`);
  await page.goBack();
  await settle(page, 800);
  check('Back restores the changed Christian Case opponent', (await reading(page)).search === '?mode=case&opponent=islam', await reading(page));
  await page.goBack();
  await settle(page, 800);
  check('Back again restores the previous opponent', (await reading(page)).search === '?mode=case&opponent=judaism', await reading(page));

  // Citation round trips in every mode, and the question Sources filter
  await page.goto(`${B}/questions/what-is-man/`);
  await settle(page);
  await page.click('#naturalism .answer__toggle');
  await page.click('[data-source-filter] button[data-filter="buddhism"]');
  await roundTrip(page, '#naturalism .answer__body sup.cite > a', 'Explore', 'explore');
  check('a reference hidden by the Sources filter switches the filter to its worldview', (await page.getAttribute('[data-source-filter] [aria-pressed="true"]', 'data-filter')) === 'naturalism', null);
  await page.click('[data-source-filter] button[data-filter="all"]');
  check('All shows every Sources group', await page.evaluate(() => [...document.querySelectorAll('.page-sources .sources__group')].every((g) => !g.hidden)), null);
  await page.goto(`${B}/questions/what-is-man/?mode=compare&views=christianity,naturalism`);
  await settle(page);
  await roundTrip(page, '[data-compare] [data-row="view"] .compare__cell[data-side="1"] sup.cite > a', 'Compare', 'compare');
  await page.goto(`${B}/questions/what-is-evil/?mode=case&opponent=hinduism`);
  await settle(page);
  await roundTrip(page, '[data-case] [data-part="response"] sup.cite > a', 'Christian Case', 'case');
  const closed = await page.evaluate(() => document.querySelector('#judaism [data-level="study"] sup.cite > a').id);
  await page.goto(`${B}/questions/what-is-evil/#${closed}`);
  await settle(page, 600);
  check('a link into a closed answer and closed Deep dive lands', await landed(page, closed), closed);

  // Sources Library: deep link to a later page, and restoration after leaving
  await page.goto(`${B}/sources/#source-farber-torahs-exodus`);
  await settle(page, 600);
  check('a #source- link reaches its entry on a later page', await landed(page, 'source-farber-torahs-exodus'), null);
  await page.goto(`${B}/sources/`);
  await settle(page);
  await page.selectOption('#library-worldview', 'naturalism');
  await page.click('[data-library-next]');
  const first = await page.evaluate(() => [...document.querySelectorAll('.library__entry')].find((e) => !e.hidden).id);
  await follow(page, await page.evaluate(() => [...document.querySelectorAll('.library__entry')].find((e) => !e.hidden).querySelector('details a').href));
  await page.goBack();
  await settle(page, 900);
  check('Back to the library restores its filter and page', await page.evaluate((first) => document.querySelector('#library-worldview').value === 'naturalism' && [...document.querySelectorAll('.library__entry')].find((e) => !e.hidden).id === first, first), first);
  await page.context().close();

  // Without JavaScript
  page = await newPage({ javaScriptEnabled: false });
  await page.goto(`${B}/questions/what-is-man/?mode=compare&views=judaism,islam`);
  check('no JavaScript: all six answers and every reference are readable', await page.evaluate(() => [...document.querySelectorAll('[data-answer-panel]')].filter((p) => p.getClientRects().length).length === 6 && [...document.querySelectorAll('.source-entry')].every((e) => e.getClientRects().length > 0) && [...document.querySelectorAll('button, select, input')].every((c) => c.getClientRects().length === 0)), null);
  await page.goto(`${B}/sources/`);
  check('no JavaScript: the library lists all 224 sources', await page.evaluate(() => [...document.querySelectorAll('.library__entry')].filter((e) => e.getClientRects().length).length === 224), null);
  await page.context().close();

  await browser.close();
  const passed = results.filter(Boolean).length;
  failed += results.length - passed;
  console.log(`${engine}: ${passed}/${results.length} passed`);
}
server.close();
process.exit(failed ? 1 : 0);
