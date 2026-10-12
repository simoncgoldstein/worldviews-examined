// Progressive enhancement for the question page's Explore reading (see AnswerPanel.astro).
//
// Without JavaScript every answer is rendered open, so all six answers are readable and the
// inner levels are native <details>. With JavaScript:
//   - each answer heading becomes a disclosure button (aria-expanded / aria-controls) and
//     answers start closed, except one containing the URL fragment target;
//   - a closed panel is `hidden="until-found"`, so the browser's find-in-page can still reach and
//     open it where supported (`beforematch`);
//   - page and answer toolbars open/close answers and an answer's sections, with stated scope;
//   - the open answers and levels are kept in the history entry, so reload and Back restore them.
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
  // Never leave keyboard focus on a control that is about to be hidden.
  if (!open && panel.contains(document.activeElement)) toggleOf(answer)?.focus({ preventScroll: true });
  if (open) panel.removeAttribute('hidden');
  else panel.setAttribute('hidden', 'until-found');
  toggleOf(answer)?.setAttribute('aria-expanded', String(open));
  answer.toggleAttribute('data-open', open);
  const id = (answer as HTMLElement).dataset.worldview;
  if (id) document.querySelector(`[data-thesis-card="${CSS.escape(id)}"]`)?.toggleAttribute('data-open', open);
  scheduleSave();
}

// The open answers and levels are remembered in the current history entry (not the URL), so a
// reload, or Back from another page, rebuilds the same layout and the browser's restored scroll
// position lands in the same text instead of in whatever now occupies that offset.
const STATE_KEY = 'explore';
let saving = false;
let restored = false;

function saveState(): void {
  if (!restored) return;
  const open = [...document.querySelectorAll(ANSWER)].filter(isAnswerOpen).map((a) => a.id);
  const levels = [...document.querySelectorAll('[data-answer] details[open] > summary[id]')].map((s) => s.id);
  try {
    history.replaceState({ ...history.state, [STATE_KEY]: { open, levels } }, '');
  } catch {
    // History state is an enhancement only.
  }
}

/** Saves once after the current batch of changes (bulk controls change six answers at once). */
function scheduleSave(): void {
  if (!restored || saving) return;
  saving = true;
  queueMicrotask(() => {
    saving = false;
    saveState();
  });
}

function savedState(): { open: string[]; levels: string[] } {
  const saved = (history.state as Record<string, unknown> | null)?.[STATE_KEY] as { open?: unknown; levels?: unknown } | undefined;
  const list = (value: unknown) => (Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : []);
  return { open: list(saved?.open), levels: list(saved?.levels) };
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
  button.addEventListener('click', () => {
    const open = !isAnswerOpen(answer);
    setAnswerOpen(answer, open);
    // Closing from the sticky heading deep in a long answer would otherwise leave the reader (and
    // the focused button) far above the viewport, in whatever text followed the answer.
    if (!open && answer.getBoundingClientRect().top < 0) answer.scrollIntoView({ block: 'start' });
  });

  panel.addEventListener('beforematch', () => setAnswerOpen(answer, true));
  answer.querySelector('[data-expand-sections]')?.addEventListener('click', () => setSectionsOpen(answer, true));
  answer.querySelector('[data-collapse-sections]')?.addEventListener('click', () => setSectionsOpen(answer, false));
  answer.querySelector<HTMLElement>('[data-answer-tools]')?.removeAttribute('hidden');

  setAnswerOpen(answer, initiallyOpen);
}

/**
 * Enhances every answer on the page. `hashTarget` is the current fragment target, if any. With
 * `allOpen` (the reader is already reading the uncollapsed fallback) every answer starts open.
 */
export function initAnswerPanels(hashTarget: Element | null, allOpen = false): void {
  const answers = [...document.querySelectorAll<HTMLElement>(ANSWER)];
  if (answers.length === 0) return;
  const remembered = savedState();
  for (const answer of answers) enhance(answer, allOpen || (hashTarget !== null && answer.contains(hashTarget)) || remembered.open.includes(answer.id));
  for (const id of remembered.levels) {
    const details = document.getElementById(id)?.parentElement;
    if (details instanceof HTMLDetailsElement) details.open = true;
  }
  restored = true;
  document.addEventListener('toggle', (event) => {
    if (event.target instanceof HTMLDetailsElement && event.target.closest(ANSWER)) scheduleSave();
  }, true);
  // A fragment link or Back/Forward moves to another history entry; record the layout there too,
  // and again on leaving the page, so the entry a reader returns to always matches what they saw.
  window.addEventListener('hashchange', scheduleSave);
  window.addEventListener('pagehide', saveState);

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
