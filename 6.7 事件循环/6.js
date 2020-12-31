document.onclick = () => {
  console.log('s')
  setTimeout(() => {
    console.log(0)
  }, 0)

  setTimeout(() => {
    console.log(1)
  }, 1000)

  setTimeout(() => {
    console.log(2)
  }, 2000)

  for (var i = 0; i < 5000000000; i++);
  console.log('e')
}
