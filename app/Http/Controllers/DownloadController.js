'use strict'

const Release = use('App/Model/Release')
const Key = use('App/Model/License')
const extname = require('path').extname

class DownloadController {

  * download (req, res) {
    const key = req.input('key')
    const version = req.input('version')

    const releasesRaw = yield Release.pickInverse(5)
    const releases = releasesRaw.toJSON()

    try {
      const license = yield Key.findByOrFail('key', key)
      const release = yield Release.findByOrFail('version', version)

      const file = release.file
      const ext = extname(file)

      res.status(200).attachment(file, `BetaSniper_V${release.version}.${ext}`)
    } catch (e) {
      console.log(e)

      if (e.name === 'ModelNotFoundException') {
        yield res.sendView('home', { releases, error: 'Unable to find version or license' })
        return
      }

      yield res.sendView('home', { releases, error: 'An error occured' })

    }
  }

}

module.exports = DownloadController
