import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class NotificationService {

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

  fetchUserNotification(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allNotificationForUser.replace(':id', id), this._options());
  }

  fetchCountNoReadNotification(id: string): Observable<any> {
    return this._http.get(this._backendURL.countNoReadNotification.replace(':id', id), this._options());
  }

  /**
   * Function to update one notification
   *
   * @returns {Observable<any>}
   * @param notification
   */
  updateNotification(notification: any): Observable<any> {
    return this._http.put(this._backendURL.oneNotification.replace(':id', notification.id) , notification, this._options());
  }
  /**
   * Function to return request options
   *
   * @returns {any}
   */
  private _options(headerList: Object = {}): any {
    const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return { headers };
  }
  }
