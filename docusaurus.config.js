// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "2026 AI 교육 안내서",

  tagline: "부산대학교 AI융합교육원 온라인 브로슈어",

  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // GitHub Pages URL
  url: "https://pnu-ai-center.github.io",

  // Repository name (GitHub Actions에서 자동 인식, 로컬은 /)
  baseUrl: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : "/",

  // GitHub Pages deployment config
  organizationName: process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[0] : "pnu-ai-center",
  projectName: process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : "2026-ai-guidebook",

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",

          editUrl:
            "https://github.com/pnu-ai-center/2026-ai-guidebook/tree/main/",
        },

        // blog 제거 가능
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "AI융합교육원",

      logo: {
        alt: "PNU Logo",
        src: "img/pnu-logo.png",
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "브로슈어",
        },
      ],
    },

    footer: {
      style: "light",

      links: [
        {
          title: "AI융합교육원",
          items: [
            {
              label: "브로슈어 홈",
              to: "/",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} 부산대학교 AI융합교육원`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
