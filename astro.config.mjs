// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeBase from './src/lib/rehype-base.mjs';

// SITE_URL and BASE_PATH let the same code build the GitHub Pages preview
// (https://pepilix.github.io/inspire-electrical/) and the live domain.
const site = process.env.SITE_URL ?? 'https://inspire-electrical.com';
const base = process.env.BASE_PATH ?? '/';
const isProduction = process.env.PRODUCTION === 'true';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Inline CSS: the whole site's CSS is small, and inlining removes render-blocking requests.
  build: { format: 'directory', inlineStylesheets: 'always' },
  // The preview is noindexed, so it does not need a sitemap.
  integrations: isProduction
    ? [sitemap({ filter: (page) => !/\/(404|thank-you)\/?$/.test(page) })]
    : [],
  markdown: { rehypePlugins: [[rehypeBase, { base }]] },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
