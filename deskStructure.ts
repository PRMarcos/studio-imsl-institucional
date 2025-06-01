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
  "eventsPage",
  "siteSettings",
  "event",
  "sermonSummary"
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
        .title('Página de Eventos')
        .child(
          S.list().showIcons()
            .title("Filtros")
            .items([
              S.listItem()
                .title('Dados Gerais da Página')
                .child(
                  S.editor()
                    .id('eventsPage')
                    .schemaType('eventsPage')
                    .documentId('eventsPage')
                ),
              S.listItem().title("Todos os Eventos").child(
                S.documentList()
                  .title('Todos os Eventos')
                  .schemaType('event')
                  .filter('_type == "event"')
              ),
              S.listItem().title("Eventos Inativos").child(
                S.documentList()
                  .title('Eventos Inativos')
                  .schemaType('event')
                  .filter('_type == "event" && isActive == false')
              ),
              S.listItem().title("Eventos Ativos").child(
                S.documentList()
                  .title('Eventos Ativos')
                  .schemaType('event')
                  .filter('_type == "event" && isActive == true')
              )
            ])
        ),
      S.listItem()
        .title('Página de Resumos')
        .child(
          S.list().showIcons()
            .title("Filtros")
            .items([
              S.listItem()
                .title('Dados Gerais da Página')
                .child(
                  S.editor()
                    .id('sermonSummaryPage')
                    .schemaType('sermonSummaryPage')
                    .documentId('sermonSummaryPage')
                ),
              S.listItem().title("Todos os Resumos").child(
                S.documentList()
                  .title('Todos os Resumos')
                  .schemaType('sermonSummary')
                  .filter('_type == "sermonSummary"')
              ),
              S.listItem().title("Resumos Inativos").child(
                S.documentList()
                  .title('Resumos Inativos')
                  .schemaType('sermonSummary')
                  .filter('_type == "sermonSummary" && isActive == false')
              ),
              S.listItem().title("Resumos Ativos").child(
                S.documentList()
                  .title('Resumos Ativos')
                  .schemaType('sermonSummary')
                  .filter('_type == "sermonSummary" && isActive == true')
              ),
              S.listItem()
                .title('Palavras por Preletor')
                .child(
                  S.documentTypeList('person')
                    .title('Preletores')
                    .child((personId) =>
                      S.documentList()
                        .title('Palavras')
                        .schemaType('sermonSummary')
                        .filter('_type == "sermonSummary" && speaker._ref == $personId')
                        .params({ personId })
                    )
                )

            ])
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
        .title('Configurações do site')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
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

