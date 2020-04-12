export class Configuration {
  id: number;

  createdAt: Date;
  updatedAt: Date;
  AMI_username: string;
  AMI_password: string;
  AMI_server: string;
  AMI_port: number;
  authKey: string;
  baseUrl: string;
  defaultResponsibles: string;

  state: string;

  incomingStartCallEvent: string;
  incomingStartCallField: string;
  incomingEndCallEvent: string;
  incomingEndCallField: string;
  incomingAnswerCallEvent: string;
  incomingAnswerCallField: string;
  incomingStartCallValue: string;
  incomingEndCallValue: string;
  incomingAnswerCallValue: string;
  incomingStartCallEvent2: string;
  incomingStartCallField2: string;
  incomingEndCallEvent2: string;
  incomingEndCallField2: string;
  incomingAnswerCallEvent2: string;
  incomingAnswerCallField2: string;
  incomingStartCallValue2: string;
  incomingEndCallValue2: string;
  incomingAnswerCallValue2: string;

  callbackTimeout: string;
  callbackContext: string;

  uniqueFieldName: string;
  titleOrganization: string;
}
