class Subject {
  constructor(name) {
    // 观察者队列
    // 格式为： { click: [fn1, fn2], scroll: [fn1, fn2] }
    this.events = {}
    this.name = name
  }

  // 添加观察者
  addListener(type, fn) {
    const cbs = this.events[type]
    if (cbs && cbs.length > 0) {
      const _cbs = cbs.filter(cb => cb != cbs)
      _cbs.push(fn)
      this.events[type] = _cbs
    } else {
      this.events[type] = [fn]
    }
  }

  // 删除观察者
  removeListener(type) {
    delete this.events[type]
  }

  // 通知
  dispatch(type) {
    this.events[type].forEach(cb => cb())
  }
}

const sub = new Subject('div')

sub.addListener('build', function() {
  console.log('build 事件触发1')
})
sub.addListener('build', function () {
  console.log('build 事件触发2')
})
sub.addListener('click', function() {
  console.log('click 事件触发')
})

sub.dispatch('build')
