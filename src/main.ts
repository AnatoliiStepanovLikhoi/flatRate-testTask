import express, { Application } from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./previous-step";

import dotenv from "dotenv";
dotenv.config();

export const app: Application = express();

app.all("/graphql", createHandler({ schema }));

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/api/tickets", ticketsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status } = err;

  res.status(status || 500).json({
    msg: err.message,
  });
});
