import { FormControl } from '@angular/forms';

export class CustomValidators {

  static space(control: FormControl) {
    // space regex
    const regex = /^\S/;

    // returns control
    return regex.test(control.value) ? null : {
      space: true
    };
  }
}
