const express = require("express");
const bodyParser = require("body-parser");
const { rmSync } = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var result = num1 + num2;
  console.log(result);
  res.sendFile(__dirname + "/index.html");
});
app.listen(3000, (req, res) => {
  console.log("SERVER STARTED");
});
