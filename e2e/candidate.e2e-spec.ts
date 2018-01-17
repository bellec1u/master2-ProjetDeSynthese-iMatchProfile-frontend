import { CandidatePage } from './candidate.po';
import {browser, protractor} from 'protractor';

describe('imp candidate view', function() {
  let page: CandidatePage;

  beforeEach(() => {
    page = new CandidatePage();
  });

  it('should see user 1 and his infos', () => {
    // go to user 1 view
    page.navigateToUser(1);
    // check infos
    expect(page.getCandidateFirstnameAndLastname().getText()).toEqual('Jean Pierre');
    expect(page.getCandidateDescription().getText()).toEqual('Je cherche un stage !');
    expect(page.getCandidateSkills().count()).toEqual(2);
    // TODO maybe add some tests
  });

  it('should see users information from a post', () => {
    page.navigateToPost(9);
    page.getUserMatchedSeeProfileButton().first().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/profile/1');
  });

  it('delete user', () => {
    // delete user with id = 1
    page.navigateToUser(1);
    page.getMenuButton().click();
    page.getDeleteButton().click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(page.getValidDeleteButton()));
    page.getValidDeleteButton().click();
    // check if deleted
    page.navigateToUser(1);
    expect(page.getNotFoundText().getText()).toEqual('Ce profil est introuvable.');
  });

});
