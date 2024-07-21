---
title: "ShadowCopy和DeepCopy"

published: 2024-07-01 20:34:00

description: "聊一聊ShadowCopy和DeepCopy"

tags: [js, deepcopy, shadowcopy]

---

## 浅拷贝(ShadowCopy)和深拷贝(DeepCopy)

​	浅拷贝至拷贝对象的最外一层,比如ObjA进行浅拷贝得到ObjB,会将简单类型的值进行拷贝,复杂类型呢,只会拷贝他的内存地址.当修改ObjB的对象属性里面的值时,ObjA的对应的也会被修改.深拷贝则是完全拷贝,包括复杂类型,是完全开辟一块新的内存空间,将复杂类型的值进行拷贝.

### 浅拷贝实现方式

通过Object.assign()方法实现,或者通过扩展运算符实现.

1.Object.assion()

`const returnedTarget = Object.assign(target, source)`target 为目标对象,source是要copy的对象. 最终的结果`returnedTarget=target`

```js
const objA = {
  name: 'A',
  age: 18,
  arrProp: [1, 2, 3],
  objPrap: {
    name: 'objPrap'
  },
  say: function () {
    console.log(this.name)
  }
}
const objB =Object.assign({},objA)
```

2.扩展运算符实现

```js
const objA = {
  name: 'A',
  age: 18,
  arrProp: [1, 2, 3],
  objPrap: {
    name: 'objPrap'
  },
  say: function () {
    console.log(this.name)
  }
}
const objC ={...objA}
```

### 深拷贝实现方式

```js
function DeepCopy(obj) {
  let targetObj
  if(obj === null){
    return obj
  }
  if(typeof obj !=='object'){
    return obj
  }
  if(Array.isArray(obj)){
    targetObj = []
    for(let i = 0;i<obj.length;i++){
      targetObj[i] = DeepCopy(obj[i])
    }
  }
  if(obj instanceof Object){
    targetObj = {}
    for(let i in obj){
      targetObj[i] = DeepCopy(obj[i])
    }
  }
  return targetObj
}
```






