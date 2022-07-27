module.exports = {
  title: "Overlay",
  tagline: "Trade data streams",
  url: "https://overlay-docs.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "overlay", // Usually your GitHub org/user name.
  projectName: "overlay-docs", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["ejs"],
      theme: require("prism-react-renderer/themes/vsDark")
    },
    navbar: {
      title: "Overlay",
      logo: {
        alt: 'Overlay logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {
          href: "https://www.notion.so/Overlay-Protocol-29da60fd11e9436ea69e2a5e0db28a74",
          label: "Notion",
          position: "right"
        },
        {
          href: "https://github.com/overlay-market",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://twitter.com/OverlayProtocol",
          label: "Twitter",
          position: "right"
        }
      ]
    },
  },
  presets: [
    [
    '@docusaurus/preset-classic',
    {
      docs: {
        routeBasePath: '/', // Serve the docs at the site's root
        /* other docs plugin options */
      },
      blog: false, // Optional: disable the blog plugin
      // ...
    },
  ]
]
}