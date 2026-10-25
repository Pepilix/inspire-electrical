# Inspire Electrical: strategy

## 1. Positioning

**Line:** Professional electrical work. Thoughtfully designed. Properly installed.
**Hero:** Electrical installation. Done properly.

Inspire Electrical is the electrical contracting business of the Inspire group (Inspire Audio Visual, Care Home WiFi, Inspire Electrical). The group has designed and installed technology in homes since 2009; Inspire Electrical itself is new.

Two markets, one standard:

| | Market A: homeowners | Market B: projects |
|---|---|---|
| Who | Owners of existing homes | Architects, developers, builders, self-builders, commercial clients |
| Typical work | Extra sockets, consumer units, rewires, EICRs, kitchens and bathrooms, lighting, faults | New builds, full renovations, architectural lighting, infrastructure, smart-home preparation, fit-outs |
| What they need from the site | Reassurance, clarity, a quick way to ask | Evidence of design ability, coordination, documentation, project delivery |
| Primary route | Domestic enquiry form, phone | Project enquiry form with drawings upload |

Positioning guardrails:

- Not "luxury only": small jobs are welcome and the site says so plainly.
- Not "cheap emergency electrician": no 24/7 or response-time claims unless confirmed.
- Group experience is stated as **group** experience. Inspire Electrical's own trading history, projects and reviews are shown only once they exist.

## 2. Information architecture

```
/
├── /services/
│   ├── Domestic
│   │   ├── /services/domestic-electrical/
│   │   ├── /services/house-rewiring/
│   │   ├── /services/consumer-unit-upgrades/
│   │   ├── /services/electrical-testing-eicr/
│   │   ├── /services/lighting-installation/
│   │   ├── /services/outdoor-lighting/
│   │   └── /services/electrical-fault-finding/
│   └── Projects and commercial
│       ├── /services/new-build-electrical-installation/
│       ├── /services/electrical-design/
│       ├── /services/commercial-electrical/
│       ├── /services/commercial-lighting/
│       └── /services/electrical-maintenance/
├── /areas-we-cover/          (hub + map; sections for secondary towns)
│   ├── /areas/harrogate/
│   ├── /areas/york/
│   └── /areas/wetherby/
├── /projects/                (system ready; publishes nothing until real projects exist)
├── /advice/                  (5 launch articles)
├── /about/
├── /contact/                 (domestic + project enquiry)
├── /privacy/
└── /404
```

`new-build-electrical-installation` sits under "Projects and commercial" in navigation (it is project work) although the brief listed it with domestic services. URLs are unchanged.

**Location pages at launch:** Harrogate, York and Wetherby only. Knaresborough, Ripon, Boroughbridge, Tadcaster and Thirsk are covered by anchored sections on `/areas-we-cover/` and on the map. Each gets its own page only when there is genuinely local content (projects, local knowledge) to justify it. This avoids doorway pages.

**EV charging:** no page until capability and scheme approval are confirmed.

## 3. Design direction

**Concept: the drawing set.** Electrical work starts as drawings: layouts, schematics, schedules. The site reads like a well-made drawing set: title blocks, schedules, single-line diagrams, grid references and crop marks. This is the trustinspire.com language, pushed further and made specific to electrical work.

**Family resemblance (from trustinspire.com):** charcoal `#231f20`, paper `#f1eee8`, Cormorant Garamond + Inter + IBM Plex Mono, hairline rules, crop marks, title blocks, restrained motion.

**Own identity:**

- **Copper accent** in place of the group's brass. Rationale: copper is the conductor; it is a near neighbour of brass, so the family link holds. Two tones for contrast: `#c8814f` on charcoal (5.2:1) and `#9a4f28` on paper (5.2:1).
- **The circuit line:** a single copper line that runs down the homepage like a single-line diagram, with a node at each section. It replaces the group's straight brass rule.
- **Drawing-style placeholders:** until real photographs exist, image slots show labelled technical drawings (a distribution board elevation, a lighting layout), which are honest and on-brand, rather than stock photos.
- Light paper is the reading ground for content-heavy pages (service pages, advice). Charcoal frames the hero, explorer and calls to action.

**Rejected:** lightning bolts, hazard yellow, blue gradients, three-column icon cards, stock electricians.

## 4. Motion and interaction

| Interaction | Purpose |
|---|---|
| Hero headline rises line by line; copper line draws in | Establish brand, never delays the CTAs (they render immediately) |
| Service explorer (split screen) | Lets both markets find their service quickly; works by hover, click, touch and keyboard; every service is a real link without JavaScript |
| Circuit line fills on scroll, nodes light at each section | Orientation down a long page |
| Clip-wipe image reveals, light parallax | Weight to photography |
| Coverage map: hover or focus a town to highlight it and its link | Makes coverage tangible, links into location pages |
| Sticky mobile contact bar | Call / email / enquire always one tap away |

All motion is disabled under `prefers-reduced-motion`. No animation library: CSS plus under 10 KB of vanilla TypeScript.

## 5. SEO approach

- Static HTML for every page (Astro), so all content is crawlable without JavaScript.
- One intent per URL, mapped in `seo/keyword-map.csv`.
- Internal links follow the brief's map: homepage → services → related services and locations; locations → services; advice → service pages.
- Schema: `Organization` (group) with `Electrician` for the business, `Service`, `BreadcrumbList`, `Article`, `WebPage`. FAQPage is **not** used: Google restricted FAQ rich results to authoritative government and health sites in 2023, so it would add markup with no benefit.
- Unverified business details (address, phone, scheme, insurance) are omitted from schema rather than guessed.
- The GitHub Pages preview is `noindex` with no sitemap; the production build (`PRODUCTION=true`) removes noindex and emits the sitemap.
