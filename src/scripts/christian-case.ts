// Christian Case mode (UI-3): Reformed Christianity and one alternative, as an argument in stages.
//
// This module only describes the layout: which part of which answer goes into which stage of
// ChristianCaseView.astro, and how the opponent selector behaves. The shared coordinator
// (modes.ts) moves the nodes, restores them, keeps the URL and history, and resolves fragments.
// Every passage is the reviewed answer text, moved, not copied or summarised; the stages map the
// answers' own sections (docs/ui/UI3-CHRISTIAN-CASE.md §5):
//   theses      each answer's reviewed thesis (lede): the alternative's, then Christianity's
//   account     the alternative's The view and What this explains well
//   christian   Christianity's The Christian view and What this explains well
//   response    the alternative answer's Christian response
//   questions   the alternative answer's Pressure questions
//   objections  Christianity's own Examine disclosure: Strongest objection and Christian reply
//   study       both Deep dives, then each answer's thinkers and links
import type { Layout, LayoutContext, Placement } from './modes';

/** The fixed positive viewpoint of Christian Case. */
export const CHRISTIAN = 'christianity';

const THESIS = ':scope > .answer__panel > .answer__inner > .answer__thesis';
const FOOTER = ':scope > .answer__panel > .answer__inner > .answer__footer';
const EXAMINED = ':scope .answer__body > [data-level="examine"] > .level__body >';

type Side = 'alt' | 'christian';
const PARTS: [part: string, side: Side, selector: string][] = [
  ['theses', 'alt', THESIS],
  ['theses', 'christian', THESIS],
  ['account', 'alt', ':scope .answer__body > :is([data-section="the-view"], [data-section="what-this-explains-well"])'],
  ['christian', 'christian', ':scope .answer__body > :is([data-section="the-christian-view"], [data-section="what-this-explains-well"])'],
  // The alternative's two analytical sections leave their shared Examine disclosure for their own stages.
  ['response', 'alt', `${EXAMINED} [data-section="christian-response"]`],
  ['questions', 'alt', `${EXAMINED} [data-section="pressure-questions"]`],
  ['objections', 'christian', ':scope .answer__body > [data-level="examine"]'],
  ['study', 'alt', ':scope .answer__body > [data-level="study"]'],
  ['study', 'christian', ':scope .answer__body > [data-level="study"]'],
  // Anything else in a body (the validator allows nothing else) is kept with the footer, never lost.
  // The alternative's emptied Examine wrapper stays behind in its answer.
  ['study', 'alt', ':scope .answer__body > :not([data-level="examine"])'],
  ['study', 'christian', ':scope .answer__body > *'],
  ['study', 'alt', FOOTER],
  ['study', 'christian', FOOTER],
];
/** Passages written in the alternative's answer that are the Christian analysis of it. */
const ANALYSIS = new Set(['response', 'questions']);

export function caseLayout(ctx: LayoutContext): Layout | null {
  const found = document.querySelector<HTMLElement>('[data-case]');
  const alternatives = ctx.ids.filter((id) => id !== CHRISTIAN);
  if (!found || !ctx.ids.includes(CHRISTIAN) || alternatives.length === 0) return null;
  const region = found;
  const select = region.querySelector<HTMLSelectElement>('[data-case-select]');
  const cell = (part: string, side: Side) => region.querySelector<HTMLElement>(`[data-part="${part}"][data-side="${side}"]`);

  select?.addEventListener('change', () => {
    const current = ctx.selection();
    // Only alternatives are offered; anything else keeps the current opponent.
    if (alternatives.includes(select.value)) ctx.navigate('case', { ...current, opponent: select.value });
    else select.value = current.opponent;
  });

  return {
    mode: 'case',
    region,
    shown: (sel) => [CHRISTIAN, sel.opponent],
    placements: (sel) =>
      PARTS.map(([part, side, selector]): Placement => {
        const worldview = side === 'alt' ? sel.opponent : CHRISTIAN;
        const name = ctx.name(worldview);
        return ANALYSIS.has(part)
          ? { cell: cell(part, side), worldview, selector, label: `From the ${name} answer`, prefix: `${name} answer: ` }
          : { cell: cell(part, side), worldview, selector };
      }),
    sync(sel) {
      const name = ctx.name(sel.opponent);
      if (select) {
        select.value = sel.opponent;
        select.dataset.worldview = sel.opponent;
      }
      region.querySelectorAll('[data-case-name]').forEach((el) => (el.textContent = name));
      const title = region.querySelector('[data-case-print-title]');
      if (title) title.textContent = `Christian Case: ${ctx.name(CHRISTIAN)} and ${name}`;
    },
    landing(answer, target, sel) {
      const id = answer.dataset.worldview;
      // The alternative's Examine wrapper stays behind; its sections are the response and the questions.
      if (id === sel.opponent && target.closest('[data-level="examine"]')) return cell('response', 'alt');
      return cell('theses', id === CHRISTIAN ? 'christian' : 'alt');
    },
    describe: (sel) => `Christian Case: ${ctx.name(CHRISTIAN)} and ${ctx.name(sel.opponent)}.`,
    anchors: '.case__stage',
  };
}
