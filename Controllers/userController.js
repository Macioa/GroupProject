const express = require('express');
router = express.Router();
const chalk = require('chalk');

//console.log(chalk.green('userController connected'));


router.get('/:id/profile', (req, res)=>{
    res.render('users/show.ejs', {
    user:user,
    hostedEvents:hostedEvents,
    attendedEvents:attendedEvents
    })
})

module.exports=router;