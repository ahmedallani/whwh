import React from 'react' 
import ReactDOM from 'react-dom';
import Chat from './components/Chat.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Tasks from './components/Tasks.jsx';
import Todo from './components/Todo.jsx';

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Chat/>
                <Tasks/>
                <Todo/>
        </div>
        )
    }
}
export default App;


ReactDOM.render(<App/> , document.getElementById('app'))
