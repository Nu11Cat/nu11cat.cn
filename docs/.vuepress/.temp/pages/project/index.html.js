import comp from "D:/study/Nu11Cat/​​JavaThinkTank​/my-docs/docs/.vuepress/.temp/pages/project/index.html.vue"
const data = JSON.parse("{\"path\":\"/project/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"project/index.md\"}")
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
