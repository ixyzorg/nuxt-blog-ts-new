---
title: "详解flex布局"

published: 2024-05-28 23:10:00

description: "弹性盒及其用法"

tags: [css,flex]

---

## flex布局原理

flex布局为弹性盒布局,任何元素容器都可以指定为flex布局.

同时,flex容器内子元素可以为块元素(div),也可以为行内元素(span)

```html
<div style="display: flex; width: 500px;height: 500px;background-color: red;">
    <span style="width: 100px; height: 200px; border: 1px solid black;"></span>
    <span style="width: 100px; height: 200px; border: 1px solid black;"></span>
    <span style="width: 100px; height: 200px; border: 1px solid black;"></span>
</div>
```

<img src="https://s3.bmp.ovh/imgs/2024/05/28/e1cc980dd419286c.png" alt="图片描述" style="zoom:20%;" />

当容器内子元素不设置高度,则子元素高度为容器高度

```html
  <div style="display: flex; width: 500px;height: 500px;background-color: red;">
    <span style="width: 100px;  border: 1px solid black;"></span>
    <span style="width: 100px;  border: 1px solid black;"></span>
    <span style="width: 100px;  border: 1px solid black;"></span>
  </div>
```

<img src="https://s3.bmp.ovh/imgs/2024/05/28/21ada0c277230edd.png" style="zoom:20%;" />

## 元素容器属性

```css
flex-direction: column;//主轴方向默认为横轴
justify-content: center;//主轴对齐方式 默认为left
flex-wrap: nowrap; //是否换行 默认为不换行
align-content: center;//侧轴对齐方式      多行
align-items: center;//侧轴对齐方式        单行
```



## 容器子元素属性

```css
flex: auto //伸长并吸收 flex 容器中额外的自由空间，也会缩短自身适应flex容器
flex: none //元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。
flex:1     //占几份
align-self: center;//一个子元素侧轴对齐方式
```

**思考题** 轮播图布局?

利用flex布局,子元素设置flex:none.

```html
<div style="width: 200px; height: 150px; border: 1px solid pink;">
  <ul style="display: flex;">
    <li style="flex: none; width: 200px;height: 150px; border: 1px solid red;"></li>
    <li style="flex: none; width: 200px;height: 150px; border: 1px solid red;"></li>
    <li style="flex: none; width: 200px;height: 150px; border: 1px solid red;"></li>
    <li style="flex: none; width: 200px;height: 150px; border: 1px solid red;"></li>
    <li style="flex: none; width: 200px;height: 150px; border: 1px solid red;"></li>
  </ul>
 </div>
```

![](https://s3.bmp.ovh/imgs/2024/05/29/6508c0e1b10e2af3.png)

