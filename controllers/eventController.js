const express = require('express');
const router = express.Router();
const chalk = require('chalk');
//const User = require('../Models/user');
// const Event = require('../Models/Event');
//const Location = require('../Models/Location');



// INDEX
router.get('/', async (req, res, err) => {
  try {
    console.log('hits index route')
    const foundEvents = await Event.find();
    res.render('Users/Home.ejs', {
      event: foundEvents,
      user: user
    });

  } catch (err) {
    res.send(err, ' error for index route')
  }
});

////New
router.get('/new', (req, res) => {
  res.render('events/New.ejs')
})

/// SHOW
router.get('/:id', async (req, res, next) => {
  try {
    console.log('hits the show page');
    const foundEvent = await Event.findById(req.params.id);
    res.render('Events/Show.ejs', {
      event: foundEvent,
      user: user
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
    res.render('Events/edit.ejs', {
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

//////////// CREATE
router.post('/', async (req, res) => {
  try {
    console.log(' hits the post route');
    const newEvent = await Event.create(req.body);
    res.redirect('/events');
  } catch (err) {
    res.send(err, ' not creating a post');
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
