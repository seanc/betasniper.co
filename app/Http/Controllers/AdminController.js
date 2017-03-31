'use strict'

class AdminController {

  * login (req, res) {
    const username = req.input('username')
    const password = req.input('password')

    try {
      yield req.auth.attempt(username, password)
      res.redirect('/admin')
      // TODO: write email
    } catch (e) {
      yield req.withOut('password').andWith({ error: 'Incorrect username or password' }).flash()
      res.redirect('back')
    }
  }

  * dashboard (req, res) {
    yield res.sendView('admin/dashboard')
  }

}

module.exports = AdminController
