const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  location: {type: String, required: true},
  type: {type: String, required: true},
  about:{type: String, required: true},
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
