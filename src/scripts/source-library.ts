// The Sources library (UI-4D, DESIGN-SPEC-V1.md §13.5): search, a worldview filter, a type filter
// and pages of 25 over the entries sources.astro rendered.
//
// The page renders every checked source once, in catalogue order. This module only sets `hidden` on
// those entries (and on the list when nothing matches); it never creates, copies or reorders one, so
// each `#source-<id>` exists exactly once whatever is shown. Search, worldview and type combine with
// AND; a worldview matches any of a source's registered tags. Pages follow the filtering.
//
// Fragments: reveal-hash.ts, the one fragment handler, calls showLibraryEntry() for every target, so
// a link to a source the library is hiding shows it on load, on `hashchange`, on Back/Forward and
// for a click on the current fragment. If the source matches the current search and filters, the
// library turns to its page; otherwise it clears them first, then turns to its page in the full
// list. The fragment is never rewritten. The legacy `#tradition-<worldview>` anchors of the old
// grouped page select that worldview.
//
// State: the query, filters and page are kept in history.state, not the URL, so a reload or a
// return from a citing question restores the reader's place; the source fragment stays the only
// shareable address. Every entry the library shows records its state from the start. A copy of the
// latest state in sessionStorage covers a Back/Forward load whose entry lost its state: in WebKit a
// question page's `pagehide` save (answer-panels.ts, modes.ts) is written to the entry being
// returned to, which then arrives with none.
//
// Without JavaScript, if this setup fails, or if the script arrived after the layout's safety timer
// had already shown the page, the controls stay hidden and every entry is shown. Print shows every
// entry whatever is selected (components.css).
import { PAGE_SIZE, matchesTerms, queryTerms } from '../lib/library';

interface LibraryState {
  q: string;
  wv: string;
  type: string;
  page: number;
}

interface Entry {
  el: HTMLElement;
  tags: string[];
  type: string;
  search: string;
}

const STATE_KEY = 'library';
const SESSION_KEY = 'worldviews-examined:library';
const EMPTY: LibraryState = { q: '', wv: '', type: '', page: 1 };

let ready = false;
let state: LibraryState = { ...EMPTY };
let entries: Entry[] = [];
let root: HTMLElement | null = null;
let controls: HTMLFormElement | null = null;
let query: HTMLInputElement | null = null;
let worldview: HTMLSelectElement | null = null;
let type: HTMLSelectElement | null = null;
let list: HTMLElement | null = null;
let count: HTMLElement | null = null;
let clear: HTMLButtonElement | null = null;
let live: HTMLElement | null = null;
let pages: HTMLElement | null = null;
let numbers: HTMLElement | null = null;
let prev: HTMLButtonElement | null = null;
let next: HTMLButtonElement | null = null;
let staticCount = '';
let saveTimer: ReturnType<typeof setTimeout> | undefined;
let redrawnByHistory = false;
let announceTimer: ReturnType<typeof setTimeout> | undefined;

const plural = (n: number, one: string) => `${n} ${n === 1 ? one : `${one}s`}`;
const filtered = (s: LibraryState) => Boolean(s.q.trim() || s.wv || s.type);

function matcher(s: LibraryState): (entry: Entry) => boolean {
  const terms = queryTerms(s.q);
  return (entry) => (!s.wv || entry.tags.includes(s.wv)) && (!s.type || entry.type === s.type) && matchesTerms(entry.search, terms);
}

/** Pages to offer: the first, the last, and the current one with its neighbours; null marks a gap. */
function pageWindow(current: number, total: number): (number | null)[] {
  const shown = [...new Set([1, current - 1, current, current + 1, total])].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const result: (number | null)[] = [];
  for (const p of shown) {
    const last = result[result.length - 1];
    if (typeof last === 'number' && p - last === 2) result.push(last + 1);
    else if (typeof last === 'number' && p - last > 2) result.push(null);
    result.push(p);
  }
  return result;
}

/** Shows the current page of matching entries and brings the count and controls up to date. */
function render(): { total: number; pageCount: number; first: number; last: number } {
  const matching = entries.filter(matcher(state));
  const total = matching.length;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  state.page = Math.min(Math.max(1, Math.floor(state.page) || 1), pageCount);
  const start = (state.page - 1) * PAGE_SIZE;
  const visible = new Set(matching.slice(start, start + PAGE_SIZE));
  for (const entry of entries) entry.el.hidden = !visible.has(entry);
  list!.hidden = total === 0;
  const first = total ? start + 1 : 0;
  const last = Math.min(start + PAGE_SIZE, total);

  count!.textContent =
    total === 0 ? 'No sources match these filters.' : pageCount > 1 ? `Showing ${first}–${last} of ${plural(total, 'source')}` : plural(total, 'source');
  clear!.hidden = !filtered(state);

  pages!.hidden = pageCount < 2;
  prev!.disabled = state.page <= 1;
  next!.disabled = state.page >= pageCount;
  numbers!.replaceChildren(
    ...pageWindow(state.page, pageCount).map((p) => {
      const item = document.createElement('li');
      if (p === null) {
        item.className = 'library__gap';
        item.setAttribute('aria-hidden', 'true');
        item.textContent = '…';
        return item;
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'library__page';
      button.dataset.page = String(p);
      button.textContent = String(p);
      button.setAttribute('aria-label', `Page ${p}`);
      if (p === state.page) button.setAttribute('aria-current', 'page');
      item.append(button);
      return item;
    }),
  );
  return { total, pageCount, first, last };
}

function syncControls(): void {
  query!.value = state.q;
  worldview!.value = state.wv;
  type!.value = state.type;
  // A stored value the page no longer offers falls back to All.
  if (worldview!.value !== state.wv) state.wv = worldview!.value = '';
  if (type!.value !== state.type) state.type = type!.value = '';
}

function write(): void {
  clearTimeout(saveTimer);
  saveTimer = undefined;
  try {
    history.replaceState({ ...history.state, [STATE_KEY]: { ...state } }, '');
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
  } catch {
    // History state is an enhancement only (and WebKit limits how often it may be written).
  }
}

function save(delay = 0): void {
  clearTimeout(saveTimer);
  if (delay) saveTimer = setTimeout(write, delay);
  else write();
}

/** A delayed save belongs to the entry being shown: write it before a link can leave that entry. */
function flushSave(): void {
  if (saveTimer !== undefined) write();
}

function savedState(raw: unknown): LibraryState | null {
  const saved = (raw as Record<string, unknown> | null)?.[STATE_KEY] as Partial<Record<keyof LibraryState, unknown>> | undefined;
  if (!saved || typeof saved !== 'object') return null;
  const str = (v: unknown) => (typeof v === 'string' ? v : '');
  return { q: str(saved.q), wv: str(saved.wv), type: str(saved.type), page: typeof saved.page === 'number' ? saved.page : 1 };
}

/**
 * The state to restore on load: the entry's own, or on a Back/Forward load whose entry has lost it,
 * the last one saved in this tab.
 */
function restoredState(): LibraryState | null {
  const own = savedState(history.state);
  if (own) return own;
  try {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (navigation?.type !== 'back_forward') return null;
    return savedState({ [STATE_KEY]: JSON.parse(sessionStorage.getItem(SESSION_KEY) ?? 'null') });
  } catch {
    return null;
  }
}

/** Announces the result of a search or filter change once the reader pauses. */
function announce(summary: { total: number; pageCount: number }): void {
  clearTimeout(announceTimer);
  announceTimer = setTimeout(() => {
    if (!live) return;
    live.textContent =
      summary.total === 0
        ? 'No sources match these filters.'
        : `${plural(summary.total, 'source')}${summary.pageCount > 1 ? `, page 1 of ${summary.pageCount}` : ''}`;
  }, 600);
}

/** A search or filter change: always back to the first page. */
function onFilter(): void {
  state = { q: query!.value, wv: worldview!.value, type: type!.value, page: 1 };
  announce(render());
  save(400);
}

/** Turns to `page`, then moves focus to the count, which reads the new range. */
function turnTo(page: number): void {
  state.page = page;
  render();
  save();
  const status = count!.parentElement!;
  if (status.getBoundingClientRect().top < 0) status.scrollIntoView({ block: 'start' });
  count!.focus({ preventScroll: true });
}

function apply(next: LibraryState): void {
  state = { ...next };
  syncControls();
  render();
}

/** A legacy `#tradition-<worldview>` URL from the old grouped page: show that worldview's sources. */
function applyTraditionHash(): boolean {
  const match = /^#tradition-([a-z0-9-]+)$/.exec(window.location.hash);
  if (!match || ![...worldview!.options].some((option) => option.value === match[1])) return false;
  apply({ ...EMPTY, wv: match[1]! });
  save();
  return true;
}

/** Runs a handler of the enhanced library; an error fails open (every entry shown) and is reported. */
function guarded<A extends unknown[]>(handler: (...args: A) => void): (...args: A) => void {
  return (...args) => {
    if (!ready) return;
    try {
      handler(...args);
    } catch (error) {
      resetSourceLibrary();
      throw error;
    }
  };
}

/** Fails open: every entry shown, the controls withdrawn. Never throws. */
export function resetSourceLibrary(): void {
  ready = false;
  try {
    // The entries first: whatever else fails, the bibliography is readable.
    document.querySelectorAll('.library__entry[hidden]').forEach((entry) => entry.removeAttribute('hidden'));
    list?.removeAttribute('hidden');
    controls?.setAttribute('hidden', '');
    pages?.setAttribute('hidden', '');
    clear?.setAttribute('hidden', '');
    if (count && staticCount) count.textContent = staticCount;
  } catch {
    // Nothing more can be done; the entries are rendered visible.
  }
}

/**
 * If `target` is a source the library is hiding, shows it: on its page under the current search and
 * filters if it matches them, otherwise on its page of the full list. Returns true if the list changed.
 */
export function showLibraryEntry(target: Element): boolean {
  if (!ready) return false;
  const el = target.closest<HTMLElement>('.library__entry');
  if (!el?.hidden) return false;
  try {
    const entry = entries.find((e) => e.el === el);
    if (!entry) return false;
    let next = { ...state };
    if (!matcher(next)(entry)) next = { ...EMPTY };
    const index = entries.filter(matcher(next)).indexOf(entry);
    next.page = Math.floor(index / PAGE_SIZE) + 1;
    apply(next);
    save();
  } catch (error) {
    // The full list is shown instead, so the target is visible either way.
    resetSourceLibrary();
    setTimeout(() => {
      throw error;
    });
  }
  return true;
}

/** True, once, if the last Back/Forward redrew the list (read by reveal-hash.ts's `popstate` listener). */
export function takeHistoryRedraw(): boolean {
  const redrawn = redrawnByHistory;
  redrawnByHistory = false;
  return redrawn;
}

/** Returns true if the library took over the list (which then no longer shows every entry). */
export function initSourceLibrary(late: boolean): boolean {
  root = document.querySelector<HTMLElement>('[data-library]');
  if (!root || late) return false;
  try {
    controls = root.querySelector<HTMLFormElement>('[data-library-controls]');
    query = root.querySelector<HTMLInputElement>('[data-library-query]');
    worldview = root.querySelector<HTMLSelectElement>('[data-library-worldview]');
    type = root.querySelector<HTMLSelectElement>('[data-library-type]');
    list = root.querySelector<HTMLElement>('[data-library-list]');
    count = root.querySelector<HTMLElement>('[data-library-count]');
    clear = root.querySelector<HTMLButtonElement>('[data-library-clear]');
    live = root.querySelector<HTMLElement>('[data-library-live]');
    pages = root.querySelector<HTMLElement>('[data-library-pages]');
    numbers = root.querySelector<HTMLElement>('[data-library-numbers]');
    prev = root.querySelector<HTMLButtonElement>('[data-library-prev]');
    next = root.querySelector<HTMLButtonElement>('[data-library-next]');
    if (!controls || !query || !worldview || !type || !list || !count || !clear || !pages || !numbers || !prev || !next) {
      throw new Error('Sources library markup is incomplete');
    }
    staticCount = count.textContent ?? '';
    entries = [...list.querySelectorAll<HTMLElement>(':scope > .library__entry')].map((el) => ({
      el,
      tags: (el.dataset.tags ?? '').split(' ').filter(Boolean),
      type: el.dataset.type ?? '',
      search: el.dataset.search ?? '',
    }));

    controls.addEventListener('submit', (event) => event.preventDefault());
    const filterChanged = guarded(onFilter);
    query.addEventListener('input', filterChanged);
    worldview.addEventListener('change', filterChanged);
    type.addEventListener('change', filterChanged);
    clear.addEventListener('click', guarded(() => {
      apply({ ...EMPTY });
      announce({ total: entries.length, pageCount: Math.ceil(entries.length / PAGE_SIZE) });
      save();
      query!.focus();
    }));
    prev.addEventListener('click', guarded(() => turnTo(state.page - 1)));
    next.addEventListener('click', guarded(() => turnTo(state.page + 1)));
    numbers.addEventListener('click', guarded((event: MouseEvent) => {
      const button = (event.target as Element | null)?.closest?.<HTMLButtonElement>('button[data-page]');
      if (button) turnTo(Number(button.dataset.page));
    }));
    // A link followed while a typed search is still waiting to be saved: save it to this entry first.
    document.addEventListener('click', guarded(flushSave), true);
    window.addEventListener('hashchange', guarded(() => {
      if (applyTraditionHash()) root!.scrollIntoView({ block: 'start' });
    }));
    // Back/Forward within the page: restore that entry's search, filters and page. reveal-hash.ts's
    // own listener runs after this one, so a source fragment is still shown if this state hides it.
    // A save still waiting belongs to the entry just left, so it is dropped rather than written here.
    window.addEventListener('popstate', guarded((event: PopStateEvent) => {
      clearTimeout(saveTimer);
      saveTimer = undefined;
      const saved = savedState(event.state);
      if (saved && JSON.stringify(saved) !== JSON.stringify(state)) {
        apply(saved);
        redrawnByHistory = true;
      }
    }));

    const restored = restoredState();
    apply(restored ?? { ...EMPTY });
    ready = true;
    controls.removeAttribute('hidden');
    // A legacy worldview anchor chooses the list only on arrival; a reload keeps the reader's place.
    if (!restored && applyTraditionHash()) root.scrollIntoView({ block: 'start' });
    else save();
    return true;
  } catch (error) {
    resetSourceLibrary();
    throw error;
  }
}
