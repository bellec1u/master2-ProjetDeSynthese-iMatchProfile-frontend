import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post-services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SkillService} from '../../services/skill-services/skill.service';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit, OnChanges {
  // private property to store form value
  private _form: FormGroup;
  private _skills: any[];
  private _typeSkills: any[];
  // skills choose for the post
  private _nameSkill: any;
  private _typeSkill: any;
  private _postSkills: any[];
  private _isUpdateMode: boolean;
  private _model: any;


  constructor(private _postService: PostService, private _skillService: SkillService, private _router: Router,
              private _route: ActivatedRoute) {
    this._form = this._buildForm();
    this._skills = [];
    this._typeSkills = ['Obligatoire', 'Plus'];
    // for init this value
    this._typeSkill = this._typeSkills[0];
    this._postSkills = [];
  }

  /**
   * Returns private property _form
   *
   * @returns {FormGroup}
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Sets private property _model
   *
   * @param model
   */
  @Input()
  set model(model: any) {
    this._model = model;
    this._postSkills = model.postskill;
  }

  /**
   * Returns private property _model
   *
   * @returns {any}
   */
  get model(): any {
    return this._model;
  }

  /**
   * Returns private property _isUpdateMode
   *
   * @returns {boolean}
   */
  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  /**
   * Function to handle component update
   *
   * @param record
   */
  ngOnChanges(record) {
    this._model = record.model.currentValue;
    this._isUpdateMode = true;
    this._form.patchValue(this._model);
  }

  get skills(): any[] {
    return this._skills;
  }

  get typeSkills(): any[] {
    return this._typeSkills;
  }

  get postSkills(): any[] {
    return this._postSkills;
  }

  ngOnInit() {
    this._skillService
      .fetch()
      .subscribe((skills: any[]) => {
        this._skills = skills;
        // for init this value
        this._nameSkill = skills[0].description;
      });
  }

  changeNameSkill(name: any) {
    this._nameSkill = name.value;
  }

  changeTypeSkill(type: any) {
    this._typeSkill = type.value;
  }

  addSkill() {
    // test if the postSkill already exist
    if (!this.findSkill()) {
      // if ok, add it
      this._postSkills.push({
        'skill': this.getSkillByName(this._nameSkill),
        'type': this._typeSkill
      });
    } else {
      console.log('already add');
    }
  }

  private findSkill(): boolean {
    for (const postskill of this._postSkills) {
      if (postskill.skill.description === this._nameSkill) {
        return true;
      }
    }
    return false;
  }

  private getSkillByName(name: any): any {
    for (const skill of this._skills) {
      if (skill.description === name) {
        return {
          'description': skill.description,
          'id': skill.id
        };
      }
    }
  }

  delSkill(ps) {
    this._postSkills = this.postSkills.filter(
      postskill => postskill.skill.description !== ps.skill.description || postskill.type !== ps.type
    );
  }

  /**
   * Create the form and send it to the db
   *
   * @param form
   */
  submit(form: any) {
    form['postskill'] = this._postSkills;
    for (const ps of form['postskill']) {
      ps.type = ps.type.toUpperCase();
    }
    if (this._isUpdateMode) {
      form['id'] = this._model.id;
      this.update(form);
    } else {
      this.add(form);
    }
  }

  add(post: any) {
    console.log('add');
    console.log(post);
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.create(post, params['id']))
      .subscribe((p: any) => {
        this._router.navigate(['/post', p.id]);
      });
  }

  update(post: any) {
    this._postService
      .update(post)
      .subscribe((p: any) => this._router.navigate(['/post', p.id])
      );
  }

  /**
   * Function to build our form
   *
   * @returns {FormGroup}
   *
   * @private
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      reference: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ])),
      title: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5), CustomValidators.space
      ])),
      experience: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ])),
      salaryIndex: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ])),
      minSalary: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.min(1)
      ])),
      maxSalary: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.min(1)
      ])),
      contractType: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(10), CustomValidators.space
      ])),
      importantNotes: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ])),
      workplace: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ])),
      organization: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ])),
      workUnit: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), CustomValidators.space
      ]))
    });
  }
}
