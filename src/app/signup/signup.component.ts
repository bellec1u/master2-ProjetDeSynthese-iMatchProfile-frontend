import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidateService} from '../shared/services/candidate-service/candidate.service';
import {RecruiterService} from '../shared/services/recruiter-service/recruiter.service';
import {Candidate} from '../shared/interfaces/candidate';
import {Recruiter} from '../shared/interfaces/recruiter';
import {AuthenticationService} from '../shared/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // property to store form value
  private _form: FormGroup;

  // boolean indicating if the form has already been submitted
  private _submitted: boolean;

  // boolean indicating that the submitted email is already used
  private _emailAlreadyUsed: boolean;

  constructor(private _candidateService: CandidateService,
              private _recruiterService: RecruiterService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _authenticationService: AuthenticationService) {

    this._form = this._buildForm();
    this._submitted = false;

    this._route.queryParams
      .filter(params => params.role)
      .subscribe(params => {
        if (params.role === 'candidate' || params.role === 'recruiter') {
          this._form.get('user').get('role').setValue(params.role);
        }
      });
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
      company: new FormControl(''),
      user: new FormGroup({
        role: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        email: new FormControl('', Validators.compose([
          Validators.required, Validators.email
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required, Validators.minLength(6)
        ])),
        'password-verif': new FormControl('')
      }, CustomValidators.passwordVerif)
    }, CustomValidators.companyRequiredIfRecruiter);
  }

  get form(): FormGroup {
    return this._form;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  get emailAlreadyUsed(): boolean {
    return this._emailAlreadyUsed;
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
    switch (form.user.role) {
      case 'candidate':
        delete form.company;
        form.user.role = 'CANDIDATE';
        console.log(form);
        this._candidateService
          .create(form)
          .subscribe(_ => {
              this._authenticationService
                .login(form.user.email, form.user.password)
                .subscribe(
                  _ => this._router.navigate(['home'])
                );
            },
            (error: any) => {
              if (error.status === 409) {
                this._emailAlreadyUsed = true;
              }
            });
        break;
      case 'recruiter':
        form.user.role = 'RECRUITER';
        this._recruiterService
          .create(form)
          .subscribe(_ => {
            this._authenticationService
              .login(form.user.email, form.user.password)
              .subscribe(
                _ => this._router.navigate(['home'])
              );
            },
            (error: any) => {
              if (error.status === 409) {
                this._emailAlreadyUsed = true;
              }
            });
        break;
      default:
        console.log('Invalid role');
    }
  }
}
