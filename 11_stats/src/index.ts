import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CSV_FileReader } from "./CSV_FileReader";

// Create an object that satisfies the 'DataReader' interface
const Csv_FileReader = new CSV_FileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(Csv_FileReader);
matchReader.load();

let manUnitedWins = 0;
let manUnitedDraws = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.draw) {
    manUnitedDraws++;
  }
}

console.log(`Man United won ${manUnitedWins} games and tied ${manUnitedDraws} games`);
