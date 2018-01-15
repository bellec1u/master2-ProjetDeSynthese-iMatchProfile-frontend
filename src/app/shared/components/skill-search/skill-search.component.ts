import { Component, OnInit } from '@angular/core';
import {Skill} from '../../interfaces/skill';
import {SkillService} from '../../services/skill-service/skill.service';

@Component({
  selector: 'app-skill-search',
  templateUrl: './skill-search.component.html',
  styleUrls: ['./skill-search.component.css']
})
export class SkillSearchComponent implements OnInit {

  private _searchText: string;

  private _skills: Skill[];

  constructor(private _skillService: SkillService) { }

  ngOnInit() {
  }

  get skills(): Skill[] {
    return this._skills;
  }

  set searchText(value: string) {
    this._searchText = value;
  }

  search($event) {
    this._skillService.fetchLikeDescription(this._searchText)
      .subscribe((skills: Skill[]) => this._skills = skills);
  }
}
