import React from 'React';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

class Tasks extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <div className="Orders">
                    <p>Choose HERE : 
                        <select placeholder="WORKERS NAMES">
                            <option>Name1</option>
                            <option>Name2</option>
                            <option>Name3</option>
                            <option>-- Select ALL -- </option>
                        </select>
                    </p>
                    <p>DO WHAT ?
                        <input type="text" placeholder="TODO"></input>
                    </p>
                </div>
                <div>
                    <p>EMPTY DIV HERE</p>
                </div>
            </div>
        )
    }
}

export default Tasks;