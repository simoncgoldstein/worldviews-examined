// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static output for GitHub Pages project site:
// https://simoncgoldstein.github.io/worldviews-examined/
export default defineConfig({
  site: 'https://simoncgoldstein.github.io',
  base: '/worldviews-examined',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx()],
});
