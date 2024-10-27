# Straiv_QATechnicalAssingment_TestAutomationFramework
* POM is followed while developing this test automation framework. Basic folder and file explanation is as follows:
* faker library is used to generate random email address and names for signup to avoid already registered user error.

* Execution of testcases is tracked on Cypress Dashboard by connecting dashboard and actual project with project id.
* Video recording of the execution is done and stored in cypress/videos folder as evidences, but the same has not been checked in due to standard rules
  
1. cypress/e2e folder: testcases for new user account creation and existing user login
2. cypress/fixtures: test data file
3. cypress/pageActions: actual logic of operations to be done for signup and login functionalities
4. cypress/support: custom command file, here created for login function as it can be used further for various functionalities as initial step

