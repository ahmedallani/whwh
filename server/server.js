const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const PORT = 3000;
const path = require("path");
const { userInfo } = require("os");
app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  app.get('/user', function (req, res) {
    // I put User as default you can change the name of the database
    User.find({}, (err, data) => {
        if (err) {
            console.log(err)
          }
        res.send(data)
        console.log(data)
    })

});
  