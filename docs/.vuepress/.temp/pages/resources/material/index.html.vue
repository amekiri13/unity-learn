<template><div><h1 id="材质" tabindex="-1"><a class="header-anchor" href="#材质" aria-hidden="true">#</a> 材质</h1>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>材质 Material，定义了物体的表面细节</p>
<ul>
<li>颜色</li>
<li>金属 / 非金属</li>
<li>光滑 / 粗糙</li>
<li>透明 / 半透明 / 不透明</li>
<li>凹陷 / 凸起</li>
</ul>
<h2 id="添加材质" tabindex="-1"><a class="header-anchor" href="#添加材质" aria-hidden="true">#</a> 添加材质</h2>
<ol>
<li>添加一个目录(Assets目录下)</li>
<li>添加一个材质 Create-&gt;Material</li>
</ol>
<ul>
<li>Albedo，指定表面颜色</li>
<li>给材质起个名字</li>
</ul>
<p><img src="https://static.amekiri.com/images/cwpxp-csu0o.gif" alt=""></p>
<p><img src="https://static.amekiri.com/images/2023-02-26_21-22.png" alt=""></p>
<ol start="3">
<li>给物体指定材质</li>
</ol>
<ul>
<li>选中物体，将材质拖到物体上</li>
</ul>
<p><img src="https://static.amekiri.com/images/uh06b-u9qhw.gif" alt=""></p>
<h2 id="关联组件" tabindex="-1"><a class="header-anchor" href="#关联组件" aria-hidden="true">#</a> 关联组件</h2>
<ul>
<li>Mesh Filter 网格过滤器，负责从资源中获取网格数据并显示出来</li>
<li>Mesh Renderer 网格渲染器，包括材质渲染是在这里配置的
<ul>
<li>Material 材质，可以有多个</li>
</ul>
</li>
</ul>
<p><img src="https://static.amekiri.com/images/2023-02-26_21-45.png" alt=""></p>
<p>也可以先锁定Inspector后将材质拖到Mesh Renderer下面的Material(鼠标不要松手)</p>
<p><img src="https://static.amekiri.com/images/uy0uz-yqyg0.gif" alt=""></p>
</div></template>


