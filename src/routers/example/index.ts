import {Router, json} from "express";

const exampleRouter = Router();

exampleRouter.get("/", (req, res) => {
  res.json({
    message: "Hey there!",
  });
});

exampleRouter.post("/", (req, res) => {
  res.json({
    messagge: "Hello from post!",
  });
});

export default exampleRouter;
