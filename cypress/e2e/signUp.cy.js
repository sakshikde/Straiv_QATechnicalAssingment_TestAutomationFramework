// cypress/e2e/signUp.cy.js
import UserRegistration from '../pageActions/UserRegistration';

describe('User Registration on Website - Automation Exercise', () => {
  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data.validUser;
    });
  });

  it('scenario to register a new user successfully', () => {
    UserRegistration.visit();
    UserRegistration.accessUserSignUpPage();
    UserRegistration.enterUserRegistrationDetails(userData);
    UserRegistration.createUserAccount();
    UserRegistration.verifyUserAccountCreation();
  });
});
