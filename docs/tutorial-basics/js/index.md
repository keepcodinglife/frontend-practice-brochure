---
sidebar_position: 1
---

# 基础数据

## 分别有哪些类型

* 基础类型

  * String：字符串类型
  * Number：数字类型
  * Boolean：true，false
  * undefined：undefined
  * null：null
  * Bigint: 任意精度的整数，长整型数字
  * Symbol

* 对象（引用）类型

  * Object：任意对象
  * Function：可以执行的函数对象
  * Array：有序的数值下标的数组对象

## 对象

1. 什么是对象
   * 代表现实中的某个事物，是该事物在编程中的抽象
   * 多个数据的封装体
   * 用于保存多个数据的容器
2. 为什么要用对象
   * 便于对多个数据进行统一的管理
3. 对象的组成
   * 属性
     * 代表现实事物的状态数据
     * 有属性名和属性值组成
     * 属性名都是`string`，属性值是`any`
   * 方法
     * 代表事物的行为数据
     * 属性值是`fn`
4. 如何访问对象内部数据
   * obj.a
   * obj['a']

## 怎么判断类型

* typeof

```javascript
typeof 'Mondo' // "string"
typeof 1 // "number"
typeof true // "boolean"
typeof false // "boolean"
typeof null // "object"
typeof undefined // "undefined"
typeof [] // "object"
typeof function aa(){} // "function"
```

我们看到上面的结果可以得到：

1. 基本类型，除 `null` 外，都可以得到正确的类型。
2. 对于**引用类型**，除 `function` 外，都返回 `object`。
3. 对于 `null` ，返回 `object`。
4. 对于 `function`, 返回 `function`。


* instanceof

用于检测某个对象是不是另一个对象的实例

```js
[] instanceof Array; // true
({}) instanceof Object; // true

function fn() {}
fn instanceof Function // true
new Date() instanceof Date;// true

[] instanceof Object // true
fn instanceof Object // true
```

我们看到其实引用类型的实例都是`Object`

* Object.prototype.toString.call()

利用所有其他对象集成`object`对象， `Object.prototype.toString`返回当前对象对应的字符串形式

```js
Object.prototype.toString.call(1) //"[object Number]"
Object.prototype.toString.call('Mondo') // "[object String]"
Object.prototype.toString.call([]) // "[object Array]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call(function fn() {}) // "[object Function]"
```

* isArray, isNaN

`isArray` 判断是否为数组
`isNaN` 判断是否是一个`NaN`值，如果是`NaN`值返回`true`，不是为`false`

```js
Array.isArray([]) // true
Number.isNaN(1) // false
Number.isNaN(+'1') // false
Number.isNaN(+'a') // true
Number.isNaN(NaN) // true
```

## 一些问题

* `undefined`和`null`的区别

`undefined`代表已定义了变量但是并未赋值

`null`是**js关键字**；变量赋值为null

```
+null // 0

+undefined // NaN
```

* 如何判断一个变量是否为数组？

```js
// 不能用 typeof 判断
typeof [] // object

[] instanceof Array // true

Array.isArray([]) // true
```
