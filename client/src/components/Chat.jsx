import React from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            msg : "" , 
        }
        this.send = this.send.bind(this)
        this.handlechange = this.handlechange.bind(this)
    }
    send(){
        axios.post("/sendm", this.state)
    }
    handlechange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    render(){
        return (
            <div>
                <div className="chatArea">
                    YOUR MESSAGES HEREe
                </div>
                <div className="chatText">
                <textarea name="msg" onChange={this.handlechange}></textarea>
                <button value="Send" onClick={this.send}>Send</button>
                </div>
            </div>
        )
        }
}

export default Chat;