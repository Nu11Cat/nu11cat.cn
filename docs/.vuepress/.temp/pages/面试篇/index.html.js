import comp from "D:/study/Nu11Cat/​​JavaThinkTank​/my-docs/docs/.vuepress/.temp/pages/面试篇/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%9D%A2%E8%AF%95%E7%AF%87/\",\"title\":\"面试篇index\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"面试篇index\",\"order\":3},\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"面试篇/index.md\"}")
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
