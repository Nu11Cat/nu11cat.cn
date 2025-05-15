import comp from "D:/study/Nu11Cat/​​JavaThinkTank​/my-docs/docs/.vuepress/.temp/pages/项目篇/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A1%B9%E7%9B%AE%E7%AF%87/\",\"title\":\"项目篇index\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"项目篇index\",\"order\":5},\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"项目篇/index.md\"}")
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
