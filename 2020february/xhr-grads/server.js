//Server.js Main file
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const gradRoute = require('./routes/graduates')

const PORT = 3000;


app.use(cors())
app.use(express.json())
app.use("/", express.static("public"))


app.use('/api/graduates', gradRoute);







const db = mongoose.connection;

db.on('error', err => {
    return console.error(error)
})
db.once('open', open => {
    return console.log('Connected to databse.')
})

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
