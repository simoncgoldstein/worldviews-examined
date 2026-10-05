// Site-level structural data (title and navigation). Worldview, question and source content
// lives in src/content and is validated centrally; nothing theological belongs here.

export const siteTitle = 'Worldviews Examined';
export const siteTagline =
  'A comparative worldview reference, written from an explicitly Reformed Christian standpoint.';

export const nav = [
  { label: 'Method', path: 'method/' },
  { label: 'Questions', path: 'questions/' },
  { label: 'Worldviews', path: 'worldviews/' },
  { label: 'Thinkers', path: 'thinkers/' },
  { label: 'Sources', path: 'sources/' },
] as const;

