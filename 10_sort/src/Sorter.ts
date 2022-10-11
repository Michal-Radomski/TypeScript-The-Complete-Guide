//* typeof => primitive values: numbers, string, boolean, symbol
//* instanceof => values created with constructor e.g instanceof Array

// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  // constructor(public collection: Sortable) {
  //   this.collection = collection;
  // }

  // // - Original Bubble Sort Algorithm
  // sort(): void {
  //   // const length = this.collection.length
  //   const { length } = this.collection; //* Destructuring

  //   //- Bubble Sort Algorithm
  //   for (let i = 0; i < length; i++) {
  //     for (let j = 0; j < length - i - 1; j++) {
  //       if (this.collection[j] > this.collection[j + 1]) {
  //         const leftHand = this.collection[j]; //* left elem of each pair, can be named as temp
  //         this.collection[j] = this.collection[j + 1];
  //         this.collection[j + 1] = leftHand;
  //       }
  //     }
  //   }
  // }

  sort(): void {
    // const length = this.collection.length
    const { length } = this; //* Destructuring

    //- Bubble Sort Algorithm
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
