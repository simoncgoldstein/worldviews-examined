// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import remarkCitations from './src/lib/remark-citations.mjs';
import remarkAnswerSections from './src/lib/remark-answer-sections.mjs';

// Static output for GitHub Pages project site:
// https://simoncgoldstein.github.io/worldviews-examined/
export default defineConfig({
  site: 'https://simoncgoldstein.github.io',
  base: '/worldviews-examined',
  output: 'static',
  trailingSlash: 'always',
  // Citation numbering and answer sections need remark plugins, so Markdown/MDX run on the unified processor.
  markdown: {
    processor: unified({ remarkPlugins: [remarkCitations, remarkAnswerSections] }),
  },
  integrations: [mdx()],
  vite: {
    build: {
      rollupOptions: {
        // Astro marks rendered content modules with a "use astro:head-inject" directive; the
        // bundler warns it cannot preserve the semantics. Styles here are global CSS linked by the
        // layout (no per-component head injection), so the warning is not actionable.
        onwarn(warning, defaultHandler) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && String(warning.message).includes('astro:head-inject')) return;
          defaultHandler(warning);
        },
      },
    },
  },
});
