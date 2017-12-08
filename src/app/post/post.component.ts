import { Component, OnInit } from '@angular/core';
import {CandidateService} from '../shared/services/candidate-service/candidate.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // Property to store the value of the candidates matching for this post
  private _matchingCandidates: any[];

  constructor(private _candidateService: CandidateService) { }

  ngOnInit() {
    this._candidateService.fetch()
      .subscribe((candidates: any) => {
        console.log(candidates);
        this._matchingCandidates = candidates;
    }
      );
  }

  get matchingCandidates(): any[] {
    return this._matchingCandidates;
  }

  Postuler() {}
  Contacter() {}
  Signaler() {}

}
