import { Injectable } from '@angular/core';
import {ConfigurationVariable} from '../models/configurationVariable.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationVariableService {

  public defaultHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  public get(observe?: 'body', reportProgress?: boolean): Observable<ConfigurationVariable[]>;
  public get(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConfigurationVariable[]>>;
  public get(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConfigurationVariable[]>>;
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

    return this.httpClient.get<ConfigurationVariable[]>(`/api/configuration/variables`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public add(configurationVariable: ConfigurationVariable): Observable<ConfigurationVariable> {

    const headers = this.defaultHeaders;

    return this.httpClient.post<ConfigurationVariable>(`/api/configuration/variables`, configurationVariable,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }

  public update(configurationVariable: ConfigurationVariable): Observable<ConfigurationVariable> {

    const headers = this.defaultHeaders;

    return this.httpClient.put<ConfigurationVariable>(`/api/configuration/variables`, configurationVariable,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }
}
