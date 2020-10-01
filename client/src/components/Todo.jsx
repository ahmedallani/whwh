import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import axios from "axios";

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            array : []
        }
        this.componen = this.componen.bind(this)
    }
    componen() {
        $.ajax({
          url: `/getall`,
          type: "get",
          success: (res) => {
            this.setState({ array: res });
          },
        });
      }
      componentWillMount() {
        this.componen();
      }
    
    render() {
        var users = []
        for(var i = 0 ; i < this.state.array.length ; i++){
        users.push(<option key={i}>{this.state.array[i].name} </option>)
        }
        return (
            <div>
                <div className="myTodo">
                    <p>WHAT I DO TODAY ??<input type="text" placeholder="my Todo"></input></p>
                    <button value="TodoButton">APPLY</button>
                </div>
                <div className="todoList">
                    <h1>EMPTY LIST HERE</h1>
                </div>
                <div className="friendAdd">
                    <p>Choose HERE : 
                        <select placeholder="Choose your friend" className="friendList">
                            {users}
                            <option>--- Select ALL --- </option>
                        </select>
                    </p> WHAT YOU WANT YOUR FRIEND TO DO :
                        <input type="text" className="friendList"></input>
                    <button>GET HIM!</button>
                </div>
            </div>
        )
    }
}

export default Todo;
