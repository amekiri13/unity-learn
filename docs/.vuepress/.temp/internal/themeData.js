export const themeData = JSON.parse("{\"sidebar\":[{\"text\":\"Unity 安装\",\"children\":[\"/unity-install/\"]},{\"text\":\"Unity 基本概念与使用\",\"children\":[\"/unity-basic/\",\"/unity-basic/scene/\",\"/unity-basic/game-object/\",\"/unity-basic/3dview/\",\"/unity-basic/world-coordinate-system/\",\"/unity-basic/vision-center/\",\"/unity-basic/perspective-and-ortho/\",\"/unity-basic/3d-object/\",\"/unity-basic/object-move/\",\"/unity-basic/practice/\"]},{\"text\":\"Unity 资源管理\",\"children\":[\"/resources/mesh\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
