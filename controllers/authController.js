const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const User = require('../models/user');
const bcrypt = require('bcrypt');
console.log(chalk.green('authController connected'));


//LOGIN FORM
router.post('/auth/login', (req, res) => {
  User.findOne({username: reg.body.username}, (err, user) => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.username = user.username;
        req.session.loggedIn = true;
        res.redirect('/articles')
      } else {
        req.session.message = 'password is incorrect';
        res.redirect('/login')
      }
    } else {
      console.log('no username found');
      req.session.message = 'Username is incorrect;'
      res.redirect('/login')
    }
  })
})


//REGISTER FORM
router.post('/auth/login', (req, res, next) => {

      // hash the pw
      const password = req.body.password;
      const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

      // userDbEntry is an object for our db entry;
      const userDbEntry = {};
      userDbEntry.username = req.body.username;
      userDbEntry.password = passwordHash;
      console.log(passwordHash);

      // password into databse
      User.create(userDbEntry, (err, user) => {
        console.log(user)

        // session set up
        req.session.username = user.username;
        req.session.loggedIn = true;
        res.redirect('/login')
      })
      });


          //GET LOGIN & REGISTER PAGE
          router.get('/auth/login', (req, res) => {
            res.render('/LogIn.ejs', {
              message: req.session.message
            });
          })


      module.exports = router;



  
