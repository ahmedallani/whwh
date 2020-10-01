const mongoose = require("mongoose");
const db = require('./connect.js');
mongoose.Promise = global.Promise;
// __put schema for todo list
// __cheak this link for relations
// __ https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm
// __hash password
const UserSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    imageUrl: String,
    key: String,
    myToDoList: [],
    companyToDoList: [],
    type: String
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

