# SEO roadmap: Inspire Electrical

Companion files: `seo/keyword-map.csv`, `research/competitor-analysis.md`, `docs/local-seo-checklist.md`, `docs/measurement-plan.md`, `docs/verification-checklist.md`.

No ranking, traffic or search-volume figures appear in this roadmap because none were available when it was written. Set baselines from Search Console in the first 30 days.

## Launch

Essential technical SEO, priority pages, local targeting and conversion infrastructure.

**Built**

- [x] Static HTML for every page (Astro), crawlable without JavaScript
- [x] 12 service pages, 3 location pages (Harrogate, York, Wetherby), areas hub, 6 advice articles, about, contact, privacy
- [x] Unique title and meta description on every page (checked by `npm test`)
- [x] One H1 per page, logical H2/H3 structure
- [x] Canonical URLs, breadcrumbs (visible and `BreadcrumbList`)
- [x] JSON-LD: `WebSite`, `Electrician` (LocalBusiness) with `parentOrganization`, `Service`, `Article`, `WebPage`, `BreadcrumbList`
- [x] XML sitemap (production build only), robots.txt, custom 404
- [x] Internal linking: home → services → related services and locations; locations → services and guides; guides → services
- [x] Open Graph and Twitter card metadata, default share image
- [x] Lighthouse (mobile, lab): Performance 97–100, Accessibility, Best Practices and SEO 100 on the pages tested
- [x] Domestic and project enquiry forms, tap-to-call (once a number is set), mobile contact bar
- [x] Conversion events wired to `dataLayer` (see measurement plan)

**Before go-live (blocking)**

- [ ] Complete `docs/verification-checklist.md`: phone, email, scheme registration, insurance, company details
- [ ] Connect a form handler (`PUBLIC_FORM_ENDPOINT`); the production build refuses to complete without one
- [ ] Point `inspire-electrical.com` DNS at the host; build with `PRODUCTION=true`
- [ ] Decide the www / non-www version and redirect the other to it
- [ ] Replace the drawing placeholders on the three highest-traffic service pages with real photographs as soon as they exist

## First 30 days

- [ ] Verify the domain in Google Search Console (DNS record); submit `sitemap-index.xml`
- [ ] Request indexing for the homepage, the three location pages and the top five service pages
- [ ] Create or claim the Google Business Profile: service-area business covering Harrogate, York, Wetherby and surrounding areas, primary category **Electrician**, website `https://inspire-electrical.com/`
- [ ] Add services to the GBP that match the website's service pages
- [ ] Bing Webmaster Tools: import from Search Console
- [ ] Core citations with identical name, phone and website: Apple Business Connect, Bing Places, Yell, Thomson Local, the competent person scheme's register, Companies House (check consistency)
- [ ] Link from trustinspire.com and inspire-av.com to inspire-electrical.com (already in place on trustinspire.com)
- [ ] Set up GA4 through GTM with consent mode (see measurement plan); mark `form_submit` and `phone_click` as key events
- [ ] Start a review request process for every completed job (GBP link in the handover email)
- [ ] Record baselines: impressions, clicks, average position for the keyword map's priority 1 terms

## First 90 days

- [ ] Publish the first 2–3 Inspire Electrical case studies (`src/content/projects`, `draft: false`), linked from relevant service and location pages
- [ ] Add real photographs to service pages; replace drawings in the explorer as photos arrive
- [ ] Publish 2–3 further advice articles where Search Console shows question queries (candidates: "how long does a rewire take", "do I need an EICR to sell my house", "what is an RCBO")
- [ ] Review Search Console queries per page; adjust titles and descriptions where impressions are high and CTR is low
- [ ] Strengthen internal links from advice articles that gain impressions to the matching service pages
- [ ] Add reviews to the site (`src/content/testimonials.json`) once there are genuine, attributable ones
- [ ] EV charging: if capability is confirmed, add a service page and keyword targets

## First 6 months

- [ ] Location pages for Knaresborough and Ripon, **only** if there are local projects, reviews or genuinely local content to make them useful. Then Tadcaster, Boroughbridge, Thirsk on the same test
- [ ] Authority: local sponsorships, trade association membership pages, supplier and manufacturer installer listings, features with architects and builders you work with, local press for notable projects
- [ ] Project pages with full write-ups and drawings for architect and developer audiences
- [ ] Content refresh: review every advice article against current regulations (BS 7671 amendments, Approved Document P updates)
- [ ] Performance review: Core Web Vitals field data in Search Console; fix any page that fails
- [ ] Compare enquiry volume and quality by landing page; shift effort to the services that produce the work the business wants
