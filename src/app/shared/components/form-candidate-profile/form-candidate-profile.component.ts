import {Component, OnInit, EventEmitter, OnChanges, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SkillService} from '../../services/skill-service/skill.service';

@Component({
  selector: 'app-form-candidate-profile',
  templateUrl: './form-candidate-profile.component.html',
  styleUrls: ['./form-candidate-profile.component.css']
})
export class FormCandidateProfileComponent implements OnInit, OnChanges {

  // property to store update mode flag
  private _isUpdateMode: boolean;

  // property to store model value
  private _model: any;

  // property to store submit$ value
  private _submit$: EventEmitter<any>;

  // property to store form value
  private _form: FormGroup;

  private _skillsAvailable: any[];

  private _nameSkill: any;

  private _nameEducation: any;
  private _obtainingDateEducation: any;
  private _descriptionEducation: any;

  constructor(private _skillService: SkillService) {
    this._submit$ = new EventEmitter();
    this._form = this._buildForm();

    this._skillsAvailable = [];
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
        user: new FormGroup({
          lastname: new FormControl('', Validators.required),
          firstname: new FormControl('', Validators.required)
        }),
        birthDate: new FormControl(''),
        description: new FormControl('')
      });
    }

  @Input()
  set model(model: any) {
    this._model = model;
  }

  get model(): any {
    return this._model;
  }

  get form(): FormGroup {
    return this._form;
  }

  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  get skillsAvailable(): any[] {
      return this._skillsAvailable;
  }

  nameEducation(name) {
    this._nameEducation = name;
  }

  obtainingDateEducation(obtainingDate) {
    this._obtainingDateEducation = obtainingDate;
  }

  descriptionEducation(description) {
    this._descriptionEducation = description;
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

  ngOnInit() {
    this._skillService
      .fetch()
      .subscribe((skills: any[]) => {
        this._skillsAvailable = skills;
        // for init this value
        this._nameSkill = skills[0].description;
      });
  }

  /**
   * Function to handle component update
   *
   * @param record
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this._model = record.model.currentValue;
      this._isUpdateMode = true;
      this._model.birthDate = this._model.birthDate ? new Date(this._model.birthDate) : null;
      this._form.patchValue(this._model);
      console.log('@@@@@@@@@');
      console.log(this._model);
    } else {
      this._isUpdateMode = false;
    }
  }

  /**
   * Function called on cancel.
   * Cancel all the modifications.
   */
  cancel() {
    this._form.patchValue(this._model);
  }

  changeNameSkill(name: any) {
    this._nameSkill = name.value;
  }

  addSkill() {
    // test if the postSkill already exist
    if (!this.findSkill()) {
      // if ok, add it
      this._model['skills'].push(this.getSkill(this._nameSkill));
    }
  }

  private findSkill(): any {
    for (const skill of this._model.skills) {
      if (skill.description === this._nameSkill) {
        return true;
      }
    }
    return false;
  }

  private getSkill(nameSkill: any): any {
    for (const skill of this._skillsAvailable) {
      if (skill.description === nameSkill) {
        return skill;
      }
    }
  }

  delSkill(skill) {
    this._model['skills'] = this._model['skills'].filter(
      skills => skills.description !== skill.description
    );
  }

  addEducation() {
    this._model['educations'].push(
      this.formateEducation(this._nameEducation, this._obtainingDateEducation, this._descriptionEducation)
    );
  }

  private formateEducation(name: any, obtainingDate: any, description: any): any {
    return {
      'name': name,
      'obtainingDate': obtainingDate,
      'description': description
    };
  }

  delEducation(e) {
    this._model['educations'] = this._model['educations'].filter(
      education => education.name !== e.name && education.obtainingDate !== e.obtainingDate && education.description !== e.description
    );
  }

  /**
   * Function to emit event to submit form
   */
  submit(form: any) {
    // getting rid of time to conform to API
    form.birthDate = form.birthDate ? form.birthDate.toISOString().split('T')[0] : null;

    console.log('########');
    console.log(this._model);
    console.log(form);
    Object.assign(this._model, form);

    console.log('--------');
    console.log(this._model);
    this._submit$.emit(this._model);
  }
}
