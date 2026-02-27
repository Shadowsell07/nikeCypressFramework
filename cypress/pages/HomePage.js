class HomePage {
  visit() {
    cy.visit('/');
  }

  getSearchBar() {
    return cy.get('[data-testid="visual-search-container"]');
  }

  clickSearchBar() {
    this.getSearchBar().click();
  }
}

module.exports = new HomePage();
