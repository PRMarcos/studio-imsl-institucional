// schemas/footer.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
  ],
})
