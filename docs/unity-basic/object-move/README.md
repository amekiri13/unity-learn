# 物体的移动，旋转与缩放

## 基本介绍

物体移动工具如下：

![](https://static.amekiri.com/images/2023-02-26_17-18.png)

从上到下依次是：

- Move Tool 移动工具
- Rotate Tool 旋转工具
- Scale Toos 缩放工具

## 移动工具

选中物体后，会出现三个坐标轴：

![](https://static.amekiri.com/images/2023-02-26_17-21.png)

拖动坐标轴即可移动物体

同时，移动工具有两种方法：
- 沿**坐标轴**移动
- 在**坐标平面**内移动

可以在Inspector里精确制定，或者Reset重置

### 在坐标平面内移动

在三个坐标轴交界处有三个小平面

![](https://static.amekiri.com/images/2023-02-26_17-26.png)

点击即可按照面进行拖动

![](https://static.amekiri.com/images/njp53-nfhb0.gif)

### Reset重置

重置后坐标归0，回到世界中心点位置

![](https://static.amekiri.com/images/psotk-ldfva.gif)

## 旋转工具

要点：
- 逆时针为正，顺时针为负
- 可以在Inspector里精确制定
- 按住Ctrl键时，角度增量为15°
Edit->Grid and Snap Settings 栅格吸附设定(我这个版本好像没有？)

### 使用

![](https://static.amekiri.com/images/2023-02-26_17-47.png)

其中有红圈，蓝圈，绿圈以及白圈

拖动即可旋转

## 缩放工具

选择缩放工具

![](https://static.amekiri.com/images/2023-02-26_17-54.png)

缩放工具有以下两种方法：

- 轴向缩放
- 整体缩放

### 轴向缩放

拖动对应轴即可

![](https://static.amekiri.com/images/hudgs-ruykb.gif)

### 整体缩放
拖动中心的方块即可

![](https://static.amekiri.com/images/grj13-ebyh8.gif)

## 要点与细节

1. 可以使用快捷键切换：W、E、R

![](https://static.amekiri.com/images/2023-02-26_17-18.png)

2. 操作模式，保持默认![](https://static.amekiri.com/images/2023-02-26_18-20.png)
  - Pivot 轴心 / Center 中心点
  - Global 世界坐标系 / Local 局部坐标系

3. 当物体位置重置时，最好在Hierarchy窗口选中物体

![](https://static.amekiri.com/images/2023-02-26_17-42.png)

即使物体被挡住，也是可以操作的

## 更多操作

### 多选
- 按Ctrl或Shift 多选
- 在3D视图中，鼠标框选

### 复制
- 选中物体，Ctrl+D复制物体
- 右键 Duplicate

### 聚焦
- 选中物体，按F键，置于视图中心
- 或者双击物体

### 激活 Active
- 选择物体，在检查器中激活/禁用物体

![](https://static.amekiri.com/images/2023-02-26_19-28.png)

### 对齐

对于初学者，直接目视对齐即可

进入正交顶视图/正交右视图/正交后视图，方便观察

切换到[正交视图](/unity-basic/perspective-and-ortho/#切换正交视图)