// cypress/e2e/login.cy.js
import UserLogin from '../pageActions/LoginUser';

describe('User Login on website - Automation Exercise', () => {
  let userData;
  let invalidUserData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data.validUser;
      invalidUserData = data.invalidUser;
    });
  });

  it('scenario to log in with an existing user successfully', () => {
    UserLogin.visit();
    UserLogin.accessUserLoginPage();
    UserLogin.userLogin(userData.email, userData.password);
    UserLogin.verifySuccessfulUserLogin(userData.name);
  });

  it('should show an error for invalid login', () => {
    UserLogin.visit();
    UserLogin.accessUserLoginPage();
    UserLogin.userLogin(invalidUserData.email, invalidUserData.password);
    UserLogin.verifyUserLoginError();
  });

  it('should login using custom command for user Login', () => {
    cy.loginUser(userData.email, userData.password);
  });
});
