const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/whwh', {useNewUrlParser: true,useUnifiedTopology: true});

module.exports = db;