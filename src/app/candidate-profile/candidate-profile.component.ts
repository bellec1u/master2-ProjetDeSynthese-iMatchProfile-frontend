import { Component, OnInit } from '@angular/core';
import {CandidateService} from '../shared/services/candidate-service/candidate.service';
import {ActivatedRoute} from '@angular/router';
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
  private _candidate;

  constructor(private _candidateService: CandidateService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {

    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._candidateService.fetchOne(params['id']))
      .subscribe((candidate: any) => {
        this._candidate = candidate
        console.log(this._candidate); }
      );

    // For testing purpose
    /*
    this._candidate = {
      firstname: 'Jean',
      lastname: 'Pierre',
      photo: 'http://trovacamporella.com/img/trovacamporella-fiat500.png',
      description: ''
    };*/
  }

  get candidate() {
    return this._candidate;
  }

  contact() {}

  proposePost() {}

  signal() {}
}
