// Presentation vocabulary: editorial symbols, thinker role labels and review-status labels.
// Answer section headings are not here; they are written in the MDX body and validated.
import type { ReviewStatus, Thinker, ThinkerRole } from '../content/schemas.ts';

/** Editorial notation vocabulary. Use sparingly. */
export const symbols = {
  section: '§',
  pressure: '◇',
  backlink: '↩',
  external: '↗',
  separator: '·',
  forward: '→',
  back: '←',
} as const;

/**
 * Restrained role labels. A Christian interlocutor is labelled as such so it never reads as part
 * of the Reformed apologetic roster.
 */
export function roleLabel(thinker: Pick<Thinker, 'role' | 'worldview'>): string {
  switch (thinker.role) {
    case 'primary':
      return 'Primary representative';
    case 'specialist':
      return 'Specialist';
    case 'interlocutor':
      return thinker.worldview === 'christianity' ? 'Christian interlocutor' : 'Interlocutor';
  }
}

export const roleOrder: Record<ThinkerRole, number> = { primary: 0, specialist: 1, interlocutor: 2 };

export const roleDescriptions: Record<ThinkerRole, string> = {
  primary: 'A major thinker regularly used to represent a significant strand of the worldview.',
  specialist: 'Used primarily for particular subjects, such as ethics, epistemology or mystical theology.',
  interlocutor: 'Important to the comparison but not presented as a representative of this worldview lane.',
};

export const statusLabels: Record<ReviewStatus, string> = {
  outline: 'Outline',
  draft: 'Draft',
  researched: 'Researched',
  reviewed: 'Reviewed',
  complete: 'Complete',
};

export const statusDescriptions: Record<ReviewStatus, string> = {
  outline: 'Placeholder only; no substantive content has been written.',
  draft: 'Written but not yet source-checked.',
  researched: 'Sourced and complete in structure; awaiting review.',
  reviewed: 'Steelman and Reformed review passed.',
  complete: 'Reviewed and ready for public use.',
};
