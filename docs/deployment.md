# Deployment guide

## Requirements

- Node.js 22 (or 20.3+)
- `npm ci` to install

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local development server at http://localhost:4321 |
| `npm run build` | Static build into `dist/` |
| `npm test` | QA over `dist/`: headings, metadata, canonical, JSON-LD, internal links, alt text, and on production builds no placeholders or noindex |
| `npm run check` | TypeScript and Astro diagnostics |

## Environment variables

See `.env.example`.

| Variable | Preview (GitHub Pages) | Live |
|---|---|---|
| `SITE_URL` | `https://pepilix.github.io` | `https://inspire-electrical.com` |
| `BASE_PATH` | `/inspire-electrical/` | `/` |
| `PRODUCTION` | `false` (noindex, no sitemap, placeholders visible) | `true` (indexable, sitemap, placeholders hidden) |
| `PUBLIC_FORM_ENDPOINT` | Optional (forms disabled without it) | **Required**. The build fails without it |
| `PUBLIC_GTM_ID` | Leave empty | Set once GA4/GTM is ready |

## Preview on GitHub Pages

1. Create the repository (e.g. `Pepilix/inspire-electrical`) and push `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. With no repository variables set, it builds the noindexed preview at `https://pepilix.github.io/inspire-electrical/`.

## Going live on inspire-electrical.com

1. Complete the blocking items in `docs/verification-checklist.md`.
2. Set up the form handler. For Formspree: create a form, enable file uploads (paid plans), set the notification email, and copy the endpoint (`https://formspree.io/f/xxxx`) into `PUBLIC_FORM_ENDPOINT`. Send a test enquiry of each type and confirm both arrive, with attachments.
3. Repository variables: `SITE_URL=https://inspire-electrical.com`, `BASE_PATH=/`, `PRODUCTION=true`, `PUBLIC_FORM_ENDPOINT=...`.
4. Settings → Pages → Custom domain: `inspire-electrical.com`. This adds a CNAME. Tick **Enforce HTTPS** once available.
5. DNS at the registrar: four `A` records for `@` to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, and a `CNAME` for `www` to `pepilix.github.io`. GitHub then redirects `www` to the apex.
6. After it is live: run `npm test` locally against a production build, check Search Console, and submit the sitemap.

### Other hosts

The site is plain static files, so it also deploys to Netlify, Cloudflare Pages or Vercel with build command `npm run build`, output `dist`, and the same environment variables. Those hosts also allow custom response headers (security headers, longer caching for `/_astro/*`), which GitHub Pages does not.

## Redirects

GitHub Pages has no server-side redirects. If old URLs exist from a previous site on the domain, list them and either recreate them as pages with a `<meta http-equiv="refresh">` and a canonical, or move hosting to a provider with redirect rules (Netlify `_redirects`, Cloudflare `_redirects`).

## Updating content

| To change | Edit |
|---|---|
| Business details | `src/data/company.ts` |
| A service | `src/content/services/<slug>.md` |
| A location page | `src/content/locations/<slug>.md` |
| Secondary towns on the map | `src/data/areas.ts` |
| An advice article | `src/content/advice/<slug>.md` (add `updated:` when revised) |
| Homepage FAQs | `src/content/faqs.json` |
| Reviews | `src/content/testimonials.json` |
| A project | Add `src/content/projects/<slug>.md` (see `docs/project-template.md`) |

Frontmatter is validated at build time (`src/content.config.ts`): titles over 60 characters, descriptions outside 70–160 characters, or links to services that do not exist all fail the build.
