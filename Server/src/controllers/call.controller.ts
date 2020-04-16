
import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Configuration } from '../models/configuration';
import { Call } from '../models/call';
import { Variable } from '../models/variable';
import { Event } from '../models/event';


@Controller('api/calls')
export class CallController  {
    @Get()
    private getCalls(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        Call.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(calls => {
            res.status(200).json(calls);
        }).catch(err => {
            Logger.Err(err.message);
        });
    }
    @Get(':id/variables')
    private getVariablesByCall(req: Request, res: Response) {
        Logger.Info(req.params.id);
        Variable.findAll({
            where: {
                callId: req.params.id
            }
        }).then(variables => {
            res.status(200).json(variables);
        }).catch(err => {
            res.status(500).json(err);
        });
    }
    @Get(':pbxCallId/events')
    private getEventsByCall(req: Request, res: Response) {
        Logger.Info(req.params.pbxCallId);
        Event.findAll({
            where: {
                Linkedid: req.params.pbxCallId
            }
        }).then(events => {
            res.status(200).json(events);
        }).catch(err => {
            res.status(500).json(err);
        });
    }

    @Delete(':configurationId')
    private async deleteCallAll(req: Request, res: Response) {
       try {
        console.log(req.params.configurationId);

        const configurationId = req.params.configurationId;

        await Event.destroy({
            where: {
            },
            truncate: false
          });

          const calls = await Call.findAll({
              where: {
                  configurationId
              }
          });

          calls.forEach(async (call) => {

            await Variable.destroy({
                where: {
                    callId: call.id
                },
                truncate: false
            });
            await Call.destroy({
                where: {
                    id: call.id
                },
                truncate: false
            });
          });


          res.status(200).send({});
       } catch (err) {
           console.error(err);
           res.status(500).send(err.message);
       }
    }
}


