"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const call_1 = require("../models/call");
let CallController = class CallController {
    getCalls(req, res) {
        logger_1.Logger.Info(req.params.msg);
        call_1.Call.findAll().then(calls => {
            res.status(200).json(calls);
        }).catch(err => {
            logger_1.Logger.Err(err.message);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CallController.prototype, "getCalls", null);
CallController = tslib_1.__decorate([
    core_1.Controller('api/calls')
], CallController);
exports.CallController = CallController;
//# sourceMappingURL=call.controller.js.map