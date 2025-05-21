export const themeData = JSON.parse("{\"encrypt\":{},\"repo\":\"Nu11Cat/Nu11Cat.github.io\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routerLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"sidebar\":\"structure\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/index.md\"},{\"text\":\"学习篇\",\"link\":\"/1.学习篇/\"},{\"text\":\"面试篇\",\"link\":\"/2.面试篇/\"},{\"text\":\"算法篇\",\"link\":\"/3.算法篇/\"},{\"text\":\"项目篇\",\"link\":\"/4.项目篇/\"},{\"text\":\"资源整理\",\"link\":\"/5.资源整理/\"},{\"text\":\"关于我\",\"link\":\"/6.关于我/\"}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
