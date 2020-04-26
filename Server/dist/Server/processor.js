"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logger_1 = require("@overnightjs/logger");
const event_1 = require("./models/event");
const call_1 = require("./models/call");
const util_1 = require("util");
const processorVarSet_1 = require("./processorVarSet");
const configurationVariable_1 = require("./models/configurationVariable");
const axios = require('axios');
class Processor {
    constructor(configuration) {
        this.configuration = configuration;
        this.processorVarSet = new processorVarSet_1.ProcessorVarSet(configuration);
    }
    eventHandle(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield event_1.Event.create(event);
                if (event.Event !== 'VarSet') {
                    //                console.log(event);
                }
            }
            catch (err) {
                console.error('error save event');
                logger_1.Logger.Err(err);
            }
            if (event[this.configuration.uniqueFieldName] === undefined) {
                // console.log(event);
                return;
            }
            if (util_1.isNullOrUndefined(this.configuration)) {
                throw new Error('Не обнаружена конфигурация!');
            }
            let call = yield call_1.Call.findOne({
                where: { pbx_call_id: event[this.configuration.uniqueFieldName],
                    configurationId: this.configuration.id }
            });
            if (util_1.isNullOrUndefined(call)) {
                try {
                    /*
                    await Call.create({
                        call_start: new Date(),
                        pbx_call_id: event[this.configuration.uniqueFieldName]
                    });
                    console.log(`save pbx call id ${event[this.configuration.uniqueFieldName]}`);
                    */
                }
                catch (err) {
                    console.error(`error save pbx call id ${event[this.configuration.uniqueFieldName]}`);
                    console.error(err.message);
                }
            }
            if (event.Event === 'Newstate'
                && event.ChannelStateDesc === 'Ringing'
                && event.Priority === '1'
                && event.Channel.includes('SIP/')) {
                const call = yield call_1.Call.findOne({
                    where: {
                        pbx_call_id: event[this.configuration.uniqueFieldName]
                    }
                });
                if (call === undefined || call === null) {
                    return;
                }
                call.responsibles = util_1.isNullOrUndefined(call.responsibles) ? event.CallerIDNum : `${call.responsibles}|${event.CallerIDNum}`;
                yield call.save();
            }
            if (event.Event === this.configuration.incomingStartCallEvent) {
                // AMI событие привязки входящего звонка
                if (this.configuration.incomingStartCallValue.includes(event[this.configuration.incomingStartCallField])
                    && this.configuration.incomingStartCallValue2.includes(event[this.configuration.incomingStartCallField2])) {
                    console.log('AMI событие привязки входящего звонка');
                    if (call) {
                        return;
                    }
                    let called_phone_number = util_1.isNullOrUndefined(event.Exten) ? event.CallerIDNum : event.Exten;
                    if (called_phone_number.length === 6) {
                        called_phone_number = '74212' + called_phone_number;
                    }
                    if (called_phone_number.length === 7) {
                        called_phone_number = '7423' + called_phone_number;
                    }
                    else if (called_phone_number.length === 10) {
                        called_phone_number = '7' + called_phone_number;
                    }
                    let caller_id = event.CallerIDNum;
                    if (caller_id.length === 6) {
                        caller_id = '74212' + caller_id;
                    }
                    if (caller_id.length === 7) {
                        caller_id = '7423' + caller_id;
                    }
                    else if (caller_id.length === 10) {
                        caller_id = '7' + caller_id;
                    }
                    const _callAdded = yield call_1.Call.create({
                        call_start: new Date(),
                        pbx_call_id: event[this.configuration.uniqueFieldName],
                        caller_id: caller_id,
                        called_phone_number: called_phone_number,
                        configurationId: this.configuration.id
                    });
                    yield this.processorVarSet.eventHandle('CALLER_ID', caller_id, _callAdded);
                    yield this.processorVarSet.eventHandle('PBX_CALL_ID', _callAdded.pbx_call_id, _callAdded);
                    yield this.processorVarSet.eventHandle('CALL_ID', _callAdded.id, _callAdded);
                    yield this.processorVarSet.eventHandle('CALL_START', _callAdded.call_start.toISOString(), _callAdded);
                }
            }
            call = yield call_1.Call.findOne({
                where: { pbx_call_id: event[this.configuration.uniqueFieldName],
                    configurationId: this.configuration.id }
            });
            if (!call) {
                return;
            }
            const configurationVariables = yield configurationVariable_1.ConfigurationVariable.findAll();
            configurationVariables.forEach((configurationVariable) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (util_1.isNullOrUndefined(configurationVariable.sourceFieldValue) || util_1.isNullOrUndefined(configurationVariable.sourceFieldValue2)) {
                    return;
                }
                if (configurationVariable.sourceFieldValue.includes(event[configurationVariable.sourceFieldName])
                    && configurationVariable.sourceFieldValue2.includes(event[configurationVariable.sourceFieldName2])) {
                    try {
                        yield this.processorVarSet.eventHandle(configurationVariable.title, event[configurationVariable.sourceField], call);
                    }
                    catch (err) {
                        console.error(`error processorVarSet eventHandle ${configurationVariable.title}`);
                        console.error(err.message);
                    }
                }
            }));
            if (event.Event === this.configuration.incomingAnswerCallEvent) {
                if (this.configuration.incomingAnswerCallValue.includes(event[this.configuration.incomingAnswerCallField])
                    && this.configuration.incomingAnswerCallValue2.includes(event[this.configuration.incomingAnswerCallField2])) {
                    if (!util_1.isNullOrUndefined(call.internal)) {
                        return;
                    }
                    call.internal = event['ConnectedLineNum'];
                    call.call_answer = new Date();
                    yield call.save();
                    yield this.processorVarSet.eventHandle('CALL_INTERNAL', call.internal, call);
                    console.log("Ответ звонка");
                }
            }
            if (event.Event === this.configuration.incomingEndCallEvent) {
                if (this.configuration.incomingEndCallValue.includes(event[this.configuration.incomingEndCallField])
                    && this.configuration.incomingEndCallValue2.includes(event[this.configuration.incomingEndCallField2])) {
                    if (call.call_end !== null) {
                        return;
                    }
                    console.log("Завершение звонка");
                    call.call_end = new Date();
                    yield call.save();
                    yield this.processorVarSet.eventHandle('CALL_END', '', call);
                    if (call.internal !== null) {
                        if (!(call.duration > 0)) {
                            call.duration = Math.round((call.call_end.getTime() - call.call_answer.getTime()) / 1000);
                            yield call.save();
                        }
                        yield this.processorVarSet.eventHandle('CALL_DURATION', call.duration.toString(), call);
                        yield this.processorVarSet.eventHandle('CALL_FINISHED', '', call);
                    }
                    if (call.internal === null) {
                        yield this.processorVarSet.eventHandle('CALL_LOST', '', call);
                    }
                }
            }
            switch (event.Event) {
                case 'VarSet': {
                    if (call === undefined || call === null) {
                        return;
                    }
                    yield this.processorVarSet.eventHandle(event.Variable, event.Value, call);
                    if (event.Variable === 'MIXMONITOR_FILENAME') {
                        const file_link = event.Value.replace('/var/spool/asterisk', `https://${this.configuration.AMI_server}/CRM`).replace('.wav', '.mp3');
                        call.call_filename = file_link;
                        yield call.save();
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