'use strict'

const Key = use('App/Model/License')
const uuid = require('uuid/v4')

class KeysController {

  * index(request, response) {
    const keysRaw = yield Key.all()
    const keys = keysRaw.toJSON()

    yield response.sendView('admin/keys/index', { keys })
  }

  * create(request, response) {
    yield response.sendView('admin/keys/create')
  }

  * store(request, response) {
    const name = request.input('name')
    let aliases = request.input('aliases').trim()
    let ips = request.input('ips').trim()

    aliases = aliases.split('\n').map(alias => alias.trim())
    ips = ips.split('\n').map(ip => ip.trim()).join(';').trim()

    const names = [].concat([name], aliases).join('/').trim()
    const key = uuid().replace(/-/g, '')

    yield Key.create({ name: names, ips, key })

    response.route('keys:index')
  }

  * edit(request, response) {
    const id = request.param('id')
    const key = yield Key.findByOrFail('id', id)
    const keyJSON = key.toJSON()

    keyJSON.name = keyJSON.name.split('/')
    keyJSON.names = keyJSON.name.slice(1).join('\n')
    keyJSON.ips = keyJSON.ips.split(';')

    yield response.sendView('admin/keys/edit', { key: keyJSON })
  }

  * update(request, response) {
    const id = request.input('id')
    const name = request.input('name')
    let aliases = request.input('aliases').trim()
    let ips = request.input('ips').trim()

    aliases = aliases.split('\n').map(alias => alias.trim())
    ips = ips.split('\n').map(ip => ip.trim()).join(';').trim()

    const names = [].concat([name], aliases).join('/').trim()

    const key = yield Key.findByOrFail('id', id)
    key.name = names
    key.ips = ips
    yield key.save()

    response.route('keys:index')
  }

}

module.exports = KeysController
