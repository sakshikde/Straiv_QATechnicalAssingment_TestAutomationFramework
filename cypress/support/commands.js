// ***********************************************
// This is a custom command for logging in new user with an already resgitered account.

Cypress.Commands.add('loginUser', (email, password) => {
    cy.visit('/');
    cy.contains('Signup / Login').click();
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
  });