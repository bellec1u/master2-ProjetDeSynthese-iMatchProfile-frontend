import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post-services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {
  // private property to store form value
  private _form: FormGroup;

  constructor(private _postService: PostService, private _router: Router) {
    this._form = this._buildForm();
  }

  /**
   * Returns private property _form
   *
   * @returns {FormGroup}
   */
  get form(): FormGroup {
    return this._form;
  }

  ngOnInit() {
  }

  submit(form: any) {
    console.log(form);
    this._postService
      .create(form)
      .subscribe((post: any) => {
        this._router.navigate(['/posts', post.id]);

      });
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
        Validators.required, Validators.minLength(1)
      ])),
      maxSalary: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
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
