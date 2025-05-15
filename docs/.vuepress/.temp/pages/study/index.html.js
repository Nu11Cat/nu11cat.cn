import comp from "D:/study/Nu11Cat/​​JavaThinkTank​/my-docs/docs/.vuepress/.temp/pages/study/index.html.vue"
const data = JSON.parse("{\"path\":\"/study/\",\"title\":\"学习篇｜Java 后端核心知识体系 🚀\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":3.37,\"words\":1010},\"filePathRelative\":\"study/index.md\"}")
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
