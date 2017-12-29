import {Component, OnInit, EventEmitter, OnChanges, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Candidate} from '../../interfaces/candidate';

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

  constructor() {
    this._submit$ = new EventEmitter();
    this._form = this._buildForm();
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
        description: new FormControl(''),
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
      this._form.patchValue(this._model);
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

  /**
   * Function to emit event to submit form
   */
  submit(form: any) {
    this._model.user.lastname = form.user.lastname;
    this._model.user.firstname = form.user.firstname;
    this._model.description = form.description;
    this._submit$.emit(this._model);
  }
}
