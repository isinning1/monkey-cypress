const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "monkey_testing-example",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
