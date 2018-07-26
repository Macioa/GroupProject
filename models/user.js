const mongoose = require('mongoose');
//const Location = require('./location');
const Event = require('./event');

const userSchema = mongoose.Schema({

username: {type: String},// required: true},
password: {type: String},// required: true, minlength: 8, maxlength: 16, trim: true},
hostedEvents: [Event.schema],
attendedEvents: [Event.schema],
firstName: {type: String},// required: false},
lastName: {type: String},// required: false},
image: String,
emailAddress: {type: String},// required: false},
organization: String,
});


const User = mongoose.model('User', userSchema)

module.exports = User;
