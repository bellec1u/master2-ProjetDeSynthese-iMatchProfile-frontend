import { Component } from '@angular/core';
import {TokenStorage} from './shared/authentication/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private _tokenStorage: TokenStorage) {}

}
