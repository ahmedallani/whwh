import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <div className="chatArea">
                    YOUR MESSAGES HEREe
                </div>
                <div className="chatText">
                <textarea></textarea>
                <button value="Send">Send</button>
                </div>
            </div>
        )
        }
}

export default Chat;