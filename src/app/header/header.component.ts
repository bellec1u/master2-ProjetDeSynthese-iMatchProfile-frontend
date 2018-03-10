import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';
import { NotificationService } from '../shared/services/notification-service/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'iMatchProfile';
    private _notif;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _authentication: AuthenticationService,
              private _notification: NotificationService) { 
                this._notif = {};
              }

  ngOnInit() {
    this._route.params
      .flatMap(params => this._notification.fetchCountNoReadNotification(this._authentication.getIdUser()))
      .subscribe((notif: any) => {
          this._notif = notif;
        }
      );
  }

  login() {
    this._router.navigate(['login']);
  }

  logout() {
    this._authentication.logout();
    this._router.navigate(['home']);
  }

  get notif(){
    return this._notif;
  }

  goToPostsView() {
    this._router.navigate(['/recruiterPost', this._authentication.getId()]);
  }

  goToProfileView() {
    this._router.navigate(['/profile', this._authentication.getId()]);
  }

  goToConversationsView() {
    this._router.navigate(['/conversations', this._authentication.getId()]);
  }

  goToOfferView() {
    this._router.navigate(['/offer', this._authentication.getId()]);
  }

  goToNotificationView(){
    this._router.navigate(['/notifications', this._authentication.getIdUser()])
  }

  isConnected(): boolean {
    return this._authentication.isConnected();
  }

  isRecruiter(): boolean {
    return this._authentication.isRecruiter();
  }

  isCandidate(): boolean {
    return this._authentication.isCandidate();
  }

}
