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

router.route ('/api')
.get ((ri, ro) => {

  ro
  .status (200)
  .json ({
    'message' : 'hello world',
  })

})

router.route ('/api/*')
.all (respondWithNotImplemented ())

/**************************************/

module.exports = router
