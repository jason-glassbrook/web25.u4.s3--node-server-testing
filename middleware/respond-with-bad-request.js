/**************************************/

module.exports = respondWithBadRequest

/**************************************/

const respondWithError = require ('./respondWithError')

function respondWithBadRequest (errorMessage = 'bad request') {
  return respondWithError (400, errorMessage)
}
