// 自执行函数模拟模块化

// Person 模块
(() => {
  // 实例个数，模块内部变量，外部无法直接访问，
  let number = 0
  function Person(name, age) {
    number ++
    this.name = name
    this.age = age
  }

  Person.prototype.getName = function() {
    return this.name
  }

  Person.getInstanceNumber = function() {
    return number
  }

  // 对外抛出接口
  window.Person = Person
})();


// main 模块
(() => {
  // 引入模块
  const Person = window.Person

  const p1 = new Person('Tom', 20)
  const p2 = new Person('Jake', 20)
  const p3 = new Person('Alex', 20)

  p1.getName()

  console.log('实例化个数', Person.getInstanceNumber())
})()