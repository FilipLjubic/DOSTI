import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Naslovna',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Naslov',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Podnaslov',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Glavna slika',
      type: 'image',
    }),
    defineField({
      name: 'partnerImages',
      title: 'Slike partnera',
      type: 'images',
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
