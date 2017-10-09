import { Angular4UniversalSkeletonProjectPage } from './app.po';

describe('angular4-universal-skeleton-project App', () => {
  let page: Angular4UniversalSkeletonProjectPage;

  beforeEach(() => {
    page = new Angular4UniversalSkeletonProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
