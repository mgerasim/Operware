import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Call} from '../models/call.model';
import {Callback} from '../models/callback.model';
import {Configuration} from '../models/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class CallbackService {

  public defaultHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  public get(observe?: 'body', reportProgress?: boolean): Observable<Callback[]>;
  public get(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Callback[]>>;
  public get(observe?: 'callbacks', reportProgress?: boolean): Observable<HttpEvent<Callback[]>>;
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

    return this.httpClient.get<Callback[]>(`/api/callbacks`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public save(callback: Callback): Observable<Callback> {
    const headers = this.defaultHeaders;
    return this.httpClient.get<Callback>(`/callback`);
  }
}
