import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getLogoNavbar() {
    return element(by.css('.navbar-brand'));
  }


}
