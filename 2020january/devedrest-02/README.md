Express REST API application using Node.js
Created by: Darius Rain

git init

code README.md

git add -A

git commit -m 'Initial Commit'

npm init -y //Creates a package.json file that holds an overview of your application.

npm install express nodemon //Installs dependencies that I will use throught my application
//npm is like the app store for node.js applications!
//After npm install command runs, it creates a node_modules directory.

code app.js
//This file will hold the configurations for the server using Express.js .
require('dotenv/config');

const express = require('express'),
mongoose = require('mongoose'),
app = express(),
port = process.env.PORT;

let root_visits = 0,
cdevs_visits = 0;

app.get('/', (req, res) => {
  
 res.json({
"message": "Welecome to root the root route of my web server."
})
console.log(`Visited '/' root route ${++root_visits} time(s)!!!`)
})

app.get('/careerdevs', (req, res) => {
res.json({
"message": "On Careerdevs Route!"
})
console.log(`Visited '/careerdevs' careerdevs route ${++cdevs_visits} time(s)!!!`)

})

mongoose.connect(
process.env.DBCONNECTION,
{useNewUrlParser: true, useUnifiedTopology: true},
() => {
console.log('Connected to Database')
}
)

app.listen(port, () => {
console.log(`Listening on ${port}`)
})

//Homework Explain the above commands
