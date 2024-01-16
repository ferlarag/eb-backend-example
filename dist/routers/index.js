"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const example_1 = __importDefault(require("./example"));
const mainRouter = (0, express_1.Router)();
mainRouter.use("/", example_1.default);
exports.default = mainRouter;
