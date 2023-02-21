export const data = JSON.parse("{\"key\":\"v-7664c5fa\",\"path\":\"/basic/\",\"title\":\"Hello\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1675873417000,\"contributors\":[{\"name\":\"amekiri13\",\"email\":\"admin@amekiri.com\",\"commits\":1}]},\"filePathRelative\":\"basic/README.md\"}")

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
