/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  // Tasks APIs
  {
    method: [ 'GET' ],
    path: '/api/v1/task',
    handler: 'TaskController.getAll'
  },
  {
    method: [ 'POST' ],
    path: '/api/v1/task',
    handler: 'TaskController.create'
  },
  {
    method: [ 'PUT' ],
    path: '/api/v1/task/:id',
    handler: 'TaskController.update'
  },
  {
    method: [ 'DELETE' ],
    path: '/api/v1/task/:id',
    handler: 'TaskController.remove'
  },
]
