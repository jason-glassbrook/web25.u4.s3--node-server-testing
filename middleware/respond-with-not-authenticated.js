/**************************************/

module.exports = respondWithNotAuthenticated

/**************************************/

const respondWithError = require ('./respondWithError')

function respondWithNotAuthenticated (errorMessage = 'request not authenticated') {
  return respondWithError (401, errorMessage)
}
