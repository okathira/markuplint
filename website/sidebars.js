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
  guide: [
    {
      type: 'category',
      collapsible: false,
      label: 'Guides',
      link: {
        type: 'doc',
        id: 'guides/index',
      },
      items: [
        'guides/applying-rules',
        'guides/selectors',
        'guides/besides-html',
        'guides/presets',
        'guides/custom-rule',
        'guides/ignoring-code',
        'guides/cli',
      ],
    },
  ],
  rules: [
    {
      type: 'category',
      collapsible: true,
      collapsed: true,
      label: 'Rules',
      link: {
        type: 'doc',
        id: 'rules/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'rules',
        },
      ],
    },
  ],
  configuration: [
    {
      type: 'category',
      collapsible: true,
      collapsed: true,
      label: 'Configuration',
      link: {
        type: 'doc',
        id: 'configuration/index',
      },
      items: [
        'configuration/properties',
        {
          type: 'category',
          collapsible: false,
          collapsed: false,
          label: 'Usecases',
          link: {
            type: 'doc',
            id: 'configuration/usecases/index',
          },
          items: [
            //
            'configuration/usecases/architected-css',
            'configuration/usecases/consistent-image-file-naming',
          ],
        },
      ],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'API',
      collapsible: false,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: [
        //
        'api/classes',
        'api/types',
        {
          type: 'link',
          label: 'API document',
          href: 'https://api.markuplint.dev',
        },
      ],
    },
  ],
  community: [
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'doc',
        id: 'community/index',
      },
      items: [
        'community/contributing',
        'community/branding',
        {
          type: 'link',
          label: 'Store',
          href: 'https://suzuri.jp/markuplint',
        },
      ],
    },
  ],
};

module.exports = sidebars;
