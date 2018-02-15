import { browser, by, element } from 'protractor';

export class PostUpdateModalPage {

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

  getMinSalary() {
    return element(by.id('minSalary'));
  }

  getMaxSalary() {
    return element(by.id('maxSalary'));
  }

  getContractType() {
    return element(by.id('contractType'));
  }

  getDescription() {
    return element(by.id('description'));
  }

  getImportantNotes() {
    return element(by.id('importantNotes'));
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

  getAddSkillButton() {
    return element(by.id('addSkillButton'));
  }

  getSendNewPostButton() {
    return element(by.id('sendNewPostButton'));
  }

}
