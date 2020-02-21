"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
let databaseProviders = class databaseProviders {
    constructor() {
        this.useFactory = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const sequelize = new sequelize_typescript_1.Sequelize({
                database: 'Operware_development',
                dialect: 'mysql',
                username: 'root',
                password: 'nFsBcwTm7iQgE4X10s85',
                host: '127.0.0.1',
            });
            yield sequelize.sync();
            return sequelize;
        });
    }
};
databaseProviders = tslib_1.__decorate([
    common_1.Injectable()
], databaseProviders);
exports.databaseProviders = databaseProviders;
//# sourceMappingURL=databaseProvider.js.map