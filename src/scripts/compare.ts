// Compare mode for the question page (UI-2): any two of the six answers, section by section.
//
// Architecture: the page renders every answer once, in Explore order (AnswerPanel.astro), plus an
// empty, hidden scaffold of paired rows (CompareView.astro). Entering Compare *moves* the two
// selected answers' existing section elements into the rows, leaving a comment placeholder where
// each came from; returning to Explore (or choosing another pair) puts every node back at its
// placeholder. No answer text, citation or id is ever copied, so ids stay unique, citation numbers
// and backlinks are unchanged, and listeners and <details> state travel with the nodes.
//
// URL state: ?mode=compare&views=<first>,<second> over the same static question page. A meaningful
// change (mode, pair, swap) pushes a history entry; disclosure clicks only update the current
// entry's state. Explore remains the default. Fragment links take precedence over the mode: a
// target that Compare is not showing switches the page back to Explore (see resolveForMode).
import { suspendExploreState } from './answer-panels';

type Mode = 'explore' | 'compare';
export type Pair = [string, string];

interface Parsed {
  mode: Mode;
  pair: Pair | null;
  /** True when the query string already says exactly what will be shown. */
  canonical: boolean;
  /** True when the views named were missing, unknown, repeated or too many, and were replaced. */
  repaired: boolean;
}

/**
 * Reads the mode and pair from a query string. Rules (docs/ui/UI2-COMPARE.md §10):
 * a missing or unsupported `mode` means Explore; in Compare, `views` is split on commas or spaces,
 * lower-cased, unknown and repeated ids are dropped, the first two remain, and any missing slot is
 * filled from the worldview order (so the default pair is the first two worldviews).
 */
export function parseQuery(search: string, ids: readonly string[]): Parsed {
  const params = new URLSearchParams(search);
  const modes = params.getAll('mode');
  const views = params.getAll('views');
  if ((modes[0] ?? '').trim().toLowerCase() !== 'compare') {
    return { mode: 'explore', pair: null, canonical: modes.length === 0 && views.length === 0, repaired: false };
  }
  const named = views.join(',').toLowerCase().split(/[\s,]+/).filter(Boolean);
  const chosen: string[] = [];
  for (const id of named) if (ids.includes(id) && !chosen.includes(id)) chosen.push(id);
  const repaired = chosen.length < 2 || named.length !== 2;
  const picked = chosen.slice(0, 2);
  for (const id of ids) if (picked.length < 2 && !picked.includes(id)) picked.push(id);
  const pair: Pair = [picked[0] ?? '', picked[1] ?? ''];
  const canonical = modes.length === 1 && modes[0] === 'compare' && views.length === 1 && views[0] === pair.join(',');
  return { mode: 'compare', pair, canonical, repaired };
}

/** The canonical URL for a mode and pair, keeping unrelated query parameters and the given hash. */
function urlFor(mode: Mode, pair: Pair | null, hash = ''): string {
  const params = new URLSearchParams(location.search);
  params.delete('mode');
  params.delete('views');
  const rest = params.toString();
  const query = mode === 'compare' && pair ? `mode=compare&views=${pair.join(',')}${rest ? `&${rest}` : ''}` : rest;
  return `${location.pathname}${query ? `?${query}` : ''}${hash}`;
}

// The parts of an answer that each row receives, by semantic identity (section slugs from
// src/lib/answer-sections.ts, level names from the remark plugin), never by text or position.
const ROWS: [row: string, selector: string][] = [
  ['glance', ':scope > .answer__panel > .answer__inner > :is(.answer__thesis, .answer__scope, .tradition-notes)'],
  ['view', ':scope .answer__body > :is([data-section="the-view"], [data-section="the-christian-view"])'],
  ['strengths', ':scope .answer__body > [data-section="what-this-explains-well"]'],
  ['examine', ':scope .answer__body > [data-level="examine"]'],
  ['study', ':scope .answer__body > [data-level="study"]'],
  // Anything else in the body (the validator allows nothing else) is kept with the footer, never lost.
  ['footer', ':scope .answer__body > *, :scope > .answer__panel > .answer__inner > .answer__footer'],
];
const HEADINGS = 'h3:not([data-compare-label]), .level__title';

let page: HTMLElement;
let region: HTMLElement;
let overview: HTMLElement | null;
let reading: HTMLElement | null;
let selects: HTMLSelectElement[] = [];
let ids: string[] = [];
const answers = new Map<string, HTMLElement>();
const names = new Map<string, string>();
let mode: Mode = 'explore';
let pair: Pair = ['', ''];
let ready = false;
const moved: { node: Element; placeholder: Comment }[] = [];

export const isComparing = (): boolean => ready && mode === 'compare';

const cell = (row: string, side: number) =>
  region.querySelector<HTMLElement>(`[data-row="${row}"] > .compare__cell[data-side="${side}"]`);

function mount(next: Pair): void {
  next.forEach((id, side) => {
    const answer = answers.get(id);
    const name = names.get(id) ?? id;
    if (!answer) return;
    for (const [row, selector] of ROWS) {
      const target = cell(row, side);
      if (!target) continue;
      target.dataset.worldview = id;
      const label = target.querySelector('[data-compare-label]');
      if (label) label.textContent = name;
      for (const node of answer.querySelectorAll(selector)) {
        const placeholder = document.createComment('compare');
        node.before(placeholder);
        target.append(node);
        moved.push({ node, placeholder });
        // Headings name their worldview for assistive technology, since the passage has left its answer.
        for (const heading of node.matches(HEADINGS) ? [node] : node.querySelectorAll(HEADINGS)) {
          const prefix = document.createElement('span');
          prefix.className = 'visually-hidden';
          prefix.dataset.comparePrefix = '';
          prefix.textContent = `${name}: `;
          heading.prepend(prefix);
        }
      }
    }
  });
}

function unmount(): void {
  region.querySelectorAll('[data-compare-prefix]').forEach((prefix) => prefix.remove());
  for (const { node, placeholder } of moved.splice(0).reverse()) placeholder.replaceWith(node);
}

const visible = (el: Element) => el.getClientRects().length > 0;

/** Runs a DOM rearrangement without losing keyboard focus (moving a node drops focus from it). */
function keepingFocus(change: () => void): void {
  const active = document.activeElement;
  change();
  if (active instanceof HTMLElement && active !== document.activeElement && active.isConnected && visible(active)) {
    active.focus({ preventScroll: true });
  }
}

function apply(next: Mode, nextPair: Pair): void {
  keepingFocus(() => {
    if (moved.length) unmount();
    mode = next;
    pair = nextPair;
    const comparing = next === 'compare';
    if (comparing) mount(nextPair);
    page.dataset.mode = next;
    region.hidden = !comparing;
    if (overview) overview.hidden = comparing;
    if (reading) reading.hidden = comparing;
    suspendExploreState(comparing);

    const selectedNs = comparing ? nextPair.map((id) => answers.get(id)?.dataset.ns) : [];
    document.querySelectorAll<HTMLElement>('.sources__group[data-ns]').forEach((group) => {
      group.hidden = comparing && !selectedNs.includes(group.dataset.ns);
    });
    const note = document.querySelector<HTMLElement>('[data-compare-sources-note]');
    const both = `${names.get(nextPair[0])} and ${names.get(nextPair[1])}`;
    if (note) {
      note.hidden = !comparing;
      note.textContent = comparing ? `Showing the sources for ${both}. The other answers’ sources are listed in Explore.` : '';
    }
    const title = region.querySelector('[data-compare-print-title]');
    if (title) title.textContent = `Compared: ${both}`;

    selects.forEach((select, side) => {
      const choice = select.closest<HTMLElement>('.compare__choice');
      if (choice) choice.dataset.worldview = nextPair[side];
      select.value = nextPair[side]!;
      for (const option of select.options) option.disabled = option.value === nextPair[1 - side];
    });
    document.querySelectorAll<HTMLAnchorElement>('[data-mode-link]').forEach((link) => {
      const current = link.dataset.modeLink === next;
      if (current) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
      link.href = urlFor(link.dataset.modeLink === 'compare' ? 'compare' : 'explore', nextPair);
    });
    // Carry the pair to related questions: their pages read the same query parameters.
    document.querySelectorAll<HTMLAnchorElement>('a[data-related-link]').forEach((link) => {
      link.dataset.href ??= link.getAttribute('href') ?? '';
      link.href = comparing ? `${link.dataset.href}?mode=compare&views=${nextPair.join(',')}` : link.dataset.href;
    });
    updateBothButtons();
  });
}

// --- History ---------------------------------------------------------------------------------

const compareDetails = () => [...region.querySelectorAll<HTMLDetailsElement>('.compare__cell > details')];

function saveLevels(): void {
  if (!isComparing()) return;
  const levels = compareDetails().filter((d) => d.open).map((d) => d.querySelector(':scope > summary')?.id ?? '');
  try {
    history.replaceState({ ...history.state, compare: { levels } }, '');
  } catch {
    // History state is an enhancement only.
  }
}

function restoreLevels(): void {
  const levels = (history.state as { compare?: { levels?: unknown } } | null)?.compare?.levels;
  if (!Array.isArray(levels)) return;
  for (const details of compareDetails()) details.open = levels.includes(details.querySelector(':scope > summary')?.id);
}

/** Keeps a reading position: the first row still on screen stays where it was. */
function anchored(change: () => void): void {
  const sticky = region.querySelector('.compare__picker');
  const top = sticky && getComputedStyle(sticky).position === 'sticky' ? sticky.getBoundingClientRect().bottom : 0;
  const row = [...region.querySelectorAll('.compare__row')].find((r) => r.getBoundingClientRect().bottom > top);
  const before = row?.getBoundingClientRect().top;
  change();
  if (row && before !== undefined && region.getBoundingClientRect().top < top) {
    window.scrollBy(0, row.getBoundingClientRect().top - before);
  }
}

const status = () => document.querySelector<HTMLElement>('[data-compare-status]');
function announce(message: string): void {
  const el = status();
  if (!el) return;
  el.textContent = '';
  requestAnimationFrame(() => (el.textContent = message));
}

const describe = (p: Pair) => `Comparing ${names.get(p[0])} and ${names.get(p[1])}.`;

function replaceUrl(url: string): void {
  try {
    history.replaceState(history.state, '', url);
  } catch {
    // Rate-limited: the next change will correct it.
  }
}

function record(state: unknown, url: string): boolean {
  try {
    history.pushState(state, '', url);
    return true;
  } catch {
    try {
      history.replaceState(state, '', url);
      return true;
    } catch {
      return false;
    }
  }
}

/** A reader's choice of mode or pair: a new history entry, and the URL that represents it. */
function navigate(next: Mode, nextPair: Pair): void {
  const notice = region.querySelector<HTMLElement>('[data-compare-notice]');
  if (notice) notice.hidden = true;
  saveLevels();
  const wasComparing = isComparing();
  const state = { ...history.state };
  delete state.compare;
  // Browsers rate-limit history changes. If the URL cannot follow, keep the current view and
  // controls, so the page never shows a different pair from the one its URL names.
  if (!record(state, urlFor(next, nextPair))) {
    apply(mode, pair);
    return;
  }
  anchored(() => apply(next, nextPair));
  saveLevels();
  announce(next === 'compare' ? describe(nextPair) : wasComparing ? 'Explore: all six answers.' : '');
}

function onPopState(): void {
  const parsed = parseQuery(location.search, ids);
  const nextPair = parsed.pair ?? pair;
  if (parsed.mode !== mode || (parsed.mode === 'compare' && nextPair.join() !== pair.join())) {
    apply(parsed.mode, nextPair);
    if (parsed.mode === 'compare') restoreLevels();
  }
  if (!parsed.canonical) replaceUrl(urlFor(parsed.mode, nextPair, location.hash));
}

// --- Fragments -------------------------------------------------------------------------------

/** Whether a fragment target can be shown while comparing `p` (before or after mounting). */
function shownInCompare(el: Element, p: Pair): boolean {
  if (region.contains(el)) return true;
  const answer = el.closest<HTMLElement>('[data-answer]');
  if (answer) return p.includes(answer.dataset.worldview ?? '');
  if (overview?.contains(el) || reading?.contains(el)) return false;
  const group = el.closest<HTMLElement>('.sources__group[data-ns]');
  if (group) return p.some((id) => answers.get(id)?.dataset.ns === group.dataset.ns);
  return true;
}

/** True when following a link to `target` needs Compare to change first (see resolveForMode). */
export function needsResolve(target: Element): boolean {
  return isComparing() && !region.contains(target) && (target.closest('[data-answer]') !== null || !shownInCompare(target, pair));
}

/**
 * Makes a fragment target visible in the current mode. A valid scholarly link outranks the
 * comparison: a target Compare is not showing (an unselected answer, its sources, the six-thesis
 * overview) switches the page to Explore, replacing the current entry's URL so it no longer claims
 * a comparison. A link to a selected answer's own anchor (#christianity, its heading or panel)
 * stays in Compare and lands on that answer's thesis. Returns the element to scroll to, and
 * whether the layout changed.
 */
export function resolveForMode(target: HTMLElement): { target: HTMLElement; changed: boolean } {
  if (!needsResolve(target)) return { target, changed: false };
  const answer = target.closest<HTMLElement>('[data-answer]');
  const side = answer ? pair.indexOf(answer.dataset.worldview ?? '') : -1;
  if (side >= 0) return { target: cell('glance', side) ?? region, changed: true };
  apply('explore', pair);
  replaceUrl(urlFor('explore', null, location.hash));
  announce('Explore: all six answers, to show the linked passage.');
  return { target, changed: true };
}

// --- Setup -----------------------------------------------------------------------------------

function updateBothButtons(): void {
  region.querySelectorAll<HTMLButtonElement>('[data-compare-both]').forEach((button) => {
    const list = compareDetails().filter((d) => d.closest(`[data-stage="${button.dataset.compareBoth}"]`));
    const allOpen = list.length > 0 && list.every((d) => d.open);
    button.textContent = allOpen ? 'Close both' : 'Open both';
    button.setAttribute('aria-label', `${allOpen ? 'Close' : 'Open'} both ${button.dataset.noun ?? 'sections'}`);
  });
}

/** Restores the plain Explore page if initialization failed part-way. Never throws. */
export function resetCompare(): void {
  try {
    if (moved.length) unmount();
    region?.setAttribute('hidden', '');
    overview?.removeAttribute('hidden');
    reading?.removeAttribute('hidden');
    document.querySelectorAll('.sources__group[hidden]').forEach((group) => group.removeAttribute('hidden'));
    if (page) page.dataset.mode = 'explore';
    suspendExploreState(false);
  } catch {
    // Nothing more can be done; the reader still has whatever is in the document.
  }
}

/**
 * Sets up Compare on a question page. `hashTarget` is the current fragment target, if any: a
 * comparison URL whose fragment points outside the comparison opens in Explore instead.
 */
export function initCompare(hashTarget: Element | null): void {
  const pageEl = document.querySelector<HTMLElement>('.question-page');
  const regionEl = document.querySelector<HTMLElement>('[data-compare]');
  if (!pageEl || !regionEl) return;
  page = pageEl;
  region = regionEl;
  overview = document.querySelector<HTMLElement>('#overview');
  reading = document.querySelector<HTMLElement>('.reading');
  selects = [...region.querySelectorAll<HTMLSelectElement>('[data-compare-select]')];
  for (const option of selects[0]?.options ?? []) {
    const answer = document.querySelector<HTMLElement>(`[data-answer][data-worldview="${CSS.escape(option.value)}"]`);
    if (!answer) continue;
    ids.push(option.value);
    names.set(option.value, option.text);
    answers.set(option.value, answer);
  }
  if (ids.length < 2) return;

  const parsed = parseQuery(location.search, ids);
  let next = parsed.mode;
  const first = parsed.pair ?? ([ids[0], ids[1]] as Pair);
  let canonical = parsed.canonical;
  if (next === 'compare' && hashTarget && !shownInCompare(hashTarget, first)) {
    next = 'explore';
    canonical = false;
  }
  ready = true;
  apply(next, first);
  if (next === 'compare') restoreLevels();
  if (!canonical) replaceUrl(urlFor(next, first, location.hash));
  if (next === 'compare' && parsed.repaired) {
    const notice = region.querySelector<HTMLElement>('[data-compare-notice]');
    if (notice) {
      notice.textContent = `This link did not name two different worldviews for this question, so the comparison shows ${names.get(first[0])} and ${names.get(first[1])}. Choose any two above.`;
      notice.hidden = false;
    }
  }

  selects.forEach((select, side) =>
    select.addEventListener('change', () => {
      const chosen = [...pair] as Pair;
      chosen[side] = select.value;
      // The other side's current choice is disabled, so this is a fallback: swap rather than duplicate.
      if (chosen[0] === chosen[1]) chosen[1 - side] = pair[side]!;
      navigate('compare', chosen);
    }),
  );
  region.querySelector('[data-compare-swap]')?.addEventListener('click', () => navigate('compare', [pair[1], pair[0]]));
  region.querySelectorAll<HTMLButtonElement>('[data-compare-both]').forEach((button) =>
    button.addEventListener('click', () => {
      const list = compareDetails().filter((d) => d.closest(`[data-stage="${button.dataset.compareBoth}"]`));
      const open = !list.every((d) => d.open);
      list.forEach((d) => (d.open = open));
      updateBothButtons();
    }),
  );
  let pending = false;
  region.addEventListener('toggle', () => {
    updateBothButtons();
    if (pending) return;
    pending = true;
    queueMicrotask(() => {
      pending = false;
      saveLevels();
    });
  }, true);

  const modes = document.querySelector<HTMLElement>('[data-modes]');
  modes?.querySelectorAll<HTMLAnchorElement>('[data-mode-link]').forEach((link) =>
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const target = link.dataset.modeLink === 'compare' ? 'compare' : 'explore';
      if (target === mode) return;
      navigate(target, pair);
      if (modes.getBoundingClientRect().top < 0) modes.scrollIntoView({ block: 'start' });
    }),
  );
  modes?.removeAttribute('hidden');
  window.addEventListener('popstate', onPopState);
  window.addEventListener('pagehide', saveLevels);
}
