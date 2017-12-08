import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post-services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _post;


  constructor(private _postService: PostService,private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchOne(params['id']))
      .subscribe((post: any) => {
          this._post = post
          console.log(this._post);
        }
      );
  }

    get post() {
      return this._post;
    }

  Postuler() {}
  Contacter() {}
  Signaler() {}

}
