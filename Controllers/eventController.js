const express = require('express');
router = express.Router();
const chalk = require('chalk');

//console.log(chalk.green('eventController connected'));

router.get('/new', (req, res)=>{
    res.render('events/new.ejs')
})

router.get('/', (req, res)=>{
    res.render('home.ejs')
})

router.get('/:id', (req, res)=>{
    res.render('events/show.ejs', {
//        user:user,
//        event:event
    })
})

router.get('/:id/edit', (req, res)=>{
    res.render('events/edit.ejs', {
//       event: event,
//        user: user
    })
})



module.exports=router;