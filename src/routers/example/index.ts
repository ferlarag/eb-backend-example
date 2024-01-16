import {Router, json} from "express";

const exampleRouter = Router();

exampleRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "Hey there!",
  });
});

exampleRouter.post("/", (req, res) => {
  res.status(200).json({
    messagge: "Hello from post!",
  });
});

export default exampleRouter;
