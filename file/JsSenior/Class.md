# JavaScript中的类(class)
>在class概念引入之前，js通过原型对象来实现类和类的继承，具体可以参考前文（面向对象的JavaScript：封装，继承与多态），在ECMAScript 6出现class的概念之后，才算是告别了直接通过原型对象来模拟类和类继承，但class也只是基于JavaScript原型继承的语法糖，并没有引入新的对象继承模式，所以理解原型以及原型继承是非常重要的。通过class来创建对象，可以让代码更为简洁，复用性更高。
# class的声明
>ECMAScript 6中定义一个类非常的简单,看如下代码

``` js
	class Star {
      constructor(name, singname) {
        this.name = name
        this.singname = singname;
      }
      sayHi() {
        console.log(`我是${this.name},我会唱${this.singname}`);
      }
    }
    Star.prototype.constructor === Star; // true
    let ldh = new Star('刘德华', '冰雨');
    ldh.sayHi(); // 我是刘德华，我会唱冰雨

```
> constructor方法创建和初始化对象，而且一个类中有且只能有一个consctuctor方法，默认为constructor(){}。ldh就是Star实例化的对象。

# ES5创建class
> 在ES6之前js还没有引入类的概念，通过prototype原型实例化,依靠原型对象来实现类的
```js
   function Star(name) {
      this.name = name;
    }
    Star.prototype.sayHi = function () {
      console.log(`hello，我是${this.name}`)
    }
   let ldh = new Star('刘德华')
   ldh.sayHi(); //hello,我是刘德华
```
>class中的constructor()其实就是一个构造函数，在class中定义属性相当于在原型对象上定义属性。
```js
	class Star {
      constructor(name, singname) {
        this.name = name
        this.singname = singname;
      }
      sayHi() {
        console.log(`我是${this.name},我会唱${this.singname}`);
      }
    }
    Star.prototype.constructor === Star; // true
    let ldh = new Star('刘德华', '冰雨');
    ldh.sayHi(); // 我是刘德华，我会唱冰雨
    ldh.__proto__ === Star.prototype; // true
    ldh.__proto__.sayHi = function () {
      console.log(`hello，我是${this.name}--从原型对象上定义属性`);
    }
    ldh.sayHi(); //hello,我是刘德华--从原型对象上定义属性
```

# class的继承

> class继承是通过extends关键字创建子类

```js
    class Ldh {
      constructor(name, singname) {
        this.name = name
        this.singname = singname;
      }
      sayHi() {
        console.log(`我是${this.name},我会唱${this.singname}`);
      }
    }
    class Zxy extends Ldh {
      ZxysayHi() {
        console.log('我是张学友')
      }
    }
    let zxy = new Zxy('张学友', '冰雨')
    zxy.sayHi() //我是张学友，我会唱冰雨
    zxy.ZxysayHi() //我是张学友

```

> **可以调用父类上的constructor方法**，如果子类中声明了constructor方法，必须通过super()才能访问到的this

```js
    class Ldh {
      constructor(name, singname) {
        this.name = name;
        this.singname = singname;
      }
      sayHi() {
        console.log(this.name);
      }
    }
    class Zxy extends Ldh {
      constructor(name, singname) {
        super(name, singname)
      }
      ZxysayHi() {
        console.log(`我是${this.name},我也会唱${this.singname}`)
      }
    }
    let zxy = new Zxy('张学友', '冰雨')
    zxy.ZxysayHi();
```

> **可以使用super()访问到父类上的方法**

```js
    class Ldh {
      constructor(name, singname) {
        this.name = name;
        this.singname = singname;
      }
      sayHi() {
        console.log(`我是${this.name}`);
      }
    }
    class Zxy extends Ldh {
      constructor(name, singname) {
        super(name, singname)
      }
      ZxysayHi() {
        super.sayHi()
      }
    }
    let zxy = new Zxy('张学友')
    zxy.ZxysayHi();//我是张学友
```

# 静态方法

> 在类中定义的方法会被实例继承，**可以通过 static 关键字实现子类不继承方法**

```js
    class Ldh {
      constructor(name, singname) {
        this.name = name;
        this.singname = singname;
      }
      static dancing() {
        console.log(`我会唱歌，我还会跳舞`)
      }
    }
    let ldh = new Ldh('张学友')
    Ldh.dancing();//我会唱歌，我还会跳舞
    ldh.dancing();//TypeError
	
```

> **静态方法虽然没有没实例继承，但是可以被子类继承，子类实例依旧不能继承**

```js
    class Ldh {
      constructor(name, singname) {
        this.name = name;
        this.singname = singname;
      }
      static dancing() {
        console.log(`我会唱歌，我还会跳舞`)
      }
    }
    class Zxy extends Ldh {

    }
    let zxy = new Zxy('张学友')
    Zxy.dancing();//我会唱歌，我还会跳舞
    zxy.dancing();//TypeError
```

# 实例属性

> 实例属性必须在类方法中定义

```js
   class Ldh {
      constructor(name) {
        this.name = name; // 实例属性
      }
    }
	Ldh.age = 18; // 静态属性
    Ldh.prototype.sex = 'male'; // 原型属性
```

> 总结：实例属性就是对象独有的属性， 静态属性就是位于Class本身的属性，ES6中明确说明Class只有静态方法，没有静态属性 ，原型属性就是定义在原型上的属性。