// ES5
// console.log(a); // undefined
// var a = 20;

// // ES6
// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 20;

// var a = 20;
// if (true) {
//   console.log(a); // ReferenceError: a is not defined
//   let a = 30;
// }


// let a = 20;
// a = 30;
// a = 40;
// console.log(a);


// const PI = 3.1415;
// const MAX_LENGTH = 100;

// // 试图改变常量的值
// PI = 3; // Untaught TypeError: Assignment to constant variable


// const a = [];
// a.push(1);
// console.log(a); // [1]


// const b = {}
// b.max = 20;
// b.min = 0;
// console.log(b); // { max: 20, min: 0 }


// const arr = [1, 2, 3, 4];
// arr.forEach(function (item) {
//   const temp = item + 1;
//   console.log(temp);
// })


// es5
// var fn = function (a, b) {
//   return a + b;
// }

// // es6 箭头函数写法，当函数直接被return时，可以省略函数体的括号
// const fn = (a, b) => a + b;

// // es5
// var foo = function () {
//   var a = 20;
//   var b = 30;
//   return a + b;
// }

// // es6
// const foo = () => {
//   const a = 20;
//   const b = 30;
//   return a + b;
// }


// var name = 'TOM';
// var getName = function () {
//   console.log(this.name);
// }

// var person = {
//   name: 'Alex',
//   getName: getName
// }

// var other = {
//   name: 'Jone'
// }

// getName(); // 独立调用，this 指向 undefined，并自动转向 window
// person.getName(); // 被 person 调用，this指向 person
// getName.call(other); // call 修改this，指向 other


// var name = 'TOM';

// // 更改为箭头函数的写法
// var getName = () => {
//   console.log(this.name);
// }

// var person = {
//   name: 'Alex',
//   getName: getName
// }

// var other = {
//   name: 'Jone'
// }

// getName();
// person.getName();
// getName.call(other);


// var Mot = function (name) {
//   this.name = name;
// }
// Mot.prototype = {
//   constructor: Mot,
//   do: function () {
//     console.log(this.name);
//     document.onclick = function () {
//       console.log(this.name);
//     }
//   }
// }

// new Mot('Alex').do();



// var add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// }

// add(1, 2);

// 结果输出一个类数组对象
/*
[
0: 1,
1: 2,
length: 2,
callee: ƒ (a, b),
Symbol(Symbol.iterator): ƒ values()
]
*/

// var add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// }
// add(1, 2); // arguments is not defined

// function isLargeScreen() {
//   return false
// }
// const item = {
//   isCollapsed: true
// }

// const classes = `header ${isLargeScreen() ? '' :
//   `icon-${item.isCollapsed ? 'expander' : 'collapser'}`}`;

// console.log(classes)


var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  console.log(strings, personExp, ageExp)

  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  var ageStr;
  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${person} is a ${age}`;

console.log(output);
// that Mike is a youngster