
import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Configuration } from '../models/configuration';


@Controller('api/configuration')
export class ConfigurationController  {
    @Get()
    private getConfigurations(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        Configuration.findAll().then(configurations => {
            res.status(200).json(configurations);
        }).catch(err => {
            Logger.Err(err.message);
        });
    }

    @Put()
    private putConfiguration(req: Request, res: Response) {
        Logger.Info(req.params);
        const id = req.body.id;
        Configuration.findByPk(id).then(configuration => {
            Object.assign(configuration, req.body);
            return configuration.save();
        })
        .then(result => {
            Logger.Info("Конфигурация обновлена");
            res.status(200).send();
        })
        .catch(err => {
            Logger.Err(err);
        });

        /*
        console.log(req.body);
    const configurationId = req.body.id;
    Configuration.findByPk(configurationId)
        .then(configuration => {
            Object.assign(configuration, req.body);
            return configuration.save();
        })
        .then(result => {
            console.log("Конфигурация обновлена");
            res.status(200).send();
        })
        .catch(err => console.error(err));
        */
    }
}


