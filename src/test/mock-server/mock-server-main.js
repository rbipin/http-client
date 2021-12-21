const jsonServer = require('json-server');
const path = require('path');

class MockServer {
  constructor(portNumber = null) {
    this.port = portNumber || 8980;
    this.mockServer = jsonServer.create();
  }

  startServer() {
    const router = jsonServer.router(path.join(__dirname, 'mock-db.json'));
    const middlewares = jsonServer.defaults();
    this.mockServer.use(middlewares);
    this.mockServer.use(router);
    this.mockServerInstance = this.mockServer.listen(this.port, () => {
      console.log('JSON Server is running');
    });
  }
  stopServer() {
    this.mockServerInstance.close(() => {
      console.log('JSON Server is stopped');
    });
  }
}

module.exports = MockServer;
