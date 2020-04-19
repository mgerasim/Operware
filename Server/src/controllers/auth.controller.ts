
import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Configuration } from '../models/configuration';
import { Call } from '../models/call';
import { Variable } from '../models/variable';
import { Event } from '../models/event';


@Controller('api/auth')
export class AuthController  {
    
    @Get(':hash')
    private auth(req: Request, res: Response) {
        Logger.Info(req.params.hash);

        res.status(200).send(req.params.hash === '2ed7f0dc98c49cf7344caf2c27fd1598');
    }
}


