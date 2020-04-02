import { Logger } from '@overnightjs/logger';
import { Configuration } from './models/configuration';
import { Event } from './models/event';
import { Call } from './models/call';
import { Variable } from './models/variable';
import moment = require('moment');
import { isNullOrUndefined } from 'util';
import { ConfigurationVariable } from './models/configurationVariable';

const axios = require('axios')

export class ProcessorVarSet {
    constructor(public configuration: Configuration) { }

    async eventHandle(title: string, value: string, pbxCallId: string) {
        const variable = await Variable.create({
            title: title,
            value: value,
            pbx_call_id: pbxCallId
        });

        const configurationVariable = await ConfigurationVariable.findOne({
            where: {
                title: title
            }
        });
        if (configurationVariable === undefined || configurationVariable === null) {
            return;
        }
        const requestBody = JSON.parse(configurationVariable.requestBody);
        const response = axios.post(configurationVariable.requestUrl, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        variable.response = response;

        await variable.save();
    }
}