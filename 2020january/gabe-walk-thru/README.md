1. git init
2. code README.md
3. Save the README.md file
4. npm init
5. npm install express mongoose nodemon
6. Create an app.js file --> Add the code to create server and connect mongoose atlas
//  
const express = require('express'),
mongoose = require('mongoose'),
app = express();


app.get('/', (req, res) => {
    console.log('Connected')
    res.send('Root route')
})

