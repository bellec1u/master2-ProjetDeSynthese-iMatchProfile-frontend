import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent implements OnInit {

  // Property to store the candidate
  private _candidate: any;

  constructor() {
    this._candidate = {};
  }

  ngOnInit() {
  }

  get candidate(): any {
    return this._candidate;
  }

  @Input()
  set candidate(value: any) {
    this._candidate = value;
  }



}
