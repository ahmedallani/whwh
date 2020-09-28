const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const PORT = 3000;
const path = require("path");
app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  