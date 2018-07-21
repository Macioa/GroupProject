//npm install express nodemon chalk method-override body-parser mongodb mongoose ejs
//node server

const port = 3000
const dbLocation = 'mongodb://localhost/whatsupalpha'

const chalk = require('chalk');

const express = require('express');
const app = express();

var mongoose = require('./Db/db')
mongoose = mongoose(dbLocation);

//         Middleware

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyparser = require('body-parser');
app.use( bodyparser.json() ); 
app.use( bodyparser.urlencoded( {extended: false} ));

//         Controllers

const userController = require('./controllers/userController');
app.use('/user', userController)

const authController = require('./controllers/authController');
app.use('/auth', authController)

const eventController = require('./controllers/eventController');
app.use('/events', eventController)

//         Default pages

app.get(['/home','/'], (req, res)=>{
    res.redirect('/events');
})

app.get('/login', (req, res)=>{
    res.redirect('/auth/login');
})

app.get('*', (req, res)=>{
    res.render('404.ejs');
    console.error(chalk.red('Invalid path request: ')+chalk.grey(req.originalUrl))
})





app.listen(port, ()=>{
    console.log();
    console.log(chalk.green("What's up? ")+chalk.grey(`Listening on port ${port}`))
});