import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  bundler: viteBundler(),

  title: "Nu11CatJava",
  description: "一个Java学习者记录学习过程、积累知识、分享经验、陪伴同行者一起成长的网站",

  // 添加 GoatCounter 代码到 head 中
  head: [
    [
      'script',
      {
        'data-goatcounter': 'https://nu11cat.goatcounter.com/count',
        async: true,
        src: '//gc.zgo.at/count.js',
      },
    ],
  ],

  theme: hopeTheme({
    repo: "Nu11Cat/Nu11Cat.github.io",
    docsDir: "docs",
    sidebar: "structure",
    navbar: [
      { text: "首页", link: "/index.md" },
      { text: "学习篇", link: "/1.学习篇/" },
      { text: "面试篇", link: "/2.面试篇/" },
      { text: "算法篇", link: "/3.算法篇/" },
      { text: "项目篇", link: "/4.项目篇/" },
      { text: "资源整理", link: "/5.资源整理/" },
      { text: "关于我", link: "/6.关于我/" },
    ],
  }),
});
