'use strict'

class Auth {

  * handle (request, response, next) {

    const loggedIn = yield request.auth.check()

    if (!loggedIn) return response.redirect('/admin/login')

    yield next
  }

}

module.exports = Auth
