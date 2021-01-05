// AMD

// person.js
define(function() {
  let number = 0
  function Person(name, age) {
    number++
    this.name = name
    this.age = age
  }

  // 对外暴露接口
  Person.prototype.getName = function () {
    return this.name
  }

  function getInstanceNumber() {
    return number
  }

  // 对外暴露接口
  return {
    getInstanceNumber,
    Person
  }
})


// mian.js

// main.js
// 引入模块
define(['./person.js'], function(person) {
  const { Person, getInstanceNumber } = person

  const p1 = new Person('Tom', 20)
  const p2 = new Person('Jake', 20)
  const p3 = new Person('Alex', 20)

  p1.getName()
  p2.getName()
  p3.getName()

  console.log('实例化个数', getInstanceNumber())
})
