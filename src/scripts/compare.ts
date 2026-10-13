// Compare mode (UI-2): any two of the six answers, section by section, in paired rows.
//
// This module only describes the layout: which part of each selected answer goes into which row
// cell of CompareView.astro, and how the selectors, Swap sides and Open both controls behave. The
// shared coordinator (modes.ts) moves the nodes, restores them, keeps the URL and history, and
// resolves fragments. See docs/ui/UI2-COMPARE.md.
import type { Layout, LayoutContext, Pair, Placement } from './modes';

// The parts of an answer that each row receives, by semantic identity (section slugs from
// src/lib/answer-sections.ts, level names from the remark plugin), never by text or position.
// At a glance is the thesis alone: the scope and tradition notes stay in the answer's frontmatter
// and are not part of the public reading flow (PR #28), in Explore or in Compare.
const ROWS: [row: string, selector: string][] = [
  ['glance', ':scope > .answer__panel > .answer__inner > .answer__thesis'],
  ['view', ':scope .answer__body > :is([data-section="the-view"], [data-section="the-christian-view"])'],
  ['strengths', ':scope .answer__body > [data-section="what-this-explains-well"]'],
  ['examine', ':scope .answer__body > [data-level="examine"]'],
  ['study', ':scope .answer__body > [data-level="study"]'],
  // Anything else in the body (the validator allows nothing else) is kept with the footer, never lost.
  ['footer', ':scope .answer__body > *, :scope > .answer__panel > .answer__inner > .answer__footer'],
];

export function compareLayout(ctx: LayoutContext): Layout | null {
  const found = document.querySelector<HTMLElement>('[data-compare]');
  if (!found || ctx.ids.length < 2) return null;
  const region = found;
  const selects = [...region.querySelectorAll<HTMLSelectElement>('[data-compare-select]')];
  const cell = (row: string, side: number) =>
    region.querySelector<HTMLElement>(`[data-row="${row}"] > .compare__cell[data-side="${side}"]`);
  const details = () => [...region.querySelectorAll<HTMLDetailsElement>('.compare__cell > details')];

  function updateBothButtons(): void {
    region.querySelectorAll<HTMLButtonElement>('[data-compare-both]').forEach((button) => {
      const list = details().filter((d) => d.closest(`[data-stage="${button.dataset.compareBoth}"]`));
      const allOpen = list.length > 0 && list.every((d) => d.open);
      button.textContent = allOpen ? 'Close both' : 'Open both';
      button.setAttribute('aria-label', `${allOpen ? 'Close' : 'Open'} both ${button.dataset.noun ?? 'sections'}`);
    });
  }

  selects.forEach((select, side) =>
    select.addEventListener('change', () => {
      const current = ctx.selection();
      const chosen = [...current.pair] as Pair;
      chosen[side] = select.value;
      // The other side's current choice is disabled, so this is a fallback: swap rather than duplicate.
      if (chosen[0] === chosen[1]) chosen[1 - side] = current.pair[side]!;
      ctx.navigate('compare', { ...current, pair: chosen });
    }),
  );
  region.querySelector('[data-compare-swap]')?.addEventListener('click', () => {
    const current = ctx.selection();
    ctx.navigate('compare', { ...current, pair: [current.pair[1], current.pair[0]] });
  });
  region.querySelectorAll<HTMLButtonElement>('[data-compare-both]').forEach((button) =>
    button.addEventListener('click', () => {
      const list = details().filter((d) => d.closest(`[data-stage="${button.dataset.compareBoth}"]`));
      const open = !list.every((d) => d.open);
      list.forEach((d) => (d.open = open));
      updateBothButtons();
    }),
  );
  region.addEventListener('toggle', updateBothButtons, true);

  return {
    mode: 'compare',
    region,
    shown: (sel) => [...sel.pair],
    placements: (sel) =>
      sel.pair.flatMap((worldview, side) => ROWS.map(([row, selector]): Placement => ({ cell: cell(row, side), worldview, selector }))),
    sync(sel) {
      const both = `${ctx.name(sel.pair[0])} and ${ctx.name(sel.pair[1])}`;
      const title = region.querySelector('[data-compare-print-title]');
      if (title) title.textContent = `Compared: ${both}`;
      selects.forEach((select, side) => {
        const choice = select.closest<HTMLElement>('.compare__choice');
        if (choice) choice.dataset.worldview = sel.pair[side];
        select.value = sel.pair[side]!;
        for (const option of select.options) option.disabled = option.value === sel.pair[1 - side];
      });
      updateBothButtons();
    },
    landing: (answer, _target, sel) => cell('glance', sel.pair.indexOf(answer.dataset.worldview ?? '')),
    describe: (sel) => `Comparing ${ctx.name(sel.pair[0])} and ${ctx.name(sel.pair[1])}.`,
    anchors: '.compare__row',
    sticky: '.compare__picker',
  };
}
