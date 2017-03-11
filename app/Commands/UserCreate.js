'use strict'

const Command = use('Command')
const Hash = use('Hash')
const User = use('App/Model/User')

class Createuser extends Command {

  get signature () {
    return 'user:create {username:Username of user} {password}'
  }

  get description () {
    return 'Create a user'
  }

  * handle (args, options) {
    const username = args.username;
    const password = yield Hash.make(args.password);
    const existing = yield User.findBy('username', username)

    if (existing) {
      this.error(`username ${username} is already taken`)
      process.exit(0)
    }

    const user = yield User.create({
      username,
      password
    })

    if (user) {
      this.success(`user ${username} created`)
      process.exit(0)
    }

    this.error('an error occurred')
  }

}

module.exports = Createuser
