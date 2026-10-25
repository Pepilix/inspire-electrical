# Local SEO implementation checklist

## Google Business Profile

- [ ] Create or claim the profile under the exact business name **Inspire Electrical** (no keywords added to the name)
- [ ] Business type: **service-area business**. Hide the address unless customers visit. Do not create profiles for towns where there is no staffed premises
- [ ] Service areas: Harrogate, York, Wetherby, Knaresborough, Ripon, Boroughbridge, Tadcaster, Thirsk
- [ ] Primary category: Electrician. Secondary (only if accurate): Electrical installation service, Lighting contractor, Electrical engineer
- [ ] Phone: the same number as on the website. Website: `https://inspire-electrical.com/`
- [ ] Hours: the same as `company.openingHours`
- [ ] Services: one per website service page, with a short description
- [ ] Description: plain description of the work and area. No claims the website does not make
- [ ] Photos: real work, team and vehicles only. Add regularly
- [ ] Verify the profile (Google chooses the method)

## NAP consistency

Name, address (if shown) and phone must match exactly across:

- [ ] Website (`src/data/company.ts`)
- [ ] Google Business Profile
- [ ] Apple Business Connect
- [ ] Bing Places
- [ ] Competent person scheme register
- [ ] Companies House (registered office may differ; that is fine)
- [ ] Yell, Thomson Local, Scoot (free listings)
- [ ] Checkatrade / TrustATrader / Which? Trusted Traders, only if the business decides to join
- [ ] trustinspire.com and inspire-av.com links

## Reviews

- [ ] Ask every customer at handover, with a direct review link from the GBP dashboard
- [ ] Reply to every review, positive or negative, promptly and politely
- [ ] Never offer incentives for reviews, and never write or buy them
- [ ] With permission, add selected reviews to `src/content/testimonials.json` (name, town, service, source, date). Do not add review star ratings to structured data for your own reviews of yourself

## Ongoing local content

- [ ] A case study for each notable project, naming the town (with client permission)
- [ ] GBP posts for completed projects and new advice articles
- [ ] Location pages for secondary towns only once there is genuine local content
- [ ] Local links: suppliers, builders and architects you work with, local business associations, sponsorships
