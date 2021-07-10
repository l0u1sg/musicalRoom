const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Musical Room',
  tagline: '🎵 Let your guests choose the music, simply ✨ and safely 🔒 ',
  url: 'https://musicalroom.ga',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dj.png',
  organizationName: 'l0u1sg', // Usually your GitHub org/user name.
  projectName: 'musicalRoom', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Musical Room',
      logo: {
        alt: 'DJ Men',
        src: 'img/dj.png',
      },
      items: [
        {
          to: 'no', label: 'Create a room', position: 'left'
        },
        {to: 'no', label: 'Join a room', position: 'left'},
        {to: 'blog', label: 'Our blog', position: 'left'},
        {
          href: 'https://github.com/l0u1sg/musicalRoom',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/l0u1sg/musicalRoom',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MusicalRoom`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
