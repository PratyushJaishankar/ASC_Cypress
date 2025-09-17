// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Login command
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').clear().type(username);
    cy.get('[data-test="password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click();
});

// Add item to cart command
Cypress.Commands.add('addItemToCart', (itemName) => {
    cy.contains('.inventory_item', itemName)   // Find the item container
        .find('button')                          // Find the button inside the container
        .click();
});
Cypress.Commands.add('removeItemFromCart', (itemName) => {
    cy.contains('.inventory_item', itemName)   // Find the item container
        .find('button')                          // Find the button inside the container
        .click();
});
