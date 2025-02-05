const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);  // This will print to the terminal
          return null;  // Return null since no value is needed
        }
      });
    },
  },
  video: false,  // Disables video recording to avoid extra logs
  reporter: 'dot',
});
