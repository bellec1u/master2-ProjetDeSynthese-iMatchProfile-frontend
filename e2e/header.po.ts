import { browser, by, element } from 'protractor';

export class HeaderPage {

  getNavbarBrand() {
    return element(by.id('navbarBrand'));
  }

  getMyPostButton() {
    return element(by.id('myPostsButton'));
  }

  getMyProfileButton() {
    return element(by.id('myProfileButton'));
  }

  getConnectionButton() {
    return element(by.id('connectionButton'));
  }

  getUnconnectionButton() {
    return element(by.id('unconnectionButton'));
  }

}
