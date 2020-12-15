// var tom = {
//   name: 'TOM',
//   age: 20,
//   gender: 1,
//   job: 'studend'
// }

// const { 
//   name: name, 
//   age: age, 
//   gender: gender, 
//   job: job 
// } = tom;

// const peoples = {
//   counts: 100,
//   detail: {
//     tom: {
//       name: 'tom',
//       age: 20,
//       gender: 1,
//       job: 'student'
//     }
//   }
// }

// // 获取tom
// const { detail: { tom } } = peoples;

// // 直接获取tom的age与gender
// const { detail: { tom: { age, gender } } } = peoples;


// var a = 10;
// var b = 20;

// [a, b] = [b, a];
// console.log(a); // 20
// console.log(b); // 10


const p = {
  name: 'tony'
}
p.__proto__.age = 20

const {name, age} = p
console.log(name, age) // tony  20