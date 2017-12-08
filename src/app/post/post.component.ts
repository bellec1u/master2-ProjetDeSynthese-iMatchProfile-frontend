import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../shared/services/candidate-service/candidate.service';
import { PostService } from '../shared/services/post-services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _post;

  // Property to store the value of the candidates matching for this post
  private _matchingCandidates: any[];

  constructor(private _postService: PostService,
              private _candidateService: CandidateService,
              private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.fetchOne(params['id']))
      .subscribe((post: any) => {
          this._post = post
          console.log(this._post);
        }
      );

    // Temporary
    this._candidateService.fetch()
      .subscribe((candidates: any) => {
        console.log(candidates);
        this._matchingCandidates = candidates;
        }
      );
  }

  get post() {
    return this._post;
  }

  get matchingCandidates(): any[] {
    return this._matchingCandidates;
  }

  Postuler() {}
  Contacter() {}
  Signaler() {}

}
