// Build-time content validation and coverage report.
//   node scripts/validate-content.ts            validate, print coverage, exit 1 on errors
//   node scripts/validate-content.ts --quiet    validate only
// Runs under Node's native TypeScript support; no extra tooling.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import type { ZodType } from 'astro/zod';
import {
  answerSchema,
  categorySchema,
  questionSchema,
  sourceSchema,
  thinkerSchema,
  worldviewSchema,
} from '../src/content/schemas.ts';
import { checkContent, coverageReport, type AnswerRecord, type ContentSet } from '../src/lib/content-checks.ts';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const contentDir = join(root, 'src', 'content');
const quiet = process.argv.includes('--quiet');
const errors: string[] = [];

function rel(path: string): string {
  return relative(root, path).replaceAll('\\', '/');
}

function loadRegistry<T>(file: string, schema: ZodType<T>): T[] {
  const path = join(contentDir, file);
  const raw: unknown = parse(readFileSync(path, 'utf8'));
  if (!Array.isArray(raw)) {
    errors.push(`${rel(path)}: expected a YAML list`);
    return [];
  }
  const parsed: T[] = [];
  raw.forEach((item, index) => {
    const result = schema.safeParse(item);
    const id = (item as { id?: string } | null)?.id ?? `#${index + 1}`;
    if (result.success) parsed.push(result.data);
    else for (const issue of result.error.issues) errors.push(`${rel(path)} [${id}]: ${issue.path.join('.') || '(root)'}: ${issue.message}`);
  });
  return parsed;
}

function mdxFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return mdxFiles(path);
    return name.endsWith('.mdx') ? [path] : [];
  });
}

function loadAnswers(): AnswerRecord[] {
  const records: AnswerRecord[] = [];
  for (const path of mdxFiles(join(contentDir, 'answers'))) {
    const source = readFileSync(path, 'utf8').replace(/^﻿/, '');
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) {
      errors.push(`${rel(path)}: missing YAML frontmatter`);
      continue;
    }
    const result = answerSchema.safeParse(parse(match[1]!));
    if (!result.success) {
      for (const issue of result.error.issues) errors.push(`${rel(path)}: ${issue.path.join('.') || '(root)'}: ${issue.message}`);
      continue;
    }
    records.push({ path: rel(path), data: result.data, body: match[2]! });
  }
  return records;
}

const content: ContentSet = {
  worldviews: loadRegistry('worldviews/worldviews.yaml', worldviewSchema),
  categories: loadRegistry('categories/categories.yaml', categorySchema),
  questions: loadRegistry('questions/questions.yaml', questionSchema),
  thinkers: loadRegistry('thinkers/thinkers.yaml', thinkerSchema),
  sources: loadRegistry('sources/sources.yaml', sourceSchema),
  answers: loadAnswers(),
};

const { errors: referenceErrors, warnings } = checkContent(content);
errors.push(...referenceErrors);

if (!quiet) console.log(coverageReport(content).join('\n') + '\n');
for (const warning of warnings) console.warn(`warning: ${warning}`);

if (errors.length > 0) {
  console.error(`\nContent validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log(
  `Content valid: ${content.worldviews.length} worldviews, ${content.categories.length} categories, ` +
    `${content.questions.length} questions, ${content.thinkers.length} thinkers, ` +
    `${content.sources.length} sources, ${content.answers.length} answers.`,
);
