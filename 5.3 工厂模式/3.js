function Factory() {}
Factory.prototype.create = function(type) {
  var cur = this.config[type]
  if (cur) {
    return new this.config[type]()
  }
}
Factory.prototype.config = {}
Factory.prototype.setConfig = function(type, sub) {
  this.config[type] = sub
}


class Xiaomi5 {
  constructor() {
    this.materials = {
      1: 'xiaomi_material1',
      2: 'xiaomi_material2',
      3: 'xiaomi_material3',
    }
  }
  step1() {}
  step2() {}
  step3() {}
  step4() {}
}

new Factory().setConfig('xiaomi5', Xiaomi5)
