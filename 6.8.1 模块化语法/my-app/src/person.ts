class Person {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
}

export default Person