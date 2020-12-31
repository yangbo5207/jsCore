// 用数组模拟一个队列
var tasks = [];

// 模拟一个事件分发器
var addFn1 = function (task) {
  tasks.push(task);
}

// 执行所有的任务
var flush = function () {
  tasks.map(function (task) {
    task();
  })
}

// 最后利用setTimeout/或者其他你认为合适的方式丢入事件循环中
setTimeout(function () {
  flush();
})

// 当然，也可以不用丢进事件循环，而是我们自己手动在适当的时机去执行对应的某一个方法
var dispatch = function (name) {
  tasks.map(function (item) {
    if (item.name == name) {
      item.handler();
    }
  })
}

// 当然，我们把任务丢进去的时候，多保存一个name即可。
// 这时候，task的格式就如下
demoTask = {
  name: 'demo',
  handler: function () { }
}

// 于是，一个订阅-通知的设计模式就这样轻松的被实现了