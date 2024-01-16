import {Router} from "express";
import exampleRouter from "./example";

const mainRouter = Router();

mainRouter.use("/", exampleRouter);

export default mainRouter;
