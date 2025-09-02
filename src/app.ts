import cors from "cors";
import express, { Application, Request, Response } from "express";

import { userRoutes } from "./app/modules/user/user.route";

const app: Application = express();

// PARSER
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Test",
  });
});

app.use("/api/v1/user", userRoutes);

export default app;
