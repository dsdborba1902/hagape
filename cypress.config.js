const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  charts: true,
  overwrite: false,
  html: true,
  json: true,
  embeddedScreenshots: false,
  saveAllAttempts: true,
  reportDir: 'cypress/report/mochawesome-report',

  e2e: {
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
