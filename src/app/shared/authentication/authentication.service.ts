import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AuthService } from 'ngx-auth';
import { TokenStorage } from './token-storage.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {environment} from '../../../environments/environment';
import {Response} from '@angular/http';

interface AccessData {
  accessToken: string;
}

@Injectable()
export class AuthenticationService implements AuthService {

  private _backendURL: any;

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) {
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
   * Check, if user already authorized.
   * @description Should return Observable with true or false values
   * @returns {Observable<boolean>}
   * @memberOf AuthService
   */
  public isAuthorized(): Observable < boolean > {
    return this.tokenStorage
      .getAccessToken()
      .map(token => !!token);
  }

  /**
   * Get access token
   * @description Should return access token in Observable from e.g.
   * localStorage
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable < string > {
    return this.tokenStorage.getAccessToken();
  }

  /**
   * Function, that should perform refresh token verifyTokenRequest
   * @description Should be successfully completed so interceptor
   * can execute pending requests or retry original one
   * @returns {Observable<any>}
   */
  public refreshToken(): Observable < AccessData > {
    this.logout();

    return Observable.throw('refresh');
  }

  /**
   * Function, checks response of failed request to determine,
   * whether token be refreshed or not.
   * @description Essentialy checks status
   * @param {Response} response
   * @returns {boolean}
   */
  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

  /**
   * Verify that outgoing request is refresh-token,
   * so interceptor won't intercept this request
   * @param {string} url
   * @returns {boolean}
   */
  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }

  /**
   * EXTRA AUTH METHODS
   */

  public login(email: string, password: string): Observable<any> {
    const data = {
      'email': email,
      'password': password
    };
    return this.http
      .post(this._backendURL.login, data, this._options())
      .map(val => JSON.parse(JSON.stringify(val)) as AccessData)
      .do((tokens: AccessData) => {
        console.log(tokens);
        this.saveAccessData(tokens as AccessData);
      });
  }

  /**
   * Logout
   */
  public logout(): void {
    this.tokenStorage.clear();
    // location.reload(true);
  }

  /**
   * Save access data in the storage
   *
   * @private
   * @param {AccessData} data
   */
  private saveAccessData({ accessToken }: AccessData) {
    this.tokenStorage
      .setAccessToken(accessToken);
  }

  private _options(): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return { headers: headers };
  }

  public getEmail(): string {
    return this.tokenStorage.getEmail();
  }

  public getRole(): string {
    return this.tokenStorage.getRole();
  }

  public getId(): string {
    return this.tokenStorage.getId();
  }

  public getIdUser(): string {
    return this.tokenStorage.getIdUser();
  }

  public isConnected(): boolean {
    return this.tokenStorage.isConnected();
  }

  public isRecruiter(): boolean {
    return this.tokenStorage.isRecruiter();
  }

  public isCandidate(): boolean {
    return this.tokenStorage.isCandidate();
  }

}
