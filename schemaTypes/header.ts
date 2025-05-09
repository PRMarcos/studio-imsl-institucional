import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Links do Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Título',
              description: "Nome que vai aparecer na barra de navegação",
              type: 'string',
              validation: Rule => Rule.required().error('Esse campo é obrigatório.'),
            },
            {
              name: 'link',
              title: 'Link',
              description: "Caminho relativo como /events ou uma URL como https://google.com",
              type: 'string',
              validation: Rule => Rule.required().error('Esse campo é obrigatório.'),
            },

          ],

        }
      ],
      validation: Rule => Rule.required().min(1).error('Adicione ao menos um item no menu.'),
    }),
  ],
})
