import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';

interface JWTToken {
  sub: string;
  id: string;
  role: string;
}

@Injectable()
export class TokenStorage {

  public static getEmail(): string {
    return localStorage.getItem('email');
  }

  public static getRole(): string {
    return localStorage.getItem('role');
  }

  public static getId(): string {
    return localStorage.getItem('id');
  }

  /**
   * Get access token
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('accessToken');
    return Observable.of(token);
  }

  /**
   * Set access token
   * @returns {TokenStorage}
   */
  public setAccessToken(token: string): TokenStorage {
    localStorage.setItem('accessToken', token);

    const tokenPayload: JWTToken = jwt_decode(token);
    localStorage.setItem('email', tokenPayload.sub);
    localStorage.setItem('id', tokenPayload.id);
    localStorage.setItem('role', tokenPayload.role);

    return this;
  }

  /**
   * Remove tokens
   */
  public clear() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
  }
}
