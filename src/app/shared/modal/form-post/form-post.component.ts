import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post-services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SkillService} from '../../services/skill-services/skill.service';

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
  private _submit$: EventEmitter<any>;


  constructor(private _postService: PostService, private _skillService: SkillService, private _router: Router,
              private _route: ActivatedRoute) {
    this._form = this._buildForm();
    this._skills = [];
    this._typeSkills = ['Obligatoire', 'Plus'];
    // for init this value
    this._typeSkill = this._typeSkills[0];
    this._postSkills = [];
    this._submit$ = new EventEmitter();
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
   * Returns private property _submit$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('submit')
  get submit$(): EventEmitter<any> {
    return this._submit$;
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
      if (postskill.skill.description === this._nameSkill && postskill.type === this._typeSkill) {
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
    if (this.isUpdateMode) {
      form['postskill'] = this.model.postskill;
      for (const ps of form['postskill']) {
        ps.type = ps.type.toUpperCase();
      }
      this._submit$.emit(form);
    }else {
      form['postskill'] = this._postSkills;
      for (const ps of form['postskill']) {
        ps.type = ps.type.toUpperCase();
      }
      this._route.params
        .filter(params => !!params['id'])
        .flatMap(params => this._postService.create(form, params['id']))
        .subscribe((post: any) => {
          this._router.navigate(['/post', post.id]);
        });
    }
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
      publicationDate: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(10)
      ])),
      reference: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      title: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5)
      ])),
      experience: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      salaryIndex: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      minSalary: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.min(1)
      ])),
      maxSalary: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.min(1)
      ])),
      contractType: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(10)
      ])),
      importantNotes: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      workplace: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      organization: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      workUnit: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ]))
    });
  }
}
