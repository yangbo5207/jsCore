const pA = () => {
  return new Promise(resolve => {
    resolve()
  })
}
const fn1 = () => {
  fn2()
}
const fn2 = async () => {
  await pA()
  console.log('b')
}
async function fn() {
  await fn1()
  console.log('a')
}
fn()