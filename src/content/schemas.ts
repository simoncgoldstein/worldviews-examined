// Central, build-time content schemas.
//
// This file must stay importable from plain Node (no `astro:content` imports) so that
// `scripts/validate-content.ts` validates against exactly the schemas the site builds with.
// Cross-reference checks (worldview/question/source/thinker IDs) live in
// `src/lib/content-checks.ts`.
import { z } from 'astro/zod';

/** Stable, internal identifier. Short, lowercase, hyphenated. Never changes once content exists. */
export const idSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'IDs must be lowercase letters, digits and hyphens');

/** Readable public URL segment. May change later (add a redirect); IDs may not. */
export const slugSchema = idSchema;

const text = z.string().trim().min(1);

export const ANALYSIS_KINDS = ['christian', 'nonChristian'] as const;
export type AnalysisKind = (typeof ANALYSIS_KINDS)[number];

/** Ordered from least to most finished. */
export const REVIEW_STATUSES = ['outline', 'draft', 'researched', 'reviewed', 'complete'] as const;
export type ReviewStatus = (typeof REVIEW_STATUSES)[number];

/** From this status upward an answer must contain its analytical section. */
export const ANALYSIS_REQUIRED_FROM: ReviewStatus = 'researched';
/** From this status upward an answer must also name its scope and at least one thinker. */
export const ATTRIBUTION_REQUIRED_FROM: ReviewStatus = 'reviewed';

export function statusAtLeast(status: ReviewStatus, minimum: ReviewStatus): boolean {
  return REVIEW_STATUSES.indexOf(status) >= REVIEW_STATUSES.indexOf(minimum);
}

// --- worldviews -------------------------------------------------------------------------

export const worldviewSchema = z
  .object({
    id: idSchema,
    slug: slugSchema,
    name: text,
    shortName: text,
    /** Drives analytical labels in the UI. Never inferred from prose. */
    analysisKind: z.enum(ANALYSIS_KINDS),
    description: text,
    /** What this lane covers, and what it deliberately does not claim to be. */
    scopeNote: text,
    /** Internal schools/streams, so the lane is never presented as uniform. */
    traditionNotes: z.array(z.object({ name: text, note: text }).strict()).default([]),
    order: z.number().int().positive(),
  })
  .strict();
export type Worldview = z.infer<typeof worldviewSchema>;

// --- categories -------------------------------------------------------------------------

export const categorySchema = z
  .object({
    id: idSchema,
    slug: slugSchema,
    title: text,
    description: text,
    order: z.number().int().positive(),
  })
  .strict();
export type Category = z.infer<typeof categorySchema>;

// --- questions --------------------------------------------------------------------------

export const questionSchema = z
  .object({
    id: idSchema,
    slug: slugSchema,
    title: text,
    shortTitle: text.optional(),
    category: idSchema,
    /** Neutral framing of the question. Not an answer. */
    summary: text,
    order: z.number().int().positive(),
    featured: z.boolean().default(false),
    relatedQuestions: z.array(idSchema).default([]),
  })
  .strict();
export type Question = z.infer<typeof questionSchema>;

// --- sources ----------------------------------------------------------------------------

export const SOURCE_TYPES = [
  'scripture',
  'primary',
  'confessional',
  'commentary',
  'book',
  'article',
  'academic',
  'web',
] as const;

export const sourceSchema = z
  .object({
    id: idSchema,
    type: z.enum(SOURCE_TYPES),
    title: text,
    author: text.optional(),
    /** Worldview IDs this source belongs to. */
    traditionTags: z.array(idSchema).min(1),
    containerTitle: text.optional(),
    translator: text.optional(),
    editor: text.optional(),
    edition: text.optional(),
    place: text.optional(),
    publisher: text.optional(),
    year: z.number().int().optional(),
    url: z.url().optional(),
    doi: text.optional(),
    /** Used for second and later citations of the same source, e.g. "Calvin, Institutes". */
    shortCitation: text.optional(),
    /** Overrides the citation derived from the metadata above. Rarely needed. */
    displayCitation: text.optional(),
    notes: text.optional(),
  })
  .strict();
export type Source = z.infer<typeof sourceSchema>;

// --- thinkers ---------------------------------------------------------------------------

export const thinkerSchema = z
  .object({
    id: idSchema,
    slug: slugSchema,
    name: text,
    /** Worldview ID this thinker is mapped to. A research map, not a claim of agreement. */
    worldview: idSchema,
    schools: z.array(text).min(1),
    birthYear: z.number().int().optional(),
    deathYear: z.number().int().optional(),
    /** Free-text dating when exact years are unknown or debated. */
    era: text.optional(),
    description: text,
    representativeWorks: z
      .array(
        z
          .object({
            title: text,
            year: z.number().int().optional(),
            sourceId: idSchema.optional(),
          })
          .strict(),
      )
      .default([]),
    notes: text.optional(),
  })
  .strict();
export type Thinker = z.infer<typeof thinkerSchema>;

// --- citations --------------------------------------------------------------------------

/**
 * A locator is free text ("I.3.1", "WCF 1.4", "4:157", "pp. 25–31", "365a") but must be a
 * single, short, plain line.
 */
export const locatorSchema = z
  .string()
  .trim()
  .min(1, 'Citation locator must not be empty')
  .max(120, 'Citation locator is too long')
  .refine((value) => !/[\r\n<>{}]/.test(value), 'Citation locator must be one plain line');

export const citationSchema = z
  .object({
    sourceId: idSchema,
    locator: locatorSchema,
    note: text.optional(),
  })
  .strict();
export type Citation = z.infer<typeof citationSchema>;

// --- answers ----------------------------------------------------------------------------

const nonChristianAnalysis = z
  .object({
    kind: z.literal('nonChristian'),
    christianResponse: text.optional(),
    pressureQuestions: z.array(text).default([]),
  })
  .strict();

const christianAnalysis = z
  .object({
    kind: z.literal('christian'),
    strongestObjection: text.optional(),
    christianReply: text.optional(),
  })
  .strict();

export const analysisSchema = z.discriminatedUnion('kind', [christianAnalysis, nonChristianAnalysis]);
export type Analysis = z.infer<typeof analysisSchema>;

/**
 * One entry per (questionId, worldviewId). The deep dive is the MDX body; its citations are
 * written inline as <Cite source="…" locator="…" /> and are extracted at build time.
 */
export const answerSchema = z
  .object({
    worldviewId: idSchema,
    questionId: idSchema,
    reviewStatus: z.enum(REVIEW_STATUSES),
    /** Which school or thinker supplies the account, when internal diversity matters. */
    scope: text.optional(),
    traditionNotes: z.array(text).default([]),
    /** "The view": the strongest concise account of the position in its own terms. */
    summary: text,
    /** "What this explains well". */
    strengths: z.array(text).default([]),
    /** Thinker IDs whose work supplies the account. */
    thinkers: z.array(idSchema).default([]),
    analysis: analysisSchema,
  })
  .strict()
  .superRefine((answer, ctx) => {
    for (const issue of answerCompletenessIssues(answer)) {
      ctx.addIssue({ code: 'custom', path: issue.path, message: issue.message });
    }
  });
export type Answer = z.infer<typeof answerSchema>;

type AnswerShape = {
  reviewStatus: ReviewStatus;
  scope?: string | undefined;
  strengths: string[];
  thinkers: string[];
  analysis: Analysis;
};

/** Required-section rules, shared by the schema and the validation script. */
export function answerCompletenessIssues(answer: AnswerShape): { path: (string | number)[]; message: string }[] {
  const issues: { path: (string | number)[]; message: string }[] = [];
  const { reviewStatus, analysis } = answer;

  if (statusAtLeast(reviewStatus, ANALYSIS_REQUIRED_FROM)) {
    if (answer.strengths.length === 0) {
      issues.push({ path: ['strengths'], message: `"${reviewStatus}" answers must list what the view explains well` });
    }
    if (analysis.kind === 'nonChristian') {
      if (!analysis.christianResponse) {
        issues.push({ path: ['analysis', 'christianResponse'], message: `"${reviewStatus}" non-Christian answers require a Christian response` });
      }
      if (analysis.pressureQuestions.length === 0) {
        issues.push({ path: ['analysis', 'pressureQuestions'], message: `"${reviewStatus}" non-Christian answers require at least one pressure question` });
      }
    } else {
      if (!analysis.strongestObjection) {
        issues.push({ path: ['analysis', 'strongestObjection'], message: `"${reviewStatus}" Christian answers require a strongest objection` });
      }
      if (!analysis.christianReply) {
        issues.push({ path: ['analysis', 'christianReply'], message: `"${reviewStatus}" Christian answers require a Christian reply` });
      }
    }
  }

  if (statusAtLeast(reviewStatus, ATTRIBUTION_REQUIRED_FROM)) {
    if (!answer.scope) {
      issues.push({ path: ['scope'], message: `"${reviewStatus}" answers must name the school or scope represented` });
    }
    if (answer.thinkers.length === 0) {
      issues.push({ path: ['thinkers'], message: `"${reviewStatus}" answers must name at least one representative thinker` });
    }
  }

  return issues;
}
