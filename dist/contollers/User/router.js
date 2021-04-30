"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const check_1 = require("express-validator/check");
const UserController_1 = __importDefault(require("./UserController"));
const controllerAdapter_1 = __importDefault(require("../../middlewares/controllerAdapter"));
const validation_1 = __importDefault(require("./validation"));
// import { upload } from '../../lib/handleMulter';
const router = express_1.Router();
router.post('/', check_1.checkSchema(validation_1.default.user.post), controllerAdapter_1.default(UserController_1.default, "createUser"));
router.post('/login', check_1.checkSchema(validation_1.default.user.get), controllerAdapter_1.default(UserController_1.default, "getUserToken"));
// router.get('/', authJWt, checkSchema(validation.user.get as any), controllerAdapter(userController, "getAllUsers"))
exports.default = router;
//# sourceMappingURL=router.js.map