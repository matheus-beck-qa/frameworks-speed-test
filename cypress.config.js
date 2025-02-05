import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    browser: 'chrome',
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
