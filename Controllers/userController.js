const express = require('express');
router = express.Router();
const chalk = require('chalk');

//console.log(chalk.green('userController connected'));


router.get('/:id/profile', (req, res)=>{
    res.render('users/show.ejs', {
 //   user:user,
 //   hostedEvents:hostedEvents,
 //   attendedEvents:attendedEvents
    })
})

router.get('/:id/edit', (req,res)=>{
    res.render('/partials/auth/edit.ejs', {
        //user:user
    })
})

router.put('/:id', (req, res)=>{
// edit user account
})



module.exports=router;