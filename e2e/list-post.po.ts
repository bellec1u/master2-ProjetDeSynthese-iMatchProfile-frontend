import { browser, by, element } from 'protractor';

export class ListPostPage {

  navigateTo(id: number) {
    return browser.get('/recruiterPost/' + id);
  }

  getAddPostButton() {
    return element(by.id('addPostButton'));
  }

  getAllTitlePost() {
    return element.all(by.id('postTitle'));
  }

  getAllShowPostButton() {
    return element.all(by.id('showPostButton'));
  }

  getAllUpdatePostButton() {
    return element.all(by.id('updatePostButton'));
  }

  getAllDeletePostButton() {
    return element.all(by.id('deletePostButton'));
  }

}
