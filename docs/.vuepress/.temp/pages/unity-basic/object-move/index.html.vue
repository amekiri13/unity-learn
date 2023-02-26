<template><div><h1 id="物体的移动-旋转与缩放" tabindex="-1"><a class="header-anchor" href="#物体的移动-旋转与缩放" aria-hidden="true">#</a> 物体的移动，旋转与缩放</h1>
<h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2>
<p>物体移动工具如下：</p>
<p><img src="https://static.amekiri.com/images/2023-02-26_17-18.png" alt=""></p>
<p>从上到下依次是：</p>
<ul>
<li>Move Tool 移动工具</li>
<li>Rotate Tool 旋转工具</li>
<li>Scale Toos 缩放工具</li>
</ul>
<h2 id="移动工具" tabindex="-1"><a class="header-anchor" href="#移动工具" aria-hidden="true">#</a> 移动工具</h2>
<p>选中物体后，会出现三个坐标轴：</p>
<p><img src="https://static.amekiri.com/images/2023-02-26_17-21.png" alt=""></p>
<p>拖动坐标轴即可移动物体</p>
<p>同时，移动工具有两种方法：</p>
<ul>
<li>沿<strong>坐标轴</strong>移动</li>
<li>在<strong>坐标平面</strong>内移动</li>
</ul>
<p>可以在Inspector里精确制定，或者Reset重置</p>
<h3 id="在坐标平面内移动" tabindex="-1"><a class="header-anchor" href="#在坐标平面内移动" aria-hidden="true">#</a> 在坐标平面内移动</h3>
<p>在三个坐标轴交界处有三个小平面</p>
<p><img src="https://static.amekiri.com/images/2023-02-26_17-26.png" alt=""></p>
<p>点击即可按照面进行拖动</p>
<p><img src="https://static.amekiri.com/images/njp53-nfhb0.gif" alt=""></p>
<h3 id="reset重置" tabindex="-1"><a class="header-anchor" href="#reset重置" aria-hidden="true">#</a> Reset重置</h3>
<p>重置后坐标归0，回到世界中心点位置</p>
<p><img src="https://static.amekiri.com/images/psotk-ldfva.gif" alt=""></p>
<h2 id="旋转工具" tabindex="-1"><a class="header-anchor" href="#旋转工具" aria-hidden="true">#</a> 旋转工具</h2>
<p>要点：</p>
<ul>
<li>逆时针为正，顺时针为负</li>
<li>可以在Inspector里精确制定</li>
<li>按住Ctrl键时，角度增量为15°
Edit-&gt;Grid and Snap Settings 栅格吸附设定(我这个版本好像没有？)</li>
</ul>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<p><img src="https://static.amekiri.com/images/2023-02-26_17-47.png" alt=""></p>
<p>其中有红圈，蓝圈，绿圈以及白圈</p>
<p>拖动即可旋转</p>
<h2 id="缩放工具" tabindex="-1"><a class="header-anchor" href="#缩放工具" aria-hidden="true">#</a> 缩放工具</h2>
<p>选择缩放工具</p>
<p><img src="https://static.amekiri.com/images/2023-02-26_17-54.png" alt=""></p>
<p>缩放工具有以下两种方法：</p>
<ul>
<li>轴向缩放</li>
<li>整体缩放</li>
</ul>
<h3 id="轴向缩放" tabindex="-1"><a class="header-anchor" href="#轴向缩放" aria-hidden="true">#</a> 轴向缩放</h3>
<p>拖动对应轴即可</p>
<p><img src="https://static.amekiri.com/images/hudgs-ruykb.gif" alt=""></p>
<h3 id="整体缩放" tabindex="-1"><a class="header-anchor" href="#整体缩放" aria-hidden="true">#</a> 整体缩放</h3>
<p>grj13-ebyh8.gif
拖动中心的方块即可</p>
<p><img src="https://static.amekiri.com/images/grj13-ebyh8.gif" alt=""></p>
<h2 id="要点与细节" tabindex="-1"><a class="header-anchor" href="#要点与细节" aria-hidden="true">#</a> 要点与细节</h2>
<ol>
<li>可以使用快捷键切换：W、E、R</li>
</ol>
<p><img src="https://static.amekiri.com/images/2023-02-26_17-18.png" alt=""></p>
<ol start="2">
<li>操作模式，保持默认<img src="https://static.amekiri.com/images/2023-02-26_18-20.png" alt=""></li>
</ol>
<ul>
<li>Pivot 轴心 / Center 中心点</li>
<li>Global 世界坐标系 / Local 局部坐标系</li>
</ul>
<ol start="3">
<li>当物体位置重置时，最好在Hierarchy窗口选中物体</li>
</ol>
<p><img src="https://static.amekiri.com/images/2023-02-26_17-42.png" alt=""></p>
<p>即使物体被挡住，也是可以操作的</p>
</div></template>


