//* Basic Inheritance ->ES2015

class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  // Overriding drive method
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();
car.drive();
car.honk();
