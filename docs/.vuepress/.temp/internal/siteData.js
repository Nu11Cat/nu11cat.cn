export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Nu11CatJava\",\"description\":\"一个Java学习者记录学习过程、积累知识、分享经验、陪伴同行者一起成长的网站\",\"head\":[[\"script\",{\"data-goatcounter\":\"https://nu11cat.goatcounter.com/count\",\"async\":true,\"src\":\"//gc.zgo.at/count.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
