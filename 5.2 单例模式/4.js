class Login {
  constructor() { }
  show() { }
  hide() { }
  // 渲染 DOM 节点
  render() { }
}

function singleCreator(constructor) {
  let instance = null
  return function() {
    if (!instance) {
      instance = new constructor()
    }
    return instance
  }
}

const _Login = singleCreator(Login)

const p1 = new _Login()
const p2 = new _Login()
console.log(p1)
console.log(p1 === p2, 4)