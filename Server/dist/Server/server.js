"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const sequelize_typescript_1 = require("sequelize-typescript");
const configuration_1 = require("./models/configuration");
class ExampleServer extends core_1.Server {
    constructor() {
        super(true);
        this.SERVER_STARTED = 'Example server started on port: ';
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupControllers();
        this.setupDatabaseProvider();
    }
    setupDatabaseProvider() {
        const sequelize = new sequelize_typescript_1.Sequelize('mysql://root:nFsBcwTm7iQgE4X10s85@127.0.0.1/Operware_development');
        sequelize.addModels([
            configuration_1.Configuration
        ]);
        sequelize.sync();
    }
    setupControllers() {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = controllers[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }
    start(port) {
        this.app.get('*', (req, res) => {
            res.send(this.SERVER_STARTED + port);
        });
        this.app.listen(port, () => {
            logger_1.Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}
exports.default = ExampleServer;
//# sourceMappingURL=server.js.map