import { defineType, defineField} from 'sanity'


const phoneRegex: RegExp = /^\+\d{1,3}\s?\(?\d{1,3}\)?\s?\d{4,5}-?\d{4}$/;



export default defineType({
  name: 'contactPage',
  title: 'Página de Contato',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Página',
      type: 'string',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Imagem de banner',
      description:"Aspecto da imagem 2x1, resolução esperada 2000x1000",
      type: 'image',  
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
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
      name: 'DefaultSocial',
      title: '@ Padão',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'DefaultSocialLink',
      title: 'link do @ Padão',
      type: 'url',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.').uri({scheme: ['https']}),
    }),
    defineField({
      name: 'email',
      title: 'email de contato',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.').email().error("precisa ser um email valido"),
    }),
    defineField({
      name: 'phone',
      title: 'Telefone',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'whatsApp',
      title: 'Telefone do WhatsApp',
      type: 'string',
      validation: Rule => Rule.regex(/^\d{11,13}$/, {
        name: 'telefone internacional',
        invert: false,
      }).error('Insira um número no formato +55 (11) 91234-5678'),
    }),
    defineField({
      name: 'AvailableHours',
      title: 'Horario de disponibilidade',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
  ],
})
