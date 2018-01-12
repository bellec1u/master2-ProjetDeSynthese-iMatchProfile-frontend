import { PostPage } from './post.po';
import {browser, by, element, protractor} from 'protractor';

describe('imp post view', function() {
  let page: PostPage;

  beforeEach(() => {
    page = new PostPage();
  });

  it('should see all my posts, can create one post, update it and delete it', () => {
    // go to the page that contains all the posts available (recruiter 7)
    page.navigateToRecruiterPosts();
    // initially, there should be 2 posts
    expect(page.getAllPosts().count()).toEqual(2);
    // click on the "Ajouter un poste" button
    page.getAddPostButton().click();
    // fill the form and send it
    browser.wait(protractor.ExpectedConditions.visibilityOf(page.getPostReferenceInput()));
    page.getPostReferenceInput().sendKeys('test reference');
    page.getPostTitleInput().sendKeys('test title');
    page.getPostExperienceInput().sendKeys('test experience');
    page.getPostSalaryIndexInput().sendKeys('test salaryIndex');
    page.getPostMinSalaryInput().sendKeys(1);
    page.getPostMaxSalaryInput().sendKeys(2);
    page.getPostContractTypeInput().sendKeys('test contractType');
    page.getPostDescriptionInput().sendKeys('test description');
    page.getPostImpotantNotesInput().sendKeys('test importantNotes');
    page.getPostWorkplaceInput().sendKeys('test workplace');
    page.getPostOrganizationInput().sendKeys('test organization');
    page.getPostWorkUnitInput().sendKeys('test workUnit');
    page.getPostAddSkillButton().click();
    page.getSendFormButton().click();
    // go to the page that contains all the posts available (recruiter 7)
    page.navigateToRecruiterPosts();
    // there should be 3 posts
    browser.wait(protractor.ExpectedConditions.visibilityOf(page.getAllPosts().get(0)));
    expect(page.getAllPosts().count()).toEqual(3);
    // see the new post and check its content
    page.getLastPostId().getText().then(function(id) {
      page.getAllSeePostButton().last().click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/post/' + id);
    });
    expect(page.getPostReference().getText()).toEqual('test reference');
    expect(page.getPostTitle().getText()).toEqual('test title');
    expect(page.getPostExperience().getText()).toEqual('test experience');
    expect(page.getPostSalaryIndex().getText()).toEqual('test salaryIndex');
    expect(page.getPostContractType().getText()).toEqual('test contractType');
    expect(page.getPostDescription().getText()).toEqual('test description');
    expect(page.getPostImpotantNotes().getText()).toEqual('test importantNotes');
    expect(page.getPostWorkplace().getText()).toEqual('test workplace');
    expect(page.getPostOrganization().getText()).toEqual('test organization');
    expect(page.getPostWorkUnit().getText()).toEqual('test workUnit');
    // go to the page that contains all the posts available (recruiter 7)
    page.navigateToRecruiterPosts();
    // update the new post (change its title) and validate
    browser.wait(protractor.ExpectedConditions.visibilityOf(page.getAllPosts().get(0)));
    page.getAllUpdatePostButton().last().click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(page.getPostTitleInput()));
    page.getPostTitleInput().sendKeys('2');
    page.getSendFormButton().click();
    // go to the page that contains all the posts available (recruiter 7)
    page.navigateToRecruiterPosts();
    // see the poste updated and see the modification
    browser.wait(protractor.ExpectedConditions.visibilityOf(page.getAllPosts().get(0)));
    page.getLastPostId().getText().then(function(id) {
      page.getAllSeePostButton().last().click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/post/' + id);
    });
    expect(page.getPostReference().getText()).toEqual('test reference');
    expect(page.getPostTitle().getText()).toEqual('test title2');
    expect(page.getPostExperience().getText()).toEqual('test experience');
    expect(page.getPostSalaryIndex().getText()).toEqual('test salaryIndex');
    expect(page.getPostContractType().getText()).toEqual('test contractType');
    expect(page.getPostDescription().getText()).toEqual('test description');
    expect(page.getPostImpotantNotes().getText()).toEqual('test importantNotes');
    expect(page.getPostWorkplace().getText()).toEqual('test workplace');
    expect(page.getPostOrganization().getText()).toEqual('test organization');
    expect(page.getPostWorkUnit().getText()).toEqual('test workUnit');
    // go to the page that contains all the posts available (recruiter 7)
    page.navigateToRecruiterPosts();
    // delete the new post
    browser.wait(protractor.ExpectedConditions.visibilityOf(page.getAllPosts().get(0)));
    page.getLastPostDeleteButton().click();
    // there should be 2 posts
    expect(page.getAllPosts().count()).toEqual(2);
  });
});
