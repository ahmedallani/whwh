const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const CompanySchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    imageUrl: String,
    key: String,// __key not secure enough
    todos: [
      {
        name: String,
        todo: String,
      },
    ],
    type: String,
  },
  {
    timestamps: true,
  }
);


const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
