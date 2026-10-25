# Design, UX and commercial refinement: review

October 2026. Applies to the homepage, header, mobile bar, contact page and site-wide styling.

## Audit: three visitors

| Visitor | Question | Before | After |
|---|---|---|---|
| A: Harrogate homeowner, consumer unit | Do you do this? | Hidden under a "Homes" tile | "Fuse box and consumer unit upgrades" listed by name on the homepage |
| | Do you cover Harrogate? | One sentence | Harrogate is the first town in the "Where we work" list, linking to its page |
| | Are you qualified? | Dashed "TO VERIFY" boxes on the public site | No placeholder shown. States what is true: every job certified, notifiable work registered. **Scheme and qualifications still needed** |
| | How do I get a quote? | No "quote" wording anywhere | "Get a quote" in the hero, header, mobile bar, closing section and on the contact page |
| B: York renovation | Complete installation? Drawings? Builders? | Answered only on inner pages | "Extensions and renovations", "Electrical design from drawings" and "Used to working with other trades" on the homepage |
| | Relevant experience? | Group photos with no context | Before-and-after slider, honestly captioned as an Inspire Audio Visual project |
| C: Commercial | What commercial work? | One tile with a home-cinema photo | Commercial pathway listing installations, lighting, testing and maintenance |
| | Insured and qualified? | Not stated | Still not stated: **insurance and scheme details needed** |

## Weaknesses found and fixed (priority order)

1. **No clear quote route.** Added "Get a quote" as the primary action everywhere; the contact page is titled "Get a quote".
2. **Services hidden behind abstract categories.** The three pathways (Domestic; New builds and renovations; Commercial) now list 16 everyday jobs in customer wording, each linking to the page that answers it.
3. **Placeholders published.** "TO VERIFY" markers no longer render anywhere. Gaps live in `docs/verification-checklist.md`.
4. **History blurred.** Copy now says plainly that Inspire Electrical is new and that Inspire Audio Visual has traded since 2009.
5. **Architectural feel.** Headings reduced (H1 5rem → 3.75rem, H2 3.75rem → 2.75rem), section spacing cut by about a third, big serif "statement" paragraphs removed.
6. **Design-demo motion.** Removed scroll fades, clip wipes, parallax, map pulse, process line animation and the hide-on-scroll header and mobile bar.
7. **No evidence on the homepage.** Added the before-and-after slider (mouse, touch, keyboard; side by side without JavaScript).
8. **Sister sites not connected.** Group strip in the header and links in the mobile menu and footer; trustinspire.com and carehomewifi.com now link here.

## Deliberately preserved

- Every service, location and advice page, URL, title, description, heading and structured data block
- The brand: Cormorant Garamond and Inter, Inspire brass, the black label boxes from inspire-av.com
- Two enquiry routes (home work / project or business) with photo and drawing upload
- The coverage map on the Areas page
- Performance: Lighthouse mobile 99–100 on the pages tested

## Final review against the brief

| # | Question | Assessment |
|---|---|---|
| 1 | Immediately an electrical company? | Mostly. The wording, services and quote CTA say so. The photographs are still Inspire AV images; **real electrical photos (boards, first fix, engineers) are the single biggest remaining improvement** |
| 2 | Comfortable for a small job? | Yes: "extra sockets", "small jobs are welcome", one-tap quote on mobile |
| 3 | Credible to an architect or developer? | Partly: drawings, design and trade coordination are stated. Needs real projects and verified credentials |
| 4 | Part of the Inspire brand? | Yes: shared type, brass, label boxes, group strip and cross-links |
| 5 | Distinctive without being overdesigned? | Closer. The before-and-after is the one signature interaction |
| 6 | Clear and useful content? | Yes. The homepage stays short (five sections) and introduces rather than explains; detail lives on the service pages |
| 7 | Qualifications and experience accurate? | Accurate but incomplete: nothing invented, but scheme, insurance and qualifications are not yet shown |
| 8 | Contacting straightforward? | Yes in the interface. **Not yet in practice: no phone, email or form handler is connected** |
| 9 | SEO architecture intact? | Yes: 31 pages pass QA; sitemap, canonicals, schema unchanged |
| 10 | Anything still obviously AI-generated? | The serif headings on every inner page and the evenly spaced section rhythm can still feel templated. Real photography and real project copy will do more than further styling changes |

## Still needs real business information

Telephone, email, form handler (e.g. Formspree), competent person scheme and number, insurance, company name and number (is Inspire Electrical a trading name of Inspire Audio Visual Ltd, like Care Home WiFi?), qualifications, team, photographs, first projects, reviews. See `docs/verification-checklist.md`.

## Needs further testing

- Real phones (iOS Safari, Android Chrome): mobile bar against the browser toolbar, slider dragging
- Form submission end to end once a handler is connected, including attachments
- Search Console and Rich Results Test once the live domain is in use
