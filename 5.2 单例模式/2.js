const Login = (function () {
  // 使用 闭包 在内存存储实例
  let instance = null
  class LoginComponent {
    constructor(parentNode) {
      // 判断，如果已经存在实例，直接返回该实例
      if (instance) {
        return instance
      }
      this.parentNode = parentNode
      this.render()
      instance = this
      return this
    }

    show() { }
    hide() { }
    // 渲染 DOM 节点
    render() { }
  }
  return LoginComponent
})()

const p2 = new Login()
const p1 = new Login()

console.log(p1 === p2) // true
