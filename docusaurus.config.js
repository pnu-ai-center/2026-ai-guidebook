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

  // Repository name
  baseUrl: "/2026-ai-guidebook/",

  // GitHub Pages deployment config
  organizationName: "pnu-ai-center",

  projectName: "2026-ai-guidebook",

  onBrokenLinks: "throw",

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
          to: "/docs/intro",
          label: "인사말",
          position: "right",
        },
        {
          to: "/docs/curriculum",
          label: "교육과정",
          position: "right",
        },
        {
          to: "/docs/professor",
          label: "교수진",
          position: "right",
        },
        {
          to: "/docs/apply",
          label: "지원안내",
          position: "right",
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
              to: "/docs/intro",
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
