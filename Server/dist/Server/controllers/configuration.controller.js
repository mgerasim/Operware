"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const configuration_1 = require("../models/configuration");
let ConfigurationController = class ConfigurationController {
    getConfigurations(req, res) {
        logger_1.Logger.Info(req.params.msg);
        configuration_1.Configuration.findAll().then(configurations => {
            res.status(200).json(configurations);
        }).catch(err => {
            logger_1.Logger.Err(err.message);
        });
    }
    putConfiguration(req, res) {
        logger_1.Logger.Info(req.params);
        const id = req.body.id;
        configuration_1.Configuration.findByPk(id).then(configuration => {
            Object.assign(configuration, req.body);
            return configuration.save();
        })
            .then(result => {
            logger_1.Logger.Info("Конфигурация обновлена");
            res.status(200).send();
        })
            .catch(err => {
            logger_1.Logger.Err(err);
        });
        /*
        console.log(req.body);
    const configurationId = req.body.id;
    Configuration.findByPk(configurationId)
        .then(configuration => {
            Object.assign(configuration, req.body);
            return configuration.save();
        })
        .then(result => {
            console.log("Конфигурация обновлена");
            res.status(200).send();
        })
        .catch(err => console.error(err));
        */
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigurationController.prototype, "getConfigurations", null);
tslib_1.__decorate([
    core_1.Put(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigurationController.prototype, "putConfiguration", null);
ConfigurationController = tslib_1.__decorate([
    core_1.Controller('api/configuration')
], ConfigurationController);
exports.ConfigurationController = ConfigurationController;
//# sourceMappingURL=configuration.controller.js.map