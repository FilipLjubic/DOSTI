import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'images',
  title: 'Slike',
  type: 'object',
  fields: [
    defineField({
      name: 'imageList',
      type: 'array',
      title: 'Slike',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Slika',
        }),
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      images: 'imageList',
    },
    prepare(selection) {
      const {images} = selection

      if (images?.length === 0 || !images) {
        return {
          title: 'Nema slika',
          subtitle: 'Uredite za dodati',
        }
      }

      const image = images[0]

      return {
        title: `Galerija s ${Object.keys(images).length} slike`,
        media: image,
      }
    },
  },
})
