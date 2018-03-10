import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../shared/services/notification-service/notification.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import {AuthenticationService} from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private _listNotification: any[];
  private _notificationToUpdate: any;
  private _newNotification: any;

  constructor(private _notificationService: NotificationService, private _route: ActivatedRoute, private _router: Router, private _authentication: AuthenticationService) {
    this._listNotification = [];
  }

  ngOnInit() {
    if ( this._authentication.getId() !== this._route.params['id']) {
      this._router.navigate(['/notifications', this._authentication.getId()]);
    }

    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._notificationService.fetchUserNotification(params['id']))
      .subscribe((listNotification: Notification[]) => {
        this._listNotification = listNotification;
      });
  }

  get listNotification(){
    return this._listNotification;
  }

  clickUpdateNotification(notification: any){
    this._notificationToUpdate = notification;
    this._notificationToUpdate.state = false;
    this.update(this._notificationToUpdate);
  }

   /**
   * Function to update Notification.
   */
  update(notification: any) {
    this._notificationService.updateNotification(notification)
      .subscribe((notif: any) =>
        this._notificationToUpdate = notif);
}

}
