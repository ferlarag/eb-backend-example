"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
// elastics' default port is 8080
const PORT = process.env.PORT || 8080;
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({
        extended: true,
    }));
    app.use((0, cors_1.default)());
    app.use("/api", routers_1.default);
    //redirect to the /api router
    app.get("/", (req, res) => {
        res.redirect("/api");
    });
    return app;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const app = createApp();
            app.use((err, req, res, next) => {
                res.sendStatus(500).send("Internal Server Error");
            });
            app.listen(PORT, () => {
                console.log("Aplication listening on PORT:", PORT);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
