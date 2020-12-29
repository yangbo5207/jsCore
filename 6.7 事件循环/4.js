const p1 = new Promise((resolve) => {
  resolve()
}).then(function f1() {
  console.log(1)
  const p2 = new Promise(resolve => {
    resolve()
  }).then(function f3() {
    console.log(2)
  }).then(function f4() {
    console.log(4)
  })
}).then(function f2() {
  console.log(3)
  let index = 0
  const queue = [m1]

  function m1() {
    console.log('m1')
    if (index < 10) {
      queue.push(m2)
    }
  }

  function m2() {
    console.log('m2')
    index++;
    queue.push(m1)
  }

  let cb
  while(cb = queue.shift()) {
    cb()
  }
})

console.log(0)