'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'HomeController.index')

Route.on('/admin/login').render('admin/login')
Route.post('/admin/login', 'AdminController.login')

Route.post('/download', 'DownloadController.download')

Route.group('admin', () => {
  Route.get('/', 'AdminController.dashboard')

  Route.get('/keys', 'KeysController.index').as('keys:index')
  Route.get('/keys/create', 'KeysController.create').as('keys:create:get')
  Route.post('/keys/create', 'KeysController.store').as('keys:create:post')
  Route.get('/keys/edit/:id', 'KeysController.edit').as('keys:edit:get')
  Route.post('/keys/edit', 'KeysController.update').as('keys:edit:post')

  Route.get('/releases', 'ReleasesController.index').as('releases:index')
  Route.get('/releases/create', 'ReleasesController.create').as('releases:create:get')
  Route.post('/releases/create', 'ReleasesController.store').as('releases:create:post')
  Route.get('/releases/edit/:id', 'ReleasesController.edit').as('releases:edit:get')
  Route.post('/releases/edit', 'ReleasesController.update').as('releases:edit:post')
  Route.get('/releases/delete/:id', 'ReleasesController.destroy').as('releases:delete')
}).prefix('/admin').middleware('auth')
