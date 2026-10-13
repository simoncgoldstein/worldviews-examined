// Reading modes for the question page: Explore (default), Compare (UI-2) and Christian Case (UI-3).
//
// Architecture: the page renders every answer once, in Explore order (AnswerPanel.astro), plus one
// empty, hidden scaffold per extra mode (CompareView.astro, ChristianCaseView.astro). A mode other
// than Explore *moves* the selected answers' existing elements into its scaffold, leaving a comment
// placeholder where each came from; leaving the mode, or changing the selection, puts every node
// back at its placeholder. No answer text, citation or id is ever copied, so ids stay unique,
// citation numbers and backlinks are unchanged, and listeners and <details> state travel with the
// nodes. This module is the one coordinator: exactly one mode places nodes at a time, and the
// layouts (compare.ts, christian-case.ts) only say where each part goes and keep their controls.
//
// URL state over the same static question page:
//   ?mode=compare&views=<first>,<second>      any two answers (UI2-COMPARE.md §10)
//   ?mode=case&opponent=<id>                   Christianity and one alternative (UI3-CHRISTIAN-CASE.md §9)
// A meaningful change (mode, pair, swap, opponent) pushes a history entry; disclosure clicks only
// update the current entry's state. Fragment links take precedence over the mode: a target the
// current mode is not showing switches the page to the mode that shows it (see resolveForMode).
import { suspendExploreState } from './answer-panels';
import { compareLayout } from './compare';
import { CHRISTIAN, caseLayout } from './christian-case';

export type Mode = 'explore' | 'compare' | 'case';
export type Pair = [string, string];
/** Both selections are remembered whichever mode is shown, so each mode returns as it was left. */
export interface Selection {
  pair: Pair;
  opponent: string;
}

/** One instruction to a layout: move `selector`'s matches in `worldview`'s answer into `cell`. */
export interface Placement {
  cell: HTMLElement | null;
  worldview: string;
  selector: string;
  /** Visible worldview label of the cell (default: the worldview's name). */
  label?: string;
  /** Visually hidden prefix for moved headings (default: "<name>: "). */
  prefix?: string;
}

export interface Layout {
  mode: Exclude<Mode, 'explore'>;
  region: HTMLElement;
  /** The worldviews whose answers (and source groups) this layout shows. */
  shown(sel: Selection): string[];
  placements(sel: Selection): Placement[];
  /** Brings the layout's own controls and interface text in line with `sel`. */
  sync(sel: Selection): void;
  /** Where a link to an unmoved part of a shown answer (its heading, panel, wrapper) lands. */
  landing(answer: HTMLElement, target: Element, sel: Selection): HTMLElement | null;
  describe(sel: Selection): string;
  /** Blocks kept at the same screen position when the selection changes. */
  anchors: string;
  /** A sticky control bar whose bottom edge is the top of the reading area, if any. */
  sticky?: string;
}

export interface LayoutContext {
  ids: readonly string[];
  name(id: string): string;
  selection(): Selection;
  navigate(next: Mode, sel: Selection): void;
  urlFor(next: Mode, sel: Selection): string;
}

type Notice = '' | 'views' | 'opponent' | 'christianity';
interface Parsed {
  mode: Mode;
  pair: Pair | null;
  opponent: string | null;
  /** True when the query string already says exactly what will be shown. */
  canonical: boolean;
  /** Why the named selection had to be replaced, if it was ('' when it was not). */
  notice: Notice;
}

const words = (values: string[]) => values.join(',').toLowerCase().split(/[\s,]+/).filter(Boolean);

/**
 * Reads the mode and selection from a query string. A missing or unsupported `mode` means Explore.
 * Compare: `views` is split on commas or spaces, lower-cased, unknown and repeated ids are dropped,
 * the first two remain, and any missing slot is filled from the worldview order. Christian Case:
 * the first valid non-Christian `opponent` is examined; with none, the first alternative. Parameters
 * that belong to another mode are dropped from the canonical URL.
 */
export function parseQuery(search: string, ids: readonly string[]): Parsed {
  const params = new URLSearchParams(search);
  const modes = params.getAll('mode');
  const views = params.getAll('views');
  const opponents = params.getAll('opponent');
  const requested = (modes[0] ?? '').trim().toLowerCase();
  const alternatives = ids.filter((id) => id !== CHRISTIAN);
  // Canonical means written exactly so, not merely decoding to it (e.g. "bud%64hism", "a%2Cb").
  const written = search.replace(/^\?/, '').split('&');
  const raw = (key: string, value: string) => written.includes(`${key}=${value}`);
  const exact = (m: string) => modes.length === 1 && raw('mode', m);

  if (requested === 'compare' && ids.length >= 2) {
    const named = words(views);
    const chosen: string[] = [];
    for (const id of named) if (ids.includes(id) && !chosen.includes(id)) chosen.push(id);
    const repaired = chosen.length < 2 || named.length !== 2;
    const picked = chosen.slice(0, 2);
    for (const id of ids) if (picked.length < 2 && !picked.includes(id)) picked.push(id);
    const pair: Pair = [picked[0] ?? '', picked[1] ?? ''];
    const canonical = exact('compare') && views.length === 1 && raw('views', pair.join(',')) && opponents.length === 0;
    return { mode: 'compare', pair, opponent: null, canonical, notice: repaired ? 'views' : '' };
  }
  if (requested === 'case' && ids.includes(CHRISTIAN) && alternatives.length > 0) {
    const named = [...new Set(words(opponents))];
    const valid = named.find((id) => alternatives.includes(id));
    const opponent = valid ?? alternatives[0]!;
    // A missing opponent simply opens on the first alternative; a named one that cannot be shown is explained.
    const notice: Notice =
      named.length === 0 || (named.length === 1 && valid) ? '' : named.length === 1 && named[0] === CHRISTIAN ? 'christianity' : 'opponent';
    const canonical = exact('case') && opponents.length === 1 && raw('opponent', opponent) && views.length === 0;
    return { mode: 'case', pair: null, opponent, canonical, notice };
  }
  return { mode: 'explore', pair: null, opponent: null, canonical: modes.length + views.length + opponents.length === 0, notice: '' };
}

/** The canonical URL for a mode and selection, keeping unrelated query parameters and the given hash. */
function urlFor(next: Mode, sel: Selection, hash = ''): string {
  const params = new URLSearchParams(location.search);
  for (const key of ['mode', 'views', 'opponent']) params.delete(key);
  const lead = next === 'compare' ? `mode=compare&views=${sel.pair.join(',')}` : next === 'case' ? `mode=case&opponent=${sel.opponent}` : '';
  const query = [lead, params.toString()].filter(Boolean).join('&');
  return `${location.pathname}${query ? `?${query}` : ''}${hash}`;
}

let page: HTMLElement;
let overview: HTMLElement | null;
let reading: HTMLElement | null;
let ids: string[] = [];
const answers = new Map<string, HTMLElement>();
const names = new Map<string, string>();
const layouts = new Map<Mode, Layout>();
let mode: Mode = 'explore';
let selection: Selection = { pair: ['', ''], opponent: '' };
let ready = false;
const moved: { node: Element; placeholder: Comment }[] = [];

const nameOf = (id: string) => names.get(id) ?? id;
const active = (): Layout | undefined => layouts.get(mode);
const copy = (sel: Selection): Selection => ({ pair: [...sel.pair] as Pair, opponent: sel.opponent });
const same = (a: Selection, b: Selection, m: Mode) =>
  m === 'compare' ? a.pair.join() === b.pair.join() : m === 'case' ? a.opponent === b.opponent : true;

export const isRearranged = (): boolean => ready && mode !== 'explore';

// --- Moving nodes ------------------------------------------------------------------------------

const HEADINGS = 'h3:not([data-mode-label]), .level__title';

function mount(layout: Layout, sel: Selection): void {
  for (const { cell, worldview, selector, label, prefix } of layout.placements(sel)) {
    const answer = answers.get(worldview);
    if (!answer || !cell) continue;
    const name = nameOf(worldview);
    cell.dataset.worldview = worldview;
    const labelEl = cell.querySelector('[data-mode-label]');
    if (labelEl) labelEl.textContent = label ?? name;
    for (const node of answer.querySelectorAll(selector)) {
      const placeholder = document.createComment('moved');
      node.before(placeholder);
      cell.append(node);
      moved.push({ node, placeholder });
      // Headings name their worldview for assistive technology, since the passage has left its answer.
      for (const heading of node.matches(HEADINGS) ? [node] : node.querySelectorAll(HEADINGS)) {
        const span = document.createElement('span');
        span.className = 'visually-hidden';
        span.dataset.modePrefix = '';
        span.textContent = prefix ?? `${name}: `;
        heading.prepend(span);
      }
    }
  }
}

/**
 * Puts every moved node back at its placeholder, last moved first. An entry is forgotten only once
 * its node is home, so if anything throws part-way, resetModes() can finish the job.
 */
function unmount(): void {
  document.querySelectorAll('[data-mode-prefix]').forEach((span) => span.remove());
  let failure: unknown = null;
  for (let i = moved.length - 1; i >= 0; i--) {
    const { node, placeholder } = moved[i]!;
    try {
      placeholder.replaceWith(node);
      moved.splice(i, 1);
    } catch (error) {
      failure ??= error;
    }
  }
  if (failure) throw failure;
}

const visible = (el: Element) => el.getClientRects().length > 0;

/** Runs a DOM rearrangement without losing keyboard focus (moving a node drops focus from it). */
function keepingFocus(change: () => void): void {
  const focused = document.activeElement;
  change();
  if (focused instanceof HTMLElement && focused !== document.activeElement && focused.isConnected && visible(focused)) {
    focused.focus({ preventScroll: true });
  }
}

/**
 * Shows `next` with `sel`. A rearrangement that fails part-way must never leave an answer split
 * between layouts: the page falls back to plain Explore with every node restored.
 */
function apply(next: Mode, sel: Selection): void {
  try {
    arrange(next, sel);
  } catch (error) {
    resetModes();
    throw error;
  }
}

/** Compare from Christian Case keeps the examined worldview where it can (UI3-CHRISTIAN-CASE.md §10). */
function compareTarget(): Selection {
  const { pair, opponent } = selection;
  if (mode !== 'case' || pair.includes(opponent) || !pair.includes(CHRISTIAN)) return copy(selection);
  return { pair: pair.map((id) => (id === CHRISTIAN ? id : opponent)) as Pair, opponent };
}

/** Christian Case from Compare examines the compared alternative, if there is one. */
function caseTarget(): Selection {
  const { pair, opponent } = selection;
  const candidates = pair.filter((id) => id !== CHRISTIAN && answers.has(id));
  if (mode !== 'compare' || candidates.length === 0 || candidates.includes(opponent)) return copy(selection);
  return { pair: [...pair] as Pair, opponent: candidates[0]! };
}

/** The selection a link to `target` mode opens with. */
function targetSelection(link: HTMLAnchorElement, target: Mode): Selection {
  if (target === 'compare' && link.hasAttribute('data-mode-christian-pair')) {
    return { pair: [CHRISTIAN, selection.opponent], opponent: selection.opponent };
  }
  return target === 'compare' ? compareTarget() : target === 'case' ? caseTarget() : copy(selection);
}

const modeOf = (value: string | undefined): Mode => (value === 'compare' || value === 'case' ? value : 'explore');

function arrange(next: Mode, sel: Selection): void {
  keepingFocus(() => {
    if (moved.length) unmount();
    mode = next;
    selection = copy(sel);
    const layout = active();
    if (layout) mount(layout, sel);
    page.dataset.mode = next;
    for (const each of layouts.values()) each.region.hidden = each !== layout;
    if (overview) overview.hidden = !!layout;
    if (reading) reading.hidden = !!layout;
    suspendExploreState(!!layout);

    const shown = layout ? layout.shown(sel) : [];
    const shownNs = shown.map((id) => answers.get(id)?.dataset.ns);
    document.querySelectorAll<HTMLElement>('.sources__group[data-ns]').forEach((group) => {
      group.hidden = !!layout && !shownNs.includes(group.dataset.ns);
    });
    const note = document.querySelector<HTMLElement>('[data-mode-sources-note]');
    if (note) {
      note.hidden = !layout;
      note.textContent = layout ? `Showing the sources for ${shown.map(nameOf).join(' and ')}. The other answers’ sources are listed in Explore.` : '';
    }
    for (const each of layouts.values()) each.sync(sel);

    document.querySelectorAll<HTMLAnchorElement>('a[data-mode-link]').forEach((link) => {
      const target = modeOf(link.dataset.modeLink);
      if (link.closest('[data-modes]')) {
        if (target === next) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      }
      link.href = urlFor(target, targetSelection(link, target));
    });
    // Carry the mode to related questions: their pages read the same query parameters.
    document.querySelectorAll<HTMLAnchorElement>('a[data-related-link]').forEach((link) => {
      link.dataset.href ??= link.getAttribute('href') ?? '';
      const query = urlFor(next, sel).split('?')[1];
      link.href = layout && query ? `${link.dataset.href}?${query}` : link.dataset.href;
    });
  });
}

// --- History ---------------------------------------------------------------------------------

/** The moved <details> of the current layout (Examine and Deep dive disclosures). */
const modeDetails = () => [...(active()?.region.querySelectorAll<HTMLDetailsElement>('[data-cell] > details') ?? [])];

function saveLevels(): void {
  if (!isRearranged()) return;
  const levels = modeDetails().filter((d) => d.open).map((d) => d.querySelector(':scope > summary')?.id ?? '');
  try {
    history.replaceState({ ...history.state, [mode]: { levels } }, '');
  } catch {
    // History state is an enhancement only.
  }
}

function restoreLevels(): void {
  const levels = (history.state as Record<string, { levels?: unknown } | undefined> | null)?.[mode]?.levels;
  if (!Array.isArray(levels)) return;
  for (const details of modeDetails()) details.open = levels.includes(details.querySelector(':scope > summary')?.id);
}

/** Keeps a reading position: the first block still on screen stays where it was. */
function anchored(change: () => void): void {
  const layout = active();
  if (!layout) return change();
  const sticky = layout.sticky ? layout.region.querySelector(layout.sticky) : null;
  const top = sticky && getComputedStyle(sticky).position === 'sticky' ? sticky.getBoundingClientRect().bottom : 0;
  const block = [...layout.region.querySelectorAll(layout.anchors)].find((b) => b.getBoundingClientRect().bottom > top);
  const before = block?.getBoundingClientRect().top;
  change();
  if (block && before !== undefined && layout.region.getBoundingClientRect().top < top) {
    window.scrollBy(0, block.getBoundingClientRect().top - before);
  }
}

function announce(message: string): void {
  const el = document.querySelector<HTMLElement>('[data-mode-status]');
  if (!el) return;
  el.textContent = '';
  requestAnimationFrame(() => (el.textContent = message));
}

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

function hideNotices(): void {
  document.querySelectorAll<HTMLElement>('[data-mode-notice]').forEach((notice) => (notice.hidden = true));
}

/** A reader's choice of mode or selection: a new history entry, and the URL that represents it. */
function navigate(next: Mode, sel: Selection): void {
  if (!ready) return;
  hideNotices();
  saveLevels();
  const was = mode;
  const state = { ...history.state };
  delete state.compare;
  delete state.case;
  // Browsers rate-limit history changes. If the URL cannot follow, keep the current view and
  // controls, so the page never shows a different selection from the one its URL names.
  if (!record(state, urlFor(next, sel))) {
    apply(mode, selection);
    return;
  }
  if (next === was) anchored(() => apply(next, sel));
  else apply(next, sel);
  saveLevels();
  const layout = active();
  announce(layout ? layout.describe(sel) : was !== 'explore' ? 'Explore: all six answers.' : '');
}

function onPopState(): void {
  const parsed = parseQuery(location.search, ids);
  // The modes were withdrawn after a failure: an older entry's mode URL now shows Explore.
  if (!ready) {
    if (parsed.mode !== 'explore' || !parsed.canonical) replaceUrl(urlFor('explore', selection, location.hash));
    return;
  }
  const next: Selection = { pair: parsed.pair ?? selection.pair, opponent: parsed.opponent ?? selection.opponent };
  if (parsed.mode !== mode || !same(next, selection, parsed.mode)) {
    // Firefox restores the entry's scroll position before this event; its scroll anchoring would
    // then shift that position while the layout changes. Keep it (other browsers restore later).
    const y = window.scrollY;
    apply(parsed.mode, next);
    restoreLevels();
    window.scrollTo(window.scrollX, y);
  }
  if (!parsed.canonical) replaceUrl(urlFor(parsed.mode, next, location.hash));
}

// --- Fragments -------------------------------------------------------------------------------

/** The mode whose scaffold contains `el`, if any. */
const ownerOf = (el: Element): Layout | undefined => [...layouts.values()].find((layout) => layout.region.contains(el));

/** Whether a fragment target outside every scaffold can be shown in mode `m` with `sel`. */
function shownIn(el: Element, m: Mode, sel: Selection): boolean {
  const layout = layouts.get(m);
  if (!layout) return true;
  const answer = el.closest<HTMLElement>('[data-answer]');
  if (answer) return layout.shown(sel).includes(answer.dataset.worldview ?? '');
  if (overview?.contains(el) || reading?.contains(el)) return false;
  const group = el.closest<HTMLElement>('.sources__group[data-ns]');
  if (group) return layout.shown(sel).some((id) => answers.get(id)?.dataset.ns === group.dataset.ns);
  return true;
}

/** True when following a link to `target` needs the layout to change first (see resolveForMode). */
export function needsResolve(target: Element): boolean {
  if (!ready) return false;
  const owner = ownerOf(target);
  if (owner) return owner.mode !== mode;
  return mode !== 'explore' && (target.closest('[data-answer]') !== null || !shownIn(target, mode, selection));
}

/**
 * Makes a fragment target visible. A valid scholarly link outranks the reading mode: a target the
 * current mode is not showing (an unselected answer, its sources, the six-thesis overview) switches
 * the page to Explore, replacing the current entry's URL so it no longer claims a mode it does not
 * show; a link into another mode's scaffold switches to that mode. A link to a shown answer's own
 * anchor (#christianity, its heading or panel) stays and lands on that answer's place in the
 * layout. Returns the element to scroll to, and whether the layout changed.
 */
export function resolveForMode(target: HTMLElement): { target: HTMLElement; changed: boolean } {
  if (!needsResolve(target)) return { target, changed: false };
  const owner = ownerOf(target);
  const layout = active();
  const answer = target.closest<HTMLElement>('[data-answer]');
  if (!owner && layout && answer && layout.shown(selection).includes(answer.dataset.worldview ?? '')) {
    return { target: layout.landing(answer, target, selection) ?? layout.region, changed: true };
  }
  const next: Mode = owner ? owner.mode : 'explore';
  apply(next, selection);
  restoreLevels();
  replaceUrl(urlFor(next, selection, location.hash));
  announce(owner ? owner.describe(selection) : 'Explore: all six answers, to show the linked passage.');
  return { target, changed: true };
}

// --- Setup -----------------------------------------------------------------------------------

/**
 * Restores the plain Explore page after a failure (during setup, a change of selection or the
 * return to Explore) and withdraws the reading modes, whose controls can no longer be trusted.
 * Never throws.
 */
export function resetModes(): void {
  ready = false;
  mode = 'explore';
  const steps = [
    () => moved.length && unmount(),
    () => moved.length && unmount(), // a second pass for any node the first could not place
    () => document.querySelectorAll('[data-mode-region]').forEach((region) => region.setAttribute('hidden', '')),
    () => overview?.removeAttribute('hidden'),
    () => reading?.removeAttribute('hidden'),
    () => document.querySelectorAll('.sources__group[hidden]').forEach((group) => group.removeAttribute('hidden')),
    () => document.querySelector('[data-mode-sources-note]')?.setAttribute('hidden', ''),
    () => document.querySelector('[data-modes]')?.setAttribute('hidden', ''),
    () => page && (page.dataset.mode = 'explore'),
    () => suspendExploreState(false),
    // The address bar must not go on claiming a mode the page no longer shows.
    () => /(?:^|[?&])(?:mode|views|opponent)=/i.test(location.search) && replaceUrl(urlFor('explore', selection, location.hash)),
  ];
  for (const step of steps) {
    try {
      step();
    } catch {
      // Carry on: each remaining step still makes the page more readable.
    }
  }
}

const NOTICES: Record<Exclude<Notice, ''>, (sel: Selection) => string> = {
  views: (sel) =>
    `This link did not name two different worldviews for this question, so the comparison shows ${nameOf(sel.pair[0])} and ${nameOf(sel.pair[1])}. Choose any two above.`,
  opponent: (sel) => `This link did not name one other worldview to examine, so Christian Case shows ${nameOf(sel.opponent)}. Choose another above.`,
  christianity: (sel) =>
    `Christian Case examines another worldview from the Reformed Christian standpoint, so it shows ${nameOf(sel.opponent)}. Choose another above.`,
};

/**
 * Sets up the reading modes on a question page. `hashTarget` is the current fragment target, if
 * any: a mode URL whose fragment points outside what the mode shows opens in Explore instead.
 * `late` means the layout's fallback has already shown all six answers because this script was slow.
 */
export function initModes(hashTarget: Element | null, late = false): void {
  const pageEl = document.querySelector<HTMLElement>('.question-page');
  if (!pageEl) return;
  page = pageEl;
  overview = document.querySelector<HTMLElement>('#overview');
  reading = document.querySelector<HTMLElement>('.reading');
  for (const answer of document.querySelectorAll<HTMLElement>('[data-answer]')) {
    const id = answer.dataset.worldview;
    if (!id) continue;
    ids.push(id);
    names.set(id, answer.querySelector('[data-answer-name]')?.textContent?.trim() || id);
    answers.set(id, answer);
  }
  if (ids.length < 2) return;

  const context: LayoutContext = { ids, name: nameOf, selection: () => copy(selection), navigate, urlFor };
  for (const layout of [compareLayout(context), caseLayout(context)]) if (layout) layouts.set(layout.mode, layout);
  if (layouts.size === 0) return;

  const parsed = parseQuery(location.search, ids);
  const alternatives = ids.filter((id) => id !== CHRISTIAN);
  selection = {
    pair: parsed.pair ?? [ids[0]!, ids[1]!],
    opponent: parsed.opponent ?? alternatives[0] ?? '',
  };
  let next: Mode = layouts.has(parsed.mode) ? parsed.mode : 'explore';
  let canonical = parsed.canonical && next === parsed.mode;
  if (hashTarget) {
    const owner = ownerOf(hashTarget);
    const target: Mode = owner ? owner.mode : shownIn(hashTarget, next, selection) ? next : 'explore';
    if (target !== next) {
      next = target;
      canonical = false;
    }
  }
  // A late script never pulls text away from someone already reading the fallback (scrolled, or
  // focused on a link): the page stays in Explore and the mode links offer the requested selection.
  const focused = document.activeElement;
  if (next !== 'explore' && late && (window.scrollY > 0 || (focused && focused !== document.body && focused !== document.documentElement))) {
    next = 'explore';
    canonical = false;
  }
  ready = true;
  apply(next, selection);
  restoreLevels();
  if (!canonical) replaceUrl(urlFor(next, selection, location.hash));
  if (parsed.notice && next === parsed.mode) {
    const notice = active()?.region.querySelector<HTMLElement>('[data-mode-notice]');
    if (notice) {
      notice.textContent = NOTICES[parsed.notice](selection);
      notice.hidden = false;
    }
  }

  // Disclosure changes are saved in the current history entry, never as new entries.
  let pending = false;
  for (const layout of layouts.values()) {
    layout.region.addEventListener('toggle', () => {
      if (pending) return;
      pending = true;
      queueMicrotask(() => {
        pending = false;
        saveLevels();
      });
    }, true);
  }

  const modes = document.querySelector<HTMLElement>('[data-modes]');
  document.querySelectorAll<HTMLAnchorElement>('a[data-mode-link]').forEach((link) =>
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const target = modeOf(link.dataset.modeLink);
      const sel = targetSelection(link, target);
      if (target === mode && same(sel, selection, target)) return;
      const fromRegion = !link.closest('[data-modes]');
      navigate(target, sel);
      if (!modes) return;
      if (modes.getBoundingClientRect().top < 0 || fromRegion) modes.scrollIntoView({ block: 'start' });
      // A link inside a scaffold has just been hidden with it: focus the mode now shown.
      if (fromRegion && !visible(link)) modes.querySelector<HTMLElement>(`[data-mode-link="${mode}"]`)?.focus({ preventScroll: true });
    }),
  );
  modes?.removeAttribute('hidden');
  window.addEventListener('popstate', onPopState);
  window.addEventListener('pagehide', saveLevels);
}
