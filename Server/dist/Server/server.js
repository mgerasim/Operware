"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const express = require("express");
const morgan = require("morgan");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const configuration_1 = require("./models/configuration");
const event_1 = require("./models/event");
const call_1 = require("./models/call");
const variable_1 = require("./models/variable");
const AmiClient = require('asterisk-ami-client');
const sequelize = require('./databaseProvider');
const moment = require("moment");
const Queue = require('queue-fifo');
const InfiniteLoop = require('infinite-loop');
const asyncWhile = require("async-while");
const schedule = require("node-schedule");
const configurationVariable_1 = require("./models/configurationVariable");
const callback_1 = require("./models/callback");
const connectionManager_1 = require("./connectionManager");
class ExampleServer extends core_1.Server {
    constructor() {
        super(true);
        this.SERVER_STARTED = 'Example server started on port: ';
        this.connectionManager = new connectionManager_1.ConnectionManager();
        this.readBufferTask = new InfiniteLoop();
        this.asyncWhile = new asyncWhile();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupStatic();
        this.setupControllers();
        this.setupDatabaseProvider();
        2;
        this.setupConnectionManager();
        this.setupSchedule();
        this.setupQueue();
        this.setupCallback();
    }
    setupCallback() {
        this.app.use('/callback', (req, res) => {
            console.log(req.query);
            const callback = new callback_1.Callback();
            callback.to = req.query.to;
            callback.from = req.query.from;
            callback.save().then(result => {
                /*
                Configuration.findAll().then(configurations => {
                    const configuration = configurations[0];
                    this.amiClient.action({
                        Action: 'Originate',
                        Channel: callback.from,
                        Callerid: callback.id,
                        Timeout: configuration.callbackTimeout * 10000,
                        Context: configuration.callbackContext,
                        Exten: callback.to,
                        Priority: 1,
                        Async: 'yes'
                    });
                    res.status(200).send();
                })
                .error(err => {
                    console.error(err);
                    res.status(500).send(err.message);
                });
                */
            }, err => {
                console.error(err);
                res.status(500).send(err.message);
            });
        });
    }
    runEventHandle() {
        setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.connectionManager.connections.forEach((connection) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (connection.queue) {
                        if (!connection.queue.isEmpty()) {
                            const event = connection.queue.dequeue();
                            yield connection.processor.eventHandle(event);
                        }
                    }
                }));
            }
            catch (e) {
                console.error(e);
                console.log(this.connectionManager.connections);
            }
            finally {
                this.runEventHandle();
            }
        }), 1);
    }
    setupQueue() {
        this.runEventHandle();
    }
    setupSchedule() {
        const { Op } = require('sequelize');
        var j = schedule.scheduleJob('2 * * * *', function () {
            console.log('delete');
            console.log(moment().subtract(1, 'hours').toDate());
            event_1.Event.destroy({
                where: {
                    createdAt: {
                        [Op.lte]: moment().subtract(1, 'hours').toDate()
                    }
                }
            });
        });
    }
    setupStatic() {
        this.app.use('/', express.static('public'));
        this.app.use('/events', express.static('public'));
        this.app.use('/service', express.static('public'));
        this.app.use('/calls', express.static('public'));
        this.app.use('/calls/*', express.static('public'));
        this.app.use('/callbacks', express.static('public'));
        this.app.use('/configurationVariables', express.static('public'));
        this.app.use('/configuration', express.static('public'));
        this.app.use('/exceptions', express.static('public'));
    }
    setupConnectionManager() {
        configuration_1.Configuration.findAll().then(configurations => {
            configurations.forEach(configuration => {
                this.connectionManager.add(configuration);
            });
        })
            .error(err => {
            console.error(err);
        });
    }
    setupDatabaseProvider() {
        // const sequelize = new Sequelize('mysql://root:nFsBcwTm7iQgE4X10s85@127.0.0.1/Operware_development');
        sequelize.addModels([
            configuration_1.Configuration,
            call_1.Call,
            variable_1.Variable,
            event_1.Event,
            configurationVariable_1.ConfigurationVariable,
            callback_1.Callback
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
        this.app.use(morgan('dev'));
        this.app.listen(port, () => {
            logger_1.Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}
exports.default = ExampleServer;
//# sourceMappingURL=server.js.map