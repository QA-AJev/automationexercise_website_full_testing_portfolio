/// <reference types="cypress" />

it('Test Case 2: Login User with correct email and password', () => {
    cy.loadUserWithDynamicEmail().then((userData) => {
        cy.visit('https://automationexercise.com/');
        cy.url().should('eq', 'https://automationexercise.com/');
        cy.get('body').should('be.visible');

        cy.signupUser(userData);
        cy.logoutUser();

        cy.get('input[data-qa="login-email"]').type(userData.email);
        cy.get('input[data-qa="login-password"]').type(userData.password);
        cy.get('button[data-qa="login-button"]').click();
        cy.contains(`Logged in as ${userData.name}`).should('be.visible');
        cy.deleteUserAccount();
        cy.contains('Logged in as').should('not.exist');

    });

    cy.log('Test case 2 end')


});