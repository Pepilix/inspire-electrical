# Measurement plan

## Principles

- No analytics run without consent. The consent banner and Google Tag Manager load only when `PUBLIC_GTM_ID` is set, and GTM itself loads only after the visitor clicks **Accept analytics**. Google Consent Mode v2 defaults are all `denied`.
- Without a GTM ID, the site sets no cookies and shows no banner.

## Setup

1. Create a GA4 property for inspire-electrical.com.
2. Create a GTM web container. Add a GA4 Configuration tag (Google tag) that fires on Consent Initialization / All Pages; consent mode handles storage.
3. Set `PUBLIC_GTM_ID=GTM-XXXXXXX` in the production build environment.
4. Search Console: verify by DNS, submit the sitemap, link to GA4.
5. Google Business Profile: link the website; use UTM-tagged website links (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`) to separate GBP traffic in GA4.

## Events (already pushed to `dataLayer`)

| Event | Fires when | Parameters | Mark as key event? |
|---|---|---|---|
| `form_submit` | An enquiry form is accepted by the form handler | `form_type`: `domestic` or `project` | Yes |
| `phone_click` | A `tel:` link is clicked | `cta_location`, `link_url`, `page_path` | Yes |
| `email_click` | A `mailto:` link is clicked | `cta_location`, `link_url`, `page_path` | Yes |
| `cta_click` | Any enquiry call to action is clicked | `cta_location` (e.g. `hero_primary`, `service_aside`, `mobile_bar_project`), `link_url`, `page_path` | No (diagnostic) |

In GTM, create a Custom Event trigger for each event name and a GA4 Event tag that forwards the parameters. Register `form_type` and `cta_location` as custom dimensions in GA4.

The thank-you page (`/thank-you/?type=domestic|project`) is a backup conversion signal and is excluded from the sitemap and noindexed.

## What to report, monthly

| Question | Source | Metric |
|---|---|---|
| Are we generating enquiries from search? | GA4 | `form_submit` + `phone_click` + `email_click` where session source/medium is organic, split by `form_type` |
| Which pages bring enquiries? | GA4 | Key events by landing page |
| Are service pages converting? | GA4 | Key event rate for `/services/*` landing pages |
| Are location pages working? | Search Console + GA4 | Impressions, clicks, CTR for `/areas/*`; key events from those landings |
| Is visibility growing? | Search Console | Impressions and average position for priority 1 terms in `seo/keyword-map.csv` |
| Are titles earning clicks? | Search Console | CTR by page versus position; rewrite where CTR is low for the position |
| Is Google Business Profile working? | GBP Performance | Calls, website clicks, direction requests, search terms |
| Is the site fast for real users? | Search Console Core Web Vitals | LCP, INP, CLS pass rate (mobile) |

Also track offline: how each enquiry heard of you, and whether it became work. Search traffic is only useful if it produces the work the business wants.
