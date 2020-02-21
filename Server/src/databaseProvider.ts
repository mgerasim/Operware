import { Injectable } from '@nestjs/common';
import { Sequelize, Model } from 'sequelize-typescript';

@Injectable()
export class databaseProviders {
useFactory = async () => {
const sequelize = new Sequelize({
    database: 'Operware_development',
    dialect: 'mysql',
    username: 'root',
    password: 'nFsBcwTm7iQgE4X10s85',
    host: '127.0.0.1',
});
await sequelize.sync();
return sequelize;
}
}