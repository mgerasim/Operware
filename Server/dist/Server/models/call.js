"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let Call = class Call extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Date)
], Call.prototype, "call_start", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Date)
], Call.prototype, "call_answer", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Date)
], Call.prototype, "call_end", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Index({
        name: 'pbx-call-index',
        type: 'UNIQUE'
    }),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Call.prototype, "pbx_call_id", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Call.prototype, "caller_id", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Call.prototype, "duration", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Call.prototype, "internal", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Call.prototype, "call_filename", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Call.prototype, "responsibles", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Call.prototype, "called_phone_number", void 0);
Call = tslib_1.__decorate([
    sequelize_typescript_1.Table
], Call);
exports.Call = Call;
//# sourceMappingURL=call.js.map