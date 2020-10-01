const db = require("./connect.js");
const User = require("./User.js"); // __you import user instead  of User
const Company = require("./Company.js")
const Chat = require("./chatschema.js")

const sampleUser = [
    {
        name: "wala",
        password: "12345",
        imageUrl: "https://i.pinimg.com/originals/2e/f5/38/2ef538b144db555f8dcd4bbc34c17e84.jpg",
        key: "azerty123",
        myToDoList: ["heloç"],
        companyToDoList: [],
        type: "user",
        
    }
];
const samplechat = [
  {
      msg: "this is message from data base "
  } 
];
const sampleCompany = [
    {
        name: "whwh",
        password: "whwh1",
        imageUrl: "",
        key: "azerty123",
        // __another reason why name must be unique
        todos: [
          {
            name: "wala",
            todo: "join the meeting at 8am",
          },
        ],
        type: "company",
      },
];
const insertSampleChat= function() {
  Chat.create(samplechat)
    .then(() =>console.log("Chat test"));
};
const insertSampleUser= function() {
  User.create(sampleUser)
    .then(() =>console.log("user test"));
};
const insertSampleCompany = function () {
    Company.create(sampleCompany)
    .then(() => console.log("company test ") )
}
insertSampleChat()
insertSampleUser();
insertSampleCompany();
