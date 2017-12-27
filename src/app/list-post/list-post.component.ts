import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post-services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  private _listPost: any[];

  constructor(private _postService: PostService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchPostRecruiter(params['id']))
      .subscribe((listPost: any[]) => {
        this._listPost = listPost['post'];
        console.log(this._listPost);
      });
  }

  /**
   *
   * @returns {any[]}
   */
  get listPost(){
    return this._listPost;
  }

  update() {}

  delete(id: string) {
    this._postService
      .delete(id)
      .subscribe(_ => this._router.navigate(['home']));

  }

}
