import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.css']
})
export class SkillBoxComponent implements OnInit {

  // Property to store the skill
  private _skill: any;

  constructor() {
    this._skill = {};
  }

  ngOnInit() {
  }

  get skill(): any {
    return this._skill;
  }

  @Input()
  set skill(value: any) {
    this._skill = value;
  }
}
