import * as dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieSession from "cookie-session";

import "./controllers/LoginController";
import "./controllers/RootController";
import { AppRouter } from "./AppRouter";

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
app.use(AppRouter.getInstance());

// Port
const port = (process.env.PORT || 5000) as number;

app.listen({ port: port }, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  // For testing only
  console.log("Current Time:", new Date().toLocaleTimeString());
});
