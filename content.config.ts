import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    empresa: defineCollection({
      type: 'page',
      source: 'empresa/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional()
      })
    }),
    propuesta: defineCollection({
      type: 'page',
      source: 'propuesta/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number(),
        status: z.enum(['completo', 'en-progreso', 'pendiente']),
        updatedAt: z.string()
      })
    })
  }
})
