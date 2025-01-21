// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyPitbike',
  tagline: 'Your ultimate knowledge hub for mini bikes.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.mypitbike.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
//        blog: {
//          showReadingTime: true,
//          feedOptions: {
//            type: ['rss', 'atom'],
//            xslt: true,
//          },
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          //editUrl:
//          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//          // Useful options to enforce blogging best practices
//          onInlineTags: 'warn',
//          onInlineAuthors: 'warn',
//          onUntruncatedBlogPosts: 'warn',
//        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-K4LMN44Z',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MyPitbike',
        logo: {
          alt: 'MyPitbike',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'techSidebar',
            position: 'left',
            label: 'Tech Database',
          },
          {
            type: 'docSidebar',
            sidebarId: 'manualSidebar',
            position: 'left',
            label: 'Manuals',
          },
//          {to: '/blog', label: 'Blog', position: 'left'},
//          {
//            href: 'https://github.com/facebook/docusaurus',
//            label: 'GitHub',
//            position: 'right',
//          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Maintenance & Repair',
                to: '/docs/category/maintenance--repair',
              },
              {
                label: 'Performance Tuning & Customization',
                to: '/docs/category/performance-tuning--customization',
              },
              {
                label: 'Technical Insights',
                to: '/docs/category/technical-insights',
              },
              {
                label: 'Buying & Comparison Guides',
                to: '/docs/category/buying--comparison-guides',
              },
              {
                label: 'Pit Bike Basics',
                to: '/docs/category/pit-bike-basics',
              },
            ],
          },
          {
            title: 'Tech Database',
            items: [
              {
                label: 'Database',
                to: '/docs/tech',
              },
            ],
          },
          {
            title: 'Manuals',
            items: [
              {
                label: 'Owner Manual',
                to: '/docs/category/owner-manual',
              },
              {
                label: 'Service Manual',
                to: '/docs/category/service-manual',
              },
              {
                label: 'Parts Diagram',
                to: '/docs/category/parts-diagram',
              },
              {
                label: 'Wiring Diagram',
                to: '/docs/category/wiring-diagram',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Ru Source',
                href: 'http://mypitbike.ru',
              },
              {
                label: 'About Us',
                to: '/about',
              },
            ],
          },
        ],
        copyright: `From 🇷🇺 with ❤️ © ${new Date().getFullYear()} MyPitbike`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'ZBAV8KAAU6',

        // Public API key: it is safe to commit it
        apiKey: '381699df474fba3ce212b990b0a3b0a1',

        indexName: 'mypitbike',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
//        replaceSearchResultPathname: {
//          from: '/docs/', // or as RegExp: /\/docs\//
//          to: '/',
//        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
    }),
};

export default config;
