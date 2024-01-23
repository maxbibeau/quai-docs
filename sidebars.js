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
  learnSidebar: [
    {
      type: 'doc',
      id: 'learn/intro',
    },
    {
      type: 'category',
      label: 'Advanced Introduction',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'learn/advanced-introduction' }],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'learn/tokenomics' }],
    },
    {
      type: 'category',
      label: 'Academic Resources',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'learn/academic-resources' }],
    },
  ],
  participateSidebar: [
    {
      type: 'doc',
      id: 'participate/iron-age-testnet',
    },
    {
      type: 'category',
      label: 'Use Quai',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/use-quai' }],
    },
    {
      type: 'category',
      label: 'Node',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/node' }],
    },
    {
      type: 'category',
      label: 'Stratum Proxy',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/stratum-proxy' }],
    },
    {
      type: 'category',
      label: 'Miner',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'participate/mining' }],
    },
    {
      type: 'doc',
      id: 'participate/iron-age-testnet-tos',
    },
  ],
  developSidebar: [
    {
      type: 'doc',
      id: 'develop/networks',
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'develop/smart-contracts' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'develop/tutorials' }],
    },
    {
      type: 'category',
      label: 'APIs',
      collapsed: true,
      link: { type: 'generated-index' },
      items: [{ type: 'autogenerated', dirName: 'develop/apis' }],
    },
    {
      type: 'doc',
      id: 'develop/develop-faq',
    },
  ],
  wikiSidebar: [
    {
      type: 'category',
      label: 'Docs Wiki',
      items: [{ type: 'autogenerated', dirName: 'wiki' }],
    },
  ],
};

module.exports = sidebars;
