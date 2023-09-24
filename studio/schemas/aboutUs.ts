import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUs',
  title: 'O nama',
  type: 'document',
  fields: [
    defineField({
      name: 'body',
      title: 'Tekst',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare(_) {
      return {title: `O nama`, media: UsersIcon}
    },
  },
})
