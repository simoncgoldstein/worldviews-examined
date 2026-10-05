import type { Thinker } from '../content/schemas';

/** "1509–1564", "d. 944", or the looser `era` when exact years are unknown. */
export function lifespan(thinker: Pick<Thinker, 'birthYear' | 'deathYear' | 'era'>): string | undefined {
  const { birthYear, deathYear, era } = thinker;
  if (birthYear && deathYear) return `${birthYear}–${deathYear}`;
  if (birthYear) return `b. ${birthYear}`;
  if (deathYear) return `d. ${deathYear}`;
  return era;
}

export const sourceTypeLabels: Record<string, string> = {
  scripture: 'Scripture',
  primary: 'Primary text',
  confessional: 'Confession',
  commentary: 'Commentary',
  book: 'Book',
  article: 'Article',
  academic: 'Academic scholarship',
  web: 'Web',
};

export function plural(count: number, one: string, many = `${one}s`): string {
  return `${count} ${count === 1 ? one : many}`;
}
