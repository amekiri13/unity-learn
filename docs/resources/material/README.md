# 材质

## 定义

材质 Material，定义了物体的表面细节

- 颜色
- 金属 / 非金属
- 光滑 / 粗糙
- 透明 / 半透明 / 不透明
- 凹陷 / 凸起

## 添加材质

1. 添加一个目录(Assets目录下)
2. 添加一个材质 Create->Material
  - Albedo，指定表面颜色
  - 给材质起个名字

![](https://static.amekiri.com/images/cwpxp-csu0o.gif)

![](https://static.amekiri.com/images/2023-02-26_21-22.png)

3. 给物体指定材质
  - 选中物体，将材质拖到物体上

![](https://static.amekiri.com/images/uh06b-u9qhw.gif)

## 关联组件

- Mesh Filter 网格过滤器，负责从资源中获取网格数据并显示出来
- Mesh Renderer 网格渲染器，包括材质渲染是在这里配置的
  - Material 材质，可以有多个

![](https://static.amekiri.com/images/2023-02-26_21-45.png)

可以将材质拖动到Inspector的Mesh Renderer的Material(鼠标左键不要松)

![](https://static.amekiri.com/images/uy0uz-yqyg0.gif)

也可以先锁定Inspector后将材质拖到Mesh Renderer下面的Material