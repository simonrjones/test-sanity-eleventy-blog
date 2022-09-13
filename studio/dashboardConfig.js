export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '632061b4a4b3521e93767948',
                  title: 'Sanity Studio',
                  name: 'test-sanity-eleventy-blog-studio-uft4kmaj',
                  apiId: '656db343-567f-4ec7-bc9f-11106baac802'
                },
                {
                  buildHookId: '632061b4864aab1e6b640e98',
                  title: 'Blog Website',
                  name: 'test-sanity-eleventy-blog-web',
                  apiId: '09f92586-06a6-4336-a433-60ad8a76e49f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simonrjones/test-sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-sanity-eleventy-blog-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
