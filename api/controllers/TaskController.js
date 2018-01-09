'use strict'

const Controller = require('trails/controller')

/**
 * @module TaskController
 * @description Task controller.
 */
module.exports = class TaskController extends Controller {

  async getAll(req, res) {

    let { Task } = this.app.orm

    try {

      let tasks = await Task.findAll({})

      return res.json({ flag:true, data: tasks, message: 'success', code: 200 })
    }
    catch(e) {
      return res.json({ flag: false, data: e, message: e.message, code: 500 })
    }
  }

  async create(req, res) {

    let { title, description } = req.body
    let { Task } = this.app.orm
    let { PrimusService } = this.app.services

    try {

      let tasks = await Task.create({ title, description })
      PrimusService.create('/task', tasks)
      return res.json({ flag:true, data: tasks, message: 'success', code: 200 })
    }
    catch(e) {
      return res.json({ flag: false, data: e, message: e.message, code: 500 })
    }
  }

  async update(req, res) {

    let { id } = req.params
    let model = req.body
    let { Task } = this.app.orm
    let { PrimusService } = this.app.services

    try {

      let tasks = await Task.update(model, { where: { id } } )
      return res.json({ flag:true, data: tasks, message: 'success', code: 200 })
    }
    catch(e) {
      return res.json({ flag: false, data: e, message: e.message, code: 500 })
    }
  }

  async remove(req, res) {

    let { id } = req.params
    let { Task } = this.app.orm
    let { PrimusService } = this.app.services

    try {

      let tasks = await Task.destroy({ where: { id }});
      return res.json({ flag:true, data: tasks, message: 'success', code: 200 })
    }
    catch(e) {
      return res.json({ flag: false, data: e, message: e.message, code: 500 })
    }
  }
}