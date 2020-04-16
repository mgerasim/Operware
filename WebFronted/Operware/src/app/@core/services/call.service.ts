import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Call} from '../models/call.model';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  public defaultHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  public get(observe?: 'body', reportProgress?: boolean): Observable<Call[]>;
  public get(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Call[]>>;
  public get(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Call[]>>;
  public get(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<Call[]>(`/api/calls`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public deleteAll(configurationId: number) {

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

    return this.httpClient.delete(`/api/calls/${configurationId}`,
      {
        headers: headers
      }
    );

  }
}
