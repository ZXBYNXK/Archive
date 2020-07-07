//Darius Rain
//File: index.js
//From: Mosh Tutorial

const express = require("express"),
  app = express(),
  port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Root route of API",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
