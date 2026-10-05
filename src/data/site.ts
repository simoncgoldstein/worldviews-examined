// Site-level structural data (navigation and lane names).
// Placeholder until the Phase 2 content collections replace the lane list.
// No worldview answers belong here.

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

export const lanes = [
  'Reformed Christianity',
  'Naturalistic atheism',
  'Rabbinic Judaism',
  'Classical Islam',
  'Hindu traditions',
  'Buddhist traditions',
] as const;
