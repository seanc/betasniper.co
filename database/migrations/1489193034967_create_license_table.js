'use strict'

const Schema = use('Schema')

class LicensesTableSchema extends Schema {

  up () {
    this.createIfNotExists('keys', (table) => {
      table.increments()
      table.string('name')
      table.string('ips')
      table.uuid('key')
      table.timestamps()
    })
  }

  down () {
    this.drop('keys')
  }

}

module.exports = LicensesTableSchema
