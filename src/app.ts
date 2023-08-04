import express, { Express } from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes";

export const app: Express = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);
