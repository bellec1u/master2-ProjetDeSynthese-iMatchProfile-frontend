import { browser, by, element } from 'protractor';

export class HomePage {

  navigateTo() {
    return browser.get('/home');
  }

  getCreateCandidateButton() {
    return element(by.id('createCandidatButton'));
  }

  getCreateRecruiterButton() {
    return element(by.id('createRecruiterButton'));
  }

  getGoToPostButtons() {
    return element.all(by.id('showPostButton'));
  }

}
