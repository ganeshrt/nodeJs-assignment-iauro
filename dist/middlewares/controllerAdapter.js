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
const logger_1 = require("./../lib/logger");
function controllerAdapter(controller = null, functionName = "") {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const { params, headers, body, query } = req;
        console.log(":::::::: Controller Adapter ::::::::");
        logger_1.logger("body", params);
        try {
            const result = yield controller[functionName]({ params, headers, body, query });
            logger_1.logger("result", JSON.stringify(result));
            res.send(result);
            // res.status(200).json(result);
        }
        catch (e) {
            console.log("controller adapter ;:::", e);
            const status = e.status || 500;
            res.status(status).json(e);
        }
    });
}
exports.default = controllerAdapter;
//# sourceMappingURL=controllerAdapter.js.map