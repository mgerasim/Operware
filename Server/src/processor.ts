import { Logger } from '@overnightjs/logger';
import { Configuration } from './models/configuration';
import { Event } from './models/event';
import { Call } from './models/call';
import { Variable } from './models/variable';
import moment = require('moment');

const axios = require('axios')

export class Processor {
    constructor(private configuration: Configuration) {}

    async eventHandle(event: any) {

        try {
            await Event.create(event);
        } catch (err) {
            Logger.Err(err);
        }

        switch(event.Event) {
            // AMI событие привязки входящего звонка
            case this.configuration.incomingStartCallEvent: {
                if (this.configuration.incomingStartCallValue.includes(event[this.configuration.incomingStartCallField])
                    && this.configuration.incomingStartCallValue2.includes(event[this.configuration.incomingStartCallField2])) {
                        const call = await Call.findOne({ where: { pbx_call_id: event.Linkedid } })

                        if (call) {
                            return;
                        }
        
                        let called_phone_number = event.Exten;
                        if (called_phone_number.length === 6) {
                            called_phone_number = '74212' + called_phone_number;
                        } else if (called_phone_number.length === 10) {
                            called_phone_number = '7' + called_phone_number;
                        }

                        await Call.create({
                            call_start: new Date(),
                            pbx_call_id: event.Linkedid,
                            caller_id: event.CallerIDNum,
                            called_phone_number: called_phone_number
                        });
        
                        const userField = new Object();
                        userField['status'] = 'incoming_call';
                        const callParam = new Object();
                        callParam['call'] = userField;
                        const pbxCallIdField = new Object();
                        pbxCallIdField['call_session_id'] = this.reverseString(event.Linkedid.replace(/\D/g, '')).substring(0, 7);
                        Object.assign(callParam['call'], pbxCallIdField);
                        let incomingField = new Object();
                        incomingField['contact_phone_number'] = event.CallerIDNum;
                        const calledPhoneNumberField = new Object();
                        calledPhoneNumberField['called_phone_number'] = called_phone_number;
                        Object.assign(callParam['call'], incomingField)
                        Object.assign(callParam['call'], calledPhoneNumberField)
                        console.log('Отправление уведомление о входящем звонке ... ');
                        console.log(callParam);
                        const body = callParam;

                        axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, body,
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': this.configuration.authKey
                                }
                            })
                            .then(res => {
                                console.log('Успешно Отправлено уведомление о входящем звонке');
                            })
                            .catch((error) => {
                                // Exception.create({ message: 'Ошибка при отправке уведомление о входящем звонке', stack: error.stack.substring(0, 254) }).then();
                            })
                }
                break;
            } 
            case this.configuration.incomingEndCallEvent: {
                if (this.configuration.incomingEndCallValue.includes(event[this.configuration.incomingEndCallField])
                && this.configuration.incomingEndCallValue2.includes(event[this.configuration.incomingEndCallField2])) {
                    const call = await Call.findOne({
                        where: {
                            pbx_call_id: event.Linkedid
                        }
                    });
                    if (call === undefined || call === null) {
                        return;
                    }
                    console.log("Завершение звонка");
                    call.call_end = new Date();
                    await call.save();
                    if (call.internal !== null) {

                        if (!(call.duration > 0)) {
                            call.duration = Math.round((call.call_end.getTime() - call.call_answer.getTime()) / 1000);
                            await call.save();
                        }

                        let userField = new Object();
                        userField['status'] = 'call_finished';
                        let callParam = new Object();
                        callParam['call'] = userField;
                        const durationField = new Object();
                        durationField['duration'] = call.duration;
                        Object.assign(callParam['call'], durationField);
                        let pbxCallIdField = new Object();
                        pbxCallIdField['call_session_id'] = this.reverseString(event.Linkedid.replace(/\D/g, '')).substring(0, 7);
                        Object.assign(callParam['call'], pbxCallIdField);
                        console.log('Отправка уведомление о завершении вызова');
                        console.log(callParam);
                        axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam,
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': this.configuration.authKey
                                }
                            })
                            .then(res => {
                                console.log('Отправлено уведомление о завершении вызова');
                            })
                            .catch((error) => {
                                console.log('Ошибка Отправлено уведомление о завершении вызова');
                             //   Exception.create({ message: 'Ошибка при отправке уведомление о завершении вызова', stack: error.stack.substring(0, 254) }).then()
                                    ;
                            })
                    }
    
                    if (call.internal === null) {
                        let userField = new Object();
                        userField['status'] = 'call_lost';
                        let callParam = new Object();
                        callParam['call'] = userField;
                        let pbxCallIdField = new Object();
                        pbxCallIdField['call_session_id'] = this.reverseString(event.Linkedid.replace(/\D/g, '')).substring(0, 7);
                        Object.assign(callParam['call'], pbxCallIdField);
                        let responsible = { id: 7 };
                        let responsiblesField = new Object();
                        responsiblesField['responsibles'] = [responsible];
                        Object.assign(callParam['call'], responsiblesField);
                        console.log('Отправка уведомление о пропущенном вызове');
                        console.log(JSON.stringify(callParam));
                        axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam,
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': this.configuration.authKey
                                }
                            })
                            .then(res => {
                                console.log('Отправлено уведомление о пропущенном вызове');
                            })
                            .catch((error) => {
                                console.log(error.stack);
                                //Exception.create({ message: 'Ошибка при отправке уведомления о пропущенном вызове', stack: error.stack.substring(0, 254) }).then()
                                    ;
                            })
                    }
                }
                break;
            }
            case this.configuration.incomingAnswerCallEvent: {
                if (this.configuration.incomingAnswerCallValue.includes(event[this.configuration.incomingAnswerCallField])
                && this.configuration.incomingAnswerCallValue2.includes(event[this.configuration.incomingAnswerCallField2])) {
                    const call = await Call.findOne({
                        where: {
                            pbx_call_id: event.Linkedid
                        }
                    });
    
                    if (call === undefined || call === null) {
                        return;
                    }
    
                    console.log("Ответ звонка");
    
                    call.internal = event.CallerIDNum;
                    call.call_answer = new Date();
                    await call.save();
                    console.log(call);
                    let userField = new Object();
                    userField['status'] = 'call_started';
                    let callParam = new Object();
                    callParam['call'] = userField;
                    let pbxCallIdField = new Object();
                    pbxCallIdField['call_session_id'] = this.reverseString(event.Linkedid.replace(/\D/g, '')).substring(0, 7);
                    Object.assign(callParam['call'], pbxCallIdField);
                    let responsible = { id: 7 };
                    let responsiblesField = new Object();
                    responsiblesField['responsibles'] = [responsible];
                    Object.assign(callParam['call'], responsiblesField);
                    console.log('Отправка разговор начат');
                    console.log(JSON.stringify(callParam));
                    axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': this.configuration.authKey
                            }
                        })
                        .then(res => {
                            console.log('Отправлено Отправка разговор начат');
                        })
                        .catch((error) => {
                            console.log(error.stack);
                           // Exception.create({ message: 'Ошибка при Отправка разговор начат', stack: error.stack.substring(0, 254) }).then()
                                ;
                        })
                }
                break;
            }
            case 'VarSet': {

                if (event.Linkedid === undefined) {
                    return;
                }

                const call = await Call.findOne({
                    where: {
                        pbx_call_id: event.Linkedid
                    }
                });
                if (call === undefined || call === null) {
                    return;
                }

                const variable = await Variable.create({
                    title: event.Variable,
                    value: event.Value,
                    pbx_call_id: event.Linkedid
                });

                if (event.Variable === '__FROM_DID') {
                    call.responsibles = event.Value;
                    await call.save();
                }

                if (event.Variable === 'MIXMONITOR_FILENAME') {
                    call.call_filename = event.Value;
                    await call.save();
    
                    let userField = new Object();
                    userField['status'] = 'call_record_file';
                    let callParam = new Object();
                    callParam['call'] = userField;
                    let pbxCallIdField = new Object();
                    pbxCallIdField['call_session_id'] = this.reverseString(event.Linkedid.replace(/\D/g, '')).substring(0, 7);
                    Object.assign(callParam['call'], pbxCallIdField);
                    let file_link = event.Value.replace('/var/spool/asterisk', `https://${this.configuration.AMI_server}/CRM`).replace('.wav', '.mp3');
                    let fileLinkField = new Object();
                    fileLinkField['file_link'] = file_link;
                    Object.assign(callParam['call'], fileLinkField);
                    console.log('Отправка ЗАПИСЬ РАЗГОВОРА');
                    console.log(JSON.stringify(callParam));
                    axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': this.configuration.authKey
                            }
                        })
                        .then(res => {
                            console.log('Отправлено ЗАПИСЬ РАЗГОВОРА');
                        })
                        .catch((error) => {
                            console.log(error.stack);
                         //   Exception.create({ message: 'Ошибка при отправке ЗАПИСЬ РАЗГОВОРА', stack: error.stack.substring(0, 254) }).then()
                                ;
                        })
    
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