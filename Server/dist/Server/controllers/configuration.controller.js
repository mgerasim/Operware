"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const configuration_1 = require("../models/configuration");
const configurationVariable_1 = require("../models/configurationVariable");
const call_1 = require("../models/call");
const event_1 = require("../models/event");
let ConfigurationController = class ConfigurationController {
    getVariables(req, res) {
        configurationVariable_1.ConfigurationVariable.findAll({
            where: {
                configurationId: req.params.id
            },
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(configurationVariables => {
            res.status(200).json(configurationVariables);
        }).catch(err => {
            logger_1.Logger.Err(err.message);
        });
    }
    postVariables(req, res) {
        let configurationVariable = new configurationVariable_1.ConfigurationVariable();
        console.log(req.body);
        Object.assign(configurationVariable, req.body);
        configurationVariable.save().then(result => {
            res.status(200).json({ result: 'ok' });
        }, err => {
            res.status(404).send();
        });
    }
    putVariables(req, res) {
        configurationVariable_1.ConfigurationVariable.findByPk(req.body.id).then(configurationVariable => {
            Object.assign(configurationVariable, req.body);
            configurationVariable.save().then(result => {
                res.status(200).send(configurationVariable);
            })
                .error(err => {
                console.error(err);
                res.status(500).send(err.message);
            });
        })
            .error(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
    }
    deleteConfiguration(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params.id);
                yield event_1.Event.destroy({
                    where: {
                        configurationId: req.params.id
                    }
                });
                yield call_1.Call.destroy({
                    where: {
                        configurationId: req.params.id
                    }
                });
                yield configurationVariable_1.ConfigurationVariable.destroy({
                    where: {
                        configurationId: req.params.id
                    }
                });
                yield configuration_1.Configuration.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                res.status(200).send({});
            }
            catch (e) {
                console.log(e);
                res.status(500).send(e.message);
            }
        });
    }
    getById(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params.id);
                const configuration = yield configuration_1.Configuration.findByPk(req.params.id);
                console.log(configuration);
                if (configuration) {
                    res.status(200).send(configuration);
                }
                else {
                    res.status(404).send({});
                }
            }
            catch (err) {
                console.error(err);
                res.status(500).send(err.message);
            }
        });
    }
    getConfigurations(req, res) {
        logger_1.Logger.Info(req.params.msg);
        configuration_1.Configuration.findAll().then(configurations => {
            res.status(200).json(configurations);
        }).catch(err => {
            logger_1.Logger.Err(err.message);
        });
    }
    postConfiguration(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const configuration = new configuration_1.Configuration();
                Object.assign(configuration, req.body);
                console.log(req.body);
                yield configuration.save();
                console.log(configuration.id);
                res.status(200).send(configuration);
            }
            catch (err) {
                console.error(err);
                res.status(500).send(err.message);
            }
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
    core_1.Get(':id/variables'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigurationController.prototype, "getVariables", null);
tslib_1.__decorate([
    core_1.Post('variables'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigurationController.prototype, "postVariables", null);
tslib_1.__decorate([
    core_1.Put('variables'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigurationController.prototype, "putVariables", null);
tslib_1.__decorate([
    core_1.Delete(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConfigurationController.prototype, "deleteConfiguration", null);
tslib_1.__decorate([
    core_1.Get(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConfigurationController.prototype, "getById", null);
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ConfigurationController.prototype, "getConfigurations", null);
tslib_1.__decorate([
    core_1.Post(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConfigurationController.prototype, "postConfiguration", null);
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