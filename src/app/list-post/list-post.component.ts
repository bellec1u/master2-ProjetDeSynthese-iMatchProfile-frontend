import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import {ListPostService} from './list-post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  listPost: Post[];


  constructor(private _listPostService: ListPostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.listPost = this._listPostService.getPostsFromService();
  }

  showPost() {}
  updatePost() {}
  deletePost() {}
}
