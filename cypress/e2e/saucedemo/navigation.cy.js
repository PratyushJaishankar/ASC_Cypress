describe('Sauce Demo Spec', () => {
    it('saucedemo', function () {
        cy.visit('https://www.saucedemo.com/');
        cy.reload();

        // Login
        cy.get('[data-test="username"]').clear().type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        // Click the product
        cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack').click();

        // Assert navigation happened
        cy.url().should('include', '/inventory-item.html');

        // Go back
        cy.go('back');
        cy.url().should('include', '/inventory.html');

        // Go forward
        cy.go('forward');
        cy.url().should('include', '/inventory-item.html');

    });
});