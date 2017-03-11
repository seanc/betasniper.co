'use strict'

const Lucid = use('Lucid')

class License extends Lucid {

  static get table () {
    return 'keys'
  }

}

module.exports = License
