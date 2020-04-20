
import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Configuration } from '../models/configuration';
import { ConfigurationVariable } from '../models/configurationVariable';
import { Call } from '../models/call';
import { Event } from '../models/event';


@Controller('api/configuration')
export class ConfigurationController  {

    @Get(':id/variables')
    private getVariables(req: Request, res: Response) {

        ConfigurationVariable.findAll({
            where: {
                configurationId: req.params.id
            },
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(configurationVariables => {
            res.status(200).json(configurationVariables);
        }).catch(err => {
            Logger.Err(err.message);
        });
    }

    @Post('variables')
    private postVariables(req: Request, res: Response) {
        let configurationVariable: ConfigurationVariable = new ConfigurationVariable();
    
        console.log(req.body);

        Object.assign(configurationVariable, req.body);
        configurationVariable.save().then(result => {
            res.status(200).json({result: 'ok'});
        }, err => {
            res.status(404).send();
        });
    }
    
    @Put('variables')
    private putVariables(req: Request, res: Response) {

        ConfigurationVariable.findByPk(req.body.id).then(configurationVariable => {

            Object.assign(configurationVariable, req.body);
            configurationVariable.save().then(result => {
                res.status(200).send(configurationVariable);
            })
            .error(err => {
                console.error(err);
                res.status(500).send(err.message);
            })

        })
        .error(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
    }

    @Delete(':id')
    private async deleteConfiguration(req: Request, res: Response) {
        try {
            console.log(req.params.id);

            await Event.destroy({
                where: {
                    configurationId: req.params.id
                }
            });

            await Call.destroy({
                where: {
                    configurationId: req.params.id
                }
            });
            await ConfigurationVariable.destroy({
                where: {
                    configurationId: req.params.id
                }
            });
            await Configuration.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send({});
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }

    @Get(':id')
    private async getById(req: Request, res: Response) {
        try {
            console.log(req.params.id);
            const configuration = await Configuration.findByPk(req.params.id);
            console.log(configuration);
            if (configuration) {
                res.status(200).send(configuration);
            } else {
                res.status(404).send({});
            }
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    }

    @Get()
    private getConfigurations(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        Configuration.findAll().then(configurations => {
            res.status(200).json(configurations);
        }).catch(err => {
            Logger.Err(err.message);
        });
    }

    @Post()
    private async postConfiguration(req: Request, res: Response) {
        try {
            const configuration = new Configuration();
            Object.assign(configuration, req.body);
            console.log(req.body);
            await configuration.save();
            console.log(configuration.id);
            res.status(200).send(configuration);
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
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


