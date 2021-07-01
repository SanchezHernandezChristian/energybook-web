
'use strict';
const mongoose = require('../config/mongoose/conexion'),
    devices = require('./schemas').devices;

const models = {

    Devices: mongoose.model('equipos', devices)

};

module.exports = models;
