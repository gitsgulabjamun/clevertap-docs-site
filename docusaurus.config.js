
// @ts-check

const config = {
  title: 'CleverTap Documentation',
  tagline: 'Everything you need to know to use CleverTap',
  url: 'https://gitsgulabjamun.github.io',
  baseUrl: '/clevertap-docs-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'gitsgulabjamun',
  projectName: 'clevertap-docs-site',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  deploymentBranch: 'gh-pages',
  trailingSlash: false,
};

module.exports = config;
