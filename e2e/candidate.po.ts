import { browser, by, element } from 'protractor';

export class CandidatePage {
  navigateToUser(id: number) {
    return browser.get('/profile/' + id);
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

}
