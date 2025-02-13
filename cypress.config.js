import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: false,
    browser: 'chrome',
    specPattern: 'tests/*.cy.js',
    setupNodeEvents(on, config) {},
  },
  video: false,
  reporter: 'dot',
});
