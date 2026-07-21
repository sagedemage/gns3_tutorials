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
        text: 'Network Fundamentals',
        items: [
          { text: 'Configure and Verify IPv4 Addressing', link: '/tutorials/configure_and_verify_ipv4_addressing.html' },
          { text: 'Configure and Verify IPv6 Addressing', link: '/tutorials/configure_and_verify_ipv6_addressing.html' },
          { text: 'Verify IP Parameters for Client OS', link: '/tutorials/verify_ip_parameters_for_client_os.html' },
        ]
      },
      {
        text: 'Network Access',
        items: [
          { text: 'Configure and Verify VLANs', link: '/tutorials/configure_and_verify_vlans.html' },
          { text: 'Configure and Verify Interswitch Connectivity', link: '/tutorials/configure_and_verify_interswitch_connectivity.html' },
          { text: 'Configure and Verify Layer 2 Discovery Protocols', link: '/tutorials/configure_and_verify_layer_2_discovery_protocols.html' },
          { text: 'Configure and Verify EtherChannel', link: '/tutorials/configure_and_verify_etherchannel.html' },
          { text: 'Configure Rapid PVST+ Spanning Tree Protocol', link: '/tutorials/configure_rapid_pvst+_spanning_tree_protocol.html' },
        ]
      },
      {
        text: 'IP Connectivity',
        items: [
          { text: 'Configure and Verify IPv4 Static Routing', link: '/tutorials/configure_and_verify_ipv4_static_routing.html' },
          { text: 'Configure and Verify IPv6 Static Routing', link: '/tutorials/configure_and_verify_ipv6_static_routing.html' },
          { text: 'Configure and Verify Single Area OSPFv2', link: '/tutorials/configure_and_verify_single_area_ospfv2.html' },
        ]
      },
      {
        text: 'IP Services',
        items: [
          { text: 'Configure and Verify DHCP Client and Relay', link: '/tutorials/configure_and_verify_dhcp_client_and_relay.html' },
        ]
      },
      {
        text: 'Security Fundamentals',
        items: [

        ]
      },
      {
        text: 'Extra Tutorials',
        items: [
          { text: 'Configure Router as DHCP Server', link: '/tutorials/configure_router_as_dhcp_server.html' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/gns3_tutorials' }
    ]
  }
})
