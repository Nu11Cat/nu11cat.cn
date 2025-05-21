import comp from "D:/study/Nu11Cat/Nu11Cat.github.io/docs/.vuepress/.temp/pages/6.关于我/学习周记/首页.html.vue"
const data = JSON.parse("{\"path\":\"/6.%E5%85%B3%E4%BA%8E%E6%88%91/%E5%AD%A6%E4%B9%A0%E5%91%A8%E8%AE%B0/%E9%A6%96%E9%A1%B5.html\",\"title\":\"首页\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"首页\"},\"readingTime\":{\"minutes\":0.45,\"words\":135},\"filePathRelative\":\"6.关于我/学习周记/首页.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
