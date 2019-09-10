 // 这里展示的方法是为了更好地创建一个对象：传入参数——>得到对象，减少重复代码。

 /**
  * 工厂模式： 函数封装
  * */
 function createFunction(name, age, job) {
     let o = new Object();
     o.name = name;
     o.age = age;
     o.job = job;
     o.sayName = function () {
       console.log(this.name);
     };
     return o;
 }

 // 然后使用
 let person1 = createFunction('kurry', 24, 'student');
 let person2 = createFunction('jack', 32, 'developer');


 /**
  * 构造函数模式：自定义构造函数
  * */


 function Person(name, age, job) {
     this.name = name;
     this.age = age;
     this.job = job;
     this.sayName = function () {
         console.log(this.name)
     } // 可以把这个函数写在 Person 外面，要用的时候再调用。但是会导致定义全局有很多方法，没有封装的概念。
 }

 let p1 = new Person();
 let p2 = new Person();
 // Person 其实也是普通的函数
 Person('kurryluo', 24, 'student');
 window.name; // 返回的是kurryluo，因为直接调用函数，它的作用域是全局对象Global，在浏览器中是window对象。

 /**
  * 原型模式：每一个函数都有一个prototype，是实例调用构造函数的原型对象。
  * 原型对象保存着构造函数所有的属性和方法，所以，我们不用在构造函数中添加很多属性和方法，直接在原型对象中添加。
  * */
 // 一个构造函数
 function Person() {

 }

 // 向构造函数的原型对象添加属性和方法，这些属性和方法被实例公用。

 Person.prototype.name = 'kurryluo';
 Person.prototype.age = 24;
 Person.prototype.job = 'student';
 Person.prototype.sayName = function () {
     console.log(this.name) // 指向对象实例，如果没有这个name属性，就沿着原型链，去构造函数找。
 };
  let pp1 = new Person();
  let pp2 = new Person();

  console.log(pp1.sayName === pp2.sayName);
