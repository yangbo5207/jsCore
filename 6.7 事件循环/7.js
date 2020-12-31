// demo01  出自于上面我引用文章的一个例子，我们来根据上面的结论，一步一步分析具体的执行过程。
// 为了方便理解，我以打印出来的字符作为当前的任务名称
setTimeout(function s1() {
  console.log(5);
}, 1)

setTimeout(function s2() {
  console.log(6);
}, 0)

new Promise(function (resolve) {
  console.log(1);
  for (var i = 0; i < 1000; i++) {
    i == 99 && resolve();
  }
  console.log(2);
}).then(function p1() {
  console.log(4);
})

console.log(3);
