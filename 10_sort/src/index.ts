class Sorter {
  constructor(public collection: number[]) {
    this.collection = collection;
  }
  sort(): void {
    // const length = this.collection.length
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j]; //* left elem of each pair /temp/
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0, 15]);
sorter.sort();
console.log(sorter.collection);
