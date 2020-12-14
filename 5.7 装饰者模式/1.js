// config.js
const cloth = {
  name: '七彩炫光衣',
  hp: 1000
}
const weapon = {
  name: '青龙偃月刀',
  attack: 2000
}
const shoes = {
  name: '神行疾步靴',
  speed: 300
}
const defaultRole = {
  hp: 100,
  atk: 50,
  speed: 125,
  cloth: null,
  weapon: null,
  shoes: null,
  career: null,
  gender: null
}

// 基础角色类
// 有血条，攻击力，速度三个基础属性
// 以及衣服，武器，鞋子三个装备插槽
class Role {
  constructor(role) {
    this.hp = role.hp;
    this.atk = role.atk;
    this.speed = role.speed;
    this.cloth = role.cloth;
    this.weapon = role.weapon;
    this.shoes = role.shoes;
    this.nickname = role.nickname
    this.gender = role.gender
  }
  run() {}
  attack() {}
}

// 战士
class Soldier extends Role {
  constructor(role) {
    const r = Object.assign({}, defaultRole, role)
    super(r)
    this.career = '战士'
    // 战士的基础血条 +20
    if (role.hp == defaultRole.hp) {
      this.hp = defaultRole.hp + 20
    }
    // 战士的基础移动速度 +5
    if (role.speed == defaultRole.speed) {
      this.speed = defaultRole.speed + 5
    }
  }
  run() {
    console.log('战士的奔跑动作')
  }
  attack() {
    console.log('战士的攻击动作')
  }
}

// 基础装饰类
class Decorator {
  constructor(role) {
    this.role = role;
    this.hp = role.hp;
    this.atk = role.atk;
    this.speed = role.speed;
    this.cloth = role.cloth;
    this.weapon = role.weapon;
    this.shoes = role.shoes;
    this.career = role.career;
    this.gender = role.gender;
    this.nickname = role.nickname;
  }
  run() {
    this.role.run()
  }
  attack() {
    this.role.attack()
  }
}

class ClothDecorator extends Decorator {
  constructor(role, cloth) {
    super(role)
    this.cloth = cloth.name
    this.hp += cloth.hp
  }
}

class WeaponDecorator extends Decorator {
  constructor(role, weapon) {
    super(role)
    this.weapon = weapon.name
    this.atk += weapon.attack
  }
  attack() {
    console.log('装备了武器，攻击速度变得更快了')
  }
}

class ShoesDecorator extends Decorator {
  constructor(role, shoes) {
    super(role)
    this.shoes = shoes.name
    this.speed += shoes.speed
  }
  run() {
    console.log('穿上了鞋子，奔跑速度变得更快了')
  }
}

const baseInfo = {...defaultRole, nickname: 'alex', gender: 'man'}
// 创建一个战士角色
let alex = new Soldier(baseInfo)
alex.run()
alex.attack()
console.log(alex)

alex = new ClothDecorator(alex, cloth)
// 查看变化
console.log(alex)

console.log('--------装备武器-----------')
alex = new WeaponDecorator(alex, weapon)
alex.attack()
console.log(alex)

console.log('--------装备鞋子-----------')
alex = new ShoesDecorator(alex, shoes)
alex.run()
console.log(alex)