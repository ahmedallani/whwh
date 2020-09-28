var mongoose = require("mongoose");

 mongoose.connect("mongodb://localhost:27017/whwhproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});