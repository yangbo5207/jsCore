class Xiaomi {
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

class IPhone {
  constructor() {
    this.materials = {
      1: 'iphone_material1',
      2: 'iphone_material2',
      3: 'iphone_material3',
    }
  }
  step1() {}
  step2() {}
  step3() {}
  step4() {}
}

class Huawei {
  constructor() {
    this.materials = {
      1: 'huawei_material1',
      2: 'huawei_material2',
      3: 'huawei_material3',
    }
  }
  step1() {}
  step2() {}
  step3() {}
  step4() {}
}

function factory(type) {
  if (type == 'xiaomi') {
    return new Xiaomi()
  }
  if (type == 'iphone') {
    return new IPhone()
  }
  if (type == 'huawei') {
    return new Huawei()
  }
}

const xm = factory('xiaomi')
const ip = factory('iphone')
const hw = factory('huawei')