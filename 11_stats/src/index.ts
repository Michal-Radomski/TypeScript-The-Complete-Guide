import { MatchReader } from "./MatchReader";
// import { CSV_FileReader } from "./CSV_FileReader";
import { Summary } from "./Summary";
// import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReports";
// import { HtmlReport } from "./reportTargets/HTML_Report";

// // Create an object that satisfies the 'DataReader' interface
// const Csv_FileReader = new CSV_FileReader("football.csv");

// // Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(Csv_FileReader);
// matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   //  new ConsoleReport(),
//   new HtmlReport()
// );

// summary.buildAndPrintReport(matchReader.matches);

//* static methods
const matchReader2 = MatchReader.fromCsv("football.csv");
matchReader2.load();
const summary2 = Summary.winsAnalysisWithHtmlReport("Man United");
summary2.buildAndPrintReport(matchReader2.matches);
