"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Database_1 = require("./services/Database");
// const express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./contollers/User/router"));
const router_2 = __importDefault(require("./contollers/Products/router"));
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.init = () => {
            Database_1.Database.open(process.env.MONGODB_URL);
            this.initJsonParser();
            this.app.use(cors_1.default());
            this.app.use((req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
                // Request methods you wish to allow
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                // Request headers you wish to allow
                // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                // Set to true if you need the website to include cookies in the requests sent
                // to the API (e.g. in case you use sessions)
                res.setHeader('Access-Control-Allow-Credentials', 'true');
                // Pass to next layer of middleware
                next();
            });
        };
        this.initJsonParser = () => {
            this.app.use(body_parser_1.default.json());
            this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        };
        this.start = () => {
            const PORT = 8000;
            this.app.get('/health-check', (req, res) => res.status(200).send({ status: 200, message: "hello!" }));
            this.app.use("/users", router_1.default);
            this.app.use("/product", router_2.default);
            this.app.listen(PORT, () => {
                console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
            });
        };
        this.app = express_1.default();
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map