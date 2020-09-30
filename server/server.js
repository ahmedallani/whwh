const express = require("express");
const bodyParser = require("body-parser");
const User = require("../database/user.js");
const Company = require("../database/Company.js");
const Name = require("../database/name.js");
const Chat = require("../database/chatschema.js");

const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendm", (req, res) => {
  console.log(req.body.msg);
  var obj = { msg: req.body.msg };
  const newM = new Chat(obj);
  newM.save((err, result) => {
    res.send(result);
  });
});

app.get("/getall", function (req, res) {
  User.find({}, function (error, result) {
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
  const newUser = new User(obj);
  newUser.save((err, result) => {
    res.send(result);
  });
});
app.post("/postC", (req, res) => {
  // console.log(req.body);

  const obj = {
    name: req.body.nameC,
    password: req.body.PasswordC,
    imageUrl: req.body.imageC,
    key: req.body.keyC,
    todos: [
      {
        name: "",
        todo: "",
      },
    ],

    type: "company",
  };
  console.log(obj);
  const newCompany = new Company(obj);
  newCompany.save((err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  var newName = Object.keys(req.body)[0];
  Name.updateOne({ key: "abc" }, { $set: { hashem: newName } }, function (
    err,
    result
  ) {
    if (err) console.log(err);
  });
});

app.get("/getmsg", function (req, res) {
  Chat.find({}, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  });
});

app.post("/pushTodo", (req, res) => {
  console.log(req.body.todo);
  Name.find({}, function (err, result) {
    // console.log('this is === > ', result[0].hashem)
    User.updateOne(
      { name: result[0].hashem },
      { $push: { myToDoList: req.body.todo } },
      function (err, result) {
        if (err) console.log(err);
      }
    );
  });
});

app.get("/getfr", (req, res) => {
  Name.find({ key: "abc" }, function (err, data) {
    User.find({ name: data[0].hashem }, function (err, result) {
      User.find({ key: result[0].key }, function (err, ndata) {
        res.send(ndata);
      });
    });
  });
});

app.post("/SEND", (req, res) => {
  console.log(req.body);
  var iSend = "from " + req.body.myname + " : " + req.body.tosend;
  User.updateOne(
    { name: req.body.friend },
    { $push: { myToDoList: iSend } },
    function (err, result) {
      if (err) console.log(err);
    }
  );
});

app.get("/getuser", (req, res) => {
  Name.find({ key: "abc" }, function (err, data) {
    User.find({ name: data[0].hashem }, function (err, result) {
      res.send(result);
    });
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
