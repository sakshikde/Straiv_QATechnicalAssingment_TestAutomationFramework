// cypress/pageObjects/LoginPage.js
class UserLogin {
    visit() {
      cy.visit('/');
    }
  
    accessUserLoginPage() {
      cy.contains('Signup / Login').click();
    }
  
    userLogin(email, password) {
      cy.get('input[data-qa="login-email"]').type(email);
      cy.get('input[data-qa="login-password"]').type(password);
      cy.get('button[data-qa="login-button"]').click();
    }
  
    verifySuccessfulUserLogin(username) {
      cy.contains(`Logged in as ${username}`).should('be.visible');
    }
  
    verifyUserLoginError() {
      cy.contains('Your email or password is incorrect!').should('be.visible');
    }
  }
  
  export default new UserLogin();
  