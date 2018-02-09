import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';
import {TokenStorage} from '../shared/authentication/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'iMatchProfile';

  constructor(private _router: Router,
              private _authentication: AuthenticationService,
              private _tokenStorage: TokenStorage) { }

  ngOnInit() {
  }

  login() {
    this._router.navigate(['login']);
  }

  logout() {
    this._authentication.logout();
    this._router.navigate(['home']);
  }

  isConnected(): boolean {
    return this._tokenStorage.isConnected();
  }

  isRecruiter(): boolean {
    return this._tokenStorage.isRecruiter();
  }

  isCandidate(): boolean {
    return this._tokenStorage.isCandidate();
  }

}
