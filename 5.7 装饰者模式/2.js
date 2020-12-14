var person = {
  name: 'TOM'
}

function nameDecorator(target, key, descriptor) {
  descriptor.value = () => {
    return 'jake';
  }
  return descriptor;
}

class Person {
  constructor() {
    this.name = 'jake'
  }
  @nameDecorator
  getName() {
    return this.name;
  }
}

let p1 = new Person();
console.log(p1.getName())

function initDecorator(target, key, descriptor) {
  const fn = descriptor.value;
  // 改变传入的参数值
  descriptor.value = (...args) => {
    args[0] = 'TOM';
    return fn.apply(target, args);
  }
  return descriptor;
}

class Person {
  constructor(name, age) {
    this.init(name, age)
  }
  @initDecorator
  init(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

console.log(new Person('alex', 20).getName()); // TOM



// 注意这里的差别
function initDecorator(name) {
  return function (target, key, descriptor) {
    const fn = descriptor.value;
    descriptor.value = (...args) => {
      args[0] = name;
      return fn.apply(target, args);
    }
    return descriptor;
  }
}

class Person {
  constructor(name, age) {
    this.init(name, age)
  }
  @initDecorator('xiaoming')
  init(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

console.log(new Person('alex', 20).getName());  // xiaoming



function personDecorator(target) {
  // 修改方法
  target.prototype.getName = () => {
    return 'hahahahaha'
  }
  // 新增方法，因为内部使用了this，因此一定不能使用箭头函数
  target.prototype.getAge = function () {
    return this.age
  }
  return target;
}

@personDecorator
class Person {
  constructor(name, age) {
    this.init(name, age)
  }
  init(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}

var p = new Person('alex', 30);
console.log(p.getName(), p.getAge());  // hahahahaha 30



var xiaom = {
  name: 'xiaom',
  age: 22
}
function stuDecorator(person) {
  return function (target) {
    // 修改方法
    target.prototype.getAge = () => {
      return person.age;
    }
    // 添加方法
    target.prototype.getOther = () => {
      return 'other info.'
    }
    return target;
  }
}

function initDecorator(person) {
  return function (target, key, descriptor) {
    var method = descriptor.value;
    descriptor.value = () => {
      var ret = method.call(target, person.name);
      return ret;
    }
  }
}

@stuDecorator(xiaom)
class Student {
  constructor(name, age) {
    this.init(name, age);
  }
  @initDecorator(xiaom)
  init(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  getName() {
    return this.name;
  }
}

var p = new Student('hu', 18);
console.log(p.getAge(), p.getName(), p.getOther()); // 22 "xiaom" "other info."





export function ClothDecorator(target) {
  target.prototype.getCloth = function (cloth) {
    this.hp += cloth.hp;
    this.cloth = cloth.name;
  }
}

export function WeaponDecorator(target) {
  target.prototype.getWeapon = function (weapon) {
    this.atk += weapon.attack;
    this.weapon = weapon.name;
  }
  target.prototype.attack = function () {
    if (this.weapon) {
      console.log(`${this.nickname}装备了${this.weapon}，攻击更强了。职业：${this.career}`);
    } else {
      console.log(`${this.career}的基本攻击`);
    }
  }
}

export function ShoesDecorator(target) {
  target.prototype.getShoes = function (shoes) {
    this.speed += shoes.speed;
    this.shoes = shoes.name;
  }
  target.prototype.run = function () {
    if (this.shoes) {
      console.log(`${this.nickname}穿上了${this.shoes}，移动速度更快了。职业：${this.career}`);
    } else {
      console.log(`${this.career}的奔跑动作`);
    }
  }
}



import { cloth, weapon, shoes, defaultRole } from './config';
import { ClothDecorator, WeaponDecorator, ShoesDecorator } from './equip';
import Role from './Role';

@ClothDecorator
@WeaponDecorator
@ShoesDecorator
class Soldier extends Role {
  constructor(roleInfo) {
    const o = Object.assign({}, defaultRoleInfo, roleInfo);
    super(o);
    this.nickname = roleInfo.nickname;
    this.gender = roleInfo.gender;
    this.career = '战士';
    if (roleInfo.hp == defaultRoleInfo.hp) {
      this.hp = defaultRoleInfo.hp + 20;
    }
    if (roleInfo.speed == defaultRoleInfo.speed) {
      this.speed = defaultRoleInfo.speed + 5;
    }
  }
  run() {
    console.log('战士的奔跑动作');
  }
  attack() {
    console.log('战士的基础攻击');
  }
}