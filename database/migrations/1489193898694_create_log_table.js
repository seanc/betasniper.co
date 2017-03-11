'use strict'

const Schema = use('Schema')

class LogsTableSchema extends Schema {

  up () {
    this.create('logs', (table) => {
      table.increments()
      table.integer('key_id')
      table.string('ip')
      table.timestamps()
    })
  }

  down () {
    this.drop('logs')
  }

}

module.exports = LogsTableSchema
