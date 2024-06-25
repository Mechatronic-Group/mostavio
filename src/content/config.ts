import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        header: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional().nullable(),
        thumbnail: z.string().nullable(),
        link: z.string().optional().nullable(),
        intro: z.string().optional().nullable(),
        featured: z.boolean().nullable().optional(),
    })
});

const reports = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string().optional(),
        tags: z.array(z.string()).optional(),
        thumbnail: z.string().optional(),
        link: z.string(),
    })
});


export const collections = { posts, reports };