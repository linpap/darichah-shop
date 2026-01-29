import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'darichah-studio',
  title: 'Darichah Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Products')
              .child(S.documentTypeList('product').title('Products')),
            S.listItem()
              .title('Categories')
              .child(S.documentTypeList('category').title('Categories')),
            S.listItem()
              .title('Collections')
              .child(S.documentTypeList('collection').title('Collections')),
            S.divider(),
            S.listItem()
              .title('Artisans')
              .child(S.documentTypeList('artisan').title('Artisans')),
            S.listItem()
              .title('Impact Metrics')
              .child(S.documentTypeList('impactMetric').title('Impact Metrics')),
            S.divider(),
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            S.listItem()
              .title('Press')
              .child(S.documentTypeList('pressItem').title('Press Items')),
            S.divider(),
            S.listItem()
              .title('Pages')
              .child(S.documentTypeList('page').title('Pages')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
