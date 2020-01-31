/**************************************/

module.exports = respondWithNotImplemented

/**************************************/

const respondWithError = require ('./respondWithError')

function respondWithNotImplemented (errorMessage = 'request not implemented') {
  return respondWithError (501, errorMessage)
}
