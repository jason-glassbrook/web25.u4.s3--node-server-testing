/**************************************/

module.exports = respondWithNotAuthorized

/**************************************/

const respondWithError = require ('./respondWithError')

function respondWithNotAuthorized (errorMessage = 'request not authorized') {
  return respondWithError (403, errorMessage)
}
