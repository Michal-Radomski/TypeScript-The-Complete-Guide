import fs from "fs";

export class CSV_FileReader {
  data: string[][] = [];

  constructor(public filename: string) {
    // this.filename = filename
  }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
