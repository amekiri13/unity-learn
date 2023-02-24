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
    "title": "Unity编辑器基础",
    "headers": [
      {
        "level": 2,
        "title": "创建一个Unity项目",
        "slug": "创建一个unity项目",
        "link": "#创建一个unity项目",
        "children": []
      },
      {
        "level": 2,
        "title": "Unity 窗口布局",
        "slug": "unity-窗口布局",
        "link": "#unity-窗口布局",
        "children": [
          {
            "level": 3,
            "title": "默认窗口布局",
            "slug": "默认窗口布局",
            "link": "#默认窗口布局",
            "children": []
          },
          {
            "level": 3,
            "title": "恢复默认窗口布局",
            "slug": "恢复默认窗口布局",
            "link": "#恢复默认窗口布局",
            "children": []
          },
          {
            "level": 3,
            "title": "调整字体",
            "slug": "调整字体",
            "link": "#调整字体",
            "children": []
          }
        ]
      }
    ],
    "path": "/unity-basic/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/unity-basic/3dviewer/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "场景",
    "headers": [
      {
        "level": 2,
        "title": "定义",
        "slug": "定义",
        "link": "#定义",
        "children": []
      }
    ],
    "path": "/unity-basic/scene/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "游戏物体",
    "headers": [
      {
        "level": 2,
        "title": "操作",
        "slug": "操作",
        "link": "#操作",
        "children": []
      },
      {
        "level": 2,
        "title": "移动工具",
        "slug": "移动工具",
        "link": "#移动工具",
        "children": []
      }
    ],
    "path": "/unity-basic/game-object/",
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
