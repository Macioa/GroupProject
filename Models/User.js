const mongoose = require('mongoose');
const Location = require('./location');
const Event = require('./event');


const userSchema = mongoose.Schema({

username: {type: String, required: true},
password: {type: String, required: true},
createdEvent: [Event.schema],
attendingEvent: [Event.schema]
});



const User = mongoose.model('User', userSchema)

module.exports = User;
