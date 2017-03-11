'use strict'

const Lucid = use('Lucid')

class Log extends Lucid {

  key () {
    return this.hasOne('App/Model/License', 'id', 'key_id')
  }

}

module.exports = Log
