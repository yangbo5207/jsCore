var event = new Event('build')

// 观察者
document.addEventListener('build', function () {
  console.log('我是新增的一个观察者1，我现在观察到 document 触发了 build 事件')
})

// 观察者
document.addEventListener('build', function () {
  console.log('我是新增的一个观察者2，我现在观察到 document 触发了 build 事件')
})

// 被观察者 触发事件
document.dispatchEvent(event)