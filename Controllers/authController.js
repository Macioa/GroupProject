const express = require('express');
router = express.Router();
const chalk = require('chalk');

//console.log(chalk.green('authController connected'));

//login and register page
router.get('/login', (req, res)=>{
    res.render('/auth/login.ejs')
})

//create a new user
router.post('/create',(req, res)=>{

})


module.exports = router;