const mongoose = require('mongoose');
const Location = require('./location');
const Event = require('./event');


const userSchema = mongoose.Schema({

username: {type: String, required: true},
password: {type: String, required: true, minlength: 8, maxlength: 16, trim: true},
hostedEvents: [Event.schema],
attendedEvents: [Event.schema],
firstName: {type: String, required: true},
lastName: {type: String, required: true},
image: String,
emailAddress: {type: String, required: true},
organization: String,
});


//QUESTION 1: should we put {attendingEvent: Boolean, required: true}, in the Event Schema? Also should we put {createdEvent: Boolean, required: true} in the Event Schema?




const User = mongoose.model('User', userSchema)

module.exports = User;
