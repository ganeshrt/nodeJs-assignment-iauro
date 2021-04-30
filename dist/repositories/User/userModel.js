"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose_1.default.Schema({
    email: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true }
});
schema.plugin(uniqueValidator);
const userSchema = mongoose_1.default.model('user', schema);
exports.default = userSchema;
//# sourceMappingURL=userModel.js.map