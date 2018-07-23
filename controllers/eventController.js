const express = require('express');
router = express.Router();
const chalk = require('chalk');

//console.log(chalk.green('eventController connected'));

router.get('/new', (req, res)=>{
    res.render('./events/new.ejs',{
//        user:user
    })
})

router.post('/', (req, res)=>{
    // create new event
})

router.get('/', (req, res)=>{
    res.render('./home.ejs',{
//        eventList: events
    })
})

router.get('/:id', (req, res)=>{
    res.render('./events/show.ejs', {
//        user:user,
//        event:event
    })
})

router.get('/:id/edit', (req, res)=>{
    res.render('./events/edit.ejs', {
//       event: event,
//        user: user
    })
})

router.put('/:id/edit', (req, res)=>{

})

router.delete('/:id', (req, res)=>{

})

module.exports=router;