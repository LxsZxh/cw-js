var name = "window";
// 构造函数
/**
 * 1. 创建一个空的对象
 * 2. 将这个空的对象赋值给this
 * 3. 执行函数体中的代码
 * 4. 将这个新的对象默认返回
 */
function  Person(name){
  this.name=name

  this.foo1=function () {
    console.log(this.name);
  },

  this.foo2= () => console.log(this.name),

  this.foo3=function () {
    return function () {
      console.log(this.name);
    };
  },

  this.foo4=function () {
    return () => {
      console.log(this.name);
    }
  }
}
// person1 / person2 都是对象（实例）
var person1=new Person('person1')
var person2=new Person('person2')

person1.foo1(); // 隐式绑定：person1
person1.foo1.call(person2); // 显式绑定：person2

person1.foo2(); //  上层作用域查找：person1 
person1.foo2.call(person2); // 上层作用域查找：person1

person1.foo3()(); // 独立函数调用 默认绑定：window
person1.foo3.call(person2)(); // 默认绑定：window
person1.foo3().call(person2); // 显式绑定：person2

person1.foo4()(); // 上层作用域查找：person1（隐式绑定）
person1.foo4.call(person2)(); // 上层作用域查找：person2（显式绑定）
person1.foo4().call(person2); // 上层作用域查找：person1（隐式绑定）
