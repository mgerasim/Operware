"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const express = require("express");
const morgan = require("morgan");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const configuration_1 = require("./models/configuration");
const processor_1 = require("./processor");
const call_1 = require("./models/call");
const variable_1 = require("./models/variable");
const AmiClient = require('asterisk-ami-client');
const sequelize = require('./databaseProvider');
class ExampleServer extends core_1.Server {
    constructor() {
        super(true);
        this.SERVER_STARTED = 'Example server started on port: ';
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupStatic();
        this.setupControllers();
        this.setupDatabaseProvider();
        2;
        this.setupAmiClient();
    }
    setupStatic() {
        this.app.use('/', express.static('public'));
        this.app.use('/events', express.static('public'));
        this.app.use('/calls', express.static('public'));
        this.app.use('/configuration', express.static('public'));
        this.app.use('/exceptions', express.static('public'));
    }
    setupAmiClient() {
        const client = new AmiClient({
            reconnect: true,
            keepAlive: true,
            emitEventsByTypes: true,
            emitResponsesById: true
        });
        configuration_1.Configuration.findAll().then(configurations => {
            const configuration = configurations[0];
            client.connect('avancrm', 'JD3clEB8_f23r-3ry84gJ', { host: 'avantelecom.avantele.com', port: 5038 })
                .then(() => {
                this.processor = new processor_1.Processor(configuration);
                client
                    .on('Dial', event => {
                    this.processor.eventHandle(event);
                })
                    .on('VarSet', event => {
                    this.processor.eventHandle(event);
                })
                    .on('Hangup', event => {
                    this.processor.eventHandle(event);
                })
                    .on('Hold', event => {
                    this.processor.eventHandle(event);
                })
                    .on('Bridge', event => {
                    this.processor.eventHandle(event);
                })
                    .on('BridgeLeave', event => {
                    this.processor.eventHandle(event);
                })
                    .on('ExtensionStatus', event => {
                    this.processor.eventHandle(event);
                })
                    .on('Newstate', event => {
                    this.processor.eventHandle(event);
                })
                    .on('Newchannel', event => {
                    this.processor.eventHandle(event);
                })
                    .on('NewCallerid', event => {
                    this.processor.eventHandle(event);
                })
                    .on('Cdr', event => {
                    this.processor.eventHandle(event);
                })
                    .on('QueueMemberStatus', event => {
                    this.processor.eventHandle(event);
                })
                    .on('HangupRequest', event => {
                    this.processor.eventHandle(event);
                })
                    .on('SoftHangupRequest', event => {
                    this.processor.eventHandle(event);
                })
                    .on('Newexten', event => {
                    this.processor.eventHandle(event);
                })
                    .on('AgentComplete', event => {
                    this.processor.eventHandle(event);
                })
                    .on('LINKEDID_END', event => console.log(event))
                    .on('resp_123', response => {
                    // client.disconnect();
                })
                    .on('internalError', error => {
                    logger_1.Logger.Err(error);
                });
                client.action({
                    Action: 'Ping',
                    ActionID: 123
                });
            })
                .catch(error => {
                console.log('connect ami client');
                console.log(error);
                logger_1.Logger.Err(error);
            });
        })
            .catch(err => {
            logger_1.Logger.Err(err);
        });
    }
    setupDatabaseProvider() {
        // const sequelize = new Sequelize('mysql://root:nFsBcwTm7iQgE4X10s85@127.0.0.1/Operware_development');
        sequelize.addModels([
            configuration_1.Configuration,
            call_1.Call,
            variable_1.Variable
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