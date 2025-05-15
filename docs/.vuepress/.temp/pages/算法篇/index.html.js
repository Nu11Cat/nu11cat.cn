import comp from "D:/study/Nu11Cat/​​JavaThinkTank​/my-docs/docs/.vuepress/.temp/pages/算法篇/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%AE%97%E6%B3%95%E7%AF%87/\",\"title\":\"学习篇index\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"学习篇index\",\"order\":4},\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"算法篇/index.md\"}")
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
