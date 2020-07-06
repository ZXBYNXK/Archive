//Darius Rain
//File: app.js



 //Under here i imported all the required dependencies for which I installed see package.json
 const express = require('express'),
 mongoose = require('mongoose'),
 cors = require('cors'),
 //path = require('path'),
 port = process.env.PORT || 3000,
 rootRoute = express(),


 //Added external routes below here
 postsRoute = require('./routes_dynamic/posts');
 
 //Added external routes above here

 //require('dotenv/config');


//Get requests

rootRoute.get('/', (req, res) => {
    
    res.sendStatus(200).json({
        message: 'On root route'
    })
  
});
 //Middleware
 
rootRoute.use(cors())
 rootRoute.use(express.json());
 rootRoute.use(express.static('client'))
 rootRoute.use('/posts', postsRoute);
 








//Functions 


function isValid(postRequest) {
    return postRequest.name && postRequest.name.toString().trim() != '' &&  postRequest.content && postRequest.content.toString().trim()
}







//Mongoose connection

 mongoose.connect(
     'mongodb://127.0.0.1:27017/rest-test-3-db',
     { useNewUrlParser: true, useUnifiedTopology: true}
     )
     .then(() => {
         console.log(`Connected to database `)
     }).catch(error => console.error(error))

 rootRoute.listen(port, () => {
     console.log(`Listening on ${port}`)
 })


