import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post-service/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  private _listPost: any[];

  // attributes that are used to know which type of form to open (new or update)
  private _isNewPost: boolean;
  private _postToUpdate: any;


  constructor(private _postService: PostService, private _route: ActivatedRoute, private _router: Router) {
    this._listPost = [];
    this._isNewPost = true;
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchPostRecruiter(params['id']))
      .subscribe((listPost: any[]) => {
        this._listPost = listPost['post'];
      });
  }

  /**
   *
   * @returns {any[]}
   */
  get listPost(){
    return this._listPost;
  }

  get isNewPost() {
    return this._isNewPost;
  }

  get postToUpdate() {
    return this._postToUpdate;
  }

  /**
   * stock the post (can be null) and if the user want create a new post or not
   *
   * @param post
   * @param {boolean} newPost
   */
  clickUpdatePost(post: any, newPost: boolean) {
    if (newPost) {
      this._postToUpdate = null;
      this._isNewPost = true;
    } else {
      this._postToUpdate = post;
      this._isNewPost = false;
    }
  }

  delete(id: string) {
    this._postService
      .delete(id)
      .subscribe((people: any[]) => this._listPost = people);
    window.location.reload();
  }

}
