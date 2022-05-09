// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Razor Network | Documentation",
  tagline: "Razor Network Documentation",
  url: "https://razor-docs-v2.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
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
            docId: "Contracts/p1-Intro",
            position: "left",
            label: "Core Concepts",
          },
          {
            to: "/docs/whitepaper/intro",
            label: "Whitepaper",
            position: "left",
          },
          {
            to: "/docs/incentivised-testnet/intro",
            label: "Incentivised Testnet",
            position: "left",
          },
          {
            to: "/docs/razor-go/installation",
            label: "Razor Go",
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
            title: "More",
            items: [
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
        copyright: `Copyright © ${new Date().getFullYear()} Razor Network.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
