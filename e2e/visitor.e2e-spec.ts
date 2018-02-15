import { HomePage } from './home.po';
import {browser, protractor} from 'protractor';
import {HeaderPage} from './header.po';
import {CandidatePage} from './candidate.po';
import {ListPostPage} from './list-post.po';
import {PostPage} from './post.po';
import {SignupPage} from './signup.po';
import {LoginPage} from './login.po';
import {CandidateUpdateModalPage} from './candidateUpdateModal.po';

describe('imp visitor - ', function() {
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

  it('should click on the logo and redirect to home page', () => {
    homePage.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    headerPage.getNavbarBrand().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
  });

  it('should click on the create candidate button and redirect to sign up candidate form page', () => {
    homePage.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    homePage.getCreateCandidateButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/signup?role=candidate');
  });

  it('should click on the create recruiter button and redirect to sign up recruiter form page', () => {
    homePage.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    homePage.getCreateRecruiterButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/signup?role=recruiter');
  });

  it('should click on the see post button and redirect to the post page', () => {
    homePage.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    homePage.getGoToPostButtons().first().click();
    expect(browser.getCurrentUrl()).toContain('http://localhost:49152/post/');
  });

  it('should go to the login page and go to the signup page', () => {
    homePage.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
    headerPage.getConnectionButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/login');
    loginPage.getSignupButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/signup?role=candidate');
  });

});
