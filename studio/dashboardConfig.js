export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8b30121c1ede42dbb773fe',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9e2e7sth',
                  apiId: 'e63a4e8a-bdf5-4fa6-9d34-5d75bfedc1e0'
                },
                {
                  buildHookId: '5f8b3012f3a8263442266a16',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mgm1jfmw',
                  apiId: '91085203-d578-4cdc-95ba-de8fc0ab5da0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cefothe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mgm1jfmw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
