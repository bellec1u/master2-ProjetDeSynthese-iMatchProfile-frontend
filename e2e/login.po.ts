import { browser, by, element } from 'protractor';

export class LoginPage {

  navigateTo() {
    return browser.get('/login');
  }

  getEmail() {
    return element(by.id('email'));
  }

  getPassword() {
    return element(by.id('password'));
  }

  getLoginButton() {
    return element(by.id('loginButton'));
  }

  getSignupButton() {
    return element(by.id('signupButton'));
  }

}
