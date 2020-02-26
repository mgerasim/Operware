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

import * as schedule from 'node-schedule';

class ExampleServer extends Server {

    private readonly SERVER_STARTED = 'Example server started on port: ';

    private processor: Processor

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.setupStatic();
        this.setupControllers();
        this.setupDatabaseProvider();2
        this.setupAmiClient();
        this.setupSchedule();
    }

    private setupSchedule() {
        const { Op } = require('sequelize')
        
        var j = schedule.scheduleJob('2 * * * *', function(){
            console.log('delete');
            console.log(moment().subtract(1, 'hours').toDate());

        Event.destroy({ where: { 
                createdAt: {
                    [Op.lte]: moment().subtract(1, 'hours').toDate()
                }
            } });
        });
    }

    private setupStatic() {
        this.app.use('/', express.static('public'));
        this.app.use('/events', express.static('public'));
        this.app.use('/calls', express.static('public'));
        this.app.use('/configuration', express.static('public'));
        this.app.use('/exceptions', express.static('public'));
    }

    private setupAmiClient() {
    
        const client = new AmiClient({
            reconnect: true,
            keepAlive: true,
            emitEventsByTypes: true,
            emitResponsesById: true
        });
        Configuration.findAll().then(configurations => {
            const configuration = configurations[0];
            client.connect(configuration.AMI_username, 
                configuration.AMI_password, 
                { 
                    host: configuration.AMI_server, 
                    port: configuration.AMI_port 
                })
                .then(() => {
                    this.processor = new Processor(configuration);
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
                        Logger.Err(error);
                    });
                    client.action({
                        Action: 'Ping',
                        ActionID: 123
                    });
                })
                .catch(error =>
                {
                    console.log('connect ami client error');
                    Logger.Err(configuration.AMI_server);
                    Logger.Err(configuration.AMI_username);
                    Logger.Err(configuration.AMI_password);
                    Logger.Err(error);
                });
        })
        .catch(err => {
            Logger.Err(err);
        })
    }

    private setupDatabaseProvider() {

        // const sequelize = new Sequelize('mysql://root:nFsBcwTm7iQgE4X10s85@127.0.0.1/Operware_development');


        sequelize.addModels([
            Configuration,
            Call,
            Variable,
            Event
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