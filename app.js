const server = require('pushstate-server');

server.start({
  port: 9000,
  directory: './build'
})