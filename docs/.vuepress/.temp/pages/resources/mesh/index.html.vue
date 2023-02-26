<template><div><h1 id="网格" tabindex="-1"><a class="header-anchor" href="#网格" aria-hidden="true">#</a> 网格</h1>
<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2>
<p>网格Mesh，存储了模型的形状数据</p>
<ul>
<li>模型的形状，由若干个小面围合而成</li>
<li>模型是中空的</li>
<li>Mesh中包含了面、定点坐标、面的法向等数据</li>
</ul>
<p>在Unity观察模型的网格</p>
<ul>
<li>Shaded 着色模式，显示表面材质</li>
<li>Wireframe 线框模式，仅显示网格</li>
<li>Shaded Wireframe 线框着色模式</li>
</ul>
<p><img src="https://static.amekiri.com/images/2023-02-26_19-54.png" alt=""></p>
<p>显然，任何物体的表面都是由若干三角面围成</p>
<p><img src="https://static.amekiri.com/images/2023-02-26_19-56.png" alt=""></p>
<h2 id="要点与细节" tabindex="-1"><a class="header-anchor" href="#要点与细节" aria-hidden="true">#</a> 要点与细节</h2>
<ol>
<li>物体表面由三角面构成，Mesh记录了其中的面和顶点数据</li>
<li>面数越多，物体表面越精细，GPU负担越重(高模，面数极多，高精细度的模型)</li>
</ol>
</div></template>


