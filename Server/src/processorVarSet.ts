import { Logger } from '@overnightjs/logger';
import { Configuration } from './models/configuration';
import { Event } from './models/event';
import { Call } from './models/call';
import { Variable } from './models/variable';
import moment = require('moment');
import { isNullOrUndefined } from 'util';
import { ConfigurationVariable } from './models/configurationVariable';
import { any } from 'bluebird';


import axios, { AxiosResponse } from 'axios';

export class ProcessorVarSet {
    constructor(public configuration: Configuration) { }

    async eventHandle(title: string, value: string, call: Call) {
        let variable;

        try {
            variable = await Variable.create({
                title: title,
                value: value,
                callId: call.id 
            });
        } catch(err) {
            console.error(`error var save ${title} ${value} ${call.id}`);
            console.error(err.message);
            return;
        }

        const configurationVariable = await ConfigurationVariable.findOne({
            where: {
                title: title,
                configurationId: this.configuration.id
            }
        });

        if (configurationVariable === undefined || configurationVariable === null) {
            return;
        }

        if (isNullOrUndefined(configurationVariable.requestUrl)) {
            return;
        }
        if (configurationVariable.requestUrl.length === 0) {
            return;
        }

        let requestBody = '';
        try {
            requestBody = JSON.parse(configurationVariable.requestBody);
        } catch {
            requestBody = configurationVariable.requestBody;
        }

        let requestUrl = configurationVariable.requestUrl;

        const variables = await Variable.findAll({
            where: {
                callId: call.id
            }
        });
        
        variables.forEach(variable => {
            requestBody = requestBody.replace(`@${variable.title}`, variable.value);
            requestUrl = requestUrl.replace(`@${variable.title}`, variable.value);
        });
        variables.forEach(variable => {
            requestBody = requestBody.replace(`@${variable.title}`, variable.value);
            requestUrl = requestUrl.replace(`@${variable.title}`, variable.value);
        });
        variables.forEach(variable => {
            requestBody = requestBody.replace(`@${variable.title}`, variable.value);
            requestUrl = requestUrl.replace(`@${variable.title}`, variable.value);
        });

        console.log(requestBody);
        console.log(requestUrl);

        try {

            const response = await axios.post<any>(requestUrl, requestBody, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'authtoken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoibWlzaGEiLCJuYW1lIjoibWlzaGEiLCJwYXNzd29yZCI6bnVsbCwiQVBJX1RJTUUiOjE1ODY5MzgxMTd9.1KZFqMqbRMPDJCCWiCF4aiwhlxpJiFdsaJAWdHyOzK4'
                    
                }
            });

            variable.response = JSON.stringify(response.data).substring(0, 100);


            await this.eventHandle(`${variable.title}_200`, variable.response, call);
    
        } catch (err) {
            console.error(`res error: ${err.message}`);
            variable.response = err.message;

            await this.eventHandle(`${variable.title}_ERROR`, variable.response, call);
        }
        await variable.save();

    }
}