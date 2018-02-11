import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post-service/post.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _posts: any[];

  constructor(private _postService: PostService,
              private _router: Router,
              private _authentication: AuthenticationService) { }

  get posts(): any[] {
    return this._posts;
  }

  ngOnInit() {
    this._postService
      .fetch()
      .subscribe((posts: any[]) => this._posts = posts);
  }

  navigate(post) {
    this._router.navigate(['/post', post.id]);
  }

  isConnected(): boolean {
    return this._authentication.isConnected();
  }

}
