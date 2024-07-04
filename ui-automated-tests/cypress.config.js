const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: 'https://api.realworld.io',
  },
  e2e: {
    baseUrl: 'https://conduit.realworld.how',
    env: {
      apiUrl: 'https://api.realworld.io',
    }
  },
});
