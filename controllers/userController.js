const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const User = require('../models/user')

//console.log(chalk.green('userController connected'));

//router.get('/',(req, res)=>{res.send('user!')})

//GET THE USER'S PROFILE PAGE.
router.get('/:id/profile', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
      console.log(chalk.green(`id match ${foundUser}`));
        //it was show.ejs but that didn't match the ejs name
        res.render('users/profile.ejs', {
            user: foundUser, //foundUser is what findById is referring to.
            hostedEvents: foundUser.hostedEvents, //Cannot read property 'hostedEvents' of undefined. needs to find hostedEvents to a user. The overall problem is it's not finding the user in foundUser
            //
            // attendedEvents: foundUser.attendedEvents,
            // username: req.session.username
          })
        })
    })



  //GET THE USER'S EDIT PAGE.
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    res.render('partials/auth/edit.ejs', {
      user: foundUser
    });
  });
});

  //UPDATE THE USER'S EDIT PAGE.
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }, (err, updatedUser) => {
    console.log(`Updated user: ${updatedUser}`);
    res.redirect('/events')
  });
});


// DELETE USER
// router.delete('/:id', (req, res) => {
//       User.findByIdAndRemove(req.params.id, (err, deletedAuthor) => {
//         User.remove({
//           _id
//         })
//         res.redirect('/')
//       })





module.exports = router;
