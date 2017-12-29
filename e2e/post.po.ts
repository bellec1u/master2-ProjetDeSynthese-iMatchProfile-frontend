import { browser, by, element } from 'protractor';

export class PostPage {
  navigateToRecruiterPosts() {
    return browser.get('/recruiterPost/7');
  }

  /**
   * Return all posts of the current recruiter
   *
   * @returns {ElementArrayFinder}
   */
  getAllPosts() {
    return element.all(by.id('post'));
  }

  /**
   * Return the id of the last post added
   *
   * @returns {ElementFinder}
   */
  getLastPostId() {
    return this.getAllPosts().last().element(by.id('postTitle'));
  }

  getLastPostDeleteButton() {
    return this.getAllPosts().last().element(by.css('.btn-danger'));
  }

  /**
   * Return all button which enable to see one post
   *
   * @returns {ElementArrayFinder}
   */
  getAllSeePostButton() {
    return element.all(by.css('.btn-primary'));
  }

  /**
   * Return all button which enable to see the update post mode
   *
   * @returns {ElementArrayFinder}
   */
  getAllUpdatePostButton() {
    return element.all(by.css('.btn-warning'));
  }

  /**
   * Return the button for add a new post
   *
   * @returns {ElementFinder}
   */
  getAddPostButton() {
    return element(by.id('addPostButton'));
  }

  // ---------- ---------- ---------- post elements
  getPostReference() {
    return element(by.id('reference'));
  }

  getPostTitle() {
    return element(by.id('title'));
  }

  getPostExperience() {
    return element(by.id('experience'));
  }

  getPostSalaryIndex() {
    return element(by.id('salaryIndex'));
  }

  getPostContractType() {
    return element(by.id('contractType'));
  }

  getPostDescription() {
    return element(by.id('description'));
  }

  getPostImpotantNotes() {
    return element(by.id('importantNotes'));
  }

  getPostWorkplace() {
    return element(by.id('workplace'));
  }

  getPostOrganization() {
    return element(by.id('organization'));
  }

  getPostWorkUnit() {
    return element(by.id('workUnit'));
  }

  // ---------- ---------- ---------- form post modal elements
  getPostReferenceInput() {
    return element(by.id('reference'));
  }

  getPostTitleInput() {
    return element(by.id('title'));
  }

  getPostExperienceInput() {
    return element(by.id('experience'));
  }

  getPostSalaryIndexInput() {
    return element(by.id('salaryIndex'));
  }

  getPostMinSalaryInput() {
    return element(by.id('minSalary'));
  }

  getPostMaxSalaryInput() {
    return element(by.id('maxSalary'));
  }

  getPostContractTypeInput() {
    return element(by.id('contractType'));
  }

  getPostDescriptionInput() {
    return element(by.id('description'));
  }

  getPostImpotantNotesInput() {
    return element(by.id('importantNotes'));
  }

  getPostWorkplaceInput() {
    return element(by.id('workplace'));
  }

  getPostOrganizationInput() {
    return element(by.id('organization'));
  }

  getPostWorkUnitInput() {
    return element(by.id('workUnit'));
  }

  getPostAddSkillButton() {
    return element(by.id('addSkill'));
  }

  getSendFormButton() {
    return element(by.id('sendForm'));
  }

}
