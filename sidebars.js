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
    {
      type: "category",
      label: "Staking",
      items: ["stake/mainnet", "stake/testnet"],
    },
    {
        type: "category",
        label: "Actions",
        items: ["delegate", "unstake", "initiate-withdraw","withdraw", "reset-lock"],
      },
      "jobs-and-collections",
    {
      type: "category",
      label: "Contracts",
      items: ["Contracts/intro", "Contracts/p2-ACL", 
      {
        type: "category",
        label: "Mainnet",
        items: ["mainnet/intro", "mainnet/deployment-details"],
      },
      {
        type: "category",
        label: "Testnet",
        items: ["testnet/intro", "testnet/deployment-details"],
      }],
    },
    "Governance",
    "PenaltiesAndRewards",
    "FAQ",
    {
        type: "category",
        label: "Oracle Node",
        items: [
            {
                type: "doc",
                label: "Installation",
                id: "installation",
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
                        id: "commands/account/create",
                      },
                      {
                        type: "doc",
                        label: "Import",
                        id: "commands/account/import",
                      },
                    ],
                  },
                  {
                    type: "category",
                    label: "Staker",
                    items: [
                      {
                        type: "doc",
                        label: "Set Config",
                        id: "commands/staker/set-config",
                      },
                      {
                        type: "doc",
                        label: "Stake",
                        id: "commands/staker/stake",
                      },
                      {
                        type: "doc",
                        label: "Vote",
                        id: "commands/staker/vote",
                      },
                      {
                        type: "doc",
                        label: "Set Delegation",
                        id: "commands/staker/set-delegation",
                      },
          
                      {
                        type: "doc",
                        label: "Update Commission",
                        id: "commands/staker/update-commission",
                      },
                      {
                        type: "doc",
                        label: "Claim Commission",
                        id: "commands/staker/claim-commission",
                      },
                      {
                        type: "doc",
                        label: "Claim Bounty",
                        id: "commands/staker/claim-bounty",
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
                        id: "commands/jobs-and-collection/create-job",
                      },
                      {
                        type: "doc",
                        label: "Create Collection",
                        id: "commands/jobs-and-collection/create-collection",
                      },
                      {
                        type: "doc",
                        label: "Modify Collection Status",
                        id: "commands/jobs-and-collection/modify-collection-status",
                      },
                      {
                        type: "doc",
                        label: "Update Collection",
                        id: "commands/jobs-and-collection/update-collection",
                      },
                      {
                        type: "doc",
                        label: "Update Job",
                        id: "commands/jobs-and-collection/update-job",
                      },
                      {
                        type: "doc",
                        label: "Job details",
                        id: "commands/jobs-and-collection/job-details",
                      },
                      {
                        type: "doc",
                        label: "Collection details",
                        id: "commands/jobs-and-collection/collection-details",
                      },
                    ],
                  },
                  {
                    type: "doc",
                    label: "Delegate",
                    id: "commands/delegate",
                  },
                  {
                    type: "doc",
                    label: "Unstake",
                    id: "commands/unstake",
                  },
                  {
                    type: "doc",
                    label: "Withdraw",
                    id: "commands/withdraw",
                  },
                  {
                    type: "doc",
                    label: "Extend Lock",
                    id: "commands/extend-lock",
                  },
                  {
                    type: "doc",
                    label: "Transfer",
                    id: "commands/transfer",
                  },
                  {
                    type: "doc",
                    label: "Expose Metrics",
                    id: "commands/expose-metrics",
                  },
                ],
              },
              {
                type: "doc",
                label: "Dev Environment",
                id: "dev-environment",
              }
        ]
    }
  ],
//   mainnetSidebar: [
//     {
//       type: "doc",
//       label: "Introduction",
//       id: "mainnet/intro",
//     },
//     {
//       type: "doc",
//       label: "Getting Started",
//       id: "mainnet/getting-started",
//     },
//     {
//       type: "doc",
//       label: "Deployment Details",
//       id: "mainnet/deployment-details",
//     },
//   ],
//   testnetSidebar: [
//     {
//       type: "doc",
//       label: "Introduction",
//       id: "testnet/intro",
//     },
//     {
//       type: "doc",
//       label: "Getting Started",
//       id: "testnet/getting-started",
//     },
//     {
//       type: "doc",
//       label: "Deployment Details",
//       id: "testnet/deployment-details",
//     },
//   ],
  consumeDataFeeds: [
    {
      type: "doc",
      label: "Introduction",
      id: "consume-data-feeds/introduction",
    },
    {
      type: "doc",
      label: "Deployment details",
      id: "consume-data-feeds/deployment-details",
    },
    {
      type: "doc",
      label: "Transparent Forwarder",
      id: "consume-data-feeds/transparent-forwarder",
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
