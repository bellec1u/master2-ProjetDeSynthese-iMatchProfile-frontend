import { HomePage } from './home.po';
import {browser} from 'protractor';

describe('imp home view', function() {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should click on the logo and redirect to home page', () => {
    page.navigateTo();
    page.getLogoNavbar().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
  });

  it('should click on the create candidate button and redirect to sign up form page', () => {
    page.navigateTo();
    page.getCreateCandidateButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/signup');
  });

  it('should click on the see post button and redirect to the post page', () => {
    page.navigateTo();
    page.getGoToPostButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/post/12');
  });

});
