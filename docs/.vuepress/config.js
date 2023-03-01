import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Unity 基础教程',
  description: '',
  base:'/',
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme: defaultTheme(
    {
      sidebar: [
        {
          text:"Unity 安装",
          children:["/unity-install/"]
        },
        {
          text:"Unity 基本概念与使用",
          children:["/unity-basic/",
            "/unity-basic/scene/",
            "/unity-basic/game-object/",
            "/unity-basic/3dview/",
            "/unity-basic/world-coordinate-system/",
            "/unity-basic/vision-center/",
            "/unity-basic/perspective-and-ortho/",
            "/unity-basic/3d-object/",
            "/unity-basic/object-move/",
            "/unity-basic/practice/"]
        },
        {
          text:"Unity 资源相关",
          children:['/resources/mesh/',
          "/resources/material/",
          "/resources/texture/",
          "/resources/ex-model/",
          "/resources/model-other/",
          "/resources/fbx-import/"]
        }
      ],
      navbar:[
        {
          text:"GitHub",
          link:"https://github.com/amekiri13/unity-learn"
        }
      ]
    }
  )

})
