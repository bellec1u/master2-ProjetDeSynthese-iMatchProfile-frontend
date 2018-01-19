import { browser, by, element } from 'protractor';

export class CandidatePage {
  navigateToUser(id: number) {
    return browser.get('/profile/' + id);
  }

  navigateToPost(id: number) {
    return browser.get('/post/' + id);
  }

  getMenuButton() {
    return element(by.id('drowpdown-profile-menu-button'));
  }

  getDeleteButton() {
    return element(by.id('delete'));
  }

  getSuspendButton() {
    return element(by.id('suspend'));
  }

  getValidDeleteButton() {
    return element(by.id('validDelete'));
  }

  getValidSuspendButton() {
    return element(by.id('validSuspend'));
  }

  getNotFoundText() {
    return element(by.id('notfound'));
  }

  getSuspendText() {
    return element(by.id('suspendText'));
  }

  getCandidateFirstnameAndLastname() {
    return element(by.id('firstnameANDlastname'));
  }

  getCandidateDescription() {
    return element(by.id('candidateDescription'));
  }

  getCandidateSkills() {
    return element.all(by.id('skill'));
  }

  getUserMatchedSeeProfileButton() {
    return element.all(by.id('seeProfileButton'));
  }

}
