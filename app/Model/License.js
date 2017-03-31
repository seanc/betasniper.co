'use strict'

const Lucid = use('Lucid')

class License extends Lucid {

  static get table () {
    return 'keys'
  }

  static get connection () {
    return 'license_mysql'
  }

}

module.exports = License
