"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const controllers = require("./controllers");
const express = require("express");
const morgan = require("morgan");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const configuration_1 = require("./models/configuration");
const event_1 = require("./models/event");
const processor_1 = require("./processor");
const call_1 = require("./models/call");
const variable_1 = require("./models/variable");
const AmiClient = require('asterisk-ami-client');
const sequelize = require('./databaseProvider');
const moment = require("moment");
const Queue = require('queue-fifo');
const InfiniteLoop = require('infinite-loop');
const schedule = require("node-schedule");
const configurationVariable_1 = require("./models/configurationVariable");
const callback_1 = require("./models/callback");
class ExampleServer extends core_1.Server {
    constructor() {
        super(true);
        this.SERVER_STARTED = 'Example server started on port: ';
        this.queue = new Queue();
        this.readBufferTask = new InfiniteLoop();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupStatic();
        this.setupControllers();
        this.setupDatabaseProvider();
        2;
        this.setupAmiClient();
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
                configuration_1.Configuration.findAll().then(configurations => {
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
            }, err => {
                console.error(err);
                res.status(500).send(err.message);
            });
        });
    }
    setupQueue() {
        this.readBufferTask.add(() => {
            if (!this.queue.isEmpty()) {
                const event = this.queue.dequeue();
                this.processor.eventHandle(event);
            }
        });
        this.readBufferTask.run();
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
        this.app.use('/calls', express.static('public'));
        this.app.use('/callbacks', express.static('public'));
        this.app.use('/configurationVariables', express.static('public'));
        this.app.use('/configuration', express.static('public'));
        this.app.use('/exceptions', express.static('public'));
    }
    setupAmiClient() {
        this.amiClient = new AmiClient({
            reconnect: true,
            keepAlive: true,
            emitEventsByTypes: true,
            emitResponsesById: true
        });
        configuration_1.Configuration.findAll().then(configurations => {
            const configuration = configurations[0];
            this.amiClient.connect(configuration.AMI_username, configuration.AMI_password, {
                host: configuration.AMI_server,
                port: configuration.AMI_port
            })
                .then(() => {
                console.log(`Успешное подсоединение: ${configuration.AMI_server}`);
                this.processor = new processor_1.Processor(configuration);
                this.amiClient
                    .on('Dial', event => {
                    this.queue.enqueue(event);
                })
                    .on('VarSet', event => {
                    this.queue.enqueue(event);
                })
                    .on('Hangup', event => {
                    this.queue.enqueue(event);
                })
                    .on('Hold', event => {
                    this.queue.enqueue(event);
                })
                    .on('Bridge', event => {
                    this.queue.enqueue(event);
                })
                    .on('BridgeLeave', event => {
                    this.queue.enqueue(event);
                })
                    .on('ExtensionStatus', event => {
                    this.queue.enqueue(event);
                })
                    .on('Newstate', event => {
                    this.queue.enqueue(event);
                })
                    .on('Newchannel', event => {
                    this.queue.enqueue(event);
                })
                    .on('NewCallerid', event => {
                    this.queue.enqueue(event);
                })
                    .on('Cdr', event => {
                    this.queue.enqueue(event);
                })
                    .on('QueueMemberStatus', event => {
                    this.queue.enqueue(event);
                })
                    .on('HangupRequest', event => {
                    this.queue.enqueue(event);
                })
                    .on('SoftHangupRequest', event => {
                    this.queue.enqueue(event);
                })
                    .on('Newexten', event => {
                    this.processor.eventHandle(event);
                })
                    .on('AgentComplete', event => {
                    this.queue.enqueue(event);
                })
                    .on('LINKEDID_END', event => console.log(event))
                    .on('resp_123', response => {
                    // client.disconnect();
                })
                    .on('internalError', error => {
                    logger_1.Logger.Err(error);
                });
                this.amiClient.action({
                    Action: 'Ping',
                    ActionID: 123
                });
            })
                .catch(error => {
                console.log('connect ami client error');
                logger_1.Logger.Err(configuration.AMI_server);
                logger_1.Logger.Err(configuration.AMI_username);
                logger_1.Logger.Err(configuration.AMI_password);
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