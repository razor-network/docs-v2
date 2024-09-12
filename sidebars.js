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
      label: "Introduction",
      id: "explainer",
    },
    "getting-started",
    {
      type: "category",
      label: "Razor V1 (Deprecated Soon)",
      items: [
        {
          type: "doc",
          label: "Testnet details",
          id: "razor-v1/testnet",
        },
        {
          type: "doc",
          label: "Mainnet details",
          id: "razor-v1/mainnet",
        },

        "razor-v1/unstake",
        "razor-v1/initiate-withdraw",
        "razor-v1/withdraw",
        "razor-v1/reset-lock",
      ],
    },
    {
      type: "category",
      label: "Razor V2",
      items: [
        {
          type: "doc",
          label: "Testnet details",
          id: "razor-v2/testnet",
        },
        {
          type: "doc",
          label: "Mainnet details",
          id: "razor-v2/mainnet",
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "Staking",
    //   items: ["stake/mainnet", "stake/testnet"],
    // },
    {
      type: "category",
      label: "Actions",
      items: [
        {
          type: "doc",
          label: "Stake",
          id: "stake",
        },
        "delegate",
        "unstake",
        "initiate-withdraw",
        "withdraw",
        "reset-lock",
      ],
    },
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
                  label: "Introduction",
                  id: "jobs-and-collections",
                },
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
                {
                  type: "doc",
                  label: "Override Jobs",
                  id: "commands/jobs-and-collection/override-jobs",
                },
                {
                  type: "doc",
                  label: "Supported Job Return Types",
                  id: "job-return-types",
                },
                {
                  type: "doc",
                  label: "Authenticated Jobs",
                  id: "authenticated-jobs",
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
        },
      ],
    },
    {
      type: "category",
      label: "Use Pricefeeds",
      items: [
        {
          type: "doc",
          label: "Introduction",
          id: "consume-data-feeds/introduction",
        },
        {
          type: "doc",
          label: "Bridge",
          id: "consume-data-feeds/bridge",
        },
        {
          type: "doc",
          label: "REST API",
          id: "consume-data-feeds/api",
        },
        {
          type: "doc",
          label: "Transparent Forwarder",
          id: "consume-data-feeds/transparent-forwarder",
        },
        {
          type: "doc",
          label: "Deployment details",
          id: "consume-data-feeds/deployment-details",
        },
      ],
    },
    {
      type: "category",
      label: "Contracts",
      items: ["Contracts/intro", "Contracts/p2-ACL"],
    },
    "Governance",
    "Voting",
    {
      type: "doc",
      label: "Verify Validator",
      id: "contribute-validators",
    },
    {
      type: "category",
      label: "Razor Token bridge",
      items: [
        {
          type: "doc",
          label: "Ethereum <-> Razor chain",
          id: "token-bridge/ethereum-razor",
        },
        {
          type: "doc",
          label: "Ethereum <-> Europa Defi Hub",
          id: "token-bridge/ethereum-europa",
        },
      ],
    },
    // "token-bridge/intro",
    "PenaltiesAndRewards",
    "whitepaper/intro",
    "FAQ",
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
  //   consumeDataFeeds: [
  //     {
  //       type: "doc",
  //       label: "Introduction",
  //       id: "consume-data-feeds/introduction",
  //     },
  //     {
  //       type: "doc",
  //       label: "Deployment details",
  //       id: "consume-data-feeds/deployment-details",
  //     },
  //     {
  //       type: "doc",
  //       label: "Transparent Forwarder",
  //       id: "consume-data-feeds/transparent-forwarder",
  //     },
  //   ],

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
