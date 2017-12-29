import { browser, by, element } from 'protractor';

export class PostPage {
  navigateTo() {
    return browser.get('/post/9');
  }

  getDeleteButton() {
    return element(by.css('.btn-danger'));
  }

  getSeeButton() {
    return element(by.css('.btn-sm'));
  }
}
