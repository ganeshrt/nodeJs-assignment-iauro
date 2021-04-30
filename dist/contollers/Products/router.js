"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authenticate_1 = require("../../lib/authenticate");
const express_1 = require("express");
const check_1 = require("express-validator/check");
const ProductsController_1 = __importDefault(require("./ProductsController"));
const controllerAdapter_1 = __importDefault(require("../../middlewares/controllerAdapter"));
const validation_1 = __importDefault(require("./validation"));
// import { upload } from '../../lib/handleMulter';
const router = express_1.Router();
router.post('/', authenticate_1.authJWt, check_1.checkSchema(validation_1.default.product.post), controllerAdapter_1.default(ProductsController_1.default, "createProduct"));
router.get('/all', authenticate_1.authJWt, controllerAdapter_1.default(ProductsController_1.default, "getAllProduct"));
router.put('/:id', authenticate_1.authJWt, check_1.checkSchema(validation_1.default.product.put), controllerAdapter_1.default(ProductsController_1.default, "updateProduct"));
router.delete('/:id', authenticate_1.authJWt, check_1.checkSchema(validation_1.default.product.delete), controllerAdapter_1.default(ProductsController_1.default, "deleteProduct"));
exports.default = router;
//# sourceMappingURL=router.js.map