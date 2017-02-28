import { LastproyectPage } from './app.po';

describe('lastproyect App', function() {
  let page: LastproyectPage;

  beforeEach(() => {
    page = new LastproyectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
