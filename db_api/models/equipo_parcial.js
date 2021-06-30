
'use strict';
const mongoose = require('../config/mongoose/conexion'),
    equipoParcial = require('./schemas').equipoParcial;

const models = {

    EquipoParcial: mongoose.model('valor_parcial', equipoParcial)

};

module.exports = models;
