const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// When not tu use Tuples
const carSpecs: [number, number] = [105, 1150];

const carStats = {
  horsepower: 105,
  weight: 1150,
};
