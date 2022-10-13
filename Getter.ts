class Person {
  constructor(public firstName: string, public lastName: string) {}

  fullName(): string {
    return `${this.firstName} + ${this.lastName}`;
  }
}

const person = new Person("Mich", "Rad");
console.log(person.fullName());

class Person2 {
  constructor(public firstName: string, public lastName: string) {}
  //* getter
  get fullName(): string {
    return `${this.firstName} + ${this.lastName}`;
  }
}

const person2 = new Person2("Mich", "Rad");
console.log(person2.fullName);
