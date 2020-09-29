import React from 'react'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            password:'',
            data:''
        }
      
    }
    takeName(e){
        this.setState({name:e.target.value})
        console.log(this.state.name)
    }
    takePassword(e){
        this.setState({password:e.target.value})
        console.log(this.state.password)

    }
    async componentDidMount(){
    const allData= await fetch('/data')
    let data= await allData.json();
   this.setState({data});
    }

    check(){
       const {name,password,data}=this.state
        for(var i=0;i<data.length;i++){
            if(data[i].name===name && data[i].password===password){
                alert('true');
            }
        }
    }

    render(){
        return (
           <div>
                <label>Enter the name</label><br></br>
                <input type="name" onChange={this.takeName.bind(this)} /><br></br>
                <label></label>Enter password<br></br>
                <input type="new-password" onChange={this.takePassword.bind(this)} /><br></br>
                <button onClick={this.check.bind(this)}></button>
                </div>


        )
    }
}

export default Login;