import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home');
  }

  getLogoNavbar() {
    return element(by.css('.navbar-brand'));
  }

  getCreateCandidateButton() {
    return element(by.id('candidat'));
  }

  getCreateRecruiterButton() {
    return element(by.id('recruteur'));
  }

  getGoToPostButton() {
    return element(by.id('topost'));
  }
}
