/***********************************************************
  ~/api - router
***********************************************************/

const {
  Router,
  middleware : {
    respondWithNotImplemented,
  },
} = require ('./__needs')
const _middleware = require ('./_middleware')

/**************************************/

const router = Router ()

router.use ('/api',
  _middleware (),
)

router.route ('*')
.all (respondWithNotImplemented ())

/**************************************/

module.exports = router
