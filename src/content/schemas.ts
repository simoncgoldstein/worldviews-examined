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

/** From this status upward an answer body must contain its core sections (see answer-sections.ts). */
export const SECTIONS_REQUIRED_FROM: ReviewStatus = 'researched';
/**
 * From this status upward an answer must also name its scope and a thinker, contain a Deep dive,
 * carry citations in its core sections, and cite only checked sources.
 */
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

export const VERIFICATION_STATUSES = ['unverified', 'checked'] as const;
export type VerificationStatus = (typeof VERIFICATION_STATUSES)[number];

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
    /**
     * "checked" means title, author/editor/translator, edition, publication details, locator
     * conventions and URL were verified against the actual edition. Seed entries are "unverified".
     * Reviewed and complete answers may cite only checked sources.
     */
    verificationStatus: z.enum(VERIFICATION_STATUSES).default('unverified'),
    /** ISO date (YYYY-MM-DD) of the verification. Required when status is "checked". */
    verifiedOn: z.iso.date().optional(),
  })
  .strict()
  .refine((source) => source.verificationStatus !== 'checked' || Boolean(source.verifiedOn), {
    message: 'checked sources must record verifiedOn',
    path: ['verifiedOn'],
  });
export type Source = z.infer<typeof sourceSchema>;

// --- thinkers ---------------------------------------------------------------------------

/**
 * primary:      a major thinker regularly used to represent a significant strand of the worldview.
 * specialist:   used mainly for particular subjects (ethics, epistemology, mystical theology, ...).
 * interlocutor: important to the comparison but not presented as a representative of this lane.
 */
export const THINKER_ROLES = ['primary', 'specialist', 'interlocutor'] as const;
export type ThinkerRole = (typeof THINKER_ROLES)[number];

export const thinkerSchema = z
  .object({
    id: idSchema,
    slug: slugSchema,
    name: text,
    /** Worldview ID this thinker is mapped to. A research map, not a claim of agreement. */
    worldview: idSchema,
    role: z.enum(THINKER_ROLES),
    /** For specialists: the subjects the thinker is used for. */
    usedFor: z.array(text).default([]),
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

/**
 * One entry per (questionId, worldviewId). Frontmatter is metadata only. All substantive prose
 * lives in the MDX body under a fixed set of level-two sections (see src/lib/answer-sections.ts),
 * so every section can carry <Cite /> citations. Section presence is validated by
 * scripts/validate-content.ts according to `analysis.kind` and `reviewStatus`.
 */
export const answerSchema = z
  .object({
    worldviewId: idSchema,
    questionId: idSchema,
    reviewStatus: z.enum(REVIEW_STATUSES),
    /** Which school or thinker supplies the account, when internal diversity matters. */
    scope: text.optional(),
    traditionNotes: z.array(text).default([]),
    /** Thinker IDs whose work supplies the account. */
    thinkers: z.array(idSchema).default([]),
    /** Selects the required section set and presentation. Must match the worldview's analysisKind. */
    analysis: z.object({ kind: z.enum(ANALYSIS_KINDS) }).strict(),
    /** Optional short unsourced teaser for navigation. Not a place for argument or claims. */
    lede: text.max(240).optional(),
  })
  .strict()
  .superRefine((answer, ctx) => {
    for (const issue of answerMetadataIssues(answer)) {
      ctx.addIssue({ code: 'custom', path: issue.path, message: issue.message });
    }
  });
export type Answer = z.infer<typeof answerSchema>;

type AnswerShape = { reviewStatus: ReviewStatus; scope?: string | undefined; thinkers: string[] };

/** Metadata rules by status. Body-section rules live in src/lib/answer-sections.ts. */
export function answerMetadataIssues(answer: AnswerShape): { path: (string | number)[]; message: string }[] {
  const issues: { path: (string | number)[]; message: string }[] = [];
  if (statusAtLeast(answer.reviewStatus, ATTRIBUTION_REQUIRED_FROM)) {
    if (!answer.scope) {
      issues.push({ path: ['scope'], message: `"${answer.reviewStatus}" answers must name the school or scope represented` });
    }
    if (answer.thinkers.length === 0) {
      issues.push({ path: ['thinkers'], message: `"${answer.reviewStatus}" answers must name at least one representative thinker` });
    }
  }
  return issues;
}
