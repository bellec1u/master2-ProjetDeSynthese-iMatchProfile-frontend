import { AppPage } from './app.po';

describe('i-match-profile-front App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should test if 1 = 1', () => {
    page.navigateTo();
    expect('1').toEqual('1');
  });

});
