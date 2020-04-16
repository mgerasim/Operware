export class Call {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  call_start: Date;
  call_answer: Date;
  call_end: Date;
  pbx_call_id: string;
  caller_id: string;
  duration: number;
  internal: string;
  call_filename: string;
  responsibles: string;
  called_phone_number: string;
}
