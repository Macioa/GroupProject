const mongoose = require('mongoose');
const Location = require('./location');
const User = require('./user');

const eventSchema = mongoose.Schema({
  name: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  location: [Location.schema],
  type: {type: String, required: true},
  about:{type: String, required: true},
  usersAttending: Number,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
