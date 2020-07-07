//Darius Rain
//File: User.js
/*
Create a user model for mongoDB Atlas to hold in a cluster
*/

//Source: https://thinkster.io/tutorials/node-json-api/creating-the-user-model


const mongoose = require('mongoose'),
userSchema = mongoose.Schema({

        username: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        dateOfSignUp: {
            type: Date,
            default: Date.now
        }
        
})


/*

The {timestamps: true} option creates a createdAt and updatedAt field on our models that contain timestamps which will get automatically updated when our model changes.



*/ 

module.exports = mongoose.model('User', userSchema);


/*
module.exports = mongoose.model('User', UserSchema); 
This Registers the schema with mongoose. The user model can then be accessed by in any file in our application by assigning in another module -> 
const User = require('../models/User') ~> Or what ever path that schema is located
*/