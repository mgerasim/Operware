import { Logger } from '@overnightjs/logger';
import { Configuration } from './models/configuration';
import { Event } from './models/event';
import { Call } from './models/call';
import { Variable } from './models/variable';
import moment = require('moment');
import { isNullOrUndefined } from 'util';
import { ProcessorVarSet } from './processorVarSet';
import { ConfigurationVariable } from './models/configurationVariable';

const axios = require('axios')

export class Processor {
    
    processorVarSet: ProcessorVarSet;

    constructor(private configuration: Configuration) {
        this.processorVarSet = new ProcessorVarSet(configuration);
    }

    async eventHandle(event: any) {

        try {
            await Event.create(event);
            if (event.Event !== 'VarSet') {
 //               console.log(event);
            }
        } catch (err) {
            console.error('error save event');
            Logger.Err(err);
        }

        if (event[this.configuration.uniqueFieldName] === undefined) {
           // console.log(event);
            return;
        }

        if (isNullOrUndefined(this.configuration)) {
            throw new Error('Не обнаружена конфигурация!');
        }

        let call = await Call.findOne(
            { 
                where: 
                { pbx_call_id: event[this.configuration.uniqueFieldName],
                configurationId: this.configuration.id } })

        if (isNullOrUndefined(call)) {
            try {
                /*
                await Call.create({
                    call_start: new Date(),
                    pbx_call_id: event[this.configuration.uniqueFieldName]
                });
                console.log(`save pbx call id ${event[this.configuration.uniqueFieldName]}`);
                */
            } catch (err) {
                console.error(`error save pbx call id ${event[this.configuration.uniqueFieldName]}`);
                console.error(err.message);
            }
        }


        if (event.Event === 'Newstate'
            && event.ChannelStateDesc === 'Ringing'
            && event.Priority === '1'
            && event.Channel.includes('SIP/')) {
            const call = await Call.findOne({
                where: {
                    pbx_call_id: event[this.configuration.uniqueFieldName]
                }
            });
            if (call === undefined || call === null) {
                return;
           
            }
            call.responsibles = isNullOrUndefined(call.responsibles) ? event.CallerIDNum : `${call.responsibles}|${event.CallerIDNum}`;
            await call.save();
        }

        if (event.Event === this.configuration.incomingStartCallEvent) {
            // AMI событие привязки входящего звонка
            if (this.configuration.incomingStartCallValue.includes(event[this.configuration.incomingStartCallField])
                && this.configuration.incomingStartCallValue2.includes(event[this.configuration.incomingStartCallField2])) {

                    console.log('AMI событие привязки входящего звонка');

                
                if (call) {
                    return;
                }

                let called_phone_number = isNullOrUndefined(event.Exten) ? event.CallerIDNum : event.Exten ;
                if (called_phone_number.length === 6) {
                    called_phone_number = '74212' + called_phone_number;
                } if (called_phone_number.length === 7) {
                    called_phone_number = '7423' + called_phone_number;
                } else if (called_phone_number.length === 10) {
                    called_phone_number = '7' + called_phone_number;
                }

                let caller_id = event.CallerIDNum;
                if (caller_id.length === 6) {
                    caller_id = '74212' + caller_id;
                } if (caller_id.length === 7) {
                    caller_id = '7423' + caller_id;
                } else if (caller_id.length === 10) {
                    caller_id = '7' + caller_id;
                }

                const _callAdded = await Call.create({
                    call_start: new Date(),
                    pbx_call_id: event[this.configuration.uniqueFieldName],
                    caller_id: caller_id,
                    called_phone_number: called_phone_number,
                    configurationId: this.configuration.id
                });

                await this.processorVarSet.eventHandle('CALL_START', caller_id, _callAdded);

                
            }
        }



        call = await Call.findOne(
            { 
                where: 
                { pbx_call_id: event[this.configuration.uniqueFieldName],
                configurationId: this.configuration.id } })





        const configurationVariables = await ConfigurationVariable.findAll();

        configurationVariables.forEach(async (configurationVariable) => {

            if (isNullOrUndefined(configurationVariable.sourceFieldValue) || isNullOrUndefined(configurationVariable.sourceFieldValue2)) {
                return;
            }

            if (configurationVariable.sourceFieldValue.includes(event[configurationVariable.sourceFieldName])
                && configurationVariable.sourceFieldValue2.includes(event[configurationVariable.sourceFieldName2]))
                {
                    try {
                        await this.processorVarSet.eventHandle(configurationVariable.title,
                            event[configurationVariable.sourceField],
                            call);  
                    }  catch (err) {
                        console.error(`error processorVarSet eventHandle ${configurationVariable.title}`);
                        console.error(err.message);
                    }
                }
        });


        
        if (this.configuration.id > 1) {
            return;
        }
        

        if (event.Event === this.configuration.incomingEndCallEvent) {
            if (this.configuration.incomingEndCallValue.includes(event[this.configuration.incomingEndCallField])
                && this.configuration.incomingEndCallValue2.includes(event[this.configuration.incomingEndCallField2])) {
                const call = await Call.findOne({
                    where: {
                        pbx_call_id: event[this.configuration.uniqueFieldName]
                    }
                });
                if (call === undefined || call === null) {
                    return;
                }

                if (call.call_end !== null) {
                    return;
                }

                console.log("Завершение звонка");
                call.call_end = new Date();
                await call.save();

                await this.processorVarSet.eventHandle('CALL_END', '', event[this.configuration.uniqueFieldName]);

                if (call.internal !== null) {

                    if (!(call.duration > 0)) {
                        call.duration = Math.round((call.call_end.getTime() - call.call_answer.getTime()) / 1000);
                        await call.save();
                    }

                    await this.processorVarSet.eventHandle('CALL_FINISHED', '', event[this.configuration.uniqueFieldName]);

                    
                }

                if (call.internal === null) {

                    await this.processorVarSet.eventHandle('CALL_LOST', '', event[this.configuration.uniqueFieldName]);
                }
            }
        }

        if (event.Event === this.configuration.incomingAnswerCallEvent) {
            if (this.configuration.incomingAnswerCallValue.includes(event[this.configuration.incomingAnswerCallField])
                && this.configuration.incomingAnswerCallValue2.includes(event[this.configuration.incomingAnswerCallField2])
                && event.Channel.includes('SIP/')) {
                const call = await Call.findOne({
                    where: {
                        pbx_call_id: event[this.configuration.uniqueFieldName]
                    }
                });

                if (call === undefined || call === null) {
                    return;
                }

                if (!isNullOrUndefined(call.internal)) {
                    return;
                }

                console.log("Ответ звонка");

            }
        }

        switch (event.Event) {
            case 'VarSet': {

                if (call === undefined || call === null) {
                    return;
                }

                this.processorVarSet.eventHandle(
                    event.Variable,
                    event.Value,
                    call
                );

                if (event.Variable === 'MIXMONITOR_FILENAME') {
                    const file_link = event.Value.replace('/var/spool/asterisk', `https://${this.configuration.AMI_server}/CRM`).replace('.wav', '.mp3');

                    call.call_filename = file_link;
                    await call.save();


                }
                break;
            }
        }
    }
    reverseString(str: string): string {
        // Step 1. Use the split() method to return a new array
        const splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        const joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }
}