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
    return element(by.id('notFound'));
  }

  getSuspendText() {
    return element(by.id('suspendText'));
  }

  getCandidateModaDesc() {
    return element(by.id('description'));
  }

  getCandidateSec() {
    return element(by.id('candidateDescription'));
  }

  getValidUpdate() {
    return element(by.id('candidatModal'));
  }

  getEditButton() {
    return element(by.id('editButton'));
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


  navigateToCreateUser() {
    return browser.get('/signup?role=candidate');
  }

  navigateToCreateRecruiter() {
    return browser.get('/signup?role=recruiter');
  }

  getFormLastname() {
    return element(by.id('lastname'));
  }

  getFormFirstname() {
    return element(by.id('firstname'));
  }

  getFormEmail() {
    return element(by.id('email'));
  }

  getFormPassword() {
    return element(by.id('password'));
  }

  getFormPasswordVerif() {
    return element(by.id('password-verif'));
  }

  getFormSubmitButton() {
    return element(by.id('submit'));
  }

  getFormCompany(){
    return element(by.id('company'));
  }

}
