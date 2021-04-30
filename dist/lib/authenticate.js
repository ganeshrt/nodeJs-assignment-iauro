"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authJWt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authJWt = (req, res, next) => {
    console.log("::::::::: Verifying auth token :::::::::");
    const authHeader = req.headers.authorization;
    console.log("::::::auth :::", authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                console.log("token err.", err);
                res.send({ status: 403, message: "Invalid token..!" });
                return;
            }
            if (user) {
                console.log(user);
                req.body.role = user.role;
                req.body.userId = user.userId;
            }
            next();
            return;
        });
    }
    else {
        res.send({ status: 401, message: " token expaired!" });
    }
};
exports.authJWt = authJWt;
//# sourceMappingURL=authenticate.js.map