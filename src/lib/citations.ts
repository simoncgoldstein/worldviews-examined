// Pure citation helpers (no Astro imports) so they can be used by components and scripts.
import type { Source } from '../content/schemas.ts';

export interface CitationUse {
  n: number;
  sourceId: string;
  locator: string;
  note?: string;
  /** How many times this exact (source, locator) pair is cited in the text. */
  occurrences: number;
}

export interface FormattedSource {
  /** Set when `displayCitation` overrides the derived form. */
  override?: string;
  author?: string;
  title: string;
  /** True when the title belongs in quotation marks (part of a larger work). */
  titleInQuotes: boolean;
  containerTitle?: string;
  /** Editors, translators and edition, e.g. "ed. John T. McNeill, trans. Ford Lewis Battles". */
  contributors?: string;
  /** Publication details, e.g. "Philadelphia: Westminster Press, 1960". */
  publication?: string;
  doi?: string;
}

export function formatSource(source: Source): FormattedSource {
  const contributors = [
    source.editor && `ed. ${source.editor}`,
    source.translator && `trans. ${source.translator}`,
    source.edition,
  ]
    .filter(Boolean)
    .join(', ');

  const place = source.place && source.publisher ? `${source.place}: ${source.publisher}` : source.publisher ?? source.place;
  const publication = [place, source.year].filter(Boolean).join(', ');

  const formatted: FormattedSource = {
    title: source.title,
    titleInQuotes: Boolean(source.containerTitle),
  };
  if (source.displayCitation) formatted.override = source.displayCitation;
  if (source.author) formatted.author = source.author;
  if (source.containerTitle) formatted.containerTitle = source.containerTitle;
  if (contributors) formatted.contributors = contributors;
  if (publication) formatted.publication = publication;
  if (source.doi) formatted.doi = source.doi;
  return formatted;
}

/** Compact form for second and later citations of a source. */
export function shortSource(source: Source): string {
  return source.shortCitation ?? source.title;
}

export const LOCATOR_MAX_LENGTH = 120;

/** Returns a problem description, or undefined when the locator is acceptable. */
export function locatorProblem(locator: unknown): string | undefined {
  if (typeof locator !== 'string' || locator.trim() === '') return 'locator is empty';
  if (locator.trim().length > LOCATOR_MAX_LENGTH) return `locator is longer than ${LOCATOR_MAX_LENGTH} characters`;
  if (/[\r\n<>{}]/.test(locator)) return 'locator must be one plain line without <, >, { or }';
  return undefined;
}

export interface CiteTag {
  raw: string;
  attributes: Record<string, string>;
  problems: string[];
}

/** Finds <Cite … /> tags in MDX source, ignoring code fences and inline code. */
export function extractCiteTags(body: string): CiteTag[] {
  const stripped = body.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  const tags: CiteTag[] = [];
  for (const match of stripped.matchAll(/<Cite\b([^>]*)>/g)) {
    const raw = match[0];
    const attributeText = match[1] ?? '';
    const attributes: Record<string, string> = {};
    const problems: string[] = [];
    for (const attribute of attributeText.matchAll(/([A-Za-z]+)\s*=\s*"([^"]*)"/g)) {
      attributes[attribute[1]!] = attribute[2]!;
    }
    const leftover = attributeText
      .replace(/([A-Za-z]+)\s*=\s*"([^"]*)"/g, '')
      .replace(/\//g, '')
      .trim();
    if (leftover) problems.push(`unsupported attribute syntax "${leftover}" (use double-quoted strings)`);
    if (!attributes.source) problems.push('missing "source"');
    const locator = locatorProblem(attributes.locator);
    if (locator) problems.push(locator);
    tags.push({ raw, attributes, problems });
  }
  return tags;
}
