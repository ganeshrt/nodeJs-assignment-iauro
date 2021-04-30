"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const logger_1 = require("../../lib/logger");
const productModel_1 = __importDefault(require("./productModel"));
class ProductRepository {
    /**
     * insert
     */
    insert(productName, userId, visible) {
        logger_1.logger("BaseRepository - insert ", {});
        const product = new productModel_1.default({ productName, userId, visible });
        return product.save().then((res) => {
            return res;
        }).catch((err) => {
            console.log("failed to insert.", err);
            return err;
        });
    }
    /**
     * name
     */
    deleteOne(id) {
        // const product = new product({ name, password });
        logger_1.logger("BaseRepository - getOne ", {});
        return productModel_1.default.remove({ _id: id }).then(res => {
            console.log("product exist...!");
            return res;
        }).catch(err => {
            console.log("product not exist..");
            return err;
        });
    }
    getAll(role, userId) {
        // const product = new product({ name, password });
        logger_1.logger("BaseRepository - getAllproducts ", {});
        const visible = role === "user";
        if (visible) {
            return productModel_1.default.find({ visible, userId }).then(res => {
                console.log("product exist...!", res);
                return res;
            }).catch(err => {
                console.log("product not exist..");
                return err;
            });
        }
        else {
            return productModel_1.default.find({}).then(res => {
                console.log("product exist...!", res);
                return res;
            }).catch(err => {
                console.log("product not exist..");
                return err;
            });
        }
    }
    update(id, obj) {
        // const product = new product({ name, password });
        logger_1.logger("BaseRepository - getAllproducts ", {});
        return productModel_1.default.updateOne({ _id: id }, Object.assign({}, obj)).then(res => {
            console.log("product exist...!");
            return res;
        }).catch(err => {
            console.log("product not exist..");
            return err;
        });
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=productRepo.js.map