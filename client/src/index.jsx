import React from 'react' 
import ReactDOM from 'react-dom'
import Home from './components/Home.jsx'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <Home/>
    }
}
export default App


ReactDOM.render(<App/> , document.getElementById('app'))
