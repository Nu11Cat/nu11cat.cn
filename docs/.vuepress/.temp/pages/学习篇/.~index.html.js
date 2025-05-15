import comp from "D:/study/Nu11Cat/​​JavaThinkTank​/my-docs/docs/.vuepress/.temp/pages/学习篇/.~index.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%AD%A6%E4%B9%A0%E7%AF%87/.~index.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"学习篇/.~index.md\"}")
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
