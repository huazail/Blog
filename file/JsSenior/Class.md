# JavaScript中的类(class)
>在class概念引入之前，js通过原型对象来实现类和类的继承，具体可以参考前文（面向对象的JavaScript：封装，继承与多态），在ECMAScript 6出现class的概念之后，才算是告别了直接通过原型对象来模拟类和类继承，但class也只是基于JavaScript原型继承的语法糖，并没有引入新的对象继承模式，所以理解原型以及原型继承是非常重要的。通过class来创建对象，可以让代码更为简洁，复用性更高。
# 类的声明
>ECMAScript 6中定义一个类非常的简单,看如下代码

``` js
class Star {
  constructor(name,singname) {
    this.name=name
    this.sing = singname;
  }
  sayHi() {
    console.log(`我是${this.name},我会唱${this.singname}`);
  }
}
Animal.prototype.constructor === Animal; // true
let ldh = new Animal('刘德华','冰雨');
ldh.sayHi(); // 我是刘德华，我会唱冰雨

```
> constructor方法创建和初始化对象，而且一个类中有且只能有一个consctuctor方法，默认为constructor(){}。ldh就是Star实例化的对象。

# ES5创建类
> 在ES6之前js还没有引入类的概念，通过prototype原型实例化,依靠原型对象来实现类的
```js
function Star(name){
  this.name=name;
}
Star.prototype.sayHi=function(){
  console.log(`hello，我是${this.name}`)
}
let ldh=new Star('刘德华')；
ldh.sayHi();  //hello,我是刘德华
```
>class中的constructor()其实就是一个构造函数，在class中定义属性相当于在原型对象上定义属性。
```js
class Star {
  constructor(name,singname) {
    this.name=name
    this.sing = singname;
  }
  sayHi() {
    console.log(`我是${this.name},我会唱${this.singname}`);
  }
}
Animal.prototype.constructor === Animal; // true
let ldh = new Animal('刘德华','冰雨');
ldh.sayHi(); // 我是刘德华，我会唱冰雨
ldh.__proto__===Star.prototype; // true
ldh.__proto__.sayHi=function(){
  console.log(`hello，我是${this.name}--从原型对象上定义属性`);
}
ldh.sayHi(); //hello,我是刘德华--从原型对象上定义属性
```

