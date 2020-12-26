new Promise(resolve => {
  resolve()
})
  .then(() => {
    Promise(resolve => {
      resolve()
    })
      .then(() => {
        console.log(1)
      })
      .then(() => {
        console.log(2)
      })
      .then(() => {
        console.log(3.1)
      })
  })
  .then(() => {
    console.log(1.1)
    new Promise((resolve => {
      resolve()
    }))
      .then(() => {
        new Promise(resolve => {
          resolve()
        })
          .then(() => {
            console.log(4)
          })
          .then(() => {
            console.log(6)
          })
      }).then(() => {
        console.log(5)
      })
  })
  .then(() => {
    console.log(3)
  })
console.log(0)

