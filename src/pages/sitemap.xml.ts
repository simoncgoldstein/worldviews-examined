// A static sitemap of every built page, from the same content the routes are generated from.
// GitHub Pages serves a project site below the user domain, whose robots.txt this repository does not
// control, so the sitemap is linked from each page's head and can be submitted to search engines.
import type { APIRoute } from 'astro';
import { getContent, questionUrl, thinkerUrl, worldviewUrl } from '../lib/content';
import { url } from '../lib/paths';

export const GET: APIRoute = async ({ site }) => {
  const { questions, worldviews, thinkers } = await getContent();
  const paths = [
    ...['', 'method/', 'questions/', 'worldviews/', 'thinkers/', 'sources/'].map((path) => url(path)),
    ...questions.map(questionUrl),
    ...worldviews.map(worldviewUrl),
    ...thinkers.map(thinkerUrl),
  ];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
