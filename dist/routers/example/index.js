"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleRouter = (0, express_1.Router)();
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
exports.default = exampleRouter;
