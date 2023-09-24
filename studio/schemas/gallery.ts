import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Galerija',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      type: 'images',
      title: 'Slike',
    }),
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare(selection) {
      const {images} = selection

      const image = images.imageList[0]

      return {
        title: `Galerija (${images.imageList.length} slike)`,
        media: image,
      }
    },
  },
})
