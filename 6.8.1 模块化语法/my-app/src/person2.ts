export function fn() {
  console.log('this is a function named fn.');
}

export function bar() {
  console.log('hello everybody.');
}

class Person {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name
  }
}

export default Person;