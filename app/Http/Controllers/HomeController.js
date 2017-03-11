'use strict'

const Release = use('App/Model/Release')

class HomeController {

  * index (request, response) {
    const releasesRaw = yield Release.pickInverse(5)
    const releases = releasesRaw.toJSON()
    yield response.sendView('home', { releases })
  }

}

module.exports = HomeController
