import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const PROJECT_CATEGORIES = ['Game Jams', 'Academic', 'Personal'] as const;

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
			category: z.enum(PROJECT_CATEGORIES),
			engine: z.string().optional(),
			// Set to 1, 2 or 3 to show the project on the home page (in that order)
			featured: z.number().optional(),
		}),
});

export const collections = { projects };
