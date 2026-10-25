# Inspire Electrical website

Website for Inspire Electrical, the electrical contracting business of the Inspire group, covering Harrogate, York, Wetherby and North Yorkshire.

Static site built with [Astro](https://astro.build) and TypeScript. No client framework; under 10 KB of vanilla TypeScript for interactions.

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm test           # QA over dist/
npm run check      # type checks
```

## Documents

| File | Contents |
|---|---|
| `docs/strategy.md` | Positioning, information architecture, design direction, SEO approach |
| `research/competitor-analysis.md` | Reference and competitor research, with its limitations |
| `seo/keyword-map.csv` | Keyword to page mapping |
| `DESIGN-SYSTEM.md` | Colour, type, components, motion, accessibility |
| `SEO-ROADMAP.md` | Launch, 30-day, 90-day and 6-month plan |
| `docs/verification-checklist.md` | **Facts to confirm before launch** |
| `docs/local-seo-checklist.md` | Google Business Profile, citations, reviews |
| `docs/measurement-plan.md` | Analytics, consent and conversion events |
| `docs/deployment.md` | Environments, hosting, going live, editing content |
| `docs/image-assets.md` | Photography rules, folders and shot list |
| `docs/project-template.md` | How to add a case study |

## Structure

```
src/
  content/          services, locations, advice, projects, faqs.json, testimonials.json
  content.config.ts schemas (validated at build)
  data/company.ts   business details (single source of truth)
  data/areas.ts     map towns
  components/       Header, Hero, ServiceExplorer, CoverageMap, EnquiryForm, Drawing, Seo ...
  layouts/Base.astro
  pages/            routes
  scripts/main.ts   site-wide behaviour
  styles/global.css tokens and shared styles
```
