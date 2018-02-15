import { browser, by, element } from 'protractor';

export class CandidatePage {

  navigateTo(id: number) {
    return browser.get('/profile/' + id);
  }

  getOptionsMenuButton() {
    return element(by.id('optionsMenuButton'));
  }

  getEditProfileButton() {
    return element(by.id('editProfileButton'));
  }

  getSuspendProfileButton() {
    return element(by.id('suspendProfileButton'));
  }

  getUnsuspendProfileButton() {
    return element(by.id('unsuspendProfileButton'));
  }

  getDeleteProfileButton() {
    return element(by.id('deleteProfileButton'));
  }

  getFirstnameAndLastname() {
    return element(by.id('firstnameAndLastname'));
  }

  getDescription() {
    return element(by.id('description'));
  }

  getSuspendText () {
    return element(by.id('suspendText'));
  }

  // modals

  getValidSuspendButton() {
    return element(by.id('validSuspendButton'));
  }

  getValidUnsuspendButton() {
    return element(by.id('validUnsuspendButton'));
  }

  getValidDeleteButton() {
    return element(by.id('validDeleteButton'));
  }

}
