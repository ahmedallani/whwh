import React from "react";
import axios from "axios";
import { Link, link } from 'react-router-dom';

class Nav extends React.Component { 
    constructor(props){
        super(props)
    }
    render(){
        return (<div className="nav-bar"> 
            <nav>
            <a className="logo" href="#"> logo</a>
            <ul className="nav">
                <Link to="/todo">
                   <li ><a>Todo</a></li>
                </Link>
                <Link to="/">
                   <li><a>Home</a></li>
                </Link>
                <Link to="/chat">
                   <li><a>Chat</a></li>
                </Link>
            </ul>
        </nav>
        </div>)
    }
}


export default Nav