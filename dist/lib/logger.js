"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (type, msg = "") => {
    switch (type) {
        case "DEBUG":
            return console.log("DEBUG  :: ", msg);
        case "ERROR":
            return console.error(`${type} ::${msg}`);
        case "WARN":
            return console.warn(`${type} ::${msg}`);
        default:
            return console.log(`${type} ::${msg}`);
    }
    return console.log(`${type} ::${msg}`);
};
exports.logger = logger;
//# sourceMappingURL=logger.js.map