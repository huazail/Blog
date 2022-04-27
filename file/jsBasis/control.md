# 流程控制

>  流程控制就是指“程序怎么执行”或者说“程序执行的顺序”。我们写一个程序，里面有很多代码，这时候就有一个问题：这些代码哪行先执行，哪行后执行，某行执行完了之后再执行哪行？这些就是流程控制所要讲的内容。如果不掌握流程控制，就无法写程序。 



# 流程控制的分类

- 顺序执行。这个非常简单，就是先执行第一行再执行第二行……这样依次从上往下执行。
- 是选择执行。也就是说，有些代码可以跳过不执行，有选择地执行某些代码。
- 是循环执行。也就是说，有些代码会反复执行。

# if 语句

>  只有当指定条件为 true 时，该语句才会执行代码。 

**语法**

```js
  if (条件){
    只有当条件为 true 时执行的代码
  }
```



```js
var a=10
if(a>20){
   console.log(true)
 }
//很显然语句并没有执行
```

# if...else语句

**语法**

```js
if(条件){
   只有当条件为 true 时执行的代码
}else{
   条件为false时执行
}
```

```js
var a=10
if(a>20){
   console.log(true)
}else{
   console.log(false)
}
//输出为false
```



# if...else if语句

**语法**

```js
if(条件表达式 1){ 
    语句 1; 
}else if(条件表达式 2){
    语句 2; }
else ... if(条件表达式 n){
    语句 n; 
}else{ 
    语句 n+1; 
    //以上所有的条件表达式都是 false 
}
```

```js
var a=10;
if(a>30){
    console.log('a大于30')
}else if(a>20){
    console.log('a大于20')
}else if(a>10){
    console.log('a大于10')
}else{
    console.log('a小于等于10')
}
//a小于等于10
```

> 小提示：执行体只有一行代码，**{}可以省略**

# switch-case 语句

**语法**

```js
switch(表达式){ 
	case 值 1: //如果表达式的值是值 1 
		语句 1; 
		break; 
		.... 
	case 值 n: 
		语句 n; 
		break; 
	default: 
		语句 n+1; //以上所有的表达式和值比较都是 false 
 }
```



```js
   var number = 10;
    switch (number) {
      case '10':
        console.log(number);
        break;
      case 10:
        console.log(number)
        break;
    }
```



> 小提示: 在 case 中，表达式和值比较实用的是全等于比较，要求值和类型都满足才是 true

