import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostskillService} from '../shared/services/postskill-services/postskill.service';

@Component({
  selector: 'app-postskill',
  templateUrl: './postskill.component.html',
  styleUrls: ['./postskill.component.css']
})
export class PostskillComponent implements OnInit {
  private _postskill: any[];


  constructor(private _postskillService: PostskillService, private _route: ActivatedRoute) {
    this._postskill = [];
  }

  get options(): any[] {
    return this._postskill;
  }


  /**
   * Initialisation
   */
  ngOnInit() {
    this._postskillService
      .fetch()
      .subscribe((ps: any[]) => this._postskill = ps);
  }

}
