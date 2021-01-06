// person.js
define(function(require, exports, module) {
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

  // 对外暴露接口
  module.exports.getInstanceNumber = function () {
    return number
  }
  module.exports.Person = Person
})


// mian.js
define(function(require) {
  const person = require('./person.js')
  const { Person, getInstanceNumber } = person

  const p1 = new Person('Tom', 20)
  const p2 = new Person('Jake', 20)
  const p3 = new Person('Alex', 20)

  p1.getName()
  p2.getName()
  p3.getName()

  console.log('实例化个数', getInstanceNumber())

})