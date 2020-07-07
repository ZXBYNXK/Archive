//Darius Rain
//File: app.js
/*
In this file i will configure the server, import routes and connect to my sandboxed mongo databse
*/

//Import all dependencies from package.json here using the following syntax
// ~> ' const <variableName> = require('<dependency>') '
// ~~> Use the above syntax to import any depenency you wish too use for your node application.

 

 const express = require('express'),
 mongoose = require('mongoose'),
 cors = require('cors'),
 path = require('path'),
 port = process.env.PORT || 3000,
 rootRoute = express(),




 //Added external routes below here
 postsRoute = require('./routes_dynamic/posts');
 
 //Added external routes above here





 // This is to access the '.env' file to use any enviroment variable you may have set in there.
 // In this case I will have an enviroment variable with an assigned value of the link to my db connection link,
 //which contains my username in password 
 //-->NOTE: YOU WILL HAFT TO ADD YOUR OWN USERNAME AND PASSWORD TO THE '.env' file YOU CLONED THIS REPO FROM GIT!

 
 
 require('dotenv/config');





 //Use body parser as middleware so all data is parsed in the JSON format no matter if it is in javascript notation only. 
 //Anthing with the following syntax is middleware
 //~> <routevariablename>.use(callback function)
//Get requests

rootRoute.get('/', (req, res) => {

    res.sendStatus(200)
  
});
 //Middleware
 
rootRoute.use(cors)
 rootRoute.use(express.json());
 rootRoute.use('/posts', postsRoute);
 







//Mongoose connection

 mongoose.connect(
     process.env.DATABASE_SOURCE,
     { useNewUrlParser: true, useUnifiedTopology: true}
     )
     .then(() => {
         console.log(`Connected to database `)
     }).catch(error => console.error(error))

 rootRoute.listen(port, () => {
     console.log(`Listening on ${port}`)
 })

