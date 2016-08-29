import { WafflePage } from './app.po';

describe('waffle App', function() {
  let page: WafflePage;

  beforeEach(() => {
    page = new WafflePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
