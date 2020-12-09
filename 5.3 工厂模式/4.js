const config = {
  xiaomi: {
    1: 'xiaomi_material1',
    2: 'xiaomi_material2',
    3: 'xiaomi_material3',
  },
  iphone: {
    1: 'iphone_material1',
    2: 'iphone_material2',
    3: 'iphone_material3',
  },
  huawei: {
    1: 'huawei_material1',
    2: 'huawei_material2',
    3: 'huawei_material3',
  }
}

class PhoneFactory {
  constructor(type) {
    this.materials = config[type]
  }
  step1() {}
  step2() {}
  step3() {}
  step4() {}
}

const xm = new PhoneFactory('xiaomi')
const ip = new PhoneFactory('iphone')
const hw = new PhoneFactory('huawei')