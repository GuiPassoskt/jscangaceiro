const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qa.hbatools.com.br/',
    // não vai limpar o estado da tela após cada it
    testIsolation: false,
  },
  video: false,
  videoCompression: false,
  screenshotOnRunFailure: true,
});
