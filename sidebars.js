/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "index",
    "explainer",
    {
      type: "category",
      label: "Contracts",
      items: ["Contracts/p1-Intro", "Contracts/p2-ACL"],
    },
    "Stake",
    {
      type: "category",
      label: "Delegation",
      items: ["Delegation/Delegate", "Delegation/Unstake"],
    },
    "Governance",
    "PenaltiesAndRewards",
    "FAQ",
    "IncentivisedTestnet",
  ],
  incentivedTestnetSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "incentivised-testnet/intro",
    },
    {
      type: "doc",
      label: "Getting Started",
      id: "incentivised-testnet/getting-started",
    },
    {
      type: "doc",
      label: "Deployment Details",
      id: "incentivised-testnet/deployment-details",
    },
  ],
  razorGo: [
    {
      type: "doc",
      label: "Installation",
      id: "razor-go/installation",
    },
    {
      type: "category",
      label: "Commands",
      items: ["razor-go/commands/create-account"],
    },
    {
      type: "doc",
      label: "Deployment Details",
      id: "razor-go/dev-environment",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
