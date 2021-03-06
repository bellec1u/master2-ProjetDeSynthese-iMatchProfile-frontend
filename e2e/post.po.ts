import { browser, by, element } from 'protractor';

export class PostPage {

  navigateTo(id: number) {
    return browser.get('/post/' + id);
  }

  getOptionsMenuButton() {
    return element(by.id('optionsMenuButton'));
  }

  getUpdatePostButton() {
    return element(by.id('updatePostButton'));
  }

  getDeletePostButton() {
    return element(by.id('deletePostButton'));
  }

  getPublicarionDate() {
    return element(by.id('publicationDate'));
  }

  getReference() {
    return element(by.id('reference'));
  }

  getTitle() {
    return element(by.id('title'));
  }

  getExperience() {
    return element(by.id('experience'));
  }

  getSalaryIndex() {
    return element(by.id('salaryIndex'));
  }

  getContractType() {
    return element(by.id('contractType'));
  }

  getWorkplace() {
    return element(by.id('workplace'));
  }

  getOrganization() {
    return element(by.id('organization'));
  }

  getWorkUnit() {
    return element(by.id('workUnit'));
  }

  getDescription() {
    return element(by.id('description'));
  }

  getImportantNotes() {
    return element(by.id('importantNotes'));
  }

}
