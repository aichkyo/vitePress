module.exports = {
  title: 'AickKyo Docs',
  description: 'Just playing around.',
  lang: 'zh-CN',

  // 主题配置
  themeConfig: {
    siteTitle: '前端',
    siteTitle: false,
    logo: '/logo.png',

    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],

    search: {
      provider: 'local'
    },

    nav: [
      // { text: 'Home', link: '/' },
      { text: 'hr公共组件', link: '/hr-components/', activeMatch: '/hr-components/' },
      { 
        text: '技术分享',
        items: [
          { text: 'npm包', link: '/share/npmPackage' },
          { text: 'Item B', link: '/item-2' },
          { 
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }
    ],

    sidebar: [
      {
        text: 'Section Title A',
        collapsed: false,
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
      {
        text: 'Section Title B',
        collapsed: true,
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
        ]
      }
    ],


    // footer: {
    //   message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
    //   copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    // }
  },

  
}