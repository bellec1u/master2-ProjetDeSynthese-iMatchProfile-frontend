import { FormControl } from '@angular/forms';

export class CustomValidators {

  static space(control: FormControl) {
    // space regex
    const regex = /^\s.*$/;

    // returns control
    return regex.test(control.value) ? {
      space: true
    } : null;
  }
}
