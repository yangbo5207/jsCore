let subjectid = 0
let observerid = 0

class Subject {
  constructor(name) {
    // 观察者队列
    this.observers = []
    this.id = subjectid++
    this.name = name
  }

  // 添加观察者
  addListener(observer) {
    this.observers.push(observer)
  }

  // 删除观察者
  removeListener(observer) {
    this.observers = this.observers.filter(item => item.id !== observer.id)
  }

  // 通知
  dispatch() {
    this.observers.forEach(item => {
      item.watch(this.name)
    })
  }
}

class Observer {
  constructor() {
    this.id = observerid++
  }
  watch(subjectName) {
    console.log(`观察者${this.id}发现了被观察者 ${subjectName} 产生了变化。`)
  }
}

const sub = new Subject('div元素')
const observer1 = new Observer()
const observer2 = new Observer()

sub.addListener(observer1)
sub.addListener(observer2)

sub.dispatch()
