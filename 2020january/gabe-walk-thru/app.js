//app.js file


const express = require('express'),
mongoose = require('mongoose'),
app = express(),
port = process.env.PORT || 3000,
postsRoute = require('./routes/posts-route')

require('dotenv/config');

app.use(express.json())
app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    console.log('Connected')
    res.send('Root route')
})







mongoose.connect(
    process.env.DB,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('Connected to Database')
    }

)




app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})


