const mongoose = require('mongoose');
const Location = require('./location');
const Event = require('./event');


const userSchema = mongoose.Schema({

username: {type: String, required: true},
password: {type: String, required: true, minlength: 8, maxlength: 16, trim: true},
attendingEvent: [Event.schema],
createdEvent: [Event.schema],
firstName: {String, required: true},
lastName: {String, required: true},
image: String,
emailAddress: {type: String, required: true},
organization: String,
});


//QUESTION 1: should we put {attenindEvent: Boolean, required: true}, in the Event Schema? Also should we put {createdEvent: Boolean, required: true} in the Event Schema?




const User = mongoose.model('User', userSchema)

module.exports = User;
