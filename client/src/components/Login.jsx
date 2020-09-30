import React from 'react'
import Signe from './Signe.jsx'
import { Link, link } from 'react-router-dom'
import axios from 'axios'
class Login extends React.Component{
    constructor(props){
       super(props)
        this.state={
            name:'',
            password:'',
            array:[] , 
            boli : false ,
            oboli : false 
        }
        this.sign = this.sign.bind(this)
        this.fetch=this.fetch.bind(this)
        this.hashCode=this.hashCode.bind(this)
      
    }
    sign(){
        var bol = !this.state.boli
        this.setState({boli : bol})
    }
    hashCode(str) {
        var hash = 0;
        if (str.length == 0) {
            return hash;
        }
        for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; 
        }
        return hash;
    }
    takeName(e){
        this.setState({name:e.target.value})
        console.log(this.state.name)
    }
    takePassword(e){
        this.setState({password:e.target.value})
        console.log(this.state.password)

    }
   async  fetch() {
       const allData= await fetch('/getall')
       let array= await allData.json();
       this.setState({array})
       console.log(this.state.array)
      
      }
      componentWillMount() {
        this.fetch();
      }

    check(){
    
       const {name,password,array}=this.state
     
       const Password=this.hashCode(password)
       var count=0;
        for(var i=0;i<array.length;i++){
            if(array[i].name===name && array[i].password==Password){
                axios.post('/update' , name )
                count++
                var bol = !this.state.oboli
                this.setState({oboli : bol})
            }
        }
        if(!count){
            alert('false'); 
        }
    }

    render(){
          
        return (
           <div  className="loginBox">{!this.state.boli ?
               <div>
                   { !this.state.oboli ?
                <div>
                <label>Enter the name</label><br></br>
                <input type="name" onChange={this.takeName.bind(this)} /><br></br>
                <label></label>Enter password<br></br>
                <input type="new-password" onChange={this.takePassword.bind(this)} /><br></br>
                <button onClick={this.check.bind(this)}>login</button>
                <p>if you dont have an acount <a onClick={this.sign}>sign up</a></p>
                </div> : <NewNav/>}
                </div> : <Signe/> }
                </div>
             

        )
    }
}

function NewNav(){
        return  <div className="nav-bar"> 
        <nav>
        <a className="logo" href="#"> logo</a>
        <ul className="nav">
        <Link to="/home">
               <li><a>Home</a></li>
            </Link>
            <Link to="/todo">
               <li ><a>Todo</a></li>
            </Link>
            <Link to="/chat">
               <li><a>chat</a></li>
            </Link>
        </ul>
    </nav>
    </div>
}
export default Login;