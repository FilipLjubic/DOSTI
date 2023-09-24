import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projekti',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Kratki opis',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'startDate',
      title: 'Početak provedbe',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'endDate',
      title: 'Završetak provedbe',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Glavna slika',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Tekst',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },

    prepare(selection) {
      const {author} = selection

      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
