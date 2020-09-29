import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            array : []
        }
        this.componen = this.componen.bind(this)
    }
    componen() {
        $.ajax({
          url: `/getfriends`,
          type: "get",
          success: (res) => {
            this.setState({ array: res });
          },
        });
      }
      componentWillMount() {
        this.componen();
      }
    render(){
        return <h1>HELLO WORLDDDD</h1>
    }
}
export default Home