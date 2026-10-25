import { defineCollection, z, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    /** Short name used in navigation and the explorer. */
    navTitle: z.string(),
    seoTitle: z.string().max(60),
    description: z.string().min(70).max(160),
    group: z.enum(['domestic', 'projects']),
    order: z.number(),
    /** One sentence for the explorer and service lists. */
    summary: z.string(),
    /** Who the page is mainly for. */
    audience: z.string(),
    /** Path under src/assets/ for a real photograph, once one exists. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Specification-style facts shown in a schedule. */
    schedule: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    related: z.array(reference('services')).default([]),
    locations: z.array(reference('locations')).default([]),
    advice: z.array(reference('advice')).default([]),
    faqs: z.array(faq).default([]),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/locations' }),
  schema: z.object({
    town: z.string(),
    seoTitle: z.string().max(60),
    description: z.string().min(70).max(160),
    order: z.number(),
    /** Lat/long for the coverage map. */
    lat: z.number(),
    lng: z.number(),
    lead: z.string(),
    /** Neighbourhoods and villages genuinely served from this page. */
    nearby: z.array(z.string()),
    services: z.array(reference('services')),
    advice: z.array(reference('advice')).default([]),
    faqs: z.array(faq).default([]),
  }),
});

const advice = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/advice' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60),
    description: z.string().min(70).max(160),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.string(),
    services: z.array(reference('services')).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

/**
 * Projects publish only when `draft: false`. Never publish a project that Inspire Electrical
 * did not carry out, and never use Inspire Audio Visual photographs as electrical projects.
 */
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60),
    description: z.string().min(70).max(160),
    draft: z.boolean().default(true),
    completed: z.coerce.date(),
    location: z.string(),
    area: reference('locations').optional(),
    type: z.enum(['Residential', 'Renovation', 'Lighting', 'Commercial', 'Infrastructure']),
    client: z.string().optional(),
    requirements: z.string(),
    scope: z.array(z.string()),
    challenges: z.string(),
    solution: z.string(),
    services: z.array(reference('services')),
    schedule: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    images: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
  }),
});

const faqs = defineCollection({
  loader: file('./src/content/faqs.json'),
  schema: z.object({ q: z.string(), a: z.string(), order: z.number() }),
});

/** Only real, attributable reviews, with permission. Empty at launch. */
const testimonials = defineCollection({
  loader: file('./src/content/testimonials.json'),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    location: z.string(),
    service: z.string().optional(),
    source: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { services, locations, advice, projects, faqs, testimonials };
