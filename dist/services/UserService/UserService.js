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
exports.userService = exports.UserService = void 0;
const BaseRepository_1 = require("./../../repositories/BaseRepository");
const logger_1 = require("./../../lib/logger");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
class UserService {
    constructor() {
        this.baseRepo = new BaseRepository_1.BaseRepository();
        /**
         * createUser =
           =>*/
        this.createUser = (email, password, name, role) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("User service - createUser :::::", { email, password, name, role });
            return this.baseRepo.insert(email, password, name, role);
        });
        /**
         * getUserrole
         */
        this.getUserToken = (email, password) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("User Service -getUser::::: ", process.env.SECRET_KEY);
            try {
                const user = yield this.baseRepo.getOne(email, password);
                if (user) {
                    // Generate an access token
                    const accessToken = jsonwebtoken_1.default.sign({ email: user.email, name: user.name, role: user.role, userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                    return ({
                        accessToken
                    });
                }
                else {
                    throw new Error({ message: 'email or password incorrect', status: 404 });
                }
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
        });
        this.getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("User Service -GetAllUsers::::: ", process.env.SECRET_KEY);
            try {
                const users = yield this.baseRepo.getAll();
                if (users) {
                    // Generate an access token
                    return ({
                        data: users
                    });
                }
                else {
                    throw new Error({ message: 'email or password incorrect', status: 404 });
                }
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
        });
        this.updateUser = (id, data) => __awaiter(this, void 0, void 0, function* () {
            logger_1.logger("Product Service Update Product::::: ");
            try {
                const user = yield this.baseRepo.update(id, data);
                if (user) {
                    // Generate an access token
                    return ({
                        data: user
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
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.baseRepo.deleteOne(id);
                // throw new Error({ message: 'email or password incorrect', status: 404 } as any);
            }
            catch (e) {
                console.log("err", e);
                throw new Error(e);
            }
        });
    }
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
}
exports.UserService = UserService;
exports.userService = UserService.getInstance();
//# sourceMappingURL=UserService.js.map