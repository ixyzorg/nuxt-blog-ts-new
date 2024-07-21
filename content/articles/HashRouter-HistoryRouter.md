---
title: "前端路由"

published: 2024-07-12 21:20:00

description: "聊一聊前端路由Hash模式和History模式"

tags: [router,hash,history]

---
## Hash模式

Hash模式，也叫锚点模式，是前端路由的一种实现方式，它通过改变URL的hash值来控制页面的跳转。

```js
<a href="#1">1</a>
<a href="#2">2</a>
  <script>
    window.addEventListener('hashchange', function() {
      console.log(window.location.hash);
    })
  </script>
```

## History模式

history模式是通过history.pushState()API实现的,保证不向浏览器发送请求,同时地址栏发生变化.	

```js
history.pushState(state, unused, url)

//state是一个对象 ,可以通过history.state进行访问拿到
//第二个参数为'',历史原因,浏览器都不支持但必须有
//url顾名思义地址栏加的东西

```

