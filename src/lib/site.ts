/** Build-mode switches and URL helpers shared by every page. */

export const isProduction = import.meta.env.PRODUCTION === 'true' || process.env.PRODUCTION === 'true';

/**
 * Unverified details are never shown on the site, preview included: they are tracked in
 * docs/verification-checklist.md instead. Set SHOW_PLACEHOLDERS=true locally to see where they would go.
 */
export const showPlaceholders = process.env.SHOW_PLACEHOLDERS === 'true';

export const formEndpoint: string = import.meta.env.PUBLIC_FORM_ENDPOINT ?? '';
export const gtmId: string = import.meta.env.PUBLIC_GTM_ID ?? '';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the deploy base, keeping hashes and trailing slashes intact. */
export function href(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Absolute URL for canonical tags, Open Graph and structured data. */
export function absolute(path: string, site: URL | undefined): string {
  return new URL(href(path), site).toString();
}

/** Strip the deploy base from Astro.url.pathname to get the site-relative path. */
export function pagePath(pathname: string): string {
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}

/** Prefix root-relative links inside trusted HTML strings (FAQ answers) with the deploy base. */
export function baseHtml(html: string): string {
  return base ? html.replace(/href="\/(?!\/)/g, `href="${base}/`) : html;
}
