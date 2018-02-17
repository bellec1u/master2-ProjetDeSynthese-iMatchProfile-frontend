import { Component, OnInit } from '@angular/core';
import {ConversationService} from '../shared/services/conversation-service/conversation.service';
import {AuthenticationService} from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  private _conversations: any;
  private _currentConversationUser: any;

  constructor(private _conversationService: ConversationService,
              private _authentication: AuthenticationService) {

  }

  ngOnInit() {
    this._conversationService
      .fetchConversation(this._authentication.getIdUser())
      .subscribe((conversations: any[]) => {
        this._conversations = conversations;
      });
  }

  get conversations(): any[] {
    return this._conversations;
  }

  getCurrentConversationUser() {
    return this._currentConversationUser;
  }

  setCurrentConversationUser(idUser) {
    this._currentConversationUser = idUser;
  }

  /**
   * return email of the current connected user
   * @returns {string}
   */
  getEmail(): string {
    return this._authentication.getEmail();
  }

  /**
   * return idUser of the current connected user
   * @returns {string}
   */
  getIdUser(): string {
    return this._authentication.getIdUser();
  }

  sendMessage(message) {
    this._conversationService
      .sendMessage(message, this._authentication.getIdUser(), this._currentConversationUser)
      .subscribe(conversation => {
        let index;
        for (let i = 0; i < this._conversations.length; i++) {
          if (this._conversations[i].id === conversation.id) {
            index = i;
          }
        }
       this._conversations[index].msg = conversation.msg;
      });
  }

}
