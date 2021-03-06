import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/defaultIfEmpty';

@Injectable()
export class SkillService {

  private _backendURL: any;

  constructor(private _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  /**
   * Function to return list of skills
   *
   * @returns {Observable<any[]>}
   */
  fetch(): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allSkill, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return list of skills like this description
   *
   * @returns {Observable<any[]>}
   */
  fetchLikeDescription(description: string): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allSkill, this._options(undefined, { 'description': description }))
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }


  /**
   * Function to return request options
   *
   * @returns {any}
   */
  private _options(headerList: Object = {}, paramsList: Object = {}): any {
    const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    let params = new HttpParams();
    for (const key in paramsList) {
      if (paramsList.hasOwnProperty(key)) {
        params = params.set(key, paramsList[key]);
      }
    }
    return { headers: headers, params: params };
  }

}
