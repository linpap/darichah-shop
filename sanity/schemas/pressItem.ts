import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pressItem',
  title: 'Press Item',
  type: 'document',
  fields: [
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Vogue", "The New York Times"',
    }),
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Publication Logo',
      type: 'image',
    }),
    defineField({
      name: 'quote',
      title: 'Featured Quote',
      type: 'text',
      rows: 3,
      description: 'A quote from the article to display',
    }),
  ],
  preview: {
    select: {
      title: 'publication',
      subtitle: 'title',
      media: 'logo',
    },
  },
})
