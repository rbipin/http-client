const { defaults } = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testEnvironment: "node",
  globalSetup: './src/test/global-test-setup/setup.js',
  globalTeardown: './src/test/global-test-setup/teardown.js',
  // ...
};
