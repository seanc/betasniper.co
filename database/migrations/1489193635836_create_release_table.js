'use strict'

const Schema = use('Schema')

class ReleasesTableSchema extends Schema {

  up () {
    this.create('releases', (table) => {
      table.increments()
      table.string('version').unique()
      table.string('file')
      table.text('changelog', 'longtext')
      table.timestamps()
    })
  }

  down () {
    this.drop('releases')
  }

}

module.exports = ReleasesTableSchema
