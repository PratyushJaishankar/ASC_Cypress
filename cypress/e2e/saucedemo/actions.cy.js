Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe('Actions', () => {
  it('Type and Clear', () => {
    cy.visit('https://practice.expandtesting.com/');
    cy.get('a.btn.btn-outline-primary').contains('Try it out').first().click();

    // Login

    cy.get('#input-number').clear().type('31415').should('have.value', '31415');
    cy.get('#input-number').clear().type('55555').should('have.value', '55555');
    cy.get('#input-text').clear().type('random').should('have.value', 'random');
    cy.get('#input-password', { timeout: 10000 }).clear().type('ggwp').should('have.value', 'ggwp');
  });
  it('Checkbox', () => {
    cy.visit('https://practice.expandtesting.com/checkboxes');
    cy.wait(2000);
    cy.get('#checkbox1').check().should('be.checked');
    cy.wait(2000);
    cy.get('#checkbox2').check().should('be.checked');
    cy.wait(2000);
    cy.get('#checkbox1').uncheck().should('not.be.checked');
    cy.wait(2000);
    cy.get('#checkbox2').uncheck().should('not.be.checked');
    cy.wait(2000);
  });
  it('Radio Checkbox', () => {
    cy.visit('https://practice.expandtesting.com/radio-buttons');
    cy.wait(2000);
    cy.get('#blue').check().should('be.checked');
    cy.wait(2000);
    cy.get('#red').check().should('be.checked');
    cy.wait(2000);
    cy.get('#yellow').check().should('be.checked');
    cy.wait(2000);
    cy.get('#black').check().should('be.checked');
    cy.wait(2000);
  });
  it('Select', () => {
    cy.visit('https://practice.expandtesting.com/locators');
    cy.get('#countrySelect').select('Japan').should('have.value', 'Japan');
    cy.get('#countrySelect').select('France').should('have.value', 'France');
  });
  it('Mouse', () => {
    cy.visit('https://practice.expandtesting.com/tooltips');
    cy.get('.tooltip').should('not.exist');
    cy.get('#btn1').trigger('mouseover');
    cy.wait(200); // let the tooltip render
    cy.get('.tooltip').should('be.visible');
  });
});