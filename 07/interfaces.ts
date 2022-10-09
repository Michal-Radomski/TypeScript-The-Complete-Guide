//* Function in Interface
interface Reportable {
  summary(): string;
}

// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// const printVehicle = (vehicle: { name: string; year: number | Date; broken: boolean }): void => {
//   console.log(`Name: ${vehicle.name}, year: ${vehicle.year}, broken: ${vehicle.broken}`);
// };
// printVehicle(oldCivic);

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}, year: ${vehicle.year}, broken: ${vehicle.broken}, summary: ${vehicle.summary()}`);
// };
// const printVehicle = (vehicle: Reportable): void => {
//   console.log(`summary: ${vehicle.summary()}`);
// };
// printVehicle(oldCivic);

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
