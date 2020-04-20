import * as bodyParser from 'body-parser';
import * as controllers from './controllers';
import * as express from 'express';
import * as morgan from 'morgan';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Sequelize } from 'sequelize-typescript';
import { Configuration } from './models/configuration'
import { Event } from './models/event'
import { Processor } from './processor';
import { Call } from './models/call';
import { Variable } from './models/variable';
const AmiClient = require('asterisk-ami-client');
const sequelize = require('./databaseProvider')
import * as moment from 'moment';

const Queue = require('queue-fifo');
const InfiniteLoop = require('infinite-loop');
const asyncWhile = require("async-while");

import * as schedule from 'node-schedule';
import { ConfigurationVariable } from './models/configurationVariable';
import { Callback } from './models/callback';
import { ConnectionManager } from './connectionManager';

class ExampleServer extends Server {

    private readonly SERVER_STARTED = 'Example server started on port: ';

    private connectionManager = new ConnectionManager();

    private readBufferTask = new InfiniteLoop();

    private asyncWhile = new asyncWhile();


    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setupStatic();
        this.setupControllers();
        this.setupDatabaseProvider(); 2
        this.setupConnectionManager();
        this.setupSchedule();
        this.setupQueue();
        this.setupCallback();
    }

    private setupCallback() {
        this.app.use('/callback', (req, res) => {
            console.log(req.query);
            const callback = new Callback();
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
            })
        });
    }

    private runEventHandle() {
        setTimeout(async () => {
            try {
                this.connectionManager.connections.forEach(async (connection) => {
                    if (connection.queue) {
                        if (!connection.queue.isEmpty()) {
                            const event = connection.queue.dequeue();
                            await connection.processor.eventHandle(event);
                        }
                    }
                    
                });
            } catch (e) {
                console.error(e);
                console.log(this.connectionManager.connections);
            } finally {
                this.runEventHandle();
            }
        }, 1);
    }

    private setupQueue() {
        this.runEventHandle();
    }

    private setupSchedule() {
        const { Op } = require('sequelize')

        var j = schedule.scheduleJob('2 * * * *', function () {
            console.log('delete');
            console.log(moment().subtract(1, 'hours').toDate());

            Event.destroy({
                where: {
                    createdAt: {
                        [Op.lte]: moment().subtract(1, 'hours').toDate()
                    }
                }
            });
        });
    }

    private setupStatic() {
        this.app.use('/', express.static('public'));
        this.app.use('/events', express.static('public'));
        this.app.use('/service', express.static('public'));
        this.app.use('/calls', express.static('public'));
        this.app.use('/calls/*', express.static('public'));
        this.app.use('/callbacks', express.static('public'));
        this.app.use('/configurationVariables', express.static('public'));
        this.app.use('/configuration', express.static('public'));
        this.app.use('/configuration/*', express.static('public'));
        this.app.use('/exceptions', express.static('public'));
        this.app.use('/auth', express.static('public'));
    }

    private setupConfigurationHandle() {

        this.app.use('/configurations/:id', async (req: any, res: any) => {
            try {
                const id = parseInt(req.params.id);
                const configuration = await Configuration.findByPk(id);
                if (!configuration) {
                    throw new Error(`Конфигурация не найдена ${id}`);
                }

                console.log(this.connectionManager.connections.map(x => x.configuration.id));
                const connection = this.connectionManager.connections.find(x => x.configuration.id === id);
                if (!connection) {
                    throw new Error(`Подключение не найдена по конфигурации ${id}`);
                }
                console.log(req.params)
                connection.queue.enqueue(req.params);
                res.status(200).send();
            } catch (err) {
                console.error(err.message);
                res.status(500).send(err.message);
            }
        });
    }

    private setupConnectionManager() {
        Configuration.findAll().then(configurations => {
            configurations.forEach(configuration => {
                this.connectionManager.add(configuration);
            });

            console.log(this.connectionManager.connections.find(x => x.configuration.id).configuration.titleOrganization);
            this.setupConfigurationHandle();
        })
        .error(err => {
            console.error(err);
        });
        
    }

    private setupDatabaseProvider() {

        // const sequelize = new Sequelize('mysql://root:nFsBcwTm7iQgE4X10s85@127.0.0.1/Operware_development');


        sequelize.addModels([
            Configuration,
            Call,
            Variable,
            Event,
            ConfigurationVariable,
            Callback
        ]);
        sequelize.sync();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.use(morgan('dev'));

        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}

export default ExampleServer;