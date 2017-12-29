import { ListPostPage } from './list-post.po';
import {browser} from 'protractor';

describe('imp list-post view', function() {
  let page: ListPostPage;

  beforeEach(() => {
    page = new ListPostPage();
  });

  it('should click on the show post and redirect to post page', () => {
    page.navigateTo();
    page.getShowButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/post/9');
  });

  it('should click on the edit post and redirect to edit post page', () => {
    page.navigateTo();
    page.getEditButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/edit/9');
  });

  it('should click on the delete and redirect to list post page', () => {
    page.navigateTo();
    page.getDeleteButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/recruiterPost/7');
  });
});
