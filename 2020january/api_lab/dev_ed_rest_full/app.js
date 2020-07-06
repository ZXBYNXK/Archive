//Darius Rain
//File: app.js
/*
In this file i will configure the server, import routes and connect to my sandboxed mongo databse
*/

//Import all dependencies from package.json here using the following syntax
// ~> ' const <variableName> = require('<dependency>') '
// ~~> Use the above syntax to import any depenency you wish too use for your node application.
require('dotenv').config();
 const express = require('express'),
 mongoose = require('mongoose'),
 cors = require('cors'),
 path = require('path'),
 port = process.env.PORT || 3000,
 rootRoute = express(),

 //Import external routes below here
 postsRoute = require('./routes_dynamic/posts');
 
 //Will see external routes in the middle ware 


 // This is to access the '.env' file to use any enviroment variable you may have set in there.
 // In this case I will have an enviroment variable with an assigned value of the link to my db connection link,
 //which contains my username in password 
 //-->NOTE: YOU WILL HAFT TO ADD YOUR OWN USERNAME AND PASSWORD TO THE '.env' file YOU CLONED THIS REPO FROM GIT!
 






 //Use body parser as middleware so all data is parsed in the JSON format no matter if it is in javascript notation only. 
 //Anthing with the following syntax is middleware
 //~> <routevariablename>.use(callback function)
//Get requests




 //Middleware
 rootRoute.use(cors)
 rootRoute.use(express.json());
 //Here is where I will add the external route from 'posts.js' after importing it SEE THE CODE ABOVE.
 rootRoute.use('/posts', postsRoute);
 







 rootRoute.get('/', (req, res) => {

    res.status(200).json({
        message: 'On root route.'
    })
  
});
//Mongoose connection
//Here is where the connection to the database takes place,
//I will be connecting to a local database for this so you will haft to install mongodb community server edition and configure it to do locally
//Other wise you can use local.


mongoose.connect(
    process.env.DATABASE_SOURCE,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('Connected to database')
    }
    )





rootRoute.listen(port, () => {
    console.log(`Listening on ${port}`)
})









