"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const logger_1 = require("./../lib/logger");
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    /**
     * open
     */
    static open(dbUrl) {
        return new Promise((resolve, rejects) => {
            mongoose_1.default.connect(dbUrl, { bufferMaxEntries: 0, autoIndex: true, keepAlive: 1, poolSize: 10, reconnectInterval: 500, useNewUrlParser: true });
            // .then((result: any) => {
            //     logger("Database connected succesfully", result)
            // }).catch((err: any) => {
            //     logger("Database service -connecting to mongodb ", err);
            // });
            mongoose_1.default.connection.on("error", (err) => {
                logger_1.logger("Database service -connecting to mongodb ", err);
            });
            mongoose_1.default.connection.on("connected", () => {
                logger_1.logger("Database connected successfully");
            });
        });
    }
    /**
     * close
     */
    static close() {
        mongoose_1.default.disconnect();
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map