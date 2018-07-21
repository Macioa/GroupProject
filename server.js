const port = 4000
//npm install express nodemon chalk method-override body-parser mongodb mongoose

const chalk = require('chalk');

const express = require('express');
const app = express();


app.listen(port, ()=>{
    console.log(chalk.green("What's up? ")+chalk.grey(`Listening on port ${port}`))
});