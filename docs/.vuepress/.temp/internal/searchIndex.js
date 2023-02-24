export const searchIndex = [
  {
    "title": "Unity 基础入门教程",
    "headers": [
      {
        "level": 2,
        "title": "前言",
        "slug": "前言",
        "link": "#前言",
        "children": []
      },
      {
        "level": 2,
        "title": "使用声明",
        "slug": "使用声明",
        "link": "#使用声明",
        "children": []
      },
      {
        "level": 2,
        "title": "许可证",
        "slug": "许可证",
        "link": "#许可证",
        "children": []
      },
      {
        "level": 2,
        "title": "开始学习",
        "slug": "开始学习",
        "link": "#开始学习",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "创建一个Unity项目",
    "headers": [],
    "path": "/create-project/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Unity 的基本安装",
    "headers": [
      {
        "level": 2,
        "title": "对于Windows用户",
        "slug": "对于windows用户",
        "link": "#对于windows用户",
        "children": [
          {
            "level": 3,
            "title": "打开Unity官方网站，并下载Unity Hub",
            "slug": "打开unity官方网站-并下载unity-hub",
            "link": "#打开unity官方网站-并下载unity-hub",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "对于Linux用户",
        "slug": "对于linux用户",
        "link": "#对于linux用户",
        "children": []
      },
      {
        "level": 2,
        "title": "激活许可证",
        "slug": "激活许可证",
        "link": "#激活许可证",
        "children": []
      },
      {
        "level": 2,
        "title": "编辑器安装",
        "slug": "编辑器安装",
        "link": "#编辑器安装",
        "children": []
      }
    ],
    "path": "/unity-install/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
