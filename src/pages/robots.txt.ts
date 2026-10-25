import type { APIRoute } from 'astro';
import { isProduction, absolute } from '../lib/site';

// Crawling is allowed on both builds so crawlers can read the preview's noindex tags;
// only the production build advertises a sitemap.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (isProduction) lines.push('', `Sitemap: ${absolute('/sitemap-index.xml', site)}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
