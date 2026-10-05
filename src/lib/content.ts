// Runtime access to the content collections. Pages and components read through here so that
// ordering, lookups and cross-references live in one place.
import { getCollection, render } from 'astro:content';
import type { Answer, Category, Question, Source, Thinker, Worldview } from '../content/schemas';
import type { CitationUse } from './citations';
import { url } from './paths';

export interface AnswerEntry {
  id: string;
  data: Answer;
  Content: Awaited<ReturnType<typeof render>>['Content'];
  citations: CitationUse[];
  /** Anchor namespace, unique per answer (matches the remark citation plugin). */
  ns: string;
}

export interface SiteContent {
  worldviews: Worldview[];
  categories: Category[];
  questions: Question[];
  thinkers: Thinker[];
  sources: Source[];
  answers: AnswerEntry[];
  worldviewById: Map<string, Worldview>;
  categoryById: Map<string, Category>;
  questionById: Map<string, Question>;
  thinkerById: Map<string, Thinker>;
  sourceById: Map<string, Source>;
}

let cached: Promise<SiteContent> | undefined;

export function getContent(): Promise<SiteContent> {
  cached ??= load();
  return cached;
}

const byOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;

async function load(): Promise<SiteContent> {
  const [worldviews, categories, questions, thinkers, sources, answerEntries] = await Promise.all([
    getCollection('worldviews'),
    getCollection('categories'),
    getCollection('questions'),
    getCollection('thinkers'),
    getCollection('sources'),
    getCollection('answers'),
  ]);

  const answers: AnswerEntry[] = await Promise.all(
    answerEntries.map(async (entry) => {
      const { Content, remarkPluginFrontmatter } = await render(entry);
      return {
        id: entry.id,
        data: entry.data,
        Content,
        citations: (remarkPluginFrontmatter.citations ?? []) as CitationUse[],
        ns: `${entry.data.worldviewId}-${entry.data.questionId}`,
      };
    }),
  );

  const sorted = <T extends { order: number }>(entries: { data: T }[]) => entries.map((e) => e.data).sort(byOrder);
  const worldviewList = sorted(worldviews);
  const categoryList = sorted(categories);
  const questionList = sorted(questions);
  const thinkerList = thinkers.map((e) => e.data).sort((a, b) => a.name.localeCompare(b.name));
  const sourceList = sources.map((e) => e.data);

  const index = <T extends { id: string }>(list: T[]) => new Map(list.map((item) => [item.id, item]));

  const content: SiteContent = {
    worldviews: worldviewList,
    categories: categoryList,
    questions: questionList,
    thinkers: thinkerList,
    sources: sourceList,
    answers,
    worldviewById: index(worldviewList),
    categoryById: index(categoryList),
    questionById: index(questionList),
    thinkerById: index(thinkerList),
    sourceById: index(sourceList),
  };

  // Fail the build if a rendered citation points at an unregistered source.
  for (const answer of answers) {
    for (const citation of answer.citations) {
      if (!content.sourceById.has(citation.sourceId)) {
        throw new Error(`Answer ${answer.id} cites unknown source "${citation.sourceId}"`);
      }
    }
  }
  return content;
}

export function lookup<T>(map: Map<string, T>, id: string, what: string): T {
  const found = map.get(id);
  if (!found) throw new Error(`Unknown ${what} "${id}"`);
  return found;
}

// --- URLs ------------------------------------------------------------------------------

export const questionUrl = (q: Pick<Question, 'slug'>) => url(`questions/${q.slug}/`);
export const worldviewUrl = (w: Pick<Worldview, 'slug'>) => url(`worldviews/${w.slug}/`);
export const thinkerUrl = (t: Pick<Thinker, 'slug'>) => url(`thinkers/${t.slug}/`);
export const sourceUrl = (s: Pick<Source, 'id'>) => url(`sources/#source-${s.id}`);

// --- Derived views ---------------------------------------------------------------------

export function answersForQuestion(content: SiteContent, questionId: string): AnswerEntry[] {
  return content.answers
    .filter((a) => a.data.questionId === questionId)
    .sort((a, b) => lookup(content.worldviewById, a.data.worldviewId, 'worldview').order - lookup(content.worldviewById, b.data.worldviewId, 'worldview').order);
}

export function answersForWorldview(content: SiteContent, worldviewId: string): AnswerEntry[] {
  return content.answers
    .filter((a) => a.data.worldviewId === worldviewId)
    .sort((a, b) => lookup(content.questionById, a.data.questionId, 'question').order - lookup(content.questionById, b.data.questionId, 'question').order);
}

/** Answers that name a thinker as a representative, or cite one of the thinker's works. */
export function answersForThinker(content: SiteContent, thinker: Thinker): AnswerEntry[] {
  const workSources = new Set(thinker.representativeWorks.flatMap((w) => (w.sourceId ? [w.sourceId] : [])));
  return content.answers.filter(
    (a) => a.data.thinkers.includes(thinker.id) || a.citations.some((c) => workSources.has(c.sourceId)),
  );
}

export function answersCitingSource(content: SiteContent, sourceId: string): AnswerEntry[] {
  return content.answers.filter((a) => a.citations.some((c) => c.sourceId === sourceId));
}

export function featuredQuestion(content: SiteContent): Question {
  const featured = content.questions.find((q) => q.featured);
  if (!featured) throw new Error('No featured question is defined');
  return featured;
}
