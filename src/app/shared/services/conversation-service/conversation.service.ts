import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/defaultIfEmpty';

@Injectable()
export class ConversationService {

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
   * function to get all conversations for an user
   * @param id
   * @returns {Observable<any>}
   */
  fetchConversation(id: any): Observable<any[] | ArrayBuffer> {
    return this._http.get(this._backendURL.conversationForUser.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  /**
   * function to add a message for a conversation
   *
   * @param message
   * @param id1
   * @param id2
   * @returns {Observable<any>}
   */
  sendMessage(message: any, id1: any, id2: any): Observable<any> {
    return this._http.post(
      this._backendURL.conversationBetweenUser.replace(':id1', id1).replace(':id2', id2),
      message,
      this._options()
    );
  }

  /**
   * function to send a message to the owner of the post
   *
   * @param message
   * @param idUser
   * @param idPost
   * @returns {Observable<any>}
   */
  sendMessageForPostOwner(message: any, idUser: any, idPost: any): Observable<any> {
    return this._http.post(
      this._backendURL.conversationForPostOwner.replace(':idUser', idUser).replace(':idPost', idPost),
      message,
      this._options()
    );
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
