const db = require("./connect.js");
const User = require("./user.js");
const Company = require("./company.js")

const sampleUser = [
    {
        name: "wala",
        password: "1234",
        imageUrl: "https://i.pinimg.com/originals/2e/f5/38/2ef538b144db555f8dcd4bbc34c17e84.jpg",
        key: "azerty123",
        myToDoList: ["heloç"],
        companyToDoList: [],
        type: "user",
        
    }
];

const sampleCompany = [
    {
        name: "whwh",
        password: "whwh1",
        imageUrl: "",
        key: "azerty123",
        todos: [
          {
            name: "wala",
            todo: "join the meeting at 8am",
          },
        ],
        type: "company",
      },
];

const insertSampleUser= function() {
  User.create(sampleUser)
    .then(() =>console.log("user test"));
};
const insertSampleCompany = function () {
    Company.create(sampleCompany)
    .then(() => console.log("company test ") )
}

insertSampleUser();
insertSampleCompany();
