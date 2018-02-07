import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../signup/custom-validators';
import {CandidateService} from '../shared/services/candidate-service/candidate.service';
import {RecruiterService} from '../shared/services/recruiter-service/recruiter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
// property to store form value
  private _form: FormGroup;

  // boolean indicating if the form has already been submitted
  private _submitted: boolean;

  // boolean indicating that the submitted email does not exist
  private _emailDoesNotExist: boolean;

  constructor(private _candidateService: CandidateService,
              private _recruiterService: RecruiterService,
              private _router: Router) {

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

    //  case 'candidate':
    //    this._candidateService
    //      .get(form)
    //      .subscribe((candidate: Candidate) =>
    //          this._router.navigate(['profile/', candidate.id]),
    //        (error: any) => {
    //          if (error.status === xxx) {
    //            this._emailDoesNotExist = true;
    //          }
    //        });
    //  case 'recruiter':
    //    this._recruiterService
    //      .get(form)
    //      .subscribe((recruiter: Recruiter) =>
    //          this._router.navigate(['home/']),
    //        (error: any) => {
    //         if (error.status === xxx) {
    //            this._emailDoesNotExist = true;
    //          }
    //        });
    //
    //
  }
}
