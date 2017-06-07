import { AngularDSMPage } from './app.po';

describe('angular-dsm App', () => {
  let page: AngularDSMPage;

  beforeEach(() => {
    page = new AngularDSMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
