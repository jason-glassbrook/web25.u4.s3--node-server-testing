/**************************************/

module.exports = respondWithNotFound

/**************************************/

const respondWithError = require ('./respondWithError')

function respondWithNotFound (errorMessage = 'resource not found') {
  return respondWithError (404, errorMessage)
}
