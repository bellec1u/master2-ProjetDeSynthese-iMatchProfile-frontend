import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post-services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _posts: any[];

  constructor(/*private _postService: PostService*/) { }

  ngOnInit() {
    /*this._postService
      .fetchPostMin()
      .subscribe((posts: any[]) => this._posts = posts);*/
  }

}
