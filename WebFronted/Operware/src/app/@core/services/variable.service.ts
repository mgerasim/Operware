import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Call} from '../models/call.model';
import {Variable} from '../models/variable.model';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  public defaultHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  public get(pbxCallId: string, observe?: 'body', reportProgress?: boolean): Observable<Variable[]>;
  public get(pbxCallId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Variable[]>>;
  public get(pbxCallId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Variable[]>>;
  public get(pbxCallId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    const headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = [
      'application/json',
      'text/json',
      'application/xml',
      'text/xml'
    ];

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Variable[]>(`/api/calls/${pbxCallId}/variables`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
