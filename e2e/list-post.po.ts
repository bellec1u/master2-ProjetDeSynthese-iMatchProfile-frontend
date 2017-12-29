import { browser, by, element } from 'protractor';

export class ListPostPage {
  navigateTo() {
    return browser.get('/recruiterPost/7');
  }
  getShowButton() {
    return element(by.css('.btn-primary'));
  }
  getEditButton() {
    return element(by.css('.btn-warning'));
  }
  getDeleteButton() {
    return element(by.css('.btn-danger'));
  }
}
