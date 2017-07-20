import { BhangraAppPage } from './app.po';

describe('bhangra-app App', function() {
  let page: BhangraAppPage;

  beforeEach(() => {
    page = new BhangraAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
