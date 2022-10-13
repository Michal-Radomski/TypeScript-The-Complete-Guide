const colors = {
  color: "red",
  printColor() {
    console.log(this.color);
    console.log(this);
  },
};

//* this = colors as object
colors.printColor(); // red

const colors2 = {
  color2: "red",
  printColor2: () => {
    console.log(this.color2);
    console.log(this);
  },
};
colors2.printColor2();
