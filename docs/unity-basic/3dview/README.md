# 3D视图

## 基础

- 导航器 Gizmo，表示世界坐标的方向
- 栅格 Grid，表示XZ坐标平面
- 天空盒 Skybox，表示游戏世界的背景

## 概念

场景窗口中的视图称作3D视图，代表一个三维游戏世界

![](https://static.amekiri.com/images/2023-02-24_15-44.png)

### 导航器

右上角三个轴的东西，称为导航器(Gizmo)，没有导航器将无法知道游戏世界的指向

### 栅格

在3D视图中有暗灰色的导航线，称为栅格(Grid)

#### 隐藏栅格

有个选项可以进行隐藏

![](https://static.amekiri.com/images/2023-02-24_15-50.png)

![](https://static.amekiri.com/images/2023-02-24_15-51.png)

可见栅格已经被隐藏

#### 调整栅格透明度

点击刚刚按钮的下拉框，修改Opacity可以修改透明度

![](https://static.amekiri.com/images/2023-02-24_15-52.png)

### 天空盒

整个游戏世界的背景，也可以关闭

#### 关闭天空盒

在3D视图的右边可以看到一个按钮，点击即可(鼠标指着的)

![](https://static.amekiri.com/images/2023-02-24_15-56.png)

## 视图相关操作

1. 旋转视图：ALt+LMB(Left Mouse Button)
2. 缩放视图
  - 鼠标滚轮
  - Alt+RMB(Right Mouse Button)，精准缩放
3. 平移视图：MMB(鼠标中键)

## 导航器相关操作

- 按Shift，点击中间的小方块，恢复方向
- 点Y轴，顶视图
- 点X轴，右视图
- 点Z轴，前视图