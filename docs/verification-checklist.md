# Content verification checklist

Nothing below has been confirmed yet. Missing items are simply left off the site (set `SHOW_PLACEHOLDERS=true` locally to see where each would appear). Fill these in before launch.

Edit business details in **`src/data/company.ts`**.

## Blocking: must be done before launch

| # | Item | Where it appears | Field |
|---|---|---|---|
| 1 | Telephone number (the one customers should call) | Header, mobile bar, contact page, footer, CTA bands, schema | `company.phone` |
| 2 | Email address for enquiries | Contact page, footer, CTA bands, schema, privacy | `company.email` |
| 3 | Form handler (Formspree, Basin or similar), with notification email set up and file uploads enabled | Both enquiry forms | env `PUBLIC_FORM_ENDPOINT` |
| 4 | Competent person scheme name and registration number (NICEIC, NAPIT, ELECSA, Stroma...). **Do not assume one.** | Credentials, footer, about | `company.competentPersonScheme` |
| 5 | Public liability insurance (cover level and insurer) | Credentials | `company.insurance` |
| 6 | Registered company name and number, registered office. Care Home WiFi trades as Inspire Audio Visual Ltd (08332115); confirm whether Inspire Electrical does the same or is its own company | Footer, privacy notice, schema | `company.legalName`, `company.companyNumber` |
| 7 | Privacy notice details: form processor, email provider, retention periods, review date | `/privacy/` | Edit `src/pages/privacy/index.astro` |

## Strongly recommended before launch

| # | Item | Where | Field |
|---|---|---|---|
| 8 | Electrical qualifications held | Credentials | `company.qualifications` |
| 9 | BS 7671 edition and amendment you certify to | Credentials | `company.standard` |
| 10 | Opening or office hours | Contact page, schema | `company.openingHours` |
| 11 | Typical reply time to enquiries (only if you can keep to it) | Contact page | Edit `src/pages/contact/index.astro` |
| 12 | Team names, roles, qualifications, photographs (with consent) | About | Edit `src/pages/about/index.astro` |
| 13 | Whether to publish an address. If customers do not visit, leave `address` null and run Google Business Profile as a service-area business | Footer, schema | `company.address` |

## Capability confirmations (affect what the site claims)

| # | Question | Current site position |
|---|---|---|
| 14 | Do you install EV chargers? Are you on the installer scheme for any grants used? | Not offered. No EV page. Mentioned only as "provision" in new builds |
| 15 | Do you offer emergency or out-of-hours call-outs? | Not claimed anywhere |
| 16 | Do you work on three-phase commercial supplies? | Commercial page mentions three-phase supplies for workshops. Remove if not |
| 17 | Do you test and certify emergency lighting? | Commercial lighting and maintenance pages say yes. Remove if not |
| 18 | Will you work as a subcontractor to builders and developers? | Says yes (FAQ, commercial, new build) |
| 19 | Do you carry out EICRs for landlords? | Says yes |
| 20 | Coverage: are Thirsk, Ripon and Tadcaster genuinely served? | Listed as covered |
| 21 | Are guarantees offered on workmanship? | Not claimed |

## Content and imagery

| # | Item |
|---|---|
| 22 | Real photographs for each service (see `docs/image-assets.md`) |
| 23 | First Inspire Electrical projects, with client permission (see `docs/project-template.md`) |
| 24 | Genuine reviews with permission (`src/content/testimonials.json`) |
| 25 | Competitor names in the brief that could not be found: Varley Electrical, AP Electrical Yorkshire, Judge Electrical (Yorkshire). Confirm names or URLs so the research can be completed |
| 26 | Social profiles, if any (`company.social`) |

## Facts already on the site and their source

| Fact | Source |
|---|---|
| Inspire group since 2009 | trustinspire.com |
| Group studio at Thorp Arch Estate, Wetherby (Unit 661c, LS23 7FF) | trustinspire.com footer (the full address is **not** used on this site until item 13 is decided) |
| Inspire Electrical is the group's newest business | trustinspire.com |
| Cadogan Place and Yarm projects, with specification details | inspire-av.com case studies as summarised on trustinspire.com; always labelled as Inspire Audio Visual work |
| Regulatory content in advice articles | GOV.UK, legislation.gov.uk, Planning Portal, IET, Electrical Safety First (linked in each article) |
