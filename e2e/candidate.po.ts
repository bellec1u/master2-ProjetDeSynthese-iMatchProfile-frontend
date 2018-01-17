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

  getValidDeleteButton() {
    return element(by.id('validDelete'));
  }

  getNotFoundText() {
    return element(by.id('notfound'));
  }

  getCandidateFirstnameAndLastname() {
    return element(by.id('firstname&lastname'));
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
