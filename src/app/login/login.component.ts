import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../signup/custom-validators';
import {CandidateService} from '../shared/services/candidate-service/candidate.service';
import {RecruiterService} from '../shared/services/recruiter-service/recruiter.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';

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

  constructor(private _candidateService: CandidateService,
              private _recruiterService: RecruiterService,
              private _router: Router,
              private _authenticationService: AuthenticationService) {

    this._form = this._buildForm();
    this._submitted = false;
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
      );
  }
}
