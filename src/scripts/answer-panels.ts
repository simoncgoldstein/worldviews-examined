// Progressive enhancement for the question page's Explore reading (see AnswerPanel.astro).
//
// Without JavaScript every answer is rendered open, so all six answers are readable and the
// inner levels are native <details>. With JavaScript:
//   - each answer heading becomes a disclosure button (aria-expanded / aria-controls) and
//     answers start closed, except one containing the URL fragment target;
//   - a closed panel is `hidden="until-found"`, so the browser's find-in-page can still reach and
//     open it where supported (`beforematch`);
//   - page and answer toolbars open/close answers and an answer's sections, with stated scope.
// Fragment navigation (overview cards, citations, backlinks) is handled once, in reveal-hash.ts,
// which calls `openAnswer` here. A pre-script rule in BaseLayout/global.css keeps panels collapsed
// before this runs, so the page does not flash open.

const ANSWER = '[data-answer]';

const panelOf = (answer: Element) => answer.querySelector<HTMLElement>(':scope > [data-answer-panel]');
const toggleOf = (answer: Element) => answer.querySelector<HTMLButtonElement>(':scope > .answer__heading > .answer__toggle');

export function isAnswerOpen(answer: Element): boolean {
  return panelOf(answer)?.hasAttribute('hidden') === false;
}

function setAnswerOpen(answer: Element, open: boolean): void {
  const panel = panelOf(answer);
  if (!panel) return;
  if (open) panel.removeAttribute('hidden');
  else panel.setAttribute('hidden', 'until-found');
  toggleOf(answer)?.setAttribute('aria-expanded', String(open));
  answer.toggleAttribute('data-open', open);
  const id = (answer as HTMLElement).dataset.worldview;
  if (id) document.querySelector(`[data-thesis-card="${CSS.escape(id)}"]`)?.toggleAttribute('data-open', open);
}

/** Opens the answer that is, or contains, `element`. Returns true if anything changed. */
export function openAnswer(element: Element): boolean {
  const answer = element.closest(ANSWER);
  if (!answer || !panelOf(answer) || isAnswerOpen(answer)) return false;
  setAnswerOpen(answer, true);
  return true;
}

function setSectionsOpen(answer: Element, open: boolean): void {
  answer.querySelectorAll<HTMLDetailsElement>('details').forEach((details) => {
    details.open = open;
  });
}

function enhance(answer: HTMLElement, initiallyOpen: boolean): void {
  const panel = panelOf(answer);
  const heading = answer.querySelector<HTMLElement>(':scope > .answer__heading');
  const name = heading?.querySelector('[data-answer-name]');
  if (!panel || !heading || !name) return;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'answer__toggle';
  button.setAttribute('aria-controls', panel.id);
  const cue = document.createElement('span');
  cue.className = 'answer__cue';
  cue.setAttribute('aria-hidden', 'true');
  cue.innerHTML = '<span class="answer__cue-closed">Read</span><span class="answer__cue-open">Close</span>';
  heading.replaceChildren(button);
  button.append(name, cue);
  button.addEventListener('click', () => setAnswerOpen(answer, !isAnswerOpen(answer)));

  panel.addEventListener('beforematch', () => setAnswerOpen(answer, true));
  answer.querySelector('[data-expand-sections]')?.addEventListener('click', () => setSectionsOpen(answer, true));
  answer.querySelector('[data-collapse-sections]')?.addEventListener('click', () => setSectionsOpen(answer, false));
  answer.querySelector<HTMLElement>('[data-answer-tools]')?.removeAttribute('hidden');

  setAnswerOpen(answer, initiallyOpen);
}

/** Enhances every answer on the page. `hashTarget` is the current fragment target, if any. */
export function initAnswerPanels(hashTarget: Element | null): void {
  const answers = [...document.querySelectorAll<HTMLElement>(ANSWER)];
  if (answers.length === 0) return;
  for (const answer of answers) enhance(answer, hashTarget !== null && answer.contains(hashTarget));

  const tools = document.querySelector<HTMLElement>('[data-reading-tools]');
  if (tools) {
    tools.querySelector('[data-open-answers]')?.addEventListener('click', () => answers.forEach((a) => setAnswerOpen(a, true)));
    tools.querySelector('[data-close-answers]')?.addEventListener('click', () => answers.forEach((a) => setAnswerOpen(a, false)));
    tools.removeAttribute('hidden');
  }

  // Print the scholarly text in full: open every answer and section, then restore the reader's state.
  let saved: { answer: HTMLElement; open: boolean }[] = [];
  let savedDetails: { details: HTMLDetailsElement; open: boolean }[] = [];
  window.addEventListener('beforeprint', () => {
    saved = answers.map((answer) => ({ answer, open: isAnswerOpen(answer) }));
    savedDetails = [...document.querySelectorAll<HTMLDetailsElement>('.question-page details')].map((details) => ({ details, open: details.open }));
    answers.forEach((a) => setAnswerOpen(a, true));
    savedDetails.forEach(({ details }) => (details.open = true));
  });
  window.addEventListener('afterprint', () => {
    saved.forEach(({ answer, open }) => setAnswerOpen(answer, open));
    savedDetails.forEach(({ details, open }) => (details.open = open));
  });
}
