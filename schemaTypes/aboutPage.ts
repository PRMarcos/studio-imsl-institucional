import { defineType, defineField} from 'sanity'


const phoneRegex: RegExp = /^\+\d{1,3}\s?\(?\d{1,3}\)?\s?\d{4,5}-?\d{4}$/;



export default defineType({
  name: 'aboutPage',
  title: 'Página Sobre',
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
      validation: Rule => Rule.required().error('Esse é um campo obrigatório.'),
    }),
  ],
})
