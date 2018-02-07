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
  private _candidate: any;

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
      .subscribe((candidate: any) => {
          this._candidate = candidate;
        },
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

  /**
   * Function to update the candidate profile.
   * @param {Candidate} candidate
   */
  update(candidate: any) {
      this._candidateService.update(candidate)
        .subscribe((cand: Candidate) =>
          this._candidate = cand);
  }

  /**
   * Function to suspend or unsuspend the candidate profile.
   */
  suspend(reverse: boolean) {
    this.candidate.user.state = reverse ? 'OK' : 'SUSPENDED';
    this._candidateService
      .update(this._candidate)
      .subscribe((cand: Candidate) => this._candidate = cand);
  }

  /**
   * Function to delete the candidate profile.
   */
  delete() {
    this._candidateService.delete(this._candidate.id)
      .subscribe(() => this._router.navigate(['/home']));
  }

  contact() {}

  proposePost() {}

  signal() {}
}
