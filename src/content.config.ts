import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      shortTitle: z.string(),
      metaTitle: z.string(),
      metaDescription: z.string(),
      subtitle: z.string(),
      image: image(),
      imageAlt: z.string(),
      dimensions: z.string(),
      intro: z.array(z.string()),
      specs: z.array(z.object({ label: z.string(), value: z.string() })),
      faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
      related: z.array(z.string()).default([]),
    }),
});

export const collections = { services };
