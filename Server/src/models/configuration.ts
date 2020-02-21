import {Table, Column, Model, HasMany} from 'sequelize-typescript';
 
@Table
export class Configuration extends Model<Configuration> {
 
  @Column
  AMI_username: string;
 
  @Column
  AMI_server: string;

  @Column
  AMI_password: string;

  @Column
  AMI_port: number;
}