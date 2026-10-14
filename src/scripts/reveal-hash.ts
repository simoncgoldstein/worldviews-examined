// Progressive enhancement: make every fragment target reachable, however deeply it is collapsed.
//
// Why: on a question page an answer can be closed (Explore mode, see answer-panels.ts), and its
// analytical sections and Deep dive are native <details>. A link (an overview card, a citation, a
// source's ↩ backlink, a shared section URL) can point inside any of them. Chrome opens closed
// <details> for a fragment on its own, but other browsers are not guaranteed to, and a closed
// answer panel is not a <details> at all. This opens the target's answer and every closed ancestor
// <details> (and the target itself when it is a <details> or its summary), so a reader never has
// to open earlier levels by hand to follow a valid link.
//
// This is the only fragment handler. It runs on initial load, on `hashchange` (including
// back/forward), and on clicks of same-page fragment links, so a link to the current fragment
// still reopens a section the reader has since closed. Citation -> source navigation remains plain
// anchor navigation and works without this script. `scrollIntoView` uses the default (instant)
// behavior, so it never animates and respects prefers-reduced-motion by construction.
//
// In Compare or Christian Case (modes.ts) a target the mode is not showing switches the page back
// to Explore first; a valid scholarly link always outranks the reading mode's layout. Likewise a
// target in a source group the Sources filter is hiding switches the filter to that group's
// worldview (source-filter.ts).
import { initAnswerPanels, openAnswer } from './answer-panels';
import { initModes, isRearranged, needsResolve, resetModes, resolveForMode } from './modes';
import { initSourceFilter, showSourceFor } from './source-filter';

function targetOf(hash: string): HTMLElement | null {
  let id = hash.slice(1);
  try {
    id = decodeURIComponent(id);
  } catch {
    // A malformed escape (e.g. "#%E0%A4%A") is simply not one of our ids; never let it stop setup.
  }
  return id ? document.getElementById(id) : null;
}

/** Opens everything hiding `target`. Returns true if the layout changed. */
function reveal(target: HTMLElement): boolean {
  let opened = showSourceFor(target);
  if (openAnswer(target)) opened = true;
  for (let details = target.closest('details'); details; details = details.parentElement?.closest('details') ?? null) {
    if (!details.open) {
      details.open = true;
      opened = true;
    }
  }
  return opened;
}

/** Never leave focus on something a mode change has just hidden: move it to the link's target. */
function settleFocus(target: HTMLElement): void {
  const active = document.activeElement;
  if (!(active instanceof HTMLElement) || active === document.body || active.getClientRects().length > 0) return;
  if (!target.matches('a[href], button, summary, select, [tabindex]')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

/** Returns the element scrolled to, if any. */
function revealHashTarget(force = false): HTMLElement | null {
  const found = targetOf(window.location.hash);
  if (!found) return null;
  const { target, changed } = resolveForMode(found);
  // Layout shifts when something opens, so bring the target back into view.
  if (reveal(target) || changed || force) {
    target.scrollIntoView({ block: 'start' });
    settleFocus(target);
    return target;
  }
  return null;
}

// Same-page fragment links: open the destination before the browser scrolls to it. When the link
// points at the current fragment no `hashchange` follows, so scroll explicitly in that case.
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = (event.target as Element | null)?.closest?.('a[href*="#"]');
  if (!(link instanceof HTMLAnchorElement) || link.origin !== location.origin || link.pathname !== location.pathname || !link.hash) return;
  const target = targetOf(link.hash);
  if (!target) return;
  // The mode must change first: let the fragment navigation happen, then `hashchange` resolves it.
  // A link to the current fragment fires no `hashchange`, so resolve it here instead.
  if (needsResolve(target)) {
    if (link.hash === location.hash) {
      event.preventDefault();
      revealHashTarget(true);
    }
    return;
  }
  const opened = reveal(target);
  if (link.hash === location.hash && opened) {
    event.preventDefault();
    target.scrollIntoView({ block: 'start' });
  }
});

// The Sources filter is independent of the reading modes: if it fails, it shows every group and
// withdraws its controls (source-filter.ts), and the rest of the page is set up regardless.
try {
  initSourceFilter();
} catch (error) {
  setTimeout(() => {
    throw error;
  });
}

try {
  // If the layout's safety timer already gave up on this script (a request that hung), the reader
  // has the full text in front of them: add the controls but do not collapse anything.
  const late = !document.documentElement.classList.contains('js');
  // The controls that appear above a late reader's position must not push the text they are reading:
  // the element they have focused, if it is on screen, or else whatever is a third of the way down.
  const focused = document.activeElement;
  const onScreen = focused instanceof HTMLElement && focused !== document.body && focused.getClientRects().length > 0 &&
    focused.getBoundingClientRect().top >= 0 && focused.getBoundingClientRect().top < window.innerHeight;
  const anchor = late ? (onScreen ? focused : document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 3)) : null;
  const anchorTop = anchor?.getBoundingClientRect().top;
  const hashTarget = targetOf(window.location.hash);
  initAnswerPanels(hashTarget, late);
  initModes(hashTarget, late);
  document.documentElement.classList.add('js');
  // Hands panel visibility from the pre-script CSS rule (explore.css) to the `hidden` attributes.
  document.documentElement.classList.add('js-ready');
  if (anchor && anchorTop !== undefined && !window.location.hash && anchor.getClientRects().length > 0) {
    window.scrollBy(0, anchor.getBoundingClientRect().top - anchorTop);
  }
} catch (error) {
  // Never lock a reader out of the text: fall back to the no-JavaScript reading, every answer open.
  resetModes();
  document.querySelectorAll('[data-answer-panel][hidden]').forEach((panel) => panel.removeAttribute('hidden'));
  document.documentElement.classList.remove('js');
  throw error;
}
document.documentElement.classList.remove('mode-pending');
// A mode URL's fragment lands inside the moved passage, wherever the browser first scrolled.
const landed = revealHashTarget(isRearranged());
// Web fonts that finish loading after this first scroll reflow the text above the target. The
// reading modes turn off the browser's scroll anchoring (modes.ts keeps positions itself), and
// WebKit has none, so nothing would compensate: land the target again once the fonts are ready,
// unless the reader has scrolled in the meantime.
if (landed && document.fonts && document.fonts.status !== 'loaded') {
  const y = window.scrollY;
  void document.fonts.ready.then(() => {
    if (window.scrollY === y && landed.isConnected && landed.getClientRects().length > 0) landed.scrollIntoView({ block: 'start' });
  });
}
window.addEventListener('hashchange', () => revealHashTarget());
