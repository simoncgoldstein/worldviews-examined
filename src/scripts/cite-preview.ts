// Progressive enhancement: a numbered citation opens a compact preview of its source beside the
// text, instead of jumping to the Sources section (docs/DESIGN-SPEC-V1.md §13.2,
// docs/ui/UI4A-CITATION-PREVIEWS.md).
//
// The markers stay real links to their full references (`#<ns>-src-<n>`): without JavaScript, in a
// browser without the Popover API, or for a modified click (new tab, new window), they navigate as
// they always have. An ordinary activation is taken over here and changes neither the URL nor the
// history.
//
// One preview element serves the whole page. It holds no bibliographic data of its own: each time
// it opens it copies the formatted citation from the Sources section. A source's first entry in an
// answer's group is always the full form (SourceList.astro), so a later, shortened entry borrows the
// full form from that entry; the locator and any note are always the cited entry's own. The preview
// is a non-modal dialog in the top layer, positioned against the marker wherever a reading mode
// has moved it, so no ancestor clips it and no sticky label covers it.
import { symbols } from '../lib/labels';

const MARKER = 'sup.cite > a[href^="#"]';
const GAP = 6; // px between the marker and the preview
const EDGE = 16; // px kept clear of the viewport's sides

let preview: HTMLElement;
let heading: HTMLElement;
let body: HTMLElement;
let full: HTMLAnchorElement;
let marker: HTMLAnchorElement | null = null;
/** True between a pointer press and its release: presses are handled by the pointerdown listener. */
let pressing = false;

function entryFor(link: HTMLAnchorElement): HTMLElement | null {
  let id = link.hash.slice(1);
  try {
    id = decodeURIComponent(id);
  } catch {
    return null;
  }
  const entry = document.getElementById(id);
  return entry?.matches('li.source-entry[data-source]') ? entry : null;
}

function build(): void {
  preview = document.createElement('div');
  preview.className = 'cite-preview';
  preview.id = 'cite-preview';
  preview.setAttribute('popover', 'manual');
  preview.setAttribute('role', 'dialog');
  preview.setAttribute('aria-labelledby', 'cite-preview-heading');
  preview.setAttribute('aria-describedby', 'cite-preview-body');
  preview.tabIndex = -1;
  preview.innerHTML = `
    <div class="cite-preview__head">
      <p class="cite-preview__heading" id="cite-preview-heading"></p>
      <button type="button" class="cite-preview__close" data-cite-close>Close</button>
    </div>
    <div class="cite-preview__body" id="cite-preview-body"></div>
    <p class="cite-preview__more"><a class="cite-preview__full" href="#">View full reference</a></p>`;
  heading = preview.querySelector('.cite-preview__heading')!;
  body = preview.querySelector('.cite-preview__body')!;
  full = preview.querySelector('.cite-preview__full')!;
  document.body.append(preview);

  preview.querySelector('[data-cite-close]')!.addEventListener('click', () => close(true));
  // The link is an ordinary fragment link: the shared handler (reveal-hash.ts) reveals the entry.
  full.addEventListener('click', () => close(false));
  preview.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close(true);
    } else if (event.key === 'Tab') {
      // Close, the source's link, View full reference, in that order in every browser (WebKit would
      // otherwise skip the links and leave the page). Not a trap: tabbing past either end closes the
      // preview and returns to the marker, so reading resumes from there.
      const items = [...preview.querySelectorAll<HTMLElement>('a[href], button')];
      const at = items.indexOf(document.activeElement as HTMLElement);
      const next = event.shiftKey ? (at < 0 ? -1 : at - 1) : at + 1;
      event.preventDefault();
      if (next < 0 || next >= items.length) close(true);
      else items[next]!.focus();
    }
  });
  // Focus moved by the keyboard to anything else on the page (not to another window) closes the
  // preview. A press is left to the pointerdown listener: WebKit moves focus on mousedown to the
  // nearest focusable ancestor, even when the press is on the marker that toggles the preview.
  preview.addEventListener('focusout', (event) => {
    const next = event.relatedTarget;
    if (!pressing && next instanceof Node && !preview.contains(next) && next !== marker) close(false);
  });
}

function fill(link: HTMLAnchorElement, entry: HTMLElement): void {
  const group = entry.closest('.sources__group');
  const source = entry.dataset.source;
  const first = [...(group?.querySelectorAll<HTMLElement>('li.source-entry[data-source]') ?? [])].find(
    (li) => li.dataset.source === source,
  );
  const citation = (first ?? entry).querySelector('.source-citation');
  const locator = entry.querySelector('.source-entry__locator')?.textContent?.replace(/^,\s*/, '') ?? '';
  const note = entry.querySelector('.source-entry__note')?.textContent?.replace(/^\s*\S\s*/, '') ?? '';
  const answer = group?.querySelector('.sources__heading')?.textContent?.trim() ?? '';

  heading.textContent = `Source ${link.textContent?.trim() ?? ''}`;
  if (answer) {
    const span = document.createElement('span');
    span.className = 'cite-preview__answer';
    span.textContent = ` ${symbols.separator} ${answer}`;
    heading.append(span);
  }
  const cited = document.createElement('p');
  cited.className = 'cite-preview__citation';
  if (citation) cited.append(citation.cloneNode(true));
  const at = document.createElement('p');
  at.className = 'cite-preview__locator';
  const label = document.createElement('span');
  label.className = 'cite-preview__label';
  label.textContent = 'Cited at ';
  at.append(label, locator);
  body.replaceChildren(cited, at);
  if (note) {
    const p = document.createElement('p');
    p.className = 'cite-preview__note';
    p.textContent = note;
    body.append(p);
  }
  full.href = link.hash;
}

/** Below the marker if it fits, else above, else on the roomier side with the preview scrolling. */
function place(): void {
  if (!marker) return;
  const rects = marker.getClientRects();
  if (!marker.isConnected || rects.length === 0) return close(false);
  const rect = rects[0]!;
  const viewport = document.documentElement.clientWidth;
  const height = window.innerHeight;
  preview.style.maxHeight = '';
  preview.style.width = '';
  let width = preview.offsetWidth;
  if (width > viewport - 2 * EDGE) {
    width = viewport - 2 * EDGE;
    preview.style.width = `${width}px`;
  }
  const left = Math.max(EDGE, Math.min(rect.left - 24, viewport - width - EDGE));
  const below = height - rect.bottom - GAP - EDGE;
  const above = rect.top - GAP - EDGE;
  const tall = preview.offsetHeight;
  let top: number;
  if (tall <= below || (tall > above && below >= above)) {
    top = rect.bottom + GAP;
    if (tall > below) preview.style.maxHeight = `${Math.max(below, 128)}px`;
  } else {
    if (tall > above) preview.style.maxHeight = `${above}px`;
    top = rect.top - GAP - Math.min(tall, above);
  }
  preview.style.left = `${left + window.scrollX}px`;
  preview.style.top = `${top + window.scrollY}px`;
}

function open(link: HTMLAnchorElement, entry: HTMLElement): void {
  if (!preview) build();
  if (marker) close(false);
  fill(link, entry);
  marker = link;
  link.setAttribute('aria-expanded', 'true');
  link.setAttribute('aria-controls', preview.id);
  preview.showPopover();
  place();
  preview.focus({ preventScroll: true });
}

function close(restoreFocus: boolean): void {
  if (!marker) return;
  const was = marker;
  marker = null;
  was.removeAttribute('aria-expanded');
  was.removeAttribute('aria-controls');
  if (preview.matches(':popover-open')) preview.hidePopover();
  body.replaceChildren();
  if (restoreFocus) was.focus({ preventScroll: true });
}

if (typeof HTMLElement.prototype.showPopover === 'function' && document.querySelector(MARKER)) {
  for (const link of document.querySelectorAll(MARKER)) link.setAttribute('aria-haspopup', 'dialog');

  // Capture, so the shared fragment handler never sees a click that opens a preview.
  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.(MARKER);
      if (!(link instanceof HTMLAnchorElement)) return;
      const entry = entryFor(link);
      if (!entry) return;
      event.preventDefault();
      if (link === marker) close(true);
      else open(link, entry);
    },
    true,
  );
  // A press anywhere outside the preview and its marker dismisses it; focus stays where it lands.
  document.addEventListener(
    'pointerdown',
    (event) => {
      pressing = true;
      const target = event.target as Node | null;
      if (marker && target && !preview.contains(target) && !marker.contains(target)) close(false);
    },
    true,
  );
  const released = () => (pressing = false);
  window.addEventListener('pointerup', released, true);
  window.addEventListener('pointercancel', released, true);
  // Any navigation within the page (Back/Forward, a reading mode change, a fragment) ends it.
  window.addEventListener('popstate', () => close(false));
  window.addEventListener('hashchange', () => close(false));
  window.addEventListener('resize', place);
  window.addEventListener('pagehide', () => close(false));
}
