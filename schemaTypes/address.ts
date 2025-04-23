import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'address',
  title: 'Endereços',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Descrição', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'street', title: 'Rua', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'number', title: 'Número', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'district', title: 'Bairro', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'city', title: 'Cidade', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'state', title: 'Estado', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'zip', title: 'CEP', type: 'string', validation: Rule => Rule.required() }),
  ],
})