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
});
