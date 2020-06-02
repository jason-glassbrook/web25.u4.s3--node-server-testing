const request = require ('supertest')
const server = require ('./server.js')

describe ('server', () => {

  test (`runs tests`, () => {

    expect (true) .toBe (true)

  })

  describe ('GET /', () => {

    test (`responds with status 200 OK`, () => {

      return (
        request (server) .get ('/')
        .then ((ro) => {
          expect (ro.status) .toEqual (501)
        })
      )

    })

  })

  describe ('GET /api', () => {

    test (`responds with status 200 OK`, () => {

      return (
        request (server) .get ('/api')
        .then ((ro) => {
          expect (ro.status) .toEqual (200)
        })
      )

    })

    test (`responds with JSON`, () => {

      return (
        request (server) .get ('/api')
        .then ((ro) => {
          expect (ro.type) .toMatch (/json/i)
        })
      )

    })

    test (`responds with body like { 'message' : 'hello world' }`, () => {

      return (
        request (server) .get ('/api')
        .then ((ro) => {
          expect (ro.body) .toMatchObject ({ 'message' : 'hello world' })
        })
      )

    })

  })

  describe ('GET /api/foo', () => {

    test (`responds with status 501 NOT IMPLEMENTED`, () => {

      return (
        request (server) .get ('/api/foo')
        .then ((ro) => {
          expect (ro.status) .toEqual (501)
        })
      )

    })

    test (`responds with JSON`, () => {

      return (
        request (server) .get ('/api/foo')
        .then ((ro) => {
          expect (ro.type) .toMatch (/json/i)
        })
      )

    })

    test (`responds with body like { 'message' : 'hello world' }`, () => {

      return (
        request (server) .get ('/api/foo')
        .then ((ro) => {
          expect (ro.body.error) .toBeDefined ()
          expect (ro.body.error.message) .toBeDefined ()
        })
      )

    })

  })

})
