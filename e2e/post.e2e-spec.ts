import { PostPage } from './post.po';
import {browser, by, element, protractor} from 'protractor';
import {SignupPage} from './signup.po';
import {CandidatePage} from './candidate.po';
import {ListPostPage} from './list-post.po';
import {HomePage} from './home.po';
import {CandidateUpdateModalPage} from './candidateUpdateModal.po';
import {LoginPage} from './login.po';
import {HeaderPage} from './header.po';
import {PostUpdateModalPage} from './postUpdateModal.po';

describe('imp recruiter - ', function() {

  let headerPage: HeaderPage;
  let homePage: HomePage;
  let candidatePage: CandidatePage;
  let candidateUpdateModalPage: CandidateUpdateModalPage;
  let listPostPage: ListPostPage;
  let postPage: PostPage;
  let postUpdateModalPage: PostUpdateModalPage;
  let loginPage: LoginPage;
  let signupPage: SignupPage;

  beforeEach(() => {
    headerPage = new HeaderPage();
    homePage = new HomePage();
    candidatePage = new CandidatePage();
    candidateUpdateModalPage = new CandidateUpdateModalPage();
    listPostPage = new ListPostPage();
    postPage = new PostPage();
    postUpdateModalPage = new PostUpdateModalPage();
    loginPage = new LoginPage();
    signupPage = new SignupPage();
  });

  it('should test to login and logout a recruiter', () => {
    // login
    loginPage.navigateTo();
    loginPage.getEmail().sendKeys('mr.recruiter@gmail.com');
    loginPage.getPassword().sendKeys('recruiter');
    loginPage.getLoginButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    expect(headerPage.getMyPostButton().isPresent()).toBe(true);

    // logout
    headerPage.getUnconnectionButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    expect(headerPage.getMyPostButton().isPresent()).toBe(false);
  });

  it('should create a new recruiter account, see all his posts, create a new post, edit and delete it', () => {
    // create
    homePage.navigateTo();
    homePage.getCreateRecruiterButton().click();
    browser.waitForAngular();
    signupPage.getCompany().sendKeys('CompanyTest');
    signupPage.getLastname().sendKeys('nom');
    signupPage.getFirstname().sendKeys('recruiter');
    signupPage.getEmail().sendKeys('nom.recruiter@test.fr');
    signupPage.getPassword().sendKeys('azerty');
    signupPage.getPasswordVerif().sendKeys('azerty');
    signupPage.getSignupButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    expect(headerPage.getMyPostButton().isPresent()).toBe(true);

    // see 0 posts
    headerPage.getMyPostButton().click();
    expect(listPostPage.getAllTitlePost().count()).toEqual(0);

    // create a new post
    listPostPage.getAddPostButton().click();
    postUpdateModalPage.getReference().sendKeys('test reference');
    postUpdateModalPage.getTitle().sendKeys('test title');
    postUpdateModalPage.getExperience().sendKeys('test experience');
    postUpdateModalPage.getSalaryIndex().sendKeys('test salaryIndex');
    postUpdateModalPage.getMinSalary().sendKeys(1);
    postUpdateModalPage.getMaxSalary().sendKeys(2);
    postUpdateModalPage.getContractType().sendKeys('test contractType');
    postUpdateModalPage.getDescription().sendKeys('test description');
    postUpdateModalPage.getImportantNotes().sendKeys('test importantNotes');
    postUpdateModalPage.getWorkplace().sendKeys('test workplace');
    postUpdateModalPage.getOrganization().sendKeys('test organization');
    postUpdateModalPage.getWorkUnit().sendKeys('test workUnit');
    postUpdateModalPage.getAddSkillButton().click();
    postUpdateModalPage.getSendNewPostButton().click();
    expect(postPage.getTitle().getText()).toEqual('test title');

    // see 1 post
    headerPage.getMyPostButton().click();
    expect(listPostPage.getAllTitlePost().count()).toEqual(1);

    // update the post
    listPostPage.getAllUpdatePostButton().first().click();
    postUpdateModalPage.getTitle().sendKeys('2');
    postUpdateModalPage.getSendNewPostButton().click();
    expect(postPage.getTitle().getText()).toEqual('test title2');

    // see 1 post
    headerPage.getMyPostButton().click();
    expect(listPostPage.getAllTitlePost().count()).toEqual(1);

    // delete the post
    listPostPage.getAllDeletePostButton().first().click();

    // see 0 posts
    headerPage.getMyPostButton().click();
    expect(listPostPage.getAllTitlePost().count()).toEqual(0);

    // logout
    headerPage.getUnconnectionButton().click();
    expect(headerPage.getMyPostButton().isPresent()).toBe(false);
  });

});
