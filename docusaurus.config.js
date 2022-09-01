// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Razor Network",
  tagline:
    "Razor Network is a decentralized Oracle network, which provides secure and reliable real-world data feeds for various blockchain-based applications and services.",
  url: "https://docs.razor.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "razor-network", // Usually your GitHub org/user name.
  projectName: "docs-v2", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/razor-network/docs-v2",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/razor-network/docs-v2",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-lunr-search")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Razor Network",
        logo: {
          alt: "Razor Network",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "what-is-an-oracle",
            position: "left",
            label: "Core Concepts",
          },
          {
            to: "/docs/whitepaper/intro",
            label: "Whitepaper",
            position: "left",
          },
          {
            to: "/docs/razor-go/installation",
            label: "Razor Go",
            position: "left",
          },
          {
            to: "/docs/token-bridge/intro",
            label: "Token Bridge",
            position: "left",
          },
          {
            to: "/docs/mainnet/intro",
            label: "Mainnet",
            position: "left",
          },
          {
            href: "https://github.com/razor-network/docs-v2",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
              {
                label: "Medium",
                to: "https://razornetwork.medium.com/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                to: "https://discord.gg/EC53qp2kJ6",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/razor_network",
              },
              {
                label: "GitHub",
                to: "https://github.com/razor-network/",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/razor-network/",
              },
              {
                label: "Telegram",
                to: "https://t.me/razornetwork",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Terms of Service",
                to: "https://razor.network/tos.pdf",
              },
              {
                label: "Privacy Policy",
                to: "https://razor.network/policy",
              },
              {
                label: "Razorscan",
                to: "https://razorscan.io/",
              },
              {
                label: "Razor Go",
                to: "https://github.com/razor-network/razor-go",
              },
            ],
          },
        ],
        logo: {
          alt: "Razor Network logo",
          src: "img/favicon.png",
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Razor Network.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"],
      },
    }),
};

module.exports = config;
