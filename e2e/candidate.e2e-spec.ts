import { CandidatePage } from './candidate.po';
import {browser, protractor} from 'protractor';
import {HomePage} from './home.po';
import {SignupPage} from './signup.po';
import {HeaderPage} from './header.po';
import {ListPostPage} from './list-post.po';
import {PostPage} from './post.po';
import {LoginPage} from './login.po';
import {CandidateUpdateModalPage} from './candidateUpdateModal.po';

describe('imp candidate - ', function() {
  let headerPage: HeaderPage;
  let homePage: HomePage;
  let candidatePage: CandidatePage;
  let candidateUpdateModalPage: CandidateUpdateModalPage;
  let listPostPage: ListPostPage;
  let postPage: PostPage;
  let loginPage: LoginPage;
  let signupPage: SignupPage;


  beforeEach(() => {
    headerPage = new HeaderPage();
    homePage = new HomePage();
    candidatePage = new CandidatePage();
    candidateUpdateModalPage = new CandidateUpdateModalPage();
    listPostPage = new ListPostPage();
    postPage = new PostPage();
    loginPage = new LoginPage();
    signupPage = new SignupPage();
  });

  it('should test to login and logout a candidate', () => {
    // login
    loginPage.navigateTo();
    loginPage.getEmail().sendKeys('john.doe@gmail.com');
    loginPage.getPassword().sendKeys('candidate');
    loginPage.getLoginButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    expect(headerPage.getMyProfileButton().isPresent()).toBe(true);

    // logout
    headerPage.getUnconnectionButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    expect(headerPage.getMyProfileButton().isPresent()).toBe(false);
  });

  it('should create a new candidate account, edit, suspend, unsuspend and delete it', () => {
    // create
    homePage.navigateTo();
    homePage.getCreateCandidateButton().click();
    signupPage.getLastname().sendKeys('nom');
    signupPage.getFirstname().sendKeys('prenom');
    signupPage.getEmail().sendKeys('nom.prenom@test.fr');
    signupPage.getPassword().sendKeys('azerty');
    signupPage.getPasswordVerif().sendKeys('azerty');
    signupPage.getSignupButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    expect(headerPage.getMyProfileButton().isPresent()).toBe(true);

    headerPage.getMyProfileButton().click();
    expect(browser.getCurrentUrl()).toContain('http://localhost:49152/profile/');

    expect(candidatePage.getFirstnameAndLastname().getText()).toEqual('prenom nom');

    // update
    candidatePage.getOptionsMenuButton().click();
    candidatePage.getEditProfileButton().click();
    candidateUpdateModalPage.getFirstname().sendKeys('2');
    candidateUpdateModalPage.getUpdateButton().click();
    expect(candidatePage.getFirstnameAndLastname().getText()).toEqual('prenom2 nom');

    // suspend
    candidatePage.getOptionsMenuButton().click();
    candidatePage.getSuspendProfileButton().click();
    candidatePage.getValidSuspendButton().click();
    expect(candidatePage.getSuspendText().isPresent()).toBe(true);

    // unsuspend
    candidatePage.getOptionsMenuButton().click();
    candidatePage.getUnsuspendProfileButton().click();
    candidatePage.getValidUnsuspendButton().click();
    expect(candidatePage.getSuspendText().isPresent()).toBe(false);

    // delete
    candidatePage.getOptionsMenuButton().click();
    candidatePage.getDeleteProfileButton().click();
    candidatePage.getValidDeleteButton().click();
    expect(browser.getCurrentUrl()).toContain('http://localhost:49152/home');
    expect(headerPage.getMyProfileButton().isPresent()).toBe(false);
  });

});
