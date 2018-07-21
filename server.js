//npm install express nodemon chalk method-override body-parser mongodb mongoose

const port = 4000
const dbLocation = 'mongodb://localhost/whatsupalpha'

const chalk = require('chalk');

const express = require('express');
const app = express();

var mongoose = require('./Db/db')
mongoose = mongoose(dbLocation);


app.listen(port, ()=>{
    console.log(chalk.green("What's up? ")+chalk.grey(`Listening on port ${port}`))
});