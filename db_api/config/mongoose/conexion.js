'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/olus_db');

module.exports = mongoose;