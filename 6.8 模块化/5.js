(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD
    define(['person'], factory)
  } else if (typeof define === 'function' && define.cmd) { // CMD
    define(function(require, exports, module) {
      module.exports = factory()
    })
  } else if (typeof exports === 'object') { // CommonJS
    module.exports = factory()
  } else { // global
    root.person = factory()
  }
})(this, function() {
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

  function getInstanceNumber () {
    return number
  }

  return {
    Person,
    getInstanceNumber
  }
})
