"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let Configuration = class Configuration extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Configuration.prototype, "AMI_username", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Configuration.prototype, "AMI_server", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Configuration.prototype, "AMI_password", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Configuration.prototype, "AMI_port", void 0);
Configuration = tslib_1.__decorate([
    sequelize_typescript_1.Table
], Configuration);
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map