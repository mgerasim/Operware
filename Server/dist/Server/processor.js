"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const call_1 = require("./models/call");
const variable_1 = require("./models/variable");
const axios = require('axios');
class Processor {
    constructor(configuration) {
        this.configuration = configuration;
    }
    eventHandle(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            switch (event.Event) {
                // AMI событие привязки входящего звонка
                case this.configuration.incomingStartCallEvent: {
                    if (this.configuration.incomingStartCallValue.includes(event[this.configuration.incomingStartCallField])
                        && this.configuration.incomingStartCallValue2.includes(event[this.configuration.incomingStartCallField2])) {
                        const call = yield call_1.Call.findOne({ where: { pbx_call_id: event.Linkedid } });
                        if (call) {
                            return;
                        }
                        yield call_1.Call.create({
                            call_start: new Date(),
                            pbx_call_id: event.Linkedid,
                            caller_id: event.CallerIDNum
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
                        Object.assign(callParam['call'], incomingField);
                        console.log('Отправление уведомление о входящем звонке ... ');
                        console.log(callParam);
                        const body = callParam;
                        axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, body, {
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
                        });
                    }
                    break;
                }
                case this.configuration.incomingEndCallEvent: {
                    if (this.configuration.incomingEndCallValue.includes(event[this.configuration.incomingEndCallField])
                        && this.configuration.incomingEndCallValue2.includes(event[this.configuration.incomingEndCallField2])) {
                        const call = yield call_1.Call.findOne({
                            where: {
                                pbx_call_id: event.Linkedid
                            }
                        });
                        if (call === undefined || call === null) {
                            return;
                        }
                        console.log("Завершение звонка");
                        call.call_end = new Date();
                        yield call.save();
                        if (call.internal !== null) {
                            let userField = new Object();
                            userField['status'] = 'call_finished';
                            let callParam = new Object();
                            callParam['call'] = userField;
                            let pbxCallIdField = new Object();
                            pbxCallIdField['call_session_id'] = this.reverseString(event.Linkedid.replace(/\D/g, '')).substring(0, 7);
                            Object.assign(callParam['call'], pbxCallIdField);
                            console.log('Отправка уведомление о завершении вызова');
                            console.log(callParam);
                            axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam, {
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
                            });
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
                            axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam, {
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
                            });
                        }
                    }
                    break;
                }
                case this.configuration.incomingAnswerCallEvent: {
                    if (this.configuration.incomingAnswerCallValue.includes(event[this.configuration.incomingAnswerCallField])
                        && this.configuration.incomingAnswerCallValue2.includes(event[this.configuration.incomingAnswerCallField2])) {
                        const call = yield call_1.Call.findOne({
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
                        yield call.save();
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
                        axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam, {
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
                        });
                    }
                    break;
                }
                case 'VarSet': {
                    console.log(`${event.Variable} = ${event.Value}`);
                    if (event.Linkedid === undefined) {
                        return;
                    }
                    const call = yield call_1.Call.findOne({
                        where: {
                            pbx_call_id: event.Linkedid
                        }
                    });
                    if (call === undefined || call === null) {
                        return;
                    }
                    const variable = yield variable_1.Variable.create({
                        title: event.Variable,
                        value: event.Value,
                        pbx_call_id: event.Linkedid
                    });
                    if (event.Variable == 'MIXMONITOR_FILENAME') {
                        console.log(`${event.Variable} = ${event.Value}`);
                        call.call_filename = event.Value;
                        yield call.save();
                        let userField = new Object();
                        userField['status'] = 'call_record_file';
                        let callParam = new Object();
                        callParam['call'] = userField;
                        let pbxCallIdField = new Object();
                        pbxCallIdField['call_session_id'] = this.reverseString(event.Linkedid.replace(/\D/g, '')).substring(0, 7);
                        Object.assign(callParam['call'], pbxCallIdField);
                        let file_link = event.Value;
                        let fileLinkField = new Object();
                        fileLinkField['file_link'] = file_link;
                        Object.assign(callParam['call'], fileLinkField);
                        console.log('Отправка ЗАПИСЬ РАЗГОВОРА');
                        console.log(JSON.stringify(callParam));
                        axios.post(`${this.configuration.baseUrl}/api/v2/telephony/common`, callParam, {
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
                        });
                    }
                    break;
                }
            }
        });
    }
    reverseString(str) {
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
exports.Processor = Processor;
//# sourceMappingURL=processor.js.map