import {AbstractControl} from '@angular/forms';

export class CustomValidators {

  static passwordVerif(control: AbstractControl) {
    if (control.get('password').hasError('required') || control.get('password').hasError('minlength') ||
      control.get('password').value !== control.get('password-verif').value) {
      control.get('password-verif').setErrors({ passwordVerif: true });
      return { passwordVerif: true };
    }
    control.get('password-verif').setErrors(null);
    return null;
  }

  static companyRequiredIfRecruiter(control: AbstractControl) {
    if (control.get('user').get('role').value === 'recruiter' && !control.get('company').value) {
      control.get('company').setErrors({ required: true });
      return { companyRequiredIfRecruiter: true };
    }
    control.get('company').setErrors(null);
    return null;
  }
}
