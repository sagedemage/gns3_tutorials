import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GNS3 Tutorials",
  description: "Tutorials on using GNS3.",
  base: "/gns3_tutorials/",
  head: [['link', { rel: 'icon', href: 'favicon/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'WAN Network Tutorial - GNS3', link: '/wan_network_tutorial_gns3.html' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/gns3_tutorials' }
    ]
  }
})
