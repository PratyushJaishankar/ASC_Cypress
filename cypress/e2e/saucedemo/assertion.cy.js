require('cypress-xpath');

describe('Sauce Demo Spec', () => {
    it('saucedemo', function () {
        cy.visit('https://www.saucedemo.com/');

        // Login
        cy.get('[data-test="username"]').clear().type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Verify item exists
        cy.get('#add-to-cart-sauce-labs-backpack').should('exist');

        // Burger menu visibility toggle
        cy.get('.bm-menu-wrap').should('exist');
        cy.get('.bm-menu-wrap').should('not.be.visible');
        cy.get('.bm-burger-button').click();
        cy.get('.bm-menu-wrap').should('be.visible');

        // Text content checks
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.xpath('//*[@id="item_4_title_link"]/div').should('include.text', 'Sauce Labs');
        cy.get('.app_logo').should('not.have.text', 'Swag Labs Backpack');
        cy.xpath('//*[@id="item_0_title_link"]/div').should('contain', 'Bike Light');
        cy.xpath('//*[@id="inventory_container"]/div/div[2]/div[2]/div[2]/div')
            .invoke('text')
            .should('match', /^\$\d+\.\d{2}$/); // Regex check for price format

        // Attribute checks
        cy.get('#item_4_title_link').should('have.attr', 'href', '#');
        cy.get('#item_4_title_link').should('not.have.attr', 'target');

        // CSS class checks
        cy.get('[data-test="inventory-container"]').should('have.class', 'inventory_container');
        cy.get('[data-test="inventory-container"]').should('not.have.class', 'inactive');

        // Input value (checkbox)
        // cy.get('input[type="checkbox"]').should('exist').then(($checkbox) => {
        //   if ($checkbox.is(':checked')) {
        //     cy.wrap($checkbox).should('be.checked');
        //   } else {
        //     cy.wrap($checkbox).should('not.be.checked');
        //   }
        // });

        // Length checks
        cy.get('.app_logo').should('have.length', 1);
        cy.get('.app_logo').should('have.length.greaterThan', 0);

        // Chained assertions
        cy.get('#add-to-cart-sauce-labs-backpack')
            .should('be.visible')
            .and('have.text', 'Add to cart')
            .and('not.have.class', 'disabled');

        //asserting against a function
        cy.get('.inventory_item_name ').should(($list) => {
            console.log($list.length);
            expect($list).to.have.length(6);
            expect($list.first()).to.contain('Sauce Labs Backpack');
        });
        // URL checks
        cy.url().should('include', '/inventory.html');
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });
});