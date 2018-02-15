import { browser, by, element } from 'protractor';

export class SignupPage {

  navigateTo() {
    return browser.get('/signup?role=candidate');
  }

  getCompany() {
    return element(by.id('company'));
  }

  getLastname() {
    return element(by.id('lastname'));
  }

  getFirstname() {
    return element(by.id('firstname'));
  }

  getEmail() {
    return element(by.id('email'));
  }

  getPassword() {
    return element(by.id('password'));
  }

  getPasswordVerif() {
    return element(by.id('password-verif'));
  }

  getSignupButton() {
    return element(by.id('signupButton'));
  }

}
