"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const call_1 = require("../models/call");
const variable_1 = require("../models/variable");
const event_1 = require("../models/event");
let CallController = class CallController {
    getCalls(req, res) {
        logger_1.Logger.Info(req.params.msg);
        call_1.Call.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(calls => {
            res.status(200).json(calls);
        }).catch(err => {
            logger_1.Logger.Err(err.message);
        });
    }
    getVariablesByCall(req, res) {
        logger_1.Logger.Info(req.params.pbxCallId);
        variable_1.Variable.findAll({
            where: {
                pbx_call_id: req.params.pbxCallId
            }
        }).then(variables => {
            res.status(200).json(variables);
        }).catch(err => {
            res.status(500).json(err);
        });
    }
    getEventsByCall(req, res) {
        logger_1.Logger.Info(req.params.pbxCallId);
        event_1.Event.findAll({
            where: {
                Linkedid: req.params.pbxCallId
            }
        }).then(events => {
            res.status(200).json(events);
        }).catch(err => {
            res.status(500).json(err);
        });
    }
    deleteCallAll(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield event_1.Event.destroy({
                where: {},
                truncate: true
            });
            yield variable_1.Variable.destroy({
                where: {},
                truncate: true
            });
            yield call_1.Call.destroy({
                where: {},
                truncate: true
            });
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CallController.prototype, "getCalls", null);
tslib_1.__decorate([
    core_1.Get(':pbxCallId/variables'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CallController.prototype, "getVariablesByCall", null);
tslib_1.__decorate([
    core_1.Get(':pbxCallId/events'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CallController.prototype, "getEventsByCall", null);
tslib_1.__decorate([
    core_1.Delete(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CallController.prototype, "deleteCallAll", null);
CallController = tslib_1.__decorate([
    core_1.Controller('api/calls')
], CallController);
exports.CallController = CallController;
//# sourceMappingURL=call.controller.js.map