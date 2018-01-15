import { Component, OnInit } from '@angular/core';

import { CandidateService } from '../shared/services/candidate-service/candidate.service';
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

  constructor(private _postService: PostService,
              private _candidateService: CandidateService,
              private _route: ActivatedRoute,
              private _router: Router) {
    this._post = {};
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchOne(params['id']))
      .subscribe((post: any) => {
          this._post = post;
        }
      );

    // Temporary
    this._candidateService.fetch()
      .subscribe((candidates: Candidate[]) =>
        this._matchingCandidates = candidates
      );
  }

  get post() {
    return this._post;
  }

  get matchingCandidates(): any[] {
    return this._matchingCandidates;
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
