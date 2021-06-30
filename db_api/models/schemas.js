
'use strict';
const mongoose = require('../config/mongoose/conexion'),
    Schema = mongoose.Schema;

const schemas = {

    equipoTotal: new Schema({
        id: { type: String },
        value: { type: String },
    }),

    equipoParcial: new Schema({
        id: { type: String },
        value: { type: String },
        datetime: { type: String },
    })

};

module.exports = schemas;
