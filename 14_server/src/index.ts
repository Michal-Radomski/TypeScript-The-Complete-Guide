import * as dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieSession from "cookie-session";

// Import routes
import loginRoutes from "./routes/loginRoutes";

// The server
const app: Express = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.NODE_SECRET as string],
  })
);

//Route middleware
app.use("/api", loginRoutes);

// Test route
app.get("/", (req: Request, res: Response) => {
  console.log("req.ip:", req.ip);
  res.send("<h1 style='color:blue;text-align:center'>API is running</h1>");
});

// Port
const port = (process.env.PORT || 5000) as number;

app.listen({ port: port }, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});

// * Express.js Server with Classes
// class Server {
//   app: express.Express = express();
//   constructor() {
//     // Middlewares
//     this.app.use(bodyParser.json());
//     this.app.use(bodyParser.urlencoded({ extended: true }));
//     this.app.use(morgan("combined"));
//     this.app.use(
//       cookieSession({
//         name: "session",
//         keys: [process.env.NODE_SECRET as string],
//       })
//     );
//   }

//   get() {
//     this.app.get("/", (req: Request, res: Response) => {
//       console.log("req.ip:", req.ip);
//       res.send("<h1 style='color:green;text-align:center'>API is running</h1>");
//     });
//   }

//   start(): void {
//     const port = (process.env.PORT || 5000) as number;
//     this.app.listen({ port: port }, () => {
//       console.log(`Server is listening at http://localhost:${port}`);
//       // For testing only
//       console.log("Current Time:", new Date().toLocaleTimeString());
//     });
//   }
// }

// const server = new Server();
// server.get();
// server.start();
