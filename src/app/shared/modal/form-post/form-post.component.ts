import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post-services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SkillService} from '../../services/skill-services/skill.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {
  // private property to store form value
  private _form: FormGroup;
  private _skill: any;


  constructor(private _postService: PostService, private _skillService: SkillService, private _router: Router, private _route: ActivatedRoute) {
    this._form = this._buildForm();
    this._skill = {};
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
    this._skillService
      .fetch()
      .subscribe((skills: any[]) => this._skill = skills);
  }

  submit(form: any) {
    console.log(form);
    this._route.params
      .filter(params => !!params['id'])
      .flatMap(params => this._postService.create(form, params['id']))
      .subscribe((post: any) => {
        this._router.navigate(['/posts', post.id]);
      });
  }

  get skill(): any {
    return this._skill;
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
