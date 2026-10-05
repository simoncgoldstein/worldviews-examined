// Presentation vocabulary. Labels are derived from `analysis.kind`, never stored in content.
import type { AnalysisKind, ReviewStatus } from '../content/schemas.ts';

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

export interface AnswerLabels {
  view: string;
  explains: string;
  analysis: { key: 'christianResponse' | 'strongestObjection'; label: string; mark?: string };
  followUp: { key: 'pressureQuestions' | 'christianReply'; label: string; mark?: string; plural?: string };
}

export const answerLabels: Record<AnalysisKind, AnswerLabels> = {
  nonChristian: {
    view: 'The view',
    explains: 'What this explains well',
    analysis: { key: 'christianResponse', label: 'Christian response', mark: symbols.section },
    followUp: { key: 'pressureQuestions', label: 'Pressure question', mark: symbols.pressure, plural: 'Pressure questions' },
  },
  christian: {
    view: 'The Christian view',
    explains: 'What this explains well',
    analysis: { key: 'strongestObjection', label: 'Strongest objection', mark: symbols.pressure },
    followUp: { key: 'christianReply', label: 'Christian reply' },
  },
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
