// The question page's Sources filter: All, or one answer's group of sources (UI-4C, DESIGN-SPEC-V1.md §13.4).
//
// Ownership: this module is the only code that hides or shows a `.sources__group`. The reading
// modes (modes.ts) never do, so All means every group in Explore, Compare and Christian Case alike,
// and changing the mode or its selection never changes the filter. Filtering only sets `hidden` on
// the existing groups: no entry is copied, renumbered or reordered, and every id, `data-source`
// and backlink stays where the page rendered it.
//
// Fragments: a link to anything inside a filtered-out group (a citation marker's entry, a group
// heading, a preview's "View full reference") switches the filter to that group's worldview before
// the browser navigates. reveal-hash.ts, the one fragment handler, calls showSourceFor() as part of
// revealing any target, so this holds on load, on `hashchange`, on Back/Forward and for a click on
// the current fragment.
//
// Without JavaScript, or if this setup fails, the controls stay hidden and every group is shown.
// Print shows every group whatever is selected (components.css).

let controls: HTMLElement | null = null;
let groups: HTMLElement[] = [];
let buttons: HTMLButtonElement[] = [];
let ready = false;

/**
 * Shows `value`'s group, or every group for 'all', and marks the matching control pressed. An option
 * that matches no group shows every group rather than none.
 */
function select(value: string): void {
  if (!groups.some((group) => group.dataset.worldview === value)) value = 'all';
  for (const group of groups) group.hidden = value !== 'all' && group.dataset.worldview !== value;
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === value));
}

/** Fails open: every group shown, the controls withdrawn. Never throws. */
export function resetSourceFilter(): void {
  ready = false;
  try {
    controls?.setAttribute('hidden', '');
    document.querySelectorAll('.sources__group[hidden]').forEach((group) => group.removeAttribute('hidden'));
  } catch {
    // Nothing more can be done; the groups are rendered visible.
  }
}

/**
 * If `target` is inside a group the filter is hiding, selects that group's worldview so the target
 * can be shown. Returns true if the bibliography changed.
 */
export function showSourceFor(target: Element): boolean {
  if (!ready) return false;
  const group = target.closest<HTMLElement>('.sources__group');
  if (!group?.hidden) return false;
  const worldview = group.dataset.worldview ?? '';
  if (buttons.some((button) => button.dataset.filter === worldview)) select(worldview);
  else select('all');
  return true;
}

export function initSourceFilter(): void {
  try {
    controls = document.querySelector<HTMLElement>('[data-source-filter]');
    if (!controls) return;
    groups = [...document.querySelectorAll<HTMLElement>('.page-sources .sources__group[data-worldview]')];
    buttons = [...controls.querySelectorAll<HTMLButtonElement>('button[data-filter]')];
    controls.addEventListener('click', (event) => {
      const button = (event.target as Element | null)?.closest?.('button[data-filter]');
      if (!(button instanceof HTMLButtonElement) || !ready) return;
      select(button.dataset.filter ?? 'all');
    });
    select('all');
    ready = true;
    controls.removeAttribute('hidden');
  } catch (error) {
    resetSourceFilter();
    throw error;
  }
}
