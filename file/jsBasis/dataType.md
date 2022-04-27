# js数据类型

>数据分为原始类型和引用类型和原始类型分为字符串、数字、布尔、数组、对象、Null、Undefined。JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型：
```js
var x                // x 为 undefined
var x = 1;           // x 为数字
var x = "Bill";      // x 为字符串
```
---

# 数值型(Number)
## 整型
 >整型在内存中占 4 个字节
- 八进制 以 0 开头， 例如 013 -> 11
- 十六进制 以 0X 开头， 例如 0XA -> 10 A~F 代表 10~15 不区分大小写 0XFF -> 255
## 浮点型
 >浮点型分为普通小数和指数型小数
- 3.14E6 -> 31400000 
- 3.14E-6 -> 0.00000314

---

# 字符串型(String)
>数据被引号包含就是字符串类型，不区分单双引号 查看任意一个字符的 Unicode 码 'a'.charCodeAt() //97>。
>字符串可以是引号中的任意文本。可以使用单引号或双引号
```js
var a='my blog'
console.log(typeof(a)) //string
```
---

# 布尔型（Boolean）
>布尔型只有两个值，分别为true和false,在程序中表示为真和假
```js
var a=false;
console.log(typeof(a)) //Boolean
```
---

# 未定义型（undefined）
>声明了变量未赋值，结果就是 undefined
```js
var a;
console.log(typeof(a)) //undefined
```
---

# 空(null)
>常和引用类型数据一起使用
```js
var a='';
console.log(typeof(a)) //null
```

---

# 数组(Array)
>数组为引用类型，也属于object
```js
var arr=[1,2,3];
console.log(typeof(arr)) //object
//为什么输出object，
//使用instanceof,js高级讲到了为什么会输出object
console.log(arr instanceof Array) // true
```
---

# 对象(Object)
>对象为引用类型
```js
var obj={
  name:'Tom'
}
console.log(obj instanceof Object) // true

```

# 数据类型转换
## 隐式转换
```js
//1.数字+字符串 数字转换成字符串
var a=1;
var b='2';
var z=z+b;
console.log(z,typeof(z)) // '12',string

//2.数字+布尔型 布尔型转成数字 true -> 1 false -> 0
var a=2;
var b=true;
var z=a+b;
console.log(z,typeof(z)) // 3,number

//3.字符串+布尔型 布尔型转成字符串
var a='3';
var b=true;
var z=a+b;
console.log(z,typeof(z)) // '3true',string

```
>将运算符两端的数据转为数值型(自动调用 Number)，如果转换失败，返回 NaN(Not a Number)， 不是一个数字，任何值和 NaN 执行减乘除运算符都会返回 NaN

---

## 强制转换
### 将任意的数据强制转为数值型 -- **Number()**

```js
Number('a'); //NaN 
Number('1'); //1
Number('1a'); //NaN
Number(undefined); //NaN 
Number(null); //0 
Number(true); //1
```

### 将数据转为整型 --- **parseInt()**
```js
var PI=3.1415926;
console.log(parseInt(PI)) // 3
```
>常用于将字符串或数字转为整型，其它的数据返回 NaN；如果要转换的字符串以非数字开头，也返回 NaN

### 将数据转为浮点型 --- **parseFloat()**
>和 parseInt 的用法基本一致，只是转的数据是浮点型。
```js
var PI=3.1415926;
console.log(parseFloat(PI)) // 3.1415926
```
### 数值型和布尔型转为字符串型 --- **toString()**
```js
var num=10; 
console.log(num.toString()) // '10'
```
