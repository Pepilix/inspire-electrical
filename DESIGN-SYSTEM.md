# Inspire Electrical design system

The site belongs to the Inspire family (trustinspire.com, inspire-av.com) and shares its palette, typefaces and drawing-sheet graphic language. Its own identity comes from a copper accent, the circuit line, and technical drawings used as image placeholders.

All tokens live in `src/styles/global.css`.

## Colour

| Token | Value | Use | Contrast |
|---|---|---|---|
| `--charcoal` | `#231f20` | Dark ground (taken from the Inspire logo artwork) | |
| `--charcoal-2` | `#2c2829` | Raised dark surfaces, drawing backgrounds | |
| `--paper` | `#f1eee8` | Main light ground (shared with trustinspire.com) | |
| `--paper-2` | `#e8e3da` | Light drawing backgrounds | |
| `--white` | `#fbfaf7` | Alternate light ground, form fields | |
| `--ink` | `#1d1a1b` | Text on light grounds | 15.6:1 on paper |
| `--ink-2` | `#4a4843` | Secondary text on light | 7.9:1 on paper |
| `--ink-3` | `#5e5951` | Smallest grey text on light | 6.0:1 on paper |
| `--on-dark` | `#f1eee8` | Text on charcoal | 14.1:1 |
| `--on-dark-2` | `#b3ada4` | Secondary text on charcoal | 7.3:1 |
| `--copper` | `#c8814f` | Accent on charcoal: lines, nodes, labels, primary button | 5.2:1 on charcoal |
| `--copper-ink` | `#9a4f28` | Accent on paper: labels, links, nodes | 5.2:1 on paper |

**Why copper:** the group uses brass. Copper is its neighbour, so the family resemblance holds, and it is the conductor in every installation. Copper is never used for large fills, except the primary button.

**Grounds:** charcoal frames the hero, the service explorer, project work, the process and calls to action. Paper is the reading ground for body content. Sections alternate to give the long homepage a rhythm.

## Typography

| Role | Face | Notes |
|---|---|---|
| Display and headings | Cormorant Garamond 500/600 (+ 500 italic) | Matches inspire-av.com and trustinspire.com |
| Body, UI, buttons | Inter Variable | Matches inspire-av.com |
| Labels, schedules, indices | IBM Plex Mono 400 | Drawing annotations, as on trustinspire.com |

All fonts are self-hosted through `@fontsource` (no Google Fonts request, better privacy and performance). Inter Latin and Cormorant 500 are preloaded.

| Class | Size | Use |
|---|---|---|
| `.display` | clamp(3rem, 8.4vw, 7.5rem) | Homepage hero only |
| `.h1` | clamp(2.5rem, 5.6vw, 5rem) | Page titles |
| `.h2` | clamp(2.125rem, 4.2vw, 3.75rem) | Section titles |
| `.h3` | clamp(1.625rem, 2.4vw, 2.125rem) | Subsections, panels |
| `.lead` | clamp(1.125rem, 1.5vw, 1.3125rem) | Standfirsts |
| `.eyebrow` | 0.75rem mono, spaced caps, leading rule | Section labels, numbered "01 · Services" |

## Layout and spacing

- Max content width 1360px; side gutter `clamp(16px, 4vw, 56px)`.
- Section padding `clamp(72px, 10vw, 152px)`.
- Asymmetric 12-column splits (7/5, 6/5, 8/4) rather than equal columns.
- Lists of things are **schedules**: hairline-ruled rows with mono labels, not cards.

## Graphic language

- **Schedules** (`.schedule`): label/value rows, like a drawing's specification.
- **Title blocks**: bordered label grids (hero footer strip, credentials).
- **Crop marks** around drawings and the hero diagram.
- **Dimension lines** in image captions.
- **The circuit line**: a copper line down the homepage with a node per section; it fills as you scroll and nodes light up.
- **Drawings** (`src/components/Drawing.astro`): 12 technical drawings, one per service, each labelled "Photograph to follow".

## Components

| Component | File | Notes |
|---|---|---|
| Header + services panel + mobile menu | `Header.astro` | Panel opens on hover or via its toggle button; Escape closes |
| Mobile contact bar | `MobileBar.astro` | Phones only; hides on scroll down |
| Hero | `Hero.astro` | Single-line diagram draws in; CTAs never delayed |
| Service explorer | `ServiceExplorer.astro` | ARIA tabs; hover, click, tap and arrow keys; without JS all panels shown |
| Coverage map | `CoverageMap.astro` | SVG from real coordinates; links to location pages |
| Process | `Process.astro` | Five steps; line draws on reveal |
| Credentials | `Credentials.astro` | Verified data only |
| FAQs | `Faqs.astro` | Native `<details>` |
| Enquiry form | `EnquiryForm.astro` | Domestic and project variants |
| CTA band | `CtaBand.astro` | Two routes plus direct contact |
| Page header | `PageHeader.astro` | Breadcrumbs, eyebrow, H1, lead, optional aside |
| Drawing | `Drawing.astro` | Placeholder artwork |
| Seo | `Seo.astro` | Meta, Open Graph, JSON-LD graph |
| Verify | `Verify.astro` | "To verify" marker; preview only |

## Motion

| Pattern | Duration / easing |
|---|---|
| Headline rise from mask | 1.1s `--ease-out` |
| Scroll reveal (fade and rise) | 1–1.1s |
| Clip-wipe image reveal | 1.3s `--ease-out` |
| Parallax | ±5% of frame height, capped |
| Button fill | 0.55s left-to-right |
| Arrow extend | 0.5s |

`--ease: cubic-bezier(.22,.61,.2,1)`, `--ease-out: cubic-bezier(.16,1,.3,1)`.

Everything is disabled under `prefers-reduced-motion: reduce`. No animation library is used.

## Accessibility rules

- Every interactive control is reachable and operable by keyboard; focus outline is 2px copper.
- Tabs use the ARIA tabs pattern with roving tabindex.
- Forms: visible labels, inline error messages linked by `aria-describedby`, focus moves to the first error.
- Touch targets are at least 44px.
- Text contrast meets WCAG AA (see the table above).
