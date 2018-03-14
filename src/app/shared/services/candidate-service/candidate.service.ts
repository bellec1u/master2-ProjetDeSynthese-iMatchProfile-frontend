import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CandidateService {

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
   * Function to return list of candidates
   *
   * @returns {Observable<any[]>}
   */
  fetch(): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allCandidate, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return one candidate for current id
   *
   * @param id
   *
   * @returns {Observable<any>}
   */
  fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.oneCandidate.replace(':id', id), this._options());
  }

  getMyOffer(id: string): Observable<any> {
    return this._http.get(this._backendURL.getMyOffers.replace(':id', id), this._options());
  }

  getMatchings(id: string): Observable<any> {
    return this._http.get(this._backendURL.candidateMatchings.replace(':id', id), this._options());
  }

  /**
   * Function to create a new candidate
   *
   * @returns {Observable<any>}
   * @param candidate
   */
  create(candidate: any): Observable<any> {
    return this._http.post(this._backendURL.allCandidate, candidate, this._options());
  }

  /**
   * Function to update one candidate
   *
   * @returns {Observable<any>}
   * @param candidate
   */
  update(candidate: any): Observable<any> {
    return this._http.put(this._backendURL.oneCandidate.replace(':id', candidate.id), candidate, this._options());
  }

  /**
   * Function to delete one candidate for current id
   *
   * @param id
   *
   * @returns {Observable<any[]>}
   */
  delete(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.delete(this._backendURL.oneCandidate.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }


  acceptOffer(associateId: string): Observable<any> {
    return this._http.put(this._backendURL.actionToOffers.replace(':id', associateId), this._options());
  }

  refuseOffer(associateId: string): Observable<any> {
    return this._http.delete(this._backendURL.actionToOffers.replace(':id', associateId), this._options());
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
