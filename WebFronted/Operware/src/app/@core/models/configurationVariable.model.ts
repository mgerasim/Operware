export class ConfigurationVariable {
  id: number | undefined
  createdAt: Date;
  updatedAt: Date;
  title: string;
  requestUrl: string;
  requestBody: string;
  response: number;
  sourceFieldName: string;
  sourceFieldValue: string;
  sourceFieldName2: string;
  sourceFieldValue2: string;
  sourceField: string;
  configurationId: number;
  constructor() {
    this.id = undefined;
  }
}
