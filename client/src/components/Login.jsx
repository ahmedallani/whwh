import React from 'react'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:'',
            array:[]
        }
        this.fetch=this.fetch.bind(this)
        this.hashCode=this.hashCode.bind(this)
      
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
       console.log('this is password ======>',Password)
       console.log('this is 7atta chey========>',array[10].password)
       console.log('this is name ======>',name)
       console.log('this is 7atta name========>',array[10].name)
       var count=0;
        for(var i=0;i<array.length;i++){
            if(array[i].name===name && array[i].password==Password){
                

                alert('true');
                count++
            }
        }
        if(!count){
            alert('false'); 
        }
    }

    render(){
          
        return (
           <div>
                <label>Enter the name</label><br></br>
                <input type="name" onChange={this.takeName.bind(this)} /><br></br>
                <label></label>Enter password<br></br>
                <input type="new-password" onChange={this.takePassword.bind(this)} /><br></br>
                <button onClick={this.check.bind(this)}>login</button>
                </div>


        )
    }
}

export default Login;