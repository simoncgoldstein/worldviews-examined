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
import { initAnswerPanels, openAnswer } from './answer-panels';

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
  let opened = openAnswer(target);
  for (let details = target.closest('details'); details; details = details.parentElement?.closest('details') ?? null) {
    if (!details.open) {
      details.open = true;
      opened = true;
    }
  }
  return opened;
}

function revealHashTarget(): void {
  const target = targetOf(window.location.hash);
  // Layout shifts when something opens, so bring the target back into view.
  if (target && reveal(target)) target.scrollIntoView({ block: 'start' });
}

// Same-page fragment links: open the destination before the browser scrolls to it. When the link
// points at the current fragment no `hashchange` follows, so scroll explicitly in that case.
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = (event.target as Element | null)?.closest?.('a[href*="#"]');
  if (!(link instanceof HTMLAnchorElement) || link.origin !== location.origin || link.pathname !== location.pathname || !link.hash) return;
  const target = targetOf(link.hash);
  if (!target) return;
  const opened = reveal(target);
  if (link.hash === location.hash && opened) {
    event.preventDefault();
    target.scrollIntoView({ block: 'start' });
  }
});

try {
  // If the layout's safety timer already gave up on this script (a request that hung), the reader
  // has the full text in front of them: add the controls but do not collapse anything.
  const late = !document.documentElement.classList.contains('js');
  initAnswerPanels(targetOf(window.location.hash), late);
  document.documentElement.classList.add('js');
  // Hands panel visibility from the pre-script CSS rule (explore.css) to the `hidden` attributes.
  document.documentElement.classList.add('js-ready');
} catch (error) {
  // Never lock a reader out of the text: fall back to the no-JavaScript reading, every answer open.
  document.querySelectorAll('[data-answer-panel][hidden]').forEach((panel) => panel.removeAttribute('hidden'));
  document.documentElement.classList.remove('js');
  throw error;
}
revealHashTarget();
window.addEventListener('hashchange', revealHashTarget);
