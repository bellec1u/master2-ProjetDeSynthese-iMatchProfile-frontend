import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/services/post-service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../shared/interfaces/candidate';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _post;

  // Property to store the value of the candidates matching for this post
  private _matchingCandidates: Candidate[];
  private _matchingPercentCandidates: any[];

  constructor(private _postService: PostService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this._post = {};
    this._matchingCandidates = [];
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchOne(params['id']))
      .subscribe((post: any) => {
          this._post = post;
        }
      );

    // matching user with mandatory skills
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.getMatchingUserByMandatorySkills(params['id']))
      .subscribe((candidates: Candidate[]) => {
        this._matchingCandidates = candidates;
        }
      );

    // matching users with percent
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchMatchingPercent(params['id']))
      .subscribe((candidates: any[]) => {
          this._matchingPercentCandidates = candidates;
        }
      );
  }

  get post() {
    return this._post;
  }

  get matchingCandidates(): any[] {
    return this._matchingCandidates;
  }

  get matchingPercentCandidates(): any[] {
    return this._matchingPercentCandidates;
  }

  delete() {
    this._postService
      .delete(this._post.id)
      .subscribe(_ => {
        this._router.navigate(['home']);
    });
  }

  Postuler() {}
  Contacter() {}
  Signaler() {}
}
