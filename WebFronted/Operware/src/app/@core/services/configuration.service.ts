import { Injectable } from '@angular/core';
import {Configuration} from '../models/configuration.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public defaultHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  public delete(id: number): Observable<any> {

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

    return this.httpClient.delete(`/api/configuration/${id}`,
      {
        headers: headers
      }
    );
  }

  public getById(id: number, observe?: 'body', reportProgress?: boolean): Observable<Configuration>;
  public getById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Configuration>>;
  public getById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Configuration>>;
  public getById(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<Configuration>(`/api/configuration/${id}`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public get(observe?: 'body', reportProgress?: boolean): Observable<Configuration[]>;
  public get(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Configuration[]>>;
  public get(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Configuration[]>>;
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

    return this.httpClient.get<Configuration[]>(`/api/configuration`,
      {
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  public add(configuration: Configuration): Observable<Configuration> {

    const headers = this.defaultHeaders;

    return this.httpClient.post<Configuration>(`/api/configuration`, configuration,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }

  public save(configuration: Configuration): Observable<Configuration> {

    const headers = this.defaultHeaders;

    return this.httpClient.put<Configuration>(`/api/configuration`, configuration,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }
}
