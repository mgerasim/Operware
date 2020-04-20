import { Processor } from './processor';
import { Configuration } from './models/configuration';
const Queue = require('queue-fifo');

const AmiClient = require('asterisk-ami-client');

export class ConnectionManager {

    public connections = new Array<{configuration: Configuration, amiClient: any, processor: Processor, queue: any }>()

    constructor() {

    }

    add(configuration: Configuration) {
        const amiClient = new AmiClient({
            reconnect: true,
            keepAlive: true,
            emitEventsByTypes: true,
            emitResponsesById: true
        });

        const connection: {configuration: Configuration, amiClient: any, processor: Processor, queue: any} = {
            configuration: configuration,
            amiClient: amiClient,
            processor: new Processor(configuration),
            queue: new Queue()
        }


        console.log(`Ami connecting: ${configuration.titleOrganization}`);

        this.connections.push(connection);

        amiClient.connect(configuration.AMI_username,
            configuration.AMI_password,
            {
                host: configuration.AMI_server,
                port: configuration.AMI_port
            })
            .then(async () => {
                const state = `Успешное подсоединение: ${configuration.AMI_server}`;
                console.log(state);
                configuration.state = state;
                try {

                    await configuration.save()
                } catch (err) {
                    console.error(err);
                }

                amiClient
                    .on('Dial', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('VarSet', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('Hangup', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('Hold', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('Bridge', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('BridgeLeave', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('ExtensionStatus', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('Newstate', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('Newchannel', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('NewCallerid', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('Cdr', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('QueueMemberStatus', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('HangupRequest', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('SoftHangupRequest', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('Newexten', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('AgentComplete', event => {
                        connection.queue.enqueue(event);
                    })
                    .on('LINKEDID_END', event => console.log(event))
                    .on('resp_123', response => {

                        // client.disconnect();
                    })
                    .on('internalError', error => {
                        console.error(error);
                    });
                })
                .catch(err => {

                    const state = `Ошибка соединения ${configuration.AMI_server}: ${err.message}`;
                    console.error(state);
                    configuration.state = state;
                    configuration.save().then().catch(e => console.error(e.message));


 //                   this.connections.push(connection);

                });
            }
        

    
}