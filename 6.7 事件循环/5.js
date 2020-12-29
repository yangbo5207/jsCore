const btn = document.querySelector('#button')
btn.addEventListener('click', function() {
  new Promise(res => res()).then(() => {
    console.log(3)
  })
  console.log(1)
}, false)

btn.addEventListener('click', function () {
  new Promise(res => res()).then(() => {
    console.log(4)
  })
  console.log(2)
}, false)

// btn.click()

requestIdleCallback((deadline) => {
  console.log(deadline)
})

requestAnimationFrame(() => {
  console.log('requestAnimationFrame')
})

console.log('empty callstack')


// UI render 
// requestAnimationFrame
// I/O
// setTimeout