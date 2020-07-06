require('dotenv').config();


const express = require('express'),
mongoose = require('mongoose'),
app = express(),
postsRoute = require('./routes/posts')
port = process.env.PORT;



let root_visits = 0,
cdevs_visits = 0;

app.use('/posts', postsRoute)

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
