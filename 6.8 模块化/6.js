// CommonJS

// person 模块
// person.js
let number = 0
export function Person(name, age) {  // 暴露接口
  number++
  this.name = name
  this.age = age
}

// 对外暴露接口
Person.prototype.getName = function () {
  return this.name
}

// 对外暴露接口
export const getInstanceNumber = function () {
  return number
}

// ----------------
// main.js
// 引入模块
import {Person, getInstanceNumber} from './person.js'

const p1 = new Person('Tom', 20)
const p2 = new Person('Jake', 20)
const p3 = new Person('Alex', 20)

p1.getName()
p2.getName()
p3.getName()

console.log('实例化个数', getInstanceNumber())
