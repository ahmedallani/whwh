const express = require("express");
const bodyParser = require("body-parser");
const User = require("../database/User.js");
// __add Company module
const Company = require("../database/Company.js");

const app = express();
const PORT = 3000;
const path = require("path");
const { result } = require("underscore");
app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// __you should special prefix in the route of api and the name of module
// __like /getall => /api/users/getall 
app.get("/getall", function(req, res) {
  User.find({}, function(error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  });
});
app.post("/post", (req, res) => {
  // console.log(req.body);

  const obj = {
    name: req.body.name,
    password: req.body.Password,
    imageUrl: req.body.image,
    key: req.body.key,
    myToDoList: [],
    companyToDoList: [],
    type: "user",
  };
  
  console.log(obj);
  // __dealing with database should be in other file
  // __you need to make unique property like username
  // __and check if user already exist
  const newUser = new User(obj);
  newUser.save((err, result) => {
    res.send(result);
  });
});
app.post("/postC", (req, res) => {
  // console.log(req.body);
 // __why you add C at the end of property
  const obj = {
    name: req.body.name,
    password: req.body.Password,
    imageUrl: req.body.imageUrl,
    key: req.body.key,
    todos: req.body.todos,
    type: req.body.company
  };
  console.log(obj);
  // __name should be unique
  const newCompany = new Company(obj);
  newCompany.save((err, result) => {
    res.send(result);
  });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
