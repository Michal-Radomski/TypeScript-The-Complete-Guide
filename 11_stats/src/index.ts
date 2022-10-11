import { CSV_FileReader } from "./CSV_FileReader";

const reader = new CSV_FileReader("football.csv");
reader.read();
console.log("reader.data:", reader.data);

enum MatchResult {
  homeWin = "H",
  awayWin = "A",
  draw = "D",
}

let manUnitedWins = 0;
let manUnitedDraws = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.draw) {
    manUnitedDraws++;
  }
}

console.log(`Man United won ${manUnitedWins} games and tied ${manUnitedDraws} games`);

//* Initial Version
// import fs from "fs";

// const matches = fs
//   .readFileSync("football.csv", {
//     encoding: "utf8",
//   })
//   .split("\n")
//   .map((row: string): string[] => {
//     return row.split(",");
//   });

// // console.log({ matches });

// // const MatchResult = {
// //   homeWin: "H",
// //   awayWin: "A",
// //   draw: "D",
// // };

// //* enum -> enumeration
// enum MatchResult {
//   homeWin = "H",
//   awayWin = "A",
//   draw = "D",
// }

// let manUnitedWins = 0;
// let manUnitedDraws = 0;

// for (let match of matches) {
//   if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.draw) {
//     manUnitedDraws++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games and tied ${manUnitedDraws} games`);
