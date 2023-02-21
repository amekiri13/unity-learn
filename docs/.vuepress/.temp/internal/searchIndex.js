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
    "title": "Hello",
    "headers": [],
    "path": "/basic/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "使用Unity编写一个简单的功能",
    "headers": [],
    "path": "/basic/hello.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Unity 基本安装",
    "headers": [],
    "path": "/basic/install.html",
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
