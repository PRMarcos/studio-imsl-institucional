import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'supportedSocialMidia',
  title: 'Cadsatro de Mídias Sociais',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
        .regex(/^[a-z0-9]+$/, {
          name: 'slug',
          invert: false,
        })
        .error('Use apenas letras minúsculas e números, sem espaços. Ex: instagram, linkedin'),
    }),
    defineField({
      name: 'icon',
      title: 'Ícone',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule =>
        Rule.required()
          .custom(async (image, context) => {
            const { getClient } = context
            const client = getClient({ apiVersion: '2023-01-01' })
            const assetId = image?.asset?._ref

            if (!assetId) return 'Imagem não encontrada'

            const asset = await client.getDocument(assetId)
            if (!asset) return 'Imagem inválida'

            const { metadata } = asset
            const { dimensions } = metadata || {}

            if (!dimensions) return 'Não foi possível obter as dimensões da imagem'

            if (dimensions.width !== dimensions.height) {
              return 'A imagem precisa ser quadrada'
            }

            if (dimensions.width > 200 || dimensions.height > 200) {
              return 'A imagem deve ter no máximo 200x200px'
            }

            return true
          }),
    }),
  ],
})
