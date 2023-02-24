# Unity 的基本安装

## 对于Windows用户

**声明：本人的Unity环境在Linux下，位于Windows的安装环境均为虚拟机**

### 打开Unity官方网站，并下载Unity Hub

有[国际站](https://unity.com)和[中国站](https://unity.cn)

推荐在国际站下载，听说中国站的免费版Unity在游戏打包后在右下角加入水印（一直存在）

打开官方网站

![Unity国际站](https://static.amekiri.com/images/2023-02-21_22-55.png)

其实国际站也是有中文的，只是默认语言是英文，在页面的下面可以更改

![](https://static.amekiri.com/images/2023-02-21_22-59.png)

![](https://static.amekiri.com/images/2023-02-21_23-00.png)

点击"Download Unity"，然后点击"下载Windows版"

![](https://static.amekiri.com/images/2023-02-21_23-03.png)

接下来就按照安装程序步骤进行安装，然后注册一个Unity Hub账号

## 对于Linux用户

详情可看[这里](https://docs.unity3d.com/hub/manual/InstallHub.html#install-hub-linux)

对于使用Arch Linux及其衍生发行版的用户可以直接安装AUR的Unity Hub：

````shell
yay -S unityhub
````

## 激活许可证

从Unity 5.0以后的版本都是免费的，但需要自行申请免费许可证

登录Unity ID，然后点左边的小齿轮图标（设置）->许可证

![](https://static.amekiri.com/images/2023-02-21_23-47.png)

![](https://static.amekiri.com/images/2023-02-21_23-50.png)

点击"添加按钮"->"获取免费的个人许可证"

![](https://static.amekiri.com/images/2023-02-21_23-52.png)

![](https://static.amekiri.com/images/2023-02-21_23-53.png)

这样就获取了免费许可证

## 编辑器安装

下面进行安装Unity编辑器

![](https://static.amekiri.com/images/2023-02-22_00-02.png)

推荐安装LTS版本

至于安装的组件，推荐选择"Windows Build Support(IL2CPP)"(因为我是Linux所以没有Windows的IL2CPP，只有Mono，若需要开发SteamOS/Linux游戏可以选择"Linux Build Support(IL2CPP)")

不推荐选择Mono

语言推荐选择English，因为Unity的中文翻译的不好（出现一些奇怪的名词）

![](https://static.amekiri.com/images/2023-02-22_00-04.png)

至于Mono和IL2CPP的区别后面会讲