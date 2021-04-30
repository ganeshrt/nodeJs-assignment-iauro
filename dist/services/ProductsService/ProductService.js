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
exports.productService = exports.ProductService = void 0;
const productRepo_1 = require("../../repositories/Product/productRepo");
const logger_1 = require("../../lib/logger");
require('dotenv').config();
class ProductService {
    constructor() {
        this.productRepo = new productRepo_1.ProductRepository();
        this.createProduct = (productName, userId, visible) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("Product service - create :::::", JSON.stringify({ productName, userId, visible }));
            return this.productRepo.insert(productName, userId, visible);
        });
        /**
         * getUserrole
         */
        this.getAllProduct = (role, userId) => __awaiter(this, void 0, void 0, function* () {
            let Products;
            logger_1.logger("Product Service -get all::::: ", {});
            try {
                Products = yield this.productRepo.getAll(role, userId);
                // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
            return Products;
        });
        this.updateProduct = (id, data) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("Product Service Update Product::::: ");
            try {
                const Product = yield this.productRepo.update(id, data);
                if (Product) {
                    // Generate an access token
                    return ({
                        data: Product
                    });
                }
                else {
                    throw new Error({ message: 'Product not found', status: 404 });
                }
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
        });
        this.deleteProduct = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productRepo.deleteOne(id);
                // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
        });
    }
    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
}
exports.ProductService = ProductService;
exports.productService = ProductService.getInstance();
//# sourceMappingURL=ProductService.js.map