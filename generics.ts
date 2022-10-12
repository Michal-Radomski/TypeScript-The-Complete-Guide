//* Bad Approach

class HoldNumber {
  data: number;
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
console.log(holdNumber);

class HoldString {
  data: string;
}
const holdString = new HoldString();
holdString.data = "123";
console.log(holdString);

//* Generics T-> generics
class HoldAnything<T> {
  data: T;
  add(a: T): T {
    return a;
  }
}

const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 123;
console.log(holdNumber2);

const holdString2 = new HoldAnything<string>();
holdString2.data = "123";
console.log(holdString2);
