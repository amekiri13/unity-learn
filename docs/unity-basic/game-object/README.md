# 游戏物体

游戏物体 Game Object，即游戏中的任何角色、道具、建筑等

演示：在Hierarchy窗口中右键，选择3D Object->Cube

![](https://static.amekiri.com/images/2023-02-24_15-20.png)

完成后，将在Hierrachy和Scene窗口多出一个游戏物体：

![](https://static.amekiri.com/images/2023-02-24_15-21.png)

## 操作

- 选中一个物体，以橙色轮廓显示
  - 选中方式：Hierrachy或Scene中单击
  - 鼠标滚轮可以将物体拉近或拉远
- 右键Rename，起个名字
- 右键Delete，删除物体

在右侧Inspector窗口，观察物体的坐标(Transform)

选中物体后可以查看Inspector窗口

![](https://static.amekiri.com/images/2023-02-24_15-27.png)

像Transform，Mesh Renderer这些叫做组件

## 移动工具

选中上面中的移动工具（已经选中的，四箭头图标的）

![](https://static.amekiri.com/images/2023-02-24_15-34.png)

可以看到红色的x轴，绿色的y轴，蓝色的z轴(左手坐标系)

比如拖动x轴物体将在x轴移动，拖动z轴物体将在z轴移动

拖动后Transform发生了变化