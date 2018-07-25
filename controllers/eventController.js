const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const Event = require('../models/event');
const User = require('mongoose').model('User')
//const Location = require('../Models/Location');
console.log(chalk.green('eventController connected'));

//////////// CREATE
router.post('/', async (req, res) => {
  try {
    console.log(' hits the post route', req.session.userId);

    const findUser = User.findById(req.session.userId);
    const createEvent = Event.create(req.body);
    const [foundUser, createdEvent] = await Promise.all([findUser, createEvent]);
		console.log(foundUser, ' this is foundUser at CREATE route');
    console.log(createdEvent, ' this is createdEvent at CREATE route');

    foundUser.hostedEvents.push(createdEvent);
    await foundUser.save();

      res.redirect('/events');

      } catch (err) {
        console.log(req.body);
        res.send(err, ' not creating a post');
  }
});

// INDEX
router.get('/', async (req, res, err) => {
  try {
    console.log('hits index route!')
    const foundEvents = await Event.find();
    res.render('./home.ejs', {
      events: foundEvents,
    });

  } catch (err) {
    res.send(err, ' error for index route')
  }
});

////New
router.get('/new', (req, res) => {
		res.render('events/new.ejs', {
      username: req.session.username,
		});
});



/// SHOW
router.get('/:id', async (req, res, next) => {
  try {
    console.log('hits the show page');
    const foundEvent = await Event.findById(req.params.id);
    res.render('events/show.ejs', {
      event: foundEvent,
    });
  } catch (err) {
    res.send(err, ' error for show route');
  }
});

///// EDIT
router.get('/:id/edit', async (req, res) => {
  try {
    console.log('hits the edit page')
    const foundEvent = await Event.findById(req.params.id);
    res.render('events/edit.ejs', {
      event: foundEvent,
    });
  } catch (err) {
    res.send(err, ' error for edit route');
  }
});


/////// PUT = UPDATE
router.put('/:id', async (req, res) => {
  try {
    console.log('hits the update page');
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.redirect('/events')
  } catch (err) {
    res.send(err, ' error for update route');
  }
});


// DELETE AN AUTHOR DELETE THE ASSOCIATED ARTICLES
router.delete('/:id', async (req, res) => {
  try {
    console.log('hits the delete in index')
    const deletedEvent = await Event.findByIdAndRemove(req.params.id);
    res.redirect('/events')
  } catch (err) {
    console.log(err, ' not deleting');
    res.send(err, ' not deleting');
  }
});


module.exports = router;
