const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vjymyj', 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    projectId: 'vjymyj', // project id from Cypress Dashboard
    video: true, // recording video of the test run
    screenshotOnRunFailure: true // taking screenshots on failures
  }
});
