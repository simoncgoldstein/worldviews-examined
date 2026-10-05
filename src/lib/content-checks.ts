// Cross-reference validation and coverage reporting. Pure functions over parsed content so the
// same checks can run in `scripts/validate-content.ts` (Node) and be reasoned about in isolation.
import {
  REVIEW_STATUSES,
  statusAtLeast,
  type Answer,
  type Category,
  type Question,
  type Source,
  type Thinker,
  type Worldview,
} from '../content/schemas.ts';
import { extractCiteTags } from './citations.ts';

export interface AnswerRecord {
  /** Repo-relative path, used in messages and checked against worldviewId/questionId. */
  path: string;
  data: Answer;
  body: string;
}

export interface ContentSet {
  worldviews: Worldview[];
  categories: Category[];
  questions: Question[];
  thinkers: Thinker[];
  sources: Source[];
  answers: AnswerRecord[];
}

export interface CheckResult {
  errors: string[];
  warnings: string[];
}

function duplicates<T>(items: T[], key: (item: T) => string | number): string[] {
  const seen = new Set<string | number>();
  const dupes = new Set<string>();
  for (const item of items) {
    const k = key(item);
    if (seen.has(k)) dupes.add(String(k));
    seen.add(k);
  }
  return [...dupes];
}

export function checkContent(content: ContentSet): CheckResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Duplicate IDs, public slugs and display orders. (Sources have no public slug of their own.)
  type Registry = { id: string; slug?: string; order?: number };
  const registries: [string, Registry[]][] = [
    ['worldviews', content.worldviews],
    ['categories', content.categories],
    ['questions', content.questions],
    ['thinkers', content.thinkers],
    ['sources', content.sources],
  ];
  for (const [name, items] of registries) {
    for (const id of duplicates(items, (item) => item.id)) errors.push(`${name}: duplicate id "${id}"`);
    const slugged = items.filter((item) => item.slug !== undefined);
    for (const slug of duplicates(slugged, (item) => item.slug!)) errors.push(`${name}: duplicate public slug "${slug}"`);
    const ordered = items.filter((item) => item.order !== undefined);
    for (const order of duplicates(ordered, (item) => item.order!)) errors.push(`${name}: duplicate order value ${order}`);
  }

  const worldviewIds = new Set(content.worldviews.map((w) => w.id));
  const categoryIds = new Set(content.categories.map((c) => c.id));
  const questionIds = new Set(content.questions.map((q) => q.id));
  const thinkerIds = new Set(content.thinkers.map((t) => t.id));
  const sourceIds = new Set(content.sources.map((s) => s.id));
  const worldviewById = new Map(content.worldviews.map((w) => [w.id, w]));

  // Questions.
  for (const question of content.questions) {
    if (!categoryIds.has(question.category)) {
      errors.push(`question "${question.id}": unknown category "${question.category}"`);
    }
    for (const related of question.relatedQuestions) {
      if (related === question.id) errors.push(`question "${question.id}": relates to itself`);
      else if (!questionIds.has(related)) errors.push(`question "${question.id}": unknown related question "${related}"`);
    }
  }
  const featured = content.questions.filter((q) => q.featured);
  if (featured.length !== 1) {
    warnings.push(`expected exactly one featured question, found ${featured.length}`);
  }

  // Sources and thinkers.
  for (const source of content.sources) {
    for (const tag of source.traditionTags) {
      if (!worldviewIds.has(tag)) errors.push(`source "${source.id}": unknown tradition tag "${tag}"`);
    }
  }
  for (const thinker of content.thinkers) {
    if (!worldviewIds.has(thinker.worldview)) {
      errors.push(`thinker "${thinker.id}": unknown worldview "${thinker.worldview}"`);
    }
    for (const work of thinker.representativeWorks) {
      if (work.sourceId && !sourceIds.has(work.sourceId)) {
        errors.push(`thinker "${thinker.id}": unknown source "${work.sourceId}" for work "${work.title}"`);
      }
    }
    if (thinker.birthYear && thinker.deathYear && thinker.deathYear < thinker.birthYear) {
      errors.push(`thinker "${thinker.id}": deathYear precedes birthYear`);
    }
  }

  // Answers.
  const pairs = new Map<string, string>();
  for (const { path, data, body } of content.answers) {
    const label = `answer ${path}`;
    const worldview = worldviewById.get(data.worldviewId);

    if (!worldview) errors.push(`${label}: unknown worldview "${data.worldviewId}"`);
    if (!questionIds.has(data.questionId)) errors.push(`${label}: unknown question "${data.questionId}"`);

    const pair = `${data.questionId}/${data.worldviewId}`;
    const earlier = pairs.get(pair);
    if (earlier) errors.push(`${label}: duplicate answer for ${pair} (already in ${earlier})`);
    pairs.set(pair, path);

    const expectedPath = `answers/${data.worldviewId}/${data.questionId}.mdx`;
    if (!path.replaceAll('\\', '/').endsWith(`src/content/${expectedPath}`)) {
      errors.push(`${label}: file path should be src/content/${expectedPath}`);
    }

    if (worldview && worldview.analysisKind !== data.analysis.kind) {
      errors.push(`${label}: analysis.kind "${data.analysis.kind}" does not match ${worldview.id} (${worldview.analysisKind})`);
    }
    for (const thinkerId of data.thinkers) {
      if (!thinkerIds.has(thinkerId)) errors.push(`${label}: unknown thinker "${thinkerId}"`);
    }

    for (const tag of extractCiteTags(body)) {
      for (const problem of tag.problems) errors.push(`${label}: malformed citation ${tag.raw}: ${problem}`);
      const source = tag.attributes.source;
      if (source && !sourceIds.has(source)) errors.push(`${label}: citation refers to unknown source "${source}"`);
    }
  }

  return { errors, warnings };
}

/** Plain-text coverage report: one line per question, in catalog order. */
export function coverageReport(content: ContentSet): string[] {
  const total = content.worldviews.length;
  const byQuestion = new Map<string, Answer[]>();
  for (const { data } of content.answers) {
    byQuestion.set(data.questionId, [...(byQuestion.get(data.questionId) ?? []), data]);
  }

  const questions = [...content.questions].sort((a, b) => a.order - b.order);
  const width = Math.max(...questions.map((q) => q.id.length));
  const lines = ['Answer coverage (entries present / researched or better / reviewed or better)', ''];

  for (const question of questions) {
    const answers = byQuestion.get(question.id) ?? [];
    const researched = answers.filter((a) => statusAtLeast(a.reviewStatus, 'researched')).length;
    const reviewed = answers.filter((a) => statusAtLeast(a.reviewStatus, 'reviewed')).length;
    const breakdown = REVIEW_STATUSES.map((status) => [status, answers.filter((a) => a.reviewStatus === status).length] as const)
      .filter(([, count]) => count > 0)
      .map(([status, count]) => `${status} ${count}`)
      .join(', ');
    lines.push(
      `${question.id.padEnd(width)}  ${answers.length}/${total}  ${researched}/${total}  ${reviewed}/${total}${breakdown ? `  [${breakdown}]` : ''}`,
    );
  }

  const present = content.answers.length;
  const target = total * questions.length;
  lines.push('', `Total: ${present}/${target} answers present (${target - present} missing). Incomplete coverage is expected until Phase 4.`);
  return lines;
}
