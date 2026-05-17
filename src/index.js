const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoURL = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`;

mongoose.connect(mongoURL)
  .then(() => console.log("Nawiązano połączenie z MongoDB."))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Działa Docker + MongoDB");
});

app.listen(3000, () => {
  console.log("Serwer działa na porcie 3000");
});