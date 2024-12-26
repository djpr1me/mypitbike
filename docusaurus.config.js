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
  tagline: 'Your ultimate knowledge hub for mini motorcycles.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.mypitbike.ru',
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
            label: 'Knowledge base',
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
                to: '/docs/guides/',
              },
              {
                label: 'Performance Tuning & Customization',
                to: '/docs/guides/',
              },
              {
                label: 'Technical Insights',
                to: '/docs/guides/',
              },
              {
                label: 'Buying & Comparison Guides',
                to: '/docs/guides/',
              },
              {
                label: 'Pit Bike Basics',
                to: '/docs/guides/',
              },
            ],
          },
          {
            title: 'Tech database',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'Manuals',
            items: [
              {
                label: 'Owner Manual',
                to: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Service Manual',
                to: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Parts Diagram',
                to: 'https://x.com/docusaurus',
              },
              {
                label: 'Wiring Diagram',
                to: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Russian source',
                href: 'http://mypitbike.ru',
              },
              {
                label: 'Contact Us',
                href: '/contact',
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
          appId: '123123',
          apiKey: '345345345',
          indexName: 'MyPitbike',
        }
    }),
};

export default config;
