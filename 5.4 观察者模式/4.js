
class Observer {
  constructor(data) {
    this.data = data;
    this.walk(data);
  }
  walk(data) {
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }
  defineReactive(data, key, val) {
    const dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: () => {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return val;
      },
      set: function (newVal) {
        if (newVal === val) {
          return;
        }
        val = newVal;
        dep.notify();
      }
    });
  }
}

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  return new Observer(value);
};

class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();  // 将自己添加到订阅器的操作
  }
  update() {
    this.run()
  }
  run() {
    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  }
  get() {
    Dep.target = this;  // 缓存自己
    var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
    Dep.target = null;  // 释放自己
    return value;
  }
}


class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach(function (sub) {
      sub.update();
    });
  }
}

Dep.target = null;


class Vue {
  constructor(options, el, exp) {
    this.data = options.data;
    Object.keys(this.data).forEach((key) => {
      this.proxyKeys(key);
    });

    // 劫持 data
    observe(this.data);
    
    // 初始化显示
    el.innerHTML = this.data[exp];  
    new Watcher(this, exp, function (value) {
      el.innerHTML = value;
    });
    return this;
  }
  proxyKeys(key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: () => {
        return this.data[key];
      },
      set: (newVal) => {
        this.data[key] = newVal;
      }
    });
  }
}

var ele = document.querySelector('#wrap');
var vue = new Vue({
  data: {
    text: 'hello world'
  }
}, ele, 'text');

document.addEventListener('click', function() {
  vue.data.text = `${vue.data.text} vue click.`
}, false)
