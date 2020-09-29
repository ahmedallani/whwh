const express = require("express");
const bodyParser = require("body-parser");
const User = require("../database/user.js");


const app = express();
const PORT = 3000;
const path = require("path");
const { result } = require("underscore");
app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getall' , function(req , res){
  User.find({},function(error , result ){
      if(error) console.log(error)
      res.send(result)
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});