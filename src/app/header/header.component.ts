import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'iMatchProfile';

  constructor(private _router: Router,
              private _authentication: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this._router.navigate(['login']);
  }

  logout() {
    this._authentication.logout();
    this._router.navigate(['home']);
  }

  goToPostsView() {
    this._router.navigate(['/recruiterPost', this._authentication.getId()]);
  }

  goToProfileView() {
    this._router.navigate(['/profile', this._authentication.getId()]);
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
