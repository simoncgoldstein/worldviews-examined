// The semantic section convention for answer MDX bodies, and the rules that depend on it.
// Pure functions (no Astro imports) so scripts/validate-content.ts can use them.
import { statusAtLeast, type AnalysisKind, type ReviewStatus } from '../content/schemas.ts';
import { extractCiteTags } from './citations.ts';

/** Canonical order of sections; the headings must be level-two and spelled exactly. */
export const SECTION_TITLES: Record<AnalysisKind, readonly string[]> = {
  christian: ['The Christian view', 'What this explains well', 'Strongest objection', 'Christian reply', 'Deep dive'],
  nonChristian: ['The view', 'What this explains well', 'Christian response', 'Pressure questions', 'Deep dive'],
};

export const DEEP_DIVE_TITLE = 'Deep dive';

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export interface BodySection {
  title: string;
  slug: string;
  /** 1-based line number of the heading within the MDX body. */
  line: number;
  content: string;
}

export interface ParsedBody {
  /** Non-blank content before the first level-two heading. */
  preamble: string;
  sections: BodySection[];
}

/** Splits an MDX body at level-two headings, ignoring headings inside code fences. */
export function parseSections(body: string): ParsedBody {
  const sections: BodySection[] = [];
  const preamble: string[] = [];
  let current: { title: string; line: number; lines: string[] } | undefined;
  let inFence = false;

  const flush = () => {
    if (current) {
      sections.push({
        title: current.title,
        slug: slugifyTitle(current.title),
        line: current.line,
        content: current.lines.join('\n'),
      });
    }
  };

  body.split(/\r?\n/).forEach((line, index) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const heading = !inFence ? line.match(/^##(?!#)\s+(.+?)\s*#*\s*$/) : null;
    if (heading) {
      flush();
      current = { title: heading[1]!, line: index + 1, lines: [] };
    } else if (current) {
      current.lines.push(line);
    } else {
      preamble.push(line);
    }
  });
  flush();

  return { preamble: preamble.join('\n').trim(), sections };
}

const hasListItem = (text: string) => /^\s*(?:[-*+]|\d+\.)\s+\S/m.test(text);

export interface SectionCheckInput {
  kind: AnalysisKind;
  status: ReviewStatus;
  body: string;
}

/**
 * Structural problems with an answer body.
 *  - always:        no stray preamble, only canonical titles, no duplicates, canonical order
 *  - researched+:   all core sections present and non-empty (everything except Deep dive);
 *                   non-Christian "Pressure questions" must contain a list item
 *  - reviewed+:     Deep dive present and non-empty; the view and the principal analytical
 *                   section (Christian response / Strongest objection) must carry a citation
 * Outline and draft entries may be partial so work in progress stays maintainable.
 */
export function sectionIssues({ kind, status, body }: SectionCheckInput): string[] {
  const issues: string[] = [];
  const expected = SECTION_TITLES[kind];
  const { preamble, sections } = parseSections(body);

  if (preamble) issues.push('content appears before the first "## " section; all prose must sit inside a section');

  const seen = new Set<string>();
  let lastIndex = -1;
  for (const section of sections) {
    const index = expected.indexOf(section.title);
    if (index === -1) {
      issues.push(`line ${section.line}: unknown section "## ${section.title}" for a ${kind} answer (expected: ${expected.join(', ')})`);
      continue;
    }
    if (seen.has(section.title)) issues.push(`line ${section.line}: duplicate section "## ${section.title}"`);
    seen.add(section.title);
    if (index < lastIndex) issues.push(`line ${section.line}: section "## ${section.title}" is out of order (expected order: ${expected.join(', ')})`);
    lastIndex = Math.max(lastIndex, index);
  }

  const byTitle = new Map(sections.map((s) => [s.title, s] as const));
  const isEmpty = (title: string) => !(byTitle.get(title)?.content.trim());

  if (statusAtLeast(status, 'researched')) {
    for (const title of expected.filter((t) => t !== DEEP_DIVE_TITLE)) {
      if (!byTitle.has(title)) issues.push(`"${status}" ${kind} answers require the section "## ${title}"`);
      else if (isEmpty(title)) issues.push(`section "## ${title}" must not be empty in a "${status}" answer`);
    }
    if (kind === 'nonChristian') {
      const pressure = byTitle.get('Pressure questions');
      if (pressure && !hasListItem(pressure.content)) issues.push('section "## Pressure questions" must contain at least one list item');
    }
  }

  if (statusAtLeast(status, 'reviewed')) {
    if (!byTitle.has(DEEP_DIVE_TITLE)) issues.push(`"${status}" ${kind} answers require the section "## ${DEEP_DIVE_TITLE}"`);
    else if (isEmpty(DEEP_DIVE_TITLE)) issues.push(`section "## ${DEEP_DIVE_TITLE}" must not be empty in a "${status}" answer`);

    const mustCite = [expected[0]!, expected[2]!];
    for (const title of mustCite) {
      const section = byTitle.get(title);
      if (section && extractCiteTags(section.content).length === 0) {
        issues.push(`section "## ${title}" must contain at least one <Cite /> in a "${status}" answer`);
      }
    }
  }

  return issues;
}
