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
    ],

    sidebar: [
      {
        text: 'GNS3 Installation',
        items: [
          { text: 'Setup GNS3 on Windows', link: '/tutorials/setup_gns3_on_windows.html' },
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Setup WAN Network', link: '/tutorials/setup_wan_network.html' },
          { text: 'Setup Network with Linux PCs', link: '/tutorials/setup_network_with_linux_pcs.html' },
          { text: 'Configure DHCP', link: '/tutorials/configure_dhcp.html' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/gns3_tutorials' }
    ]
  }
})
