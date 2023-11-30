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
        text: 'My portfolio',
        items: [
          { text: 'CV', link: '/cv' },
          { text: 'Contact', link: '/contact' },
          { text: 'About me', link: '/about-me' },
          { text: 'Projects', link: '/projects' },
          { text: 'Professional Experience & Education', link: '/experience-education' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/achrafZer' }
    ]
  }
})
