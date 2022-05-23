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
    {
      type: "doc",
      label: "What is an Oracle?",
      id: "what-is-an-oracle",
    },
    "explainer",
    "getting-started",
    "Stake",
    {
      type: "category",
      label: "Delegation",
      items: [
        "delegation/delegate",
        "delegation/unstake",
        "delegation/initiate-withdraw",
        "delegation/withdraw",
        "delegation/reset-lock",
      ],
    },
    {
      type: "category",
      label: "Contracts",
      items: ["Contracts/p1-Intro", "Contracts/p2-ACL"],
    },
    "Governance",
    "PenaltiesAndRewards",
    "FAQ",
  ],
  incentivedTestnetSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "incentivized-testnet/intro",
    },
    {
      type: "doc",
      label: "Getting Started",
      id: "incentivized-testnet/getting-started",
    },
    {
      type: "doc",
      label: "Deployment Details",
      id: "incentivized-testnet/deployment-details",
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
      items: [
        {
          type: "category",
          label: "Account",
          items: [
            {
              label: "Create",
              type: "doc",
              id: "razor-go/commands/account/create",
            },
            {
              type: "doc",
              label: "Import",
              id: "razor-go/commands/account/import",
            },
          ],
        },
        {
          type: "category",
          label: "Staker",
          items: [
            {
              type: "doc",
              label: "Stake",
              id: "razor-go/commands/staker/stake",
            },
            {
              type: "doc",
              label: "Vote",
              id: "razor-go/commands/staker/vote",
            },
            {
              type: "doc",
              label: "Set Delegation",
              id: "razor-go/commands/staker/set-delegation",
            },

            {
              type: "doc",
              label: "Update Commission",
              id: "razor-go/commands/staker/update-commission",
            },
            {
              type: "doc",
              label: "Claim Commission",
              id: "razor-go/commands/staker/claim-commission",
            },
            {
              type: "doc",
              label: "Claim Bounty",
              id: "razor-go/commands/staker/claim-bounty",
            },
            {
              type: "doc",
              label: "Set Config",
              id: "razor-go/commands/staker/set-config",
            },
          ],
        },
        {
          type: "category",
          label: "Jobs and Collection",
          items: [
            {
              type: "doc",
              label: "Create Job",
              id: "razor-go/commands/jobs-and-collection/create-job",
            },
            {
              type: "doc",
              label: "Create Collection",
              id: "razor-go/commands/jobs-and-collection/create-collection",
            },
            {
              type: "doc",
              label: "Modify Collection Status",
              id: "razor-go/commands/jobs-and-collection/modify-collection-status",
            },
            {
              type: "doc",
              label: "Update Collection",
              id: "razor-go/commands/jobs-and-collection/update-collection",
            },
            {
              type: "doc",
              label: "Update Job",
              id: "razor-go/commands/jobs-and-collection/update-job",
            },
            {
              type: "doc",
              label: "Job details",
              id: "razor-go/commands/jobs-and-collection/job-details",
            },
            {
              type: "doc",
              label: "Collection details",
              id: "razor-go/commands/jobs-and-collection/collection-details",
            },
          ],
        },
        {
          type: "doc",
          label: "Delegate",
          id: "razor-go/commands/delegate",
        },
        {
          type: "doc",
          label: "Unstake",
          id: "razor-go/commands/unstake",
        },
        {
          type: "doc",
          label: "Withdraw",
          id: "razor-go/commands/withdraw",
        },
        {
          type: "doc",
          label: "Extend Lock",
          id: "razor-go/commands/extend-lock",
        },
        {
          type: "doc",
          label: "Transfer",
          id: "razor-go/commands/transfer",
        },
      ],
    },
    {
      type: "doc",
      label: "Dev Environment",
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
