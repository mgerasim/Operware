import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Call} from '../models/call.model';
import {Event} from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public defaultHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  public get(pbxCallId: string, observe?: 'body', reportProgress?: boolean): Observable<Event[]>;
  public get(pbxCallId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Event[]>>;
  public get(pbxCallId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Event[]>>;
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

    return this.httpClient.get<Event[]>(`/api/calls/${pbxCallId}/events`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}
