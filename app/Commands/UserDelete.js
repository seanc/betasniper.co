
'use strict'

const Command = use('Command')
const User = use('App/Model/User')

class UserDelete extends Command {

  get signature () {
    return 'user:delete {username:Username of user}'
  }

  get description () {
    return 'Delete a user'
  }

  * handle (args, options) {
    const username = args.username
    const user = yield User.findBy('username', username)

    if (!user) {
      this.error(`user ${username} does not exist`)
      process.exit(0)
    }

    yield user.delete()
    this.success(`user ${username} deleted`)
    process.exit(0)
  }

}

module.exports = UserDelete
