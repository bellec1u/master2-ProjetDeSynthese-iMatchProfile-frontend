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

  public getEmail(): string {
    return localStorage.getItem('email');
  }

  public getRole(): string {
    return localStorage.getItem('role');
  }

  public getId(): string {
    return localStorage.getItem('id');
  }

  public isConnected(): boolean {
    return localStorage.getItem('email') !== null;
  }

  public isRecruiter(): boolean {
    return localStorage.getItem('role') === 'RECRUITER';
  }

  public isCandidate(): boolean {
    return localStorage.getItem('role') === 'CANDIDATE';
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
