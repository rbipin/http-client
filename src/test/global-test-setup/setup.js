const mockServer = require('../mock-server/mock-server-main');
module.exports = async () => {
  let server;
  server = new mockServer();
  server.startServer();
  global.server = server;
};
