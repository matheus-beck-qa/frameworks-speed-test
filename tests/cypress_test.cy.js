import { testConfig } from '../testConfig.js';
const testRuns = Cypress.env('TEST_RUNS') || 10;

describe('SauceDemo Checkout Test', () => {
  for (let i = 0; i < testRuns; i++) {
    it(`Test Run #${i + 1}`, () => {
      cy.visit(testConfig.url);
      cy.get(testConfig.selectors.usernameField).type(testConfig.username);
      cy.get(testConfig.selectors.passwordField).type(testConfig.password);
      cy.get(testConfig.selectors.loginButton).click();
      cy.get(testConfig.selectors.inventoryList).should('be.visible')
      cy.get(testConfig.selectors.firstItemButton).click();
      cy.get(testConfig.selectors.cartLink).click();
      cy.get(testConfig.selectors.checkoutButton).click();
      cy.get(testConfig.selectors.firstNameField).type(testConfig.firstName);
      cy.get(testConfig.selectors.lastNameField).type(testConfig.lastName);
      cy.get(testConfig.selectors.postalCodeField).type(testConfig.postalCode);
      cy.get(testConfig.selectors.continueButton).click();
      cy.get(testConfig.selectors.finishButton).click();
      cy.get(testConfig.selectors.completeHeader).should('have.text', 'Thank you for your order!');
    });
  }
});
