import fs from "fs";

export abstract class CSV_FileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {
    // this.filename = filename
  }
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
