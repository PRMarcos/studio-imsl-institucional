// schemas/footer.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'socialLinks',
      title: 'Links Sociais',
      type: 'array',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Plataforma', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'programmingTitle',
      title: 'Título da Programação',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'programmingText',
      title: 'Texto da Programação',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'helpTitle',
      title: 'Título da Ajuda',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'helpPhone',
      title: 'Telefone de Ajuda',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'locationTitle',
      title: 'Título da Localização',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'address',
      title: 'Endereço',
      type: 'reference',
      to: [{ type: 'address' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'URL do Mapa (iframe)',
      type: 'url',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
  ],
})
