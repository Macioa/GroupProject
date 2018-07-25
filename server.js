//npm install express nodemon chalk method-override body-parser mongodb mongoose ejs helmet heroku foreman express-session bcrypt
//node server
var config = require('./config');

const chalk = require('chalk');

const express = require('express');
const app = express();
const session = require('express-session');


var mongoose = require('./db/db')
mongoose = mongoose(`mongodb+srv://${config.dbUser}:${config.dbPass}@cluster0-s0zvo.gcp.mongodb.net/test?retryWrites=true`);




//         Middleware

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyparser = require('body-parser');
app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( {extended: false} ));

const helmet = require('helmet')
app.use( helmet() );


app.use(session({
  secret: 'this is a random secret string that you make up',
  resave: false,
  saveUninitialized: false
}))


//         Controllers
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const eventController = require('./controllers/eventController');

app.use('/user', userController)
app.use('/auth', authController)
app.use('/events', eventController)

//         Default pages

app.get(['/home','/'], (req, res, next)=>{
    next();
    res.redirect('/events');
})

app.get('/login', (req, res, next)=>{
    next();
    res.redirect('/auth/login');
})

app.get('/about', (req, res)=>{
    res.render('./about.ejs')
})

app.get('*', (req, res)=>{
    res.render('./404.ejs');
    console.error(chalk.red('Invalid path request: ')+chalk.grey(req.originalUrl))
})


var port = process.env.PORT||config.port;
app.listen(port, ()=>{
    console.log();
    console.log(chalk.green("What's up? ")+chalk.grey(`Listening on port ${port}`))
});
