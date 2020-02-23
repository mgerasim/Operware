
import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Configuration } from '../models/configuration';
import { Call } from '../models/call';


@Controller('api/calls')
export class CallController  {
    @Get()
    private getCalls(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        Call.findAll().then(calls => {
            res.status(200).json(calls);
        }).catch(err => {
            Logger.Err(err.message);
        });
    }
}


