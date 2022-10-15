@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Something bad!")
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    console.log({ generateWake });
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log({ constructor });
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(target, key, index);
}

function testDecorator(target: any, key: string) {
  console.log("Target:", target);
  console.log("Key:", key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    console.log({ target, key });
    const method = desc.value;
    console.log({ method });

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(error, errorMessage);
      }
    };
  };
}

// testDecorator(Boat.prototype, "formattedColor");
