// structure.ts
import { StructureResolver } from 'sanity/structure'

const SingletonPages = [
  "aboutPage",
  "contactPage",
  "footer",
  "header",
  "homePage",
  "ourSmedsPage",
  "sermonSummaryPage",
  "eventsPage"
]

export const structure: StructureResolver = (S) =>
  S.list().showIcons()
    .title('Conteúdo')
    .items([
      S.listItem()
      .title('Página Home')
      .child(
        S.editor()
          .id('homePage')
          .schemaType('homePage')
          .documentId('homePage')
      ),
      S.listItem()
      .title('Página Sobre')
      .child(
        S.editor()
          .id('aboutPage')
          .schemaType('aboutPage')
          .documentId('aboutPage')
      ),
      S.listItem()
      .title('Página de Nossos SMEDS')
      .child(
        S.editor()
          .id('ourSmedsPage')
          .schemaType('ourSmedsPage')
          .documentId('ourSmedsPage')
      ),
      S.listItem()
      .title('Página de Contato')
      .child(
        S.editor()
          .id('contactPage')
          .schemaType('contactPage')
          .documentId('contactPage')
      ),
       S.listItem()
      .title('Página de Eventos')
      .child(
        S.editor()
          .id('eventsPage')
          .schemaType('eventsPage')
          .documentId('eventsPage')
      ),
       S.listItem()
      .title('Página de Resumos')
      .child(
        S.editor()
          .id('sermonSummaryPage')
          .schemaType('sermonSummaryPage')
          .documentId('sermonSummaryPage')
      ),
      S.divider(),
      S.listItem()
      .title('Componente Footer')
      .child(
        S.editor()
          .id('footer')
          .schemaType('footer')
          .documentId('footer')
      ),
      S.listItem()
      .title('Componente Header')
      .child(
        S.editor()
          .id('header')
          .schemaType('header')
          .documentId('header')
      ),
      S.divider(),
        // Outros itens soltos...
        ...S.documentTypeListItems().filter(
            (item) =>
              !SingletonPages.includes(item.getId() ?? '')
          ),
       
    ])

