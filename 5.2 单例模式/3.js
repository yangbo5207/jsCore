class Login {
  constructor() { }
  show() { }
  hide() { }
  // 渲染 DOM 节点
  render() { }
}

const LoginProxy = (function () {
  let instance = null
  return function() {
    if (!instance) {
      instance = new Login()
    }
    return instance
  }
})()

const p1 = new LoginProxy()
const p2 = new LoginProxy()

console.log(p1 === p2)