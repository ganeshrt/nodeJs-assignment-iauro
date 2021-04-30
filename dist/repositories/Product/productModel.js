"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose_1.default.Schema({
    productName: { type: String, required: true },
    userId: { type: String, required: true },
    visible: { type: Boolean, required: true },
});
schema.plugin(uniqueValidator);
const productSchema = mongoose_1.default.model('product', schema);
exports.default = productSchema;
//# sourceMappingURL=productModel.js.map