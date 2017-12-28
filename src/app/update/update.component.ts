import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../shared/services/post-services/post.service';
import 'rxjs/add/operator/map';
import {FormPostComponent} from '../shared/modal/form-post/form-post.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private _data: any;


  constructor(private _route: ActivatedRoute, private _router: Router, private _postService: PostService) {
  }


  ngOnInit() {
   this._route.params
      .map((params: any) => params.id)
      .flatMap((id: string) => this._postService.fetchOne(id))
      .subscribe((post: any) => { this._data = post; });
  }

  get data(): any {
    return this._data;
  }

  update(post: any) {
    post['id'] = this._data.id;
    this._postService.update(post)
      .subscribe((p: any) => this._router.navigate(['/post', post.id])
  );
  }

}
