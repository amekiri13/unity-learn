<template><div><h1 id="unity-的基本安装" tabindex="-1"><a class="header-anchor" href="#unity-的基本安装" aria-hidden="true">#</a> Unity 的基本安装</h1>
<h2 id="对于windows用户" tabindex="-1"><a class="header-anchor" href="#对于windows用户" aria-hidden="true">#</a> 对于Windows用户</h2>
<p><strong>声明：本人的Unity环境在Linux下，位于Windows的安装环境均为虚拟机</strong></p>
<h3 id="打开unity官方网站-并下载unity-hub" tabindex="-1"><a class="header-anchor" href="#打开unity官方网站-并下载unity-hub" aria-hidden="true">#</a> 打开Unity官方网站，并下载Unity Hub</h3>
<p>有<a href="https://unity.com" target="_blank" rel="noopener noreferrer">国际站<ExternalLinkIcon/></a>和<a href="https://unity.cn" target="_blank" rel="noopener noreferrer">中国站<ExternalLinkIcon/></a></p>
<p>推荐在国际站下载，听说中国站的免费版Unity在游戏打包后在右下角加入水印（一直存在）</p>
<p>打开官方网站</p>
<p><img src="https://static.amekiri.com/images/2023-02-21_22-55.png" alt="Unity国际站"></p>
<p>其实国际站也是有中文的，只是默认语言是英文，在页面的下面可以更改</p>
<p><img src="https://static.amekiri.com/images/2023-02-21_22-59.png" alt=""></p>
<p><img src="https://static.amekiri.com/images/2023-02-21_23-00.png" alt=""></p>
<p>点击&quot;Download Unity&quot;，然后点击&quot;下载Windows版&quot;</p>
<p><img src="https://static.amekiri.com/images/2023-02-21_23-03.png" alt=""></p>
<p>接下来就按照安装程序步骤进行安装，然后注册一个Unity Hub账号</p>
<h2 id="对于linux用户" tabindex="-1"><a class="header-anchor" href="#对于linux用户" aria-hidden="true">#</a> 对于Linux用户</h2>
<p>详情可看<a href="https://docs.unity3d.com/hub/manual/InstallHub.html#install-hub-linux" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a></p>
<p>对于使用Arch Linux及其衍生发行版的用户可以直接安装AUR的Unity Hub：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yay <span class="token parameter variable">-S</span> unityhub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="激活许可证" tabindex="-1"><a class="header-anchor" href="#激活许可证" aria-hidden="true">#</a> 激活许可证</h2>
<p>从Unity 5.0以后的版本都是免费的，但仍然要自行申请免费许可证</p>
<p>登录Unity ID，然后点左边的小齿轮图标（设置）-&gt;许可证</p>
<p><img src="https://static.amekiri.com/images/2023-02-21_23-47.png" alt=""></p>
<p><img src="https://static.amekiri.com/images/2023-02-21_23-50.png" alt=""></p>
<p>点击&quot;添加按钮&quot;-&gt;&quot;获取免费的个人许可证&quot;</p>
<p><img src="https://static.amekiri.com/images/2023-02-21_23-52.png" alt=""></p>
<p><img src="https://static.amekiri.com/images/2023-02-21_23-53.png" alt=""></p>
<p>这样就获取了免费许可证</p>
<h2 id="编辑器安装" tabindex="-1"><a class="header-anchor" href="#编辑器安装" aria-hidden="true">#</a> 编辑器安装</h2>
<p>下面进行安装Unity编辑器</p>
<p><img src="https://static.amekiri.com/images/2023-02-22_00-02.png" alt=""></p>
<p>推荐安装LTS版本</p>
<p>至于安装的组件，推荐选择&quot;Windows Build Support(IL2CPP)&quot;(因为我是Linux所以没有Windows的IL2CPP，只有Mono，若需要开发SteamOS/Linux游戏可以选择&quot;Linux Build Support(IL2CPP)&quot;)</p>
<p>不推荐选择Mono</p>
<p>语言推荐选择English，因为Unity的中文翻译的不好（出现一些奇怪的名词）</p>
<p><img src="https://static.amekiri.com/images/2023-02-22_00-04.png" alt=""></p>
<p>至于Mono和IL2CPP的区别后面会讲</p>
</div></template>


