const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  phone: {type: String, required: false},
  website: {type: String, required: false}
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;