class Login {
  // 使用静态属性在内存存储实例
  static instance = null
  constructor(parentNode) {
    // 判断，如果已经存在实例，直接返回该实例
    if (Login.instance) {
      return Login.instance
    }
    this.parentNode = parentNode
    this.render()
    Login.instance = this
    return this
  }

  show() { }
  hide() { }
  // 渲染 DOM 节点
  render() { }
}

const p2 = new Login()
const p1 = new Login()

console.log(p1 === p2) // true
