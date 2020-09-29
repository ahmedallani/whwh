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
                    <p>WHAT I DO TODAY ??<input type="text" placeholder="my Todo"></input></p>
                    <button value="TodoButton">APPLY</button>
                </div>
                <div>
                    <h1>EMPTY LIST HEREe</h1>
                </div>
                <div>
                    <p>Choose HERE : 
                        <select placeholder="Choose your friend">
                            <option>Friend1</option>
                            <option>Friend2</option>
                            <option>Friend3</option>
                            <option>--- Select ALL --- </option>
                        </select>
                    </p> WHAT YOU WANT YOUR FRIEND TO DO :
                        <input type="text"></input>
                    <button>GET HIM!</button>
                </div>
            </div>
        )
    }
}

export default Todo;