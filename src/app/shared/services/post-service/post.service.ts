import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/defaultIfEmpty';

@Injectable()
export class PostService {

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
   * Function to return list of posts
   *
   * @returns {Observable<any[]>}
   */
  fetch(): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allPost, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return list of posts of limited size
   *
   * @returns {Observable<any[]>}
   */
  fetchLimit(limit: string): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allPost.concat('?limit=').concat(limit), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return list of posts of a recruiter
   *
   * @returns {Observable<any[] | ArrayBuffer>}
   */
  fetchPostRecruiter(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.oneRecruiter.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return one post for current id
   *
   * @param id
   *
   * @returns {Observable<any>}
   */
  fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.onePost.replace(':id', id), this._options());
  }

  /**
   *
   * @param {string} id
   * @param {string} idPost
   * @returns {Observable<any>}
   */
  isMyPost(idPost: string): Observable<any> {
    return this._http.get(this._backendURL.isMyPost.replace(':idPost', idPost), this._options());
  }

  /**
   * Function to create a new post
   *
   * @returns {Observable<any>}
   * @param post
   */
  create(post, id: string): Observable<any> {
    return this._http.post(this._backendURL.allPostForRecruiter.replace(':id', id), post, this._options());
  }

  /**
   * Function to update one post
   *
   * @returns {Observable<any>}
   * @param post
   */
  update(post: any): Observable<any> {
    return this._http.put(this._backendURL.onePost.replace(':id', post.id), post, this._options());
  }

  /**
   * Function to delete one post for current id
   *
   * @param id
   *
   * @returns {Observable<any[]>}
   */
  delete(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.delete(this._backendURL.onePost.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   *
   * @param {string} id
   * @returns {Observable<any[] | ArrayBuffer>}
   */
  getMatchingUserByMandatorySkills(id: string):  Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.msMatchingCandidate.replace(':id', id), this._options())
    .filter(_ => !!_)
    .defaultIfEmpty([]);
  }

  getApplyUserByPost(id: string):  Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.getApplyUserByPost.replace(':idPost', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   *
   * @param {string} id
   * @returns {Observable<any[] | ArrayBuffer>}
   */
  getAssociatedCandidateByPostId(id: string):  Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.associatedCandidate.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  applyToPost(postId: string, userId: string): Observable<any> {
    return this._http.post(this._backendURL.applyPost.replace(':id', postId), userId, this._options());
  }

  /**
   *
   * @param {string} postId
   * @param userId
   * @returns {Observable<any>}
   */
  associateOneCandidateToPost(postId: string, userId: string): Observable<any> {
    return this._http.post(this._backendURL.associateOneCandidate.replace(':id', postId), userId, this._options());
  }

  fetchMatchingPercent(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.matchingCandidatePost.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return request options
   *
   * @returns {any}
   */
  private _options(headerList: Object = {}): any {
    const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return { headers: headers };
  }

}
