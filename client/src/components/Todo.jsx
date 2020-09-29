import React from 'React';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import axios from "axios";

class Todo extends React.Component {
    constructor (props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <div className="myTodo">
                    <p>WHAT I DO TODAY ??</p><br/><input type="text" placeholder="my Todo"></input>
                    <button value="TodoButton">APPLY</button>
                </div>
                <div className="todoList">
                    <h1>EMPTY LIST HERE</h1>
                </div>
                <div className="friendAdd">
                    Choose HERE : 
                        <select placeholder="Choose your friend" className="friendList">
                            <option>Friend1</option>
                            <option>Friend2</option>
                            <option>Friend3</option>
                            <option>--- Select ALL --- </option>
                        </select>
                        <br/>
                        <br/>
                        <br/>
                     WHAT YOU WANT YOUR FRIEND TO DO :
                        <input type="text" className="friendList"></input>
                    <button>GET HIM!</button>
                </div>
            </div>
        )
    }
}

export default Todo;