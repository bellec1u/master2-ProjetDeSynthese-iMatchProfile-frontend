import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  // Property to store the candidate
  private _post: any;

  constructor() {
    this._post = {};
  }

  ngOnInit() {
  }

  get post(): any {
    return this._post;
  }

  @Input()
  set post(value: any) {
    this._post = value;
  }

}
