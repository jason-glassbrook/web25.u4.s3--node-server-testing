/***********************************************************
  ~/ - router
***********************************************************/

const {
  Router,
  middleware : {
    respondWithNotImplemented,
  },
} = require ('./__needs')
const _routes = require ('./_routes')

/**************************************/

const router = Router ()

router.use ('/', _routes)

router.route ('/*')
.all (respondWithNotImplemented ())

/**************************************/

module.exports = router
