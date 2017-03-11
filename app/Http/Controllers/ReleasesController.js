'use strict'

const Release = use('App/Model/Release')

class ReleasesController {

  * index(request, response) {
    const releasesRaw = yield Release.all()
    const releases = releasesRaw.toJSON()

    yield response.sendView('admin/releases/index', { releases })
  }

  * create(request, response) {
    yield response.sendView('admin/releases/create')
  }

  * store(request, response) {
    const version = request.input('version')
    const file = request.input('path')
    const changelog = request.input('changelog')

    yield Release.create({ version, file, changelog })

    response.route('releases:index')
  }

  * edit(request, response) {
    const id = request.param('id')
    const release = yield Release.findOrFail(id)

    yield response.sendView('admin/releases/edit', { release })
  }

  * update(request, response) {
    const id = request.input('id')
    const version = request.input('version')
    const file = request.input('path')
    const changelog = request.input('changelog')

    const release = yield Release.findOrFail(id)
    release.version = version
    release.file = file
    release.changelog = changelog
    yield release.save()

    response.route('releases:index')
  }

  * destroy(request, response) {
    const id = request.param('id')
    const release = yield Release.findOrFail(id)
    yield release.delete()

    response.route('releases:index')
  }

}

module.exports = ReleasesController
