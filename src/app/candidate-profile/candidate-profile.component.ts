import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../shared/services/candidate-service/candidate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../shared/interfaces/candidate';

import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  /**
   * Property to store the candidate
   */
  private _candidate: Candidate;

  /**
   * Property specifiying if the current profile was not found.
   */
  private _profileNotFound: boolean;

  constructor(private _candidateService: CandidateService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._candidateService.fetchOne(params['id']))
      .subscribe(
        (candidate: Candidate) =>
          this._candidate = candidate,
        (error: any) => {
          if (error.status === 404) {
            this._profileNotFound = true;
          }
        }
      );
  }

  get candidate() {
    return this._candidate;
  }

  get profileNotFound(): boolean {
    return this._profileNotFound;
  }

  contact() {}

  proposePost() {}

  signal() {}
}
