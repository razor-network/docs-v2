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
    'index',
    'explainer',
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'Contracts/p1-Intro',
        'Contracts/p2-ACL'
      ],
    },
    'Stake',
    {
      type: 'category',
      label: 'Delegation',
      items: [
        'Delegation/Delegate',
        'Delegation/Unstake',
      ]
    },
    'Governance',
    'PenaltiesAndRewards',
    'FAQ',
    'IncentivisedTestnet',
    {
      type: 'category',
      label: 'whitepaper',
      items: [
        'whitepaper/abstract',
        'whitepaper/design_goals',
        'whitepaper/intro',
        'whitepaper/previous_work'
      ],
    }
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
