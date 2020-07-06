//Darius Rain
//File: app.js
//Description: Add all dependencies and configuration for connection of the server with the database.

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27107';
const dbName = 'crud-app-01';
//const client = new MongoClient(url);



Mongo.connect(url, 
    
    () => {
    assert.equal(null, err);
    console.log('Connected to server');
    const db = client.db(dbName);
    client.close();
    }

)



