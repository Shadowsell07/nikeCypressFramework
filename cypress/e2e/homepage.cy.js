const homePage = require('../pages/HomePage');

describe('Nike Homepage', () => {
  beforeEach(() => {
    homePage.visit();
    cy.url().should('include', 'nike.com');
  });

  it('should display the search bar', () => {
    homePage.getSearchBar().should('exist');
  });

  it('should allow clicking the search bar', () => {
    homePage.clickSearchBar();
    homePage.getSearchBar().should('be.visible');
  });
});
