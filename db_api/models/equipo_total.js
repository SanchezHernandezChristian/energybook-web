
'use strict';
const mongoose = require('../config/mongoose/conexion'),
    equipoTotal = require('./schemas').equipoTotal;

const models = {

    EquipoTotal: mongoose.model('valor_total', equipoTotal)

};

module.exports = models;
