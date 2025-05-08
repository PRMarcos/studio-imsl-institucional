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
      title: 'Social link padão',
      description:"Aqui, o texto do @ vai ser utilizado, assim como a url para direcionar para a rede social",
      type: 'reference',
      to:[{type:"socialLink"}],
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),

    defineField({
      name: 'email',
      title: 'email de contato',
      type: 'reference',
      to: [{ type: 'emailEntry' }],
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.')
    }),
    defineField({
      name: 'phone',
      title: 'Telefone',
      type: 'reference',
      to: [{ type: 'phoneEntry' }],
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
    defineField({
      name: 'WhatsPhone',
      title: 'Telefone',
      description:"Esse telefone precisa ser um numero cadastrado no whatsApp, para evitar erros na página",
      type: 'reference',
      to: [{ type: 'phoneEntry' }],
      options: {
        filter: 'isWhats == true',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'AvailableHours',
      title: 'Horario de disponibilidade',
      type: 'string',
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
  ],
})
