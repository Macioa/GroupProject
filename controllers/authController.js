const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const User = require('../models/user');
const bcrypt = require('bcrypt');
console.log(chalk.green('authController connected'));



//GET LOGIN & REGISTER PAGE
router.get('/login', (req, res) => {
  res.render('login.ejs', {
    message: req.session.message
  });
})


//LOGIN FORM
router.post('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if (user) {
      console.log(chalk.green(user));
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.username = user.username;
        req.session.loggedIn = true;
        res.redirect(`/user/${user._id}/profile`);
        console.log(chalk.blue('user is good to go!'))
        console.log(chalk.red(req.session));
      } else {
        req.session.message = 'password is incorrect';
        res.redirect('/auth/login')
        console.log(user)
      }
    } else {
      console.log('no username found');
      req.session.message = 'Username is incorrect;'
      res.redirect('/auth/login')
      console.log(user)
    }
  })
})


//REGISTER FORM
router.post('/register', async (req, res, next) => {
    console.log(chalk.green('route hit'))
      // hash the pw
      const password = req.body.password;
      const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

      // userDbEntry is an object for our db entry;
      const userDbEntry = {};
      userDbEntry.username = req.body.username;
      userDbEntry.password = passwordHash;
      console.log(passwordHash);
      console.log(chalk.green('asdf'))
      // password into databse
      console.log(userDbEntry)
      let user = await User.create(userDbEntry, (err, user) => {
        if (err) {
          console.error(err)
}
        else  {
          console.log(chalk.blue(user))
          // session set up
          req.session.username = user.username;
          req.session.loggedIn = true;
        res.redirect(`/user/${user._id}/profile`);
      }
       })
    });


//LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(chalk.red('error destroying session'));
      res.send('error destroying session');
    } else {
      console.log(chalk.blue('redirects correctly'));
      res.redirect('/events');
    }
  })
})



      module.exports = router;
