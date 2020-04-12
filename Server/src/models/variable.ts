import { Table, Model, Column, Index, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Call } from './call';
import { Configuration } from './configuration';

@Table
export class Variable extends Model<Variable> {
  @Column
  title: string;
  
  @Column
  value: string;

  @Column
  response: string;

  @ForeignKey(() => Configuration)
  @Column
  configurationId: number;

  @BelongsTo(() => Configuration)
  configuration: Configuration;
}