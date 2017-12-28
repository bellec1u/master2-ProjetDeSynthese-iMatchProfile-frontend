import { PostPage } from './post.po';
import {browser} from 'protractor';

describe('imp home view', function() {
  let page: PostPage;

  beforeEach(() => {
    page = new PostPage();
  });

  it('should click on the see profil and redirect to profil page', () => {
    page.navigateTo();
    page.getSeeButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/profile/1');
  });

  it('should click on the delete and redirect to home page', () => {
    page.navigateTo();
    page.getDeleteButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/home');
  });
});
