const mongoose = require('mongoose');
// const Location = require('./location');
//const User = require('./user');

const eventSchema = new mongoose.Schema({
  name: {type: String, required: true},
  host: {type: String}, //required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  location:{type: String, required: true},
  type: {type: String, required: true},
  about:{type: String, required: true},
  usersAttending: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
