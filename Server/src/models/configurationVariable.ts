import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Configuration } from './configuration';
 
@Table
export class ConfigurationVariable extends Model<ConfigurationVariable> {
 
  @Column
  title: string;
 
  @Column
  requestUrl: string;

  @Column
  requestBody: string;

  @Column
  response: number;

  @Column
  sourceFieldName: string;

  @Column
  sourceFieldValue: string;

  @Column
  sourceFieldName2: string;

  @Column
  sourceFieldValue2: string;

  @Column
  sourceField: string;

  @ForeignKey(() => Configuration)
  @Column
  configurationId: number;

  @BelongsTo(() => Configuration)
  configuration: Configuration;
  
}