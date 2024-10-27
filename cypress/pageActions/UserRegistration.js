// cypress/pageActions/UserRegistration.js
import { faker } from '@faker-js/faker';

const randomUsername = faker.internet.userName();
const randomEmail = faker.internet.email();

class UserRegistration {
    visit() {
      cy.visit('/');
    }
  
    accessUserSignUpPage() {
      cy.contains('Signup / Login').click();
    }
  
    enterUserRegistrationDetails(user) {
      cy.get('input[data-qa="signup-name"]').type(randomUsername);
      cy.get('input[data-qa="signup-email"]').type(randomEmail);
      cy.get('button[data-qa="signup-button"]').click();
      cy.get('input#id_gender1').check();
      cy.get('input#password').type(user.password);
      cy.get('select#days').select(user.day);
      cy.get('select#months').select(user.month);
      cy.get('select#years').select(user.year);
      cy.get('input#first_name').type(user.firstName);
      cy.get('input#last_name').type(user.lastName);
      cy.get('input#address1').type(user.address);
      cy.get('select#country').select(user.country);
      cy.get('input#state').type(user.state);
      cy.get('input#city').type(user.city);
      cy.get('input#zipcode').type(user.zipcode);
      cy.get('input#mobile_number').type(user.mobileNumber);
    }
  
    createUserAccount() {
      cy.get('button[data-qa="create-account"]').click();
    }
  
    verifyUserAccountCreation() {
      cy.contains('Account Created!').should('be.visible');
    }
  }
  
  export default new UserRegistration();
  