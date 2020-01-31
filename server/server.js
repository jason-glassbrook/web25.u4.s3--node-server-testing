/***********************************************************
  server
***********************************************************/

const { Server, routes } = require ('./__needs')
const middleware = require ('./_middleware')

/**************************************/

const server = Server ()

server.use ('/',
  middleware (),
  routes,
)

/**************************************/

module.exports = server
