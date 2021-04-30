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
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = require("../../services/ProductsService/ProductService");
class ProductController {
    constructor() {
        // constructor() {
        this.createProduct = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { productName, userId, visible } = body;
            console.log("body::", body);
            return yield ProductService_1.productService.createProduct(productName, userId, visible);
        });
        this.getAllProduct = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            return yield ProductService_1.productService.getAllProduct(body.role, body.userId);
        });
        this.updateProduct = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            return yield ProductService_1.productService.updateProduct(id, body);
        });
        this.deleteProduct = ({ params, headers, body }) => __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            return yield ProductService_1.productService.deleteProduct(id);
        });
        // public createUser = async ({ params, headers, body }: any) => {
        //     const { email, password, name, city } = body;
        //     logger("User Controller -Create User :::::::::", body)
        //     return await userService.createUser(email, password, name, city);
        // }
        // public getUserToken = async ({ params, headers, body }: any) => {
        //     const { email, password } = params;
        //     logger("User Controller - get User ::::", JSON.stringify(params))
        //     console.log(email, password)
        //     return await userService.getUserToken(email, password);
        // }
        // public getAllUsers = async ({ params, headers, body }: any) => {
        //     const { email, password } = params;
        //     logger("User Controller - getAllUsers ::::", JSON.stringify(params))
        //     return await userService.getAllUsers();
        // }
    }
    // }
    /**
     * static getInstance
     */
    static getInstance() {
        if (!ProductController.instance) {
            ProductController.instance = new ProductController();
        }
        return ProductController.instance;
    }
}
exports.default = ProductController.getInstance();
//# sourceMappingURL=ProductsController.js.map