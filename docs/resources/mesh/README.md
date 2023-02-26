# 网格

## 定义

网格Mesh，存储了模型的形状数据

- 模型的形状，由若干个小面围合而成
- 模型是中空的
- Mesh中包含了面、定点坐标、面的法向等数据

在Unity观察模型的网格

- Shaded 着色模式，显示表面材质
- Wireframe 线框模式，仅显示网格
- Shaded Wireframe 线框着色模式

![](https://static.amekiri.com/images/2023-02-26_19-54.png)

显然，任何物体的表面都是由若干三角面围成

![](https://static.amekiri.com/images/2023-02-26_19-56.png)

## 要点与细节

1. 物体表面由三角面构成，Mesh记录了其中的面和顶点数据
2. 面数越多，物体表面越精细，GPU负担越重(高模，面数极多，高精细度的模型)