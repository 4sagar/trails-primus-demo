'use strict'

const Model = require('trails/model')

/**
 * @module Task
 * @description Task model
 */
module.exports = class Task extends Model {

  static config () {

    return {
      options: {
        underscored: true,
      }
    }
  }

  static schema (app, Sequelize) {

    let { STRING, TEXT } = Sequelize
    return {
      title: {
        type: STRING
      },
      description: {
        type: TEXT
      }
    }
  }
}
