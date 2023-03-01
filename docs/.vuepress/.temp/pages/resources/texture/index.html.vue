<template><div><h1 id="纹理" tabindex="-1"><a class="header-anchor" href="#纹理" aria-hidden="true">#</a> 纹理</h1>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>纹理 Texture，也称贴图，指用一张图片定义物体的表面颜色，用图形表示其中每个位置的颜色</p>
<p>现实世界中，很少有完全纯色的物体，每个表面的颜色可能不一样</p>
<p><strong>比如下面的香蕉，虽然看起来都是黄色的，但仔细看可以知道香蕉的每个黄色都是不一样的，甚至有斑点在上面</strong></p>
<p><img src="https://static.amekiri.com/images/2023-03-01_22-33.png" alt=""></p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>在Unity中，为材质添加贴图：</p>
<ol>
<li>准备图片文件，放到Textures目录</li>
<li>添加贴图</li>
<li>删除贴图</li>
</ol>
<p>Albedo前面的小方块可以设置贴图</p>
<p><img src="https://static.amekiri.com/images/ga1ch-ktx8y.gif" alt=""></p>
<p>若需要删除贴图，选择对应的小方块，然后按Backspace删除</p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<p>建模师提供的模型，本身已经带了网格、材质、贴图</p>
<ul>
<li>Mesh 网格数据</li>
<li>Material 表面材质</li>
<li>Texture 表面材质的贴图</li>
</ul>
</div></template>


