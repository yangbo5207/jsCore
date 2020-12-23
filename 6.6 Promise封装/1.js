const p = new MyPromise2((resolve, reject) => {
  setTimeout(() => {
    resolve('World')
  }, 1000)
})

console.log(p)

p.then(res => {
  console.log('1 then：', res)
  return 'hello ' + res
}).then(res => {
  console.log('2 then：', res)
}).catch(err => {
  console.log('catch', err)
}).finally(() => {
  console.log('我都会执行')
})