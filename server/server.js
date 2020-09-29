const express = require("express");
const bodyParser = require("body-parser");
const User = require("../database/user.js");
const Company=require("../database/Company.js");


const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getall' , function(req , res){
  User.find({},function(error , result ){
      if(error) console.log(error)
      res.send(result)
  })
})
app.post('/post',(req,res)=>{
  // console.log(req.body);
  
  const obj={
    name:req.body.name,
    password:req.body.Password,
    imageUrl:req.body.image,
    key:req.body.key,
    myToDoList:[],
    companyToDoList:[],
    type:'user'
  }
  console.log(obj)
const newUser= new User(obj)
newUser.save((err,result)=>{
  res.send(result)
})
  
})
app.post('/postC',(req,res)=>{
  // console.log(req.body);
  
  const obj={
    name:req.body.nameC,
    password:req.body.PasswordC,
    imageUrl:req.body.imageC,
    key:req.body.keyC,
    todos:[{
      name:'',
      todo:''
    }],
   
    
    type:'company'
  }
  console.log(obj)
const newCompany= new Company(obj)
newCompany.save((err,result)=>{
  res.send(result)
})
  
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});