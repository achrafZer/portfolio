import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Achraf Zerhouni Portfolio",
  description: "Explore my journey as a software engineer through academia, industry work, and innovative projects",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
