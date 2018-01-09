'use strict'

const Service = require('trails/service')
const Emitter = require('primus-emitter')
const Rooms = require('primus-rooms')

/**
 * @module PrimusService
 * @description Primus service
 */
module.exports = class PrimusService extends Service {

  init() {

    // add emitter to Primus
    this.app.sockets.use('emitter', Emitter);
    // add rooms to Primus
    this.app.sockets.use('rooms', Rooms);

    this.app.sockets.on('connection', (spark)=> {
      console.log('connected');

      spark.on('join', function(room) {
        console.log(spark.id, 'joined', room);
        spark.join(room);
      });

      spark.on('leave', function(room) {
        console.log(spark.id, 'left', room);
        spark.leave(room);
      });
      spark.on('ping', function(msg) {
        console.log('ping from', spark.id, msg);
      });
    });
  }

  create(room, data) {
    this.app.sockets.room(room).send('create', data);
  }

  update(room, data) {
    this.app.sockets.room(room).send('update', data);
  }

  remove(room, data) {
    this.app.sockets.room(room).send('remove', data);
  }
}