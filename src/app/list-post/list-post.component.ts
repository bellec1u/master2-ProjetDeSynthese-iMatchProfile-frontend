import {Component, OnInit} from '@angular/core';
import { Post } from './post';
import {PostService} from '../shared/services/post-services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  listPost: Post[];

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
  }


  showPost() {}
  updatePost() {}
  deletePost() {}

}
