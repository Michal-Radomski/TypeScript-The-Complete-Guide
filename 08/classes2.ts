export {};
//* Classes with Modifiers

//* public -> methods can be called anywhere
//* private -> methods can be called by other methods in this class
//* protected -> methods can be called by other methods in this class or by methods in child classes

class Vehicle {
  constructor(public color: string) {
    // this.color = color; //* This is not necessary
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log("vehicle.color:", vehicle.color);
// console.log(vehicle.honk()); //* honk() is protected

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); //* Reference to the parent class -> Vehicle
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
console.log({ car });
car.startDrivingProcess();
