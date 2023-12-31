const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.send("hello i am live");
});

app.get("/services", (req, res) => {
  // Use res.json() instead of res.send() for sending JSON data
  res.json(apiData);
});

app.listen(port, () => {
  console.log("i am live again");
});
