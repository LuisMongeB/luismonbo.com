// Content Collections configuration
// This file defines the schema for all content types (like blog posts)
// Astro reads this to validate frontmatter and provide type safety

import { defineCollection, z } from 'astro:content';

// Define the schema for writing/blog posts
// z is Zod - a TypeScript schema validation library (like Pydantic in Python)
// Each field here corresponds to frontmatter in your .md files
const writingCollection = defineCollection({
  type: 'content', // 'content' means markdown/mdx files
  schema: z.object({
    title: z.string(), // Required string field
    description: z.string(), // Short summary/excerpt
    pubDate: z.date(), // Publication date (will be parsed from YAML date format)
    tags: z.array(z.string()).optional(), // Optional array of tag strings
    draft: z.boolean().default(false), // Whether post is published (default: false = published)
  }),
});

// Define the schema for photo essays
// Similar to writing but with photography-specific metadata
const photographyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    caption: z.string(),                    // Short text shown on carousel hover
    pubDate: z.date(),
    coverImage: z.string(),                 // Path to cover image in public/photos/
    location: z.string().optional(),        // Where the photos were taken
    camera: z.string().optional(),          // Camera body used
    film: z.string().optional(),            // Film stock used
    draft: z.boolean().default(false),
  }),
});

// Define the schema for project pages
// Each project is a markdown narrative about a GitHub repo
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),              // One-liner for listing card
    accentColor: z.string(),              // Hex color for card border and detail accents
    repoUrl: z.string(),                  // GitHub repo link
    liveUrl: z.string().optional(),       // Optional deployed site/demo link
    techStack: z.array(z.string()),       // Technologies displayed as tags
    status: z.string(),                   // "In Progress", "Complete", or "Archived"
    pubDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

// Export collections object
// Key = collection name (matches folder name in src/content/)
// Value = collection definition
export const collections = {
  writing: writingCollection,
  photography: photographyCollection,
  projects: projectsCollection,
};
