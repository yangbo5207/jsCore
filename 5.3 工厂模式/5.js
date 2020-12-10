class Phone {
  step1() {}
  step2() {}
  step3() {}
  step4() {}
}

class Xiaomi extends Phone {
  constructor() {
    this.materials = {
      1: 'xiaomi_material1',
      2: 'xiaomi_material2',
      3: 'xiaomi_material3',
    }
  }
}

class IPhone extends Phone {
  constructor() {
    this.materials = {
      1: 'iphone_material1',
      2: 'iphone_material2',
      3: 'iphone_material3',
    }
  }
}

class Huawei extends Phone {
  constructor() {
    this.materials = {
      1: 'huawei_material1',
      2: 'huawei_material2',
      3: 'huawei_material3',
    }
  }
}

const config = {
  xiaomi: Xiaomi,
  iphone: IPhone,
  huawei: Huawei
}

function factory(type) {
  if (config[type]) {
    return new config[type]()
  }
}

const xm = factory('xiaomi')
const ip = factory('iphone')
const hw = factory('huawei')
