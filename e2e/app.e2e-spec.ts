import { RecipesAngularAppPage } from './app.po';

describe('recipes-angular-app App', function() {
  let page: RecipesAngularAppPage;

  beforeEach(() => {
    page = new RecipesAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
