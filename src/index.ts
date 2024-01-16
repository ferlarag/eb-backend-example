import {config} from "dotenv";
config();

import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import mainRouter from "./routers";

const PORT = process.env.PORT || 3001;

function createApp() {
  const app = express();
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  app.use("/api", mainRouter);

  return app;
}

async function main() {
  try {
    const app = createApp();
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      res.sendStatus(500).send("Internal Server Error");
    });
    app.listen(PORT, () => {
      console.log("Aplication listening on PORT:", PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

main();