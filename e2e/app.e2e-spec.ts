import { AppPage } from './app.po';

describe('angular-weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('e2e home page test', () => { // this test can be removed.
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('AgileSphere coding test - The Weather App');
  });
});
