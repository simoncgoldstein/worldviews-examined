import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import {
  answerSchema,
  categorySchema,
  questionSchema,
  sourceSchema,
  thinkerSchema,
  worldviewSchema,
} from './content/schemas';

// Registries are single YAML files (one array per collection); answers are one MDX file per
// worldview/question pair. Cross-collection references are checked by `npm run validate`.
const worldviews = defineCollection({
  loader: file('src/content/worldviews/worldviews.yaml'),
  schema: worldviewSchema,
});

const categories = defineCollection({
  loader: file('src/content/categories/categories.yaml'),
  schema: categorySchema,
});

const questions = defineCollection({
  loader: file('src/content/questions/questions.yaml'),
  schema: questionSchema,
});

const thinkers = defineCollection({
  loader: file('src/content/thinkers/thinkers.yaml'),
  schema: thinkerSchema,
});

const sources = defineCollection({
  loader: file('src/content/sources/sources.yaml'),
  schema: sourceSchema,
});

const answers = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: 'src/content/answers' }),
  schema: answerSchema,
});

export const collections = { worldviews, categories, questions, thinkers, sources, answers };
