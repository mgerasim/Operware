import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Call} from '../models/call.model';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public defaultHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  public get(hash: string, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
  public get(hash: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
  public get(hash: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
  public get(hash: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<boolean>(`/api/auth/${hash}`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
