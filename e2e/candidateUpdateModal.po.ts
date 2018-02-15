import { browser, by, element } from 'protractor';

export class CandidateUpdateModalPage {

  getLastname() {
    return element(by.id('lastname'));
  }

  getFirstname() {
    return element(by.id('firstname'));
  }

  getBirthDay() {
    return element(by.id('birthDate'));
  }

  getDescription() {
    return element(by.id('description'));
  }

  getUpdateButton() {
    return element(by.id('updateButton'));
  }

}
