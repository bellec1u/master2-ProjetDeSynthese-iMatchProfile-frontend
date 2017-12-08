import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post-services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  private _listPost: any[];


  constructor(private _postService: PostService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchPostRecruiter(params['id']))
      .subscribe((listPost: any[]) => {
        this._listPost = listPost
        console.log(this._listPost); }
      );
  }

  /**
   *
   * @returns {any[]}
   */
  get listPost(){
    return this._listPost;
  }


  showPost() {}
  updatePost() {}
  deletePost() {}
}
