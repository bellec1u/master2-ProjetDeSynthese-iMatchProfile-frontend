import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
   * Function to return list of miniature posts
   *
   * @returns {Observable<any[]>}
   */
  fetch(): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.allPostMin, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * Function to return list of posts of a recruiter
   * @returns {Observable<any[] | ArrayBuffer>}
   */
  fetchPostRecruiter(id: string): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.listPostRecruiter.replace(':id', id), this._options())
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
   * Function to create a new post
   *
   *
   * @returns {Observable<any>}
   * @param post
   */
  create(post): Observable<any> {
    return this._http.post(this._backendURL.allPost, post, this._options());
  }

  /**
   * Function to update one post
   *
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
   * Function to return request options
   *
   * @returns {any}
   */
  private _options(headerList: Object = {}): any {
    const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return { headers };
  }

}
