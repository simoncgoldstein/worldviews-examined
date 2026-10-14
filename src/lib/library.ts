// Pure helpers for the Sources library (no Astro imports): the page uses them at build time and
// src/scripts/source-library.ts uses the same normalization for the reader's query, so a query and
// the text it searches are always folded the same way.
import type { Source } from '../content/schemas.ts';

/**
 * Folds text for matching: Unicode NFD with combining marks removed ("Śaṅkara" → "sankara"), a few
 * letters that do not decompose, apostrophes and the ʿayn/hamza marks of transliteration dropped
 * ("Qur'an", "Qurʾān" → "quran"), every other non-alphanumeric run turned into one space, lower case.
 */
export function normalizeSearch(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[øœæßłđı]/g, (c) => ({ ø: 'o', œ: 'oe', æ: 'ae', ß: 'ss', ł: 'l', đ: 'd', ı: 'i' })[c] ?? c)
    .replace(/['‘’ʼʾʿ`´]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

/** The registered identification fields a reader may search: never notes, URLs or verification data. */
export function searchText(source: Source): string {
  return normalizeSearch(
    [
      source.author,
      source.title,
      source.containerTitle,
      source.editor,
      source.translator,
      source.shortCitation,
      source.displayCitation,
      source.year,
    ]
      .filter((value) => value !== undefined)
      .join(' '),
  );
}

/** The query's terms, folded like the searched text. */
export function queryTerms(query: string): string[] {
  return normalizeSearch(query).split(' ').filter(Boolean);
}

/** Every term must begin a word somewhere in the searched text. No terms matches everything. */
export function matchesTerms(haystack: string, terms: string[]): boolean {
  const words = ` ${haystack}`;
  return terms.every((term) => words.includes(` ${term}`));
}

const leadingArticle = /^(the|a|an) /;

/** Catalogue order: registered author (or title when there is none), then title, then id. */
export function compareSources(a: Source, b: Source): number {
  const key = (text: string) => normalizeSearch(text).replace(leadingArticle, '');
  const order = (x: string, y: string) => (x < y ? -1 : x > y ? 1 : 0);
  return (
    order(key(a.author ?? a.title), key(b.author ?? b.title)) ||
    order(key(a.title), key(b.title)) ||
    order(a.id, b.id)
  );
}

export const PAGE_SIZE = 25;
