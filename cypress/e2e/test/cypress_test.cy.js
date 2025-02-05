describe('SauceDemo Checkout Test', () => {
  it('Logs in, adds item to cart, and completes checkout', () => {
    const startTime = Date.now();
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item:first-child button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    cy.then(() => {
      const endTime = Date.now();
      const executionTime = ((endTime - startTime) / 1000).toFixed(2);
      cy.task('log', `🔥 Cypress Test Execution Time: ${executionTime} seconds`);
    });
  });
});
