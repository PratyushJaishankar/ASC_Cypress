describe('SauceDemo Tests for Multiple Users', () => {
    it('runs tests for each user in users.json', () => {
        cy.fixture('users').then((users) => {
            users.forEach((user, index) => {
                if (index > 0) {
                    // Clear cookies, localStorage, and reload to start fresh
                    cy.clearCookies();
                    cy.clearLocalStorage();
                    // cy.reload(true);
                }
                cy.log(`Running tests for ${user.username}`);

                cy.visit('https://www.saucedemo.com/');
                cy.login(user.username, user.password);
                cy.wait(2000);
                    cy.url().should('satisfy', (url) => {
                        return url.includes('/inventory.html') || url === 'https://www.saucedemo.com/';
                    });
                    cy.url().then((url) => {
                        if (url.includes('/inventory.html')) {
                            // Login successful, proceed with cart actions
                            cy.addItemToCart('Sauce Labs Backpack');
                            cy.addItemToCart('Sauce Labs Bike Light');
                            cy.get('.shopping_cart_badge').should('contain', '2');
                            cy.wait(2000);
                            cy.removeItemFromCart('Sauce Labs Backpack');
                            cy.get('.shopping_cart_badge').should('contain', '1');
                        }
                    });
                    cy.url().then((url) => {
                        if (url === 'https://www.saucedemo.com/') {
                            // Login failed, assert error message
                            cy.get('[data-test="error"]').should('be.visible');
                            cy.log(`Login failed for ${user.username}`);
                        }
                    });
            });
        });
    });
});
