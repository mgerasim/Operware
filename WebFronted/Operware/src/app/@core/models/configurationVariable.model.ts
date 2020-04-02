export class ConfigurationVariable {
  id: number | undefined
  createdAt: Date;
  updatedAt: Date;
  title: string;
  requestUrl: string;
  requestBody: string;
  response: number;
  constructor() {
    this.id = undefined;
  }
}
