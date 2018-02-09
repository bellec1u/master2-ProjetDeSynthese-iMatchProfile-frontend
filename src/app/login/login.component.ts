import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../signup/custom-validators';
import {CandidateService} from '../shared/services/candidate-service/candidate.service';
import {RecruiterService} from '../shared/services/recruiter-service/recruiter.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';
import {TokenStorage} from '../shared/authentication/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// property to store form value
  private _form: FormGroup;

  // boolean indicating if the form has already been submitted
  private _submitted: boolean;

  // boolean indicating that the submitted email does not exist
  private _emailDoesNotExist: boolean;

  private _authError: boolean;

  constructor(private _candidateService: CandidateService,
              private _recruiterService: RecruiterService,
              private _router: Router,
              private _authenticationService: AuthenticationService) {

    this._form = this._buildForm();
    this._submitted = false;
    this._authError = false;
  }

  ngOnInit() {
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
        email: new FormControl('', Validators.compose([
          Validators.required, Validators.email
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required, Validators.minLength(6)
        ])),
      })
    });
  }

  get form(): FormGroup {
    return this._form;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  get emailDoesNotExist(): boolean {
    return this._emailDoesNotExist;
  }

  get authError(): boolean {
    return this._authError;
  }

  /**
   * Function called on form submit.
   * @param form The signup form
   */
  submit(form: any) {
    this._submitted = true;
    if (this._form.invalid) {
      return;
    }

    this._authenticationService
      .login(form.user.email, form.user.password)
      .subscribe(
        _ => { this._router.navigate(['home']); this._authError = false; },
       err => this._authError = true
      );
  }
}
