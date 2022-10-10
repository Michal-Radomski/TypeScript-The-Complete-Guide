export class NumbersCollection {
  constructor(public data: number[]) {
    // this.data = data;
  }

  get length(): number {
    //* getter
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

//* const collection = new NumbersCollection([1,2,3])
//* collection.length -> getter
