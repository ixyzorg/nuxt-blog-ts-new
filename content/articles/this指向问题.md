---
title: "this指向问题"

published: 2024-07-10 21:45:00

description: "js中this指向问题"

tags: [js, this]

---
## 指向

在js中函数中this的指向完全是取决于函数如何被调用.

### 总体来说,共分为4种情况.

| 调用方式                              | this指向                                                     |
| :------------------------------------ | ------------------------------------------------------------ |
| 全局作用域或普通函数调用              | 浏览器环境下指向windows,Node环境下指向Global严格模式指undefined |
| 当作方法被对象调用时                  | this指向此对象                                               |
| 当函数作为构造函数（使用 new 关键字） | this 指向新创建的实例对象                                    |
| 函数为箭头函数时                      | 捕获其所在上下文的 this 值                                   |

## 改写this

### 箭头函数

首先,通过箭头函数,箭头函数特性能够捕获所在上下文的this,也就是外层函数的this,或者外层函数没有,指向windows/Global,

### bind、apply、call方法

#### apply和call很相似,只是最后的传参形式不一样

`function.call(thisArg, arg1, arg2, ...)`

`function.apply(thisArg, [arg1, arg2, ...])`

#### bind

.bind后会返回一个新的函数,然后再手动进行调用



